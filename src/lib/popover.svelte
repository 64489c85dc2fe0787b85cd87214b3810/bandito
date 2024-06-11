<svelte:options customElement="mf-popover" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type PopoverProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: PopoverProps = $props();
</script>

{@render children()}
