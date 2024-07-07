<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type TabProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: TabProps = $props();
</script>

{@render children()}
