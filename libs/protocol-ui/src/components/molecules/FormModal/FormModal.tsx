import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  BoxProps,
} from '@chakra-ui/react';

export interface FormModalProps extends BoxProps {
  formTitle: string;
  formBody: React.ReactNode;
  bgColor?: string;
  isOpen: boolean;
  onClose: () => void;
}

const FormModal: React.FC<FormModalProps> = ({
  formTitle,
  formBody,
  isOpen,
  onClose,
  ...props
}: FormModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent
        background={props.bgColor ? props.bgColor : 'gray.100'}
        minWidth="20vw"
        paddingY={8}
      >
        <ModalHeader>{formTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{formBody}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FormModal;
