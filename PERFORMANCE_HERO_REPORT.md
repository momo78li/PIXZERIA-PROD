# Performance Report – Hero Image Optimization

**Datum:** 17.01.2026  
**Task:** P2 aus ROADMAP.md – Hero Bild lokal + optimiert

---

## Zusammenfassung

| Metrik | Vorher | Nachher | Verbesserung |
|--------|--------|---------|--------------|
| **Quelle** | Unsplash (extern) | Lokal | Kein DNS-Lookup |
| **Dateigröße** | ~800KB (geschätzt) | 60KB | ~92% kleiner |
| **Format** | Auto (Unsplash) | JPG | Kontrolliert |
| **CLS** | Kein festes Seitenverhältnis | aspect-[4/3] + width/height | Eliminiert |

---

## Vorher

**URL:**
```
https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600
```

**Probleme:**
- Externe Abhängigkeit (DNS-Lookup, CORS)
- Keine Kontrolle über Caching
- Größe variiert je nach Unsplash-Optimierung
- Kein `width`/`height` → CLS (Cumulative Layout Shift)

---

## Nachher

**Neue Datei:** `client/public/assets/hero.jpg`

**Dateigröße:** 60 KB (optimiert durch Unsplash-Parameter `q=80`)

**Code-Änderungen in `client/src/components/hero.tsx`:**

```tsx
<div className="relative aspect-[4/3]">
  <img 
    src="/assets/hero.jpg" 
    alt="Modern web design office workspace" 
    className="rounded-2xl shadow-2xl w-full h-full object-cover animate-float"
    width={800}
    height={600}
    loading="eager"
    fetchPriority="high"
  />
</div>
```

**Änderungen:**
| Attribut | Wert | Zweck |
|----------|------|-------|
| `src` | `/assets/hero.jpg` | Lokale Datei |
| `width` | 800 | CLS-Vermeidung |
| `height` | 600 | CLS-Vermeidung |
| `aspect-[4/3]` | Container | Reserviert Platz vor Laden |
| `object-cover` | CSS | Bild füllt Container |
| `loading="eager"` | HTML | Sofort laden (LCP) |
| `fetchPriority="high"` | HTML | Browser-Priorität |

---

## Neue Dateien

| Datei | Größe | Format |
|-------|-------|--------|
| `client/public/assets/hero.jpg` | 60 KB | JPEG |

---

## Weitere Optimierungsmöglichkeiten

### 1. WebP-Konvertierung (Optional)

```bash
# Mit cwebp (wenn installiert):
cwebp -q 80 public/assets/hero.jpg -o public/assets/hero.webp

# Oder online: squoosh.app
```

**Erwartete Größe:** ~30-40 KB (50% Ersparnis)

### 2. AVIF-Format (Modern Browser)

```html
<picture>
  <source srcset="/assets/hero.avif" type="image/avif">
  <source srcset="/assets/hero.webp" type="image/webp">
  <img src="/assets/hero.jpg" ... />
</picture>
```

### 3. Responsive Images

```html
<img 
  src="/assets/hero.jpg"
  srcset="/assets/hero-400.jpg 400w, /assets/hero-800.jpg 800w"
  sizes="(max-width: 768px) 100vw, 50vw"
  ...
/>
```

---

## Wie verifizieren

### 1. Network Tab prüfen
- Chrome DevTools → Network → Filter "Img"
- Hero-Bild sollte von `/assets/hero.jpg` geladen werden
- Größe: ~60 KB

### 2. Lighthouse LCP messen
- Chrome DevTools → Lighthouse → Performance
- LCP sollte verbessert sein (kein DNS-Lookup mehr)

### 3. CLS prüfen
- Lighthouse → "Cumulative Layout Shift"
- Sollte 0 oder nahe 0 sein für Hero-Bereich

### 4. Cache-Header prüfen
- Network Tab → Response Headers
- Vercel setzt automatisch Cache-Control für statische Assets

---

## Technische Details

| Detail | Wert |
|--------|------|
| Original-URL | Unsplash photo-1553877522-43269d4ea984 |
| Download-Parameter | `w=800&h=600&q=80&auto=format&fit=crop` |
| Finale Größe | 60,823 Bytes |
| Seitenverhältnis | 4:3 (800x600) |
| Speicherort | `client/public/assets/` (Vite public folder) |

---

*Erstellt: 17.01.2026 | Task P2 Complete*
