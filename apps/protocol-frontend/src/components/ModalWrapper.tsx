import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

interface Props {
  title: string;
  content: React.ReactElement;
  size?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const ModalWrapper: React.FC<Props> = (props) => {
  const { title, content, size, isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size || '2xl'}>
      <ModalOverlay />
      <ModalContent background="gray.700" minWidth="20vw" paddingY={8}>
        <ModalHeader color="white">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{content}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
