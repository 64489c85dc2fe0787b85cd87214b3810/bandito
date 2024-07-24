import { parse } from 'node:path';

function toCamelCase(str) {
  return str
    .split(' ')
    .map(function (word, index) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

const basedir = './src/lib';
const glob = new Bun.Glob(`${basedir}/**/*.{svelte,scss}`);

const js: string[] = [];
const scss: string[] = [];

for await (const path of glob.scan('.')) {
  const { ext, name } = parse(path);
  const filepath = path.substring(basedir.length + 1);

  if (ext === '.svelte') {
    const componentName = name.split('-').map(toCamelCase).join('');
    js.push(`export { default as ${componentName} } from './${filepath}';`);
  }

  if (ext === '.scss') {
    scss.push(`@import "${filepath}";`);
  }
}

console.log(js.sort().join('\n'));
console.log();
console.log(scss.sort().join('\n'));
