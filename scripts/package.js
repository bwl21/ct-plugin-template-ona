#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import archiver from 'archiver';

/**
 * ChurchTools Extension Packaging Script
 * 
 * Erstellt ZIP-Archive mit Format: [kürzel]-[tag]-[commit].zip
 * Beispiel: meinKi-v1.0.0-a1b2c3d.zip
 */

async function packageModule() {
    try {
        // 1. Überprüfe ob dist/ Verzeichnis existiert
        if (!fs.existsSync('dist')) {
            console.error('❌ dist/ Verzeichnis nicht gefunden. Führe zuerst "npm run build" aus.');
            process.exit(1);
        }

        // 2. Lade VITE_KEY aus .env
        const envContent = fs.readFileSync('.env', 'utf8');
        const viteKeyMatch = envContent.match(/VITE_KEY=(.+)/);
        if (!viteKeyMatch) {
            console.error('❌ VITE_KEY nicht in .env gefunden.');
            process.exit(1);
        }
        const moduleKey = viteKeyMatch[1].trim();

        // 3. Ermittle Git-Tag (falls vorhanden)
        let gitTag = 'v0.0.0';
        try {
            gitTag = execSync('git describe --tags --exact-match HEAD', { encoding: 'utf8' }).trim();
        } catch (error) {
            console.warn('⚠️  Kein Git-Tag gefunden, verwende v0.0.0');
        }

        // 4. Ermittle Git-Commit-Hash
        let gitCommit = 'unknown';
        try {
            gitCommit = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
        } catch (error) {
            console.warn('⚠️  Git-Commit-Hash nicht ermittelbar');
        }

        // 5. Erstelle releases/ Verzeichnis falls nicht vorhanden
        if (!fs.existsSync('releases')) {
            fs.mkdirSync('releases');
        }

        // 6. Erstelle ZIP-Dateiname
        const zipFileName = `${moduleKey}-${gitTag}-${gitCommit}.zip`;
        const zipFilePath = path.join('releases', zipFileName);

        // 7. Lösche existierende ZIP-Datei
        if (fs.existsSync(zipFilePath)) {
            fs.unlinkSync(zipFilePath);
        }

        // 8. Erstelle ZIP-Archive
        console.log(`📦 Erstelle ${zipFileName}...`);
        
        const output = fs.createWriteStream(zipFilePath);
        const archive = archiver('zip', {
            zlib: { level: 9 } // Maximale Kompression
        });

        return new Promise((resolve, reject) => {
            output.on('close', () => {
                const sizeInMB = (archive.pointer() / 1024 / 1024).toFixed(2);
                console.log(`✅ ${zipFileName} erstellt (${sizeInMB} MB)`);
                console.log(`📁 Gespeichert in: releases/${zipFileName}`);
                console.log(`🚀 Bereit für ChurchTools Upload!`);
                resolve();
            });

            archive.on('error', (err) => {
                console.error('❌ Fehler beim Erstellen des ZIP-Archives:', err);
                reject(err);
            });

            archive.pipe(output);

            // Füge alle Dateien aus dist/ hinzu
            archive.directory('dist/', false);

            archive.finalize();
        });

    } catch (error) {
        console.error('❌ Packaging fehlgeschlagen:', error.message);
        process.exit(1);
    }
}

// Führe Packaging aus
packageModule();