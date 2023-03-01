import { GroupBase, OptionsOrGroups } from 'react-select';
import { ReactNode } from 'react';

export type ValueType = string | number;

export type IsMultiValue = true | false;

export type SelectOption<Type extends ValueType> = {
  /**
   * The label to display in the UI to represent this option.
   */
  label: string;

  /**
   * The value to pass to the onChange handler when this option is selected.
   */
  value: Type extends string ? string : number;
};

/**
 * A group of options. This is used to group options together in UI.
 */
export type SelectGroup<T extends ValueType> = GroupBase<SelectOption<T>>;
export type SelectGroupedOptions<T extends ValueType> = OptionsOrGroups<
  SelectOption<T>,
  SelectGroup<T>
>;

export interface BaseSelectProps<T extends ValueType> {
  id?: string;
  /**
   * The options to display in the dropdown.
   */
  options: SelectGroupedOptions<T>;

  /**
   * The value of the currently selected option.
   */
  value?: SelectOption<T> | null;

  /**
   * The label text to display above the select.
   */
  label?: string;

  /**
   * The placeholder text to display when no option is selected.
   */
  placeholder?: string;

  /**
   * The text or component to display as a tip below the select UI label.
   */
  tip?: string | ReactNode;

  /**
   * The error message to display below the select.
   */
  error?: string;

  isDisabled?: boolean;

  isRequired?: boolean;

  isClearable?: boolean;

  isSearchable?: boolean;

  /**
   * Whether the select allows multiple options to be selected.
   */
  isMulti?: boolean;

  defaultValue?: SelectOption<T> | SelectOption<T>[] | null;

  onChange?: (
    option: SelectOption<T> | readonly SelectOption<T>[] | null,
  ) => void;

  variant?: 'outline' | 'filled';
}
