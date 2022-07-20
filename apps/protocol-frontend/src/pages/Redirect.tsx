import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Flex, Spinner } from '@chakra-ui/react';

const TIMEOUT = 300;

// This could be expanded to include redirect to another routes
const RedirectHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [redirectNow, setRedirectNow] = useState(false);
  setTimeout(() => setRedirectNow(true), TIMEOUT);

  if (redirectNow) navigate('/', { state: location.state, replace: true });

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justify="center"
      bgGradient="linear(to-r, white 0%, brand.primary.100 50%, brand.primary.200 100%)"
    >
      <Spinner speed="0.7s" />
    </Flex>
  );
};

export default RedirectHome;
