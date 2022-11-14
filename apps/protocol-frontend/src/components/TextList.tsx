import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/all';
import { IconType } from 'react-icons';

interface TextListItemProps {
  id: string;
  text: string;
  icon?: IconType;
}

const TextListItem = ({
  id,
  text,
  icon = MdCheckCircle,
}: TextListItemProps) => {
  return (
    <ListItem id={id}>
      {' '}
      <ListIcon as={icon} color="green.500" />
      {text}
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
