<script lang="ts">
  import '$lib/vars.scss';
  import { menu } from './menu';

  let { children } = $props();
</script>

{#snippet navigation(items)}
  <ul>
    {#each items as item}
      <li>
        <a href={item.link}>{item.title}</a>
        {#if item.children}
          {@render navigation(item.children)}
        {/if}
      </li>
    {/each}
  </ul>
{/snippet}

<nav>{@render navigation(menu)}</nav>
<main>{@render children()}</main>

<style>
  nav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: scroll;
    width: 300px;
  }
  main {
    padding-left: 300px;
  }
</style>
