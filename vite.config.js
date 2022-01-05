import { defineConfig, ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: 'https://https://camilo-17.github.io/',
    plugins: [react()],
});
