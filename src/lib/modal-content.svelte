<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type ModalContentProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: ModalContentProps = $props();
</script>

{@render children()}
