<svelte:options customElement="mf-skeleton" />

<script lang="ts" context="module">
  import { cl, createNamespace } from './utils';

  export type SkeletonProps = {
    width?: string;
    height?: string;
    borderRadius?: string;
    class?: string;
  };

  const [ns] = createNamespace('skeleton');
</script>

<script lang="ts">
  let { width, height, borderRadius, class: className }: SkeletonProps = $props();
</script>

<span class={cl(ns, className)} style:width style:height style:border-radius={borderRadius}></span>
