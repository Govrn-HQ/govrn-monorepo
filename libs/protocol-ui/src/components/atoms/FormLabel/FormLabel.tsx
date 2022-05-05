import React from 'react';
import { FormLabel as ChakraFormLabel } from '@chakra-ui/react';

export interface FormLabelProps {
  label: string;
  color?: string;
}

const FormLabel: React.FC<FormLabelProps> = ({ label, color = 'gray.800' }) => (
  <ChakraFormLabel color={color}>{label}</ChakraFormLabel>
);

export default FormLabel;
