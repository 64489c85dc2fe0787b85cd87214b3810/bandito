<svelte:options customElement="mf-select-item" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type SelectItemProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: SelectItemProps = $props();
</script>

{@render children()}
