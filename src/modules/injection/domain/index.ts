import type { AppProps } from 'next/app';

import type { Stores } from '@/domain';
import type { SerializedStores } from '@/modules/serialization/domain';
import type { ServerPropsGetterResult } from '@/modules/server-props/domain';

export type GetResultWithInjection = <TStores extends Stores>(
  result: ServerPropsGetterResult,
  stores: SerializedStores<TStores>,
) => ServerPropsGetterResult;

export type GetInjectionFromResult = <TInjection>(result: AppProps) => TInjection | null;
