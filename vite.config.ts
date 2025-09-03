import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    return defineConfig({
        base: `/ccm/${process.env.VITE_KEY}/`,
        plugins: [vue(), eslintPlugin()],
        resolve: {
            dedupe: ['vue'],
        },
        server: {
            host: '0.0.0.0',
            port: 5173,
            allowedHosts: ['5173--01990e64-0d98-7f20-81f2-c977c35500c8.eu-central-1-01.gitpod.dev'],
        },
    });
};
