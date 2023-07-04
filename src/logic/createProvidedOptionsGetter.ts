import { merge } from 'lodash/fp';

import type { Options, ProvidedOptions } from '../domain';

type CreateProvidedOptionsGetter = (
  providedOptions: ProvidedOptions,
) => (options: Options) => ProvidedOptions;

const createProvidedOptionsGetter: CreateProvidedOptionsGetter = (providedOptions) => (options) =>
  merge(providedOptions, options);

export default createProvidedOptionsGetter;
