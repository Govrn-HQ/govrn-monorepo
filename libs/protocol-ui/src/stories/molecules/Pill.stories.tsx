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
      <Pill {...args} />
    </Box>
  </Box>
);

export const PrimaryChecked = (args: PillProps) => (
  <Box backgroundColor="gray.50">
    <Box padding={10}>
      <Pill {...args} />
    </Box>
  </Box>
);

export const SecondaryChecked = (args: PillProps) => (
  <Box backgroundColor="gray.50">
    <Box padding={10}>
      <Pill {...args} />
    </Box>
  </Box>
);

export const TertiaryBackgroundPrimaryInfo = (args: PillProps) => (
  <Box backgroundColor="white">
    <Box padding={10}>
      <Pill {...args} />
    </Box>
  </Box>
);

export const TertiaryBackgroundSecondaryInfo = (args: PillProps) => (
  <Box backgroundColor="white">
    <Box padding={10}>
      <Pill {...args} />
    </Box>
  </Box>
);

export const TertiaryNoIcon = (args: PillProps) => (
  <Box backgroundColor="white">
    <Box padding={10}>
      <Pill {...args} />
    </Box>
  </Box>
);

GradientChecked.args = {
  label: 'Verified',
  status: 'gradient',
  icon: 'checkmark',
};

PrimaryChecked.args = {
  label: 'Govrn',
  status: 'primary',
  icon: 'checkmark',
};

SecondaryChecked.args = {
  label: 'Boys Club',
  status: 'secondary',
  icon: 'checkmark',
};

TertiaryBackgroundPrimaryInfo.args = {
  label: 'Unattested',
  status: 'tertiary',
  icon: 'primaryInfo',
};

TertiaryBackgroundSecondaryInfo.args = {
  label: 'Unattested',
  status: 'tertiary',
  icon: 'secondaryInfo',
};

TertiaryNoIcon.args = {
  label: 'Raid Guild',
  status: 'tertiary',
};
