/**
 * A utility type for choosing between synchronous and asynchronous return
 * values.
 */
export type PromiseOr<T, sync extends 'sync' | 'async'> = sync extends 'sync'
  ? T
  : T | Promise<T>;
