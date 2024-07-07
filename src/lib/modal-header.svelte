<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type ModalHeaderProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: ModalHeaderProps = $props();
</script>

{@render children()}
