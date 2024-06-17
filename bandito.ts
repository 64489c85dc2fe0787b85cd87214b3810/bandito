import { build } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { build as sveltePackage } from './node_modules/@sveltejs/package/src/index';
import config from './svelte.config';

// svelte package
await sveltePackage({
  cwd: import.meta.dirname,
  input: 'src/lib',
  output: 'dist/svelte',
  tsconfig: undefined,
  types: true,
  config,
});

// scss
await build({
  configFile: false,
  build: {
    outDir: 'dist/css',
    rollupOptions: {
      input: { bandito: './src/scss/_index.scss' },
      output: {
        assetFileNames: '[name].[ext]',
      },
    },
  },
  experimental: {
    renderBuiltUrl: (filename) => `./${filename}`,
  },
});

// web-components
await build({
  configFile: false,
  build: {
    outDir: 'dist/js',
    lib: {
      entry: 'dist/svelte/index.js',
      name: 'bandito',
      formats: ['iife', 'umd'],
    },
  },
  plugins: [svelte()],
});
