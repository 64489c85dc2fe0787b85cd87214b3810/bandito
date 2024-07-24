<script lang="ts" context="module">
  export type InputVariant = 'flat' | 'bordered' | 'faded' | 'underlined';

  export type InputProps = FormFieldProps & {};

  const [ns, bem] = createNamespace('input');
</script>

<script lang="ts">
  import { createNamespace } from '../utils';
  import { tcl } from '../form-field/unstyled-text-field';
  import FormField, { type FormFieldProps } from '../form-field/form-field.svelte';
  import Text from '../typography/text.svelte';

  let { class: className, ...restProps }: InputProps = $props();
</script>

<FormField class={bem()}>
  <Text tag="input" normalize={false} class={tcl({}, bem('el'), className)} {...restProps} />
</FormField>
