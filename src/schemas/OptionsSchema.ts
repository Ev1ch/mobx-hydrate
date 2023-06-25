import Joi from 'joi';

const StoresSchema = Joi.object().pattern(Joi.string(), Joi.function().class());

const OptionsSchema = Joi.object()
  .keys({
    stores: StoresSchema.min(1).required(),
  })
  .required();

export default OptionsSchema;
