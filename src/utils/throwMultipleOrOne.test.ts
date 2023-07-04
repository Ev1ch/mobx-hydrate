import MultipleError from './MultipleError';
import throwMultipleOrOne from './throwMultipleOrOne';

describe('throwMultipleOrOne', () => {
  it('should throw a single error', () => {
    const error = new Error('');

    expect(() => throwMultipleOrOne([error])).toThrowError(error);
  });

  it('should throw multiple error', () => {
    const errors = [new Error(''), new Error('')];

    expect(() => throwMultipleOrOne(errors)).toThrowError(new MultipleError(errors));
  });
});
