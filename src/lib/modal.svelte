<script lang="ts" context="module">
  import type { Snippet } from 'svelte';
  import { cl, createNamespace } from './utils';

  export type ModalProps = {
    children: Snippet;
    header?: Snippet;
    open?: boolean;
    class?: string;
  };

  const [ns, bem] = createNamespace('modal');
</script>

<script lang="ts">
  let { children, header, open = $bindable(false), class: className }: ModalProps = $props();
</script>

<div class={cl(ns, className)} data-style="grouped">
  {#if header}
    <header>{@render header()}</header>
  {/if}
  <div class={bem('content')}>{@render children()}</div>
</div>
