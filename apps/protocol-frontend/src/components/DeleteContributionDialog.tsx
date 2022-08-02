import { useRef } from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    IconButton,
  } from '@chakra-ui/react'
  import { useUser } from '../contexts/UserContext';

  
interface DeleteContributionDialogProps {
  row: number;
  isOpen: boolean;
  onClose: ()=> void;
  DeleteContributionHandler: () => void;
}

const  DeleteContributionDialog = ({
  isOpen,
  onClose,
  DeleteContributionHandler,
  row,

}:DeleteContributionDialogProps) => {
    
    const cancelRef = useRef<HTMLButtonElement>(null);
    const {deleteContribution } = useUser();
  
    return (
      <>
        <IconButton
                  icon={<FiTrash2 fontSize="1rem" />}
                  variant="ghost"
                  color="gray.800"
                  disabled={
                    row.original.user.id !== userData?.id ||
                    row.original.status === 'minted'
                  }
                  aria-label="Delete Contribution"
                  onClick = {() => handleDeleteContribution(row.original.id)}
          />
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete Customer
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={onClose} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  };

  export default DeleteContributionDialog;