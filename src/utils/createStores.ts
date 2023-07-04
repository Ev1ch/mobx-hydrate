import type { ConstructedStores, Stores } from '@/domain';

const createStores = <TStores extends Stores>(stores: TStores) =>
  Object.entries(stores).reduce((accumulator, [key, Store]) => {
    accumulator[key as keyof TStores] = new Store();
    return accumulator;
  }, {} as ConstructedStores<TStores>);

export default createStores;
