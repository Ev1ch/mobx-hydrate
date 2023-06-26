import MultipleError from './MultipleError';

export type ThrowMultipleOrOne = (errors: Error[]) => void;

const throwMultipleOrOne: ThrowMultipleOrOne = (errors: Error[]) => {
  if (errors.length === 1) {
    /**
     * Disable ESLint rule because this literal is already an error.
     */
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw errors[0];
  }

  throw new MultipleError(errors);
};

export default throwMultipleOrOne;
