import React from 'react';
import { FormErrorMessage as ChakraFormErrorMessage } from '@chakra-ui/react';

export interface ErrorMessageProps {
  errorMessage: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => (
  <ChakraFormErrorMessage>{errorMessage}</ChakraFormErrorMessage>
);

export default ErrorMessage;
