<script lang="ts" context="module">
  export type FormItemTopProps = DefaultProps & {
    children: Snippet;
  };
</script>

<script lang="ts">
  import { cl } from '../utils';
  import { formItemBem } from './form-item.svelte';
  import type { DefaultProps } from './types';
  import type { Snippet } from 'svelte';

  let { children, tag = 'div', class: className, ...restProps }: FormItemTopProps = $props();
</script>

<svelte:element this={tag} class={cl(formItemBem('top'), className)} {...restProps}
  >{@render children()}</svelte:element
>
