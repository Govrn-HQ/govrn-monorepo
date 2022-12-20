import { useDisconnect } from 'wagmi';
import { BASE_URL } from '../utils/constants';
import { useGovrnToast } from '@govrn/protocol-ui';

const useLogout = () => {
  const toast = useGovrnToast();
  const { disconnect } = useDisconnect();

  const logout = async () => {
    try {
      await fetch(`${BASE_URL}/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await disconnect();
    } catch (err) {
      console.error(err);
      toast.error({
        // title: 'Failed to logout user',
        description: `Something went wrong. Please try again: ${err}`,
      });
    }
  };
  return { logout };
};

export default useLogout;
