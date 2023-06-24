import type { AppProps } from 'next/app';

import type { ConstructedStores, Stores } from '@/domain';
import type { Constructor } from '@/utils';

export type HydratableStores = Record<
  keyof Stores,
  Constructor<Hydratable<InstanceType<Constructor>>>
>;

export interface Hydratable<TClass extends InstanceType<Constructor>> {
  hydrate: (data: TClass) => void;
}

export type UseHydratedStores<TStores extends Stores> = (
  props: AppProps,
) => ConstructedStores<TStores>;
