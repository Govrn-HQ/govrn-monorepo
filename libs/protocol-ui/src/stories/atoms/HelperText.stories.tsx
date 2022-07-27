import { Story } from '@storybook/react';
import React from 'react';
import { HelperText, HelperTextProps} from '../..';


export default {
    title: 'Components/Atoms/HelperText',
    component: HelperText,
    argTypes: {
        tipText: {
            control: {type: 'text'},
        },
    },
}

const Template: Story<HelperTextProps> = (args) => <HelperText {...args}/>;

const Default = Template.bind({})
Default.args = {
    tipText: 'Some helper text'
};

export {Default};