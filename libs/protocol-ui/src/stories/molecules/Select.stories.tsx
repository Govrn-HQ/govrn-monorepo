import React from 'react';
import { Story } from '@storybook/react';
import { Select, SelectProps } from '../..';

export default {
    title: 'Components/Molecules/Select',
    component: Select,
  
}

const Template: Story<SelectProps> = (args) => <Select {...args} />;


export const Default = Template.bind({});

Default.args = {
    name: 'name',
    label: 'Select an option',
    options: [
            {label:'Govrn',
            value: 'Govrn'
            },
            {label:'MGD',
            value: 'MGD'
            },
        ],
    variant: 'filled',
    localForm: {control: {type: 'text'}, formState: { errors: {} } },
    
};