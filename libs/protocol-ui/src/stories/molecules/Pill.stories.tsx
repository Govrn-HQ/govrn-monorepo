import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Pill, PillProps } from '../..';

export default {
  title: 'Components/Molecules/Pill',
  component: Pill,
};

export const OneButton = (args: GovrnShowcaseProps) => (
  <Box backgroundColor="gray.50">
    <Box padding={10}>
      <GovrnShowcase {...sharedArgs} children={Buttons.slice(0, 1)} />
    </Box>
  </Box>
);

export const TwoButtons = (args: GovrnShowcaseProps) => (
  <Box backgroundColor="gray.50">
    <Box padding={10}>
      <GovrnShowcase {...sharedArgs} children={Buttons.slice(0, 2)} />
    </Box>
  </Box>
);

const sharedArgs = {
  emoji: '🙌',
  copy: 'Go mint contributions so we can show your data',
};
