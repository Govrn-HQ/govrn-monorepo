import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Story } from '@storybook/react';
import { GovrnCta, GovrnCtaProps } from '../..';

export default {
  title: 'Components/Molecules/GovrnCta',
  component: GovrnCta,
};

const Template: Story<GovrnCtaProps> = args => <GovrnCta {...args} />;

export const Default = Template.bind({});

const ButtonChildren = () => (
  <>
    <Button variant="primary">Report Your First Contribution</Button>
    <Button variant="secondary">Learn More About Kevin Malone</Button>
  </>
);

export const WithTwoButtons = (args: GovrnCtaProps) => (
  <Box backgroundColor="gray.50">
    <Box padding={10}>
      <GovrnCta {...args} children={<ButtonChildren />} />
    </Box>
  </Box>
);

WithTwoButtons.args = {
  heading: `It's contribution time!`,
  emoji: '⚡',
  copy: 'Record a contribution, then try attributing it to a DAO or minting it 😉',
};
