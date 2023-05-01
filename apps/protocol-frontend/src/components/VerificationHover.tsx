import { Box, Tooltip } from '@chakra-ui/react';
import React from 'react';

interface VerificationHoverProps {
  status: 'Verified' | 'Unverified' | 'No Framework';
  daoName: string | null | undefined;
  currentThreshold?: number | null;
  frameworkThreshold?: number | null;
  children: React.ReactNode;
}

const VerificationHover = ({
  status,
  daoName,
  currentThreshold,
  frameworkThreshold,
  children,
}: VerificationHoverProps) => {
  let thresholdLabel;
  if (currentThreshold === 1) {
    thresholdLabel = `This contribution only needs ${currentThreshold} more attestation to be verified by ${daoName}!`;
  }
  if (
    currentThreshold !== null &&
    currentThreshold !== undefined &&
    currentThreshold > 1
  ) {
    thresholdLabel = `This contribution needs ${currentThreshold} more attestations to be verified by ${daoName}.`;
  }
  if (currentThreshold === null) {
    thresholdLabel = `This contribution needs more attestations to be verified by ${daoName}.`;
  }
  if (currentThreshold === null && frameworkThreshold === 0) {
    thresholdLabel = `This contribution has been verified by ${daoName}!`;
  }
  if (frameworkThreshold === 0) {
    thresholdLabel = `This contribution has been verified by ${daoName}!`;
  }
  const verificationPropsMap = {
    Verified: {
      label: `This contribution has been verified by ${daoName}!`,
      variant: 'tertiary',
    },
    Unverified: {
      label: thresholdLabel,
      variant: currentThreshold === 1 ? 'secondary' : 'primaryPurple',
    },
    'No Framework': {
      label: `${daoName} hasn't set up a Verification Framework yet.`,
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
