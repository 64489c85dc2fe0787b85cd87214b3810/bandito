<script lang="ts" context="module">
  import { cl, createNamespace } from '../utils';
  import type { DefaultProps } from './types';
  import type { IconSet20 } from '@mftd03/icons';

  export type CellIconProps = DefaultProps & {
    name: IconSet20;
  };

  const [ns] = createNamespace('cell-icon');
</script>

<script lang="ts">
  import { Icon } from '@mftd03/icons';

  let { name, class: className, tag = 'span', ...restProps }: CellIconProps = $props();
</script>

<svelte:element this={tag} class={cl(ns, className)} {...restProps}>
  <Icon set={20} {name} />
</svelte:element>
