<script lang="ts">
  import { Icon, Text } from '$lib';
  import { createNamespace } from '$lib/utils';

  const [navName, bemNav] = createNamespace('nav');

  /** @todo remove later */
  const menu = {
    common: {
      name: 'Общие',
      active: true,
    },
    management: {
      name: 'Пользователи и доступы',
    },
    payment: {
      name: 'Оплаты',
    },
    order: {
      name: 'Оформление заказа',
    },
    delivery: {
      name: 'Доставка',
    },
    location: {
      name: 'Локации',
    },
    domain: {
      name: 'Домены',
    },
    lang: {
      name: 'Языки',
    },
    privacy: {
      name: 'Политика безопасности',
    },
    logs: {
      name: 'Логи',
    },
  };
</script>

<nav class={navName}>
  <ul class={bemNav('items')}>
    {#each Object.entries(menu) as [key, item]}
      {#if item.name !== ''}
        <li class={bemNav('item')}>
          <a href={key} class={bemNav('link', { active: item?.active || false })}>
            <Icon />
            <Text>{item.name}</Text>
          </a>
        </li>
      {/if}
    {/each}
  </ul>
</nav>

<style lang="scss">
  :root {
    --mf-primary-color: #005bc4;
    --mf-color-bg: #f1f2f4;
    --mf-radius-1: 0.5rem;
    --mf-spacing-1: 0.5rem;
  }

  .mf-nav {
    display: flex;
    width: 18em;
    background-color: white;
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

    &:hover {
      background-color: var(--mf-color-bg);
    }

    &--active {
      background-color: var(--mf-primary-color);

      &:hover {
        background-color: var(--mf-primary-color);
      }
    }
  }
</style>
