import { Story } from '@storybook/react';
import React from 'react';
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

const Template: Story<ErrorMessageProps> = (args) => <ErrorMessage {...args} />;

const Default = Template.bind({});
Default.args = {
  errorMessage: 'Contribution Name is required.',
};

export { Default };
