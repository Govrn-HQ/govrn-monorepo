import { Button, Menu, MenuButton, Icon } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';

const ContributionActions = () => {
  return (
    <Menu offset={[0, 4]} placement="bottom-end" autoSelect={false}>
      <MenuButton
        as={Button}
        rightIcon={<Icon as={FiChevronDown} color="brand.primary.600" />}
        color="brand.primary.600"
        backgroundColor="brand.primary.50"
        transition="all 100ms ease-in-out"
        _hover={{ bgColor: 'brand.primary.100' }}
        width="100%"
      ></MenuButton>
      {/* <MenuList backgroundColor="gray.800" minWidth="none">
        <MenuItem
          onClick={copyAddress.onCopy}
          _hover={{ backgroundColor: 'gray.600' }}
        >
          <HStack spacing={2}>
            <Icon as={FiCopy} color="white" />
            <Box color="white">
              {copyAddress.hasCopied ? 'Copied' : 'Copy Address'}
            </Box>
          </HStack>
        </MenuItem>
        <MenuItem
          onClick={() => disconnect()}
          _hover={{ backgroundColor: 'gray.600' }}
        >
          <HStack spacing={2}>
            <Icon as={FiXCircle} color="red.300" />
            <Box color="red.300">Sign Out</Box>
          </HStack>
        </MenuItem>
      </MenuList> */}
    </Menu>
  );
};

export default ContributionActions;
