<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type DateRangePickerProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: DateRangePickerProps = $props();
</script>

{@render children()}
