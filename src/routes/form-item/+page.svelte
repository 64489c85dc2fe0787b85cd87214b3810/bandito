<script>
  import { FormItem } from '$lib';

  let required = $state(false);

  const toggle = () => {
    required = !required;
  };
</script>

<button onclick={toggle}>toggle (current: {required})</button>

<FormItem {required}>lol</FormItem>
