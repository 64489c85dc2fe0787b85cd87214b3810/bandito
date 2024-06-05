import type { Snippet } from "svelte";

export type Element = 'div' | 'span' | 'section' | 'legend' | 'ul' | 'li';

type LineStyles = 'solid' | 'dashed';
type Overflow = 'hidden' | 'scroll' | 'clip';
type Position = 'relative' | 'absolute' | 'fixed' | 'sticky';

export const breakpointsAliases = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

// Convert the Tuple to a union
export type BreakpointsAlias = (typeof breakpointsAliases)[number];

export type ResponsivePropConfig<T = string> = {
  [Breakpoint in BreakpointsAlias]?: T;
};

export type ResponsiveProp<T> = T | ResponsivePropConfig<T>;

export type ResponsiveVariables<T> = {
  [Breakpoint in `${string}-${BreakpointsAlias}`]?: T;
};

export type SpaceScale =
  | '0'
  | '025'
  | '050'
  | '100'
  | '150'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '800'
  | '1000'
  | '1200'
  | '1600'
  | '2000'
  | '2400'
  | '2800'
  | '3200';
  
type Spacing = ResponsiveProp<SpaceScale>;

export type ColorBackgroundAlias =
  | 'bg-fill-active'
  | 'bg-fill-brand-active'
  | 'bg-fill-brand-disabled'
  | 'bg-fill-brand-hover'
  | 'bg-fill-brand-selected'
  | 'bg-fill-brand'
  | 'bg-fill-caution-active'
  | 'bg-fill-caution-hover'
  | 'bg-fill-caution-secondary'
  | 'bg-fill-caution'
  | 'bg-fill-critical-active'
  | 'bg-fill-critical-hover'
  | 'bg-fill-critical-secondary'
  | 'bg-fill-critical-selected'
  | 'bg-fill-critical'
  | 'bg-fill-disabled'
  | 'bg-fill-emphasis-active'
  | 'bg-fill-emphasis-hover'
  | 'bg-fill-emphasis'
  | 'bg-fill-hover'
  | 'bg-fill-info-active'
  | 'bg-fill-info-hover'
  | 'bg-fill-info-secondary'
  | 'bg-fill-info'
  | 'bg-fill-inverse-active'
  | 'bg-fill-inverse-hover'
  | 'bg-fill-inverse'
  | 'bg-fill-magic-secondary-active'
  | 'bg-fill-magic-secondary-hover'
  | 'bg-fill-magic-secondary'
  | 'bg-fill-magic'
  | 'bg-fill-secondary-active'
  | 'bg-fill-secondary-hover'
  | 'bg-fill-secondary'
  | 'bg-fill-selected'
  | 'bg-fill-success-active'
  | 'bg-fill-success-hover'
  | 'bg-fill-success-secondary'
  | 'bg-fill-success'
  | 'bg-fill-tertiary-active'
  | 'bg-fill-tertiary-hover'
  | 'bg-fill-tertiary'
  | 'bg-fill-transparent-active'
  | 'bg-fill-transparent-hover'
  | 'bg-fill-transparent-secondary-active'
  | 'bg-fill-transparent-secondary-hover'
  | 'bg-fill-transparent-secondary'
  | 'bg-fill-transparent-selected'
  | 'bg-fill-transparent'
  | 'bg-fill-warning-active'
  | 'bg-fill-warning-hover'
  | 'bg-fill-warning-secondary'
  | 'bg-fill-warning'
  | 'bg-fill'
  | 'bg-inverse'
  | 'bg-surface-active'
  | 'bg-surface-brand-active'
  | 'bg-surface-brand-hover'
  | 'bg-surface-brand-selected'
  | 'bg-surface-brand'
  | 'bg-surface-caution-active'
  | 'bg-surface-caution-hover'
  | 'bg-surface-caution'
  | 'bg-surface-critical-active'
  | 'bg-surface-critical-hover'
  | 'bg-surface-critical'
  | 'bg-surface-disabled'
  | 'bg-surface-emphasis-active'
  | 'bg-surface-emphasis-hover'
  | 'bg-surface-emphasis'
  | 'bg-surface-hover'
  | 'bg-surface-info-active'
  | 'bg-surface-info-hover'
  | 'bg-surface-info'
  | 'bg-surface-inverse'
  | 'bg-surface-magic-active'
  | 'bg-surface-magic-hover'
  | 'bg-surface-magic'
  | 'bg-surface-secondary-active'
  | 'bg-surface-secondary-hover'
  | 'bg-surface-secondary-selected'
  | 'bg-surface-secondary'
  | 'bg-surface-selected'
  | 'bg-surface-success-active'
  | 'bg-surface-success-hover'
  | 'bg-surface-success'
  | 'bg-surface-tertiary-active'
  | 'bg-surface-tertiary-hover'
  | 'bg-surface-tertiary'
  | 'bg-surface-transparent'
  | 'bg-surface-warning-active'
  | 'bg-surface-warning-hover'
  | 'bg-surface-warning'
  | 'bg-surface'
  | 'bg'
  /** Specialty and component background colors. */
  | 'avatar-bg-fill'
  | 'avatar-five-bg-fill'
  | 'avatar-four-bg-fill'
  | 'avatar-one-bg-fill'
  | 'avatar-seven-bg-fill'
  | 'avatar-six-bg-fill'
  | 'avatar-three-bg-fill'
  | 'avatar-two-bg-fill'
  | 'backdrop-bg'
  | 'button-gradient-bg-fill'
  | 'button-gradient-bg-fill-selected-experimental'
  | 'button-gradient-bg-fill-active-experimental'
  | 'checkbox-bg-surface-disabled'
  | 'input-bg-surface-active'
  | 'input-bg-surface-hover'
  | 'input-bg-surface'
  | 'nav-bg-surface-active'
  | 'nav-bg-surface-hover'
  | 'nav-bg-surface-selected'
  | 'nav-bg-surface'
  | 'nav-bg'
  | 'radio-button-bg-surface-disabled'
  | 'video-thumbnail-play-button-bg-fill-hover'
  | 'video-thumbnail-play-button-bg-fill'
  | 'scrollbar-thumb-bg-hover'
  | 'scrollbar-thumb-bg';

  export type ColorBorderAlias =
  | 'border-brand'
  | 'border-caution'
  | 'border-critical-secondary'
  | 'border-critical'
  | 'border-disabled'
  | 'border-emphasis-active'
  | 'border-emphasis-hover'
  | 'border-emphasis'
  | 'border-focus'
  | 'border-hover'
  | 'border-info'
  | 'border-inverse-active'
  | 'border-inverse-hover'
  | 'border-inverse'
  | 'border-magic-secondary'
  | 'border-magic-secondary-hover'
  | 'border-magic'
  | 'border-secondary'
  | 'border-success'
  | 'border-tertiary'
  | 'border-warning'
  | 'border'
  | 'border-gradient-experimental'
  | 'border-gradient-hover-experimental'
  | 'border-gradient-selected-experimental'
  | 'border-gradient-active-experimental'
  /** Specialty and component border colors. */
  | 'input-border-active'
  | 'input-border-hover'
  | 'input-border'
  | 'tooltip-tail-down-border-experimental'
  | 'tooltip-tail-up-border-experimental';

  export type BorderRadiusScale =
  | '0'
  | '050'
  | '100'
  | '150'
  | '200'
  | '300'
  | '400'
  | '500'
  | '750';

