<svelte:options customElement="mf-kbd" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type KbdProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: KbdProps = $props();
</script>

{@render children()}
