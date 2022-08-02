import { Story } from '@storybook/react';
import React from 'react';
import { FormControl } from '@chakra-ui/react';
import { ErrorMessage, ErrorMessageProps } from '../../';

export default {
  title: 'Components/Atoms/ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    errorMessage: {
      control: { type: 'text' },
    },
  },
};

const Template: Story<ErrorMessageProps> = (args) => (
  <FormControl isInvalid>
    <ErrorMessage {...args} />
  </FormControl>
);

const Default = Template.bind({});
Default.args = {
  errorMessage: 'Contribution Name is required.',
};

export { Default };
