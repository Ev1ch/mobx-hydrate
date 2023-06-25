import getIsClient from './getIsClient';

export type GetIsServer = () => boolean;

const getIsServer: GetIsServer = () => !getIsClient();

export default getIsServer;
