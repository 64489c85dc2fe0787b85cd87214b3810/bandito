<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type ModalProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: ModalProps = $props();
</script>

{@render children()}
