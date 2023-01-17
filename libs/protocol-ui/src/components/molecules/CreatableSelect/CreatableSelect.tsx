import React from 'react';
import Creatable from 'react-select/creatable';
import SelectComponents from 'react-select';
import { Controller } from 'react-hook-form';
import { Box, FormControl, Stack } from '@chakra-ui/react';
import FormLabel from '../../atoms/FormLabel';
import HelperText from '../../atoms/HelperText';
import ErrorMessage from '../../atoms/ErrorMessage';
import { UseFormReturn } from 'react-hook-form/dist/types/form';
import { components } from 'react-select';

export function SelectContainer(props: any) {
  return (
    <components.SelectContainer
      {...props}
      innerProps={Object.assign({}, props.innerProps, {
        'data-cy': 'daoCreatableSelect-testing',
      })}
    />
  );
}

type Option = {
  label: string;
  value: string;
};

export interface CreatableSelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: Option | Option[];
  id?: string;
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
  components?: SelectComponents;
  // menuPortalBody?: boolean;
}

const CreatableSelect: React.FC<CreatableSelectProps> = ({
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
  components,
}: CreatableSelectProps) => {
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
              <Creatable
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
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                menuPortalTarget={document.querySelector('body')} // so dropdown menu doesnt interfere with clickable elements
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

export default CreatableSelect;
