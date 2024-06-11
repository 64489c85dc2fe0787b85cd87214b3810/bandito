<svelte:options customElement="mf-avatar-icon" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type AvatarIconProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: AvatarIconProps = $props();
</script>

{@render children()}
