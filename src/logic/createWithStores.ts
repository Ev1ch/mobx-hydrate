import type { HydratableStores, UseHydratedStores } from '@/modules/hydration';
import type { StoredServerPropsGetter } from '@/modules/server-props';
import { createStoredServerPropsGetter } from '@/modules/server-props/logic';
import { createUseHydratedStoresHook } from '@/modules/hydration/logic';

export interface Options<TStores extends HydratableStores> {
  stores: TStores;
}

export type CreateWithStores = <TStores extends HydratableStores>(
  options: Options<TStores>,
) => {
  withStores: StoredServerPropsGetter<TStores>;
  useHydratedStores: UseHydratedStores<TStores>;
};

const createWithStores: CreateWithStores = (options) => ({
  withStores: createStoredServerPropsGetter(options.stores),
  useHydratedStores: createUseHydratedStoresHook(options.stores),
});

export default createWithStores;
