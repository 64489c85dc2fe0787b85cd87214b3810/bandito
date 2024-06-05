export type Value = string | number | boolean | undefined | null;
export type Mapping = Record<string, any>;
export interface ArgumentArray extends Array<Argument> {}
export interface ReadonlyArgumentArray extends ReadonlyArray<Argument> {}
export type Argument = Value | Mapping | ArgumentArray | ReadonlyArgumentArray;

const hasOwn = {}.hasOwnProperty;

export const cl = (...args: ArgumentArray): string => {
  let classes = "";

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg) {
      classes = appendClass(classes, parseValue(arg));
    }
  }

  return classes;
};

const parseValue = (arg: any) => {
  if (typeof arg === "string" || typeof arg === "number") {
    return arg;
  }

  if (typeof arg !== "object") {
    return "";
  }

  if (Array.isArray(arg)) {
    return cl.apply(null, arg);
  }

  if (
    arg.toString !== Object.prototype.toString &&
    !arg.toString.toString().includes("[native code]")
  ) {
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

const appendClass = (value: string, newClass: string) => {
  if (!newClass) {
    return value;
  }

  if (value) {
    return `${value} ${newClass}`;
  }

  return value + newClass;
};
