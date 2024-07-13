<script lang="ts" context="module">
  import { cl, createNamespace } from './utils';
  import type { DefaultProps } from './types';
  import { portal, type PortalTarget } from './portal';
  import { fade } from 'svelte/transition';
  import { sineOut } from 'svelte/easing';

  export type OverlayProps = DefaultProps & {
    show: boolean;
    target?: PortalTarget;
  };

  const [ns, bem] = createNamespace('overlay');
</script>

<script lang="ts">
  let {
    show = $bindable(false),
    target = 'body',
    tag = 'button',
    class: className,
    ...restProps
  }: OverlayProps = $props();
</script>

{#if show}
  <svelte:element
    this={tag}
    use:portal={target}
    transition:fade={{ duration: 300, easing: sineOut }}
    class={cl(ns, className)}
    {...restProps}
  />
{/if}
