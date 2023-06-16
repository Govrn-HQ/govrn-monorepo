import React from 'react';
import { Box } from '@chakra-ui/react';
import HomeShell from '../components/HomeShell';

// here
const Home = () => {
  return (
    <Box as="section" height="100vh" bg="gray.50" overflowY="auto">
      <HomeShell />
    </Box>
  );
};

export default Home;
