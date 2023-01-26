import { useEffect, useState } from 'react';

export const DEFAULT_DELAY = 5_00;

/**
 * This hooks applies given `fn` to passed values after `delay` time,
 * allowing to debounce fast changing values
 *
 * @returns A callback to pass the fast-changing values.
 */
export const useDebounce = (fn: (value: string) => void, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState('');

  const onValueChanged = (value: string) => {
    setDebouncedValue(value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      fn(debouncedValue ?? '');
    }, delay);

    // Cancel the timeout if: value changes, delay change or unmount and passed fn changes
    return () => {
      clearTimeout(handler);
    };
  }, [debouncedValue, delay, fn]);

  return onValueChanged;
};
