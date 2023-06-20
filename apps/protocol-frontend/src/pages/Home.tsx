import React from 'react';
import { Box } from '@chakra-ui/react';
import HomeLayout from '../components/HomeLayout';

const Home = () => {
  return (
    <Box as="section" height="100vh" bg="gray.50" overflowY="auto">
      <HomeLayout />
    </Box>
  );
};

export default Home;
