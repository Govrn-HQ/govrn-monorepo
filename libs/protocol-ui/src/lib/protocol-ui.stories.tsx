import { Story, Meta } from '@storybook/react';
import { ProtocolUi, ProtocolUiProps } from './protocol-ui';

export default {
  component: ProtocolUi,
  title: 'ProtocolUi',
} as Meta;

const Template: Story<ProtocolUiProps> = (args) => <ProtocolUi {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
