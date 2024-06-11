<svelte:options customElement="mf-select-section" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type SelectSectionProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: SelectSectionProps = $props();
</script>

{@render children()}
