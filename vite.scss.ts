// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    assetsDir: '/css/[name]-[hash].ext',
    // rollupOptions: {
    //   input: './src/scss/_index.scss',
    //   // output: {
    //   //   assetFileNames: ({ name }) => (name?.endsWith('.css') ? 'index.css' : name),
    //   //   extend: true,
    //   // },
    // },
  },
});
