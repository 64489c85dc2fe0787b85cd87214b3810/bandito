<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type CheckboxProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: CheckboxProps = $props();
</script>

{@render children()}
