import type { Constructor } from '@/utils';

export type Store = Constructor;

export type Stores = Record<string, Store>;

export type ConstructedStore<TStore extends Store> = InstanceType<TStore>;

export type ConstructedStores<TStores extends Stores> = {
  [key in keyof TStores]: InstanceType<TStores[key]>;
};
