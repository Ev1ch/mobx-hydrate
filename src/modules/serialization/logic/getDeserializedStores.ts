import { deserialize } from 'serializr';

import type { Stores } from '@/domain';

import type { DeserializedStores, SerializedStores } from '../domain';

export type GetDeserializedStores = <TStores extends Stores>(
  stores: TStores,
  constructedStores: SerializedStores<TStores>,
) => DeserializedStores<TStores, SerializedStores<TStores>>;

const getDeserializedStores: GetDeserializedStores = <TStores extends Stores>(
  stores: TStores,
  constructedStores: SerializedStores<TStores>,
) =>
  Object.entries(constructedStores).reduce((accumulator, [key, store]) => {
    accumulator[key as keyof SerializedStores<TStores>] = deserialize<
      DeserializedStores<TStores, SerializedStores<TStores>>[typeof key]
    >(stores[store.class]!, store.data);
    return accumulator;
  }, {} as DeserializedStores<TStores, SerializedStores<TStores>>);

export default getDeserializedStores;
