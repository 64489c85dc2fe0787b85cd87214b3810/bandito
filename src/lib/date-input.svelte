<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type DateInputProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: DateInputProps = $props();
</script>

{@render children()}
