<script setup lang="ts">
import { useStore } from '../store';

const store = useStore();
const onClick = () => store.count++;
</script>

<template>
    <div class="ct-container ct-p-4">
        <div class="ct-card">
            <div class="ct-card-header">
                <h2 class="ct-h2 ct-mb-0 ct-text-center">mein ki modell</h2>
            </div>
            <div class="ct-card-body ct-text-center">
                <p class="ct-mb-3">Ein ChurchTools Custom Module für KI-Funktionalitäten</p>
                
                <div class="ct-mb-4">
                    <h5 class="ct-h5 ct-mb-2">Willkommen</h5>
                    <p>Dieses Modul erweitert ChurchTools um intelligente KI-Features zur Automatisierung und Unterstützung Ihrer Gemeindearbeit.</p>
                </div>
                
                <div class="ct-d-flex ct-justify-content-center ct-mb-3">
                    <button class="ct-btn ct-btn-primary" @click="onClick">
                        KI-Feature testen
                    </button>
                </div>
                
                <div class="ct-card" v-if="store.count > 0">
                    <div class="ct-card-body">
                        <small>Test-Interaktionen: {{ store.count }}</small>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Feature Overview -->
        <div class="ct-card ct-mb-4" style="margin-top: 2rem;">
            <div class="ct-card-header">
                <h4 class="ct-h4 ct-mb-0">Geplante KI-Features</h4>
            </div>
            <div class="ct-card-body">
                <div class="feature-grid">
                    <div class="feature-item">
                        <h6 class="ct-h6">🤖 Intelligente Textverarbeitung</h6>
                        <p>Automatische Zusammenfassungen von Predigten und Berichten</p>
                    </div>
                    <div class="feature-item">
                        <h6 class="ct-h6">📅 Smart Scheduling</h6>
                        <p>KI-unterstützte Terminplanung und Ressourcenverwaltung</p>
                    </div>
                    <div class="feature-item">
                        <h6 class="ct-h6">💬 Chatbot-Integration</h6>
                        <p>Automatische Beantwortung häufiger Fragen</p>
                    </div>
                    <div class="feature-item">
                        <h6 class="ct-h6">📊 Datenanalyse</h6>
                        <p>Intelligente Auswertung von Gemeindedaten</p>
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
