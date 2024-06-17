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
    outDir: 'dist/svelte',
    rollupOptions: {
      input: './src/scss/_index.scss',
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});

// web-components
await build({
  configFile: false,
  build: {
    emptyOutDir: false,
    outDir: 'dist/web-components',
    rollupOptions: {
      input: ['dist/svelte/index.js', './src/scss/_index.scss'],
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  plugins: [svelte()],
});
