import { Meta } from '@storybook/react';
import type { StoryFn } from '@storybook/react';
import React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';

export default {
  title: 'Protocol UI: Govrn Component Library',
} as Meta;

const Template: StoryFn = () => (
  <Stack direction="row" justifyContent="center">
    <Stack align="center" spacing={8} marginY={10}>
      <Heading size="2xl" textAlign="center">
        Protocol UI: Govrn Component Library
      </Heading>
      <Text size="md" align="center" mb={5}>
        Use the sidebar to navigate to each component's Story.
      </Text>
    </Stack>
  </Stack>
);

export const GovrnComponentLibrary = Template.bind({});
