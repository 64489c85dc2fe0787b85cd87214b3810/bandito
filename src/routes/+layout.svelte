<script lang="ts">
  import { Background } from '$lib';
  import '../scss/_index.scss';

  let { children } = $props();
</script>

<Background color={0} />

<svelte:head>
  <title>bandito — UI KIT</title>
</svelte:head>

{@render children()}
