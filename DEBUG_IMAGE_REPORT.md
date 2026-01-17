# Debug Report – Hero Image Broken

**Datum:** 17.01.2026  
**Problem:** Hero-Bild zeigt broken image icon mit Alt-Text "Modern web design office workspace"

---

## 1. Fundstelle

**Datei:** `client/src/components/hero.tsx`  
**Zeile:** 62-78 (img Element)

```tsx
<img 
  src="/assets/hero.jpg" 
  alt="Modern web design office workspace" 
  ...
/>
```

---

## 2. Ursache

### Root Cause: Falscher Public-Ordner

| Problem | Details |
|---------|---------|
| **Vite Root** | `client/` (siehe vite.config.ts Zeile 23) |
| **Expected Public** | `client/public/` |
| **Actual Location** | `public/` (Projekt-Root) |

**Vite Config:**
```ts
root: path.resolve(import.meta.dirname, "client"),
```

Das Bild wurde nach `public/assets/hero.jpg` heruntergeladen, aber Vite sucht unter `client/public/assets/hero.jpg`.

### Zusätzliches Problem: React Warning

```
React does not recognize the `fetchPriority` prop on a DOM element
```

React erwartet lowercase `fetchpriority`, nicht camelCase.

---

## 3. Änderungen

### A. Bild verschoben

```bash
# Vorher:
public/assets/hero.jpg

# Nachher:
client/public/assets/hero.jpg
```

### B. Code geändert (`hero.tsx`)

| Änderung | Vorher | Nachher |
|----------|--------|---------|
| Import | - | `import { useState } from "react"` |
| State | - | `const [imgError, setImgError] = useState(false)` |
| fetchPriority | `fetchPriority="high"` | Entfernt (React Warning) |
| Alt-Text | English | German: "Modernes Webdesign Arbeitsplatz" |
| onError | - | Fallback zu Unsplash URL |

### Neuer Code:

```tsx
const [imgError, setImgError] = useState(false);

<img 
  src={imgError 
    ? "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80" 
    : "/assets/hero.jpg"}
  alt="Modernes Webdesign Arbeitsplatz" 
  className="rounded-2xl shadow-2xl w-full h-full object-cover animate-float"
  width={800}
  height={600}
  loading="eager"
  onError={() => {
    console.warn("Hero image failed to load, using fallback");
    setImgError(true);
  }}
/>
```

---

## 4. Wie testen

### A. Development (Replit Preview)

1. Workflow neu starten
2. Seite neu laden
3. Hero-Bild sollte sichtbar sein
4. DevTools → Network → Filter "hero" → Status 200

### B. Console Check

```
# Bei erfolgreichem Laden: keine Meldung
# Bei Fehler: "Hero image failed to load, using fallback"
```

### C. Mobile Preview

1. DevTools → Device Toolbar (Ctrl+Shift+M)
2. iPhone oder Android auswählen
3. Bild sollte responsiv skalieren

### D. Vercel Production

Nach Deployment:
```bash
curl -I https://pixzeria.de/assets/hero.jpg
# Erwartung: HTTP/2 200
```

---

## 5. Verbleibende Dateien

| Pfad | Größe | Status |
|------|-------|--------|
| `client/public/assets/hero.jpg` | 60 KB | ✅ Aktiv |
| `public/assets/` | - | Kann gelöscht werden |

---

## 6. Lessons Learned

1. **Vite root beachten** – Wenn `root: "client"` gesetzt ist, liegt public unter `client/public/`
2. **fetchPriority** – React 18 erwartet lowercase in JSX
3. **onError Fallback** – Immer einbauen für kritische Bilder

---

*Erstellt: 17.01.2026 | Debug Complete*
