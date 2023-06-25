export type Fn = (...args: any[]) => any;

export type Constructor<TInstance = any> = new (...args: any[]) => TInstance;

export type WithAwaited<T> = T | Awaited<T>;

export type FunctionWithAwaited<T extends Fn> = (
  ...args: Parameters<T>
) => WithAwaited<ReturnType<T>>;

export type ObjectWithStringKeys = Record<string, unknown>;

export type ObjectWithProps<TProps = ObjectWithStringKeys> = {
  props: TProps;
};

export { type CreateStores, default as createStores } from './createStores';
export { type GetIsClient, default as getIsClient } from './getIsClient';
export { type GetIsServer, default as getIsServer } from './getIsServer';
export { default as MultipleError } from './MultipleError';
export { type ThrowMultipleOrOne, default as throwMultipleOrOne } from './throwMultipleOrOne';
