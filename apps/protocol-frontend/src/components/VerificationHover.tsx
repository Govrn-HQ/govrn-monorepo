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
  let thresholdLabel;
  if (threshold === 1) {
    thresholdLabel = `This contribution only needs ${threshold} more attestation to be verified by your DAO! Be the one to push it through!`;
  }
  if (threshold !== null && threshold !== undefined && threshold > 1) {
    thresholdLabel = `This contribution needs ${threshold} more attestations to be verified by your DAO.`;
  }
  if (threshold === null) {
    thresholdLabel = `This contribution needs more attestations to be verified by your DAO.`;
  }
  const verificationPropsMap = {
    Verified: {
      label:
        'Feel free to attest to this contribution! Even though it has been verified for this DAO, additional attestations is good. ',
      variant: 'tertiary',
    },
    Unverified: {
      label: thresholdLabel,
      variant: threshold === 1 ? 'secondary' : 'primaryPurple',
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
