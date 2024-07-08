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
  let { children, activeId, variant }: TabsProps = $props();
  let ctx = setContext('tabs', new TabsContext(activeId));
</script>

<div class={bem([variant])} role="tablist">
  {@render children()}
  <div
    role="presentation"
    class={bem('line', { tracking: $effect.tracking() })}
    style="width: {ctx.lineWidth}px; transform: translateX({ctx.lineLeft}px)"
  ></div>
</div>
