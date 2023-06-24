import type { AppProps } from 'next/app';

import type { ConstructedStores, Stores } from '@/domain';
import type { Constructor } from '@/utils';

export type HydratableStores = Record<
  keyof Stores,
  /**
   * `Partial` can not be used here,
   * because passed stores must have something
   * in 'common' with this type and we don't
   * want user to cast their stores directly
   *
   * @see {@link https://bobbyhadz.com/blog/typescript-type-has-no-properties-in-common-with-type#use-a-type-assertion-to-solve-the-error Article on blog}
   */
  Constructor<InstanceType<Constructor> | Hydratable<InstanceType<Constructor>>>
>;

export interface Hydratable<TClass extends InstanceType<Constructor>> {
  hydrate: (data: TClass) => void;
}

export type UseHydratedStores<TStores extends Stores> = (
  props: AppProps,
) => ConstructedStores<TStores>;
