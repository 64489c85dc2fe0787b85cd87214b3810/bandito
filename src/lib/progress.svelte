<svelte:options customElement="mf-progress" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type ProgressProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: ProgressProps = $props();
</script>

{@render children()}
