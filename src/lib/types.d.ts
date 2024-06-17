export type DefaultProps<T = HTMLElement> = {
  class?: string;
  element?: T;

  // @mftd03/alpha
  'data-schema'?: 'light' | 'dark';
  'data-accent'?:
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'mint'
    | 'teal'
    | 'cyan'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
    | 'brown';
  'data-font-size'?: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
};
