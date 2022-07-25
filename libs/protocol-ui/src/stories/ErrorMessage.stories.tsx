import { Story } from '@storybook/react';
import React from 'react';
import { ErrorMessage, ErrorMessageProps } from '../components/atoms/';

export default {
  title: 'Components/Atoms/ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'radio' },
    },
  },
};

const Template: Story<ErrorMessageProps> = (args) => <ErrorMessage {...args} />;

const Default = Template.bind({});
Default.args = {
  errorMessage: 'Contribution Name is required.',
};

export { Default };
