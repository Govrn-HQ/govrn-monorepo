import React from 'react';
import ReactSelect from 'react-select';
import { Stack, Box, Text } from '@chakra-ui/react';
import {
  BaseSelectProps,
  ValueType
} from "../ReactSelect";

export interface ControlledSelectProps<
  Type extends ValueType = ValueType,
> extends BaseSelectProps<Type> {
  isSearchable?: boolean;
}

const ControlledSelect = <T extends ValueType>({
  label,
  tip,
  placeholder,
  defaultValue,
  options,
  isMulti = false,
  isClearable,
  isDisabled,
  onChange,
  value,
  isSearchable,
  ...props
}: ControlledSelectProps<T>) => {
  return (
    <Stack spacing={2} width="100%">
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
        <ReactSelect
          options={options}
          defaultValue={defaultValue}
          placeholder={placeholder}
          isMulti={isMulti}
          onChange={onChange}
          isDisabled={isDisabled}
          value={value}
          isSearchable={isSearchable}
          styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
          menuPortalTarget={document.querySelector('body')} // so dropdown menu doesnt interfere with clickable elements
          {...props}
        />
      </Box>
    </Stack>
  );
};

export default ControlledSelect;
