const IPFS_PREFIX = 'ipfs://';
const GATEWAY_URL = 'https://ipfs.io/ipfs/';

/**
 * Convert an IPFS URL to a HTTP URL.
 *
 * @param ipfsUrl IPFS URL. Example: `ipfs://Qm...`
 * @returns HTTP URL. Example: `https://ipfs.io/ipfs/Qm...`
 */
export const ipfsToHttp = (ipfsUrl: string) => {
  // Check if the URL is a valid IPFS URL.
  if (!ipfsUrl.startsWith(IPFS_PREFIX)) {
    return ipfsUrl;
  }

  // Split the URL into the CID and the path.
  const cid = ipfsUrl.split('://')[1];
  return `${GATEWAY_URL}${cid}`;
};
