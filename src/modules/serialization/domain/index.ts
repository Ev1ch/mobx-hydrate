import type { ConstructedStore, ConstructedStores, Store, Stores } from '@/domain';

/**
 * Type is unknown because it is not possible
 * to know what the custom serialized store will look like.
 */
export type SerializedStore = unknown;

export type SerializedStores<TStores extends Stores> = {
  [key in keyof TStores]: SerializedStore;
};

export type DeserializedStore<TStore extends Store> = InstanceType<TStore>;

export type DeserializedStores<TStores extends Stores> = {
  [key in keyof TStores]: DeserializedStore<TStores[key]>;
};

export type Serialize = <TStore extends Store, TSerializedStore>(
  store: ConstructedStore<TStore>,
) => TSerializedStore;

export type Deserialize = <TStore extends Store, TSerializedStore>(
  store: TStore,
  serializedStore: TSerializedStore,
) => DeserializedStore<TStore>;

export type GetDeserializedStores = <TStores extends Stores>(
  stores: TStores,
  serializedStores: SerializedStores<TStores>,
) => DeserializedStores<TStores>;

export type GetSerializedStores = <TStores extends Stores>(
  stores: ConstructedStores<TStores>,
) => SerializedStores<TStores>;

export interface SerializationOptions {
  serialize: Serialize;
  deserialize: Deserialize;
}

export type CreateSerializedStoresGetter = (serialize: Serialize) => GetSerializedStores;

export type CreateDeserializedStoresGetter = (deserialize: Deserialize) => GetDeserializedStores;
