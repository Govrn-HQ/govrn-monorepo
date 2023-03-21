import React from 'react';
import { useForm } from 'react-hook-form';
import { Select, BaseSelectProps } from '../..';

export default {
  title: 'Components/Molecules/Select',
  component: Select,
};

const sampleOptions = [
  { value: 'DAO 1', label: 'DAO 1' },
  { value: 'DAO 2', label: 'DAO 2' },
  { value: 'DAO 3', label: 'DAO 3' },
];

const Single = (args: BaseSelectProps) => {
  const localForm = useForm();
  return (
    <form>
      <Select {...args} localForm={localForm} />
    </form>
  );
};

const Multi = (args: BaseSelectProps) => {
  const localForm = useForm();
  return (
    <form>
      <Select {...args} localForm={localForm} />
    </form>
  );
};

const WithTip = (args: BaseSelectProps) => {
  const localForm = useForm();
  return (
    <form>
      <Select {...args} localForm={localForm} />
    </form>
  );
};

Single.args = {
  name: 'daoId',
  label: 'DAO',
  placeholder: 'Select a DAO to associate this Contribution with.',
  variant: 'filled',
  options: sampleOptions,
};

Multi.args = {
  name: 'daoId',
  label: 'DAO',
  placeholder: 'Select DAOs to associate this Contribution with.',
  variant: 'filled',
  options: sampleOptions,
  isMulti: true,
};

WithTip.args = {
  name: 'daoId',
  label: 'DAO',
  placeholder: 'Select DAOs to associate this Contribution with.',
  tip: 'Select DAO(s) to associate this Contribution with.',
  variant: 'filled',
  options: sampleOptions,
  isMulti: true,
};

export { Single, Multi, WithTip };
