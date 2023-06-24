import { useMemo } from 'react';
import { enableStaticRendering } from 'mobx-react';

import type { SerializedStores } from '@/modules/serialization/domain';
import { createStores, getIsServer } from '@/utils';
import { getInjectionFromResult } from '@/modules/injection/utils';
import { getDeserializedStores } from '@/modules/serialization/utils';

import type { HydratableStores, UseHydratedStores } from '../domain';
import { useHydration } from '../hooks';

enableStaticRendering(getIsServer());

export type CreateUseHydratedStoresHook = <TStores extends HydratableStores>(
  stores: TStores,
) => UseHydratedStores<TStores>;

const createUseHydratedStoresHook: CreateUseHydratedStoresHook =
  <TStores extends HydratableStores>(stores: TStores) =>
  (props) => {
    const rootStores = useMemo(() => createStores(stores), [stores]);
    const injection = getInjectionFromResult<SerializedStores<TStores>>(props);
    const deserializedStores = injection ? getDeserializedStores(stores, injection) : null;

    useHydration(rootStores, deserializedStores);

    return rootStores;
  };

export default createUseHydratedStoresHook;
