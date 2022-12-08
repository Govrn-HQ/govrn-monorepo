import { useEffect, forwardRef, useRef } from 'react';

import { TableToggleRowsSelectedProps } from 'react-table';

type IndeterminateCheckboxProps = Partial<TableToggleRowsSelectedProps> & {
  disabled?: boolean;
};
type IndeterminateCheckboxCustomProps = {
  ref: HTMLInputElement;
} & IndeterminateCheckboxProps;

const IndeterminateCheckbox = forwardRef<
  IndeterminateCheckboxProps,
  IndeterminateCheckboxCustomProps
>(({ indeterminate, ...rest }: any, ref) => {
  const defaultRef = useRef<HTMLInputElement>(null);
  const resolvedRef = defaultRef;

  useEffect(() => {
    if (resolvedRef.current) {
      resolvedRef.current.indeterminate = indeterminate;
    }
  }, [resolvedRef, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={resolvedRef}
      {...rest}
      className="input-indeterminateCheckbox"
    />
  );
});

export default IndeterminateCheckbox;
