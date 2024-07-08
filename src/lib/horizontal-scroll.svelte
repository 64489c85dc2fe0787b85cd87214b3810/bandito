<script lang="ts" context="module">
  import { cl, createNamespace } from './utils';
  import type { Snippet } from 'svelte';

  export type HorizontalScrollProps = {
    children: Snippet;
    class?: string;
    [key: string]: any;
  };

  const [ns, bem] = createNamespace('horizontal-scroll');
</script>

<script lang="ts">
  let { children, class: className, ...restProps }: HorizontalScrollProps = $props();
</script>

<div class={cl(ns, className)} {...restProps}>
  <div class={bem('in')}>
    <div class={bem('wrapper')}>{@render children()}</div>
  </div>
</div>
