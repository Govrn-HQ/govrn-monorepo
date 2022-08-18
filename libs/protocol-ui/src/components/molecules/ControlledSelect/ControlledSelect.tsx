import React from 'react';
import ReactSelect from 'react-select';
import { Stack, Box, Text } from '@chakra-ui/react';
import customSelectStyles from './selectStyles';
import customSelectThemeColors from './selectTheme';
import FormLabel from '../../atoms/FormLabel';
import HelperText from '../../atoms/HelperText';
import ErrorMessage from '../../atoms/ErrorMessage';

type Errors = {
  [name: string]: {
    label?: {
      message?: string;
    };
    value?: {
      message?: string;
    };
    message: string;
  };
};

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
  id?: any;
  tip?: string;
  options: Option[];
  isRequired?: boolean;
  isMulti?: boolean;
  isClearable?: boolean;
  onChange?: (option: Option | Option[]) => void;
  isDisabled?: boolean;
  variant?: 'outline' | 'filled';
  value?: any;
  [x: string]: any;
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
  isDisabled,
  value,
}: ControlledSelectProps) => {
  return (
    <Stack spacing={2}>
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
          isClearable={isClearable}
          isMulti={isMulti}
          onChange={onChange}
          isDisabled={isDisabled}
          value={value}
        />
      </Box>
    </Stack>
  );
};

export default ControlledSelect;
