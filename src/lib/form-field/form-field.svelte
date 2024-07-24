<script lang="ts" context="module">
  export type FormFieldStatus = 'initial' | 'error' | 'valid';

  export type FormFieldVariant = 'regular' | 'plain';

  export type FieldIconsAlign = 'start' | 'center' | 'end';

  export type FormFieldProps = DefaultProps & {
    before?: Snippet;
    after?: Snippet;
    beforeAlign?: FieldIconsAlign;
    afterAlign?: FieldIconsAlign;
    status?: FormFieldStatus;
    variant?: FormFieldVariant;
    disabled?: boolean;
  };

  export type FormFieldOwnProps = FormFieldProps & {
    children: Snippet;
  };

  const [ns, bem] = createNamespace('form-field');
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { DefaultProps } from '../types';
  import { cl, createNamespace } from '../utils';

  let {
    children,
    before,
    after,
    status,
    variant = 'regular',
    disabled = false,
    class: className,
    tag = 'span',
    ...restProps
  }: FormFieldOwnProps = $props();

  let hover = $state(false);

  const handleMouseEnter = (e: MouseEvent) => {
    e.stopPropagation();
    hover = true;
  };
  const handleMouseLeave = (e: MouseEvent) => {
    e.stopPropagation();
    hover = false;
  };
</script>

<svelte:element
  this={tag}
  class={cl(
    bem([variant, status, { hover: !disabled && hover, hasBefore: !!before, hasAfter: !!after }]),
    className
  )}
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
  role="group"
  {...restProps}
>
  {#if before}
    <span class={bem('before')}>{@render before()}</span>
  {/if}
  {@render children()}
  {#if after}
    <span class={bem('after')}>{@render after()}</span>
  {/if}

  <span aria-hidden="true" class={bem('border')}></span>
</svelte:element>
