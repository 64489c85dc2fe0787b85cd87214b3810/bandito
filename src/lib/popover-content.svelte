<svelte:options customElement="mf-popover-content" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type PopoverContentProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: PopoverContentProps = $props();
</script>

{@render children()}
