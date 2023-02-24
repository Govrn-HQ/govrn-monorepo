import { useAccount } from 'wagmi';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useUser } from '../contexts/UserContext';
import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { GovrnCta } from '@govrn/protocol-ui';
import SiteLayout from '../components/SiteLayout';
import NewUserView from '../components/NewUserView';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { GOVRN_MOTTO } from '../utils/constants';

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

  const CopyChildren = () => (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Text as="span">
        {' '}
        <span role="img" aria-labelledby="person emoji">
          👤
        </span>{' '}
        Head to your profile to join or create a DAO
      </Text>
      <Text as="span">
        {' '}
        <span role="img" aria-labelledby="robot emoji">
          🤖
        </span>{' '}
        Learn more about Kevin Malone, our friendly Discord bot for DAOs
      </Text>
    </Flex>
  );

  const ButtonChildren = () => (
    <>
      <Link
        as={RouterLink}
        to="/profile"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Button variant="primary" size="md">
          Join a DAO From Your Profile
        </Button>
      </Link>
      <Link
        href="https://govrn.gitbook.io/govrn-docs/lets-party/kevin-malone"
        isExternal
        textDecoration="none"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Button
          variant="secondary"
          size="md"
          leftIcon={<HiOutlineExternalLink />}
        >
          Learn More About Kevin Malone
        </Button>
      </Link>
    </>
  );

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
            <GovrnCta
              heading={`You aren't in any DAOs yet`}
              emoji="👀"
              copy={<CopyChildren />}
              children={<ButtonChildren />}
            />
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
