import { FileText, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AGB() {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-orange-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            onClick={handleBack}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="h-10 w-10 text-red-600" />
              <h1 className="text-4xl font-bold text-gray-900">Allgemeine Geschäftsbedingungen</h1>
            </div>
            <p className="text-xl text-gray-600">
              AGB der PIXZERIA Webdesign Agentur
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>§ 1 Geltungsbereich</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen 
                  PIXZERIA - Webdesign Agentur und ihren Kunden über die Erstellung von Websites, 
                  Webdesign-Dienstleistungen und damit verbundene Services. (Platzhalter)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>§ 2 Vertragsschluss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Ein Vertrag kommt durch schriftliche Auftragsbestätigung oder durch Beginn der 
                  Leistungserbringung zustande. Angebote sind freibleibend. (Platzhalter)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>§ 3 Leistungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Der Umfang der Leistungen ergibt sich aus der jeweiligen Leistungsbeschreibung 
                  bzw. dem gewählten Paket (Starter, Professional, Business). (Platzhalter)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>§ 4 Preise und Zahlung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Alle Preise verstehen sich als Endpreise inklusive der gesetzlichen Mehrwertsteuer. 
                  Die Zahlung erfolgt nach Rechnungsstellung. (Platzhalter)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>§ 5 Nutzungsrechte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Mit vollständiger Bezahlung gehen die Nutzungsrechte an den erstellten Werken 
                  auf den Kunden über. (Platzhalter)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>§ 6 Haftung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Die Haftung richtet sich nach den gesetzlichen Bestimmungen. (Platzhalter)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>§ 7 Schlussbestimmungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Es gilt deutsches Recht. Gerichtsstand ist Berlin. (Platzhalter)
                </p>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-gray-500 pt-8">
              <p>Stand: 17. Januar 2026</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
