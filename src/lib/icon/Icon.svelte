<script lang="ts" context="module">
  import './Icon.scss';
  import { createNamespace } from '$lib/utils';
  const [name, bem] = createNamespace('icon');
</script>

<script lang="ts">
  import type { IconProps } from './types';
  let { as = 'span', id, size }: IconProps = $props();
</script>

<svelte:element this={as} class={name} />
