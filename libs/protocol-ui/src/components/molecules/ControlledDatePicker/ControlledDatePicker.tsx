import React, { SyntheticEvent } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';
import { Box, Stack } from '@chakra-ui/react';
import FormLabel from '../../atoms/FormLabel';
import HelperText from '../../atoms/HelperText';
import ControlledDatePickerButton from './ControlledDatePickerButton';

export interface ControlledDatePickerProps {
  name: string;
  label?: string;
  tip?: string;
  defaultValue?: Date | null | undefined;
  onChange: (
    date: Date | [Date | null, Date | null] | null,
    event: SyntheticEvent<Date, Event> | undefined,
  ) => void;
  maxDate?: Date | null | undefined;
}

const ControlledDatePicker: React.FC<ControlledDatePickerProps> = ({
  label,
  name,
  tip,
  defaultValue,
  onChange,
  maxDate,
}: ControlledDatePickerProps) => {
  return (
    <Stack spacing={2}>
      {label && <FormLabel label={label} />}
      {tip && <HelperText tipText={tip} fontSize="xs" color="gray.700" />}
      <Box my={2}>
        <Controller
          name={name}
          shouldUnregister={false}
          render={({ field }) => (
            <ReactDatePicker
              {...field}
              onBlur={field.onBlur}
              selected={defaultValue}
              onChange={onChange}
              customInput={<ControlledDatePickerButton />}
              maxDate={maxDate}
            />
          )}
        />
      </Box>
    </Stack>
  );
};

export default ComboDatePicker;
