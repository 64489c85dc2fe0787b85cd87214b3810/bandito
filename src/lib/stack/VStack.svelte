<script lang="ts">
  import { cl } from '$lib/utils';
  import type { StackProps } from './type';

  let { children, as = 'div', class: className }: StackProps = $props();
</script>

<svelte:element this={as} class={cl('vstack', className)}>{@render children()}</svelte:element>
