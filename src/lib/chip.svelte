<svelte:options customElement="mf-chip" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type ChipProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: ChipProps = $props();
</script>

{@render children()}
