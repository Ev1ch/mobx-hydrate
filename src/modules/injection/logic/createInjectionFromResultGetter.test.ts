import type { AppProps } from 'next/app';

import createInjectionFromResultGetter from './createInjectionFromResultGetter';

const KEY = 'key';

describe('createInjectionFromResultGetter', () => {
  it('should return null when there is no injection', () => {
    const getInjectionFromResult = createInjectionFromResultGetter(KEY);
    const resultWithoutInjection = {
      pageProps: {},
    } as AppProps;

    expect(getInjectionFromResult(resultWithoutInjection)).toBeNull();
  });

  it('should return the inject when it is present', () => {
    const getInjectionFromResult = createInjectionFromResultGetter(KEY);
    const injection = {};
    const resultWithInjection = {
      pageProps: {
        [KEY]: injection,
      },
    } as AppProps;

    expect(getInjectionFromResult(resultWithInjection)).toBe(injection);
  });
});
