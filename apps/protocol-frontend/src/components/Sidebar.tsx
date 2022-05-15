import { Link, useLocation } from 'react-router-dom';

import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Progress,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import {
  FiBarChart2,
  FiBookmark,
  FiCheckSquare,
  FiHelpCircle,
  FiHome,
  FiSearch,
  FiSettings,
  FiUsers,
  FiDisc,
  FiTwitter,
} from 'react-icons/fi';

import Logo from './Logo';
import { NavButton } from './NavButton';
import ConnectWallet from './ConnectWallet';

const Sidebar = () => {
  const location = useLocation();

  return (
    <Flex
      bg="white"
      overflowY="auto"
      boxShadow="sm"
      position="fixed"
      top="0%"
      left="0%"
      height="100%"
      maxW={{ base: 'full', sm: 'xs' }}
      paddingY={{ base: '6', sm: '8' }}
      paddingX={{ base: '4', sm: '6' }}
    >
      <Stack justify="space-between" spacing="1">
        <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
          <Link to="/">
            <Logo />
          </Link>
          <Stack spacing="1">
            <Link to="/">
              <NavButton label="Home" icon={FiHome} />
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

        <Stack spacing={{ base: '5', sm: '6' }}>
          <Stack spacing="1">
            <Divider />
            <NavButton label="Discord" icon={FiDisc} />
            <NavButton label="Twitter" icon={FiTwitter} />
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Sidebar;
