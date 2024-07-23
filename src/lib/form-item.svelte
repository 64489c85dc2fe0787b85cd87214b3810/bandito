<script lang="ts" context="module">
  export type FormItemProps = DefaultProps & {
    children: Snippet;
    top?: Snippet | string;
    bottom?: Snippet | string;
    status?: FormFieldStatus;
    required?: boolean;
    topMultiline?: boolean;
    removable?: boolean | 'indent';
    noPadding?: boolean;
  };

  export type FormItemContext = {
    readonly required: boolean;
    readonly topMultiline: boolean;
  };

  export const CONTEXT_KEY = 'form-item';

  export const [, formItemBem] = createNamespace('form-item');
</script>

<script lang="ts">
  import { cl, createNamespace } from './utils';
  import { setContext, type Snippet } from 'svelte';
  import Footnote from './footnote.svelte';
  import FormItemTop from './form-item-top.svelte';
  import FormItemTopLabel from './form-item-top-label.svelte';
  import type { DefaultProps } from './types';
  import type { FormFieldStatus } from './form-field.svelte';

  let {
    children,
    top,
    bottom,
    status,
    required = false,
    topMultiline = false,
    noPadding,
    tag = 'div',
    class: className,
    ...restProps
  }: FormItemProps = $props();

  setContext(CONTEXT_KEY, {
    get required() {
      return required;
    },
    get topMultiline() {
      return topMultiline;
    },
  });
</script>

<svelte:element this={tag} class={cl(formItemBem({ noPadding }), className)} {...restProps}>
  {#if top}
    {#if typeof top === 'string'}
      <FormItemTop>
        <FormItemTopLabel>{top}</FormItemTopLabel>
      </FormItemTop>
    {:else}
      {@render top()}
    {/if}
  {/if}

  {@render children()}

  {#if bottom}
    <Footnote class={formItemBem('bottom')} role={status === 'error' ? 'alert' : undefined}
      >{#if typeof bottom === 'string'}{bottom}{:else}{@render bottom()}{/if}</Footnote
    >
  {/if}
</svelte:element>
