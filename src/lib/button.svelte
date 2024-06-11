<svelte:options customElement="mf-button" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type ButtonVariant =
    | 'solid'
    | 'faded'
    | 'bordered'
    | 'light'
    | 'flat'
    | 'ghost'
    | 'shadow';

  export type ButtonProps = {
    children: Snippet;
    variant?: ButtonVariant;
  };
</script>

<script lang="ts">
  let { children, variant }: ButtonProps = $props();
</script>

<button class="mf-button">{@render children()}</button>
<a href="/" class="mf-button">{@render children()}</a>
