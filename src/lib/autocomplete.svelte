<svelte:options customElement="mf-autocomplete" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type AutocompleteProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: AutocompleteProps = $props();
</script>

{@render children()}
