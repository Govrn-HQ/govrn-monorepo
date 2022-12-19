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
  isClosable,
  iconName,
  closeToast,
}: ToastProps & { status: AlertStatus; toast: CreateToastFnReturn }) => {
  console.log('in toast, closeable', isClosable);
  return toast({
    title,
    description,
    status,
    closeToast,
    id: id,
    duration: duration ?? 3000,
    isClosable: isClosable ?? true,
    position: 'top-right',
    variant: 'left-accent',
    // render custom component
    render: () => (
      <Toast
        title={_.toString(title) || ''}
        description={description}
        iconName={iconName}
        status={status}
        isClosable={isClosable}
        closeToast={closeToast}
      />
    ),
  });
};

const useGovrnToast = () => {
  const toast = useToast();
  const toastIdRef = useRef();

  function closeToast() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }

  return {
    success(props: ToastProps) {
      toastIdRef.current = ToastBase({
        closeToast: closeToast,
        status: 'success',
        iconName: 'success',
        ...props,
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
