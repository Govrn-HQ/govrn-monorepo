import * as React from 'react';
import {
  As,
  Button,
  Link as ChakraLink,
  ButtonProps,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';

interface NavButtonProps extends ButtonProps {
  icon: As;
  label: string;
  active?: boolean;
  linkTo?: string;
  dataTestId?: string;
}

export const NavButton = ({
  icon,
  label,
  active,
  linkTo,
  dataTestId,
  ...buttonProps
}: NavButtonProps) => {
  return linkTo ? (
    <ChakraLink href={linkTo} isExternal>
      <Button
        variant="ghost"
        justifyContent="start"
        color="gray.800"
        transition="all 100ms ease-in-out"
        backgroundColor={active ? 'gray.50' : 'transparent'}
        _hover={{ bgColor: 'gray.100' }}
        width="100%"
        data-cy={dataTestId}
        {...buttonProps}
      >
        <HStack spacing="3">
          <Icon as={icon} boxSize="6" color="subtle" />
          <Text>{label}</Text>
        </HStack>
      </Button>
    </ChakraLink>
  ) : (
    <Button
      variant="ghost"
      justifyContent="start"
      color="gray.800"
      transition="all 100ms ease-in-out"
      backgroundColor={active ? 'gray.50' : 'transparent'}
      _hover={{ bgColor: 'gray.100' }}
      width="100%"
      data-cy={dataTestId}
      {...buttonProps}
    >
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" color="subtle" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
};

export default NavButton;
