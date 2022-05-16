import React from 'react';
import {
  Input as ChakraInput,
  FormControl,
  Stack,
  Box,
} from '@chakra-ui/react';
import FormLabel from '../../atoms/FormLabel';
import HelperText from '../../atoms/HelperText';
import ErrorMessage from '../../atoms/ErrorMessage';

type Errors = {
  [name: string]: {
    message: string;
  };
};
export interface InputProps {
  name: string; // this is required for validation since it's used as the key in the errors object
  label?: string;
  placeholder?: string;
  tip?: string;
  type?: 'text' | 'number' | 'email'; // may not need this
  defaultValue?: string;
  localForm: {
    register: (name: string | undefined) => void;
    formState: {
      errors: Errors;
    };
  };

  variant?: 'outline' | 'filled';
}

const Input: React.FC<InputProps> = ({
  name = '',
  label,
  placeholder,
  tip,
  type,
  defaultValue,
  localForm,
  variant = 'outline',
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
            name={name}
            type={type}
            height="30px"
            placeholder={placeholder}
            defaultValue={defaultValue}
            py={6}
            variant={variant}
            {...register(name)}
          />
          {errors && (
            <ErrorMessage
              errorMessage={errors[name] && errors[name]?.message}
            />
          )}
        </Box>
      </Stack>
    </FormControl>
  );
};

export default Input;
