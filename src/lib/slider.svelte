<svelte:options customElement="mf-slider" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type SliderProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: SliderProps = $props();
</script>

{@render children()}
