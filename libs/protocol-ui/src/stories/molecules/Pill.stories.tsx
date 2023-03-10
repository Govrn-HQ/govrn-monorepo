import React from 'react';
import { Box } from '@chakra-ui/react';
import { Pill, PillProps } from '../..';

export default {
  title: 'Components/Molecules/Pill',
  component: Pill,
};

export const GradientChecked = () => (
  <Box backgroundColor="gray.50">
    <Box padding={10}>
      <Pill {...gradientCheckedArgs} />
    </Box>
  </Box>
);

export const PrimaryChecked = () => (
  <Box backgroundColor="gray.50">
    <Box padding={10}>
      <Pill {...primaryCheckedArgs} />
    </Box>
  </Box>
);

export const SecondaryChecked = () => (
  <Box backgroundColor="gray.50">
    <Box padding={10}>
      <Pill {...secondaryCheckedArgs} />
    </Box>
  </Box>
);

export const TertiaryInfo = () => (
  <Box backgroundColor="white">
    <Box padding={10}>
      <Pill {...tertiaryInfoArgs} />
    </Box>
  </Box>
);

export const TertiaryNoIcon = () => (
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

const secondaryCheckedArgs = {
  label: 'Boys Club',
  status: 'secondary',
  icon: 'checkmark',
};

const tertiaryInfoArgs = {
  label: 'Unattested',
  status: 'tertiary',
  icon: 'info',
};

const tertiaryNoIconArgs = {
  label: 'Raid Guild',
  status: 'tertiary',
};
