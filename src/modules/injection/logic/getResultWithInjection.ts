import type { GetResultWithInjection } from '../domain';
import { HYDRATION_KEY } from '../constants';
import createResultWithInjectionGetter from './createResultWithInjectionGetter';

const getResultWithInjection: GetResultWithInjection =
  createResultWithInjectionGetter(HYDRATION_KEY);

export default getResultWithInjection;
