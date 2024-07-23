<script lang="ts" context="module">
  export type FormItemTopProps = {
    children: Snippet;
  };
</script>

<script lang="ts">
  import { getContext, type Snippet } from 'svelte';
  import { CONTEXT_KEY, type FormItemContext } from './form-item.svelte';

  let { children }: FormItemTopProps = $props();

  let ctx = getContext<FormItemContext>(CONTEXT_KEY);
</script>

{JSON.stringify(ctx)}: lol
{@render children()}
