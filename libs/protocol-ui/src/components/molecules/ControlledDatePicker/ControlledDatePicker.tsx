import React, { SyntheticEvent } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';
import { Box, Stack } from '@chakra-ui/react';
import FormLabel from '../../atoms/FormLabel';
import HelperText from '../../atoms/HelperText';
import ControlledDatePickerButton from './ControlledDatePickerButton';

export interface ControlledDatePickerProps extends ReactDatePickerProps {
  defaultValue?: Date | null | undefined;
  onChange: (
    date: Date,
    // date: Date | [Date | null, Date | null] | null,
    event: SyntheticEvent<Date, Event> | undefined,
  ) => void;
  maxDate?: Date | null | undefined;
}

const ControlledDatePicker: React.FC<ControlledDatePickerProps> = ({
  defaultValue,
  onChange,
  maxDate,
  ...props
}: ControlledDatePickerProps) => {
  return (
    <Box my={2}>
      <ReactDatePicker
        selected={defaultValue}
        onChange={onChange}
        customInput={<ControlledDatePickerButton />}
        maxDate={maxDate}
        {...props}
      />
    </Box>
  );
};

export default ControlledDatePicker;
