import type { Constructor } from '@/utils';

export type Stores = Record<string, Constructor>;

export type ConstructedStores<TStores extends Stores> = {
  [key in keyof TStores]: InstanceType<TStores[key]>;
};
