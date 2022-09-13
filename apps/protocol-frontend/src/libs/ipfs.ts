import { create, CID } from 'ipfs-http-client';
import { Buffer } from 'buffer';

export const getIPFSClient = () => {
  const auth =
    'Basic ' +
    Buffer.from(
      import.meta.env.VITE_INFURA_PROJECT_ID +
        ':' +
        import.meta.env.VITE_INFURA_PROJECT_SECRET,
    ).toString('base64');
  const ipfs = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth,
    },
  });
  return ipfs;
};

export const storeIpfs = async (
  content:
    | {
        name: string;
        details: string;
        proof: string;
      }
    | ArrayBuffer,
) => {
  const ipfs = getIPFSClient();
  const cid = await ipfs.add(JSON.stringify(content), {
    cidVersion: 1,
    hashAlg: 'sha2-256',
  });
  console.log('cid', cid);
  const resp = await ipfs.pin.add(CID.parse(cid.path));
  console.log('ipfs resp', resp);
  return `ipfs://${cid.path}`;
};

export const fetchIPFS = async (ipfsHash: string) => {
  const resp = await fetch(
    `${import.meta.env.VITE_INFURA_SUBDOMAIN}/api/v0/cat?arg=${ipfsHash
      .split('/')
      .slice(2)}`,
    {
      method: 'post',
    },
  );
  const blob = await resp?.blob();
  return blob;
};
