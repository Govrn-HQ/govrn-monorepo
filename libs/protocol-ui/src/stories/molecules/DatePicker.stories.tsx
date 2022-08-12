import React from 'react';
import { Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { DatePicker, DatePickerProps } from '../..';

export default {
  title: 'Components/Molecules/DatePicker',
  component: DatePicker,
};

const localForm = useForm();

const Template: Story<DatePickerProps> = args => (
  <DatePicker {...args} localForm={localForm} />
);

const Default = Template.bind({});

Default.args = {
  name: 'name',
  label: 'label of datepicker',
  localForm: { control: { type: 'text' }, formState: { errors: {} } },
};

export { Default, WithTip };
