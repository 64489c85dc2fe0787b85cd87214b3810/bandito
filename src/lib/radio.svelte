<svelte:options customElement="mf-radio" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type RadioProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: RadioProps = $props();
</script>

{@render children()}
