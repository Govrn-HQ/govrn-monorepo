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

// 1. some clean up
// 2. Add comand to generate schema uri
// 3. Test schema matches type
// 4. test store contribution metadata
// 5. test mint hook to make sure proper uri is passed in
// 6. Test uploadFileIPFS as well
// 7. Move schema to protocol-client
