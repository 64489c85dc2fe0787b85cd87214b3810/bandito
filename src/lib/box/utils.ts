import { breakpointsAliases, type ResponsiveProp, type ResponsivePropConfig, type ResponsiveVariables } from "./types";

export function sanitizeCustomProperties(styles: any): any {
  const nonNullValues = Object.entries(styles).filter(([_, value]) => value != null);

  return nonNullValues.length ? Object.fromEntries(nonNullValues) : undefined;
}

export function isObject(value: any) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

export function getResponsiveProps<T = string>(
  componentName: string,
  componentProp: string,
  tokenSubgroup: string,
  responsiveProp?: ResponsiveProp<T>
): ResponsiveVariables<T> {
  if (!responsiveProp) return {};

  let result: ResponsivePropConfig;

  if (!isObject(responsiveProp)) {
    result = {
      [breakpointsAliases[0]]: `var(--p-${tokenSubgroup}-${responsiveProp})`,
    };
  } else {
    result = Object.fromEntries(
      Object.entries(responsiveProp).map(([breakpointAlias, aliasOrScale]) => [
        breakpointAlias,
        `var(--p-${tokenSubgroup}-${aliasOrScale})`,
      ])
    );
  }

  // Prefix each responsive key with the correct token name
  return Object.fromEntries(
    Object.entries(result).map(([breakpointAlias, value]) => [
      `--pc-${componentName}-${componentProp}-${breakpointAlias}`,
      value,
    ])
  ) as unknown as ResponsiveVariables<T>;
}

export function cssStringify(obj: any) {
  return Object.keys(obj)
    .map((k) => `${k}: ${obj[k]}`)
    .join(';');
}