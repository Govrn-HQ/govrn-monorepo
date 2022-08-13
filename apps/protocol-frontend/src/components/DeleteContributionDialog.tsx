import { useRef} from 'react';
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


const  DeleteContributionDialog = (props: any) => {

    const {dialog, setDialog} = props;
    
    const { onClose } = useDisclosure()
    const cancelRef = useRef<HTMLButtonElement>(null);
    
    const { deleteContribution } = useUser();


    const DeleteContribution = async (contribution_id: number) => { 
      const y = await deleteContribution(contribution_id);
      
    };

    const onDelete = (onConfirm: boolean, contribution_id: string) => {
      if (onConfirm){
        setDialog({ ...dialog, 
          isOpen: false,
         })
        DeleteContribution(Number(contribution_id))
      }
    }
   
    return (
        
        <AlertDialog
          isOpen={dialog.isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
  
        >
          <AlertDialogOverlay >
            <AlertDialogContent bgColor="white" color="gray.800">
            
              <AlertDialogBody mt='20px'>
                {dialog.title}
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button 
                 ref={cancelRef} 
                 onClick={() => setDialog({ ...dialog, isOpen: false })} 
                 >
                  Cancel
                </Button>

                <Button 
                 colorScheme='red' 
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
  