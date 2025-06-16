import { MailService } from '@sendgrid/mail';

const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(apiKey);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const result = await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || undefined,
      html: params.html || undefined,
    });
    console.log('Email sent successfully:', result[0].statusCode);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

// E-Mail-Vorlagen
export function createCustomerConfirmationEmail(
  customerEmail: string,
  packageName: string,
  addOns: string[],
  confirmationLink: string
) {
  const subject = "Bestätigen Sie Ihre Anfrage bei PIXZERIA";
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #B91C1C, #FB923C); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #ddd; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; background: #B91C1C; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px 0; }
        .package-details { background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🍕 PIXZERIA</h1>
          <p>Webdesign so einfach wie Pizza bestellen</p>
        </div>
        
        <div class="content">
          <h2>Bestätigen Sie Ihre Anfrage</h2>
          <p>Hallo,</p>
          <p>vielen Dank für Ihr Interesse an PIXZERIA! Um Ihre Anfrage zu bestätigen und DSGVO-konform zu bearbeiten, klicken Sie bitte auf den folgenden Link:</p>
          
          <div style="text-align: center;">
            <a href="${confirmationLink}" class="button">Anfrage bestätigen</a>
          </div>
          
          <div class="package-details">
            <h3>Ihre Auswahl:</h3>
            <p><strong>Paket:</strong> ${packageName}</p>
            ${addOns.length > 0 ? `<p><strong>Zusatzleistungen:</strong> ${addOns.join(', ')}</p>` : ''}
          </div>
          
          <p>Nach der Bestätigung melden wir uns innerhalb von 24 Stunden bei Ihnen mit einem unverbindlichen Angebot.</p>
          
          <p><strong>Nächste Schritte:</strong></p>
          <ol>
            <li>Anfrage bestätigen (durch Klick auf den Button)</li>
            <li>Kostenlose Beratung und Projektplanung</li>
            <li>Verbindlicher Kostenvoranschlag</li>
            <li>Umsetzung nach Ihrer Freigabe</li>
          </ol>
        </div>
        
        <div class="footer">
          <p>PIXZERIA - Webdesign für kleine Unternehmen</p>
          <p>info@pixzeria.de</p>
          <p>Diese E-Mail wurde automatisch generiert. Bei Fragen antworten Sie einfach auf diese E-Mail.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return {
    to: customerEmail,
    from: 'info@pixzeria.de',
    subject,
    html
  };
}

export function createBusinessNotificationEmail(
  customerData: any,
  packageName: string,
  addOns: string[]
) {
  const subject = `Neue Website-Anfrage: ${packageName}`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #B91C1C; color: white; padding: 20px; text-align: center; }
        .content { background: white; padding: 20px; border: 1px solid #ddd; }
        .customer-info { background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🍕 Neue PIXZERIA Anfrage</h1>
        </div>
        
        <div class="content">
          <h2>Kundendaten:</h2>
          <div class="customer-info">
            <p><strong>Name:</strong> ${customerData.name}</p>
            <p><strong>E-Mail:</strong> ${customerData.email}</p>
            <p><strong>Unternehmen:</strong> ${customerData.company || 'Nicht angegeben'}</p>
          </div>
          
          <h3>Gewähltes Paket:</h3>
          <p><strong>${packageName}</strong></p>
          
          ${addOns.length > 0 ? `
            <h3>Zusatzleistungen:</h3>
            <ul>
              ${addOns.map(addon => `<li>${addon}</li>`).join('')}
            </ul>
          ` : ''}
          
          ${customerData.message ? `
            <h3>Nachricht vom Kunden:</h3>
            <div class="customer-info">
              <p>${customerData.message}</p>
            </div>
          ` : ''}
          
          <p><strong>Status:</strong> E-Mail-Bestätigung durch Kunde erforderlich</p>
          <p><em>Der Kunde erhält eine Bestätigungs-E-Mail und muss diese erst bestätigen, bevor Sie antworten.</em></p>
        </div>
      </div>
    </body>
    </html>
  `;

  return {
    to: 'info@pixzeria.de',
    from: 'info@pixzeria.de',
    subject,
    html
  };
}