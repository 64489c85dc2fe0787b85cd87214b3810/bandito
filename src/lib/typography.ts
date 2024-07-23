import type { Snippet } from 'svelte';
import type { DefaultProps } from './types';
import { cl, createNamespace } from './utils';

type Typography = {
  /**
   * Задаёт начертание шрифта, отличное от стандартного.
   */
  weight?: '1' | '2' | '3';
  /**
   * Убирает внешние отступы
   */
  normalize?: boolean;
  /**
   * Делает блок инлайновым
   */
  inline?: boolean;
};

export type TypographyProps = DefaultProps &
  Typography & {
    children: Snippet;
  };

const [, bem] = createNamespace('typography');

export const tcl = (
  { weight, normalize, inline }: Typography = {},
  componentBemString?: string,
  className?: string
) => cl(bem({ weight, normalize, inline }), componentBemString, className);
