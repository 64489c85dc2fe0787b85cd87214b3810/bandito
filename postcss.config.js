import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [autoprefixer, postcssNested],
};

export default config;
