import React, { ReactNode } from 'react';
import { ColorProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
  AiFillCheckCircle,
  AiFillExclamationCircle,
  AiFillWarning,
  AiFillAlert,
} from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
import {
  Box,
  HStack,
  Heading,
  Text,
  Icon,
  AlertStatus,
  ToastProps as ChakraToastProps,
  Flex,
  CreateToastFnReturn,
} from '@chakra-ui/react';

type CustomToastProps = {
  status: AlertStatus;
  title?: string | ReactNode;
  description?: string | ReactNode | JSX.Element;
  icon?: IconType;
  iconName?: string;
  iconColor?: string;
  toast?: CreateToastFnReturn;
  isClosable?: boolean;
  closeToast?: () => void;
};

export type ToastProps = ChakraToastProps & CustomToastProps;

const colorValues = {
  success: {
    bg: 'brand.secondary.100',
    color: 'brand.purple',
    displayBorder: 'block',
  },
  error: {
    bg: 'red.100',
    color: 'red.500',
    displayBorder: 'block',
  },
  info: {
    bg: 'blue.100',
    color: 'blue.500',
    displayBorder: 'block',
  },
  warning: {
    bg: 'yellow.100',
    color: 'yellow.500',
    displayBorder: 'block',
  },
  loading: {
    bg: 'brand.primary.100',
    color: 'brand.magenta',
    displayBorder: 'block',
  },
};

const icons: {
  [name: string]: { icon: IconType; color: ColorProps['color'] };
} = {
  success: { icon: AiFillCheckCircle, color: 'brand.purple' },
  error: { icon: AiFillExclamationCircle, color: 'red.500' },
  warning: { icon: AiFillWarning, color: 'whiteAlpha.700' },
  alert: { icon: AiFillAlert, color: 'whiteAlpha.800' },
  loading: { icon: AiFillExclamationCircle, color: 'whiteAlpha.700' },
};

const Toast: React.FC<ToastProps> = ({
  title,
  description,
  status,
  icon,
  iconName,
  iconColor,
  closeToast,
  ...props
}: ToastProps) => {
  return (
    <Flex
      bg={colorValues[status].bg}
      position="relative"
      padding={4}
      borderRadius="8px"
      borderLeftWidth="8px"
      borderLeftColor={colorValues[status].color}
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
        <Box color={colorValues[status].color}>
          {title && <Heading size="md">{title}</Heading>}
          {description && <Text size="sm">{description}</Text>}
        </Box>
      </HStack>
      {props.isClosable === true && (
        <Flex
          marginLeft={8}
          // position="absolute"
          // top="10px"
          // right="10px"
          onClick={closeToast}
          justifyContent="baseline"
          _hover={{ cursor: 'pointer' }}
        >
          <Icon
            as={RiCloseFill}
            onClick={closeToast}
            w="25px"
            h="25px"
            _hover={{ cursor: 'pointer' }}
          />
        </Flex>
      )}

      <Box
        display={colorValues[status].displayBorder}
        top="-2px"
        left="-2px"
        width="104%"
        height="104%"
        position="absolute"
        zIndex={-1}
      />
    </Flex>
  );
};
export default Toast;
