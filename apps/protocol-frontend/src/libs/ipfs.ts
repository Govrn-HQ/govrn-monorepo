import {
  batch,
  IPFS,
  MintedContributionSchemaV1,
} from '@govrn/protocol-client';
import { INFURA_PROJECT_ID, INFURA_PROJECT_SECRET } from '../utils/constants';

export const uploadFileIpfs = async (file: File, onlyHash = true) => {
  const ipfs = new IPFS(INFURA_PROJECT_ID, INFURA_PROJECT_SECRET);
  return await ipfs.uploadFileIPFS(file, onlyHash);
};

export const storeIpfs = async (content: MintedContributionSchemaV1) => {
  const ipfs = new IPFS(INFURA_PROJECT_ID, INFURA_PROJECT_SECRET);
  return await ipfs.storeContributionMetadata(content);
};

export const bulkStoreIpfs = async (
  params: Omit<MintedContributionSchemaV1, 'schema'>[],
) => {
  const ipfs = new IPFS(INFURA_PROJECT_ID, INFURA_PROJECT_SECRET);

  return await batch<
    Omit<MintedContributionSchemaV1, 'schema'>,
    { index: number; value: string }
  >(params, async (item, index) => {
    return {
      index,
      value: await ipfs.storeContributionMetadata(item),
    };
  });
};

// 1. some clean up
// 2. Add comand to generate schema uri
// 3. Test schema matches type
// 4. test store contribution metadata
// 5. test mint hook to make sure proper uri is passed in
// 6. Test uploadFileIPFS as well
// 7. Move schema to protocol-client
