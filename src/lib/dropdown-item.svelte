<svelte:options customElement="mf-dropdown-item" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type DropdownItemProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: DropdownItemProps = $props();
</script>

{@render children()}
