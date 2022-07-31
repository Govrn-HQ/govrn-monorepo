import { Story } from '@storybook/react';
import React from 'react';
import { ModalWrapper, ModalWrapperProps } from '../../';
// import { Modal } from '@chakra-ui/react';

export default {
  title: 'Components/Molecules/ModalWrapper',
  component: ModalWrapper,

};

const Template: Story<ModalWrapperProps> = (args) => <ModalWrapper {...args}/> ;


export const Default = Template.bind({});

Default.args = {
  name: 'name',
  title: 'Modal Title',
  content: 'This is the content of this Modal' ,
  isOpen: false,
  size: '2xl',
  titleColor: 'gray',
  bgColor: 'gray',
  localOverlay: 'Modal Overlay' ,
 

};
