import Joi from 'joi';

const validate = <TObject>(schema: Joi.Schema<TObject>, data: unknown) => {
  const { error } = schema.validate(data, { abortEarly: false });

  if (error) {
    return {
      errors: error?.details.map(
        (detail) => new Joi.ValidationError(detail.message, [detail], data),
      ),
    };
  }

  return {};
};

export default validate;
