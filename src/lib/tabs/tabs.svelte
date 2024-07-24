<script lang="ts" context="module">
  export type TabsVariant = 'underline' | 'flat' | 'light';

  export type TabsProps = {
    children: Snippet;
    activeId: string;
    /**
     * @default 'underline'
     */
    variant?: TabsVariant;
    class?: string;
    style?: string;
  };

  const [, bem] = createNamespace('tabs');
</script>

<script lang="ts">
  import { TabsContext } from './tabs-context.svelte';
  import { setContext, type Snippet } from 'svelte';
  import { HorizontalScroll, cl, createNamespace } from '$lib';

  let {
    children,
    activeId,
    variant = 'underline',
    class: className,
    ...restProps
  }: TabsProps = $props();

  let ctx = setContext('tabs', new TabsContext(activeId));
</script>

<HorizontalScroll class={cl(bem([variant]), className)} role="tablist" {...restProps}>
  {@render children()}
  <div
    role="presentation"
    class={bem('line')}
    style="width: {ctx.lineWidth}px; transform: translateX({ctx.lineLeft}px)"
  ></div>
</HorizontalScroll>
