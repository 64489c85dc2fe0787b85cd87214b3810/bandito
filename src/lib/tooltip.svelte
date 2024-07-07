<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type TooltipProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: TooltipProps = $props();
</script>

{@render children()}
