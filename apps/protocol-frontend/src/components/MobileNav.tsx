import { Link, useLocation } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  HStack,
  Text,
  Heading,
  Stack,
  Flex,
  Divider,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiBarChart2,
  FiCheckSquare,
  FiHome,
  FiUsers,
  FiPlusSquare,
  FiDisc,
  FiTwitter,
} from 'react-icons/fi';
import Logo from './Logo';
import { NavButton } from './NavButton';
import ConnectWallet from './ConnectWallet';

interface MobileNavProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ children, isOpen, onClose }: MobileNavProps) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{ duration: 0.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
            <DrawerOverlay />
            <DrawerContent bgColor="white">
              <DrawerHeader>
                <Flex direction="row" justify="space-between">
                  <Stack />
                  <HStack>
                    <DrawerCloseButton
                      position="inherit"
                      marginTop={4}
                      marginRight={3}
                      // position="fixed"
                      // top={4}
                      // right={4}
                      size="4"
                      _focus={{ outline: 'none', bg: 'none' }}
                      _active={{ outline: 'none', bg: 'none' }}
                      color="brand.primary.500"
                    />
                  </HStack>
                </Flex>
              </DrawerHeader>
              <DrawerBody flex="2 2 auto" marginBottom={4}>
                <Flex
                  height="100%"
                  alignItems="flex-start"
                  direction="column"
                  flex="1"
                >
                  <Stack
                    spacing={{ base: '10' }}
                    shouldWrapChildren
                    width="100%"
                  >
                    <Stack spacing="1">
                      <Link to="/">
                        <NavButton label="Home" icon={FiHome} />
                      </Link>
                      <Link to="/report">
                        <NavButton
                          label="Report"
                          icon={FiPlusSquare}
                          active={location.pathname.includes('/report')}
                        />
                      </Link>
                      <Link to="/contributions">
                        <NavButton
                          label="Contributions"
                          icon={FiBarChart2}
                          active={location.pathname.includes('/contributions')}
                        />
                      </Link>
                      <Link to="/attestations">
                        <NavButton
                          label="Attestations"
                          icon={FiCheckSquare}
                          active={location.pathname.includes('/attestations')}
                        />
                      </Link>

                      <Link to="/profile">
                        <NavButton
                          label="Profile"
                          icon={FiUsers}
                          active={location.pathname.includes('/profile')}
                        />
                      </Link>
                      <HStack>
                        <ConnectWallet />
                      </HStack>
                    </Stack>
                  </Stack>
                  <Flex
                    direction="column"
                    gap="1"
                    justifyContent="flex-end"
                    width="100%"
                    flex="1 1 auto"
                  >
                    <Divider />
                    <Stack shouldWrapChildren>
                      <NavButton label="Discord" icon={FiDisc} />
                      <NavButton label="Twitter" icon={FiTwitter} />
                    </Stack>
                  </Flex>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
