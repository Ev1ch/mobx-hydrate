import { deserialize, serialize } from 'serializr';

import type { Deserialize, SerializationOptions, Serialize } from './domain';

export const DESERIALIZE: Deserialize = deserialize;

export const SERIALIZE: Serialize = serialize;

export const DEFAULT_SERIALIZATION_OPTIONS: SerializationOptions = {
  serialize: SERIALIZE,
  deserialize: DESERIALIZE,
};
