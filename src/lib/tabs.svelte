<svelte:options customElement="mf-tabs" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type TabsProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: TabsProps = $props();
</script>

{@render children()}
