import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Heading,
} from '@chakra-ui/react';
import { useWallet } from '@raidguild/quiver';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import { FiArrowLeft } from 'react-icons/fi';
import SiteLayout from '../components/SiteLayout';

import ContributionDetailShell from '../components/ContributionDetailShell';
import NewUserView from '../components/NewUserView';
import { GOVRN_MOTTO } from '../utils/constants';

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
  const { isConnected } = useWallet();
  const { userData, getContribution } = useUser();
  const { isAuthenticated } = useAuth();
  const { id } = useParams();
  const [contribution, setContribution] = useState(null);

  useEffect(() => {
    const fetchContribution = async () => {
      if (id) {
        const contribution = await getContribution(parseInt(id));
        setContribution(contribution);
      }
    };
    fetchContribution();
  }, [id]);

  return (
    <SiteLayout>
      {isConnected && isAuthenticated ? (
        <>
          {contribution !== null ? (
            <ContributionDetailShell contribution={contribution} />
          ) : (
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
                <Link to="/contributions">
                  <Button
                    leftIcon={<FiArrowLeft />}
                    variant="outline"
                    paddingX={4}
                  >
                    Contributions
                  </Button>
                </Link>
              </Flex>
            </Box>
          )}
        </>
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
