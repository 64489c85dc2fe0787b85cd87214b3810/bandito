<svelte:options customElement="mf-popover-trigger" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type PopoverTriggerProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: PopoverTriggerProps = $props();
</script>

{@render children()}
