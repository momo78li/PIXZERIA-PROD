import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const websiteChecks = pgTable("website_checks", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  email: text("email").notNull(),
  confirmed: boolean("confirmed").default(false),
  confirmationToken: text("confirmation_token"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  message: text("message").notNull(),
  package: text("package"),
  addOns: text("add_ons").array(),
  confirmed: boolean("confirmed").default(false),
  confirmationToken: text("confirmation_token"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  categoryColor: text("category_color").default("bg-pizza-red/10 text-pizza-red"),
  readTime: text("read_time").default("5 Min. Lesezeit"),
  image: text("image"),
  alt: text("alt"),
  published: boolean("published").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertWebsiteCheckSchema = createInsertSchema(websiteChecks).pick({
  url: true,
  email: true,
});

export const insertContactRequestSchema = createInsertSchema(contactRequests).pick({
  name: true,
  email: true,
  company: true,
  message: true,
  package: true,
  addOns: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).pick({
  title: true,
  description: true,
  content: true,
  category: true,
  categoryColor: true,
  readTime: true,
  image: true,
  alt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertWebsiteCheck = z.infer<typeof insertWebsiteCheckSchema>;
export type WebsiteCheck = typeof websiteChecks.$inferSelect;
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
