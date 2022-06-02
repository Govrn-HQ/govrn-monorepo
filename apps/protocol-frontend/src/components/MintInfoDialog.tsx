import { useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

interface MintInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  totalContributions: number;
  mintHandler: () => void;
}

const MintInfoDialog = ({
  isOpen,
  onClose,
  totalContributions,
  mintHandler,
}: MintInfoDialogProps) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay background="white">
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold" color="gray.800">
            Mint {totalContributions} Contributions
          </AlertDialogHeader>

          <AlertDialogBody>
            Click to proceed with minting {totalContributions} Contributions
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" onClick={mintHandler} ml={3}>
              Mint
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default MintInfoDialog;
