<script lang="ts" context="module">
  import type { Snippet } from 'svelte';

  export type FormItemTopAsideProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  let { children }: FormItemTopAsideProps = $props();
</script>

{@render children()}
