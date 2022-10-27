import React from 'react';
import {
  Button,
  ButtonProps,
  forwardRef,
  ComponentWithAs,
} from '@chakra-ui/react';
import { HiOutlineCalendar } from 'react-icons/hi';

export type ControlledDatePickerButtonProps = ButtonProps & {
  value?: React.ReactNode;
  onClick?: () => void;
  ref?: HTMLInputElement;
  buttonDisabled?: boolean;
};

export type CustomDatePickerButton = ComponentWithAs<
  'button',
  ControlledDatePickerButtonProps
> & {
  Button: typeof Button;
};

const ControlledDatePickerButton = forwardRef<
  ControlledDatePickerButtonProps,
  'button'
>(({ value, onClick, buttonDisabled }, ref) => {
  return (
    <Button
      onClick={onClick}
      ref={ref}
      bgColor="white"
      color="gray.700"
      transition="all 0.125s"
      _hover={{ color: 'gray.700', bgColor: 'gray.100' }}
      fontWeight="normal"
      variant="outline"
      rightIcon={<HiOutlineCalendar />}
      disabled={buttonDisabled}
      width="100%"
    >
      {value}
    </Button>
  );
});

export default ControlledDatePickerButton;
