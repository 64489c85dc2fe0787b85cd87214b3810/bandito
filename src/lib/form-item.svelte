<script lang="ts" context="module">
  import { createNamespace } from './utils';
  import type { Snippet } from 'svelte';

  export type FormItemProps = {
    children: Snippet;
    top?: Snippet | string;
    bottom?: Snippet | string;
  };

  const [ns, bem] = createNamespace('form-item');
</script>

<script lang="ts">
  let { children, top, bottom }: FormItemProps = $props();
</script>

<div class={ns}>
  {#if top}
    {#if typeof top === 'function'}{@render top()}{:else}{top}{/if}
  {/if}
  {@render children()}
</div>
