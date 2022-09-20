import { GovrnProtocol } from '@govrn/protocol-client';
import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';

const protocolUrl = import.meta.env.VITE_PROTOCOL_URL;
const govrn = new GovrnProtocol(protocolUrl, { credentials: 'include' });

export const getActivityTypes = () => {
  const { userData } = useUser();
  const { isLoading, error, data, isFetching } = useQuery(['activityTypes'], async () => {
    if (!userData?.id) {
      throw new Error('getUserActivityTypes has no userData.id');
    }
    const data = await govrn.custom.listActivityTypesByUser({})
    return data;
  })
  return { isLoading, error, data, isFetching };
}
