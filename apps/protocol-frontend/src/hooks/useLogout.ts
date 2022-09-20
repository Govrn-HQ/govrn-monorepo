import { useToast } from '@chakra-ui/react';
import { useDisconnect } from 'wagmi';
import { BASE_URL } from '../utils/constants';

const useLogout = () => {
  const toast = useToast();
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
      toast({
        title: 'Failed to logout user',
        description: `Something went wrong. Please try again: ${err}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };
  return { logout };
};

export default useLogout;
