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

export const PrimaryChecked = (args: PillProps) => (
  <Box backgroundColor="gray.50">
    <Box padding={10}>
      <Pill {...primaryCheckedArgs} />
    </Box>
  </Box>
);

export const TertiaryNoIcon = (args: PillProps) => (
  <Box backgroundColor="white">
    <Box padding={10}>
      <Pill {...tertiaryNoIconArgs} />
    </Box>
  </Box>
);

const gradientCheckedArgs = {
  label: 'Verified',
  status: 'gradient',
  icon: 'checkmark',
};

const primaryCheckedArgs = {
  label: 'Govrn',
  status: 'primary',
  icon: 'checkmark',
};

const tertiaryNoIconArgs = {
  label: 'Raid Guild',
  status: 'tertiary',
};
