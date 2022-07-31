import React from 'react';
import { Story } from '@storybook/react';
import { DatePicker, DatePickerProps } from '../..';

export default {
    title: 'Components/Molecules/DatePciker',
    component: DatePicker,
  
}

const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />;


export const Default = Template.bind({});

Default.args = {
    name: 'name',
    label: 'label of datepicker',
    localForm: {control: {type: 'text'}, formState: { errors: {} } },
    
};