import { useRef } from 'react';
import _ from 'lodash';
import { AlertStatus, ToastId, useToast } from '@chakra-ui/react';
import { CreateToastFnReturn } from '@chakra-ui/toast';
import { Toast, ToastProps } from '../components/molecules';

const ToastBase = ({
  toast,
  title,
  description,
  status,
  id,
  duration,
  iconName,
  closeToast,
  ...props // gets the rest of the original Chakra Toast props such as isClosable
}: ToastProps & {
  status: AlertStatus;
  toast: Partial<CreateToastFnReturn>;
}) => {
  return toast({
    title,
    description,
    status,
    id: id,
    duration: duration ?? 3000,
    isClosable: props.isClosable ?? true,

    position: 'top-right',
    variant: 'left-accent',
    ...props,
    // render custom component
    render: () => (
      <Toast
        title={_.toString(title) || ''}
        description={description}
        iconName={iconName}
        status={status}
        isClosable={props.isClosable}
        closeToast={closeToast}
      />
    ),
  });
};

const useGovrnToast = () => {
  const toast = useToast();
  const toastIdRef = useRef<ToastId | null>(null);

  function closeToast() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }

  // omitting status because we're setting that in the .success, .error, .warning
  return {
    success(props: Omit<ToastProps, 'status'>) {
      toastIdRef.current = ToastBase({
        ...props,
        status: 'success',
        iconName: 'success',
        closeToast: closeToast,
        isClosable: props.isClosable ?? true, // passing this in to the custom component
        toast,
      });
    },
    error(props: ToastProps) {
      ToastBase({ ...props, status: 'error', toast });
    },
    warning(props: ToastProps) {
      ToastBase({ ...props, status: 'warning', toast });
    },
    info(props: ToastProps) {
      ToastBase({ ...props, status: 'info', toast });
    },
    loading(props: ToastProps) {
      ToastBase({ ...props, status: 'loading', toast });
    },
    isActive(id: ToastId) {
      return toast.isActive(id);
    },
  };
};

export default useGovrnToast;
