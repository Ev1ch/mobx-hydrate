import type { HydratableStores, UseHydratedStores } from '@/modules/hydration/domain';
import type { StoredServerPropsGetter } from '@/modules/server-props/domain';
import { createStoredServerPropsGetter } from '@/modules/server-props/utils';
import { createUseHydratedStoresHook } from '@/modules/hydration/utils';

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

export type { Hydratable } from '@/modules/hydration/domain';
export default createWithStores;
