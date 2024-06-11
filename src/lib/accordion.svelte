<svelte:options customElement="mf-accordion" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type AccordionProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: AccordionProps = $props();
</script>

{@render children()}
