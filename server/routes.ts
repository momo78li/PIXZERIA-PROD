import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWebsiteCheckSchema, insertContactRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Website check endpoint
  app.post("/api/website-check", async (req, res) => {
    try {
      const validatedData = insertWebsiteCheckSchema.parse(req.body);
      const websiteCheck = await storage.createWebsiteCheck(validatedData);
      res.json({ success: true, id: websiteCheck.id });
    } catch (error) {
      res.status(400).json({ error: "Invalid data provided" });
    }
  });

  // Contact request endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      res.json({ success: true, id: contactRequest.id });
    } catch (error) {
      res.status(400).json({ error: "Invalid data provided" });
    }
  });

  // Get all website checks (for admin purposes)
  app.get("/api/website-checks", async (req, res) => {
    try {
      const checks = await storage.getAllWebsiteChecks();
      res.json(checks);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch website checks" });
    }
  });

  // Get all contact requests (for admin purposes)
  app.get("/api/contact-requests", async (req, res) => {
    try {
      const requests = await storage.getAllContactRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact requests" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
