import { create, CID } from 'ipfs-http-client';
import { Buffer } from 'buffer';
import patch from '@govrn/protocol-client';

type StoreIpfsParam = {
  content: { name: string; details: string; proof: string } | ArrayBuffer;
};

export const getIPFSClient = () => {
  const auth =
    'Basic ' +
    Buffer.from(
      import.meta.env.VITE_INFURA_PROJECT_ID +
        ':' +
        import.meta.env.VITE_INFURA_PROJECT_SECRET,
    ).toString('base64');
  return create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth,
    },
  });
};

export const uploadFileIpfs = async (file: File, onlyHash = true) => {
  const ipfs = getIPFSClient();
  if (onlyHash) {
    const onlyHashOutput = await ipfs.add(file, { onlyHash: true });
    return `ipfs://${onlyHashOutput.path}`;
  }
  if (!onlyHash) {
    const cid = await ipfs.add(file, { onlyHash });
    await ipfs.pin.add(cid.path);
    return `ipfs://${cid.path}`;
  }
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

export const bulkStoreIpfs = async (
  params: StoreIpfsParam[],
): Promise<
  {
    index: number;
    status: 'fulfilled' | 'rejected';
    value?: string;
    reason?: any;
  }[]
> => {
  return (await patch(params.map(async i => await storeIpfs(i.content)))).map(
    (result: PromiseSettledResult<Awaited<string>>, index: number) => ({
      index,
      ...result,
    }),
  );
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
  return await resp?.blob();
};
