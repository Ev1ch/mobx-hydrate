import type { ConstructedStores, Stores } from '@/domain';

export type CreateStores = <TStores extends Stores>(stores: TStores) => ConstructedStores<TStores>;

const createStores: CreateStores = <TStores extends Stores>(stores: TStores) => {
  return Object.entries(stores).reduce((accumulator, [key, Store]) => {
    accumulator[key as keyof TStores] = new Store();
    return accumulator;
  }, {} as ConstructedStores<TStores>);
};

export default createStores;
