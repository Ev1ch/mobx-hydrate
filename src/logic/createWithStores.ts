import type { CreateWithStores } from '@/domain';
import { StoresSchema, OptionsSchema, validate } from '@/schemas';
import { throwMultipleOrOne } from '@/utils';
import { DEFAULT_OPTIONS } from '@/constants';
import { createUseHydratedStoresHook } from '@/modules/hydration';
import { createStoredServerPropsGetter } from '@/modules/server-props';

import createProvidedOptionsGetter from './createProvidedOptionsGetter';

const createWithStores: CreateWithStores = (stores, options) => {
  const getProvidedOptions = createProvidedOptionsGetter(DEFAULT_OPTIONS);
  const { errors: storesErrors } = validate(StoresSchema, stores);

  if (storesErrors) {
    throwMultipleOrOne(storesErrors);
  }

  const { errors: optionsErrors } = validate(OptionsSchema, options);

  if (optionsErrors) {
    throwMultipleOrOne(optionsErrors);
  }

  const providedOptions = getProvidedOptions(options);

  return {
    withStores: createStoredServerPropsGetter(stores, providedOptions),
    useHydratedStores: createUseHydratedStoresHook(stores, providedOptions),
  };
};

export default createWithStores;
