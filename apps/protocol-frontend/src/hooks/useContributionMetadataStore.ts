import { useMutation } from '@tanstack/react-query';
import { INFURA_PROJECT_ID, INFURA_PROJECT_SECRET } from '../utils/constants';
import { MintedContributionSchemaV1, IPFS } from '@govrn/protocol-client';
import useGovrnToast from '../components/toast';

const useContributionMetadataStore = () => {
  const toast = useGovrnToast();
  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async (
      data: Omit<MintedContributionSchemaV1, 'schema' | 'version'> & {
        successToast?: boolean;
      },
    ) => {
      const ipfs = new IPFS(INFURA_PROJECT_ID, INFURA_PROJECT_SECRET);
      return await ipfs.storeContributionMetadata({
        ...data,
      });
    },
    {
      onSuccess: (data, variables) => {
        if (variables.successToast) {
          toast.success({
            title: 'Metadata successfully uploaded',
            description: 'Your metadata is now in IPFS',
          });
        }
        return data;
      },
      onError: error => {
        console.error(error);
      },
    },
  );

  return { mutateAsync, isLoading, isError, isSuccess };
};

export default useContributionMetadataStore;
