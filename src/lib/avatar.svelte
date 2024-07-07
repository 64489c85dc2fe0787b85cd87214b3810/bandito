<script lang="ts" context="module">
  import { cl, createNamespace } from './utils';

  export type AvatarProps = {
    /**
     * @default 48
     */
    size?: 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96 | number;
    gradientColor?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    initials?: string;
    class?: string;
    style?: string;
  };

  const [ns, bem] = createNamespace('avatar');
</script>

<script lang="ts">
  let { size = 48, class: className, initials, style }: AvatarProps = $props();
</script>

<span class={cl(ns, className)} style="width: {size}px; height: {size}px;{style}">{initials}</span>
