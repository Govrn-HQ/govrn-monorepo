import { useParams } from 'react-router-dom';
import {
  Container,
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Heading,
} from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import { FiArrowLeft } from 'react-icons/fi';
import SiteLayout from '../components/SiteLayout';

import ContributionDetailShell from '../components/ContributionDetailShell';
import NewUserView from '../components/NewUserView';
import { GOVRN_MOTTO } from '../utils/constants';
import { useContributionGet } from '../hooks/useContributionGet';
import { useNavigate } from 'react-router-dom';

const UserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center" minHeight="50vh">
      <Text>{GOVRN_MOTTO}</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome back! Connect your wallet to see your Contribution Details{' '}
        <span role="img" aria-labelledby="eye emoji looking at Contributions">
          👀
        </span>
      </Text>
    </Stack>
  );
};

const ContributionDetails = () => {
  const { isConnected } = useAccount();
  const { id } = useParams();
  const { userData } = useUser();
  const { data: contribution } = useContributionGet(parseInt(id || '0'));
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  let DetailComponent = () => (
    <Box
      marginY={{ base: 10, md: 0 }}
      paddingY={{ base: '8', md: '8' }}
      paddingX={{ base: '4', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
      width="100%"
    >
      <Flex
        justify="center"
        direction="column"
        wrap="wrap"
        width="100%"
        paddingX={{ base: 4 }}
        paddingY={{ base: 4 }}
        background="white"
        boxShadow="sm"
        borderRadius={{ base: 'none', md: 'lg' }}
        marginBottom={4}
        gap={4}
      >
        <Heading
          fontSize={{ base: 'xl', lg: '3xl' }}
          color="gray.800"
          fontWeight="normal"
        >
          <span
            role="img"
            aria-labelledby="eyes emoji showcasing that there are not any Contributions submitted yet"
          >
            👀
          </span>{' '}
          Couldn't find this Contribution{' '}
          <span
            role="img"
            aria-labelledby="eyes emoji showcasing that there are not any Contributions submitted yet"
          >
            👀
          </span>
        </Heading>
        <Text>Let's try another one! </Text>
        <Box>
          <Button
            leftIcon={<FiArrowLeft />}
            variant="outline"
            padding={2}
            paddingX={4}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Box>
      </Flex>
    </Box>
  );

  if (contribution !== undefined && contribution !== null) {
    DetailComponent = () => (
      <ContributionDetailShell contribution={contribution} />
    );
  }

  return (
    <SiteLayout>
      {isConnected && isAuthenticated && contribution?.status ? (
        <DetailComponent />
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
            {isConnected && isAuthenticated && userData ? (
              <UserView />
            ) : (
              <NewUserView />
            )}
          </Box>
        </Container>
      )}
    </SiteLayout>
  );
};

export default ContributionDetails;
