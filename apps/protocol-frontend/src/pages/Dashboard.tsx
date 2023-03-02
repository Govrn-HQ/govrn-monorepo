import {
  Container,
  Box,
  Button,
  Link as ChakraLink,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { useAccount } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import { useContributionList } from '../hooks/useContributionList';
import SiteLayout from '../components/SiteLayout';
import DashboardShell from '../components/DashboardShell';
import NewUserView from '../components/NewUserView';
import ErrorView from '../components/ErrorView';

import { GovrnCta, GovrnSpinner } from '@govrn/protocol-ui';

const CopyChildren = () => (
  <Flex direction="column" alignItems="center" justifyContent="center">
    <Text as="span">
      {' '}
      <span role="img" aria-labelledby="pencil and paper emoji">
        📝
      </span>{' '}
      Report and mint your first contribution
    </Text>
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
    <ChakraLink
      as={Link}
      to="/report"
      state={{ targetId: 'myDaos' }}
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Button variant="primary" size="md" width={{ base: '100%', lg: 'auto' }}>
        Report Your First Contribution
      </Button>
    </ChakraLink>
    <ChakraLink
      as={Link}
      to="/profile"
      state={{ targetId: 'myDaos' }}
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Button
        variant="secondary"
        size="md"
        width={{ base: '100%', lg: 'auto' }}
      >
        Join a DAO From Your Profile
      </Button>
    </ChakraLink>
    <ChakraLink
      href="https://govrn.gitbook.io/govrn-docs/lets-party/kevin-malone"
      isExternal
      textDecoration="none"
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Button variant="tertiary" size="md" leftIcon={<HiOutlineExternalLink />}>
        Learn More About Kevin Malone
      </Button>
    </ChakraLink>
  </>
);

const EmptyContributionsView = () => {
  return (
    <GovrnCta
      heading={`It's new contribution time!   `}
      emoji="⚡"
      copy={<CopyChildren />}
      children={<ButtonChildren />}
    />
  );
};

const Dashboard = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
  const { userData } = useUser();
  const {
    data: userContributions,
    isLoading: userContributionsLoading,
    isFetching: userContributionsFetching,
    isError: userContributionsError,
  } = useContributionList({
    where: {
      user_id: { equals: userData?.id },
    },
  });

  if (userContributionsLoading || userContributionsFetching) {
    return <GovrnSpinner />;
  }

  if (
    (!userContributionsLoading &&
      !userContributionsFetching &&
      userContributions === undefined) ||
    userContributionsError
  ) {
    return (
      <ErrorView errorMessage="There may have been an issue loading your contributions. Please try again." />
    );
  }

  return (
    <SiteLayout>
      {isConnected &&
      isAuthenticated &&
      userContributions !== undefined &&
      userContributions?.length ? (
        <DashboardShell />
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
              <EmptyContributionsView />
            ) : (
              <NewUserView />
            )}
          </Box>
        </Container>
      )}
    </SiteLayout>
  );
};

export default Dashboard;
