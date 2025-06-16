import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWebsiteCheckSchema, insertContactRequestSchema } from "@shared/schema";
import { sendEmail, createCustomerConfirmationEmail, createBusinessNotificationEmail } from "./sendgrid";

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
