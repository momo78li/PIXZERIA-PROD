import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
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
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  message: text("message").notNull(),
  package: text("package"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
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
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertWebsiteCheck = z.infer<typeof insertWebsiteCheckSchema>;
export type WebsiteCheck = typeof websiteChecks.$inferSelect;
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;
