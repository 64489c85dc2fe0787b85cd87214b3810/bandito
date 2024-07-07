<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type RadioGroupProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: RadioGroupProps = $props();
</script>

{@render children()}
