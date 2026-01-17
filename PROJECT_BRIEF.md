# PROJECT_BRIEF – PIXZERIA Website

## 1. Überblick

**Was macht die Website?**
PIXZERIA ist eine deutsche Webdesign-Agentur-Website mit dem Slogan "Webdesign so einfach wie Pizza bestellen". Die Website präsentiert Dienstleistungen, Preispakete und Case Studies für potenzielle Kunden.

**Zielgruppe:**
- Kleine und mittlere Unternehmen (Handwerker, Ärzte, Anwälte, lokale Geschäfte)
- Unternehmen, die eine professionelle Website ohne komplizierte Agentur-Prozesse wollen
- Deutscher B2B-Markt

**Business-Ziel:**
- Lead-Generierung über Kontaktformulare und Website-Check-Anfragen
- 100% digitaler Betrieb ohne Telefon/Termine
- Verkauf von Website-Paketen (Starter €999, Professional €1.699, Business €2.499)
- Optional: PIXZERIA Hosting als wiederkehrender Umsatz

---

## 2. Tech-Stack

| Kategorie | Technologie |
|-----------|-------------|
| **Frontend Framework** | React 18 + TypeScript |
| **Routing** | Wouter (leichtgewichtige Alternative zu React Router) |
| **State Management** | TanStack Query (React Query) v5 |
| **Styling** | Tailwind CSS 3.4 + Custom CSS Variables |
| **UI Components** | shadcn/ui + Radix UI Primitives |
| **Icons** | Lucide React |
| **Forms** | React Hook Form + Zod Validation |
| **Backend** | Express.js + Node.js 20 |
| **Database** | PostgreSQL (Neon Serverless) + Drizzle ORM |
| **Build Tool** | Vite 5 (Frontend) + esbuild (Backend) |
| **Type Safety** | TypeScript 5.6, Drizzle-Zod für Schema-Typen |

---

## 3. Struktur

```
pixzeria/
├── client/                    # Frontend (React SPA)
│   └── src/
│       ├── components/        # Wiederverwendbare Komponenten
│       │   └── ui/            # shadcn/ui Base-Components
│       ├── hooks/             # Custom React Hooks
│       ├── lib/               # Utilities (queryClient, utils)
│       └── pages/             # Route-Komponenten
├── server/                    # Backend (Express)
│   ├── index.ts               # Server Entry Point
│   ├── routes.ts              # API Endpoints
│   ├── storage.ts             # Database Interface
│   └── vite.ts                # Vite Dev-Server Integration
├── shared/                    # Gemeinsam genutzte Typen
│   └── schema.ts              # Drizzle DB Schema + Zod Schemas
├── public/                    # Statische Assets
├── attached_assets/           # Bilder (Referenzprojekte, Logo)
├── vercel.json                # Vercel Deployment Config
├── package.json               # Dependencies & Scripts
└── replit.md                  # Projekt-Dokumentation
```

---

## 4. Pages/Routes

| Route | Komponente | Zweck |
|-------|------------|-------|
| `/` | `Home` | Landing Page mit allen Sections |
| `/admin` | `Admin` | Blog-Verwaltung (CRUD) |
| `/blog/:id` | `BlogPost` | Einzelner Blog-Artikel |
| `/agb` | `AGB` | Allgemeine Geschäftsbedingungen |
| `/datenschutz` | `Datenschutz` | Datenschutzerklärung + Cookie-Einstellungen |
| `/impressum` | `Impressum` | Rechtliche Informationen |
| `/danke` | `Danke` | Bestätigungsseite nach Formular-Absendung |
| `/seo-example` | `SEOExample` | Demo-Seite für SEO Best Practices |
| `*` | `NotFound` | 404 Fehlerseite |

---

## 5. Wichtige Components

| Komponente | Aufgabe | Verwendet in |
|------------|---------|--------------|
| **Header** | Navigation, Mobile Menu (Sheet), Logo | Alle Seiten |
| **Hero** | Hauptbanner, CTAs, Animiertes Bild | Home |
| **Services** | Leistungsübersicht mit Icons | Home |
| **Pricing** | 3 Pakete + Add-ons + Bestellformular | Home |
| **WebsiteCheck** | Kostenloses Website-Analyse Formular | Home |
| **CaseStudies** | Referenzprojekte mit Erfolgsmetriken | Home |
| **About** | Über uns, Werte, NPS Score | Home |
| **ContactCTA** | Kontaktformular im Dialog | Home |
| **Footer** | Links, Social, Legal, Cookie-Settings | Alle Seiten |
| **CookieBanner** | DSGVO Cookie Consent + Settings Dialog | Global (App.tsx) |

