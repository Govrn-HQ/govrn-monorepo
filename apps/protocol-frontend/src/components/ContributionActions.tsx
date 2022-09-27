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
    </Menu>
  );
};

export default ContributionActions;
