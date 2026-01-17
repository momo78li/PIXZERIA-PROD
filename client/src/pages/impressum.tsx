import { Building2, Mail, Phone, MapPin, Scale, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Impressum() {
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

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Scale className="h-10 w-10 text-red-600" />
              <h1 className="text-4xl font-bold text-gray-900">Impressum</h1>
            </div>
            <p className="text-xl text-gray-600">
              Angaben gemäß § 5 TMG (Telemediengesetz)
            </p>
          </div>

          <div className="space-y-8">
            {/* Anbieter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-red-600" />
                  Anbieter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">PIXZERIA - Webdesign Agentur</p>
                  <p className="text-gray-600">Inhaber: Max Mustermann</p>
                </div>
              </CardContent>
            </Card>

            {/* Anschrift */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  Anschrift
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p>Mustergasse 123</p>
                  <p>12345 Berlin</p>
                  <p>Deutschland</p>
                </div>
              </CardContent>
            </Card>

            {/* Kontakt */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-red-600" />
                  Kontakt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-600" />
                  <span>Telefon: +49 30 12345678</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-red-600" />
                  <span>E-Mail: info@pixzeria.de</span>
                </div>
              </CardContent>
            </Card>

            {/* Umsatzsteuer */}
            <Card>
              <CardHeader>
                <CardTitle>Umsatzsteuer-Identifikationsnummer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gemäß §27 a Umsatzsteuergesetz:<br/>
                  <strong>DE123456789</strong>
                </p>
              </CardContent>
            </Card>

            {/* Verantwortlich für den Inhalt */}
            <Card>
              <CardHeader>
                <CardTitle>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p><strong>Max Mustermann</strong></p>
                  <p>Mustergasse 123</p>
                  <p>12345 Berlin</p>
                </div>
              </CardContent>
            </Card>

            {/* EU-Streitschlichtung */}
            <Card>
              <CardHeader>
                <CardTitle>EU-Streitschlichtung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                </p>
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <p className="text-sm text-gray-600 mt-3">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </CardContent>
            </Card>

            {/* Verbraucherstreitbeilegung */}
            <Card>
              <CardHeader>
                <CardTitle>Verbraucherstreitbeilegung/Universalschlichtungsstelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </CardContent>
            </Card>

            <Separator />

            {/* Haftungsausschluss */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Haftungsausschluss</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Haftung für Inhalte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen 
                    Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind 
                    wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder 
                    gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, 
                    die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Haftung für Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
                    keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
                    Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
                    Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Urheberrecht</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Letzte Aktualisierung */}
            <div className="text-center text-sm text-gray-500 pt-8">
              <p>Dieses Impressum wurde zuletzt am 16. Juni 2025 aktualisiert.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}