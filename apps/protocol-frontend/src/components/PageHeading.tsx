import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';

interface PageHeadingProps {
  children: React.ReactNode;
}

const PageHeading: React.FC<PageHeadingProps> = ({
  children,
}: PageHeadingProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="flexStart"
      alignItems="center"
      paddingBottom={4}
    >
      <Heading color="gray.800">{children}</Heading>
    </Stack>
  );
};

export default PageHeading;
