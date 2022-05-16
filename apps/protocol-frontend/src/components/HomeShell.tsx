import { Link } from 'react-router-dom';
import { Container, Stack, Flex, Box, Button } from '@chakra-ui/react';
import PageHeading from './PageHeading';
import Header from './Header';

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
