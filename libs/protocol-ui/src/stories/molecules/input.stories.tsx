import React from 'react';
import { Story } from '@storybook/react';
import { Input, InputProps } from '../..';

export default {
  title: 'Components/Molecules/Input',
  component: Input,
};
const Template: Story<InputProps> = args => <Input {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  label: 'Contribution Name',
  placeholder: 'Attended DAO All Hands Meeting',
  variant: 'filled',
  localForm: { register: () => null, formState: { errors: {} } },
};

export const FilledWithErrors = Template.bind({});

FilledWithErrors.args = {
  name: 'name',
  label: 'Contribution Name',
  placeholder: 'Attended DAO All Hands Meeting',
  variant: 'filled',
  localForm: {
    register: () => null,
    formState: {
      errors: {
        name: {
          message: 'Contribution Name is required.',
        },
      },
    },
  },
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Contribution Name',
  placeholder: 'Attended DAO All Hands Meeting',
  variant: 'outline',
  localForm: { register: () => null, formState: { errors: {} } },
};

export const OutlineWithErrors = Template.bind({});

OutlineWithErrors.args = {
  name: 'name',
  label: 'Contribution Name',
  placeholder: 'Attended DAO All Hands Meeting',
  variant: 'outline',
  localForm: {
    register: () => null,
    formState: {
      errors: {
        name: {
          message: 'Contribution Name is required.',
        },
      },
    },
  },
};
