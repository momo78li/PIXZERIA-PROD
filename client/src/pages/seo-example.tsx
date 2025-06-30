import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Star, Users, Award, Wrench } from "lucide-react";

// Beispiel für Professional SEO-Paket: Müller Bau GmbH
export default function SEOExample() {
  useEffect(() => {
    // Meta Tags für SEO (würden normalerweise im <head> stehen)
    document.title = "Müller Bau GmbH - Ihr Bauunternehmen in München | Professionelle Bauleistungen";
    
    // Structured Data (JSON-LD) für lokales SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Müller Bau GmbH",
      "description": "Professionelles Bauunternehmen in München mit über 20 Jahren Erfahrung. Wir bieten Neubau, Sanierung und Renovierung.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Musterstraße 123",
        "addressLocality": "München",
        "postalCode": "80331",
        "addressCountry": "DE"
      },
      "telephone": "+49 89 12345678",
      "email": "info@mueller-bau-muenchen.de",
      "url": "https://mueller-bau-muenchen.de",
      "image": "https://mueller-bau-muenchen.de/images/logo.jpg",
      "priceRange": "€€€",
      "openingHours": [
        "Mo-Fr 07:00-17:00",
        "Sa 08:00-12:00"
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "48.1351",
        "longitude": "11.5820"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "47"
      },
      "services": [
        "Neubau",
        "Sanierung", 
        "Renovierung",
        "Dacharbeiten",
        "Mauerwerk"
      ]
    };

    // JSON-LD Script hinzufügen
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO-optimierte Breadcrumbs */}
      <nav className="bg-white border-b" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item" className="text-blue-600 hover:underline">
                <span itemProp="name">Startseite</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <span className="text-gray-400">/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-gray-600">Bauunternehmen München</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section mit optimierter H1 */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bauunternehmen München - Müller Bau GmbH
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professionelle Bauleistungen in München und Umgebung. Über 20 Jahre Erfahrung im Neubau, 
              Sanierung und Renovierung. Ihr zuverlässiger Partner für alle Bauvorhaben.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt anrufen: 089 12345678
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Mail className="w-4 h-4 mr-2" />
                Kostenvoranschlag anfordern
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen Section mit SEO-optimierten H2 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Unsere Bauleistungen in München
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Neubau München",
                description: "Professioneller Neubau von Einfamilienhäusern, Mehrfamilienhäusern und Gewerbebauten in München.",
                icon: Award,
                features: ["Schlüsselfertig", "Individuelle Planung", "Festpreis-Garantie"]
              },
              {
                title: "Sanierung & Renovierung",
                description: "Fachgerechte Sanierung und Renovierung von Altbauten und denkmalgeschützten Gebäuden.",
                icon: Wrench,
                features: ["Energetische Sanierung", "Denkmalschutz", "Modernisierung"]
              },
              {
                title: "Dacharbeiten München",
                description: "Dachdecker-Arbeiten, Dachsanierung und Dachausbau von erfahrenen Handwerkern.",
                icon: Users,
                features: ["Steildach", "Flachdach", "Dachausbau"]
              }
            ].map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section mit strukturierten Daten */}
      <section className="py-16 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Häufige Fragen zu Bauarbeiten in München
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Wie lange dauert ein Neubau in München?",
                answer: "Ein Einfamilienhaus-Neubau dauert in der Regel 8-12 Monate, abhängig von Größe und Ausstattung. Wir erstellen Ihnen einen detaillierten Zeitplan."
              },
              {
                question: "Welche Kosten entstehen für eine Sanierung?",
                answer: "Die Sanierungskosten variieren je nach Umfang. Eine Kernsanierung kostet ca. 800-1.200€/m². Gerne erstellen wir Ihnen einen kostenlosen Kostenvoranschlag."
              },
              {
                question: "Arbeiten Sie auch außerhalb von München?",
                answer: "Ja, wir arbeiten in München und im Umkreis von 50km. Dazu gehören Starnberg, Freising, Dachau und weitere Gemeinden."
              }
            ].map((faq, index) => (
              <Card key={index} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <CardHeader>
                  <CardTitle itemProp="name" className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt Section mit lokalem SEO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Kontakt - Müller Bau München
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6">Unser Büro in München</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">
                      Musterstraße 123<br />
                      80331 München
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-gray-600">+49 89 12345678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <p className="text-gray-600">info@mueller-bau-muenchen.de</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Öffnungszeiten</p>
                    <p className="text-gray-600">
                      Mo-Fr: 07:00-17:00<br />
                      Sa: 08:00-12:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Bewertungen unserer Kunden</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map(star => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium">4.8/5</span>
                  <span className="text-gray-600">(47 Bewertungen)</span>
                </div>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 italic mb-2">
                      "Sehr professionelle Arbeit! Unser Neubau wurde termingerecht und im Budget fertiggestellt. 
                      Das Team war immer zuverlässig und hilfsbereit."
                    </p>
                    <p className="text-sm text-gray-500">- Familie Weber, München</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer mit Copyright */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Müller Bau GmbH - Alle Rechte vorbehalten</p>
          <p className="text-gray-400 text-sm mt-2">
            Bauunternehmen München | Neubau | Sanierung | Renovierung
          </p>
        </div>
      </footer>
    </div>
  );
}