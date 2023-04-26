import { Box, Tooltip } from '@chakra-ui/react';
import React from 'react';

interface VerificationHoverProps {
  status: 'Verified' | 'Unverified' | 'noFramework';
  daoName: string | null | undefined;
  currentThreshold?: number | null;
  frameworkThreshold?: number | null;
  children: React.ReactNode;
}

const VerificationHover = ({
  status,
  daoName,
  currentThreshold,
  children,
}: VerificationHoverProps) => {
  let thresholdLabel;
  if (currentThreshold === 1) {
    thresholdLabel = `This contribution only needs ${currentThreshold} more attestation to be verified by your DAO! Be the one to push it through!`;
  }
  if (
    currentThreshold !== null &&
    currentThreshold !== undefined &&
    currentThreshold > 1
  ) {
    thresholdLabel = `This contribution needs ${currentThreshold} more attestations to be verified by your DAO.`;
  }
  if (currentThreshold === null) {
    thresholdLabel = `This contribution needs more attestations to be verified by your DAO.`;
  }
  const verificationPropsMap = {
    Verified: {
      label: 'This contribution has been verified by the DAO!',
      variant: 'tertiary',
    },
    Unverified: {
      label: thresholdLabel,
      variant: currentThreshold === 1 ? 'secondary' : 'primaryPurple',
    },
    noFramework: {
      label: `${daoName} hasn't setup a Verification Framework yet.`,
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
