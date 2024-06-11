<svelte:options customElement="mf-dropdown-section" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type DropdownSectionProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: DropdownSectionProps = $props();
</script>

{@render children()}
