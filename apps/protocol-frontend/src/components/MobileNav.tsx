import { CloseButton, Flex } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

interface MobileNavProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const MobileNav = ({ children, isOpen, onClose }: MobileNavProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{ duration: 0.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Flex
            direction="column"
            width="100%"
            background="brand.darkblue"
            height="100vh"
            overflow="auto"
            position="absolute"
            top={0}
            left={0}
            zIndex={20}
            // paddingX={4}
            paddingY={4}
          >
            {children}
            <CloseButton pos="absolute" top={4} right={4} onClick={onClose} />
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
