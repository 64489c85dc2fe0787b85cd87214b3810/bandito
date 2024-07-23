import { parse } from 'node:path';

function toCamelCase(str) {
  return str
    .split(' ')
    .map(function (word, index) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

const components = new Bun.Glob('./src/lib/*.svelte');

const list: Array<{ componentName: string; fileName: string }> = [];

for await (const path of components.scan('.')) {
  const { name: fileName } = parse(path);
  const componentName = fileName.split('-').map(toCamelCase).join('');
  list.push({ componentName, fileName });
}

list.sort((a, b) => a.componentName.localeCompare(b.componentName));

const exports = [];

for (const el of list) {
  exports.push(`export { default as ${el.componentName} } from './${el.fileName}.svelte';`);
}

console.log(exports.join('\n'));

const styles = new Bun.Glob('./src/scss/*.scss');
const sList: string[] = [];
for await (const path of styles.scan('.')) {
  const { name: fileName } = parse(path);
  sList.push(fileName);
}

const scss = sList
  .sort()
  .map((s) => `@import "${s}";`)
  .join('\n');

console.log(scss);
