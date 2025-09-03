# ChurchTools Custom Module Template

Ein vollständiges Template für die Entwicklung von ChurchTools Custom Modules mit integriertem Design System und Deployment-Automatisierung.

## Features

✅ **Vue 3 + TypeScript** - Moderne Frontend-Entwicklung  
✅ **ChurchTools Design System** - Vollständige UI-Komponenten Integration  
✅ **Automatisches Deployment** - ZIP-Packaging für ChurchTools Upload  
✅ **Development Tools** - ESLint, Prettier, Hot Reload  
✅ **Git-Integration** - Versionierung und Release-Management  

## Schnellstart

### Option 1: Manuell verwenden

1. **Template verwenden:**
   ```bash
   git clone https://github.com/bwl21/ct-plugin-template-ona.git mein-neues-modul
   cd mein-neues-modul
   rm -rf .git
   ```

2. **Projekt anpassen:**
   - `package.json`: `name` ändern
   - `.env`: `VITE_KEY` auf Ihr Modulkürzel setzen
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

### Option 2: Mit Ona AI (Empfohlen)

1. **Neuen Ona Account erstellen** auf [ona.ai](https://ona.ai)

2. **Prompt verwenden** - Kopiere den Inhalt aus `prompt-for-ona.md` und passe die Projekt-Spezifikationen an:
   ```markdown
   ## HIER ANPASSEN:
   **Titel:** "Mein Neues Modul"
   **Kürzel:** "meinModul"
   **Zweck:** "Beschreibung des Moduls"
   **Features:** "Feature 1, Feature 2, Feature 3, Feature 4"
   ```

3. **Prompt eingeben** - Füge den angepassten Prompt in Ona ein

4. **Automatische Erstellung** - Ona erstellt das komplette Projekt:
   - ✅ Template-Download und Setup
   - ✅ Projekt-Anpassungen
   - ✅ ChurchTools Design System Integration
   - ✅ Git-Repository Initialisierung
   - ✅ Development Server Start
   - ✅ Deployment-System Setup

**Vorteil:** Vollautomatische Erstellung in wenigen Minuten ohne manuelle Schritte!

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

1. **Modulkürzel:** In `.env` als `VITE_KEY` definieren
2. **API-Zugriff:** ChurchTools Client ist vorkonfiguriert
3. **Routing:** Base-URL wird automatisch gesetzt (`/ccm/[VITE_KEY]/`)

### Upload in ChurchTools

1. ChurchTools Admin-Bereich öffnen
2. "Custom Modules" navigieren
3. ZIP-Datei aus `releases/` hochladen
4. Modul aktivieren

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

## Ona AI Integration

Dieses Template ist speziell für die Verwendung mit [Ona AI](https://ona.ai) optimiert:

### Prompt-Datei
- `prompt-for-ona.md` - Vollständiger Prompt für automatische Projekterstellung
- Einfach Projekt-Spezifikationen anpassen und in Ona eingeben
- Automatische Erstellung des kompletten ChurchTools Custom Modules

### Vorteile mit Ona
- ⚡ **Schnell** - Projekt in wenigen Minuten erstellt
- 🎯 **Präzise** - Keine manuellen Fehler
- 🔄 **Konsistent** - Immer gleiche Qualität
- 📚 **Dokumentiert** - Vollständige Dokumentation inklusive

## Support

- **ChurchTools API:** [ChurchTools Forum](https://forum.church.tools)
- **Template Issues:** [GitHub Issues](https://github.com/bwl21/ct-plugin-template-ona/issues)
- **Ona AI:** [Ona Documentation](https://ona.ai)

## Lizenz

Dieses Template steht unter der MIT-Lizenz zur freien Verfügung.