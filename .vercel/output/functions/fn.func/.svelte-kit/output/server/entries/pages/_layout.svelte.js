import { d as attr, c as pop, p as push, h as head } from "../../chunks/index.js";
const colors = [
  ["#dbddbb", "#6ba587", "#d5d88d", "#88b884"],
  ["#87bda5", "#b9dd83", "#d5d88c", "#a5c885"],
  ["#81a9f0", "#9ed3f4", "#aeded2", "#c0c4ec"],
  ["#97beeb", "#b1e9ea", "#c6b1ef", "#efb7dc"],
  ["#d1e395", "#91d2cc", "#76b8e6", "#91d69a"],
  ["#ecae8e", "#e8c583", "#eba0c1", "#c7b1eb"],
  ["#e998c3", "#e9a4d6", "#b79fe9", "#ecb074"],
  ["#e99d57", "#eed171", "#ee9d68", "#e0d07e"],
  ["#40cdde", "#ac86ed", "#e984d8", "#efd359"]
];
function Background($$payload, $$props) {
  push();
  let color = 0;
  $$payload.out += `<div class="mf-background"><canvas class="mf-background__filling"${attr("width", 50)}${attr("height", 50)}${attr("data-colors", colors[color].join(","))}></canvas> <div class="mf-background__pattern"></div></div>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Bandito</title>`;
  });
  $$payload.out += `<!--[-->`;
  Background($$payload);
  $$payload.out += `<!--]--> <!--[-->`;
  children($$payload);
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _layout as default
};
