import { DEFAULT_INJECTION_OPTIONS } from '@/modules/injection/constants';
import { DEFAULT_SERIALIZATION_OPTIONS } from '@/modules/serialization/constants';

import type { ProvidedOptions } from './domain';

export const DEFAULT_OPTIONS: ProvidedOptions = {
  injection: DEFAULT_INJECTION_OPTIONS,
  serialization: DEFAULT_SERIALIZATION_OPTIONS,
};
