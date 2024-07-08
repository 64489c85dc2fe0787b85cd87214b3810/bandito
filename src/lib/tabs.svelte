<script lang="ts" context="module">
  import { TabsContext } from './tabs-context.svelte';
  import { createNamespace } from './utils';
  import { setContext, type Snippet } from 'svelte';

  export type TabsVariant = 'underline' | 'flat' | 'light';

  export type TabsProps = {
    children: Snippet;
    activeId: string;
    /**
     * @default 'underline'
     */
    variant?: TabsVariant;
  };

  const [, bem] = createNamespace('tabs');
</script>

<script lang="ts">
  import { HorizontalScroll } from '$lib';

  let { children, activeId, variant = 'underline' }: TabsProps = $props();
  let ctx = setContext('tabs', new TabsContext(activeId));
</script>

<HorizontalScroll class={bem([variant])} role="tablist">
  {@render children()}
  <div
    role="presentation"
    class={bem('line')}
    style="width: {ctx.lineWidth}px; transform: translateX({ctx.lineLeft}px)"
  ></div>
</HorizontalScroll>
