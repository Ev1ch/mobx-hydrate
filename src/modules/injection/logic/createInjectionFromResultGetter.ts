import type { AppProps } from 'next/app';

import type { CreateInjectionFromResultGetter } from '../domain';

const createInjectionFromResultGetter: CreateInjectionFromResultGetter =
  (key: string) =>
  /**
   * Use explicit type definitions for casting purposes.
   */
  <TInjection>(result: AppProps) => {
    if (!Object.keys(result.pageProps).includes(key)) {
      return null;
    }

    return result.pageProps[key as keyof typeof result] as TInjection;
  };

export default createInjectionFromResultGetter;
