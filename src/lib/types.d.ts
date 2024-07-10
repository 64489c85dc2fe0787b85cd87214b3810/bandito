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
  /**
   * Управление светлой/темной темой.
   */
  'data-mode'?: AlphaMode;
  /**
   * Управление стилем. Обычный, группированный, вибрация
   */
  'data-style'?: AlphaStyle;
  /**
   * Управление размером текста
   */
  'data-font-size'?: AlphaFontSize;
  /**
   * Управление акцентным цветом
   */
  'data-accent'?: AlphaAccent;
};

export type DefaultProps = AlphaDataAttrs & {
  /**
   *
   */
  tag?: keyof HTMLElementTagNameMap;
  /**
   *
   */
  class?: string;
  /**
   *
   */
  style?: string;
  /**
   *
   */
  [key: string]: unknown;
};
