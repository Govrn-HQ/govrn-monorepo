import React from 'react';
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  Stack,
  Box,
} from '@chakra-ui/react';
import FormLabel from '../../atoms/FormLabel';
import HelperText from '../../atoms/HelperText';
import ErrorMessage from '../../atoms/ErrorMessage';
import { UseFormReturn } from 'react-hook-form/dist/types/form';

export type InputLocalFormType<T> = Pick<
  UseFormReturn<T>,
  'formState' | 'register'
>;

export interface InputProps extends ChakraInputProps {
  name: string; // this is required for validation since it's used as the key in the errors object
  label?: string;
  placeholder?: string;
  tip?: string;
  type?: 'text' | 'number' | 'email' | 'file';
  id?: string;
  defaultValue?: string | number;
  isDisabled?: boolean;
  localForm: Pick<UseFormReturn, 'formState' | 'register'>;
  variant?: 'outline' | 'filled';
  dataTestId?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name = '',
  label,
  placeholder,
  tip,
  type,
  id,
  defaultValue,
  localForm,
  isDisabled = false,
  variant = 'outline',
  dataTestId = '',
  onChange,
  ...props
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = localForm;

  return (
    <FormControl mb={4} isInvalid={errors[name] !== undefined}>
      <Stack spacing={2}>
        {label && <FormLabel label={label} />}
        {tip && <HelperText tipText={tip} fontSize="xs" color="gray.700" />}
        <Box my={2}>
          <ChakraInput
            type={type}
            id={id}
            visibility={type === 'file' ? 'hidden' : 'visible'}
            display={type === 'file' ? 'none' : 'auto'}
            height="30px"
            placeholder={placeholder}
            defaultValue={defaultValue}
            py={6}
            variant={variant}
            isDisabled={isDisabled}
            {...register(name)}
            data-testid={dataTestId}
            onChange={onChange}
            {...props}
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

export default Input;
