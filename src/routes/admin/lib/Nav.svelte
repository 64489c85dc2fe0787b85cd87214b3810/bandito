<script lang="ts" context="module">
  const [nav, bem] = createNamespace('nav');

  type NavItemProps = {
    alias: string;
    name: string;
    active?: boolean;
  };

  type NavProps = {
    items: NavItemProps[];
  };
</script>

<script lang="ts">
  import { Icon, Text } from '$lib';
  import { createNamespace } from '$lib/utils';

  let { items = [] }: NavProps = $props();
</script>

<nav class={nav}>
  <ul class={bem('items')}>
    {#each items as item}
      {#if item.name !== ''}
        <li class={bem('item')}>
          <a href={item.alias} class={bem('link', { active: item?.active || false })}>
            <Icon />
            <Text>{item.name}</Text>
          </a>
        </li>
      {/if}
    {/each}
  </ul>
</nav>

<style lang="scss">
  .mf-nav {
    display: flex;
    border-radius: var(--mf-radius-1);
    padding: var(--mf-spacing-1);
  }

  .mf-nav__items {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .mf-nav__link {
    display: flex;
    align-items: center;
    gap: var(--mf-spacing-1);
    border-radius: var(--mf-radius-1);
    padding: var(--mf-spacing-1);
    color: var(--mf-link-secondary-color);
    font-weight: 500;

    &:hover {
      background-color: var(--mf-secondary-bg);
    }

    &--active {
      background-color: #fff;
      color: #121212;

      &:hover {
        background-color: #fff;
      }
    }
  }
</style>
