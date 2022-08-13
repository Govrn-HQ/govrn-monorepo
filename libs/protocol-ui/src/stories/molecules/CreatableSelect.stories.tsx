import React from 'react';
import { useForm } from 'react-hook-form';
import { CreatableSelect, CreatableSelectProps } from '../..';

export default {
  title: 'Components/Molecules/CreatableSelect',
  component: CreatableSelect,
};

const sampleOptions = [
  { value: 'Pull Request1', label: 'Pull Request' },
  { value: 'Documentation', label: 'Documentation' },
  { value: 'Note Taking', label: 'Note Taking' },
  { value: 'Design', label: 'Design' },
  { value: 'Other', label: 'Other' },
];

const Single = (args: CreatableSelectProps) => {
  const localForm = useForm();
  return (
    <form>
      <CreatableSelect {...args} localForm={localForm} />
    </form>
  );
};

const Multi = (args: CreatableSelectProps) => {
  const localForm = useForm();
  return (
    <form>
      <CreatableSelect {...args} localForm={localForm} />
    </form>
  );
};

const WithTip = (args: CreatableSelectProps) => {
  const localForm = useForm();
  return (
    <form>
      <CreatableSelect {...args} localForm={localForm} />
    </form>
  );
};

Single.args = {
  name: 'activityType',
  label: 'Activity Type',
  placeholder:
    'Choose an Activity Type from the list or start typing your own.',
  variant: 'filled',
  options: sampleOptions,
};

Multi.args = {
  name: 'activityType',
  label: 'Activity Type',
  placeholder:
    'Choose an Activity Type from the list or start typing your own.',
  variant: 'filled',
  options: sampleOptions,
  isMulti: true,
};

WithTip.args = {
  name: 'activityType',
  label: 'Activity Type',
  placeholder:
    'Choose an Activity Type from the list or start typing your own.',
  tip: 'Select DAO(s) to associate this Contribution with.',
  variant: 'filled',
  options: sampleOptions,
  isMulti: true,
};

export { Single, Multi, WithTip };
