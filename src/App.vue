<script setup lang="ts">
import { computed } from 'vue';

const isDev = computed(() => import.meta.env.MODE === 'development');
</script>

<template>
    <!-- Development navbar - removed in build-mode -->
    <div v-if="isDev" class="ct-dev-navbar">
        <div class="ct-container ct-d-flex ct-align-items-center">
            <span class="ct-text-white">ChurchTools Development Mode</span>
        </div>
    </div>
    <main class="ct-main">
        <RouterView />
    </main>
</template>

<style scoped>
.ct-dev-navbar {
    height: 56px;
    background: var(--ct-primary);
    display: flex;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.ct-main {
    min-height: calc(100vh - 56px);
    background-color: var(--ct-bg-secondary);
    padding: var(--ct-spacing-lg) 0;
}

/* Adjust main height when no dev navbar */
.ct-main:only-child {
    min-height: 100vh;
}
</style>
