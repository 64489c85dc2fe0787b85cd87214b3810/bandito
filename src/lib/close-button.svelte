<script lang="ts" context="module">
  import { createNamespace } from './utils';
  import type { DefaultProps } from './types';

  export type CloseButtonProps = DefaultProps;

  const [, bem] = createNamespace('close-button');
</script>

<button></button>
