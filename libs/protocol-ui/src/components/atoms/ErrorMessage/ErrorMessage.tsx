import React from 'react';
import {
  FormErrorMessage as ChakraFormErrorMessage,
  FormErrorMessageProps,
} from '@chakra-ui/react';

export interface ErrorMessageProps extends FormErrorMessageProps {
  errorMessage: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  errorMessage,
  ...props
}) => (
  <ChakraFormErrorMessage {...props}>{errorMessage}</ChakraFormErrorMessage>
);

export default ErrorMessage;
