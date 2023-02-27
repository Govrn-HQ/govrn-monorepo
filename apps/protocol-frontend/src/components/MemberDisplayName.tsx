import { Text, Tooltip } from '@chakra-ui/react';
import { UIContribution } from '@govrn/ui-types';
import { displayAddress } from '../utils/web3';

interface MemberDisplayNameProps {
  memberValue: UIContribution['user'];
}

const MemberDisplayName = ({ memberValue }: MemberDisplayNameProps) => {
  const hasMemberName = memberValue.name || memberValue.display_name;
  const displayMemberName =
    memberValue.name ||
    memberValue.display_name ||
    displayAddress(memberValue.address);
  return hasMemberName ? (
    <Tooltip
      variant="primary"
      label={memberValue.address}
      fontSize="sm"
      placement="right"
    >
      <Text whiteSpace="normal">{displayMemberName}</Text>
    </Tooltip>
  ) : (
    <Text whiteSpace="normal">{displayMemberName}</Text>
  );
};

export default MemberDisplayName;
