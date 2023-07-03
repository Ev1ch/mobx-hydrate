import type { GetSerializedStores } from '../domain';
import { SERIALIZE } from '../constants';
import createSerializedStoresGetter from './createSerializedStoresGetter';

const getSerializedStores: GetSerializedStores = createSerializedStoresGetter(SERIALIZE);

export default getSerializedStores;
