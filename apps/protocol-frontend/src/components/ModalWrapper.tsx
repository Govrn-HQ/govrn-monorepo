import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  BoxProps,
} from '@chakra-ui/react';
import { OverlayContextType, GovrnModals } from '../contexts/OverlayContext';
import React from 'react';

export interface ModalWrapperProps extends BoxProps {
  name: keyof GovrnModals;
  title: string;
  content: React.ReactNode;
  titleColor?: string;
  bgColor?: string;
  closeButtonColor?: string;
  size?: string;
  localOverlay: OverlayContextType;
  isOpen?: boolean;
  onClose?: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  name,
  title,
  content,
  isOpen,
  onClose,
  size,
  localOverlay,
  ...props
}: ModalWrapperProps) => {
  const { modals, setModals } = localOverlay;

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
      <ModalContent background={props.bgColor ?? 'white'} minWidth="20vw">
        <ModalHeader
          paddingBottom={0}
          color={props.color ? props.color : 'gray.800'}
        >
          {title}
        </ModalHeader>
        <ModalCloseButton color={props.closeButtonColor ?? 'gray.800'} />
        <ModalBody paddingBottom={8}>{content}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
