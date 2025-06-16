import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWebsiteCheckSchema, insertContactRequestSchema, insertBlogPostSchema } from "@shared/schema";
import { sendEmail, createCustomerConfirmationEmail, createBusinessNotificationEmail, createWebsiteCheckConfirmationEmail, createWebsiteCheckNotificationEmail } from "./sendgrid";
import { normalizeUrl, isValidUrl } from "./utils";

export async function registerRoutes(app: Express): Promise<Server> {
  // Website check endpoint
  app.post("/api/website-check", async (req, res) => {
    try {
      // Normalize and validate URL
      const normalizedUrl = normalizeUrl(req.body.url);
      if (!isValidUrl(normalizedUrl)) {
        return res.status(400).json({ error: "Ungültige URL. Bitte geben Sie eine gültige Website-Adresse ein." });
      }

      const validatedData = insertWebsiteCheckSchema.parse({
        ...req.body,
        url: normalizedUrl
      });
      
      const websiteCheck = await storage.createWebsiteCheck(validatedData);
      
      // Send confirmation email to customer
      const confirmationLink = `${req.protocol}://${req.get('host')}/confirm-website-check?token=${websiteCheck.confirmationToken}`;
      const customerEmail = createWebsiteCheckConfirmationEmail(
        websiteCheck.email,
        websiteCheck.url,
        confirmationLink
      );
      
      const emailSent = await sendEmail(customerEmail);
      
      if (emailSent) {
        res.json({ 
          success: true, 
          id: websiteCheck.id,
          message: "Bestätigungs-E-Mail wurde gesendet",
          normalizedUrl: normalizedUrl
        });
      } else {
        res.status(500).json({ 
          error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es erneut." 
        });
      }
    } catch (error) {
      console.error('Website check error:', error);
      res.status(400).json({ error: "Ungültige Daten oder E-Mail-Fehler" });
    }
  });

  // Contact request endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      
      // Send confirmation email to customer
      const confirmationLink = `${req.protocol}://${req.get('host')}/confirm-email?token=${contactRequest.confirmationToken}`;
      const customerEmail = createCustomerConfirmationEmail(
        contactRequest.email,
        contactRequest.package || 'Beratung',
        contactRequest.addOns || [],
        confirmationLink
      );
      
      const emailSent = await sendEmail(customerEmail);
      
      if (emailSent) {
        res.json({ 
          success: true, 
          id: contactRequest.id,
          message: "Bestätigungs-E-Mail wurde gesendet"
        });
      } else {
        res.status(500).json({ 
          error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es erneut." 
        });
      }
    } catch (error) {
      console.error('Contact request error:', error);
      res.status(400).json({ error: "Ungültige Daten oder E-Mail-Fehler" });
    }
  });

  // Email confirmation endpoint
  app.get("/confirm-email", async (req, res) => {
    try {
      const token = req.query.token as string;
      if (!token) {
        return res.status(400).send(`
          <html>
            <head><title>Ungültiger Link</title></head>
            <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
              <h1>❌ Ungültiger Bestätigungslink</h1>
              <p>Der Link ist nicht gültig oder abgelaufen.</p>
            </body>
          </html>
        `);
      }

      const confirmedRequest = await storage.confirmContactRequest(token);
      
      const existingRequest = await storage.getContactRequestByToken(token);
      
      if (confirmedRequest) {
        // Send notification to business
        const businessEmail = createBusinessNotificationEmail(
          confirmedRequest,
          confirmedRequest.package || 'Beratung',
          confirmedRequest.addOns || []
        );
        await sendEmail(businessEmail);
        
        res.send(`
          <html>
            <head>
              <title>E-Mail bestätigt</title>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: linear-gradient(135deg, #B91C1C, #FB923C); color: white; }
                .container { background: white; color: #333; padding: 40px; border-radius: 10px; max-width: 500px; margin: 0 auto; }
                .logo { font-size: 3em; margin-bottom: 20px; }
                .button { display: inline-block; background: #B91C1C; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px 0; }
              </style>
              <script>
                setTimeout(function() {
                  window.location.href = '/';
                }, 5000);
              </script>
            </head>
            <body>
              <div class="container">
                <div class="logo">🍕</div>
                <h1>✅ E-Mail erfolgreich bestätigt!</h1>
                <p>Vielen Dank für Ihre Anfrage bei PIXZERIA.</p>
                <p><strong>Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.</strong></p>
                <p>Ihr gewähltes Paket: <strong>${confirmedRequest.package}</strong></p>
                <hr style="margin: 30px 0;">
                <p><small>Sie werden automatisch in 5 Sekunden zur Hauptseite weitergeleitet...</small></p>
                <a href="/" class="button">Zur Hauptseite</a>
                <hr style="margin: 30px 0;">
                <p><small>PIXZERIA - Webdesign so einfach wie Pizza bestellen</small></p>
              </div>
            </body>
          </html>
        `);
      } else if (existingRequest && existingRequest.confirmed) {
        // Link already used
        res.send(`
          <html>
            <head>
              <title>Bereits bestätigt</title>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: linear-gradient(135deg, #B91C1C, #FB923C); color: white; }
                .container { background: white; color: #333; padding: 40px; border-radius: 10px; max-width: 500px; margin: 0 auto; }
                .logo { font-size: 3em; margin-bottom: 20px; }
                .button { display: inline-block; background: #B91C1C; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px 0; }
              </style>
              <script>
                setTimeout(function() {
                  window.location.href = '/';
                }, 5000);
              </script>
            </head>
            <body>
              <div class="container">
                <div class="logo">🍕</div>
                <h1>✅ E-Mail bereits bestätigt!</h1>
                <p>Ihre Anfrage wurde bereits erfolgreich bestätigt.</p>
                <p><strong>Wir haben Ihre Anfrage erhalten und melden uns bei Ihnen.</strong></p>
                <hr style="margin: 30px 0;">
                <p><small>Sie werden automatisch in 5 Sekunden zur Hauptseite weitergeleitet...</small></p>
                <a href="/" class="button">Zur Hauptseite</a>
                <hr style="margin: 30px 0;">
                <p><small>PIXZERIA - Webdesign so einfach wie Pizza bestellen</small></p>
              </div>
            </body>
          </html>
        `);
      } else {
        res.status(404).send(`
          <html>
            <head>
              <title>Link nicht gefunden</title>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: linear-gradient(135deg, #B91C1C, #FB923C); color: white; }
                .container { background: white; color: #333; padding: 40px; border-radius: 10px; max-width: 500px; margin: 0 auto; }
                .logo { font-size: 3em; margin-bottom: 20px; }
                .button { display: inline-block; background: #B91C1C; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px 0; }
              </style>
              <script>
                setTimeout(function() {
                  window.location.href = '/';
                }, 5000);
              </script>
            </head>
            <body>
              <div class="container">
                <div class="logo">🍕</div>
                <h1>❌ Bestätigungslink nicht gefunden</h1>
                <p>Der Link ist ungültig oder abgelaufen.</p>
                <p>Bitte füllen Sie das Kontaktformular erneut aus.</p>
                <hr style="margin: 30px 0;">
                <p><small>Sie werden automatisch in 5 Sekunden zur Hauptseite weitergeleitet...</small></p>
                <a href="/" class="button">Zur Hauptseite</a>
                <hr style="margin: 30px 0;">
                <p><small>PIXZERIA - Webdesign so einfach wie Pizza bestellen</small></p>
              </div>
            </body>
          </html>
        `);
      }
    } catch (error) {
      console.error('Email confirmation error:', error);
      res.status(500).send(`
        <html>
          <head><title>Fehler</title></head>
          <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
            <h1>❌ Ein Fehler ist aufgetreten</h1>
            <p>Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.</p>
          </body>
        </html>
      `);
    }
  });

  // Website check confirmation endpoint
  app.get("/confirm-website-check", async (req, res) => {
    try {
      const token = req.query.token as string;
      if (!token) {
        return res.status(400).send(`
          <html>
            <head><title>Ungültiger Link</title></head>
            <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
              <h1>❌ Ungültiger Bestätigungslink</h1>
              <p>Der Link ist nicht gültig oder abgelaufen.</p>
            </body>
          </html>
        `);
      }

      const confirmedCheck = await storage.confirmWebsiteCheck(token);
      const existingCheck = await storage.getWebsiteCheckByToken(token);
      
      if (confirmedCheck) {
        // Send notification to business
        const businessEmail = createWebsiteCheckNotificationEmail(confirmedCheck);
        await sendEmail(businessEmail);
        
        res.send(`
          <html>
            <head>
              <title>Website-Analyse bestätigt</title>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: linear-gradient(135deg, #B91C1C, #FB923C); color: white; }
                .container { background: white; color: #333; padding: 40px; border-radius: 10px; max-width: 500px; margin: 0 auto; }
                .logo { font-size: 3em; margin-bottom: 20px; }
                .button { display: inline-block; background: #B91C1C; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px 0; }
              </style>
              <script>
                setTimeout(function() {
                  window.location.href = '/';
                }, 5000);
              </script>
            </head>
            <body>
              <div class="container">
                <div class="logo">🍕</div>
                <h1>✅ Website-Analyse bestätigt!</h1>
                <p>Vielen Dank für Ihr Interesse an PIXZERIA.</p>
                <p><strong>Wir analysieren Ihre Website und senden Ihnen den Bericht per E-Mail.</strong></p>
                <p>Website: <strong>${confirmedCheck.url}</strong></p>
                <hr style="margin: 30px 0;">
                <p><small>Sie werden automatisch in 5 Sekunden zur Hauptseite weitergeleitet...</small></p>
                <a href="/" class="button">Zur Hauptseite</a>
                <hr style="margin: 30px 0;">
                <p><small>PIXZERIA - Webdesign so einfach wie Pizza bestellen</small></p>
              </div>
            </body>
          </html>
        `);
      } else if (existingCheck && existingCheck.confirmed) {
        // Link already used
        res.send(`
          <html>
            <head>
              <title>Bereits bestätigt</title>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: linear-gradient(135deg, #B91C1C, #FB923C); color: white; }
                .container { background: white; color: #333; padding: 40px; border-radius: 10px; max-width: 500px; margin: 0 auto; }
                .logo { font-size: 3em; margin-bottom: 20px; }
                .button { display: inline-block; background: #B91C1C; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px 0; }
              </style>
              <script>
                setTimeout(function() {
                  window.location.href = '/';
                }, 5000);
              </script>
            </head>
            <body>
              <div class="container">
                <div class="logo">🍕</div>
                <h1>✅ Website-Analyse bereits bestätigt!</h1>
                <p>Ihre Website-Analyse wurde bereits erfolgreich bestätigt.</p>
                <p><strong>Wir haben Ihre Anfrage erhalten und arbeiten daran.</strong></p>
                <hr style="margin: 30px 0;">
                <p><small>Sie werden automatisch in 5 Sekunden zur Hauptseite weitergeleitet...</small></p>
                <a href="/" class="button">Zur Hauptseite</a>
                <hr style="margin: 30px 0;">
                <p><small>PIXZERIA - Webdesign so einfach wie Pizza bestellen</small></p>
              </div>
            </body>
          </html>
        `);
      } else {
        res.status(404).send(`
          <html>
            <head>
              <title>Link nicht gefunden</title>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: linear-gradient(135deg, #B91C1C, #FB923C); color: white; }
                .container { background: white; color: #333; padding: 40px; border-radius: 10px; max-width: 500px; margin: 0 auto; }
                .logo { font-size: 3em; margin-bottom: 20px; }
                .button { display: inline-block; background: #B91C1C; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px 0; }
              </style>
              <script>
                setTimeout(function() {
                  window.location.href = '/';
                }, 5000);
              </script>
            </head>
            <body>
              <div class="container">
                <div class="logo">🍕</div>
                <h1>❌ Bestätigungslink nicht gefunden</h1>
                <p>Der Link ist ungültig oder abgelaufen.</p>
                <p>Bitte fordern Sie eine neue Website-Analyse an.</p>
                <hr style="margin: 30px 0;">
                <p><small>Sie werden automatisch in 5 Sekunden zur Hauptseite weitergeleitet...</small></p>
                <a href="/" class="button">Zur Hauptseite</a>
                <hr style="margin: 30px 0;">
                <p><small>PIXZERIA - Webdesign so einfach wie Pizza bestellen</small></p>
              </div>
            </body>
          </html>
        `);
      }
    } catch (error) {
      console.error('Website check confirmation error:', error);
      res.status(500).send(`
        <html>
          <head><title>Fehler</title></head>
          <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
            <h1>❌ Ein Fehler ist aufgetreten</h1>
            <p>Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.</p>
          </body>
        </html>
      `);
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
