import React from 'react';
import { useOverlay } from '../contexts/OverlayContext';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

interface ModalWrapperProps {
  name: string; // name of the modal for use throughout app
  title: string;
  content: React.ReactElement;
  size?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  name,
  title,
  content,
  size,
}) => {
  const { modals, setModals } = useOverlay();

  const handleCloseModal = () => {
    setModals({ ...modals, [name]: false });
  };

  return (
    <Modal
      isOpen={modals[name]}
      onClose={handleCloseModal}
      size={size || '2xl'}
    >
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
