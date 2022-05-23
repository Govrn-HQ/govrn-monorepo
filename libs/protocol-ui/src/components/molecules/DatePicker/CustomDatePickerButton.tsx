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
    background="dark.400"
    fontWeight="normal"
    variant="outline"
  >
    {value}
  </Button>
));

export default CustomDatePickerButton;
