import { IconType } from 'react-icons';
import {
  ColorProps,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagProps,
  BackgroundProps,
} from '@chakra-ui/react';
import { AiFillCheckCircle, AiFillExclamationCircle } from 'react-icons/ai';

export interface PillProps extends TagProps {
  label: string | undefined | null;
  status: 'gradient' | 'primary' | 'secondary' | 'tertiary';
  icon?: 'checkmark' | 'primaryInfo' | 'secondaryInfo' | null;
}

const colorValues: {
  [status: string]: {
    bg: BackgroundProps['bg'];
    color: ColorProps['color'];
  };
} = {
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
  checkmark: { icon: AiFillCheckCircle, color: 'white' },
  primaryInfo: { icon: AiFillExclamationCircle, color: 'brand.purple' },
  secondaryInfo: { icon: AiFillExclamationCircle, color: 'brand.magenta' },
};

const Pill = ({ label, status, icon }: PillProps) => {
  return (
    <HStack spacing={4}>
      <Tag bg={colorValues[status].bg}>
        {icon ? (
          <TagLeftIcon
            boxSize="18px"
            as={icons[icon].icon}
            color={icons[icon].color}
          />
        ) : null}
        <TagLabel color={colorValues[status].color}>{label}</TagLabel>
      </Tag>
    </HStack>
  );
};

export default Pill;
