import { Stack, Text } from '@chakra-ui/react';
import ConnectWallet from './ConnectWallet';
import React from 'react';

const NewUserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center">
      <Text>Anything that governs you, you should be able to govern.</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome to Govrn! You'll need to create a Username to get started.
      </Text>
      <ConnectWallet />
    </Stack>
  );
};

export default NewUserView;
