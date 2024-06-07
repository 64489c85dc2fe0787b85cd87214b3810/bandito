<script lang="ts">
  import '../+page.scss';
  import { Icon, Text } from '$lib';
  import { createNamespace } from '$lib/utils';
  import Layout from '../lib/Layout.svelte';
  import Nav from '../lib/Nav.svelte';
  import Tabs from '../lib/Tabs.svelte';

  const [navName, bemNav] = createNamespace('nav');
  const [boxName, bemBox] = createNamespace('box');
  const [layoutName, bemLayout] = createNamespace('layout');

  /** @todo remove later */
  const items = [
    {
      alias: 'common',
      name: 'Общие',
      active: true,
    },
    {
      alias: 'management',
      name: 'Пользователи и доступы',
    },
    {
      alias: 'payment',
      name: 'Оплаты',
    },
    {
      alias: 'order',
      name: 'Оформление заказа',
    },
    {
      alias: 'delivery',
      name: 'Доставка',
    },
    {
      alias: 'location',
      name: 'Локации',
    },
    {
      alias: 'domain',
      name: 'Домены',
    },
    {
      alias: 'lang',
      name: 'Языки',
    },
    {
      alias: 'privacy',
      name: 'Политика безопасности',
    },
    {
      alias: 'logs',
      name: 'Логи',
    },
  ];

  const tabs = [
    { title: 'Вкладка 1', children: 'Содержимое первой вкладки' },
    { title: 'Вкладка 2 содержит длинный текст', children: 'Содержимое второй вкладки' },
    { title: 'Вкладка 3', children: 'Содержимое третьей вкладки' },
    { title: 'Вкладка 3', children: 'Содержимое третьей вкладки' },
    { title: 'Вкладка 3', children: 'Содержимое третьей вкладки' },
  ];
</script>

<a href="/id/login">test</a>
<Layout>
  {#snippet aside()}
    <Nav {items}></Nav>
  {/snippet}
  <div class={boxName}>
    <Text as="h1">Общие</Text>

    <Tabs {tabs}></Tabs>
  </div>
</Layout>

<style lang="scss">
  /** Box el */
  .mf-box {
    display: flex;
    flex-direction: column;
    gap: var(--mf-gap-1);
    width: 100%;
    color: #fff;
  }
</style>
