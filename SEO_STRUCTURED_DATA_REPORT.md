# SEO Structured Data Report

**Datum:** 17.01.2026  
**Task:** S5 aus ROADMAP.md – Structured Data (JSON-LD)

---

## Schema-Typ

**Verwendet:** `ProfessionalService` (Schema.org)

**Begründung:** 
- `LocalBusiness` erfordert physische Adresse/Telefon
- `ProfessionalService` passt besser für digitale Agentur ohne Vor-Ort-Termine
- Erlaubt Service-Katalog mit Preisen

---

## Eingebunden in

| Datei | Beschreibung |
|-------|--------------|
| `client/src/components/structured-data.tsx` | Wiederverwendbare Komponente |
| `client/src/pages/home.tsx` | Eingebunden als `<StructuredData type="ProfessionalService" />` |

---

## Enthaltene Felder

| Feld | Wert | Status |
|------|------|--------|
| `@type` | ProfessionalService | ✅ |
| `name` | PIXZERIA | ✅ |
| `description` | Webdesign-Agentur für KMU... | ✅ |
| `url` | https://pixzeria.de | ✅ |
| `email` | info@pixzeria.de | ✅ |
| `priceRange` | €€ | ✅ |
| `areaServed` | Germany | ✅ |
| `serviceType` | Webdesign, Website-Erstellung, SEO, Hosting | ✅ |
| `hasOfferCatalog` | 3 Pakete mit Preisen | ✅ |

---

## Absichtlich weggelassene Felder

| Feld | Grund |
|------|-------|
| `address` | Impressum enthält Platzhalter-Adresse ("Mustergasse 123") |
| `telephone` | Kein echtes Telefon (100% Digital-Modell) |
| `geo` (Koordinaten) | Keine echte Adresse vorhanden |
| `openingHours` | Nicht relevant für digitalen Service |
| `sameAs` (Social Links) | Keine Social Media Links im Repo gefunden |
| `aggregateRating` | Keine echten Google-Bewertungen vorhanden |
| `image` | Kein OG-Image unter pixzeria.de/assets/ gehostet |

---

## Generiertes JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "PIXZERIA",
  "description": "Webdesign-Agentur für kleine und mittlere Unternehmen...",
  "url": "https://pixzeria.de",
  "email": "info@pixzeria.de",
  "priceRange": "€€",
  "areaServed": {
    "@type": "Country",
    "name": "Germany"
  },
  "serviceType": ["Webdesign", "Website-Erstellung", "SEO-Optimierung", "Website-Hosting"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Website-Pakete",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Starter Pizza", ... },
        "price": "999",
        "priceCurrency": "EUR"
      },
      // ... weitere Pakete
    ]
  }
}
```

---

## Wie testen

### 1. Google Rich Results Test
- https://search.google.com/test/rich-results
- URL eingeben: `https://pixzeria.de`

### 2. Schema.org Validator
- https://validator.schema.org/
- JSON-LD aus Browser DevTools kopieren

### 3. Browser DevTools
```javascript
// In Console:
document.querySelector('script[type="application/ld+json"]').textContent
```

---

## Nächste Schritte (Optional)

Wenn echte Daten verfügbar:

1. **Adresse hinzufügen:**
```tsx
"address": {
  "@type": "PostalAddress",
  "streetAddress": "Echte Straße 1",
  "addressLocality": "Berlin",
  "postalCode": "10115",
  "addressCountry": "DE"
}
```

2. **Google Bewertung hinzufügen:**
```tsx
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "47"
}
```

3. **Social Links hinzufügen:**
```tsx
"sameAs": [
  "https://www.linkedin.com/company/pixzeria",
  "https://www.instagram.com/pixzeria"
]
```

---

## Technische Details

- **Cleanup:** Script wird bei Component-Unmount entfernt (React useEffect cleanup)
- **ID:** Script hat `id="pixzeria-structured-data"` für eindeutige Identifikation
- **Props:** `type` ist konfigurierbar für andere Seiten (z.B. "WebSite")

---

*Erstellt: 17.01.2026 | Task S5 Complete*
