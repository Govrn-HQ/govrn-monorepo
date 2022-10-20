import fetch from 'node-fetch';

const INFURA_SUBDOMAIN = process.env.INFURA_SUBDOMAIN;

const getIpfsFromHash = (hash: string) => {
  return `${INFURA_SUBDOMAIN}/api/v0/cat?arg=${hash.split('/').slice(2)}`;
};

export const fetchIPFS = async <T extends Record<string, any>>(
  ipfsHash: string,
): Promise<T> => {
  const resp = await fetch(getIpfsFromHash(ipfsHash), {
    method: 'post',
  });
  const text = await (await resp?.blob())?.text();

  try {
    return JSON.parse(text) as T;
  } catch (error) {
    console.error(':: Failed to parse:', text);
    throw error;
  }
};

export const logger = (msg: string, ...optionalParams: unknown[]) => {
  console.log(`:: `, msg, optionalParams);
};
