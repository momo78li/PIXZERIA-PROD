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
      "description": "Webdesign-Agentur für Unternehmen, Handwerker und Dienstleister. Professionelle Business-Websites ab 999 € – zum Festpreis, 100 % digital, DSGVO-konform.",
      "url": "https://pixzeria.de",
      "email": "info@pixzeria.de",
      "telephone": "+4917343943 43",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bachweg 22",
        "addressLocality": "Waltrop",
        "postalCode": "45731",
        "addressCountry": "DE"
      },
      "priceRange": "€€",
      "areaServed": {
        "@type": "Country",
        "name": "Germany"
      },
      "serviceType": [
        "Webdesign",
        "Website-Erstellung",
        "SEO-Grundeinstellung",
        "Website-Pflege"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Website zum Festpreis",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business-Website",
              "description": "Professionelle Unternehmenswebsite: bis zu 5 Seiten, Kontaktformular, Impressum & Datenschutz, SEO-Grundeinstellung, mobil optimiert – alles inklusive."
            },
            "price": "999",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
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
