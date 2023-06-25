import { serialize } from 'serializr';

import type { ConstructedStores, Stores } from '@/domain';

import type { SerializedStores } from '../domain';

export type GetSerializedStores = <TStores extends Stores>(
  stores: ConstructedStores<TStores>,
) => SerializedStores<TStores>;

const getSerializedStores: GetSerializedStores = <TStores extends Stores>(
  stores: ConstructedStores<TStores>,
) =>
  Object.entries(stores).reduce((accumulator, [key, store]) => {
    accumulator[key as keyof TStores] = {
      class: key,
      data: serialize(store),
    };
    return accumulator;
  }, {} as SerializedStores<TStores>);

export default getSerializedStores;
