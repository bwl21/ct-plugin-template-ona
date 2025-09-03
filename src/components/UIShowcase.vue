<script setup lang="ts">
import { ref } from 'vue';

const showAlert = ref(false);
const formData = ref({
    name: '',
    email: '',
    message: ''
});

const showAlertDemo = () => {
    showAlert.value = true;
    setTimeout(() => showAlert.value = false, 3000);
};

const submitForm = () => {
    console.log('Form submitted:', formData.value);
    showAlertDemo();
};
</script>

<template>
    <div class="ct-container ct-p-4">
        <!-- Alert Demo -->
        <div v-if="showAlert" class="ct-alert ct-alert-success ct-mb-3">
            <strong>Erfolg!</strong> Formular wurde erfolgreich übermittelt.
        </div>

        <!-- Typography Showcase -->
        <div class="ct-card ct-mb-4">
            <div class="ct-card-header">
                <h3 class="ct-h3 ct-mb-0">ChurchTools Typography</h3>
            </div>
            <div class="ct-card-body">
                <h1 class="ct-h1">Überschrift H1</h1>
                <h2 class="ct-h2">Überschrift H2</h2>
                <h3 class="ct-h3">Überschrift H3</h3>
                <h4 class="ct-h4">Überschrift H4</h4>
                <h5 class="ct-h5">Überschrift H5</h5>
                <h6 class="ct-h6">Überschrift H6</h6>
                <p>Standard Paragraph-Text mit normaler Formatierung.</p>
            </div>
        </div>

        <!-- Button Showcase -->
        <div class="ct-card ct-mb-4">
            <div class="ct-card-header">
                <h4 class="ct-h4 ct-mb-0">Buttons</h4>
            </div>
            <div class="ct-card-body">
                <div class="ct-d-flex" style="gap: 0.5rem; flex-wrap: wrap;">
                    <button class="ct-btn ct-btn-primary">Primary Button</button>
                    <button class="ct-btn ct-btn-secondary">Secondary Button</button>
                    <button class="ct-btn ct-btn-primary" disabled>Disabled Button</button>
                </div>
            </div>
        </div>

        <!-- Form Components -->
        <div class="ct-card ct-mb-4">
            <div class="ct-card-header">
                <h4 class="ct-h4 ct-mb-0">Formular-Komponenten</h4>
            </div>
            <div class="ct-card-body">
                <form @submit.prevent="submitForm">
                    <div class="ct-form-group">
                        <label class="ct-form-label" for="name">Name</label>
                        <input 
                            id="name"
                            v-model="formData.name"
                            type="text" 
                            class="ct-form-control" 
                            placeholder="Ihr Name"
                        >
                    </div>
                    
                    <div class="ct-form-group">
                        <label class="ct-form-label" for="email">E-Mail</label>
                        <input 
                            id="email"
                            v-model="formData.email"
                            type="email" 
                            class="ct-form-control" 
                            placeholder="ihre.email@example.com"
                        >
                    </div>
                    
                    <div class="ct-form-group">
                        <label class="ct-form-label" for="message">Nachricht</label>
                        <textarea 
                            id="message"
                            v-model="formData.message"
                            class="ct-form-control" 
                            rows="4"
                            placeholder="Ihre Nachricht..."
                        ></textarea>
                    </div>
                    
                    <button type="submit" class="ct-btn ct-btn-primary">
                        Absenden
                    </button>
                </form>
            </div>
        </div>

        <!-- Alert Types -->
        <div class="ct-card ct-mb-4">
            <div class="ct-card-header">
                <h4 class="ct-h4 ct-mb-0">Alert-Komponenten</h4>
            </div>
            <div class="ct-card-body">
                <div class="ct-alert ct-alert-info ct-mb-2">
                    <strong>Info:</strong> Dies ist eine Informationsmeldung.
                </div>
                <div class="ct-alert ct-alert-success ct-mb-2">
                    <strong>Erfolg:</strong> Aktion wurde erfolgreich ausgeführt.
                </div>
                <div class="ct-alert ct-alert-warning ct-mb-2">
                    <strong>Warnung:</strong> Bitte beachten Sie diese Warnung.
                </div>
                <div class="ct-alert ct-alert-danger ct-mb-2">
                    <strong>Fehler:</strong> Ein Fehler ist aufgetreten.
                </div>
            </div>
        </div>

        <!-- Badges -->
        <div class="ct-card ct-mb-4">
            <div class="ct-card-header">
                <h4 class="ct-h4 ct-mb-0">Badges</h4>
            </div>
            <div class="ct-card-body">
                <span class="ct-badge ct-badge-primary ct-mb-1">Primary</span>
                <span class="ct-badge ct-badge-secondary ct-mb-1">Secondary</span>
                <span class="ct-badge ct-badge-primary ct-mb-1">Neu</span>
                <span class="ct-badge ct-badge-secondary ct-mb-1">Beta</span>
            </div>
        </div>

        <!-- Navigation -->
        <div class="ct-card">
            <div class="ct-card-header">
                <h4 class="ct-h4 ct-mb-0">Navigation</h4>
            </div>
            <div class="ct-card-body">
                <nav class="ct-nav">
                    <a href="#" class="ct-nav-link">Dashboard</a>
                    <a href="#" class="ct-nav-link">Personen</a>
                    <a href="#" class="ct-nav-link">Gruppen</a>
                    <a href="#" class="ct-nav-link">Termine</a>
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ct-nav {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.ct-badge {
    margin-right: 0.5rem;
}

textarea.ct-form-control {
    resize: vertical;
    min-height: 100px;
}
</style>