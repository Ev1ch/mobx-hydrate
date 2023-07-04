import type { ConstructedStores, Stores } from '@/domain';

import type { Serialize, SerializedStores, GetSerializedStores } from '../domain';

export type CreateSerializedStoresGetter = (serialize: Serialize) => GetSerializedStores;

const createSerializedStoresGetter: CreateSerializedStoresGetter =
  (serialize) =>
  <TStores extends Stores>(stores: ConstructedStores<TStores>) =>
    Object.entries(stores).reduce((accumulator, [key, store]) => {
      accumulator[key as keyof ConstructedStores<TStores>] = serialize(store);
      return accumulator;
    }, {} as SerializedStores<TStores>);

export default createSerializedStoresGetter;
