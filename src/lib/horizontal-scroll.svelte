<script lang="ts" context="module">
  import type { Snippet } from 'svelte';
  import { createNamespace } from './utils';

  export type HorizontalScrollProps = {
    children: Snippet;
  };

  const [ns, bem] = createNamespace('horizontal-scroll');
</script>

<script lang="ts">
  let { children }: HorizontalScrollProps = $props();
</script>

<div class={ns}>
  <div class={bem('in')}>
    <div class={bem('wrapper')}>{@render children()}</div>
  </div>
</div>
