import { patch, IPFS } from '@govrn/protocol-client';

export const uploadFileIpfs = async (file: File, onlyHash = true) => {
  const ipfs = IPFS(
    import.meta.env.VITE_INFURA_PROJECT_ID,
    import.meta.env.VITE_INFURA_PROJECT_SECRET,
  );
  return await ipfs.uploadFileIPFS(file, onlyHash);
};
export const bulkStoreIpfs = async (params: StoreIpfsParam[]) => {
  const ipfs = IPFS(
    import.meta.env.VITE_INFURA_PROJECT_ID,
    import.meta.env.VITE_INFURA_PROJECT_SECRET,
  );
  return (
    await patch(
      params.map(
        async content => await ipfs.storeContributionMetadata(content),
      ),
    )
  ).map((result, index) => ({ index, ...result }));
};
