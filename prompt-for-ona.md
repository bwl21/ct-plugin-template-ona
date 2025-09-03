# ChurchTools Custom Module mit Design System erstellen

Erstelle ein neues ChurchTools Custom Module mit vollständiger ChurchTools Design System Integration direkt im Root-Verzeichnis des Environments.

## HIER ANPASSEN:

**Titel:** "[IHR MODUL TITEL]"  
**Kürzel:** "[IHR KÜRZEL]"  
**Zweck:** "[BESCHREIBUNG DES MODULS]"  
**Features:** "[FEATURE 1, FEATURE 2, FEATURE 3, FEATURE 4]"

**Template:** 
**Zielverzeichnis:** Root des Environments (nicht in Unterordner)

## Anforderungen:

### 1. Projekt Setup (Root-Level)
- Clone Template-Repository temporär
- Kopiere ALLE Dateien direkt ins Root-Verzeichnis (nicht in Unterordner)
- Lösche temporäres Template-Verzeichnis
- Aktualisiere Metadaten:
  - `package.json`: name auf "[ihr-modul-name]"
  - `.env`: VITE_KEY auf "[IhrKürzel]"
  - `index.html`: title auf "[Ihr Modul Titel]"
- Bereinige .DS_Store und andere temporäre Dateien

### 2. ChurchTools Design System Integration
- Implementiere vollständiges Design System in `src/style.css` mit CSS-Variablen:
  - ChurchTools-Farben: `--ct-primary: #0e204b`, `--ct-secondary: #f8f9fa`
  - Alle `ct-*` CSS-Klassen für UI-Komponenten
- Buttons: `ct-btn`, `ct-btn-primary`, `ct-btn-secondary` mit Hover-Effekten
- Cards: `ct-card`, `ct-card-header`, `ct-card-body` mit Schatten
- Typography: `ct-h1` bis `ct-h6` mit korrekten Größen
- Forms: `ct-form-control`, `ct-form-group`, `ct-form-label`
- Alerts: `ct-alert-info/success/warning/danger`
- Utility-Klassen: `ct-text-center`, `ct-mb-*`, `ct-p-*`, `ct-d-flex`, etc.

### 3. Vue-Komponenten Update
- **src/App.vue:** Development-Navbar mit ChurchTools-Styling, `ct-main` Container
- **src/components/Start.vue:** 
  - Card-basiertes Layout mit Header "[Ihr Modul Titel]"
  - Beschreibung des Modulzwecks
  - Feature-Grid (4 Features basierend auf Ihren Anforderungen)
  - Interaktiver Test-Button mit Zähler-Funktionalität
  - Responsive Grid (mobile: 1 Spalte, desktop: 2x2)
- **index.html:** `cts` Klasse und ChurchTools-konforme Struktur

### 4. Vite-Konfiguration
- **vite.config.ts:** 
  - `server: { host: '0.0.0.0', port: 5173, allowedHosts: 'all' }`
  - Korrekte base-URL mit VITE_KEY
- Teste mit exec_preview für funktionierenden Development Server

### 5. Git Repository Setup (Root-Level)
- `git init` im Root-Verzeichnis
- Erweiterte .gitignore für Node.js/Vue (node_modules, dist, .env.local, etc.)
- **Wichtig:** Füge `releases/` zur .gitignore hinzu
- Git-Konfiguration: user.name und user.email setzen
- `git add .` und Initial Commit mit aussagekräftiger Commit-Message:
  ```
  Initial commit: ChurchTools Custom Module '[Ihr Modul Titel]'
  
  - Vue 3 + TypeScript setup
  - ChurchTools Design System integration
  - [Beschreibung der Hauptfeatures]
  - Responsive design for mobile and desktop
  - Vite configuration for development
  
  Co-authored-by: Ona <no-reply@ona.com>
  ```

### 6. Deployment Setup
- Template enthält bereits vollständiges Deployment-System
- Teste Deployment-Funktionalität mit `npm run deploy`
- Überprüfe dass `releases/` Ordner und Packaging-Scripts funktionieren

### 7. GitHub Setup Anleitung
Erstelle detaillierte Anleitung in README:
```bash
# 1. Neues Repository auf GitHub erstellen (ohne README, .gitignore, License)
# 2. Lokales Repository mit GitHub verbinden:
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
git branch -M main
git push -u origin main

# 3. Für Releases:
git tag v1.0.0
git push origin v1.0.0
npm run deploy
```

### 8. Deutsche Dokumentation
- **README.md:** Vollständige deutsche Dokumentation mit:
  - Projektbeschreibung und Zweck
  - Hauptfeatures des Moduls
  - Design System Dokumentation (Farben, CSS-Klassen)
  - Entwicklungsanweisungen (npm install, npm run dev, npm run build)
  - **Deployment-Sektion:**
    - `npm run build` - Production Build
    - `npm run deploy` - Build + Package für ChurchTools
    - ZIP-Datei Format Erklärung
    - ChurchTools Upload Anweisungen
  - ChurchTools Integration Details (Kürzel, API-Nutzung)
  - GitHub Setup Schritt-für-Schritt
  - UI-Komponenten Übersicht

## Erwartetes Ergebnis:

- ✅ Alle Projektdateien direkt im Root-Verzeichnis
- ✅ Funktionierendes Vue 3 + TypeScript ChurchTools Custom Module
- ✅ Vollständige ChurchTools Design System Integration
- ✅ Professional aussehende UI mit deutschen Inhalten
- ✅ Modulspezifische Features im responsive Grid-Layout
- ✅ Git-Repository mit Initial Commit
- ✅ Lauffähiger Development Server mit exec_preview
- ✅ **Deployment-System mit automatischem Packaging**
- ✅ **ZIP-Archive in releases/ mit korrekter Namenskonvention**
- ✅ Umfassende deutsche Dokumentation
- ✅ GitHub Upload Anleitung

## Deployment Workflow:

```bash
# 1. Entwicklung abschließen
git add .
git commit -m "feat: neue Funktionalität hinzugefügt"

# 2. Version taggen
git tag v1.0.0

# 3. Build und Package erstellen
npm run deploy

# 4. Ergebnis: releases/meinKi-v1.0.0-a1b2c3d.zip
# 5. ZIP-Datei in ChurchTools hochladen
```