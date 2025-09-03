# GitHub Repository Setup

Anleitung zum Erstellen eines neuen GitHub-Repositories für das ChurchTools Extension Template.

## 1. Neues Repository auf GitHub erstellen

1. Gehe zu [GitHub](https://github.com) und melde dich an
2. Klicke auf das **"+"** Symbol oben rechts → **"New repository"**
3. Repository-Einstellungen:
   - **Repository name:** `churchtools-extension-template`
   - **Description:** `Complete template for ChurchTools Extension development with Design System and auto-deployment`
   - **Visibility:** Public ✅
   - **Initialize repository:** 
     - ❌ **NICHT** "Add a README file" ankreuzen
     - ❌ **NICHT** ".gitignore" auswählen  
     - ❌ **NICHT** "Choose a license" auswählen
4. Klicke **"Create repository"**

## 2. Lokales Repository mit GitHub verbinden

```bash
# Remote hinzufügen (URL durch deine GitHub-URL ersetzen)
git remote add origin https://github.com/DEIN-USERNAME/churchtools-extension-template.git

# Branch auf main umbenennen
git branch -M main

# Zum GitHub-Repository pushen
git push -u origin main
```

## 3. Repository-Einstellungen optimieren

### GitHub Pages (optional)
1. Gehe zu **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **/ (root)**
4. Save

### Topics hinzufügen
1. Gehe zur Repository-Hauptseite
2. Klicke auf das **Zahnrad** neben "About"
3. Füge Topics hinzu:
   - `churchtools`
   - `vue3`
   - `typescript`
   - `template`
   - `extension`
   - `design-system`

### Repository-Beschreibung
```
Complete template for ChurchTools Extension development with Vue 3, TypeScript, Design System integration, and automatic deployment packaging.
```

## 4. Template-URL für Prompt aktualisieren

Nach dem GitHub-Upload, aktualisiere die `prompt-for-ona.md`:

```markdown
**Template:** https://github.com/DEIN-USERNAME/churchtools-custom-module-template
```

## 5. Release erstellen (optional)

```bash
# Tag erstellen
git tag v1.0.0
git push origin v1.0.0
```

Dann auf GitHub:
1. Gehe zu **Releases** → **Create a new release**
2. Tag: **v1.0.0**
3. Title: **v1.0.0 - Initial Template Release**
4. Description:
   ```markdown
   # ChurchTools Extension Template v1.0.0
   
   Complete template for ChurchTools Extension development.
   
   ## Features
   - Vue 3 + TypeScript
   - ChurchTools Design System
   - Automatic deployment packaging
   - Development tools (ESLint, Prettier)
   - Full documentation
   
   ## Usage
   See README.md for detailed instructions.
   ```

## 6. Template verwenden

Andere können das Template jetzt so verwenden:

```bash
git clone https://github.com/DEIN-USERNAME/churchtools-extension-template.git meine-neue-extension
cd meine-neue-extension
rm -rf .git
git init
# ... weitere Anpassungen
```

## Fertig! 🎉

Das Template ist jetzt auf GitHub verfügbar und kann von anderen Entwicklern verwendet werden.