export default class MultipleError extends Error {
  constructor(public errors: Error[]) {
    super(errors.map((error) => error.message).join('. '));
  }
}
