
import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';
import { UIGuilds } from '@govrn/ui-types';

export const useDaosList = ({ ...args }) => {
  const { govrnProtocol: govrn } = useUser()
  const { isLoading, isFetching, isError, error, data } = useQuery(['userDaos', args], async () => {
    const data = await govrn.guild.list({ ...args })
    console.log('daos data', data)
    return data
  })
  return { isLoading, isError, isFetching, error, data };
}
