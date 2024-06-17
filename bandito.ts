import { build } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { build as sveltePackage } from './node_modules/@sveltejs/package/src/index';
import config from './svelte.config';

// make package
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
  publicDir: 'static',
  build: {
    outDir: 'dist/css',
    rollupOptions: {
      input: './src/scss/_index.scss',
      output: {
        assetFileNames: `bandito.[ext]`,
      },
    },
  },
});

// web-components
await build({
  configFile: false,
  build: {
    outDir: 'dist/web-components',
    lib: {
      entry: 'dist/svelte/index.js',
      name: 'bandito',
    },
  },
  plugins: [svelte()],
});
