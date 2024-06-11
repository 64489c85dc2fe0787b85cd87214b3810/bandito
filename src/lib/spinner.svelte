<svelte:options customElement="mf-spinner" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type SpinnerProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: SpinnerProps = $props();
</script>

{@render children()}
