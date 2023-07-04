import getIsClient from './getIsClient';

const getIsServer = () => !getIsClient();

export default getIsServer;
