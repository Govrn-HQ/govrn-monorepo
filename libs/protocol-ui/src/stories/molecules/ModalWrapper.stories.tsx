import { Story } from '@storybook/react';
import React from 'react';
import { Text } from '@chakra-ui/react';
import { ModalWrapper, ModalWrapperProps } from '../../';
import { useOverlay } from '../../../../../apps/protocol-frontend/src/contexts/OverlayContext';

export default {
  title: 'Components/Molecules/ModalWrapper',
  component: ModalWrapper,
};

const Default = (args: ModalWrapperProps) => {
  const { setModals } = useOverlay();
  return <ModalWrapper {...args} localOverlay={localOverlay} />;
};

Default.args = {
  name: 'TextareaModal',
  title: 'Describe Contribution',
  content: <Text>This is the modal content.</Text>,
  size: '2xl',
  titleColor: 'gray',
  bgColor: 'gray',
};

export { Default };
