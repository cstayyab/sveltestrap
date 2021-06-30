import { SvelteComponentTyped } from 'svelte';

export interface ImageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['img']> {
  fluid?: boolean;
  thumbnail?: boolean;
}

export default class Image extends SvelteComponentTyped<
  ImageProps,
  {},
  {}
> {}
