<svelte:options customElement="mf-skeleton" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type SkeletonProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: SkeletonProps = $props();
</script>

{@render children()}
