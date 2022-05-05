import React from 'react';
import { FormHelperText as ChakraFormHelperText } from '@chakra-ui/react';

export interface HelperTextProps {
  tipText: string;
  color?: string;
  fontSize?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';
}

const HelperText: React.FC<HelperTextProps> = ({
  tipText,
  color = 'gray.800',
  fontSize = 'xs',
}) => (
  <ChakraFormHelperText color={color} fontSize={fontSize}>
    {tipText}
  </ChakraFormHelperText>
);

export default HelperText;
