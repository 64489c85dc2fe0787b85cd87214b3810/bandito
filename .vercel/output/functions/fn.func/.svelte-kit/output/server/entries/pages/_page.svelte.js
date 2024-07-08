import { d as attr, e as escape_html, c as pop, p as push, i as stringify, j as spread_attributes, k as bind_props, l as element, m as add_styles, s as setContext, g as getContext, o as ensure_array_like } from "../../chunks/index.js";
const hasOwn = {}.hasOwnProperty;
const cl = (...args) => {
  let classes = "";
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg) {
      classes = appendClass(classes, parseValue(arg));
    }
  }
  return classes;
};
const parseValue = (arg) => {
  if (typeof arg === "string" || typeof arg === "number") {
    return arg;
  }
  if (typeof arg !== "object") {
    return "";
  }
  if (Array.isArray(arg)) {
    return cl.apply(null, arg);
  }
  if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
    return arg.toString();
  }
  let classes = "";
  for (const key in arg) {
    if (hasOwn.call(arg, key) && arg[key]) {
      classes = appendClass(classes, key);
    }
  }
  return classes;
};
const appendClass = (value, newClass) => {
  if (!newClass) {
    return value;
  }
  if (value) {
    return `${value} ${newClass}`;
  }
  return value + newClass;
};
function genBem(name, mods) {
  if (!mods) {
    return "";
  }
  if (typeof mods === "string") {
    return ` ${name}--${mods}`;
  }
  if (Array.isArray(mods)) {
    return mods.reduce((ret, item) => ret + genBem(name, item), "");
  }
  return Object.keys(mods).reduce((ret, key) => ret + (mods[key] ? genBem(name, key) : ""), "");
}
function createBEM(name) {
  return (el, mods) => {
    if (el && typeof el !== "string") {
      mods = el;
      el = "";
    }
    el = el ? `${name}__${el}` : name;
    return `${el}${genBem(el, mods)}`;
  };
}
function createNamespace(name) {
  const prefixedName = `mf-${name}`;
  return [prefixedName, createBEM(prefixedName)];
}
const [ns$6, bem$6] = createNamespace("avatar");
function Avatar($$payload, $$props) {
  push();
  let {
    size = 48,
    class: className,
    initials,
    style
  } = $$props;
  $$payload.out += `<span${attr("class", cl(ns$6, className))}${attr("style", `width: ${stringify(size)}px; height: ${stringify(size)}px;${stringify(style)}`)}>${escape_html(initials)}</span>`;
  pop();
}
const setWidth = { s: 16, m: 24, l: 32, xl: 44 };
const setD = {
  s: "M8 3.25a4.75 4.75 0 0 0-4.149 7.065.75.75 0 1 1-1.31.732A6.25 6.25 0 1 1 8 14.25a.75.75 0 0 1 .001-1.5 4.75 4.75 0 1 0 0-9.5Z",
  m: "M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123z",
  l: "M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 15.97 15.97 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Z",
  xl: "M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A21.964 21.964 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22Z"
};
function Spinner($$payload, $$props) {
  let {
    size = "m",
    element: element2 = void 0,
    ...restProps
  } = $$props;
  let width = setWidth[size] ?? 16;
  let center = width / 2;
  let d = setD[size] ?? "";
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height: width,
      fill: "currentColor",
      viewBox: `0 0 ${stringify(width)} ${stringify(width)}`,
      ...restProps
    },
    void 0,
    void 0,
    3
  )}><path fill-rule="evenodd" clip-rule="evenodd"${attr("d", d)}><animateTransform attributeName="transform" attributeType="XML" type="rotate"${attr("from", `0 ${stringify(center)} ${stringify(center)}`)}${attr("to", `360 ${stringify(center)} ${stringify(center)}`)} dur="0.7s" repeatCount="indefinite"></animateTransform></path></svg>`;
  bind_props($$props, { element: element2 });
}
const [, bem$5] = createNamespace("button");
function Button($$payload, $$props) {
  push();
  let {
    children,
    color,
    variant = "solid",
    size = "m",
    loading = false,
    stretched = false,
    disabled = false,
    class: className,
    ...restProps
  } = $$props;
  let tag = "href" in restProps ? "a" : "button";
  if (tag) element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes({
        class: cl(bem$5([size, variant]), className),
        ...restProps,
        "data-accent": color
      })}`;
    },
    () => {
      $$payload.out += `<!--[-->`;
      children($$payload);
      $$payload.out += `<!--]-->`;
    }
  );
  $$payload.out += `<!---->`;
  pop();
}
const [ns$5, bem$4] = createNamespace("form-item");
function Form_item($$payload, $$props) {
  push();
  let { children, top, bottom } = $$props;
  $$payload.out += `<div${attr("class", ns$5)}><!--[-->`;
  if (top) {
    $$payload.out += `<!--[-->`;
    if (typeof top === "function") {
      $$payload.out += `<!--[-->`;
      top($$payload);
      $$payload.out += `<!--]-->`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += `${escape_html(top)}`;
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  children($$payload);
  $$payload.out += `<!--]--></div>`;
  pop();
}
const [ns$4, bem$3] = createNamespace("horizontal-scroll");
function Horizontal_scroll($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<div${attr("class", ns$4)}><div${attr("class", bem$3("in"))}><div${attr("class", bem$3("wrapper"))}><!--[-->`;
  children($$payload);
  $$payload.out += `<!--]--></div></div></div>`;
  pop();
}
function Input($$payload, $$props) {
  $$payload.out += `<input type="text">`;
}
const [ns$3, bem$2] = createNamespace("popover");
function Popover($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<div${attr("class", cl(ns$3, "material-regular"))}><!--[-->`;
  children($$payload);
  $$payload.out += `<!--]--></div>`;
  pop();
}
const [ns$2, bem$1] = createNamespace("cell");
function Simple_cell($$payload, $$props) {
  push();
  let { children, before, after } = $$props;
  $$payload.out += `<div${attr("class", ns$2)}><!--[-->`;
  children($$payload);
  $$payload.out += `<!--]--></div>`;
  pop();
}
const [ns$1] = createNamespace("skeleton");
function Skeleton($$payload, $$props) {
  push();
  let {
    width,
    height,
    borderRadius,
    class: className
  } = $$props;
  $$payload.out += `<span${add_styles({ width, height, "border-radius": borderRadius })}${attr("class", cl(ns$1, className))}></span>`;
  pop();
}
class TabsContext {
  activeId = "";
  lineWidth = 0;
  lineLeft;
  constructor(activeId = "") {
    this.activeId = activeId;
  }
}
const [, bem] = createNamespace("tabs");
function Tabs($$payload, $$props) {
  push();
  let { children, activeId, variant } = $$props;
  let ctx = setContext("tabs", new TabsContext(activeId));
  $$payload.out += `<div${attr("class", bem([variant]))} role="tablist"><!--[-->`;
  children($$payload);
  $$payload.out += `<!--]--> <div role="presentation"${attr("class", bem("line", { tracking: false }))}${attr("style", `width: ${stringify(ctx.lineWidth)}px; transform: translateX(${stringify(ctx.lineLeft)}px)`)}></div></div>`;
  pop();
}
const [ns] = createNamespace("tabs-item");
function Tabs_item($$payload, $$props) {
  push();
  let {
    children,
    id,
    tag = "div",
    class: className,
    ...restProps
  } = $$props;
  getContext("tabs");
  if (tag) element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes({
        role: "tab",
        class: cl(ns, className),
        ...restProps
      })}`;
    },
    () => {
      $$payload.out += `<!--[-->`;
      children($$payload);
      $$payload.out += `<!--]-->`;
    }
  );
  $$payload.out += `<!---->`;
  pop();
}
const sprite12 = "/_app/immutable/assets/sprite12.CaW3189r.svg";
const sprite16 = "/_app/immutable/assets/sprite16.D2SuerOD.svg";
const sprite20 = "/_app/immutable/assets/sprite20.CocrELVl.svg";
const sprite24 = "/_app/immutable/assets/sprite24.CmPnxegQ.svg";
const sprite28 = "/_app/immutable/assets/sprite28.CGlaxcVR.svg";
const sprite32 = "/_app/immutable/assets/sprite32.DDYhopsp.svg";
const sprite34 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%3e%3csymbol%20viewBox='0%200%2034%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20id='compass_34'%3e%3cpath%20fill='currentColor'%20d='M17%2019a2%202%200%201%200%200-4%202%202%200%200%200%200%204'/%3e%3cpath%20fill='currentColor'%20fill-rule='evenodd'%20d='M34%2017c0%209.389-7.611%2017-17%2017S0%2026.389%200%2017%207.611%200%2017%200s17%207.611%2017%2017M23.577%209.08l-9.975%202.462a3%203%200%200%200-2.06%202.06L9.08%2023.578c-.302%201.056.287%201.655%201.343%201.353l9.975-2.472a3%203%200%200%200%202.06-2.06l2.472-9.975c.302-1.056-.297-1.645-1.353-1.343z'%20clip-rule='evenodd'/%3e%3c/symbol%3e%3c/svg%3e";
const sprite36 = "/_app/immutable/assets/sprite36.BsgzUAq6.svg";
const sprite40 = "/_app/immutable/assets/sprite40.B2wOIDjc.svg";
const sprite44 = "/_app/immutable/assets/sprite44.DPwwfprz.svg";
const sprite48 = "/_app/immutable/assets/sprite48.D9ajuSI1.svg";
const sprite56 = "/_app/immutable/assets/sprite56.CIChoNnN.svg";
const sprite96 = "/_app/immutable/assets/sprite96.2PsEzIj4.svg";
const files = {
  12: sprite12,
  16: sprite16,
  20: sprite20,
  24: sprite24,
  28: sprite28,
  32: sprite32,
  34: sprite34,
  36: sprite36,
  40: sprite40,
  44: sprite44,
  48: sprite48,
  56: sprite56,
  96: sprite96
};
function Icon($$payload, $$props) {
  push();
  let { set, name, class: className = "" } = $$props;
  $$payload.out += `<svg aria-hidden="true" display="block"${attr("class", `mf-icon ${stringify(className)}`)}${attr("viewBox", `0 0 ${stringify(set)} ${stringify(set)}`)}${attr("width", set)}${attr("height", set)}${attr("style", `width: ${stringify(set)}px; height: ${stringify(set)}px;`)}><use${attr("xlink:href", `${stringify(files[set])}#${stringify(name)}_${stringify(set)}`)} style="fill: currentcolor;"></use></svg>`;
  pop();
}
function _page($$payload) {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "mint",
    "teal",
    "cyan",
    "blue",
    "indigo",
    "purple",
    "pink",
    "brown"
  ];
  const variants = [
    "light",
    "faded",
    "flat",
    "solid",
    "shadow",
    "bordered",
    "ghost"
  ];
  const each_array = ensure_array_like(colors);
  $$payload.out += `<div class="container svelte-us3ue2"><!--[-->`;
  Tabs($$payload, {
    variant: "underline",
    activeId: "12",
    children: ($$payload2, $$slotProps) => {
      Horizontal_scroll($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Tabs_item($$payload3, {
            id: "11",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `1123 123 123 123 1231 23 12`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Tabs_item($$payload3, {
            id: "12",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `1`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Tabs_item($$payload3, {
            id: "test",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `lol`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--> <!--[-->`;
  Simple_cell($$payload, {
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `lol`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--> <!--[-->`;
  Skeleton($$payload, { width: "100px", height: "20px" });
  $$payload.out += `<!--]--> <!--[-->`;
  Popover($$payload, {
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `lol`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--> <!--[-->`;
  Spinner($$payload, {});
  $$payload.out += `<!--]--> <!--[-->`;
  Icon($$payload, { set: 56, name: "archive_outline" });
  $$payload.out += `<!--]--> <!--[-->`;
  Form_item($$payload, {
    top: "hello world2",
    bottom: "lol",
    children: ($$payload2, $$slotProps) => {
      Input($$payload2);
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--> <!--[-->`;
  Avatar($$payload, { initials: "mf" });
  $$payload.out += `<!--]--> <div class="vstack gap-2 p-2"><!--[-->`;
  for (let $$index_1 = 0; $$index_1 < each_array.length; $$index_1++) {
    const color = each_array[$$index_1];
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(variants);
    $$payload.out += `<h1${attr("class", `font-title2 fg-${stringify(color)} svelte-us3ue2`)}>${escape_html(color)}</h1> <div class="hstack gap-2"><!--[-->`;
    for (let $$index = 0; $$index < each_array_1.length; $$index++) {
      const variant = each_array_1[$$index];
      $$payload.out += "<!--[-->";
      Button($$payload, {
        color,
        variant,
        children: ($$payload2, $$slotProps) => {
          $$payload2.out += `${escape_html(variant)}`;
        },
        $$slots: { default: true }
      });
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += `</div>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</div></div>`;
}
export {
  _page as default
};
