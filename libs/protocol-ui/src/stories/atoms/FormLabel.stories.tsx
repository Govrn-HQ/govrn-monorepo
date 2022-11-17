import { Story } from '@storybook/react';
import React from 'react';
import { FormLabel, FormLabelProps } from '../../';

export default {
  title: 'Components/Atoms/FormLabel',
  component: FormLabel,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    color: { control: 'color' },
  },
};

const Template: Story<FormLabelProps> = args => <FormLabel {...args} />;

const Default = Template.bind({});
Default.args = {
  label: 'DAO',
  color: 'gray.800',
};

export { Default };
