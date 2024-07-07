<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type SpacerProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: SpacerProps = $props();
</script>

{@render children()}
