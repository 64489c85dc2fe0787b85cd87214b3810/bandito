<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type ListboxSectionProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: ListboxSectionProps = $props();
</script>

{@render children()}
