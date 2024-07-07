<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type ListboxItemProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: ListboxItemProps = $props();
</script>

{@render children()}
