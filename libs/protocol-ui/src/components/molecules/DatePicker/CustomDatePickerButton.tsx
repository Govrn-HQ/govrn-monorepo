import React from 'react';
import {
  Button,
  ButtonProps,
  forwardRef,
  ComponentWithAs,
} from '@chakra-ui/react';

export type CustomDatePickerButtonProps = ButtonProps & {
  value?: React.ReactNode;
  onClick?: () => void;
  ref?: HTMLInputElement;
};

export type CustomDatePickerButton = ComponentWithAs<
  'button',
  CustomDatePickerButtonProps
> & {
  Button: typeof Button;
};

const CustomDatePickerButton = forwardRef<
  CustomDatePickerButtonProps,
  'button'
>(({ value, onClick }, ref) => (
  <Button
    onClick={onClick}
    ref={ref}
    bgColor="gray.100"
    color="gray.700"
    transition="all 0.125s"
    _hover={{ color: 'gray.700', bgColor: 'gray.300' }}
    fontWeight="normal"
    variant="outline"
  >
    {value}
  </Button>
));

export default CustomDatePickerButton;
