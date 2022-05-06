import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  Heading,
  Link as ChakraLink,
  Container,
  Text,
  VisuallyHidden,
  Button,
  Icon,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useClipboard,
  // useDisclosure,
} from '@chakra-ui/react';
import {
  FaCopy,
  FaRegSun,
  FaCaretDown,
  FaRegTimesCircle,
} from 'react-icons/fa';
// import Logo from '@/components/Logo';
// import { useInjectedProvider } from '../contexts/InjectedProviderContexts';
// import { truncateAddress } from '../utils/helpers/general';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
      // minWidth="100vw"
      // position="fixed" // can make fixed if we need but will
      // top="0"
      // zIndex="1000"
      flex="1"
      backgroundColor="white"
      boxShadow="sm"
      height="10vh"
      paddingY={12}
    >
      <Flex
        direction="row"
        justifyContent="space-between"
        align="center"
        // width={['100vw', '100vw', '100vw', '100vw']}
        paddingX={12}
      >
        <Link to="/">
          <ChakraLink>
            <Flex direction="row" alignItems="center">
              <VisuallyHidden>
                <Heading as="h1">Govrn</Heading>
              </VisuallyHidden>
              <Logo />
            </Flex>
          </ChakraLink>
        </Link>
        <HStack>
          <Button
            variant="outline"
            color="brand.primary.600"
            borderColor="brand.primary.600"
            border="1px solid"
          >
            Connect Wallet
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
