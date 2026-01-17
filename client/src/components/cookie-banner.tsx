import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Cookie, Settings } from "lucide-react";
import { useCookieConsent, type CookieConsent } from "@/hooks/use-cookies";

export default function CookieBanner() {
  const { consent, hasConsent, updateConsent } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [tempConsent, setTempConsent] = useState<CookieConsent>(consent);
  const [location] = useLocation();

  // Listen for open-cookie-settings event from footer
  useEffect(() => {
    const handleOpenSettings = () => {
      setTempConsent(consent);
      setShowSettings(true);
    };
    
    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, [consent]);

  // Close modal on route change to prevent stuck overlay
  useEffect(() => {
    setShowSettings(false);
  }, [location]);

  const handleAcceptAll = () => {
    const fullConsent: CookieConsent = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    updateConsent(fullConsent);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const minimalConsent: CookieConsent = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    updateConsent(minimalConsent);
    setShowSettings(false);
  };

  const handleSaveSettings = () => {
    updateConsent(tempConsent);
    setShowSettings(false);
  };

  const handleConsentChange = (type: keyof CookieConsent, checked: boolean) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setTempConsent(prev => ({ ...prev, [type]: checked }));
  };

  const handleOpenSettings = () => {
    setTempConsent(consent);
    setShowSettings(true);
  };

  return (
    <>
      {/* Cookie Banner - only show if no consent yet */}
      {!hasConsent && (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-red-600 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-center gap-3 flex-1">
              <Cookie className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Cookies & Datenschutz
                </h3>
                <p className="text-sm text-gray-600">
                  Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
                  Notwendige Cookies sind für die Funktion der Website erforderlich. 
                  Sie können Ihre Einstellungen jederzeit anpassen.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 lg:flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleOpenSettings}
                className="flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                Einstellungen
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
              >
                Nur Notwendige
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="bg-red-600 hover:bg-red-700"
              >
                Alle Akzeptieren
              </Button>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Cookie Settings Dialog - always available */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-red-600" />
              Cookie-Einstellungen
            </DialogTitle>
            <DialogDescription>
              Verwalten Sie Ihre Cookie-Präferenzen. Sie können Ihre Auswahl jederzeit ändern.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Necessary Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Notwendige Cookies</CardTitle>
                  <Badge variant="secondary">Immer Aktiv</Badge>
                </div>
                <CardDescription>
                  Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={true}
                    disabled={true}
                    id="necessary"
                  />
                  <label htmlFor="necessary" className="text-sm">
                    Session-Management, Sicherheit, Formular-Funktionalität
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Functional Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Funktionale Cookies</CardTitle>
                <CardDescription>
                  Ermöglichen erweiterte Funktionen wie Kontaktformulare und Website-Checks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={tempConsent.functional}
                    onCheckedChange={(checked) => handleConsentChange('functional', checked as boolean)}
                    id="functional"
                  />
                  <label htmlFor="functional" className="text-sm">
                    Kontaktformular-Speicherung, Website-Check-Funktionen
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Analyse Cookies</CardTitle>
                <CardDescription>
                  Helfen uns zu verstehen, wie Besucher unsere Website nutzen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={tempConsent.analytics}
                    onCheckedChange={(checked) => handleConsentChange('analytics', checked as boolean)}
                    id="analytics"
                  />
                  <label htmlFor="analytics" className="text-sm">
                    Website-Statistiken, Besucherverhalten (anonymisiert)
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Marketing Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Marketing Cookies</CardTitle>
                <CardDescription>
                  Werden verwendet, um Werbung relevanter zu gestalten.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={tempConsent.marketing}
                    onCheckedChange={(checked) => handleConsentChange('marketing', checked as boolean)}
                    id="marketing"
                  />
                  <label htmlFor="marketing" className="text-sm">
                    Personalisierte Werbung, Social Media Integration
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-between gap-2 pt-4">
            <Button
              variant="outline"
              onClick={handleRejectAll}
            >
              Nur Notwendige
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowSettings(false)}
              >
                Abbrechen
              </Button>
              <Button
                onClick={handleSaveSettings}
                className="bg-red-600 hover:bg-red-700"
              >
                Einstellungen Speichern
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}