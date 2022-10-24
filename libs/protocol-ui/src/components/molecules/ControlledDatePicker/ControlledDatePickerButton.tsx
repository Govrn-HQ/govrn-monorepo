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
>(({ value, onClick }, ref) => {
  return (
    <Button
      onClick={onClick}
      ref={ref}
      bgColor="gray.100"
      color="gray.700"
      transition="all 0.125s"
      _hover={{ color: 'gray.700', bgColor: 'gray.300' }}
      fontWeight="normal"
      variant="outline"
      rightIcon={<HiOutlineCalendar />}
    >
      {value}
    </Button>
  );
});

export default ControlledDatePickerButton;