---

## 6. Datenfluss

```
┌─────────────────────────────────────────────────────────────┐
│                        DATENQUELLEN                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  STATISCH                    API (PostgreSQL)               │
│  ─────────                   ───────────────               │
│  • Preise/Pakete (hardcoded) • Blog Posts (/api/blog)      │
│  • Services (hardcoded)      • Blog Admin (/api/admin/blog)│
│  • Case Studies (hardcoded)  • Website Checks (deprecated)  │
│  • Bilder (attached_assets)  • Contact Requests (deprecated)│
│                                                             │
│  FORMSUBMIT (extern)                                        │
│  ──────────────────                                         │
│  • Kontaktformulare → Muenir.gencer@gmail.com              │
│  • Website-Check → Muenir.gencer@gmail.com                  │
│  • Paketbestellungen → Muenir.gencer@gmail.com              │
│                                                             │
│  LOCALSTORAGE                                               │
│  ────────────                                               │
│  • Cookie Consent (pixzeria-cookie-consent)                │
│  • Consent Timestamp (pixzeria-cookie-timestamp)           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. Formulare & Email

### Formulare

| Formular | Komponente | Felder |
|----------|------------|--------|
| Website-Check | `website-check.tsx` | URL, E-Mail |
| Kontaktanfrage | `contact-cta.tsx` | Name, E-Mail, Firma, Nachricht |
| Paketbestellung | `pricing.tsx` | Name, E-Mail, Firma, Nachricht + Paket + Add-ons |

### Email-Versand

**Methode:** FormSubmit.co (serverlos, kein Backend nötig)

```html
<form action="https://formsubmit.co/Muenir.gencer@gmail.com" method="POST">
```

### Spam-Schutz

| Maßnahme | Implementierung |
|----------|-----------------|
| Honeypot | `<input name="_honey" style="display:none">` |
| Fake Field | `<input name="_fax" tabIndex={-1} autoComplete="off">` |
| Time Trap | 3 Sekunden Mindest-Wartezeit vor Submit |
| Blacklist | `_blacklist="viagra, casino, crypto, seo service"` |
| CAPTCHA | Deaktiviert (`_captcha=false`) |

### Redirect nach Submit
Alle Formulare leiten nach `/danke` weiter.

---

## 8. Auth/Tracking/Cookies

### Cookie-Banner System

**Dateien:**
- `client/src/components/cookie-banner.tsx` – Banner + Settings Dialog
- `client/src/hooks/use-cookies.ts` – Consent State Management
- `client/src/pages/datenschutz.tsx` – Manuelle Cookie-Einstellungen

**Cookie-Kategorien:**
1. **Notwendig** (immer aktiv) – Session, Sicherheit
2. **Funktional** – Formular-Caching
3. **Analyse** – Google Analytics (wenn konfiguriert)
4. **Marketing** – Werbe-Tracking (wenn konfiguriert)

**Consent-Speicherung:**
- localStorage: `pixzeria-cookie-consent`, `pixzeria-cookie-timestamp`
- Gültigkeit: 6 Monate

### Footer Cookie-Settings Problem (behoben)

**Problem:** Modal öffnete nicht auf Legal-Seiten, UI "fror ein".

**Ursachen:**
1. CookieBanner war nur in `home.tsx`, nicht global
2. Kein Route-Change Handler zum Schließen des Modals

**Fix:**
- CookieBanner nach `App.tsx` verschoben (global)
- `useLocation` Hook für Route-Change Detection
- Event-basierte Kommunikation: `window.dispatchEvent(new CustomEvent("open-cookie-settings"))`

**Code-Stellen:**
- `client/src/App.tsx:42` – CookieBanner Mount
- `client/src/components/cookie-banner.tsx:14-30` – Event Listener + Route Handler
- `client/src/components/footer.tsx:147-150` – Event Dispatch

### Tracking

**Aktuell:** Kein aktives Tracking implementiert.

**Vorbereitet für:** Google Analytics (gtag) mit Consent-Integration.

---

## 9. Deployment

### Zielplattform: Vercel

**vercel.json:**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Build Commands

| Umgebung | Command |
|----------|---------|
| Development | `npm run dev` |
| Build | `vite build` |
| Output | `dist/public` (nur Frontend für Vercel) |

### Vercel Settings

| Setting | Wert |
|---------|------|
| Root Directory | `/` |
| Framework Preset | Vite |
| Build Command | `vite build` |
| Output Directory | `dist/public` |

### Environment Variables

| Variable | Beschreibung | Benötigt für Vercel? |
|----------|--------------|---------------------|
| `DATABASE_URL` | PostgreSQL Connection String | Nur wenn Blog aktiv |
| `SESSION_SECRET` | Express Session Secret | Nein (kein Backend) |

**Hinweis:** Für reine SPA-Deployment (nur Frontend) werden keine Secrets benötigt, da FormSubmit die Formulare verarbeitet.

---

## 10. Risiken & Verbesserungen

### Performance

| Problem | Lösung |
|---------|--------|
| Große Bundle-Size durch alle Radix Components | Tree-shaking prüfen, nur genutzte importieren |
| Externe Bilder (Unsplash) | Lokale Kopien + WebP Format |
| Kein Lazy Loading für Sections | React.lazy() für Below-the-fold Content |

### SEO

| Problem | Lösung |
|---------|--------|
| SPA ohne SSR | Pre-rendering für wichtige Seiten |
| Fehlende Meta-Tags | React Helmet oder Vercel Edge Functions |
| Kein sitemap.xml | Statische Sitemap generieren |
| Kein robots.txt | Datei erstellen |

### Accessibility

| Problem | Lösung |
|---------|--------|
| Fehlende Skip-Links | Skip to main content Link |
| Kontrast bei Pizza-Farben | WCAG AA Check für Gold/Orange |
| Fehlende aria-labels | Buttons/Links mit Icons prüfen |

### Security

| Problem | Lösung |
|---------|--------|
| Admin-Route ungeschützt | Auth implementieren oder entfernen |
| FormSubmit E-Mail sichtbar im Code | Akzeptables Risiko (FormSubmit hat Spam-Schutz) |
| Keine CSP Headers | Vercel Headers Config |

### Developer Experience

| Problem | Lösung |
|---------|--------|
| Große Komponenten (pricing.tsx 400+ Zeilen) | In Sub-Components aufteilen |
| Hardcoded Texte | i18n oder CMS vorbereiten |
| Keine Tests | Jest + React Testing Library |
| Kein Error Boundary | Global Error Boundary Component |

---

## 11. Design / UX

### Farb-Palette (Pizza-Theme)

| Farbe | CSS Variable | Hex | Verwendung |
|-------|--------------|-----|------------|
| Pizza Red | `--pizza-red` | `#EF4444` | Primary CTA, Akzente |
| Pizza Red Dark | `--pizza-red-dark` | `#B91C1C` | Hover States |
| Pizza Orange | `--pizza-orange` | `#FB923C` | Secondary, Badges |
| Pizza Gold | `--pizza-gold` | `#EAB308` | Highlights, Starter Badge |
| Pizza Cream | `--pizza-cream` | `#FEFEFE` | Backgrounds |
| Pizza Dark | `--pizza-dark` | `#262626` | Text, Footer |

