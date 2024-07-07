<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type CircularProgressProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: CircularProgressProps = $props();
</script>

{@render children()}
