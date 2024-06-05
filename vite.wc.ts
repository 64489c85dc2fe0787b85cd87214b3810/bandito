import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

const packageName = 'web-components';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return `${packageName}.css`;
          return assetInfo.name;
        },
      },
    },
    lib: {
      entry: 'dist/index.js',
      name: 'mfBandito',
      fileName: packageName,
      formats: ['iife'],
    },
    outDir: 'dist-wc',
  },
  plugins: [svelte()],
});
