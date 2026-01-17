# ROADMAP – PIXZERIA Optimierungsplan

## 1. Executive Summary

**Die 5 größten Hebel für Business Impact:**

1. **SEO Basics fehlen komplett** → robots.txt, sitemap.xml, Open Graph Tags = 0€ Kosten, sofortige Indexierung
2. **Bilder nicht optimiert** → 1.5-2MB PNGs ohne lazy loading = langsamer LCP, schlechte Core Web Vitals
3. **Keine Conversion-Tracking** → Google Analytics vorbereitet aber nicht aktiv = kein Funnel-Insights
4. **Trust-Signale fehlen** → Keine echten Bewertungen, Reviews, Siegel sichtbar = Conversion-Bremse
5. **Admin-Route ungeschützt** → `/admin` öffentlich zugänglich = Security-Risiko

**Quick Win Potential:** 60% der Issues in unter 3 Stunden fixbar.
**Kein Framework-Wechsel nötig** – alle Fixes mit bestehendem Stack (Vite + React + Vercel).

---

## 2. Priorisierte Optimierungsliste

### 🔴 CONVERSION (Höchster Business Impact)

#### C1: Trust-Signale auf Pricing-Sektion
| | |
|---|---|
| **Impact** | Hoch |
| **Effort** | 30 Min |
| **Was** | Google-Bewertungen, Trusted-Shops Badge, "Über X Projekte" Counter |
| **Warum** | Deutsche B2B-Kunden brauchen Social Proof vor Kaufentscheidung |
| **Wo** | `client/src/components/pricing.tsx` (vor den Paketen, ~Zeile 148) |
| **Wie** | Neuer `<TrustBar />` Component mit echten Zahlen (z.B. "4.9★ bei Google · 47 Projekte · 100% DSGVO") |

#### C2: Sticky CTA auf Mobile
| | |
|---|---|
| **Impact** | Mittel |
| **Effort** | 20 Min |
| **Was** | Fixer "Jetzt anfragen" Button am unteren Bildschirmrand auf Mobile |
| **Warum** | User scrollen durch Content, CTA verschwindet aus Sichtfeld |
| **Wo** | `client/src/App.tsx` oder neuer `<StickyCTA />` Component |
| **Wie** | `fixed bottom-4 left-4 right-4 md:hidden` Button mit Link zu #kontakt |

#### C3: Exit-Intent Popup (Optional)
| | |
|---|---|
| **Impact** | Mittel |
| **Effort** | 45 Min |
| **Was** | Popup wenn Maus den Viewport verlässt (Desktop) |
| **Warum** | Letzte Chance für Lead-Capture |
| **Wo** | Neuer `<ExitIntent />` Component in `App.tsx` |
| **Wie** | `mouseleave` Event auf document, Dialog mit "Warte! Kostenlosen Check mitnehmen?" |

---

### 🟠 SEO (Kritisch für organischen Traffic)

#### S1: robots.txt erstellen
| | |
|---|---|
| **Impact** | Hoch |
| **Effort** | 5 Min |
| **Was** | Datei die Suchmaschinen-Crawlern Regeln gibt |
| **Warum** | Ohne robots.txt keine kontrollierte Indexierung |
| **Wo** | `public/robots.txt` (neuer File) |
| **Wie** | ```User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: https://pixzeria.de/sitemap.xml``` |

#### S2: sitemap.xml erstellen
| | |
|---|---|
| **Impact** | Hoch |
| **Effort** | 10 Min |
| **Was** | XML-Datei mit allen indexierbaren URLs |
| **Warum** | Google findet alle Seiten schneller |
| **Wo** | `public/sitemap.xml` (neuer File) |
| **Wie** | Statische XML mit /, /agb, /datenschutz, /impressum (Blog-Posts dynamisch später) |

