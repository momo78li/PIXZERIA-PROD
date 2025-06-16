import { users, websiteChecks, contactRequests, blogPosts, type User, type InsertUser, type WebsiteCheck, type InsertWebsiteCheck, type ContactRequest, type InsertContactRequest, type BlogPost, type InsertBlogPost } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createWebsiteCheck(check: InsertWebsiteCheck): Promise<WebsiteCheck>;
  confirmWebsiteCheck(token: string): Promise<WebsiteCheck | undefined>;
  getWebsiteCheckByToken(token: string): Promise<WebsiteCheck | undefined>;
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  confirmContactRequest(token: string): Promise<ContactRequest | undefined>;
  getContactRequestByToken(token: string): Promise<ContactRequest | undefined>;
  getAllWebsiteChecks(): Promise<WebsiteCheck[]>;
  getAllContactRequests(): Promise<ContactRequest[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getAllBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  updateBlogPost(id: number, post: Partial<BlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;
  publishBlogPost(id: number): Promise<BlogPost | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private websiteChecks: Map<number, WebsiteCheck>;
  private contactRequests: Map<number, ContactRequest>;
  private blogPosts: Map<number, BlogPost>;
  private currentUserId: number;
  private currentWebsiteCheckId: number;
  private currentContactRequestId: number;
  private currentBlogPostId: number;

  constructor() {
    this.users = new Map();
    this.websiteChecks = new Map();
    this.contactRequests = new Map();
    this.blogPosts = new Map();
    this.currentUserId = 1;
    this.currentWebsiteCheckId = 1;
    this.currentContactRequestId = 1;
    this.currentBlogPostId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createWebsiteCheck(insertCheck: InsertWebsiteCheck): Promise<WebsiteCheck> {
    const id = this.currentWebsiteCheckId++;
    const confirmationToken = Math.random().toString(36).substring(2) + Date.now().toString(36);
    const check: WebsiteCheck = {
      ...insertCheck,
      id,
      confirmed: false,
      confirmationToken,
      createdAt: new Date(),
    };
    this.websiteChecks.set(id, check);
    return check;
  }

  async confirmWebsiteCheck(token: string): Promise<WebsiteCheck | undefined> {
    for (const [id, check] of this.websiteChecks.entries()) {
      if (check.confirmationToken === token && !check.confirmed) {
        const updatedCheck = { ...check, confirmed: true };
        this.websiteChecks.set(id, updatedCheck);
        return updatedCheck;
      }
    }
    return undefined;
  }

  async getWebsiteCheckByToken(token: string): Promise<WebsiteCheck | undefined> {
    for (const check of this.websiteChecks.values()) {
      if (check.confirmationToken === token) {
        return check;
      }
    }
    return undefined;
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = this.currentContactRequestId++;
    const confirmationToken = Math.random().toString(36).substring(2) + Date.now().toString(36);
    const request: ContactRequest = {
      ...insertRequest,
      id,
      confirmed: false,
      confirmationToken,
      createdAt: new Date(),
    };
    this.contactRequests.set(id, request);
    return request;
  }

  async confirmContactRequest(token: string): Promise<ContactRequest | undefined> {
    for (const [id, request] of this.contactRequests.entries()) {
      if (request.confirmationToken === token && !request.confirmed) {
        const updatedRequest = { ...request, confirmed: true };
        this.contactRequests.set(id, updatedRequest);
        return updatedRequest;
      }
    }
    return undefined;
  }

  async getContactRequestByToken(token: string): Promise<ContactRequest | undefined> {
    for (const request of this.contactRequests.values()) {
      if (request.confirmationToken === token) {
        return request;
      }
    }
    return undefined;
  }

  async getAllWebsiteChecks(): Promise<WebsiteCheck[]> {
    return Array.from(this.websiteChecks.values());
  }

  async getAllContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values());
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const post: BlogPost = { 
      ...insertPost, 
      id,
      published: false,
      publishedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => 
        new Date(b.publishedAt || b.createdAt).getTime() - new Date(a.publishedAt || a.createdAt).getTime()
      );
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async updateBlogPost(id: number, updates: Partial<BlogPost>): Promise<BlogPost | undefined> {
    const post = this.blogPosts.get(id);
    if (!post) return undefined;
    
    const updatedPost = { 
      ...post, 
      ...updates, 
      id, // Ensure ID doesn't change
      updatedAt: new Date() 
    };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  async publishBlogPost(id: number): Promise<BlogPost | undefined> {
    const post = this.blogPosts.get(id);
    if (!post) return undefined;
    
    const publishedPost = { 
      ...post, 
      published: true, 
      publishedAt: new Date(),
      updatedAt: new Date()
    };
    this.blogPosts.set(id, publishedPost);
    return publishedPost;
  }
}

export const storage = new MemStorage();
