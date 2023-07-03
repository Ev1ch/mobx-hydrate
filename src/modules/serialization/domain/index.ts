import type { ConstructedStore, ConstructedStores, Store, Stores } from '@/domain';

/**
 * Allow `string | symbol | number`
 * as a generic type parameter
 * to prevent errors when using `keyof`
 */
export type SerializedStore<TClass extends string | symbol | number> = {
  class: TClass;
  data: string;
};

export type SerializedStores<TStores extends Stores> = {
  [key in keyof TStores]: SerializedStore<key>;
};

export type DeserializedStore<TStore extends Store> = InstanceType<TStore>;

export type DeserializedStores<
  TStores extends Stores,
  TSerializedStores extends SerializedStores<Stores>,
> = {
  [key in keyof TSerializedStores]: DeserializedStore<TStores[TSerializedStores[key]['class']]>;
};

export type Serialize = <TStore extends Store>(
  store: ConstructedStore<TStore>,
) => SerializedStore<string>;

export type Deserialize = <TStore extends Store>(
  store: TStore,
  serializedStoreData: SerializedStore<string>['data'],
) => DeserializedStore<TStore>;

export type GetDeserializedStores = <TStores extends Stores>(
  stores: TStores,
  serializedStores: SerializedStores<TStores>,
) => DeserializedStores<TStores, SerializedStores<TStores>>;

export type GetSerializedStores = <TStores extends Stores>(
  stores: ConstructedStores<TStores>,
) => SerializedStores<TStores>;
