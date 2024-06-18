<svelte:options customElement={{ tag: 'mf-button', shadow: 'none' }} />

<script lang="ts" context="module">
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
  };
</script>

<script lang="ts">
  import Spinner from './spinner.svelte';

  let {
    children,
    color,
    variant = 'solid',
    size = 's',
    loading = false,
    stretched = false,
    disabled = false,
    ...restProps
  }: ButtonProps = $props();

  let tag = $derived('href' in restProps ? 'a' : 'button');
</script>

<svelte:element
  this={tag}
  class="button button-{size} button--{variant}"
  {...restProps}
  data-accent={color}
>
  {#if loading}
    <Spinner size="m" onclick={() => alert(123)} />
  {/if}
  <span>{@render children()}</span>
</svelte:element>
