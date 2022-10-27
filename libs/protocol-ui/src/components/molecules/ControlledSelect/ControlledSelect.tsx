import React from 'react';
import ReactSelect from 'react-select';
import { Stack, Box, Text } from '@chakra-ui/react';

export type Option =
  | {
      label: string | number;
      value: string | number;
    }
  | { value: number | null; label: string }
  | { value: number; label: string | null | undefined }
  | { value: null; label: string }
  | { label: string | number; value: string | number }
  | { value: number; label: string };

export interface ControlledSelectProps {
  label?: string;
  placeholder?: string;
  defaultValue?: Option | Option[];
  id?: string;
  tip?: string;
  options: Option[];
  isRequired?: boolean;
  isMulti?: boolean;
  isClearable?: boolean;
  onChange?: (option: { value: number; label: string }) => void;
  variant?: 'outline' | 'filled';
  value?: any;
}

const ControlledSelect: React.FC<ControlledSelectProps> = ({
  label,
  tip,
  placeholder,
  defaultValue,
  options,
  isMulti,
  isClearable,
  onChange,
  value,
  ...props
}: ControlledSelectProps) => {
  return (
    <Stack spacing={2} width="100%">
      {label && (
        <Text fontSize="" color="gray.800">
          {label}
        </Text>
      )}
      {tip && (
        <Text fontSize="xs" color="gray.700">
          {tip}
        </Text>
      )}
      <Box my={2}>
        <ReactSelect
          options={options}
          defaultValue={defaultValue}
          placeholder={placeholder}
          isMulti={isMulti}
          onChange={onChange}
          value={value}
          {...props}
        />
      </Box>
    </Stack>
  );
};

export default ControlledSelect;
