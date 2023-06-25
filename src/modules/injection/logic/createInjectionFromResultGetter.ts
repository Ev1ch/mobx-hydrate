import type { AppProps } from 'next/app';

import type { GetInjectionFromResult } from '../domain';

export type CreateInjectionFromResultGetter = (key: string) => GetInjectionFromResult;

const createInjectionFromResultGetter: CreateInjectionFromResultGetter =
  (key: string) =>
  <TInjection>(result: AppProps) => {
    if (!Object.keys(result.pageProps).includes(key)) {
      return null;
    }

    return result.pageProps[key as keyof typeof result] as TInjection;
  };

export default createInjectionFromResultGetter;
