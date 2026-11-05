declare module 'mmenu-js' {
  export default class Mmenu {
    constructor(
      menu: HTMLElement | string,
      options?: Record<string, unknown>,
      configs?: Record<string, unknown>,
    );

    open(): void;

    close(): void;
  }
}
