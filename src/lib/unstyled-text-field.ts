import { cl, createNamespace } from './utils';

export type UnstyledTextFieldProps = {
  tag?: 'input' | 'textarea';
  noPadding?: boolean;
};

const [, bem] = createNamespace('unstyled-text-field');

export const tcl = (
  { noPadding }: UnstyledTextFieldProps = {},
  componentBemString?: string,
  className?: string
) => cl(bem({ noPadding }), componentBemString, className);
