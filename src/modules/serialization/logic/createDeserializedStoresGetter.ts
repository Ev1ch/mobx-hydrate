import type { Stores } from '@/domain';

import type {
  Deserialize,
  DeserializedStores,
  GetDeserializedStores,
  SerializedStores,
} from '../domain';

export type CreateDeserializedStoresGetter = (deserialize: Deserialize) => GetDeserializedStores;

const createDeserializedStoresGetter: CreateDeserializedStoresGetter =
  (deserialize) =>
  <TStores extends Stores>(stores: TStores, serializedStores: SerializedStores<TStores>) =>
    Object.entries(serializedStores).reduce((accumulator, [key, store]) => {
      accumulator[key as keyof SerializedStores<TStores>] = deserialize(
        stores[store.class as keyof TStores],
        store.data,
      );
      return accumulator;
    }, {} as DeserializedStores<TStores, SerializedStores<TStores>>);

export default createDeserializedStoresGetter;
