<script lang="ts" context="module">
  export type SubheadProps = TypographyProps & {};

  const [ns] = createNamespace('subhead');
</script>

<script lang="ts">
  import { createNamespace } from '../utils';
  import { tcl, type TypographyProps } from './typography';

  let {
    children,
    tag = 'span',
    class: className,
    weight,
    normalize = true,
    inline = false,
    ...restProps
  }: SubheadProps = $props();
</script>

<svelte:element this={tag} class={tcl({ normalize, inline, weight }, ns, className)} {...restProps}
  >{@render children?.()}</svelte:element
>
