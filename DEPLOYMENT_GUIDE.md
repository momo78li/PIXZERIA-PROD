# PIXZERIA Deployment Guide

## Kostenloses Deployment-System für Kundenprojekte

### 1. Einmalige Einrichtung (nur einmal machen)

#### GitHub Account erstellen (kostenlos)
1. Gehen Sie zu https://github.com
2. Kostenlosen Account erstellen
3. Repository erstellen: "pixzeria-kunde-[name]"

#### Vercel Account erstellen (kostenlos)
1. Gehen Sie zu https://vercel.com
2. Mit GitHub-Account anmelden
3. Repository verknüpfen

### 2. Für jeden neuen Kunden

#### Repository erstellen
```bash
# 1. Neues Repository auf GitHub erstellen
# Name: pixzeria-kunde-mueller-bau (Beispiel)

# 2. Code hochladen
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/IHR-USERNAME/pixzeria-kunde-mueller-bau.git
git push -u origin main
```

#### Vercel Projekt erstellen
1. Vercel Dashboard öffnen
2. "New Project" → GitHub Repository auswählen
3. Framework: "Other" auswählen
4. Deploy klicken

### 3. Workflow für Änderungen

#### Entwicklung (sicher testen)
```bash
# 1. Staging-Branch erstellen
git checkout -b staging

# 2. Änderungen machen in Replit
# 3. Code zu GitHub pushen
git add .
git commit -m "Neue Funktion hinzugefügt"
git push origin staging
```

**Ergebnis:** Automatische Test-Website unter `ihr-projekt-staging.vercel.app`

#### Live schalten (wenn Test OK)
```bash
# 1. Staging zu Main mergen
git checkout main
git merge staging
git push origin main
```

**Ergebnis:** Automatische Aktualisierung der Live-Website

### 4. Kundenkommunikation

#### Test-Phase
- Senden Sie dem Kunden: `https://ihr-projekt-staging.vercel.app`
- Kunde testet und gibt Feedback
- Sie können gefahrlos weitere Änderungen machen

#### Live-Schaltung
- Nach Kunden-Freigabe: Live schalten
- Kunde bekommt finale URL: `https://ihr-projekt.vercel.app`
- Später können Sie eigene Domain verknüpfen

### 5. Vorteile für Sie

✓ **Keine Kosten** - GitHub + Vercel sind kostenlos
✓ **Kein Risiko** - Live-Website ist nie kaputt
✓ **Professionell** - Kunde kann vor Live-Schaltung testen
✓ **Automatisch** - Deployments passieren automatisch
✓ **Skalierbar** - Für jeden Kunden gleicher Prozess

### 6. Troubleshooting

**Problem:** Deployment schlägt fehl
- Lösung: Build-Logs in Vercel anschauen
- Meist: Dependency-Probleme oder Umgebungsvariablen

**Problem:** Database-Verbindung
- Lösung: DATABASE_URL in Vercel Umgebungsvariablen setzen

**Problem:** Assets nicht gefunden
- Lösung: Pfade in vercel.json anpassen

### 7. Erweiterte Features (optional)

#### Eigene Domain verknüpfen
1. Vercel Projekt → Settings → Domains
2. Kunden-Domain eingeben
3. DNS-Records beim Domain-Provider setzen

#### Automatische Backups
- Vercel macht automatische Backups
- Rollback mit einem Klick möglich

#### Branch-Preview
- Jeder Branch bekommt eigene URL
- Perfekt für A/B-Tests mit Kunden

### 8. Schritt-für-Schritt Checkliste

Für jeden neuen Kunden:
- [ ] GitHub Repository erstellen
- [ ] Code hochladen
- [ ] Vercel Projekt erstellen
- [ ] Staging-Branch erstellen
- [ ] Test-URL an Kunden senden
- [ ] Nach Freigabe live schalten
- [ ] Eigene Domain verknüpfen (optional)

**Zeit pro Kunde:** 10-15 Minuten Einrichtung
**Kosten:** 0€
**Risiko:** Minimiert