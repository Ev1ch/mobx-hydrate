import type { Stores } from '@/domain';

import type { Serialize, SerializedStores, GetSerializedStores } from '../domain';

export type CreateSerializedStoresGetter = (serialize: Serialize) => GetSerializedStores;

const createSerializedStoresGetter: CreateSerializedStoresGetter =
  (serialize) =>
  <TStores extends Stores>(stores: TStores) =>
    Object.entries(stores).reduce((accumulator, [key, store]) => {
      accumulator[key as keyof TStores] = serialize(store);
      return accumulator;
    }, {} as SerializedStores<TStores>);

export default createSerializedStoresGetter;
