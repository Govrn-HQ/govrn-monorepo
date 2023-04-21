import React from 'react';
import {
  Flex,
  Icon,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  FormControl,
  Stack,
  Box,
  useStyleConfig,
} from '@chakra-ui/react';
import { AiFillExclamationCircle } from 'react-icons/ai';
import FormLabel from '../../atoms/FormLabel';
import HelperText from '../../atoms/HelperText';
import ErrorMessage from '../../atoms/ErrorMessage';
import { UseFormReturn } from 'react-hook-form/dist/types/form';

export interface TextareaProps extends ChakraTextareaProps {
  name: string; // this is required for validation
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  tip?: string;
  includeIcon?: boolean;
  localForm: Pick<UseFormReturn, 'formState' | 'register'>;
  variant?: 'filled' | 'outline' | 'flushed' | 'unstyled';
  isRequired?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  name = '',
  label,
  placeholder,
  tip,
  defaultValue,
  localForm,
  includeIcon = false,
  isRequired = false,
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
    <FormControl isInvalid={errors[name] !== undefined} isRequired={isRequired}>
      <Stack spacing={2}>
        {label && <FormLabel label={label} />}
        {tip && <HelperText tipText={tip} fontSize="xs" color="gray.700" />}
        <Box>
          <ChakraTextarea
            height="100px"
            placeholder={placeholder}
            defaultValue={defaultValue}
            py={6}
            variant={variant}
            sx={styles}
            {...register(name)}
            data-testid="textarea-test"
          />
          {errors[name] && (
            <Flex direction="row" alignItems="center" marginY={4}>
              <Icon
                as={AiFillExclamationCircle}
                color="red.500"
                width="16px"
                height="16px"
                marginRight={2}
              />
              <ErrorMessage
                marginY={0}
                errorMessage={errors[name] && errors[name]?.message?.toString()}
              />
            </Flex>
          )}
        </Box>
      </Stack>
    </FormControl>
  );
};

export default Textarea;
