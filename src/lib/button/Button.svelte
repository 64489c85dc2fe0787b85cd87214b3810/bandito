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

<!-- 
  const className = classNames(
    styles.Button,
    styles.pressable,
    styles[variationName('variant', variant)],
    styles[variationName('size', size)],
    styles[variationName('textAlign', textAlign)],
    fullWidth && styles.fullWidth,
    disclosure && styles.disclosure,
    icon && children && styles.iconWithText,
    icon && children == null && styles.iconOnly,
    isDisabled && styles.disabled,
    loading && styles.loading,
    pressed && !disabled && !url && styles.pressed,
    removeUnderline && styles.removeUnderline,
    tone && styles[variationName('tone', tone)],
  ); 
-->

{#snippet childMarkup()}
	{#if children}
		<Text as="span">{@render children()}</Text>
	{/if}
{/snippet}

<svelte:element this={component} class={bem([{ [variationName('variant', variant)]: variant }])}
	>{@render childMarkup()}</svelte:element
>
