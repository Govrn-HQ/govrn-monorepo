import { useAccount } from 'wagmi';
import { useAuth } from '../contexts/AuthContext';
import { Box, Container, Stack, Text } from '@chakra-ui/react';
import SiteLayout from '../components/SiteLayout';

const DaoLandingPage = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();

  return (
    <SiteLayout>
      {isConnected && isAuthenticated && (
        <Container
          paddingY={{ base: '4', md: '8' }}
          paddingX={{ base: '0', md: '8' }}
          color="gray.700"
          maxWidth="1200px"
        >
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
        </Container>
      )}
    </SiteLayout>
  );
};

export default DaoLandingPage;
