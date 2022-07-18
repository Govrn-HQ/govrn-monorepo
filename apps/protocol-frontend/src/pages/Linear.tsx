import { Box, Flex } from '@chakra-ui/react';
import PageHeading from '../components/PageHeading';

const Linear = () => {
  return (
    <Box as="section" height="100vh" bg="gray.50" overflowY="auto">
      <Flex
        direction="column"
        alignItems={{ base: 'center' }}
        justifyContent={{ base: 'center' }}
        minHeight="100vh"
        minWidth="100vw"
        bgGradient="linear(to-r, white 0%, brand.primary.100 50%, brand.primary.200 100%)"
      >
        <PageHeading>
          Connected to Linear
          <span role="img" aria-labelledby="welcome">
            🎉
          </span>
        </PageHeading>
      </Flex>
    </Box>
  );
};

export default Linear;
