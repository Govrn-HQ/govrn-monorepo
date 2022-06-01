import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  Heading,
  Link as ChakraLink,
  VisuallyHidden,
  HStack,
} from '@chakra-ui/react';
import Logo from './Logo';
import ConnectWallet from './ConnectWallet';

const Header: React.FC = () => {
  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
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
          <ConnectWallet />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
