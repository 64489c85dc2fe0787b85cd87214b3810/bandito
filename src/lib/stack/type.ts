import type { Snippet } from 'svelte';

export type StackProps = {
  children: Snippet;
  /** @default "div" */
  as?: keyof HTMLElementTagNameMap;
  class?: string;
};
