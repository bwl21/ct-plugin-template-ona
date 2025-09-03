<script setup lang="ts">
import { useStore } from '../store';

const store = useStore();
const onClick = () => store.count++;
</script>

<template>
    <div class="ct-container ct-p-4">
        <div class="ct-card">
            <div class="ct-card-header">
                <h2 class="ct-h2 ct-mb-0 ct-text-center">ChurchTools Extension</h2>
            </div>
            <div class="ct-card-body ct-text-center">
                <p class="ct-mb-3">Ein Template für ChurchTools Extension Entwicklung</p>
                
                <div class="ct-mb-4">
                    <h5 class="ct-h5 ct-mb-2">Willkommen</h5>
                    <p>Dieses Template bietet eine vollständige Grundlage für die Entwicklung von ChurchTools Extensions mit modernem Design System.</p>
                </div>
                
                <div class="ct-d-flex ct-justify-content-center ct-mb-3" style="gap: 0.5rem;">
                    <button class="ct-btn ct-btn-primary" @click="onClick">
                        Template testen
                    </button>
                    <router-link to="/ui" class="ct-btn ct-btn-secondary">
                        UI-Komponenten
                    </router-link>
                </div>
                
                <div v-if="store.count > 0" class="ct-card">
                    <div class="ct-card-body">
                        <small>Test-Interaktionen: {{ store.count }}</small>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Feature Overview -->
        <div class="ct-card ct-mb-4" style="margin-top: 2rem;">
            <div class="ct-card-header">
                <h4 class="ct-h4 ct-mb-0">Template Features</h4>
            </div>
            <div class="ct-card-body">
                <div class="feature-grid">
                    <div class="feature-item">
                        <h6 class="ct-h6">🎨 Design System</h6>
                        <p>Vollständiges ChurchTools Design System mit CSS-Variablen</p>
                    </div>
                    <div class="feature-item">
                        <h6 class="ct-h6">⚡ Vue 3 + TypeScript</h6>
                        <p>Moderne Frontend-Entwicklung mit Typisierung</p>
                    </div>
                    <div class="feature-item">
                        <h6 class="ct-h6">📦 Auto-Deployment</h6>
                        <p>Automatisches ZIP-Packaging für ChurchTools Upload</p>
                    </div>
                    <div class="feature-item">
                        <h6 class="ct-h6">🔧 Development Tools</h6>
                        <p>ESLint, Prettier, Hot Reload und mehr</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--ct-spacing-md);
    margin-top: var(--ct-spacing-md);
}

.feature-item {
    padding: var(--ct-spacing-md);
    border: 1px solid var(--ct-border-light);
    border-radius: 0.25rem;
    background-color: var(--ct-bg-secondary);
}

.feature-item h6 {
    color: var(--ct-primary);
    margin-bottom: var(--ct-spacing-sm);
}

.feature-item p {
    color: var(--ct-text-secondary);
    font-size: 0.875rem;
    margin-bottom: 0;
}
</style>
