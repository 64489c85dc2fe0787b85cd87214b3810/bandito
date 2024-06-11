<svelte:options customElement="mf-link" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type LinkProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: LinkProps = $props();
</script>

{@render children()}
