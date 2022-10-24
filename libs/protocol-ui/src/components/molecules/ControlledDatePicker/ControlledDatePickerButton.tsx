import React from 'react';
import {
  IconButton,
  IconButtonProps,
  forwardRef,
  ComponentWithAs,
} from '@chakra-ui/react';
import { HiOutlineCalendar } from 'react-icons/hi';

export type ControlledDatePickerButtonProps = IconButtonProps & {
  value?: React.ReactNode;
  onClick?: () => void;
  ref?: HTMLInputElement;
  buttonDisabled?: boolean;
};

export type CustomDatePickerButton = ComponentWithAs<
  'button',
  ControlledDatePickerButtonProps
> & {
  IconButton: typeof IconButton;
};

const ControlledDatePickerButton = forwardRef<
  ControlledDatePickerButtonProps,
  'button'
>(({ onClick, buttonDisabled }, ref) => {
  return (
    <IconButton
      onClick={onClick}
      ref={ref}
      bgColor="white"
      color="gray.700"
      transition="all 0.125s"
      _hover={{ color: 'gray.700', bgColor: 'gray.100' }}
      fontWeight="normal"
      variant="outline"
      aria-label="Open the DatePicker calendar"
      icon={<HiOutlineCalendar />}
      disabled={buttonDisabled}
    />
  );
});

export default ControlledDatePickerButton;
