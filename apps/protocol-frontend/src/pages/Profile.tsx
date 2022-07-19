import React from 'react';
import { Container, Box, Stack, Text } from '@chakra-ui/react';
import { useWallet } from '@raidguild/quiver';
import { useUser } from '../contexts/UserContext';
import SiteLayout from '../components/SiteLayout';
import ProfileShell from '../components/ProfileShell';
import NewUserView from '../components/NewUserView';
import { GOVRN_MOTTO } from '../utils/constants';

const UserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center" minHeight="50vh">
      <Text>{GOVRN_MOTTO}</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome back! Connect your wallet to edit your Profile
        <span role="img" aria-labelledby="eye emoji looking at Profile">
          👀
        </span>
      </Text>
    </Stack>
  );
};

const Profile = () => {
  const { isAuthenticated } = useUser();
  const { isConnected } = useWallet();
  const { userData } = useUser();

  return (
    <SiteLayout>
      {isConnected && isAuthenticated ? (
        <ProfileShell />
      ) : (
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
            {isConnected && userData ? <UserView /> : <NewUserView />}
          </Box>
        </Container>
      )}
    </SiteLayout>
  );
};

export default Profile;
