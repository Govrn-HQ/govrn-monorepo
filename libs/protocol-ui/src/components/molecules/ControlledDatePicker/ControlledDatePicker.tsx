import React, { SyntheticEvent } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box } from '@chakra-ui/react';
import ControlledDatePickerButton from './ControlledDatePickerButton';

export interface ControlledDatePickerProps extends ReactDatePickerProps {
  onChange: (
    date: Date[] | Date | [Date | null, Date | null] | null,
    event: SyntheticEvent<Date, Event> | undefined,
  ) => void;
}

const ControlledDatePicker: React.FC<ControlledDatePickerProps> = ({
  onChange,
  ...props
}: ControlledDatePickerProps) => {
  return (
    <Box my={2}>
      <ReactDatePicker
        selectsRange
        onChange={onChange}
        customInput={<ControlledDatePickerButton />}
        {...props}
      />
    </Box>
  );
};

export default ControlledDatePicker;
