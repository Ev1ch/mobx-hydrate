import getIsClient from './getIsClient';

export type GetIsServer = () => boolean;

const getIsServer = () => !getIsClient();

export default getIsServer;
