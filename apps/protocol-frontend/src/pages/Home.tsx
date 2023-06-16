import React from 'react';
import { Box } from '@chakra-ui/react';
import HomeShell from '../components/HomeShell';
import HomeNew from '../components/HomeNew';

// here
const Home = () => {
  return (
    <Box as="section" height="100vh" bg="gray.50" overflowY="auto">
      {/* <HomeShell /> */}
      <HomeNew />
    </Box>
  );
};

export default Home;
