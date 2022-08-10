import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Divider, Flex, HStack, Stack } from '@chakra-ui/react';
import {
  FiBarChart2,
  FiCheckSquare,
  FiHome,
  FiPlusSquare,
  FiTwitter,
  FiUsers,
} from 'react-icons/fi';
import Logo from './Logo';
import NavButton from './NavButton';
import ConnectWallet from './ConnectWallet';
import { FaDiscord } from 'react-icons/all';

const Sidebar = () => {
  const location = useLocation();

  return (
    <Flex
      alignItems="flex-start"
      direction="column"
      flex="1"
      bg="white"
      overflowY="auto"
      boxShadow="sm"
      position="fixed"
      top="0%"
      left="0%"
      height="100%"
      minHeight="100vh"
      width="20vw"
      paddingY={{ base: '6', sm: '8' }}
      paddingX={{ base: '4', sm: '6' }}
      zIndex="2"
      overflowX="auto"
      css={{
        // Firefox
        'scrollbar-width': 'none',
        // Blink- and WebKit-based browsers
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Flex direction="column" gap="1" flex="2 2 auto" alignItems="center">
        <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
          <Link to="/">
            <Logo />
          </Link>

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
              <ConnectWallet showNetwork />
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
            <NavButton
              label="Discord"
              icon={FaDiscord}
              linkTo="https://discord.gg/3e36ZHU5aG"
            />
            <NavButton
              label="Twitter"
              icon={FiTwitter}
              linkTo="https://twitter.com/govrnHQ"
            />
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
