import Joi from 'joi';
import { SerializationOptions } from '../domain';

const SerializationOptionsSchema = Joi.object<SerializationOptions>()
  .keys({
    deserialize: Joi.function().arity(2).optional(),
    serialize: Joi.function().arity(1).optional(),
  })
  .min(1)
  .and('deserialize', 'serialize')
  .required();

export default SerializationOptionsSchema;
