import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Cookie, Shield, Mail, Server, Globe } from "lucide-react";
import { useCookieConsent, type CookieConsent } from "@/hooks/use-cookies";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Datenschutz() {
  const { consent, hasConsent, updateConsent, revokeConsent } = useCookieConsent();
  const [tempConsent, setTempConsent] = useState<CookieConsent>(consent);
  const { toast } = useToast();

  const handleConsentChange = (type: keyof CookieConsent, checked: boolean) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setTempConsent(prev => ({ ...prev, [type]: checked }));
  };

  const handleSaveSettings = () => {
    updateConsent(tempConsent);
    toast({
      title: "Einstellungen gespeichert",
      description: "Ihre Cookie-Einstellungen wurden erfolgreich aktualisiert.",
    });
  };

  const handleRevokeAll = () => {
    revokeConsent();
    setTempConsent({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    });
    toast({
      title: "Einwilligung widerrufen",
      description: "Alle optionalen Cookies wurden deaktiviert.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-orange-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-10 w-10 text-red-600" />
              <h1 className="text-4xl font-bold text-gray-900">Datenschutzerklärung</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ihre Privatsphäre ist uns wichtig. Hier erfahren Sie, wie wir Ihre Daten schützen und verwenden.
            </p>
          </div>

          {/* Cookie Management Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-red-600" />
                Cookie-Einstellungen verwalten
              </CardTitle>
              <CardDescription>
                Steuern Sie, welche Cookies auf Ihrem Gerät gespeichert werden dürfen.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Necessary Cookies */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Notwendige Cookies</h3>
                  <Badge variant="secondary">Immer Aktiv</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich.
                </p>
                <div className="flex items-center space-x-2">
                  <Checkbox checked={true} disabled={true} id="necessary-manage" />
                  <label htmlFor="necessary-manage" className="text-sm">
                    Session-Management, Sicherheit, Formular-Funktionalität
                  </label>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Funktionale Cookies</h3>
                  <Badge variant={tempConsent.functional ? "default" : "outline"}>
                    {tempConsent.functional ? "Aktiv" : "Inaktiv"}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Ermöglichen erweiterte Funktionen wie Kontaktformulare und Website-Checks.
                </p>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={tempConsent.functional}
                    onCheckedChange={(checked) => handleConsentChange('functional', checked as boolean)}
                    id="functional-manage"
                  />
                  <label htmlFor="functional-manage" className="text-sm">
                    Kontaktformular-Speicherung, Website-Check-Funktionen
                  </label>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Analyse Cookies</h3>
                  <Badge variant={tempConsent.analytics ? "default" : "outline"}>
                    {tempConsent.analytics ? "Aktiv" : "Inaktiv"}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Helfen uns zu verstehen, wie Besucher unsere Website nutzen.
                </p>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={tempConsent.analytics}
                    onCheckedChange={(checked) => handleConsentChange('analytics', checked as boolean)}
                    id="analytics-manage"
                  />
                  <label htmlFor="analytics-manage" className="text-sm">
                    Website-Statistiken, Besucherverhalten (anonymisiert)
                  </label>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Marketing Cookies</h3>
                  <Badge variant={tempConsent.marketing ? "default" : "outline"}>
                    {tempConsent.marketing ? "Aktiv" : "Inaktiv"}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Werden verwendet, um Werbung relevanter zu gestalten.
                </p>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={tempConsent.marketing}
                    onCheckedChange={(checked) => handleConsentChange('marketing', checked as boolean)}
                    id="marketing-manage"
                  />
                  <label htmlFor="marketing-manage" className="text-sm">
                    Personalisierte Werbung, Social Media Integration
                  </label>
                </div>
              </div>

              <div className="flex justify-between gap-4 pt-4">
                <Button variant="outline" onClick={handleRevokeAll}>
                  Alle Widerrufen
                </Button>
                <Button onClick={handleSaveSettings} className="bg-red-600 hover:bg-red-700">
                  Einstellungen Speichern
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Policy Content */}
          <div className="space-y-8">
            {/* Verantwortlicher */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-red-600" />
                  Verantwortlicher
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>PIXZERIA - Webdesign Agentur</strong></p>
                  <p>Mustergasse 123</p>
                  <p>12345 Berlin, Deutschland</p>
                  <p>E-Mail: info@pixzeria.de</p>
                  <p>Telefon: +49 30 12345678</p>
                </div>
              </CardContent>
            </Card>

            {/* Datenverarbeitung */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-red-600" />
                  Welche Daten verarbeiten wir?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Kontaktformulare</h4>
                  <p className="text-sm text-gray-600">
                    Wenn Sie uns über unsere Kontaktformulare kontaktieren, speichern wir Ihre Angaben 
                    (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage. Diese Daten werden 
                    nicht an Dritte weitergegeben.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Website-Check</h4>
                  <p className="text-sm text-gray-600">
                    Für unseren kostenlosen Website-Check erfassen wir Ihre E-Mail-Adresse und die 
                    URL Ihrer Website, um Ihnen eine Analyse zukommen zu lassen.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Server-Logs</h4>
                  <p className="text-sm text-gray-600">
                    Unser Webserver speichert automatisch Informationen wie IP-Adresse, Browsertyp, 
                    Betriebssystem und Zugriffszeitpunkt. Diese Daten werden nur für technische 
                    Zwecke verwendet und nach 30 Tagen automatisch gelöscht.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* E-Mail-Versand */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-red-600" />
                  E-Mail-Versand mit SendGrid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Für den Versand von E-Mails (Bestätigungen, Antworten auf Anfragen) nutzen wir 
                  den Dienst SendGrid der Twilio Inc., USA. Dabei werden Ihre E-Mail-Adresse und 
                  der Nachrichteninhalt an SendGrid übertragen.
                </p>
                <p className="text-sm text-gray-600">
                  SendGrid ist EU-DSGVO-konform und verarbeitet Daten nur in unserem Auftrag. 
                  Weitere Informationen finden Sie in der 
                  <a href="https://sendgrid.com/policies/privacy/" className="text-red-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    Datenschutzerklärung von SendGrid
                  </a>.
                </p>
              </CardContent>
            </Card>

            {/* Ihre Rechte */}
            <Card>
              <CardHeader>
                <CardTitle>Ihre Rechte</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <p><strong>Auskunft:</strong> Sie können jederzeit Auskunft über die von uns gespeicherten Daten verlangen.</p>
                  <p><strong>Berichtigung:</strong> Unrichtige Daten werden auf Anfrage korrigiert.</p>
                  <p><strong>Löschung:</strong> Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungsfristen bestehen.</p>
                  <p><strong>Einschränkung:</strong> Sie können die Verarbeitung Ihrer Daten einschränken lassen.</p>
                  <p><strong>Datenübertragbarkeit:</strong> Sie können Ihre Daten in einem strukturierten Format erhalten.</p>
                  <p><strong>Widerspruch:</strong> Sie können der Verarbeitung Ihrer Daten widersprechen.</p>
                </div>
                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-800">
                    <strong>Kontakt für Datenschutzanfragen:</strong><br/>
                    E-Mail: datenschutz@pixzeria.de<br/>
                    Telefon: +49 30 12345678
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Letzte Aktualisierung */}
            <div className="text-center text-sm text-gray-500 pt-8">
              <p>Diese Datenschutzerklärung wurde zuletzt am 16. Juni 2025 aktualisiert.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}