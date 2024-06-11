<svelte:options customElement="mf-accordion-item" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type AccordionItemProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: AccordionItemProps = $props();
</script>

{@render children()}
