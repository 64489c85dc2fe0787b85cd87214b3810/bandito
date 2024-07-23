<script lang="ts" context="module">
  export type FormItemTopAsideProps = SubheadProps & {};
</script>

<script lang="ts">
  import { cl } from './utils';
  import Subhead, { type SubheadProps } from './subhead.svelte';
  import { formItemBem } from './form-item.svelte';

  let { class: className, ...restProps }: FormItemTopAsideProps = $props();
</script>

<Subhead class={cl(formItemBem('top-aside'), className)} {...restProps} />
