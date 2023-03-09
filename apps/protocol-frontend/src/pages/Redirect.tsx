import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import { GovrnSpinner } from '@govrn/protocol-ui';

const TIMEOUT = 300;

// This could be expanded to include redirect to another routes
const RedirectHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [redirectNow, setRedirectNow] = useState(false);
  const { authenticateAddress } = useAuth();
  setTimeout(() => setRedirectNow(true), TIMEOUT);

  if (redirectNow) authenticateAddress();

  navigate('/', { state: location.state, replace: true });

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justify="center"
      bgGradient="linear(to-r, white 0%, brand.primary.100 50%, brand.primary.200 100%)"
    >
      <GovrnSpinner />
    </Flex>
  );
};

export default RedirectHome;
