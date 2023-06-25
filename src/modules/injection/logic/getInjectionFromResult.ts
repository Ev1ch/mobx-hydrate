import type { GetInjectionFromResult } from '../domain';
import { HYDRATION_KEY } from '../constants';
import createInjectionFromResultGetter from './createInjectionFromResultGetter';

const getInjectionFromResult: GetInjectionFromResult =
  createInjectionFromResultGetter(HYDRATION_KEY);

export default getInjectionFromResult;
