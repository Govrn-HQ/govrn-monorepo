import React from 'react';
import ReactSelect from 'react-select';
import {
  Controller,
  UseFormReturn,
  Resolver,
  FieldValues,
} from 'react-hook-form';
import { useTheme, FormControl, Stack, Box } from '@chakra-ui/react';
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

type Option =
  | {
      label: string | number;
      value: string | number;
    }
  | { value: number | null; label: string }
  | { value: number; label: string | null | undefined }
  | { value: null; label: string };

export interface SelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: Option | Option[];
  id?: any;
  tip?: string;
  options: Option[];
  isRequired?: boolean;
  localForm: Pick<UseFormReturn, 'control' | 'formState'>;
  isMulti?: boolean;
  isClearable?: boolean;
  onChange?: (option: Option) => void;
  isDisabled?: boolean;
  variant?: 'outline' | 'filled';
  value?: any;

  [x: string]: any;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  tip,
  placeholder,
  defaultValue,
  options,
  isMulti,
  isClearable,
  onChange,
  isDisabled,
  value,
  localForm,
}: SelectProps) => {
  const {
    control,
    formState: { errors },
  } = localForm;

  // const theme = useTheme();
  // const formThemeColors = customSelectThemeColors(theme);

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
              <ReactSelect
                {...field}
                onBlur={field.onBlur}
                options={options}
                defaultValue={defaultValue}
                placeholder={placeholder}
                isClearable={isClearable}
                isMulti={isMulti}
                onChange={onChange}
                isDisabled={isDisabled}
                // theme={(localTheme) => ({
                //   ...localTheme,
                //   colors: {
                //     ...formThemeColors,
                //   },
                // })}
                // styles={customSelectStyles}
                value={value}
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

export default Select;