export type BorderRadiusAlias = 'full';

export type BorderRadiusAliasOrScale = BorderRadiusAlias | BorderRadiusScale;

export type BorderWidthScale = '0' | '0165' | '025' | '050' | '100';

export type ColorTextAlias =
  | 'text-brand-hover'
  | 'text-brand-on-bg-fill-active'
  | 'text-brand-on-bg-fill-disabled'
  | 'text-brand-on-bg-fill-hover'
  | 'text-brand-on-bg-fill'
  | 'text-brand'
  | 'text-caution-secondary'
  | 'text-caution-active'
  | 'text-caution-hover'
  | 'text-caution-on-bg-fill'
  | 'text-caution'
  | 'text-critical-secondary'
  | 'text-critical-active'
  | 'text-critical-hover'
  | 'text-critical-on-bg-fill'
  | 'text-critical'
  | 'text-disabled'
  | 'text-emphasis-active'
  | 'text-emphasis-hover'
  | 'text-emphasis-on-bg-fill-active'
  | 'text-emphasis-on-bg-fill-hover'
  | 'text-emphasis-on-bg-fill'
  | 'text-emphasis'
  | 'text-info-secondary'
  | 'text-info-active'
  | 'text-info-hover'
  | 'text-info-on-bg-fill'
  | 'text-info'
  | 'text-inverse-secondary'
  | 'text-inverse'
  | 'text-link-active'
  | 'text-link-hover'
  | 'text-link-inverse'
  | 'text-link'
  | 'text-magic-on-bg-fill'
  | 'text-magic'
  | 'text-magic-secondary'
  | 'text-secondary'
  | 'text-success-secondary'
  | 'text-success-active'
  | 'text-success-hover'
  | 'text-success-on-bg-fill'
  | 'text-success'
  | 'text-warning-secondary'
  | 'text-warning-active'
  | 'text-warning-hover'
  | 'text-warning-on-bg-fill'
  | 'text-warning'
  | 'text'
  /** Specialty and component text colors. */
  | 'avatar-five-text-on-bg-fill'
  | 'avatar-four-text-on-bg-fill'
  | 'avatar-one-text-on-bg-fill'
  | 'avatar-seven-text-on-bg-fill'
  | 'avatar-six-text-on-bg-fill'
  | 'avatar-text-on-bg-fill'
  | 'avatar-three-text-on-bg-fill'
  | 'avatar-two-text-on-bg-fill'
  | 'video-thumbnail-play-button-text-on-bg-fill';

  export type ShadowScale = '0' | '100' | '200' | '300' | '400' | '500' | '600';

  export type ShadowAlias =
  | 'button'
  | 'button-hover'
  | 'button-inset'
  | 'button-primary'
  | 'button-primary-hover'
  | 'button-primary-inset'
  | 'button-primary-critical'
  | 'button-primary-critical-hover'
  | 'button-primary-critical-inset'
  | 'button-primary-success'
  | 'button-primary-success-hover'
  | 'button-primary-success-inset'
  | 'border-inset';

