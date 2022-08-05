import { useRef, useEffect} from 'react';
import { useUser} from '../contexts/UserContext';

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
  } from '@chakra-ui/react';


// }
// type prop = {
//   isOpen: boolean,
//   title: string
// };

const  DeleteContributionDialog = (props:any) => {

    const {dialog, setDialog} = props;
    console.log(dialog)
    console.log(dialog)
    console.log(dialog)
    
    const { deleteContribution } = useUser();

    const DeleteContribution = async (contribution_id: string) => { 
      const y = await deleteContribution(contribution_id);
      
    };

    const onDelete = (onConfirm: boolean, contribution_id: string) => {
      if (onConfirm){
        DeleteContribution(contribution_id)
      }
    }
    const { isOpen, onOpen,  onClose } = useDisclosure()
    const cancelRef = useRef<HTMLButtonElement>(null);

  
    return (
        
        <AlertDialog
          isOpen={dialog.isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          
          //size = {DialogSize}
        >
          <AlertDialogOverlay >
            <AlertDialogContent bgColor="white" color="gray.800">
            
              <AlertDialogBody mt='20px'>
                {dialog.title}
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button 
                 ref={cancelRef} 
                 //onClick={onClose}
                 onClick={() => setDialog({ ...dialog, isOpen: false })} 
                 >
                  Cancel
                </Button>

                <Button 
                 colorScheme='red' 
                 color="brand.primary.600"
                 backgroundColor="brand.primary.100"
                 transition="all 100ms ease-in-out"
                 _hover={{ bgColor: 'brand.primary.200' }}
                 ml={3}
                 onClick={()=>onDelete(!dialog.onConfirm, dialog.contribution_id)}
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
  