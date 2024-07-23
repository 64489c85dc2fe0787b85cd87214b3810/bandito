<script>
  import { FormItem, FormItemTop, FormItemTopAside, FormItemTopLabel, Input } from '$lib';

  let required = $state(false);

  const toggle = () => {
    required = !required;
  };
</script>

<div class="container">
  <button onclick={toggle}>toggle (current: {required})</button>
  <FormItem {required} bottom="lol">
    {#snippet top()}
      <FormItemTop>
        <FormItemTopLabel>lol</FormItemTopLabel>
        <FormItemTopAside>0/100</FormItemTopAside>
      </FormItemTop>
    {/snippet}
    <Input />
  </FormItem>
</div>

<style>
  .container {
    max-width: 393px;
    padding: 59px 16px 34px 16px;
    width: 100%;
    margin: 0 auto;
  }
</style>
