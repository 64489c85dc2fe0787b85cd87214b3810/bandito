<script lang="ts" context="module">
  export type FormFieldProps = DefaultProps & {
    children: Snippet;
    before?: Snippet;
    after?: Snippet;
  };

  const [ns, bem] = createNamespace('form-field');
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { DefaultProps } from './types';
  import { cl, createNamespace } from './utils';

  let {
    children,
    before,
    after,
    class: className,
    tag = 'span',
    ...restProps
  }: FormFieldProps = $props();
</script>

<svelte:element this={tag} class={cl(bem('1'), className)} {...restProps}>
  {#if before}
    <span class={bem('before')}>{@render before()}</span>
  {/if}
  {@render children()}
  {#if after}
    <span class={bem('after')}>{@render after()}</span>
  {/if}

  <span aria-hidden="true" class={bem('border')}></span>
</svelte:element>
