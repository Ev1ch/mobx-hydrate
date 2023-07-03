import type { GetDeserializedStores } from '../domain';
import { DESERIALIZE } from '../constants';
import createDeserializedStoresGetter from './createDeserializedStoresGetter';

const getDeserializedStores: GetDeserializedStores = createDeserializedStoresGetter(DESERIALIZE);

export default getDeserializedStores;
