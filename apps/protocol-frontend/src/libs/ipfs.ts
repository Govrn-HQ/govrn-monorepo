import { create, CID } from 'ipfs-http-client';
import { Buffer } from 'buffer';
import { CID as mfCID } from 'multiformats/cid';
import * as json from 'multiformats/codecs/json';
import { sha256 } from 'multiformats/hashes/sha2';
import { base64 } from 'multiformats/bases/base64';
const Hash = require('ipfs-only-hash');
import * as hasher from 'multiformats/hashes/hasher';
// import { Hash } from 'ipfs-http-client'

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

export const uploadFileIpfs = async (file: File) => {
  const ipfs = getIPFSClient();
  const data = Buffer.from(await file.arrayBuffer());
  const hash = await Hash.of(data);
  console.log('hash', hash);

  // const bytes = json.encode(data)

  // const mfHash = await sha256.digest(data)
  // const testCID = mfCID.create(1, json.code, mfHash)

  const multihasher = await sha256.digest(data);
  const testCID = CID.create(1, json.code, multihasher);
  console.log('testCID', testCID.toString(base64.encoder));
  const onlyHash = await ipfs.add(file, { onlyHash: true });
  console.log('onlyHash', onlyHash);
  const cid = await ipfs.add(file);
  console.log('ipfs cid', cid.path);
  const resp = await ipfs.pin.add(cid.path);
  return `ipfs://${cid.path}`;
};

export const storeIpfs = async (
  content:
    | {
      name: string,
      details: string,
      proof: string,
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
