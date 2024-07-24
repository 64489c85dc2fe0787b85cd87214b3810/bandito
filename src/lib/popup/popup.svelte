<script lang="ts" context="module">
  export type PopupPosition = 'center' | 'top' | 'right' | 'bottom' | 'left';

  export type PopupProps = DefaultProps & {
    children: Snippet;
    show?: boolean;
    position?: PopupPosition;
    target?: PortalTarget;
  };

  const [, bem] = createNamespace('popup');

  const flySet = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    top: { x: 0, y: -100 },
    bottom: { x: 0, y: 100 },
  };
</script>

<script lang="ts">
  import { cl, createNamespace } from '../utils';
  import { fade, fly } from 'svelte/transition';
  import { portal, type PortalTarget } from '../portal/portal';
  import Overlay from '../overlay/overlay.svelte';
  import type { DefaultProps } from '../types';
  import type { Snippet } from 'svelte';

  let {
    children,
    show = $bindable(false),
    position = 'center',
    target = 'body',
    tag = 'div',
    class: className,
    style = '',
    ...restProps
  }: PopupProps = $props();

  const animate = (node: Element) => {
    return position === 'center'
      ? fade(node, { duration: 300 })
      : fly(node, { ...flySet[position], duration: 300 });
  };

  const close = () => {
    show = false;
  };
</script>

<Overlay bind:show onclick={close} />

{#if show}
  <svelte:element
    this={tag}
    role="dialog"
    use:portal={target}
    transition:animate
    class={cl(bem([position]), className)}
    style="z-index: 2063;{style}"
    {...restProps}>{@render children()}</svelte:element
  >
{/if}
