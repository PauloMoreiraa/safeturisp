import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  optimizeDeps: {
    include: [], // remova @arcgis/core daqui
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/] // garante compatibilidade com pacotes CJS/ESM mistos
    }
  }
});