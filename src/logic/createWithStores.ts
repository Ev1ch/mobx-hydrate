import type { HydratableStores, UseHydratedStores } from '@/modules/hydration';
import type { StoredServerPropsGetter } from '@/modules/server-props';
import { throwMultipleOrOne } from '@/utils';
import { validate, OptionsSchema } from '@/schemas';
import { createStoredServerPropsGetter } from '@/modules/server-props';
import { createUseHydratedStoresHook } from '@/modules/hydration';

export interface Options<TStores extends HydratableStores> {
  stores: TStores;
}

export type CreateWithStores = <TStores extends HydratableStores>(
  options: Options<TStores>,
) => {
  withStores: StoredServerPropsGetter<TStores>;
  useHydratedStores: UseHydratedStores<TStores>;
};

const createWithStores: CreateWithStores = (options) => {
  const { errors } = validate(OptionsSchema, options);

  if (errors) {
    throwMultipleOrOne(errors);
  }

  return {
    withStores: createStoredServerPropsGetter(options.stores),
    useHydratedStores: createUseHydratedStoresHook(options.stores),
  };
};

export default createWithStores;
