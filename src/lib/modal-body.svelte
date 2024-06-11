<svelte:options customElement="mf-modal-body" />

<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type ModalBodyProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: ModalBodyProps = $props();
</script>

{@render children()}
