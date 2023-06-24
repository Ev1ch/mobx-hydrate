import type { AppProps } from 'next/app';

import { HYDRATION_KEY } from '../constants';
import createInjectionFromResultGetter from './createInjectionFromResultGetter';

export type GetInjectionFromResult = <TInjection>(
  result: AppProps,
) => TInjection | null;

const getInjectionFromResult: GetInjectionFromResult =
  createInjectionFromResultGetter(HYDRATION_KEY);

export default getInjectionFromResult;
