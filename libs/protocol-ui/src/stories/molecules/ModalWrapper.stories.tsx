import { Story } from '@storybook/react';
import React from 'react';
import { ModalWrapper, ModalWrapperProps } from '../../';
import { Textarea } from '../../components/molecules/Textarea/Textarea';
//import {useOverlay} from '../../../../../apps/protocol-frontend/src/contexts/OverlayContext';

export default {
  title: 'Components/Molecules/ModalWrapper',
  component: ModalWrapper,
};

const Template: Story<ModalWrapperProps> = args => <ModalWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'TextareaModal',
  title: 'Describe Contribution',
  content: (
    <Textarea
      name="name"
      label="Textarea label"
      placeholder="Describe contribution"
    />
  ),
  isOpen: false,
  size: '2xl',
  titleColor: 'gray',
  bgColor: 'gray',
  localOverlay: 'Modal Overlay',
};
