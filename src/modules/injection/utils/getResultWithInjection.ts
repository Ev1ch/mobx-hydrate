import type { Stores } from '@/domain';

import type { ServerPropsGetterResult } from '@/modules/server-props/domain';
import type { SerializedStores } from '@/modules/serialization/domain';

import { HYDRATION_KEY } from '../constants';
import createResultWithInjectionGetter from './createResultWithInjectionGetter';

export type GetResultWithInjection = <TStores extends Stores>(
  result: ServerPropsGetterResult,
  stores: SerializedStores<TStores>,
) => ServerPropsGetterResult;

const getResultWithInjection: GetResultWithInjection =
  createResultWithInjectionGetter(HYDRATION_KEY);

export default getResultWithInjection;
