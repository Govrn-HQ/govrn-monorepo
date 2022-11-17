import React from 'react';
import { Story } from '@storybook/react';
import { Textarea, TextareaProps } from '../..';

export default {
  title: 'Components/Molecules/Textarea',
  component: Textarea,
};

const Template: Story<TextareaProps> = args => <Textarea {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'name',
  label: 'Text area label',
  placeholder: 'Describe Contribution',
  localForm: { register: () => null, formState: { errors: {} } },
};
