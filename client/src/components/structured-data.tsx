import { useEffect } from "react";

interface StructuredDataProps {
  type?: "WebSite" | "ProfessionalService";
}

export default function StructuredData({ type = "ProfessionalService" }: StructuredDataProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type,
      "name": "PIXZERIA",
      "description": "Webdesign-Agentur für kleine und mittlere Unternehmen. Professionelle Websites ab 999€ – einfach wie Pizza bestellen. 100% digital, DSGVO-konform, Fixpreise.",
      "url": "https://pixzeria.de",
      "email": "info@pixzeria.de",
      "priceRange": "€€",
      "areaServed": {
        "@type": "Country",
        "name": "Germany"
      },
      "serviceType": [
        "Webdesign",
        "Website-Erstellung",
        "SEO-Optimierung",
        "Website-Hosting"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Website-Pakete",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Starter Pizza",
              "description": "Bis zu 5 Seiten, Kontaktformular, Impressum & Datenschutz, SEO-Grundeinstellung"
            },
            "price": "999",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional Pizza",
              "description": "Bis zu 10 Seiten, Blog, Besucherstatistiken, Erweiterte SEO-Optimierung"
            },
            "price": "1699",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Pizza",
              "description": "Bis zu 20 Seiten, Mehrsprachigkeit, Premium SEO-Paket, Mitarbeiterbereich"
            },
            "price": "2499",
            "priceCurrency": "EUR"
          }
        ]
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    script.id = "pixzeria-structured-data";
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("pixzeria-structured-data");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [type]);

  return null;
}
