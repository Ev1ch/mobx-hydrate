import createStores from './createStores';

describe('createStores', () => {
  it('should create stores', () => {
    class Store {}
    const stores = {
      store: Store,
    };

    expect(createStores(stores)).toEqual({
      store: expect.any(Store),
    });
  });
});
