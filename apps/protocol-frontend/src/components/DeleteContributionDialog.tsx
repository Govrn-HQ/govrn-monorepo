import { useRef } from 'react';
import {FiTrash2 } from 'react-icons/fi';
import {UIUser} from '@govrn/ui-types';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogContent,
    AlertDialogOverlay,
    IconButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react';

  
interface DeleteContributionDialogProps {
  row: string;
  userData: UIUser;
  deleteContribution: (string) => void;
  DialogSize : string;
}

const  DeleteContributionDialog = ({
    row,
    userData,
    deleteContribution,
    DialogSize,
    }:DeleteContributionDialogProps) => {

    const { isOpen, onOpen,  onClose } = useDisclosure()
    const cancelRef = useRef<HTMLButtonElement>(null);

    const handleDeleteContribution = async (contribution_id: number | string) => { 
      console.log(contribution_id)
      const y = await deleteContribution(contribution_id)
  };
  
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
           onClick={onOpen}
        
        />
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          size = {DialogSize}
        >
          <AlertDialogOverlay >
            <AlertDialogContent bgColor="brand.primary.50" color="gray.800">
            
              <AlertDialogBody mt='20px'>
                Are you sure you want to delete this contribution? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button 
                 ref={cancelRef} 
                 onClick={onClose}>
                  Cancel
                </Button>

                <Button 
                 colorScheme='red' 
                 color="brand.primary.600"
                 backgroundColor="brand.primary.100"
                 transition="all 100ms ease-in-out"
                 _hover={{ bgColor: 'brand.primary.200' }}
                 onClick={() => handleDeleteContribution(row.original.id)} ml={3}> 
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