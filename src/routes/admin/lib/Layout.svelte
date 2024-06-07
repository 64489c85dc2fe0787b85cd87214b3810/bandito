<script lang="ts" context="module">
  const [name, bem] = createNamespace('layout');
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { createNamespace } from '$lib/utils';

  type LayoutProps = {
    aside: Snippet;
    children: Snippet;
    wide?: boolean;
  };

  let { aside, children, wide }: LayoutProps = $props();
</script>

<div
  class={bem({
    wide,
  })}
>
  <aside>{@render aside()}</aside>
  <main>{@render children()}</main>
</div>

<style lang="scss">
  .mf-layout {
    display: flex;
    justify-content: center;
    gap: 1rem;

    aside {
      max-width: 300px;
      width: 100%;
    }

    main {
      max-width: 700px;
      width: 100%;
    }

    &--wide {
      main {
        max-width: 100%;
        flex-flow: 1;
      }
    }
  }
</style>
