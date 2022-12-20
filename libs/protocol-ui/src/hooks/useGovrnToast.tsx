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
    error(props: Omit<ToastProps, 'status'>) {
      toastIdRef.current = ToastBase({
        ...props,
        status: 'error',
        iconName: 'error',
        closeToast: closeToast,
        isClosable: props.isClosable ?? true,
        toast,
      });
    },
    warning(props: Omit<ToastProps, 'status'>) {
      toastIdRef.current = ToastBase({
        ...props,
        status: 'warning',
        iconName: 'warning',
        closeToast: closeToast,
        isClosable: props.isClosable ?? true,
        toast,
      });
    },
    info(props: Omit<ToastProps, 'status'>) {
      toastIdRef.current = ToastBase({
        ...props,
        status: 'info',
        iconName: 'info',
        closeToast: closeToast,
        isClosable: props.isClosable ?? true,
        toast,
      });
    },
    loading(props: Omit<ToastProps, 'status'>) {
      toastIdRef.current = ToastBase({
        ...props,
        status: 'loading',
        iconName: 'loading',
        closeToast: closeToast,
        isClosable: props.isClosable ?? true,
        toast,
      });
    },
    isActive(id: ToastId) {
      return toast.isActive(id);
    },
  };
};

export default useGovrnToast;
