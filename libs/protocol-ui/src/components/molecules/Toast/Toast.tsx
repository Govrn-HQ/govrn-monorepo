import { ColorProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { AiFillCheckCircle, AiFillWarning, AiFillAlert } from 'react-icons/ai';
import { HiCheckCircle } from 'react-icons/hi';
import {
  Box,
  HStack,
  Heading,
  Text,
  Icon,
  AlertStatus,
  ToastProps as ChakraToastProps,
} from '@chakra-ui/react';

type CustomToastProps = {
  status: AlertStatus;
  title?: string | ReactNode;
  description?: string | ReactNode;
  icon?: IconType;
  iconName?: string;
  iconColor?: string;
  toast?: any;
  close?: any;
  isCloseable?: boolean;
};

export type ToastProps = ChakraToastProps & CustomToastProps;

const icons: {
  [name: string]: { icon: IconType; color: ColorProps['color'] };
} = {
  success: { icon: AiFillCheckCircle, color: 'brand.purple' },
  warning: { icon: AiFillWarning, color: 'whiteAlpha.700' },
  alert: { icon: AiFillAlert, color: 'whiteAlpha.800' },
};

const bgValues = {
  success: {
    bg: 'brand.secondary.100',
    color: 'brand.purple',
    displayBorder: 'block',
  },
  error: {
    bg: 'red.500',
    bgImage: '',
    displayBorder: 'none',
  },
  info: {
    bg: 'blue.500',
    bgImage: 'whiteAlpha.700',
    displayBorder: 'block',
  },
  warning: {
    bg: 'blue.500',
    bgImage: 'whiteAlpha.700',
    displayBorder: 'block',
  },
  loading: {
    bg: 'blue.500',
    bgImage: 'whiteAlpha.700',
    displayBorder: 'block',
  },
};

const Toast: React.FC<ToastProps> = ({
  title,
  description,
  status = 'success',
  icon,
  iconName,
  iconColor,
}: ToastProps) => {
  return (
    <Box
      bg={bgValues[status].bg}
      position="relative"
      padding={4}
      borderRadius="8px"
      borderLeftWidth="8px"
      borderLeftColor="purple"
    >
      <HStack spacing={3}>
        {iconName ? (
          <Icon
            as={icons[iconName].icon}
            color={iconColor || icons[iconName].color || 'whiteAlpha.800'}
            width="24px"
            height="24px"
          />
        ) : (
          icon && <Icon as={icon} width="35px" height="35px" />
        )}
        <Box color="brand.purple">
          {title && <Heading size="md">{title}</Heading>}
          {description && <Text size="sm">{description}</Text>}
        </Box>
      </HStack>

      {/* {isCloseable && (
        <Box position='absolute' top='10px' right='10px' onClick={close}>
          <Icon as={RiCloseFill} onClick={close} w='25px' h='25px' />
        </Box>
      )} */}

      <Box
        // display={bgValues[status].displayBorder}
        top="-2px"
        left="-2px"
        width="104%"
        height="104%"
        position="absolute"
        zIndex={-1}
      />
    </Box>
  );
};
export default Toast;
