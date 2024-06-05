<svelte:options customElement="mf-button" />

<script lang="ts" context="module">
  import { createNamespace } from '$lib/utils';
  const [_, bem] = createNamespace('button');

  export function variationName(name: string, value: string) {
    return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  }
</script>

<script lang="ts">
  import './Button.scss';
  import { Text } from '../text';
  import type { ButtonProps } from './types';

  let {
    id,
    children,
    url,
    disabled,
    external,
    download,
    target,
    submit,
    loading,
    pressed,
    accessibilityLabel,
    role,
    ariaControls,
    ariaExpanded,
    ariaDescribedBy,
    ariaChecked,
    //   onClick,
    //   onFocus,
    //   onBlur,
    //   onKeyDown,
    //   onKeyPress,
    //   onKeyUp,
    //   onMouseEnter,
    //   onTouchStart,
    //   onPointerDown,
    icon,
    disclosure,
    //   removeUnderline,
    size = 'medium',
    textAlign = 'center',
    fullWidth,
    dataPrimaryLink,
    tone,
    variant = 'secondary',
    ...rest
  }: ButtonProps = $props();

  let component = $derived(url ? 'a' : 'button');
</script>

{#snippet childMarkup()}
  {#if children}
    <Text as="span">{@render children()}</Text>
  {/if}
{/snippet}

<svelte:element this={component} class={bem([{ [variationName('variant', variant)]: variant }])}
  >{@render childMarkup()}</svelte:element
>
