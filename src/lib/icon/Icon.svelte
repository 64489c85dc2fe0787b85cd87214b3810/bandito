<script lang="ts" context="module">
  import { createNamespace } from '$lib/utils';
  const [name, bem] = createNamespace('icon');
</script>

<script lang="ts">
  import './Icon.scss';
  import type { IconProps } from './types';
  let { as = 'span', id, size }: IconProps = $props();
</script>

<svelte:element this={as} class={name} />
