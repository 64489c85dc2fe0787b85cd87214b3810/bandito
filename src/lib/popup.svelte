<script lang="ts" context="module">
  import { cl, createNamespace } from './utils';
  import { portal, type PortalTarget } from './portal';
  import type { DefaultProps } from './types';
  import type { Snippet } from 'svelte';

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
  import { fly, scale } from 'svelte/transition';
  import Overlay from './overlay.svelte';

  let {
    children,
    show = $bindable(false),
    position = 'center',
    target = 'body',
    tag = 'div',
    class: className,
    ...restProps
  }: PopupProps = $props();

  const animate = (node: Element) => {
    return position === 'center'
      ? scale(node, { duration: 300 })
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
    {...restProps}>{@render children()}</svelte:element
  >
{/if}
