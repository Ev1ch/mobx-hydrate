import Joi from 'joi';

import { InjectionOptionsSchema } from '@/modules/injection/schemas';
import { SerializationOptionsSchema } from '@/modules/serialization/schemas';

import type { Options } from '../domain';

const OptionsSchema = Joi.object<Options>()
  .keys({
    injection: InjectionOptionsSchema.optional(),
    serialization: SerializationOptionsSchema.optional(),
  })
  .min(1)
  .required();

export default OptionsSchema;
