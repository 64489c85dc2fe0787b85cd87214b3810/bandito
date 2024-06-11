<svelte:options customElement="mf-range-calendar" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type RangeCalendarProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: RangeCalendarProps = $props();
</script>

{@render children()}
