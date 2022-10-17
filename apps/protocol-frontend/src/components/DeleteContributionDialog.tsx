import { useRef, Dispatch, SetStateAction, useState } from 'react';
import { DialogProps } from './ContributionsTable';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useContributionDelete } from '../hooks/useContributionDelete';

const DeleteContributionDialog = (props: {
  dialog: DialogProps;
  setDialog: Dispatch<SetStateAction<DialogProps>>;
}) => {
  const { dialog, setDialog } = props;

  const { onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [deleteing, setDeleting] = useState(false);

  const {
    mutateAsync: deleteContribution,
    isLoading: deleteContributionIsLoading,
  } = useContributionDelete();

  const onDelete = async (onConfirm: boolean, contributionId: number) => {
    if (onConfirm) {
      setDeleting(true);
      await deleteContribution(contributionId);
      setDialog({ ...dialog, isOpen: false });
      setDeleting(false);
    }
  };

  return (
    <AlertDialog
      isOpen={dialog.isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent bgColor="white" color="gray.800">
          <AlertDialogBody mt="20px">{dialog.title}</AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              onClick={() => setDialog({ ...dialog, isOpen: false })}
              isLoading={deleteContributionIsLoading}
            >
              Cancel
            </Button>

            <Button
              colorScheme="red"
              transition="all 100ms ease-in-out"
              _hover={{ bgColor: 'brand.primary.200' }}
              ml={3}
              onClick={() => onDelete(!dialog.onConfirm, dialog.contributionId)}
              data-testid="deleteContributionConfirm-test"
              isLoading={deleteing}
            >
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DeleteContributionDialog;
