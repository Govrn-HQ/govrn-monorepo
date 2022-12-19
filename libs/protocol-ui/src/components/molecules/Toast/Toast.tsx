import React, { ReactNode } from 'react';
import { ColorProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { AiFillCheckCircle, AiFillWarning, AiFillAlert } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
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
  closeToast?: any;
  isClosable?: boolean;
};

export type ToastProps = ChakraToastProps & CustomToastProps;

const icons: {
  [name: string]: { icon: IconType; color: ColorProps['color'] };
} = {
  success: { icon: AiFillCheckCircle, color: 'brand.purple' },
  warning: { icon: AiFillWarning, color: 'whiteAlpha.700' },
  alert: { icon: AiFillAlert, color: 'whiteAlpha.800' },
};

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

const Toast: React.FC<ToastProps> = ({
  title,
  description,
  status,
  icon,
  iconName,
  iconColor,
  closeToast,
  ...props
}: // isClosable,
ToastProps) => {
  console.log('in toast, closeable', props.isClosable);
  return (
    <Box
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
        <Box
          marginLeft={8}
          // position="absolute"
          // top="10px"
          // right="10px"
          onClick={closeToast}
        >
          <Icon
            as={RiCloseFill}
            onClick={closeToast}
            // onClick={() => console.log('toast clicked')}
            w="25px"
            h="25px"
          />
        </Box>
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
    </Box>
  );
};
export default Toast;
