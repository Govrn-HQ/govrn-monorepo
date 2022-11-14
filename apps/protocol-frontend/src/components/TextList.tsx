import { HStack, List, ListIcon, ListItem } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/all';
import { IconType } from 'react-icons';
import React from 'react';

interface TextListItemProps {
  id: string;
  text: string | React.ReactNode;
  icon?: IconType;
  iconColor?: string;
}

const TextListItem = ({
  id,
  text,
  icon = MdCheckCircle,
  iconColor = 'green.500',
}: TextListItemProps) => {
  return (
    <ListItem id={id}>
      <HStack>
        <ListIcon as={icon} color={iconColor} />
        {text}
      </HStack>
    </ListItem>
  );
};

export const TextList = ({ items }: { items: TextListItemProps[] }) => {
  return (
    <List variant="primary" paddingBottom={3} spacing={2}>
      {' '}
      {items.map(i => TextListItem(i))}
    </List>
  );
};
