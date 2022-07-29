import { useEffect, forwardRef, useRef, ReactElement } from 'react';
import { ComponentWithAs } from '@chakra-ui/react';

// TODO: Move into component library after validating that this works
// uses the raw HTML input -- needs to be styled

type IndeterminateCheckboxCustomProps = {
  ref: HTMLInputElement;
};

type IndeterminateCheckboxProps = ComponentWithAs<
  'input',
  IndeterminateCheckboxCustomProps
> & {
  Input: typeof HTMLInputElement;
};

const IndeterminateCheckbox = forwardRef<IndeterminateCheckboxProps, 'input'>(
  ({ indeterminate, ...rest }: any, ref) => {
    const defaultRef = useRef<HTMLInputElement>(null);
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      // @ts-ignore: TODO: current is not defined on ref.
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return <input type="checkbox" ref={resolvedRef} {...rest} />;
  }
);

export default IndeterminateCheckbox;
