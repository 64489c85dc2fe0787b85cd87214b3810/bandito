<script>
  import Layout from './lib/Layout.svelte';
  import Nav from './lib/Nav.svelte';
  import './+page.scss';

  /** @todo remove later */
  const items = [
    {
      alias: 'catalog',
      name: 'Каталог',
    },
    {
      alias: 'settings',
      name: 'Настройки',
      active: true,
    },
  ];
</script>

<Layout wide={true}>
  {#snippet aside()}
    <Nav {items}></Nav>
  {/snippet}
  123123123
</Layout>
