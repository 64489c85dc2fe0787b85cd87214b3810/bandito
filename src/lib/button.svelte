<svelte:options customElement="mf-button" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

  export type ButtonColor = 'default' | 'primary' | 'success' | 'warning' | 'danger';

  export type ButtonVariant =
    | 'solid'
    | 'faded'
    | 'bordered'
    | 'light'
    | 'flat'
    | 'ghost'
    | 'shadow';

  export type ButtonSize = 's' | 'm' | 'l';

  export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

  export type ButtonProps = DefaultProps<HTMLButtonElement | HTMLAnchorElement> & {
    children: Snippet;
    color?: ButtonColor;
    variant?: ButtonVariant;
    size?: ButtonSize;
    radius?: ButtonRadius;
    loading?: boolean;
    stretched?: boolean;
    disabled?: boolean;
    href?: string;
  };
</script>

<script lang="ts">
  import Spinner from './spinner.svelte';
  import type { DefaultProps } from './types';

  let {
    children,
    color = 'default',
    variant = 'solid',
    size = 's',
    radius,
    loading = false,
    stretched = false,
    disabled = false,
    element = $bindable(),
    ...restProps
  }: ButtonProps & HTMLButtonAttributes & HTMLAnchorAttributes = $props();

  let tag = $derived('href' in restProps ? 'a' : 'button');
</script>

<svelte:element this={tag} bind:this={element} class="button button-{size}" {...restProps}>
  {#if loading}
    <Spinner size="m" onclick={() => alert(123)} />
  {/if}
  <span>{@render children()}</span>
</svelte:element>
