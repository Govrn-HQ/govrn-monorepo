import { GovrnProtocolType } from '@govrn/protocol-client';
import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';
import { UIActivityType, UIGuild, UIUser, UIGuilds } from '@govrn/ui-types';

import { GovrnProtocol } from '@govrn/protocol-client';

const protocolUrl = import.meta.env.VITE_PROTOCOL_URL;
const govrn = new GovrnProtocol(protocolUrl, { credentials: 'include' });


export const useUserActivityTypesList = () => {
  // const { useGovrn: govrn } = useUser()

  const { isLoading, error, data, isFetching } = useQuery(['activityTypes'], async (): Promise<UIActivityType[]> => {
    const data = await govrn.custom.listActivityTypesByUser({})
    return data
  })
  return { isLoading, error, data, isFetching };
}

