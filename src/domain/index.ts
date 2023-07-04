import type { Constructor } from '@/utils';
import type { SerializationOptions } from '@/modules/serialization';
import type { InjectionOptions } from '@/modules/injection';
import type { StoredServerPropsGetter } from '@/modules/server-props';
import type { HydratableStores, UseHydratedStores } from '@/modules/hydration';

export type Store = Constructor;

export type Stores = Record<string, Store>;

export type ConstructedStore<TStore extends Store> = InstanceType<TStore>;

export type ConstructedStores<TStores extends Stores> = {
  [key in keyof TStores]: InstanceType<TStores[key]>;
};

export interface Options {
  serialization?: Partial<SerializationOptions>;
  injection?: Partial<InjectionOptions>;
}

export type ProvidedOptions = {
  [key in keyof Options]-?: Required<Options[key]>;
};

export type CreateWithStores = <TStores extends HydratableStores>(
  stores: TStores,
  options: Options,
) => {
  withStores: StoredServerPropsGetter<TStores>;
  useHydratedStores: UseHydratedStores<TStores>;
};
