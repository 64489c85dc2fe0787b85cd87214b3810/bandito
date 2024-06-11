<svelte:options customElement="mf-divider" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type DividerProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: DividerProps = $props();
</script>

{@render children()}
