import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { GovrnCta, GovrnCtaProps } from '../..';

export default {
  title: 'Components/Molecules/GovrnCta',
  component: GovrnCta,
};

const Buttons = [
  <Button variant="primary">Report Your First Contribution</Button>,
  <Button variant="secondary">Learn More About Kevin Malone</Button>,
  <Button variant="tertiary">Third Call to Action</Button>,
];

export const NoButtons = (args: GovrnCtaProps) => (
  <Box backgroundColor="gray.50">
    <Box padding={10}>
      <GovrnCta {...sharedArgs} />
    </Box>
  </Box>
);

export const OneButton = (args: GovrnCtaProps) => (
  <Box backgroundColor="gray.50">
    <Box padding={10}>
      <GovrnCta {...sharedArgs} children={Buttons.slice(0, 1)} />
    </Box>
  </Box>
);

export const TwoButtons = (args: GovrnCtaProps) => (
  <Box backgroundColor="gray.50">
    <Box padding={10}>
      <GovrnCta {...sharedArgs} children={Buttons.slice(0, 2)} />
    </Box>
  </Box>
);

export const ThreeButtons = (args: GovrnCtaProps) => (
  <Box backgroundColor="gray.50">
    <Box padding={10}>
      <GovrnCta {...sharedArgs} children={Buttons.slice(0, 3)} />
    </Box>
  </Box>
);

const sharedArgs = {
  heading: `It's contribution time!`,
  emoji: '⚡',
  copy: 'Record a contribution, then try attributing it to a DAO or minting it 😉',
};
