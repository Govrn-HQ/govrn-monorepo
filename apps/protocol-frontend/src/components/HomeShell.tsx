import { Link } from 'react-router-dom';
import { Container, Stack, Flex, Box, Button, Text } from '@chakra-ui/react';
import PageHeading from './PageHeading';

const HomeShell = () => {
  return (
    <Flex
      direction="column"
      overflowX="hidden"
      margin="0 auto"
      minHeight="100vh"
      minWidth="100vw"
      bgGradient="linear(to-r, white 0%, brand.primary.100 50%, brand.primary.200 100%)"
    >
      <Flex
        direction="column"
        align="center"
        justify={['flex-start', 'flex-start', 'center', 'center']}
        flex="1"
        minHeight={['100vh', '100vh', '0', '0']}
      >
        <PageHeading>
          Welcome to Govrn{' '}
          <span role="img" aria-labelledby="welcome">
            👋
          </span>
        </PageHeading>
        <Text color="gray.800" paddingBottom={8}>
          Anything that governs you, you should be able to govern.
        </Text>
        <Link to="/contributions">
          <Button
            color="brand.primary.600"
            backgroundColor="brand.primary.50"
            transition="all 100ms ease-in-out"
            _hover={{ bgColor: 'white' }}
          >
            Get Started
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default HomeShell;
