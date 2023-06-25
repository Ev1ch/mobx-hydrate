import type { ObjectWithProps } from '@/utils';

import type { GetResultWithInjection } from '../domain';

export type CreateResultWithInjectionGetter = (key: string) => GetResultWithInjection;

const createResultWithInjectionGetter: CreateResultWithInjectionGetter =
  (key) => (result, stores) => ({
    ...result,
    props: {
      ...(Object.keys(result).includes('props') ? (result as ObjectWithProps).props : {}),
      [key]: stores,
    },
  });

export default createResultWithInjectionGetter;
