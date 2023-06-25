export default class MultipleError extends Error {
  constructor(errors: Error[]) {
    super(errors.map((error) => error.message).join('. '));
  }
}
