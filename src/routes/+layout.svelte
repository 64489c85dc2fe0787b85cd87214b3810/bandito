<script lang="ts">
  import Background from '$lib/background.svelte';
  import '../scss/_index.scss';

  let { children } = $props();
</script>

<svelte:head>
  <title>Bandito</title>
</svelte:head>

<Background />
{@render children()}
