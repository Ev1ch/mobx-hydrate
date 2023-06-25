import MultipleError from './MultipleError';

export type ThrowMultipleOrOne = (errors: Error[]) => void;

const throwMultipleOrOne: ThrowMultipleOrOne = (errors: Error[]) => {
  if (errors.length === 1) {
    throw errors[0];
  }

  throw new MultipleError(errors);
};

export default throwMultipleOrOne;
