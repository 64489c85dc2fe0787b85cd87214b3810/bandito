<svelte:options customElement="mf-switch" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type SwitchProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: SwitchProps = $props();
</script>

{@render children()}
