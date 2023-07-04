import Joi from 'joi';

const StoresSchema = Joi.object().pattern(Joi.string(), Joi.function().class()).min(1).required();

export default StoresSchema;
