<svelte:options customElement="mf-avatar-group" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type AvatarGroupProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: AvatarGroupProps = $props();
</script>

{@render children()}
