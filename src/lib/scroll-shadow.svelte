<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type ScrollShadowProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: ScrollShadowProps = $props();
</script>

{@render children()}
