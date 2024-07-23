<script lang="ts" context="module">
  export type FormItemTopProps = DefaultProps & {
    children: Snippet;
  };

  const [, bem] = createNamespace('form-item');
</script>

<script lang="ts">
  import { cl, createNamespace } from './utils';
  import type { DefaultProps } from './types';
  import type { Snippet } from 'svelte';

  let { children, tag = 'div', class: className, ...restProps }: FormItemTopProps = $props();
</script>

<svelte:element this={tag} class={cl(bem('top'), className)} {...restProps}
  >{@render children()}</svelte:element
>
