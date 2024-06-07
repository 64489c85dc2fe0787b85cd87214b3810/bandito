<script lang="ts">
  import { createNamespace } from '$lib/utils';
  import { tick, type Snippet } from 'svelte';

  type NavItemProps = {
    title: string;
    active?: boolean;
    children?: string;
  };

  type TabsProps = {
    tabs: NavItemProps[];
  };

  const [tabsName, bem] = createNamespace('tabs');

  let container: HTMLDivElement;
  let shadow: HTMLDivElement;
  let { tabs = [] }: TabsProps = $props();

  let inited = $state(false);
  let activeTabIndex = $state(2); // Индекс активного таба
  let shadowStyle = $state({ left: 0, width: 0 });

  const handleTabClick = (index: number) => {
    inited = true;
    activeTabIndex = index;
    updateShadowPosition();
  };

  const updateShadowPosition = () => {
    const activeButton = container.querySelector(
      `[data-tab-index="${activeTabIndex}"]`
    ) as HTMLElement;
    const buttonRect = activeButton.getBoundingClientRect();
    const containerRect = (activeButton.parentNode as HTMLElement).getBoundingClientRect();

    console.log({ containerRect });
    shadowStyle = {
      left: buttonRect.left - containerRect.left,
      width: buttonRect.width,
    };
  };

  $effect(() => {
    tick().then(updateShadowPosition);
  });
</script>

<div class={tabsName}>
  <div
    class={bem('shadow', { inited })}
    style:left="{shadowStyle.left}px"
    style:width="{shadowStyle.width}px"
    bind:this={shadow}
  ></div>
  <div class={bem('buttons-container')} bind:this={container}>
    {#each tabs as item, index}
      <button
        data-tab-index={index}
        class={bem('button')}
        class:active={activeTabIndex === index}
        on:click={() => handleTabClick(index)}
      >
        {item.title}
      </button>
    {/each}
  </div>
</div>

<style lang="scss">
  :root {
    --mf-tabs-primary-bg: #27272a;
    --mf-tabs-secondary-bg: #18181b;
  }

  .mf-tabs {
    background-color: var(--mf-tabs-primary-bg);
    border-radius: 12px;
    position: relative;
    display: flex;
    flex-direction: column;

    &__buttons-container {
      display: flex;
      width: 100%;
      padding: 5px;
    }

    &__button {
      -webkit-tap-highlight-color: transparent;
      background-color: transparent;
      border: 0;
      position: relative;
      cursor: pointer;
      flex-grow: 1;
      padding: 10px;
      text-align: center;
    }

    &__shadow {
      position: absolute;
      height: calc(100% - 10px);
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(255, 0, 0, 0.3);
      border-radius: 12px;
      z-index: 1;

      &--inited {
        transition:
          left 0.3s ease,
          width 0.3s ease;
      }
    }

    &__button.active {
      color: white;
    }
  }
</style>
