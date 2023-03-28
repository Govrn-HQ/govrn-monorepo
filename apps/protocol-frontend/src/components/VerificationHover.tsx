import { Box, Tooltip } from '@chakra-ui/react';
import React from 'react';

interface VerificationHoverProps {
  status: 'verified' | 'unverified' | 'closeToThreshold' | 'noFramework';
  threshold?: number;
  children: React.ReactNode;
}

const VerificationHover = ({
  status,
  threshold,
  children,
}: VerificationHoverProps) => {
  const verificationPropsMap = {
    verified: {
      label:
        'Feel free to attest to this contribution! Even though it has been verified for this DAO, additional attestations is good. ',
      variant: 'tertiary',
    },
    unverified: {
      label: `This contribution needs ${threshold} more attestations to be verified by your DAO.`,
      variant: 'primary',
    },
    closeToThreshold: {
      label: `This contribution only needs ${threshold} more attestation to be verified by your DAO! Be the one to push it through!`,
      variant: 'secondary',
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
