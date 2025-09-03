# mein ki modell

Ein ChurchTools Custom Module für KI-Funktionalitäten.

**Titel:** mein ki modell  
**Kürzel:** meinKi

## Beschreibung

Dieses Custom Module erweitert ChurchTools um KI-basierte Funktionen und Automatisierungen.

## Konfiguration

In der `.env` Datei können die notwendigen Konstanten für das Projekt konfiguriert werden:

- `VITE_KEY=meinKi` - Das Kürzel des Plugins in ChurchTools
- `VITE_BASE_URL` - Die URL der ChurchTools-Instanz für lokale Entwicklung
- `VITE_USERNAME` und `VITE_PASSWORD` - Anmeldedaten für lokale Entwicklung

⚠️ **Wichtig:** Speichere keine Produktions-Anmeldedaten in dieser Datei!

## Technologie-Stack

- Vue 3 mit TypeScript
- Pinia für State Management
- Vue Router für Navigation
- ChurchTools Client API
- ChurchTools Design System Integration
- Vite als Build-Tool
- ESLint und Prettier für Code-Qualität

## Design System

Das Modul verwendet das ChurchTools Design System mit folgenden Features:

### Farben
- **Primary:** `#0e204b` (ChurchTools Blau)
- **Secondary:** `#f8f9fa` (Heller Hintergrund)
- **Accent:** `#007bff` (Aktionsfarbe)
- **Success/Warning/Danger:** Standard Bootstrap-Farben

### CSS-Klassen
- `ct-btn`, `ct-btn-primary`, `ct-btn-secondary` - Buttons
- `ct-card`, `ct-card-header`, `ct-card-body` - Karten-Layout
- `ct-container` - Container mit max-width
- `ct-h1` bis `ct-h6` - Typografie
- `ct-form-control`, `ct-form-group` - Formulare
- `ct-alert-*` - Benachrichtigungen
- `ct-badge-*` - Badges
- Utility-Klassen: `ct-text-center`, `ct-mb-*`, `ct-p-*`, etc.

### Responsive Design
- Mobile-first Ansatz
- Breakpoint bei 768px
- Grid-Layout für Feature-Übersicht

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## UI-Komponenten

Das Modul zeigt eine moderne, ChurchTools-konforme Benutzeroberfläche mit:

- **Header-Karte** mit Modulname und Beschreibung
- **Interaktiver Test-Button** mit Zähler-Funktionalität
- **Feature-Grid** mit geplanten KI-Funktionen
- **Responsive Design** für Desktop und Mobile
- **Development-Navbar** (nur im Entwicklungsmodus)

## Entwicklung

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Code formatieren
npm run prettier

# Linting
npm run lint
```

## ChurchTools Integration

Das Modul ist als Custom Module für ChurchTools konzipiert und nutzt:
- ChurchTools Client für API-Zugriff
- Einheitliches Design System
- Plugin-Architektur mit Kürzel "meinKi"

Für Fragen zur ChurchTools API besuche das [Forum](https://forum.church.tools).
