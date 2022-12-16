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
  close,
  variant,
}: ToastProps & { status: AlertStatus; toast: CreateToastFnReturn }) => {
  toast({
    title,
    description,
    status,
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
        isCloseable={isClosable}
        close={close}
      />
    ),
  });
};

const useGovrnToast = () => {
  const toast = useToast();

  return {
    success(props: ToastProps) {
      ToastBase({ ...props, status: 'success', toast });
    },
    error(props: ToastProps) {
      ToastBase({ ...props, status: 'error', toast });
    },
    // warning(props: ToastProps) {
    //   ToastBase({ ...props, status: 'warning', toast });
    // },
    // info(props: ToastProps) {
    //   ToastBase({ ...props, status: 'info', toast });
    // },
    // loading(props: ToastProps) {
    //   ToastBase({ ...props, status: 'loading', toast });
    // },
    isActive(id: ToastId) {
      return toast.isActive(id);
    },
  };
};

export default useGovrnToast;
