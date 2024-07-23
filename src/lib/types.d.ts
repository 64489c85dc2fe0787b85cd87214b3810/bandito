export type AlphaMode = 'light' | 'dark';
export type AlphaStyle = 'regular' | 'grouped' | 'vibrant';
export type AlphaFontSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
export type AlphaAccent =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'mint'
  | 'teal'
  | 'cyan'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'brown';
export type AlphaDataAttrs = {
  'data-mode'?: AlphaMode;
  'data-style'?: AlphaStyle;
  'data-font-size'?: AlphaFontSize;
  'data-accent'?: AlphaAccent;
};

export type BanditoAdaptivitySize = 'regular' | 'compact';
export type BanditoViewWidth = 's-mobile' | 'mobile' | 's-tablet' | 'tablet' | 'desktop';
export type BanditoViewHeight = 'xs' | 's' | 'm';
export type BanditoDataAttrs = {
  'data-size-x'?: BanditoAdaptivitySize;
  'data-size-y'?: BanditoAdaptivitySize;
  'data-view-width'?: BanditoAdaptivitySize;
  'data-view-height'?: BanditoViewHeight;
  'data-has-pointer'?: 'true' | 'false';
};

export type DefaultProps = {
  tag?: keyof HTMLElementTagNameMap;
  class?: string;
  style?: string;
  [key: string]: unknown;
} & AlphaDataAttrs &
  BanditoDataAttrs;
