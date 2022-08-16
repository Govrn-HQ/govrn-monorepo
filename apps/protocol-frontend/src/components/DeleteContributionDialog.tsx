import { useRef, Dispatch, SetStateAction } from 'react';
import { useUser } from '../contexts/UserContext';
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

const DeleteContributionDialog = (props: {
  dialog: DialogProps;
  setDialog: Dispatch<SetStateAction<DialogProps>>;
}) => {
  const { dialog, setDialog } = props;

  const { onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const { deleteContribution } = useUser();

  const deleteContrib = async (contribution_id: number) => {
    await deleteContribution(contribution_id);
  };

  const onDelete = (onConfirm: boolean, contribution_id: number) => {
    if (onConfirm) {
      setDialog({ ...dialog, isOpen: false });
      deleteContrib(contribution_id);
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
            >
              Cancel
            </Button>

            <Button
              colorScheme="red"
              transition="all 100ms ease-in-out"
              _hover={{ bgColor: 'brand.primary.200' }}
              ml={3}
              onClick={() =>
                onDelete(!dialog.onConfirm, dialog.contribution_id)
              }
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
