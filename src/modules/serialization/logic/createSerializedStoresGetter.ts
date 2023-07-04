import type { ConstructedStores, Stores } from '@/domain';

import type { SerializedStores, CreateSerializedStoresGetter } from '../domain';

const createSerializedStoresGetter: CreateSerializedStoresGetter =
  (serialize) =>
  /**
   * Use explicit type definitions for casting purposes.
   */
  <TStores extends Stores>(stores: ConstructedStores<TStores>) =>
    Object.entries(stores).reduce((accumulator, [key, store]) => {
      accumulator[key as keyof ConstructedStores<TStores>] = serialize(store);
      return accumulator;
    }, {} as SerializedStores<TStores>);

export default createSerializedStoresGetter;