#### S3: Open Graph Meta Tags
| | |
|---|---|
| **Impact** | Mittel |
| **Effort** | 15 Min |
| **Was** | og:title, og:description, og:image für Social Sharing |
| **Warum** | Links auf LinkedIn/WhatsApp sehen sonst leer aus |
| **Wo** | `client/index.html` (im `<head>`) |
| **Wie** | `<meta property="og:title" content="PIXZERIA..." />` etc. |

#### S4: Canonical URL & hreflang
| | |
|---|---|
| **Impact** | Niedrig |
| **Effort** | 10 Min |
| **Was** | `<link rel="canonical">` und `hreflang="de"` |
| **Warum** | Verhindert Duplicate Content Probleme |
| **Wo** | `client/index.html` |
| **Wie** | `<link rel="canonical" href="https://pixzeria.de/" />` |

#### S5: Structured Data (JSON-LD)
| | |
|---|---|
| **Impact** | Mittel |
| **Effort** | 30 Min |
| **Was** | Schema.org Markup für LocalBusiness |
| **Warum** | Rich Snippets in Google (Sterne, Adresse, etc.) |
| **Wo** | `client/index.html` oder `client/src/pages/home.tsx` |
| **Wie** | Vorlage existiert in `seo-example.tsx` (~Zeile 14-60), adaptieren für PIXZERIA |

---

### 🟡 PERFORMANCE (Core Web Vitals)

#### P1: Lazy Loading für Bilder
| | |
|---|---|
| **Impact** | Hoch |
| **Effort** | 15 Min |
| **Was** | `loading="lazy"` auf alle `<img>` Tags (außer Hero) |
| **Warum** | Bilder sind 5+ MB, blockieren First Paint |
| **Wo** | `case-studies.tsx:65`, `about.tsx:61`, `blog.tsx:70` |
| **Wie** | `<img loading="lazy" ...>` hinzufügen |

#### P2: Hero-Bild optimieren
| | |
|---|---|
| **Impact** | Hoch |
| **Effort** | 20 Min |
| **Was** | Unsplash-Bild lokal speichern, WebP konvertieren, Größe reduzieren |
| **Warum** | Externes Bild = DNS-Lookup + 800KB Transfer = langsamer LCP |
| **Wo** | `client/src/components/hero.tsx:62` |
| **Wie** | Bild herunterladen → WebP mit 80% Qualität → unter `public/assets/hero.webp` speichern |

#### P3: Reference-Bilder komprimieren
| | |
|---|---|
| **Impact** | Mittel |
| **Effort** | 30 Min |
| **Was** | Die 3 Case Study PNGs sind je ~2MB |
| **Warum** | Seite lädt 6MB+ nur für Bilder |
| **Wo** | `public/assets/reference-*.png` |
| **Wie** | Squoosh.app oder TinyPNG → WebP ~200KB pro Bild |

#### P4: Font Display Swap
| | |
|---|---|
| **Impact** | Niedrig |
| **Effort** | 5 Min |
| **Was** | `&display=swap` an Google Fonts URL |
| **Warum** | Text ist sofort sichtbar, Font lädt nach |
| **Wo** | `client/index.html:8` |
| **Wie** | `...&display=swap` an Ende der URL |

---

### 🟢 ACCESSIBILITY (A11y)

#### A1: Skip-to-Content Link
| | |
|---|---|
| **Impact** | Mittel |
| **Effort** | 10 Min |
| **Was** | Unsichtbarer Link am Seitenanfang für Keyboard-User |
| **Warum** | WCAG 2.1 Requirement, hilft Screen-Reader-Nutzern |
| **Wo** | `client/src/App.tsx` oder `client/src/components/header.tsx` |
| **Wie** | `<a href="#main" className="sr-only focus:not-sr-only">Zum Inhalt springen</a>` |

