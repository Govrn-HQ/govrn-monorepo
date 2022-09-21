import { GovrnProtocol } from '@govrn/protocol-client';
import { useQuery } from '@tanstack/react-query';

const protocolUrl = import.meta.env.VITE_PROTOCOL_URL;
const govrn = new GovrnProtocol(protocolUrl, { credentials: 'include' });

export const useActivityTypesList = () => {
  const { isLoading, error, data, isFetching } = useQuery(['activityTypes'], async () => {
    const data = await govrn.custom.listActivityTypesByUser({})
    return data;
  })
  return { isLoading, error, data, isFetching };
}

// useNounVerb 

// useContributionList
// useContributionUpdate

// can group by Noun in a folder 

// do we want the userData to come in via args instead of the hook?
// likely don't need this anymore -- if we do we can handle it and pass it in