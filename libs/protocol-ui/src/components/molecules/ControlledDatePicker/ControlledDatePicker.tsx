import React, { SyntheticEvent } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';
import { Box, Stack } from '@chakra-ui/react';
import FormLabel from '../../atoms/FormLabel';
import HelperText from '../../atoms/HelperText';
import ControlledDatePickerButton from './ControlledDatePickerButton';

export interface ControlledDatePickerProps extends ReactDatePickerProps {
  defaultValue?: Date[] | Date | null | undefined;
  onChange: (
    dates: Date[] | [Date | null, Date | null] | null,
    event: SyntheticEvent<Date, Event> | undefined,
  ) => void;
  maxDate?: Date | null | undefined;
  disabled?: boolean;
}

const ControlledDatePicker: React.FC<ControlledDatePickerProps> = ({
  defaultValue,
  onChange,
  maxDate,
  disabled,
  ...props
}: ControlledDatePickerProps) => {
  console.log('disabled in datepicker', disabled);
  return (
    <Box my={2}>
      <ReactDatePicker
        selected={defaultValue}
        selectsRange
        onChange={onChange}
        customInput={<ControlledDatePickerButton buttonDisabled={disabled} />}
        maxDate={maxDate}
        {...props}
      />
    </Box>
  );
};

export default ControlledDatePicker;
