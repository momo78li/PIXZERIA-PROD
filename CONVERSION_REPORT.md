# Conversion Report – Trust-Bar Implementation

**Datum:** 17.01.2026  
**Task:** C1 aus ROADMAP.md – Trust-Signale in Pricing-Sektion

---

## Was wurde hinzugefügt

### Neue Komponente: `client/src/components/trust-bar.tsx`

Eine Trust-Bar mit 4 Signalen direkt vor den Pricing-Paketen:

| # | Signal | Wert | Status |
|---|--------|------|--------|
| 1 | Google Bewertung | "In Vorbereitung" | ⚠️ TODO |
| 2 | Abgeschlossene Projekte | "XX+" | ⚠️ TODO |
| 3 | DSGVO-konform | "100%" | ✅ Echt |
| 4 | Fixpreis-Garantie | "Keine versteckten Kosten" | ✅ Echt |

### Geänderte Datei: `client/src/components/pricing.tsx`

- Import von `TrustBar` hinzugefügt (Zeile 9)
- `<TrustBar />` eingefügt zwischen Header und Pakete (nach Zeile 187)

---

## Echte Werte vs TODO/Placeholder

### ✅ Echte Werte (können so bleiben)

| Wert | Begründung |
|------|------------|
| "100% DSGVO-konform" | Website ist DSGVO-konform (Cookie-Banner, Datenschutz, Impressum vorhanden) |
| "Fixpreis-Garantie" | Pakete haben feste Preise ohne versteckte Kosten |

### ⚠️ Placeholder (müssen aktualisiert werden)

| Wert | Aktueller Text | Wo ändern |
|------|----------------|-----------|
| Google Bewertung | "In Vorbereitung" | `trust-bar.tsx` Zeile 9-11 |
| Projektzahl | "XX+" | `trust-bar.tsx` Zeile 14-16 |

---

## Wo man die Texte ändern kann

### Datei: `client/src/components/trust-bar.tsx`

```tsx
const trustItems = [
  {
    icon: Award,
    // TODO: Echte Google-Bewertung eintragen wenn vorhanden
    label: "Google Bewertung",
    value: "In Vorbereitung",  // ← HIER ÄNDERN: z.B. "4.9★"
    color: "text-pizza-gold"
  },
  {
    icon: CheckCircle,
    // TODO: Echte Projektzahl aktualisieren
    label: "Abgeschlossene Projekte",
    value: "XX+",  // ← HIER ÄNDERN: z.B. "47+"
    color: "text-green-600"
  },
  // ... weitere Items
];
```

### Beispiel für echte Werte:

```tsx
{
  label: "Google Bewertung",
  value: "4.9★",  // Wenn Google-Rezensionen vorhanden
}
```

```tsx
{
  label: "Abgeschlossene Projekte",
  value: "47+",  // Wenn Projektzahl bekannt
}
```

---

## Design-Entscheidungen

| Entscheidung | Begründung |
|--------------|------------|
| 4 Items | Optimal für 2x2 Grid auf Mobile, 4-Spalten auf Desktop |
| Dezente Farben | B2B-konform, nicht kitschig |
| Icons aus Lucide | Konsistent mit Rest der Website |
| Backdrop-blur | Modernes Glasmorphism, hebt sich ab |
| Platzierung vor Paketen | Baut Vertrauen auf bevor Preise sichtbar |

---

## Responsive Verhalten

| Breakpoint | Layout |
|------------|--------|
| Mobile (<768px) | 2x2 Grid |
| Desktop (≥768px) | 4 Spalten inline |

---

## Nächste Schritte

1. **Google Business Profile** einrichten → Bewertung eintragen
2. **Projektzahl** ermitteln → "XX+" durch echte Zahl ersetzen
3. **Optional:** Weitere Trust-Signale hinzufügen (z.B. "Made in Germany", Zertifikate)

---

*Erstellt: 17.01.2026 | Task C1 Complete*
