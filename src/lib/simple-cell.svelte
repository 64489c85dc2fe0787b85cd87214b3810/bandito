<script lang="ts" context="module">
  import { cl, createNamespace } from './utils';
  import type { DefaultProps } from './types';
  import type { Snippet } from 'svelte';

  export type SimpleCellProps = DefaultProps & {
    children: Snippet;
    before?: Snippet;
    after?: Snippet;
  };

  const [ns, bem] = createNamespace('cell');
</script>

<script lang="ts">
  let {
    children,
    before,
    after,
    class: className,
    tag = 'div',
    ...restProps
  }: SimpleCellProps = $props();
</script>

<svelte:element this={tag} class={cl(ns, className)} {...restProps}>
  <span class={bem('before')}>{@render before?.()}</span>
  <span class={bem('in')}>{@render children()}</span>
</svelte:element>
