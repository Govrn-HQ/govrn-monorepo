import React from 'react';
import { useForm } from 'react-hook-form';
import { NumberInput, NumberInputProps } from '../..';

export default {
  title: 'Components/Molecules/NumberInput',
  component: NumberInput,
};

const Outline = (args: NumberInputProps) => {
  const localForm = useForm();

  return (
    <form>
      <NumberInput {...args} localForm={localForm} />
    </form>
  );
};

Outline.args = {
  name: 'numberInputOutline',
  label: 'Select Number of Contributors',
  min: 1,
  max: 10,
  defaultValue: 1,
};

export { Outline };
