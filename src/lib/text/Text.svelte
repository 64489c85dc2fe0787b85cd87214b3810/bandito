<script lang="ts" context="module">
	import { createNamespace } from '$lib/utils';
	const [_, bem] = createNamespace('text');
</script>

<script lang="ts">
	import './Text.scss';
	import type { TextProps } from './types';

	let {
		alignment,
		as,
		breakWord,
		children,
		tone,
		fontWeight,
		id,
		numeric = false,
		truncate = false,
		variant,
		visuallyHidden = false,
		textDecorationLine
	}: TextProps = $props();

	let component = $derived(as || (visuallyHidden ? 'span' : 'p'));
</script>

<svelte:element
	this={component}
	{id}
	class={bem([
		alignment,
		tone,
		fontWeight,
		variant,
		{ 'line-through': textDecorationLine, break: breakWord, numeric, truncate }
	])}>{@render children()}</svelte:element
>
