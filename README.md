# ChurchTools Extension Template

Ein vollständiges Template für die Entwicklung von ChurchTools Extensions mit integriertem Design System und Deployment-Automatisierung.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/bwl21/ct-extension-template-ona)

## Features

✅ **Vue 3 + TypeScript** - Moderne Frontend-Entwicklung  
✅ **ChurchTools Design System** - Vollständige UI-Komponenten Integration  
✅ **Automatisches Deployment** - ZIP-Packaging für ChurchTools Upload  
✅ **Development Tools** - ESLint, Prettier, Hot Reload  
✅ **Git-Integration** - Versionierung und Release-Management  

## Schnellstart

### Option 1: Fork + Gitpod + Ona AI (Empfohlen) 🚀

**Der einfachste und schnellste Weg:**

1. **Template forken:**
   - Gehe zu https://github.com/bwl21/ct-extension-template-ona
   - Klicke **"Fork"** → Erstelle Fork in deinem GitHub Account
   - Benenne das Repository um (z.B. `meine-neue-extension`)

2. **In Gitpod öffnen:**
   - Klicke den Gitpod-Button in deinem geforkten Repository
   - Oder manuell: `https://gitpod.io/#github.com/IHR-USERNAME/IHR-REPOSITORY`

3. **Ona AI verwenden:**
   - Neuen Ona Account erstellen auf [ona.ai](https://ona.ai)
   - Prompt aus `prompt-for-gitpod.md` kopieren und anpassen
   - In Ona eingeben → Automatische Projekterstellung
   - **Kosten:** ~3-5 OCU (noch günstiger als Standalone-Version)

**Vorteile:**
- ✅ GitHub-Integration bereits vorhanden
- ✅ Kann direkt pushen ohne Authentifizierung  
- ✅ Eigenes Repository = volle Kontrolle
- ✅ Noch günstiger (weniger OCU durch weniger Setup-Schritte)

### Option 2: Manuell verwenden

1. **Template verwenden:**
   ```bash
   git clone https://github.com/bwl21/ct-extension-template-ona.git meine-neue-extension
   cd meine-neue-extension
   rm -rf .git
   ```

2. **Projekt anpassen:**
   - `package.json`: `name` ändern
   - `.env`: `VITE_KEY` auf Ihr Extension-Kürzel setzen
   - `index.html`: `title` anpassen
   - `src/components/Start.vue`: Inhalte anpassen

3. **Dependencies installieren:**
   ```bash
   npm install
   ```

4. **Development starten:**
   ```bash
   npm run dev
   ```

### Option 3: Ona AI (Standalone) 🤖

**Was ist Ona AI?**
Ona ist ein KI-basierter Software-Engineering-Agent, der komplexe Entwicklungsaufgaben automatisch ausführt. Im Gegensatz zu ChatGPT kann Ona direkt Dateien erstellen, Code ausführen, Git-Repositories verwalten und komplette Projekte aufsetzen.

**Kosten:**
- **Kostenlose Testphase** verfügbar
- **Pay-per-Use** Modell basierend auf OCU (Output Compute Units)
- **Preisbeispiel:** 40 OCU ≈ $10
- Dieses Template kostet ca. **5-10 OCU**

**Workflow:**

1. **Account erstellen** auf [ona.ai](https://ona.ai)
   - Registrierung mit E-Mail
   - Kostenlose OCU zum Testen erhalten

2. **Prompt anpassen** - Kopiere `prompt-for-ona.md` und ändere:
   ```markdown
   ## HIER ANPASSEN:
   **Titel:** "Mein Neues Modul"
   **Kürzel:** "meinModul"
   **Zweck:** "Beschreibung des Moduls"
   **Features:** "Feature 1, Feature 2, Feature 3, Feature 4"
   ```

3. **Prompt eingeben** - Füge den angepassten Prompt in Ona ein

4. **Automatische Erstellung** - Ona führt alle Schritte aus:
   - ✅ Template-Download und Setup
   - ✅ Projekt-Anpassungen (Namen, Kürzel, Inhalte)
   - ✅ ChurchTools Design System Integration
   - ✅ Git-Repository Initialisierung mit Commits
   - ✅ Development Server Start mit Preview-URL
   - ✅ Deployment-System Setup und Test

**Vorteile gegenüber manueller Erstellung:**
- ⚡ **10x schneller** - 5 Minuten statt 1-2 Stunden
- 🎯 **Fehlerfrei** - Keine Tippfehler oder vergessene Schritte
- 🔄 **Konsistent** - Immer gleiche Qualität und Struktur
- 📚 **Vollständig** - Inklusive Dokumentation und Tests
- 🚀 **Sofort einsatzbereit** - Mit laufendem Development Server

## Projekt-Struktur

```
├── src/
│   ├── components/          # Vue-Komponenten
│   ├── style.css           # ChurchTools Design System
│   ├── App.vue             # Haupt-App-Komponente
│   ├── main.ts             # Entry Point
│   ├── router.ts           # Vue Router
│   └── store.ts            # Pinia Store
├── scripts/
│   └── package.js          # Deployment-Script
├── releases/               # ZIP-Archive für ChurchTools
├── dist/                   # Build-Output
├── .env                    # Umgebungsvariablen
├── vite.config.ts          # Vite-Konfiguration
└── package.json            # NPM-Konfiguration
```

## ChurchTools Design System

Das Template enthält ein vollständiges ChurchTools Design System:

### Farben
- `--ct-primary: #0e204b` (ChurchTools Blau)
- `--ct-secondary: #f8f9fa` (Heller Hintergrund)
- `--ct-accent: #007bff` (Aktionsfarbe)

### CSS-Klassen
- **Buttons:** `ct-btn`, `ct-btn-primary`, `ct-btn-secondary`
- **Cards:** `ct-card`, `ct-card-header`, `ct-card-body`
- **Typography:** `ct-h1` bis `ct-h6`
- **Forms:** `ct-form-control`, `ct-form-group`, `ct-form-label`
- **Alerts:** `ct-alert-info/success/warning/danger`
- **Utilities:** `ct-text-center`, `ct-mb-*`, `ct-p-*`, `ct-d-flex`

## Entwicklung

```bash
# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Code formatieren
npm run prettier

# Linting
npm run lint
```

## Deployment

### Automatisches Packaging

```bash
# Build und Package in einem Schritt
npm run deploy

# Nur Package erstellen (nach manuellem Build)
npm run package
```

### ZIP-Datei Format

Die erstellten ZIP-Archive folgen dem Format: `[kürzel]-[tag]-[commit].zip`

- **Kürzel:** Aus VITE_KEY in .env
- **Tag:** Git-Tag oder "v0.0.0" falls kein Tag
- **Commit:** Kurzer Git-Commit-Hash

**Beispiel:** `meinModul-v1.0.0-a1b2c3d.zip`

### Deployment Workflow

```bash
# 1. Entwicklung abschließen
git add .
git commit -m "feat: neue Funktionalität"

# 2. Version taggen (optional)
git tag v1.0.0

# 3. Build und Package erstellen
npm run deploy

# 4. ZIP-Datei in ChurchTools hochladen
# Datei: releases/[kürzel]-[tag]-[commit].zip
```

## ChurchTools Integration

### Konfiguration

1. **Extension-Kürzel:** In `.env` als `VITE_KEY` definieren
2. **API-Zugriff:** ChurchTools Client ist vorkonfiguriert
3. **Routing:** Base-URL wird automatisch gesetzt (`/ccm/[VITE_KEY]/`)

### Upload in ChurchTools

1. ChurchTools Admin-Bereich öffnen
2. "Extensions" navigieren
3. ZIP-Datei aus `releases/` hochladen
4. Extension aktivieren

## Anpassung

### Neue Komponenten

Erstelle neue Vue-Komponenten in `src/components/` und verwende die ChurchTools Design System Klassen.

### Styling

Erweitere `src/style.css` mit zusätzlichen Styles, die das ChurchTools Design System ergänzen.

### API-Integration

Nutze den vorkonfigurierten `churchtoolsClient` für API-Aufrufe:

```typescript
import { churchtoolsClient } from '@churchtools/churchtools-client';

// Beispiel API-Aufruf
const response = await churchtoolsClient.get('/api/persons');
```

## Technologie-Stack

- **Vue 3** - Progressive JavaScript Framework
- **TypeScript** - Typisierte JavaScript-Entwicklung
- **Vite** - Schneller Build-Tool und Dev-Server
- **Pinia** - Vue State Management
- **Vue Router** - Client-side Routing
- **ChurchTools Client** - API-Integration
- **ESLint + Prettier** - Code-Qualität und Formatierung

## Ona AI Integration 🤖

Dieses Template ist speziell für die Verwendung mit [Ona AI](https://ona.ai) optimiert - einem KI-Software-Engineering-Agent, der komplette Extensions automatisch erstellt.

### Was macht Ona anders?
Im Gegensatz zu ChatGPT oder anderen KI-Tools kann Ona:
- 📁 **Dateien erstellen und bearbeiten**
- 🔧 **Code kompilieren und ausführen**
- 🌐 **Development Server starten**
- 📦 **Git-Repositories verwalten**
- 🚀 **Komplette Projekte aufsetzen**

### Prompt-System
- `prompt-for-ona.md` - Optimierter Prompt für automatische Projekterstellung
- **OCU-effizient** - Minimaler Token-Verbrauch durch Template-Integration
- **Wiederverwendbar** - Für verschiedene ChurchTools Extensions anpassbar

### Kostenvergleich
| Methode | Zeit | Kosten | Fehlerrisiko |
|---------|------|--------|--------------|
| **Manuell** | 1-2 Stunden | Entwicklerzeit | Hoch |
| **Ona AI** | 5 Minuten | 5-10 OCU (≈$1.25-2.50) | Minimal |

### Warum Ona für dieses Template?
- **Deployment-System** bereits integriert (spart OCU)
- **Design System** vorkonfiguriert (keine Wiederholung)
- **Template-Struktur** optimiert für KI-Verarbeitung
- **Dokumentation** automatisch angepasst

## Support

- **ChurchTools API:** [ChurchTools Forum](https://forum.church.tools)
- **Template Issues:** [GitHub Issues](https://github.com/bwl21/ct-extension-template-ona/issues)
- **Ona AI:** [Ona Documentation](https://ona.ai)

## Lizenz

Dieses Template steht unter der MIT-Lizenz zur freien Verfügung.