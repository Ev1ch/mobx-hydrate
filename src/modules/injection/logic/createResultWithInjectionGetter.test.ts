import type { ServerPropsGetterResult } from '@/modules/server-props';

import createResultWithInjectionGetter from './createResultWithInjectionGetter';

const KEY = 'key';

describe('createResultWithInjectionGetter', () => {
  it('should return result with injection', () => {
    const getResultWithInjection = createResultWithInjectionGetter(KEY);
    const result: ServerPropsGetterResult = {
      props: {},
    };
    const stores = {};

    expect(getResultWithInjection(result, stores)).toEqual({
      ...result,
      props: {
        ...result.props,
        [KEY]: stores,
      },
    });
  });
});
