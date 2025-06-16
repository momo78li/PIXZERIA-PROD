import { users, websiteChecks, contactRequests, type User, type InsertUser, type WebsiteCheck, type InsertWebsiteCheck, type ContactRequest, type InsertContactRequest } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createWebsiteCheck(check: InsertWebsiteCheck): Promise<WebsiteCheck>;
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  confirmContactRequest(token: string): Promise<ContactRequest | undefined>;
  getContactRequestByToken(token: string): Promise<ContactRequest | undefined>;
  getAllWebsiteChecks(): Promise<WebsiteCheck[]>;
  getAllContactRequests(): Promise<ContactRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private websiteChecks: Map<number, WebsiteCheck>;
  private contactRequests: Map<number, ContactRequest>;
  private currentUserId: number;
  private currentWebsiteCheckId: number;
  private currentContactRequestId: number;

  constructor() {
    this.users = new Map();
    this.websiteChecks = new Map();
    this.contactRequests = new Map();
    this.currentUserId = 1;
    this.currentWebsiteCheckId = 1;
    this.currentContactRequestId = 1;
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
    const check: WebsiteCheck = {
      ...insertCheck,
      id,
      createdAt: new Date(),
    };
    this.websiteChecks.set(id, check);
    return check;
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = this.currentContactRequestId++;
    const request: ContactRequest = {
      ...insertRequest,
      id,
      createdAt: new Date(),
    };
    this.contactRequests.set(id, request);
    return request;
  }

  async getAllWebsiteChecks(): Promise<WebsiteCheck[]> {
    return Array.from(this.websiteChecks.values());
  }

  async getAllContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values());
  }
}

export const storage = new MemStorage();
