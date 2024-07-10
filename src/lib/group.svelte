<script lang="ts" context="module">
  import { cl, createNamespace } from './utils';
  import type { DefaultProps } from './types';
  import type { Snippet } from 'svelte';

  export type GroupMode = 'plain' | 'card';

  export type GroupPadding = 's' | 'm';

  export type GroupProps = DefaultProps & {
    children: Snippet;
    mode?: GroupMode;
    /**
     * @default 'm'
     */
    padding?: GroupPadding;
  };

  const [, bem] = createNamespace('group');
</script>

<script lang="ts">
  let {
    children,
    mode,
    padding = 'm',
    class: className,
    tag = 'div',
    'data-style': dataStyle = 'grouped',
    ...restProps
  }: GroupProps = $props();
</script>

<svelte:element
  this={tag}
  class={cl(bem([mode, padding]), className)}
  data-style={dataStyle}
  {...restProps}
>
  {@render children()}
</svelte:element>
