<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type DropdownProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: DropdownProps = $props();
</script>

{@render children()}
