<script lang="ts" context="module">
  export type NavbarProps = DefaultProps & {
    children: Snippet;
    before?: Snippet | string;
    after?: Snippet | string;
  };

  const [ns, bem] = createNamespace('navbar');
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { DefaultProps } from '../types';
  import { createNamespace } from '../utils';

  let { children, tag = 'div' }: NavbarProps = $props();
</script>

<svelte:element this={tag}>
  <div class={bem('content')}>
    {#if before}before{/if}

    <div class={bem('center')}></div>
    {#if after}after{/if}
  </div>
</svelte:element>