export type ShadowAliasOrScale = ShadowAlias | ShadowScale;

export type BoxProps = {
  children?: Snippet;
  /** HTML Element type
   * @default 'div'
   */
  as?: Element;
  /** Background color */
  background?: ColorBackgroundAlias;
  /** Border color */
  borderColor?: ColorBorderAlias | 'transparent';
  /** Border style */
  borderStyle?: LineStyles;
  /** Border radius */
  borderRadius?: BorderRadiusAliasOrScale;
  /** Vertical end horizontal start border radius */
  borderEndStartRadius?: BorderRadiusAliasOrScale;
  /** Vertical end horizontal end border radius */
  borderEndEndRadius?: BorderRadiusAliasOrScale;
  /** Vertical start horizontal start border radius */
  borderStartStartRadius?: BorderRadiusAliasOrScale;
  /** Vertical start horizontal end border radius */
  borderStartEndRadius?: BorderRadiusAliasOrScale;
  /** Border width */
  borderWidth?: BorderWidthScale;
  /** Vertical start border width */
  borderBlockStartWidth?: BorderWidthScale;
  /** Vertical end border width */
  borderBlockEndWidth?: BorderWidthScale;
  /** Horizontal start border width */
  borderInlineStartWidth?: BorderWidthScale;
  /** Horizontal end border width */
  borderInlineEndWidth?: BorderWidthScale;
  /** Color of children */
  color?: ColorTextAlias;
  /** HTML id attribute */
  id?: string;
  /** Minimum height of container */
  minHeight?: string;
  /** Minimum width of container */
  minWidth?: string;
  /** Maximum width of container */
  maxWidth?: string;
  /** Clip horizontal content of children */
  overflowX?: Overflow;
  /** Clip vertical content of children */
  overflowY?: Overflow;
  /** Spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes.
   * @example
   * padding='400'
   * padding={{xs: '200', sm: '300', md: '400', lg: '500', xl: '600'}}
   */
  padding?: Spacing;
  /** Vertical start and end spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes.
   * @example
   * paddingBlock='400'
   * paddingBlock={{xs: '200', sm: '300', md: '400', lg: '500', xl: '600'}}
   */
  paddingBlock?: Spacing;
  /** Vertical start spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes.
   * @example
   * paddingBlockStart='400'
   * paddingBlockStart={{xs: '200', sm: '300', md: '400', lg: '500', xl: '600'}}
   */
  paddingBlockStart?: Spacing;
  /** Vertical end spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes.
   * @example
   * paddingBlockEnd='400'
   * paddingBlockEnd={{xs: '200', sm: '300', md: '400', lg: '500', xl: '600'}}
   */
  paddingBlockEnd?: Spacing;
  /** Horizontal start and end spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes.
   * @example
   * paddingInline='400'
   * paddingInline={{xs: '200', sm: '300', md: '400', lg: '500', xl: '600'}}
   */
  paddingInline?: Spacing;
  /** Horizontal start spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes.
   * @example
   * paddingInlineStart='400'
   * paddingInlineStart={{xs: '200', sm: '300', md: '400', lg: '500', xl: '600'}}
   */
  paddingInlineStart?: Spacing;
  /** Horizontal end spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes.
   * @example
   * paddingInlineEnd='400'
   * paddingInlineEnd={{xs: '200', sm: '300', md: '400', lg: '500', xl: '600'}}
   */
  paddingInlineEnd?: Spacing;
  /** Aria role */
  // role?: Extract<
  //   React.AriaRole,
  //   'status' | 'presentation' | 'menu' | 'listbox' | 'combobox' | 'group'
  // >;
  role?: 'status' | 'presentation' | 'menu' | 'listbox' | 'combobox' | 'group';
  /** Shadow on box */
  shadow?: ShadowAliasOrScale;
  /** Set tab order */
  tabIndex?: number;
  /** Width of container */
  width?: string;
  // These could be moved to new layout component(s) in the future
  /** Position of box */
  position?: Position;
  /** Top position of box */
  insetBlockStart?: Spacing;
  /** Bottom position of box */
  insetBlockEnd?: Spacing;
  /** Left position of box */
  insetInlineStart?: Spacing;
  /** Right position of box */
  insetInlineEnd?: Spacing;
  /** Opacity of box */
  opacity?: string;
  /** Outline color */
  outlineColor?: ColorBorderAlias;
  /** Outline style */
  outlineStyle?: LineStyles;
  /** Outline width */
  outlineWidth?: BorderWidthScale;
  /** Visually hide the contents during print */
  printHidden?: boolean;
  /** Visually hide the contents (still announced by screenreader) */
  visuallyHidden?: boolean;
  /** z-index of box */
  zIndex?: string;
}