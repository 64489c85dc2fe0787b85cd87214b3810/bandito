<script lang="ts" context="module">
  import { createNamespace } from './utils';
  import type { Snippet } from 'svelte';
  import type { AccentColor } from './types';

  export type ButtonVariant =
    | 'solid'
    | 'faded'
    | 'bordered'
    | 'light'
    | 'flat'
    | 'ghost'
    | 'shadow';

  export type ButtonSize = 's' | 'm' | 'l';

  export type ButtonProps = {
    children: Snippet;
    color?: AccentColor;
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    stretched?: boolean;
    disabled?: boolean;
    href?: string;
    class?: string;
    style?: string;
  };

  const [, bem] = createNamespace('button');
</script>

<script lang="ts">
  import Spinner from './spinner.svelte';
  import { cl } from './utils';

  let {
    children,
    color,
    variant = 'solid',
    size = 'm',
    loading = false,
    stretched = false,
    disabled = false,
    class: className,
    ...restProps
  }: ButtonProps = $props();

  let tag = $derived('href' in restProps ? 'a' : 'button');
</script>

<svelte:element
  this={tag}
  class={cl(bem([size, variant]), className)}
  {...restProps}
  data-accent={color}>{@render children()}</svelte:element
>
