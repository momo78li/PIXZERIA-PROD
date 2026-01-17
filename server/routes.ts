import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBlogPostSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Website check endpoint - DEPRECATED (use FormSubmit instead)
  app.post("/api/website-check", async (_req, res) => {
    res.status(410).json({ 
      error: "Diese Route ist nicht mehr aktiv. Bitte nutzen Sie das Formular auf der Website." 
    });
  });

  // Contact request endpoint - DEPRECATED (use FormSubmit instead)
  app.post("/api/contact", async (_req, res) => {
    res.status(410).json({ 
      error: "Diese Route ist nicht mehr aktiv. Bitte nutzen Sie das Formular auf der Website." 
    });
  });

  // Email confirmation endpoint - DEPRECATED
  app.get("/confirm-email", async (_req, res) => {
    res.status(410).send(`
      <html>
        <head><title>Nicht mehr verfügbar</title></head>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
          <h1>Diese Seite ist nicht mehr verfügbar</h1>
          <p><a href="/">Zur Hauptseite</a></p>
        </body>
      </html>
    `);
  });

  // Website check confirmation endpoint - DEPRECATED
  app.get("/confirm-website-check", async (_req, res) => {
    res.status(410).send(`
      <html>
        <head><title>Nicht mehr verfügbar</title></head>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
          <h1>Diese Seite ist nicht mehr verfügbar</h1>
          <p><a href="/">Zur Hauptseite</a></p>
        </body>
      </html>
    `);
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

  // Blog API routes
  
  // Get published blog posts (public)
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getPublishedBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  // Get single blog post (public)
  app.get("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const post = await storage.getBlogPost(id);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      // Only return published posts to public
      if (!post.published) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  // Admin blog routes
  
  // Get all blog posts (admin)
  app.get("/api/admin/blog", async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  // Create blog post (admin)
  app.post("/api/admin/blog", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      console.error('Error creating blog post:', error);
      res.status(400).json({ message: "Invalid blog post data" });
    }
  });

  // Update blog post (admin)
  app.put("/api/admin/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      const post = await storage.updateBlogPost(id, updates);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      console.error('Error updating blog post:', error);
      res.status(500).json({ message: "Failed to update blog post" });
    }
  });

  // Publish blog post (admin)
  app.post("/api/admin/blog/:id/publish", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const post = await storage.publishBlogPost(id);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      console.error('Error publishing blog post:', error);
      res.status(500).json({ message: "Failed to publish blog post" });
    }
  });

  // Delete blog post (admin)
  app.delete("/api/admin/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteBlogPost(id);
      
      if (!deleted) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json({ message: "Blog post deleted successfully" });
    } catch (error) {
      console.error('Error deleting blog post:', error);
      res.status(500).json({ message: "Failed to delete blog post" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
