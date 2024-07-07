<script lang="ts" context="module">
  import { cl, createNamespace } from './utils';
  import type { Snippet } from 'svelte';

  export type PopoverProps = {
    children: Snippet;
  };

  const [ns, bem] = createNamespace('popover');
</script>

<script lang="ts">
  let { children }: PopoverProps = $props();
</script>

<div class={cl(ns, 'material-regular')}>{@render children()}</div>
