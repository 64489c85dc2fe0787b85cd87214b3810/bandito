<svelte:options customElement="mf-user" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type UserProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: UserProps = $props();
</script>

{@render children()}
