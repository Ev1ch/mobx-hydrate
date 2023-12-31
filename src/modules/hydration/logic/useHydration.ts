import { useRef, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import type { ConstructedStores } from '@/domain';
import { type DeserializedStores } from '@/modules/serialization';

import type { HydratableStores } from '../domain';

const useHydration = <TStores extends HydratableStores>(
  stores: ConstructedStores<TStores>,
  deserializedStores: DeserializedStores<TStores> | null,
) => {
  const { events } = useRouter();
  /**
   * The initial value is `true` to make
   * server-side page match the hydrated one
   * on the client.
   */
  const shouldHydrate = useRef(true);

  useEffect(() => {
    const handleStart = () => {
      shouldHydrate.current = true;
    };

    events.on('routeChangeStart', handleStart);

    return () => {
      events.off('routeChangeStart', handleStart);
    };
  }, [events]);

  /**
   * `useMemo` is used here to prevent unnecessary re-render.
   * With `useEffect` React will firstly render components with
   * initial state and than re-render them with hydrated state.
   * With `useMemo` we can prevent this behavior.
   */
  useMemo(() => {
    if (shouldHydrate.current && deserializedStores) {
      Object.entries(stores).forEach(([key, store]) => {
        store.hydrate?.(deserializedStores[key]);
      });
      shouldHydrate.current = false;
    }
  }, [stores, deserializedStores]);
};

export default useHydration;