#### A2: aria-labels für Icon-Buttons
| | |
|---|---|
| **Impact** | Niedrig |
| **Effort** | 20 Min |
| **Was** | Buttons mit nur Icons brauchen `aria-label` |
| **Warum** | Screen-Reader lesen sonst nichts vor |
| **Wo** | `header.tsx` (Mobile Menu), `footer.tsx` (Social Icons) |
| **Wie** | `<Button aria-label="Menü öffnen">` etc. |

#### A3: Farbkontrast prüfen
| | |
|---|---|
| **Impact** | Niedrig |
| **Effort** | 15 Min |
| **Was** | Pizza-Gold (#EAB308) auf Weiß hat schlechten Kontrast |
| **Warum** | WCAG AA erfordert 4.5:1 Kontrast |
| **Wo** | `client/src/index.css` (CSS Variables) |
| **Wie** | Gold zu #B45309 (dunkler) ändern oder nur für Dekoration nutzen |

---

### 🔵 SECURITY & TRUST

#### Sec1: Admin-Route schützen
| | |
|---|---|
| **Impact** | Kritisch |
| **Effort** | 60 Min |
| **Was** | `/admin` ist öffentlich zugänglich |
| **Warum** | Jeder kann Blog-Posts erstellen/löschen |
| **Wo** | `client/src/pages/admin.tsx`, `server/routes.ts` |
| **Wie** | Option A: Route komplett entfernen (Blog nicht genutzt). Option B: Basic Auth via Vercel Password Protection. Option C: Replit Auth Integration |

#### Sec2: Vercel Security Headers
| | |
|---|---|
| **Impact** | Mittel |
| **Effort** | 15 Min |
| **Was** | CSP, X-Frame-Options, X-Content-Type-Options |
| **Warum** | Schützt gegen XSS, Clickjacking |
| **Wo** | `vercel.json` |
| **Wie** | `"headers": [{ "source": "/(.*)", "headers": [...] }]` |

#### Sec3: FormSubmit Email verschleiern
| | |
|---|---|
| **Impact** | Niedrig |
| **Effort** | 10 Min |
| **Was** | Email-Adresse ist im Quellcode sichtbar |
| **Warum** | Kann für Spam genutzt werden |
| **Wo** | `contact-cta.tsx:69`, `website-check.tsx:63`, `pricing.tsx` |
| **Wie** | FormSubmit bietet "Activation" → Ersetze Email mit Hash-ID |

---

### ⚪ DEVELOPER EXPERIENCE (DX)

#### D1: Component Split für Pricing
| | |
|---|---|
| **Impact** | Niedrig |
| **Effort** | 45 Min |
| **Was** | `pricing.tsx` hat 400+ Zeilen |
| **Warum** | Schwer zu maintainen, langsame IDE |
| **Wo** | `client/src/components/pricing.tsx` |
| **Wie** | Aufteilen in `PricingCard.tsx`, `OrderModal.tsx`, `AddOnSelector.tsx` |

#### D2: Environment Variables dokumentieren
| | |
|---|---|
| **Impact** | Niedrig |
| **Effort** | 10 Min |
| **Was** | `.env.example` Datei erstellen |
| **Warum** | Neue Entwickler wissen nicht welche Vars nötig |
| **Wo** | Root: `.env.example` |
| **Wie** | `DATABASE_URL=\nSESSION_SECRET=` (ohne Werte) |

---

## 3. No-Go's (Was wir NICHT machen)

| Vermeiden | Begründung |
|-----------|------------|
| ❌ Migration zu Next.js/Remix | Kompletter Rewrite, SPA funktioniert für diese Seitengröße |
| ❌ SSR/ISR implementieren | Overkill für 5-10 statische Seiten |
| ❌ Headless CMS (Contentful etc.) | Externe Abhängigkeit, Kosten, Komplexität |
| ❌ Eigenes Backend für Forms | FormSubmit funktioniert, kein Hosting-Aufwand |
| ❌ Bezahlte Tools (Hotjar, etc.) | Budget-Constraint, Free-Tier meist zu limitiert |
| ❌ i18n/Mehrsprachigkeit | Nur DE-Markt, kein Business Case |
| ❌ PWA/Service Worker | Keine Offline-Anforderung für B2B Website |
| ❌ A/B Testing Infrastruktur | Erst wenn genug Traffic für statistische Signifikanz |

---

## 4. Release Plan

### Phase 1: Quick Wins (≤ 60 Minuten)

| # | Task | Zeit | Dateien |
|---|------|------|---------|
| 1 | robots.txt erstellen | 5 min | `public/robots.txt` |
| 2 | sitemap.xml erstellen | 10 min | `public/sitemap.xml` |
| 3 | Font display=swap | 5 min | `client/index.html` |
| 4 | Open Graph Tags | 15 min | `client/index.html` |
| 5 | Lazy Loading für Bilder | 15 min | `case-studies.tsx`, `about.tsx`, `blog.tsx` |
| 6 | Skip-to-Content Link | 10 min | `header.tsx` |

**Ergebnis:** SEO-Grundlagen ✓, schnellerer LCP, bessere A11y

---

### Phase 2: Core Optimierungen (1-3 Stunden)

| # | Task | Zeit | Dateien |
|---|------|------|---------|
| 1 | Hero-Bild lokal + WebP | 20 min | `hero.tsx`, `public/assets/` |
| 2 | Reference-Bilder komprimieren | 30 min | `public/assets/reference-*.png` |
| 3 | Trust-Bar Component | 30 min | Neuer Component + `pricing.tsx` |
| 4 | Structured Data (JSON-LD) | 30 min | `index.html` oder `home.tsx` |
| 5 | Vercel Security Headers | 15 min | `vercel.json` |
| 6 | Admin-Route entscheiden | 15 min | `admin.tsx`, `routes.ts` |

**Ergebnis:** Core Web Vitals ✓, Trust-Signale ✓, Security Basics ✓

---

### Phase 3: Polish (Optional, wenn Zeit)

| # | Task | Zeit | Dateien |
|---|------|------|---------|
| 1 | Sticky Mobile CTA | 20 min | Neuer Component |
| 2 | aria-labels ergänzen | 20 min | `header.tsx`, `footer.tsx` |
| 3 | Farbkontrast anpassen | 15 min | `index.css` |
| 4 | FormSubmit Email verschleiern | 10 min | Alle Form-Components |
| 5 | pricing.tsx aufteilen | 45 min | `components/pricing/` |
| 6 | .env.example erstellen | 10 min | Root |
| 7 | Google Analytics aktivieren | 30 min | `index.html`, Cookie-Banner |

**Ergebnis:** Vollständig optimierte, professionelle Website

---

## Zusammenfassung

```
┌─────────────────────────────────────────────────────────┐
│                    IMPACT vs EFFORT                      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  HIGH    │ S1 S2 P1 P2 │ C1 Sec1      │                 │
│  IMPACT  │ (Quick)     │ (Medium)     │                 │
│          │─────────────┼──────────────┼─────────────────│
│  MEDIUM  │ S3 P4 A1    │ S5 P3 Sec2   │ C2 C3          │
│  IMPACT  │ (Quick)     │ (Medium)     │ (Optional)     │
│          │─────────────┼──────────────┼─────────────────│
│  LOW     │ S4 D2       │ A2 A3 Sec3   │ D1             │
│  IMPACT  │             │              │ (Nice-to-have) │
│          └─────────────┴──────────────┴─────────────────┤
│                LOW          MEDIUM         HIGH          │
│                         EFFORT →                         │
└─────────────────────────────────────────────────────────┘
```

**Empfehlung:** Phase 1 heute, Phase 2 diese Woche, Phase 3 bei Bedarf.

---

*Erstellt: 17.01.2026 | Stack: Vite + React + Vercel SPA | Markt: DE B2B*
