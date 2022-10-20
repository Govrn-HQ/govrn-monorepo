import fetch from 'node-fetch';

const INFURA_SUBDOMAIN = process.env.INFURA_SUBDOMAIN;

const getIpfsFromHash = (hash: string) => {
  return `${INFURA_SUBDOMAIN}/api/v0/cat?arg=${hash.split('/').slice(2)}`;
};

export const fetchIPFS = async <T>(ipfsHash: string): Promise<T> => {
  const resp = await fetch(getIpfsFromHash(ipfsHash), {
    method: 'post',
  });
  return JSON.parse(await (await resp?.blob())?.text()) as T;
};

export const logger = (msg: string, ...optionalParams: unknown[]) => {
  console.log(`:: `, msg, optionalParams);
};
