import Joi from 'joi';

import type { InjectionOptions } from '../domain';

const InjectionOptionsSchema = Joi.object<InjectionOptions>()
  .keys({
    key: Joi.string().optional(),
  })
  .min(1)
  .required();

export default InjectionOptionsSchema;
