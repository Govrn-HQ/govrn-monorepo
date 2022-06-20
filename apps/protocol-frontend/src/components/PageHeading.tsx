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
      paddingX={{ base: 4, lg: 0 }}
    >
      <Heading color="gray.800" fontWeight="normal">
        {children}
      </Heading>
    </Stack>
  );
};

export default PageHeading;
