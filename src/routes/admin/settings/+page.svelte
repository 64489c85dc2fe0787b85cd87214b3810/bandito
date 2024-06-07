<script lang="ts">
  import './+page.scss';
  import { Icon, Text } from '$lib';
  import { createNamespace } from '$lib/utils';

  const [navName, bemNav] = createNamespace('nav');
  const [boxName, bemBox] = createNamespace('box');
  const [layoutName, bemLayout] = createNamespace('layout');

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

<div class={layoutName}>
  <nav class={navName}>
    <ul class={bemNav('items')}>
      {#each Object.entries(menu) as [key, item]}
        {#if item.name !== ''}
          <li class={bemNav('item')}>
            <a href="#{key}" class={bemNav('link', { active: item?.active || false })}>
              <Icon />
              <Text>{item.name}</Text>
            </a>
          </li>
        {/if}
      {/each}
    </ul>
  </nav>
  <div class={boxName}>
    <Text as="h1">Общие</Text>
  </div>
</div>

<style lang="scss">
  :root {
    --mf-link-main-color: #ecedee;
    --mf-link-secondary-color: #a1a1aa;
    --mf-radius-1: 0.5rem;
    --mf-spacing-1: 0.5rem;
    --mf-gap-1: 1rem;
  }

  .mf-nav {
    display: flex;
    width: 18em;
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

    &:hover {
      background-color: var(--mf-secondary-bg);
    }

    &--active {
      background-color: var(--mf-secondary-bg);
      color: var(--mf-link-main-color);

      &:hover {
        background-color: var(--mf-secondary-bg);
      }
    }
  }

  /** Layout el */
  .mf-layout {
    display: flex;
    justify-content: center;
    padding: 1rem 2rem;
    gap: 1rem;
  }

  /** Box el */
  .mf-box {
    display: flex;
    gap: var(--mf-gap-1);
    width: 46.75rem;
  }

  :global(.mf-text) {
    color: var(--mf-link-main-color);
  }
</style>
