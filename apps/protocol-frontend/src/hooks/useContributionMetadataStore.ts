import { useMutation } from '@tanstack/react-query';
import { INFURA_PROJECT_ID, INFURA_PROJECT_SECRET } from '../utils/constants';
import { MintedContributionSchemaV1, IPFS } from '@govrn/protocol-client';

const useContributionMetadataStore = () => {
  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    ['ContributionMetadataStore'],
    async (data: Omit<MintedContributionSchemaV1, 'schema'>) => {
      const ipfs = new IPFS(INFURA_PROJECT_ID, INFURA_PROJECT_SECRET);
      return await ipfs.storeContributionMetadata({
        ...data,
      });
    },
    {
      onSuccess: (data, ipfsURI) => {
        return ipfsURI;
      },
      onError: error => {
        console.error(error);
      },
    },
  );

  return { mutateAsync, isLoading, isError, isSuccess };
};

export default useContributionMetadataStore;
