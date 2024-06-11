<svelte:options customElement="mf-badge" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type BadgeProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: BadgeProps = $props();
</script>

{@render children()}
