<script lang="ts" context="module">
  import { getContext, type Snippet } from 'svelte';
  import { cl, createNamespace } from './utils';
  import type { TabsContext } from './tabs-context.svelte';

  export type TabsItemProps = {
    children: Snippet;
    id: string;
    tag?: keyof HTMLElementTagNameMap;
    class?: string;
    [key: string]: any;
  };

  const [, bem] = createNamespace('tabs-item');
</script>

<script lang="ts">
  let { children, id, tag = 'div', class: className, ...restProps }: TabsItemProps = $props();

  let el = $state<HTMLElement>();
  let ctx = getContext<TabsContext>('tabs');
  let active = $derived(ctx.activeId === id);

  const onclick = () => {
    ctx.activeId = id;
  };

  $effect(() => {
    if (ctx.activeId === id) {
      ctx.lineWidth = el?.offsetWidth ?? 0;
      ctx.lineLeft = el?.offsetLeft ?? 0;
    }
  });
</script>

<!-- svelte-ignore a11y_interactive_supports_focus -->
<svelte:element
  this={tag}
  bind:this={el}
  role="tab"
  class={cl(bem({ active }), className)}
  {onclick}
  {...restProps}>{@render children()}</svelte:element
>
