import * as React from 'react';
import { As, Button, ButtonProps, HStack, Icon, Text } from '@chakra-ui/react';

interface NavButtonProps extends ButtonProps {
  icon: As;
  label: string;
  active?: boolean;
  linkTo?: string;
}

export const NavButton = ({
  icon,
  label,
  active,
  ...buttonProps
}: NavButtonProps) => {
  return (
    <Button
      // variant="ghost"
      variant="ghost"
      justifyContent="start"
      color="gray.800"
      transition="all 100ms ease-in-out"
      backgroundColor={active ? 'gray.50' : 'transparent'}
      _hover={{ bgColor: 'gray.100' }}
      width="100%"
      {...buttonProps}
    >
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" color="subtle" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
};
