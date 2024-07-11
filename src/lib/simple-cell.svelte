<script lang="ts" context="module">
  import { cl, createNamespace } from './utils';
  import type { DefaultProps } from './types';
  import type { Snippet } from 'svelte';
  import type { CellIconProps } from './cell-icon.svelte';

  export type SimpleCellProps = DefaultProps & {
    children: Snippet;
    image?: Snippet;
    after?: Snippet;
    icon?: CellIconProps;
  };

  const [ns, bem] = createNamespace('cell');
</script>

<script lang="ts">
  import CellIcon from './cell-icon.svelte';

  let {
    children,
    image,
    after,
    icon,
    class: className,
    tag = 'div',
    ...restProps
  }: SimpleCellProps = $props();
</script>

<svelte:element this={tag} class={cl(ns, className)} {...restProps}>
  {#if image}
    <span class={bem('image')}>{@render image()}</span>
  {/if}
  {#if icon}
    <span class={bem('image')}><CellIcon {...icon} /></span>
  {/if}
  <span class={bem('content')}>
    <span>{@render children()}</span>
    <span></span>
  </span>
</svelte:element>
