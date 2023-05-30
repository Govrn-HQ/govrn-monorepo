import { Button, Link as ChakraLink, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useContributionList } from '../hooks/useContributionList';
import DashboardShell from '../components/DashboardShell';
import ErrorView from '../components/ErrorView';

import { GovrnCta, GovrnSpinner } from '@govrn/protocol-ui';
import { RequireAuth } from '../utils/requireAuth';
import SiteLayout from '../components/SiteLayout';

const CopyChildren = () => (
  <Flex direction="column" alignItems="center" justifyContent="center">
    <Text as="span">
      {' '}
      <span role="img" aria-labelledby="pencil and paper emoji">
        📝
      </span>{' '}
      Add a contribution to view your dashboard
    </Text>
    <Text as="span">
      {' '}
      <span role="img" aria-labelledby="person emoji">
        👤
      </span>{' '}
      Head to your profile to join or create a DAO
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
  </>
);

const EmptyContributionsView = () => {
  return (
    <GovrnCta
      heading={`Welcome to Govrn!`}
      emoji="👋"
      copy={<CopyChildren />}
      children={<ButtonChildren />}
    />
  );
};

const Dashboard = () => {
  const { userData } = useUser();
  const {
    data: userContributions,
    isLoading: userContributionsLoading,
    isFetching: userContributionsFetching,
    isError: userContributionsError,
  } = useContributionList(
    {
      where: {
        user_id: { equals: userData?.id },
      },
    },
    false,
  );

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
      <RequireAuth>
        {userContributions !== undefined && userContributions?.length ? (
          <DashboardShell />
        ) : (
          <EmptyContributionsView />
        )}
      </RequireAuth>
    </SiteLayout>
  );
};

export default Dashboard;
