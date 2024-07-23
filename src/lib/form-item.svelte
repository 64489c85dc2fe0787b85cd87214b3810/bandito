<script lang="ts" context="module">
  export type FormItemStatus = 'default' | 'error' | 'valid';

  export type FormItemProps = {
    children: Snippet;
    top?: Snippet | string;
    bottom?: Snippet | string;
    status?: FormItemStatus;
    required?: boolean;
    topMultiline?: boolean;
    removable?: boolean | 'indent';
  };

  export type FormItemContext = {
    readonly required: boolean;
    readonly topMultiline: boolean;
  };

  export const CONTEXT_KEY = 'form-item';

  const [ns, bem] = createNamespace('form-item');
</script>

<script lang="ts">
  import { createNamespace } from './utils';
  import FormItemTop from './form-item-top.svelte';
  import FormItemTopAside from './form-item-top-aside.svelte';
  import FormItemTopLabel from './form-item-top-label.svelte';
  import { setContext, type Snippet } from 'svelte';

  let { children, top, bottom, required = false, topMultiline = false }: FormItemProps = $props();

  setContext(CONTEXT_KEY, {
    get required() {
      return required;
    },
    get topMultiline() {
      return topMultiline;
    },
  });
</script>

<div class={ns}>
  <FormItemTop>
    <FormItemTopLabel>lol</FormItemTopLabel>
    <FormItemTopAside>kek</FormItemTopAside>
  </FormItemTop>
  {@render children()}
</div>
