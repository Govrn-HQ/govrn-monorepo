import React from 'react';
import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  Stack,
  Box,
  Text,
  useStyleConfig,
} from '@chakra-ui/react';

export interface ControlledTextareaProps extends ChakraTextareaProps {
  name: string; // this is required for validation
  label?: string;
  placeholder?: string;
  tip?: string;
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  variant?: 'filled' | 'outline' | 'flushed' | 'unstyled';
}

const ControlledTextarea: React.FC<ControlledTextareaProps> = ({
  name = '',
  label,
  placeholder,
  tip,
  defaultValue,
  onChange,
  value,
  variant = 'outline',
  ...props
}: ControlledTextareaProps) => {
  const styles = useStyleConfig('Textarea', {
    variant,
  });

  return (
    <Stack spacing={2}>
      {label && (
        <Text fontSize="md" fontWeight="500" color="gray.800">
          {label}
        </Text>
      )}
      {tip && (
        <Text fontSize="xs" color="gray.700">
          {tip}
        </Text>
      )}
      <Box my={2}>
        <ChakraTextarea
          height="100px"
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          value={value}
          py={6}
          variant={variant}
          sx={styles}
          {...props} // catches other ChakraTextarea props
        />
      </Box>
    </Stack>
  );
};

export default ControlledTextarea;
