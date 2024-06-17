<svelte:options customElement="mf-spinner" />

<script lang="ts" context="module">
  import type { SVGAttributes } from 'svelte/elements';
  import type { DefaultProps } from './types';

  export type SpinnerSize = 's' | 'm' | 'l' | 'xl';

  export type SpinnerProps = DefaultProps<SVGElement> & {
    size?: SpinnerSize;
  };

  const setWidth: Record<SpinnerSize, number> = {
    s: 16,
    m: 24,
    l: 32,
    xl: 44,
  };

  const setD: Record<SpinnerSize, string> = {
    s: 'M8 3.25a4.75 4.75 0 0 0-4.149 7.065.75.75 0 1 1-1.31.732A6.25 6.25 0 1 1 8 14.25a.75.75 0 0 1 .001-1.5 4.75 4.75 0 1 0 0-9.5Z',
    m: 'M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123z',
    l: 'M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 15.97 15.97 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Z',
    xl: 'M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A21.964 21.964 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22Z',
  };
</script>

<script lang="ts">
  let {
    size = 'm',
    element = $bindable(),
    ...restProps
  }: SVGAttributes<SVGSVGElement> & SpinnerProps = $props();

  let width = $derived(setWidth[size] ?? 16);
  let center = $derived(width / 2);
  let d = $derived(setD[size] ?? '');
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {width}
  height={width}
  fill="currentColor"
  viewBox="0 0 {width} {width}"
  bind:this={element}
  {...restProps}
>
  <path fill-rule="evenodd" clip-rule="evenodd" {d}>
    <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      from="0 {center} {center}"
      to="360 {center} {center}"
      dur="0.7s"
      repeatCount="indefinite"
    />
  </path>
</svg>
