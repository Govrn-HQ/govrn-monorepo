import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import { GovrnCta } from '@govrn/protocol-ui';
import { RequireAuth } from '../utils/requireAuth';

const DaoLandingPage = () => {
  const CopyChildren = () => (
    <Flex direction="column" alignItems="center" justifyContent="center">
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
    <Link
      as={RouterLink}
      to="/profile"
      state={{ targetId: 'myDaos' }}
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Button variant="primary" size="md" width={{ base: '100%', lg: 'auto' }}>
        Join a DAO From Your Profile
      </Button>
    </Link>
  );

  return (
    <RequireAuth>
      <Box
        background="white"
        boxShadow="sm"
        borderRadius={{ base: 'none', md: 'lg' }}
        marginX={{ base: 4, lg: 0 }}
        marginTop={{ base: 8, lg: 0 }}
      >
        <GovrnCta
          heading={`You aren't in any DAOs yet`}
          emoji="👀"
          copy={<CopyChildren />}
          children={<ButtonChildren />}
        />
      </Box>
    </RequireAuth>
  );
};

export default DaoLandingPage;
