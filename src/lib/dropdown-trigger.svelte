<svelte:options customElement="mf-dropdown-trigger" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type DropdownTriggerProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: DropdownTriggerProps = $props();
</script>

{@render children()}
