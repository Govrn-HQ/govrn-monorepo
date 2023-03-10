import { IconType } from 'react-icons';
import {
  ColorProps,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';
import { AiFillCheckCircle, AiFillExclamationCircle } from 'react-icons/ai';

export interface PillProps {
  label: string;
  status: 'gradient' | 'primary' | 'secondary' | 'tertiary';
  icon?: 'checkmark' | 'info';
}

const colorValues = {
  primary: {
    bg: 'brand.purple',
    color: 'white',
  },
  secondary: {
    bg: 'brand.magenta',
    color: 'white',
  },
  tertiary: {
    bg: 'gray.50',
    color: 'gray.900',
  },
  gradient: {
    bg: 'brand.gradientBackgroundVariant',
    color: 'white',
  },
};

const icons: {
  [icon: string]: { icon: IconType; color: ColorProps['color'] };
} = {
  checkmark: { icon: AiFillCheckCircle, color: 'brand.secondary.500' },
  info: { icon: AiFillExclamationCircle, color: 'red.500' },
};

const Pill = ({ label, status, icon }: PillProps) => {
  return (
    <HStack spacing={4}>
      <Tag bg={colorValues[status].bg}>
        {icon ? <TagLeftIcon boxSize="12px" as={icons[icon].icon} /> : null}
        <TagLabel color={[colorValues[status].color]}>{label}</TagLabel>
      </Tag>
    </HStack>
  );
};

export default Pill;
