export type GetIsClient = () => boolean;

const getIsClient: GetIsClient = () => typeof window !== 'undefined';

export default getIsClient;
