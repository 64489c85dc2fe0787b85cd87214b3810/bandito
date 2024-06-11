<svelte:options customElement="mf-modal-footer" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type ModalFooterProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: ModalFooterProps = $props();
</script>

{@render children()}
