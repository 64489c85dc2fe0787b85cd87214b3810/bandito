<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type TextareaProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: TextareaProps = $props();
</script>

{@render children()}
