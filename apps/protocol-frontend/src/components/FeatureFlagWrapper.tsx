import React from 'react';
import { Box } from '@chakra-ui/react';

interface FeatureFlagWrapperProps {
  children: React.ReactNode;
}

const FeatureFlagWrapper = ({ children }: FeatureFlagWrapperProps) => {
  const buildEnv = import.meta.env.VITE_BUILD_ENV;

  return (
    <Box display={buildEnv === 'production' ? 'none' : 'block'}>{children}</Box>
  );
};

export default FeatureFlagWrapper;
