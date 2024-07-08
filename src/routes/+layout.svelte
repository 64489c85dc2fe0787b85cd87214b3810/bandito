<script lang="ts">
  import '../scss/_index.scss';

  let { children } = $props();
</script>

<svelte:head>
  <title>Bandito</title>
</svelte:head>

{@render children()}
