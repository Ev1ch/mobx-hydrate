import { deserialize, serialize } from 'serializr';

import type { Deserialize, Serialize } from './domain';

export const DESERIALIZE: Deserialize = deserialize;

export const SERIALIZE: Serialize = serialize;
