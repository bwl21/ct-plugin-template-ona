# ChurchTools Extension anpassen (Fork + Gitpod)

Passe das bereits geforkte ChurchTools Extension Template an deine spezifischen Anforderungen an.

## HIER ANPASSEN:

**Titel:** "[IHR MODUL TITEL]"  
**Kürzel:** "[IHR KÜRZEL]"  
**Zweck:** "[BESCHREIBUNG DES MODULS]"  
**Features:** "[FEATURE 1, FEATURE 2, FEATURE 3, FEATURE 4]"

## Anforderungen:

### 1. Projekt-Metadaten aktualisieren
- Aktualisiere Metadaten mit den oben definierten Werten:
  - `package.json`: name auf den Titel (kleingeschrieben, mit Bindestrichen)
  - `.env`: VITE_KEY auf das definierte Kürzel
  - `index.html`: title auf den definierten Titel

### 2. Vue-Komponenten anpassen
- **src/components/Start.vue:** 
  - Card-Header mit dem definierten Titel
  - Beschreibung aus dem definierten Zweck
  - Feature-Grid mit den 4 definierten Features
  - Responsive Grid beibehalten (mobile: 1 Spalte, desktop: 2x2)

### 3. Development Server testen
- Teste mit exec_preview für funktionierenden Development Server
- Überprüfe dass alle Anpassungen korrekt angezeigt werden

### 4. Git-Repository aktualisieren
- `git add .` und Commit mit aussagekräftiger Commit-Message:
  ```
  feat: Customize extension '[DEFINIERTER TITEL]'
  
  - Updated project metadata and branding
  - Customized UI with specific features: [DEFINIERTE FEATURES]
  - Extension purpose: [DEFINIERTER ZWECK]
  - Ready for ChurchTools deployment
  
  Co-authored-by: Ona <no-reply@ona.com>
  ```

### 5. Deployment testen
- Teste Deployment-System mit `npm run deploy`
- Überprüfe dass ZIP-Datei korrekt erstellt wird

## Erwartetes Ergebnis:

- ✅ Angepasste ChurchTools Extension mit spezifischen Inhalten
- ✅ Funktionierender Development Server mit exec_preview
- ✅ Korrekte Metadaten (package.json, .env, index.html)
- ✅ Angepasste Vue-Komponenten mit definierten Features
- ✅ Git-Commit mit Anpassungen
- ✅ Funktionierendes Deployment-System
- ✅ Bereit für ChurchTools Upload

## Deployment Workflow:

```bash
# 1. Entwicklung abschließen (bereits erledigt durch Ona)
git add .
git commit -m "feat: weitere Anpassungen"

# 2. Version taggen (optional)
git tag v1.0.0
git push origin v1.0.0

# 3. Build und Package erstellen
npm run deploy

# 4. ZIP-Datei in ChurchTools hochladen
# Datei: releases/[kürzel]-[tag]-[commit].zip
```

**Vorteil:** Da das Repository bereits geforkt ist, kann direkt gepusht werden ohne Authentifizierung!