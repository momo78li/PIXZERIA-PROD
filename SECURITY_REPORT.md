# Security Report – Vercel Headers & Admin Protection

**Datum:** 17.01.2026  
**Task:** Sec1 + Sec2 aus ROADMAP.md

---

## 1. Security Headers (vercel.json)

### Gesetzte Headers

| Header | Wert | Zweck |
|--------|------|-------|
| `X-Content-Type-Options` | `nosniff` | Verhindert MIME-Type Sniffing |
| `X-Frame-Options` | `DENY` | Blockiert Einbettung in iframes (Clickjacking) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Kontrolliert welche Referrer-Infos gesendet werden |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Deaktiviert sensible Browser-APIs |
| `Content-Security-Policy` | (siehe unten) | Kontrolliert erlaubte Ressourcen |

### Content-Security-Policy Details

```
default-src 'self';
script-src 'self' 'unsafe-inline' https://replit.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com data:;
img-src 'self' data: https:;
connect-src 'self' https://formsubmit.co https:;
frame-ancestors 'none';
```

| Direktive | Erlaubt | Begründung |
|-----------|---------|------------|
| `default-src 'self'` | Nur eigene Domain | Sichere Basis |
| `script-src 'self' 'unsafe-inline'` | Eigene + Inline-Scripts | React/Vite benötigt inline für HMR, Replit Dev-Banner |
| `style-src 'self' 'unsafe-inline'` | + Google Fonts | Tailwind + shadcn nutzen inline Styles |
| `font-src 'self' data:` | + Google Fonts, data: | Poppins, Inter, Fredoka von gstatic |
| `img-src 'self' data: https:` | Alle HTTPS Bilder | Unsplash-Fallback, data: für SVGs |
| `connect-src 'self' https:` | Alle HTTPS APIs | FormSubmit.co, potentielle APIs |
| `frame-ancestors 'none'` | Niemand | Zusätzlicher Clickjacking-Schutz |

### Warum 'unsafe-inline'?

| Grund | Details |
|-------|---------|
| **React/Vite HMR** | Dev-Modus injiziert Inline-Scripts |
| **shadcn/Radix** | Komponenten nutzen `style` Props |
| **Tailwind** | Dynamische Klassen werden inline generiert |
| **Alternative** | Nonce-basierte CSP würde SSR erfordern |

**Risiko-Bewertung:** Akzeptabel für SPA ohne User-Generated Content.

---

## 2. /admin Route in Production deaktiviert

### Implementierung

**Datei:** `client/src/App.tsx`

```tsx
const isProduction = import.meta.env.MODE === "production";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {!isProduction && <Route path="/admin" component={Admin} />}
      {/* ... */}
      <Route component={NotFound} />
    </Switch>
  );
}
```

### Verhalten

| Umgebung | /admin Zugriff | Ergebnis |
|----------|----------------|----------|
| Development (`npm run dev`) | ✅ Erlaubt | Admin-Panel sichtbar |
| Production (`npm run build`) | ❌ Blockiert | NotFound (404) |

### Warum diese Lösung?

| Alternative | Nachteil |
|-------------|----------|
| Vercel Password Protection | Kostenpflichtig (Pro Plan) |
| Basic Auth Backend | Erfordert Server, Komplexität |
| Route komplett entfernen | Keine Dev-Möglichkeit mehr |
| **Conditional Render** | ✅ Kostenlos, minimal-invasiv |

### Zusätzlicher Schutz

1. **robots.txt** blockiert bereits `/admin`:
   ```
   Disallow: /admin
   ```

2. **CSP frame-ancestors** verhindert iframe-Einbettung

3. **X-Frame-Options: DENY** als Fallback

---

## 3. Verifizierung

### Security Headers testen

```bash
# Nach Vercel Deployment:
curl -I https://pixzeria.de | grep -E "(X-Content|X-Frame|Referrer|Content-Security|Permissions)"
```

**Erwartete Ausgabe:**
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; ...
```

### Online-Tools

| Tool | URL |
|------|-----|
| Security Headers | https://securityheaders.com/?q=pixzeria.de |
| Mozilla Observatory | https://observatory.mozilla.org/analyze/pixzeria.de |
| CSP Evaluator | https://csp-evaluator.withgoogle.com/ |

### /admin in Production testen

```bash
# Nach Deployment:
curl -s https://pixzeria.de/admin | grep -o "404"
```

Sollte 404/NotFound rendern.

---

## 4. Bekannte Einschränkungen

| Einschränkung | Grund | Workaround |
|---------------|-------|------------|
| `'unsafe-inline'` für Scripts | Vite/React Kompatibilität | Nonce-basierte CSP bei SSR-Migration |
| Kein echtes Auth | Kosten/Komplexität | Admin-Panel nur in Dev |
| Keine Rate-Limiting | Vercel Free Tier | FormSubmit hat eigenes Limit |

---

## 5. Dateien geändert

| Datei | Änderung |
|-------|----------|
| `vercel.json` | Security Headers hinzugefügt |
| `client/src/App.tsx` | /admin Route nur in Dev |

---

## 6. Security Score Erwartung

| Metrik | Vorher | Nachher |
|--------|--------|---------|
| SecurityHeaders.com | D/F | A/B |
| Mozilla Observatory | F | B+ |
| OWASP Top 10 Coverage | Gering | Mittel |

---

*Erstellt: 17.01.2026 | Tasks Sec1 + Sec2 Complete*
