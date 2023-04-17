import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';
import { ListUserActivityQueryVariables } from '@govrn/protocol-client';

const useUserActivityList = ({
  args,
  refetchOnWindowFocus,
}: {
  args: ListUserActivityQueryVariables;
  refetchOnWindowFocus?: boolean;
}) => {
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery({
    queryKey: ['userActivityList', args],
    queryFn: async () => {
      const data = await govrn.user.activity_type.list(args);
      return data;
    },
    refetchOnWindowFocus,
  });
  return { isLoading, isError, isFetching, error, data };
};

export default useUserActivityList;
