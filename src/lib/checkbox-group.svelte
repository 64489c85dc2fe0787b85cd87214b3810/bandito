<svelte:options customElement="mf-checkbox-group" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type CheckboxGroupProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: CheckboxGroupProps = $props();
</script>

{@render children()}
