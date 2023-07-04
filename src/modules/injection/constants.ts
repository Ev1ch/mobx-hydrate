import type { InjectionOptions, Key } from './domain';

export const HYDRATION_KEY: Key = '__MOBX_HYDRATED_STORES__';

export const DEFAULT_INJECTION_OPTIONS: InjectionOptions = {
  key: HYDRATION_KEY,
};
