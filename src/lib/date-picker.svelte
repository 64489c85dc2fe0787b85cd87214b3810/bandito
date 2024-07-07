<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type DatePickerProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: DatePickerProps = $props();
</script>

{@render children()}
