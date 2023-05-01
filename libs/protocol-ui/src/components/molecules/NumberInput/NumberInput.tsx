import React from 'react';
import {
  NumberInput as ChakraNumberInput,
  NumberInputProps as ChakraNumberInputProps,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  Stack,
  Box,
} from '@chakra-ui/react';
import { Controller, UseFormReturn } from 'react-hook-form';
import FormLabel from '../../atoms/FormLabel';
import HelperText from '../../atoms/HelperText';
import ErrorMessage from '../../atoms/ErrorMessage';

export type NumberInputLocalFormType<T> = Pick<
  UseFormReturn<T>,
  'formState' | 'control'
>;

export interface NumberInputProps extends ChakraNumberInputProps {
  name: string; // this is required for validation since it's used as the key in the errors object
  label?: string;
  placeholder?: string;
  tip?: string;
  type?: 'text' | 'number' | 'email' | 'file';
  id?: string;
  defaultValue?: string | number;
  isDisabled?: boolean;
  isRequired?: boolean;
  localForm: Pick<UseFormReturn, 'formState' | 'control'>;

  dataTestId?: string;
  onChange?: (valueAsString: string, valueAsNumber: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
  name = '',
  label,
  placeholder,
  tip,
  type,
  id,
  defaultValue,
  localForm,
  isDisabled = false,
  isRequired = false,
  onChange,
  ...props
}: NumberInputProps) => {
  const {
    control,
    formState: { errors },
  } = localForm;

  return (
    <FormControl
      mb={4}
      isInvalid={errors[name] !== undefined}
      isRequired={isRequired}
    >
      <Stack spacing={2}>
        {label && <FormLabel label={label} />}
        {tip && <HelperText tipText={tip} fontSize="xs" color="gray.700" />}
        <Box my={2}>
          <Controller
            name={name}
            control={control}
            shouldUnregister={false}
            render={({ field }) => (
              <ChakraNumberInput
                {...field}
                defaultValue={defaultValue}
                {...props}
              >
                <NumberInputField id={id} name={name} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </ChakraNumberInput>
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

export default NumberInput;
