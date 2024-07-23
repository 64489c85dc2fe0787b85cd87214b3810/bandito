<script>
  import { FormItem } from '$lib';

  let required = $state(false);

  const toggle = () => {
    required = !required;
  };
</script>

<div class="container">
  <button onclick={toggle}>toggle (current: {required})</button>
  <FormItem {required} topMultiline>lol</FormItem>
</div>

<style>
  .container {
    max-width: 393px;
    padding: 59px 16px 34px 16px;
    width: 100%;
    margin: 0 auto;
  }
</style>
