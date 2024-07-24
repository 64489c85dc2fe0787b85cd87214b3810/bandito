<script lang="ts" context="module">
  import { cl, createNamespace } from '../utils';
  import type { DefaultProps } from './types';

  export type GroupHeaderType = 'default' | 'plain' | 'prominent';

  export type GroupHeaderProps = DefaultProps & {
    title: string;
    /**
     * Доступен только в типе prominent
     */
    description?: string;
    type?: GroupHeaderType;
  };

  const [, bem] = createNamespace('group-header');
</script>

<script lang="ts">
  let {
    title,
    description,
    type = 'default',
    tag = 'header',
    class: className,
    ...restProps
  }: GroupHeaderProps = $props();
</script>

<svelte:element this={tag} class={cl(bem({ type }), className)} {...restProps}>
  <span class={bem('title')}>{title}</span>
  {#if description && type === 'prominent'}{/if}
</svelte:element>
