import { useMemo } from 'react';
import { enableStaticRendering } from 'mobx-react';

import { createDeserializedStoresGetter, type SerializedStores } from '@/modules/serialization';
import { createStores, getIsServer } from '@/utils';
import { createInjectionFromResultGetter } from '@/modules/injection';

import type { HydratableStores, UseHydratedStores } from '../domain';
import useHydration from './useHydration';
import { ProvidedOptions } from '@/domain';

enableStaticRendering(getIsServer());

export type CreateUseHydratedStoresHook = <TStores extends HydratableStores>(
  stores: TStores,
  options: ProvidedOptions,
) => UseHydratedStores<TStores>;

const createUseHydratedStoresHook: CreateUseHydratedStoresHook = <TStores extends HydratableStores>(
  stores: TStores,
  options: ProvidedOptions,
) => {
  const getInjectionFromResult = createInjectionFromResultGetter(options.injection.key);
  const getDeserializedStores = createDeserializedStoresGetter(options.serialization.deserialize);

  return (props) => {
    const rootStores = useMemo(() => createStores(stores), []);
    const injection = getInjectionFromResult<SerializedStores<TStores>>(props);
    const deserializedStores = injection ? getDeserializedStores(stores, injection) : null;

    useHydration(rootStores, deserializedStores);

    return rootStores;
  };
};

export default createUseHydratedStoresHook;
