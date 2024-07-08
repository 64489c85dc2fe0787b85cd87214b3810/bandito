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
    /**
     * @default true
     */
    scrollable?: boolean;
  };

  const [, bem] = createNamespace('tabs');
</script>

<script lang="ts">
  import { HorizontalScroll } from '$lib';

  let { children, activeId, variant = 'underline', scrollable = true }: TabsProps = $props();
  let ctx = setContext('tabs', new TabsContext(activeId));
</script>

{#snippet content()}
  {@render children()}
  <div
    role="presentation"
    class={bem('line')}
    style="width: {ctx.lineWidth}px; transform: translateX({ctx.lineLeft}px)"
  ></div>
{/snippet}

<div class={bem([variant])} role="tablist">
  {#if scrollable}
    <HorizontalScroll>{@render content()}</HorizontalScroll>
  {:else}
    {@render content()}
  {/if}
</div>
