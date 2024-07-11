<script lang="ts" context="module">
  import { cl, createNamespace } from './utils';
  import type { DefaultProps } from './types';
  import type { Snippet } from 'svelte';

  export type GroupProps = DefaultProps & {
    children: Snippet;
    header?: Snippet | string;
    footer?: Snippet | string;
    inset?: boolean;
  };

  const [, bem] = createNamespace('group');
</script>

<script lang="ts">
  let {
    children,
    header,
    footer,
    inset,
    class: className,
    'data-style': dataStyle = 'grouped',
    ...restProps
  }: GroupProps = $props();
</script>

<section class={cl(bem({ inset }), className)} data-style={dataStyle} {...restProps}>
  {#if header}
    <header class={bem('header')}>header</header>
  {/if}

  <div class={bem('content')}>{@render children()}</div>

  {#if footer}
    <footer class={bem('footer')}>footer</footer>
  {/if}
</section>
