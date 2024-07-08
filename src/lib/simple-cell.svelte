<script lang="ts" context="module">
  import type { Snippet } from 'svelte';
  import { createNamespace } from './utils';

  export type SimpleCellProps = {
    children: Snippet;
    before?: Snippet;
    after?: Snippet;
  };

  const [ns, bem] = createNamespace('cell');
</script>

<script lang="ts">
  let { children, before, after }: SimpleCellProps = $props();
</script>

<div class={ns}>
  {@render children()}
</div>
