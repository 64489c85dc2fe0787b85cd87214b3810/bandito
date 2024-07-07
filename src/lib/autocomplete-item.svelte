<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type AutocompleteItemProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: AutocompleteItemProps = $props();
</script>

{@render children()}
