<svelte:options customElement="mf-avatar" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type AvatarProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: AvatarProps = $props();
</script>

{@render children()}
