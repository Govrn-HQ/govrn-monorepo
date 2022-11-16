import { Link, useLocation } from 'react-router-dom';
import { TWITTER_LINK, DISCORD_LINK, FEEDBACK_LINK } from '../utils/constants';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiBarChart2,
  FiCheckSquare,
  FiHome,
  FiMessageSquare,
  FiPlusSquare,
  FiTwitter,
  FiUsers,
  FiGitBranch,
} from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import NavButton from './NavButton';
import ConnectWallet from './ConnectWallet';
import { useAccount } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import { useDaosList } from '../hooks/useDaosList';

interface MobileNavProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ children, isOpen, onClose }: MobileNavProps) => {
  const location = useLocation();
  const { userData } = useUser();
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();

  const { isLoading: daosListIsLoading, data: daosListData } = useDaosList({
    where: { users: { some: { user_id: { equals: userData?.id } } } }, // show only user's DAOs
  });
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
                      {isConnected && isAuthenticated && (
                        <Stack>
                          {!daosListIsLoading && daosListData && (
                            <Accordion allowToggle width="100%">
                              <AccordionItem border="none">
                                <AccordionButton
                                  margin="0"
                                  padding="0"
                                  as={Button}
                                  color="gray.800"
                                  transition="all 100ms ease-in-out"
                                  backgroundColor="transparent"
                                  _hover={{ bgColor: 'gray.100' }}
                                  width="100%"
                                  variant="ghost"
                                  justifyContent="start"
                                >
                                  <HStack spacing="3" paddingX={4} width="100%">
                                    <Icon
                                      as={FiGitBranch}
                                      boxSize="6"
                                      color="subtle"
                                    />
                                    <Text>DAOs</Text>
                                  </HStack>
                                  <AccordionIcon
                                    padding="0"
                                    marginRight={2}
                                    color="gray.800"
                                    backgroundColor="none"
                                  />
                                </AccordionButton>
                                <AccordionPanel paddingTop={0}>
                                  <Flex direction="column">
                                    {daosListData?.slice(0, 5).map(dao => (
                                      <Stack paddingLeft={8} key={dao.id}>
                                        <Link to={`/feature/dao/${dao.id}`}>
                                          <Text
                                            as="span"
                                            color="gray.800"
                                            transition="all 100ms ease-in-out"
                                            _hover={{
                                              fontWeight: 'medium',
                                              color: 'gray.900',
                                            }}
                                          >
                                            {dao.name}
                                          </Text>
                                        </Link>
                                      </Stack>
                                    ))}
                                    {daosListData?.length > 5 && (
                                      <Stack
                                        paddingLeft={8}
                                        transition="all 100ms ease-in-out"
                                        _hover={{
                                          fontWeight: 'medium',
                                          color: 'gray.900',
                                        }}
                                      >
                                        <Link to={`/feature/dao`}>
                                          <Text>...and more</Text>
                                        </Link>
                                      </Stack>
                                    )}
                                  </Flex>
                                </AccordionPanel>
                              </AccordionItem>
                            </Accordion>
                          )}
                        </Stack>
                      )}
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
                    <Divider marginTop={2} />
                    <Stack shouldWrapChildren>
                      <NavButton
                        label="Discord"
                        icon={FaDiscord}
                        linkTo={DISCORD_LINK}
                      />
                      <NavButton
                        label="Twitter"
                        icon={FiTwitter}
                        linkTo={TWITTER_LINK}
                      />
                      <NavButton
                        label="Feedback"
                        icon={FiMessageSquare}
                        linkTo={FEEDBACK_LINK}
                      />
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