### Typografie

| Element | Font | Gewicht |
|---------|------|---------|
| Headings | Poppins | 600-700 |
| Brand/Logo Text | Fredoka One | 400 |
| Body | Inter | 400-500 |

### UI Patterns

| Pattern | Implementierung |
|---------|-----------------|
| Rounded Buttons | `rounded-full` für CTAs |
| Card Shadows | `shadow-lg hover:shadow-2xl` |
| Gradient Backgrounds | `bg-gradient-to-br from-pizza-cream to-white` |
| Floating Animations | `animate-float` für Hero-Bild |
| Mobile Menu | Shadcn Sheet (Slide-In) |

### Responsive Breakpoints

| Breakpoint | Tailwind | Anpassungen |
|------------|----------|-------------|
| Mobile | `< 768px` | Stack Layout, Hamburger Menu |
| Tablet | `md:` | 2-Column Grids |
| Desktop | `lg:` | 3-Column Grids, Full Navigation |

### Bekannte UX Issues (behoben)

| Issue | Status | Fix |
|-------|--------|-----|
| Horizontales Scrollen Mobile | ✅ Behoben | `overflow-hidden` auf About Section + global `overflow-x: hidden` |
| Zurück-Button hinter Header | ✅ Behoben | `pt-28` statt `py-16` auf Legal-Seiten |
| Cookie Settings nicht erreichbar | ✅ Behoben | CookieBanner global + Event-basierte Kommunikation |

---

*Erstellt: Januar 2026 | Letzte Aktualisierung: 17.01.2026*
