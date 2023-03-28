import { Box, Tooltip } from '@chakra-ui/react';
import React from 'react';

interface VerificationHoverProps {
  status: 'Verified' | 'Unverified' | 'noFramework';
  threshold?: number | null;
  children: React.ReactNode;
}

const VerificationHover = ({
  status,
  threshold,
  children,
}: VerificationHoverProps) => {
  console.log('threshold', threshold);
  const verificationPropsMap = {
    Verified: {
      label:
        'Feel free to attest to this contribution! Even though it has been verified for this DAO, additional attestations is good. ',
      variant: 'tertiary',
    },
    Unverified: {
      label:
        threshold === 1
          ? `This contribution needs ${threshold} more attestations to be verified by your DAO.`
          : `This contribution needs ${threshold} more attestation to be verified by your DAO!`,
      variant: threshold === 1 ? 'secondary' : 'primary',
    },
    noFramework: {
      label:
        'This contribution is not attributed to a DAO with a verification framework.',
      variant: 'tertiary',
    },
  };

  return (
    <Tooltip
      variant={verificationPropsMap[status].variant}
      label={verificationPropsMap[status].label}
      fontSize="sm"
      placement="right"
    >
      <Box as="span">{children}</Box>
    </Tooltip>
  );
};

export default VerificationHover;
