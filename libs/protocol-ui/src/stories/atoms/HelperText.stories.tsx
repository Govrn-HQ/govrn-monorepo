import { Story } from '@storybook/react';
import React from 'react';
import { FormControl, InputGroup } from '@chakra-ui/react';
import { HelperText, HelperTextProps } from '../..';

export default {
  title: 'Components/Atoms/HelperText',
  component: HelperText,
  argTypes: {
    tipText: {
      control: { type: 'text' },
    },
    color: { control: 'color' },
  },
};

const Template: Story<HelperTextProps> = (args) => (
  <FormControl>
    <HelperText {...args} />
  </FormControl>
);

const Default = Template.bind({});
Default.args = {
  tipText: 'Contribution Name is a short title for your Contribution.',
  color: 'black',
};

export { Default };
