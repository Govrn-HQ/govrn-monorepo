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
  params: Omit<MintedContributionSchemaV1, 'schema' | 'version'>[],
) => {
  const ipfs = new IPFS(INFURA_PROJECT_ID, INFURA_PROJECT_SECRET);

  return await batch<
    Omit<MintedContributionSchemaV1, 'schema' | 'version'>,
    { index: number; value: string }
  >(params, async (item, index) => {
    return {
      index,
      value: await ipfs.storeContributionMetadata(item),
    };
  });
};
