import React from 'react';
import { Box } from '@chakra-ui/react';
import { Pill, PillProps } from '../..';

export default {
  title: 'Components/Molecules/Pill',
  component: Pill,
};

export const GradientChecked = (args: PillProps) => (
  <Box backgroundColor="gray.50">
    <Box padding={10}>
      <Pill {...gradientCheckedArgs} />
    </Box>
  </Box>
);

const gradientCheckedArgs = {
  label: 'Verified',
  status: 'gradient',
  icon: 'checkmark',
};
