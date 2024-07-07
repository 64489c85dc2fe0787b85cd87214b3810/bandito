<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type ListboxProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: ListboxProps = $props();
</script>

{@render children()}
