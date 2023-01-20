import React from 'react';
import { Box } from '@chakra-ui/react';

interface FeatureFlagWrapperProps {
  children: React.ReactNode;
}

const FeatureFlagWrapper = ({ children }: FeatureFlagWrapperProps) => {
  const dev = import.meta.env.DEV === true;
  return <Box display={dev ? 'block' : 'none'}>{children}</Box>;
};

export default FeatureFlagWrapper;
