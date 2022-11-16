import React from 'react';
import ReactSelect, { components } from 'react-select';
import { Controller, UseFormReturn } from 'react-hook-form';
import { FormControl, Stack, Box } from '@chakra-ui/react';
import FormLabel from '../../atoms/FormLabel';
import HelperText from '../../atoms/HelperText';
import ErrorMessage from '../../atoms/ErrorMessage';

export function SelectContainer(props: any) {
  return (
    <components.SelectContainer
      {...props}
      innerProps={Object.assign({}, props.innerProps, {
        'data-cy': 'daoSelect-testing',
      })}
    />
  );
}
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
  id?: string;
  tip?: string | React.ReactNode;
  options: Option[];
  isRequired?: boolean;
  localForm: Pick<UseFormReturn, 'control' | 'formState'>;
  isMulti?: boolean;
  isClearable?: boolean;
  onChange?: (option: Option) => void;
  isDisabled?: boolean;
  variant?: 'outline' | 'filled';
  value?: any;
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
                value={value}
                components={{ SelectContainer }}
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
