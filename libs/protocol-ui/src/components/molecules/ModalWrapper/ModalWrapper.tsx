import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  BoxProps,
} from '@chakra-ui/react';

export interface ModalWrapperProps extends BoxProps {
  title: string;
  body: React.ReactNode;
  titleColor?: string;
  bgColor?: string;
  isOpen: boolean;
  onClose: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  title,
  body,
  isOpen,
  onClose,

  ...props
}: ModalWrapperProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent
        background={props.bgColor ? props.bgColor : 'gray.800'}
        minWidth="20vw"
        paddingY={8}
      >
        <ModalHeader color={props.color ? props.color : 'gray.800'}>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
