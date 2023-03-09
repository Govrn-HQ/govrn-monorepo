import { useRef } from 'react';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

const GovrnAlertDialog = ({
  title,
  isOpen,
  isLoading,
  onConfirm,
  onCancel,
}: {
  title: string | React.ReactNode;
  isOpen: boolean;
  isLoading: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
}) => {
  const { onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent bgColor="white" color="gray.800">
          <AlertDialogBody mt="20px">{title}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onCancel}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              transition="all 100ms ease-in-out"
              ml={3}
              onClick={onConfirm}
              data-testid="deleteContributionConfirm-test"
              isLoading={isLoading}
            >
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default GovrnAlertDialog;
