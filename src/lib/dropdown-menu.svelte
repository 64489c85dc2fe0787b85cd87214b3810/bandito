<svelte:options customElement="mf-dropdown-menu" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type DropdownMenuProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: DropdownMenuProps = $props();
</script>

{@render children()}
