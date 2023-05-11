import fetch from 'node-fetch';
import { logger } from './main';

const INFURA_SUBDOMAIN = process.env.INFURA_SUBDOMAIN;

const getIpfsFromHash = (hash: string) => {
  return `${INFURA_SUBDOMAIN}/ipfs/${hash.split('/').slice(2)}`;
};

export const fetchIPFS = async <T>(ipfsHash: string): Promise<T> => {
  const auth =
    'Basic ' +
    Buffer.from(
      process.env.INFURA_PROJECT_ID + ':' + process.env.INFURA_PROJECT_SECRET,
    ).toString('base64');

  const resp = await fetch(getIpfsFromHash(ipfsHash), {
    headers: {
      Authorization: auth,
    },
  });
  const text = await (await resp?.blob())?.text();

  try {
    return JSON.parse(text);
  } catch (e) {
    logger.error(':: Failed to parse: %s %s', text, ipfsHash);
    throw e;
  }
};
