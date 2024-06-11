<svelte:options customElement="mf-time-input" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type TimeInputProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: TimeInputProps = $props();
</script>

{@render children()}
