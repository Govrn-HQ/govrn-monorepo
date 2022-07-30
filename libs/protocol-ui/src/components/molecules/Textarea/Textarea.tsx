import React from 'react';
import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  FormControl,
  Stack,
  Box,
  useStyleConfig,
} from '@chakra-ui/react';
import FormLabel from '../../atoms/FormLabel';
import HelperText from '../../atoms/HelperText';
import ErrorMessage from '../../atoms/ErrorMessage';
import { UseFormReturn } from 'react-hook-form/dist/types/form';

type Errors = {
  [name: string]: {
    message: string;
  };
};

export interface TextareaProps extends ChakraTextareaProps {
  name: string; // this is required for validation
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  tip?: string;
  localForm: Pick<UseFormReturn, 'formState' | 'register'>;
  variant?: 'filled' | 'outline' | 'flushed' | 'unstyled';
}

const Textarea: React.FC<TextareaProps> = ({
  name = '',
  label,
  placeholder,
  tip,
  defaultValue,
  localForm,
  variant = 'outline',
}: TextareaProps) => {
  const {
    register,
    formState: { errors },
  } = localForm;
  const styles = useStyleConfig('Textarea', {
    variant,
  });

  return (
    <FormControl mb={4} isInvalid={errors[name] !== undefined}>
      <Stack spacing={2}>
        {label && <FormLabel label={label} />}
        {tip && <HelperText tipText={tip} fontSize="xs" color="gray.700" />}
        <Box my={2}>
          <ChakraTextarea
            height="100px"
            placeholder={placeholder}
            defaultValue={defaultValue}
            py={6}
            name={name}
            variant={variant}
            sx={styles}
            {...register(name)}
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

export default Textarea;
