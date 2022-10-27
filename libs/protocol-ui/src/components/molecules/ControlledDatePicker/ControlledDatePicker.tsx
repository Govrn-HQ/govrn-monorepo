import React, { SyntheticEvent } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box } from '@chakra-ui/react';
import FormLabel from '../../atoms/FormLabel';
import HelperText from '../../atoms/HelperText';
import ControlledDatePickerButton from './ControlledDatePickerButton';

export interface ControlledDatePickerProps extends ReactDatePickerProps {
  onChange: (
    date: Date[] | Date | [Date | null, Date | null] | null,
    event: SyntheticEvent<Date, Event> | undefined,
  ) => void;
  startDate: Date | null | undefined;
  endDate: Date | null | undefined;
  maxDate?: Date | null | undefined;
}

const ControlledDatePicker: React.FC<ControlledDatePickerProps> = ({
  onChange,
  startDate,
  endDate,
  maxDate,
  ...props
}: ControlledDatePickerProps) => {
  return (
    <Box my={2}>
      <ReactDatePicker
        selectsRange
        onChange={onChange}
        customInput={<ControlledDatePickerButton />}
        startDate={startDate}
        endDate={endDate}
        maxDate={maxDate}
        {...props}
      />
    </Box>
  );
};

export default ControlledDatePicker;
