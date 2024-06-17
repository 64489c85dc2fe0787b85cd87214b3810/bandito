import { build } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { build as sveltePackage } from './node_modules/@sveltejs/package/src/index';
import config from './svelte.config';

const dirname = import.meta.dirname;

// make package
await sveltePackage({
  cwd: dirname,
  input: 'src/lib',
  output: 'dist/svelte',
  tsconfig: undefined,
  types: true,
  config,
});

// scss
build({
  configFile: false,
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: './src/scss/_index.scss',
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});

// web-components
await build({
  configFile: false,
  build: {
    lib: {
      entry: ['dist/svelte/index.js', './src/scss/_index.scss'],
      name: 'mf_bandito',
      // formats: ['umd'],
    },
    outDir: 'dist/web-components',
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  plugins: [svelte()],
});
