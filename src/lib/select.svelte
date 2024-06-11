<svelte:options customElement="mf-select" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type SelectProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: SelectProps = $props();
</script>

{@render children()}
