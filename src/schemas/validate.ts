import Joi from 'joi';

export type Validate = <TObject>(
  schema: Joi.Schema<TObject>,
  data: unknown,
) => { errors?: Joi.ValidationError[] };

const validate: Validate = (schema, data) => {
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
