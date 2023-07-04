import type { InjectionOptions } from './domain';

export const HYDRATION_KEY: string = '__MOBX_HYDRATED_STORES__';

export const DEFAULT_INJECTION_OPTIONS: InjectionOptions = {
  key: HYDRATION_KEY,
};
