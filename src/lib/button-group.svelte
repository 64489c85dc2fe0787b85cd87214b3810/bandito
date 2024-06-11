<svelte:options customElement="mf-button-group" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type ButtonGroupProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: ButtonGroupProps = $props();
</script>

{@render children()}
