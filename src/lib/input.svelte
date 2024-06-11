<svelte:options customElement="mf-input" />

<script lang="ts" context="module">
  export type InputVariant = 'flat' | 'bordered' | 'faded' | 'underlined';

  export type InputProps = {};
</script>

<script lang="ts">
  let {}: InputProps = $props();
</script>

<input type="text" />
