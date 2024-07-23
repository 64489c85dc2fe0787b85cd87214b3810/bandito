<script lang="ts" context="module">
  export type PopoverProps = {
    children: Snippet;
  };

  const [ns, bem] = createNamespace('popover');
</script>

<script lang="ts">
  import { cl, createNamespace } from './utils';
  import type { Snippet } from 'svelte';

  let { children }: PopoverProps = $props();
</script>

<div class={cl(ns, 'material-regular')}>{@render children()}</div>
