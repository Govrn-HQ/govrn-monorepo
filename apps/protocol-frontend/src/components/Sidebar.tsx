import { TWITTER_LINK, DISCORD_LINK, FEEDBACK_LINK } from '../utils/constants';
import { Link, useLocation } from 'react-router-dom';
import {
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  FiBarChart2,
  FiCheckSquare,
  FiHome,
  FiPlusSquare,
  FiTwitter,
  FiUsers,
  FiMessageSquare,
  FiChevronDown,
  FiGitBranch,
} from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import Logo from './Logo';
import NavButton from './NavButton';
import ConnectWallet from './ConnectWallet';
import { useUser } from '../contexts/UserContext';
import { useDaosList } from '../hooks/useDaosList';

const Sidebar = () => {
  const location = useLocation();
  const { userData } = useUser();

  const { data: daosListData } = useDaosList({
    where: { users: { some: { user_id: { equals: userData?.id } } } }, // show only user's DAOs
  });

  console.log('daos list data: ', daosListData);

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
        scrollbarWidth: 'none',
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
            <Link to="/dashboard">
              <NavButton
                label="Home"
                icon={FiHome}
                active={location.pathname.includes('/dashboard')}
              />
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
                dataTestId="contributionsSidebar-btn"
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
            {daosListData && daosListData.length > 0 ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<FiChevronDown />}
                  variant="ghost"
                  justifyContent="start"
                  color="gray.800"
                  transition="all 100ms ease-in-out"
                  backgroundColor="transparent"
                  _hover={{ bgColor: 'gray.100' }}
                  width="100%"
                >
                  <HStack spacing="3">
                    <Icon as={FiGitBranch} boxSize="6" color="subtle" />
                    <Text>DAOs</Text>
                  </HStack>
                </MenuButton>
                <MenuList>
                  {daosListData?.map(dao => (
                    <MenuItem>{dao.name}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
            ) : (
              <Link to="/daos">
                <NavButton
                  label="DAOs"
                  icon={FiGitBranch}
                  active={location.pathname.includes('/daos')}
                />
              </Link>
            )}
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
            <NavButton label="Discord" icon={FaDiscord} linkTo={DISCORD_LINK} />
            <NavButton label="Twitter" icon={FiTwitter} linkTo={TWITTER_LINK} />
            <NavButton
              label="Feedback"
              icon={FiMessageSquare}
              linkTo={FEEDBACK_LINK}
            />
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
