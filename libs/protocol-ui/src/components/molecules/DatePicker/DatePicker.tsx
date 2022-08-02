import React, { SyntheticEvent } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';
import { FormControl, Box, Stack } from '@chakra-ui/react';
import FormLabel from '../../atoms/FormLabel';
import HelperText from '../../atoms/HelperText';
import ErrorMessage from '../../atoms/ErrorMessage';
import CustomDatePickerButton from './CustomDatePickerButton';
import { UseFormReturn } from 'react-hook-form/dist/types/form';

type Errors = {
  [name: string]: {
    message: string;
  };
};

export interface DatePickerProps {
  name: string;
  label?: string;
  tip?: string;
  defaultValue?: Date;
  localForm: Pick<UseFormReturn, 'control' | 'formState'>;
  onChange: (
    date: Date | [Date | null, Date | null] | null,
    event: SyntheticEvent<Date, Event> | undefined
  ) => void;
  maxDate?: Date | null | undefined;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  name,
  tip,
  defaultValue,
  localForm,
  onChange,
  maxDate,
}: DatePickerProps) => {
  const {
    control,
    formState: { errors },
  } = localForm;

  return (
    <FormControl mb={4} isInvalid={errors && errors[name] !== undefined}>
      <Stack spacing={2}>
        {label && <FormLabel label={label} />}
        {tip && <HelperText tipText={tip} fontSize="xs" color="gray.700" />}
        <Box my={2}>
          <Controller
            name={name}
            control={control}
            shouldUnregister={false}
            render={({ field }) => (
              <ReactDatePicker
                {...field}
                onBlur={field.onBlur}
                selected={defaultValue}
                onChange={onChange}
                customInput={<CustomDatePickerButton />}
                maxDate={maxDate}
              />
            )}
          />
          {errors && (
            <ErrorMessage
              errorMessage={errors[name] && errors[name]?.message?.toString()}
            />
          )}
        </Box>
      </Stack>
    </FormControl>
  );
};

export default DatePicker;
