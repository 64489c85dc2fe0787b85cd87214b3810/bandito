<script lang="ts" context="module">
  export type FormItemTopProps = SubheadProps & {
    for?: string;
  };
</script>

<script lang="ts">
  import { cl } from '../utils';
  import { CONTEXT_KEY, formItemBem, type FormItemContext } from './form-item.svelte';
  import { getContext } from 'svelte';
  import Subhead, { type SubheadProps } from '../typography/subhead.svelte';

  let { children, tag, class: className, for: htmlFor, ...restProps }: FormItemTopProps = $props();
  let computedTag = $derived(tag ? tag : htmlFor ? 'label' : 'span');

  let context = getContext<FormItemContext>(CONTEXT_KEY);
</script>

<Subhead
  tag={computedTag}
  class={cl(formItemBem('top-label', { multiline: context.topMultiline }), className)}
  {...restProps}
>
  {@render children()}
  {#if context.required}
    <span class={formItemBem('top-label', { required: true })} aria-hidden="true">*</span>
  {/if}
</Subhead>
