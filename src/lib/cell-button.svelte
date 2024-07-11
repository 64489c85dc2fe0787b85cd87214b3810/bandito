<script lang="ts" context="module">
  import { cl, createNamespace } from './utils';
  import type { DefaultProps } from './types';
  import type { Snippet } from 'svelte';

  export type CellButtonProps = DefaultProps & {
    children: Snippet;
    destructive?: boolean;
    disabled?: boolean;
  };

  const [ns, bem] = createNamespace('cell');
</script>

<script lang="ts">
  let {
    children,
    disabled,
    destructive,
    class: className,
    tag = 'button',
    ...restProps
  }: CellButtonProps = $props();
</script>

<svelte:element
  this={tag}
  class={cl(bem({ button: true, disabled, destructive }), className)}
  {disabled}
  {...restProps}
>
  <span class={bem('content')}>{@render children()}</span>
</svelte:element>
