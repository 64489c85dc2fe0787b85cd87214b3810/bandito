<script lang="ts">
  import { Icon, Text } from '$lib';
  import { createNamespace } from '$lib/utils';

  const [navName, bemNav] = createNamespace('nav');
</script>

<nav class={navName}>
  <ul class={bemNav('items')}>
    <li class={bemNav('item')}>
      <a
        href="#"
        class={bemNav('link', {
          active: true,
        })}
      >
        <Icon />
        <Text>Test</Text>
      </a>
    </li>
    <li class={bemNav('item')}>
      <a href="#" class={bemNav('link')}>
        <Icon />
        <Text>Test</Text>
      </a>
    </li>
    <li class={bemNav('item')}>
      <a href="#" class={bemNav('link')}>
        <Icon />
        <Text>Test</Text>
      </a>
    </li>
    <li class={bemNav('item')}>
      <a href="#" class={bemNav('link')}>
        <Icon />
        <Text>Test</Text>
      </a>
    </li>
  </ul>
</nav>

<style>
  :root {
    --mf-primary-color: #005bc4;
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
    gap: var(--mf-spacing-1);
    width: 100%;
  }

  .mf-nav__link {
    display: flex;
    align-items: center;
    gap: var(--mf-spacing-1);
    border-radius: var(--mf-radius-1);
    padding: var(--mf-spacing-1);
  }

  .mf-nav__link:hover {
    background-color: red;
  }

  .mf-nav__link--active {
    background-color: var(--mf-primary-color);
  }
</style>
