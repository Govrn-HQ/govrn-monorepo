import { useEffect, forwardRef, useRef } from 'react';
import { Checkbox } from '@chakra-ui/react';
import { TableToggleRowsSelectedProps } from 'react-table';

// TODO: Move into component library after validating that this works
// uses the raw HTML input -- needs to be styled

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

  return <Checkbox ref={resolvedRef} {...rest} />;
});

export default IndeterminateCheckbox;
