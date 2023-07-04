import type { Stores } from '@/domain';

import type {
  CreateDeserializedStoresGetter,
  DeserializedStores,
  SerializedStores,
} from '../domain';

const createDeserializedStoresGetter: CreateDeserializedStoresGetter =
  (deserialize) =>
  /**
   * Use explicit type definitions for casting purposes.
   */
  <TStores extends Stores>(stores: TStores, serializedStores: SerializedStores<TStores>) =>
    Object.entries(serializedStores).reduce((accumulator, [key, serializedStore]) => {
      accumulator[key as keyof SerializedStores<TStores>] = deserialize(
        stores[key as keyof SerializedStores<TStores>],
        serializedStore,
      );
      return accumulator;
    }, {} as DeserializedStores<TStores>);

export default createDeserializedStoresGetter;
