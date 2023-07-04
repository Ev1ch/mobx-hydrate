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
    Object.entries(serializedStores).reduce((accumulator, [key, serializedStore]) => {
      accumulator[key as keyof SerializedStores<TStores>] = deserialize(
        stores[key as keyof SerializedStores<TStores>],
        serializedStore,
      );
      return accumulator;
    }, {} as DeserializedStores<TStores>);

export default createDeserializedStoresGetter;
