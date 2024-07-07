<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type ImageProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: ImageProps = $props();
</script>

{@render children()}
