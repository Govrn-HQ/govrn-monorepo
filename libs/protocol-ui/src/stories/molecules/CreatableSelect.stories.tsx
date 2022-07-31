import { Story } from '@storybook/react';
import React from 'react';
import { CreatableSelect, CreatableSelectProps} from '../../';


export default {
    title: 'Components/Molecules/CreatableSelect',
    component: CreatableSelect,
  
}

const Template: Story<CreatableSelectProps> = (args) => <CreatableSelect {...args} />;


export const Default = Template.bind({});

Default.args = {
    label: 'Select options below',
    placeholder: 'Select options',
    options: [{label:'Govrn',value: 'Govrn'},{label:'MGD',value: 'MGD'}], 
    
};