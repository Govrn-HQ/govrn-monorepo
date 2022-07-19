import { Stack, Text } from '@chakra-ui/react';
import ConnectWallet from './ConnectWallet';
import React from 'react';
import { GOVRN_MOTTO } from '../utils/constants';

const NewUserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center">
      <Text>{GOVRN_MOTTO}</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome to Govrn! You'll need to create a Username to get started.
      </Text>
      <ConnectWallet />
    </Stack>
  );
};

export default NewUserView;
