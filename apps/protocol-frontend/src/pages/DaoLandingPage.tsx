import { useAccount } from 'wagmi';
import { useAuth } from '../contexts/AuthContext';
import { useUser } from '../contexts/UserContext';
import { Box, Container, Stack, Text } from '@chakra-ui/react';
import SiteLayout from '../components/SiteLayout';
import NewUserView from '../components/NewUserView';
import { GOVRN_MOTTO } from '../utils/constants';
import { useDaosList } from '../hooks/useDaosList';

const UserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center" minHeight="50vh">
      <Text>{GOVRN_MOTTO}</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome back! Connect your wallet to report a Contribution{' '}
        <span role="img" aria-labelledby="eye emoji looking at Contributions">
          👀
        </span>
      </Text>
    </Stack>
  );
};

const DaoLandingPage = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
  const { userData } = useUser();

  return (
    <SiteLayout>
      <Container
        paddingY={{ base: '4', md: '8' }}
        paddingX={{ base: '0', md: '8' }}
        color="gray.700"
        maxWidth="1200px"
      >
        {isConnected && isAuthenticated ? (
          <Box
            background="white"
            boxShadow="sm"
            borderRadius={{ base: 'none', md: 'lg' }}
          >
            <Stack spacing="4" justify="center" align="center" minHeight="50vh">
              <Text fontSize="lg" fontWeight="medium">
                <span
                  role="img"
                  aria-labelledby="Sun emoji for callout indicating user is not in any DAOs yet."
                >
                  🌞
                </span>{' '}
                You're not in any DAOs yet!{' '}
                <span
                  role="img"
                  aria-labelledby="Sun emoji for callout indicating user is not in any DAOs yet."
                >
                  🌞
                </span>{' '}
              </Text>
            </Stack>
          </Box>
        ) : (
          <Box>
            {isConnected && isAuthenticated && userData ? (
              <UserView />
            ) : (
              <NewUserView />
            )}
          </Box>
        )}
      </Container>
    </SiteLayout>
  );
};

export default DaoLandingPage;
