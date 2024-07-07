<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type AutocompleteSectionProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: AutocompleteSectionProps = $props();
</script>

{@render children()}
