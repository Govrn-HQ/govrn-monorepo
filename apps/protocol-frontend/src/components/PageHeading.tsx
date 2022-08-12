import React from 'react';
import { Stack, Heading, HeadingProps } from '@chakra-ui/react';

interface PageHeadingProps extends HeadingProps {
  children: React.ReactNode;
}

const PageHeading: React.FC<PageHeadingProps> = ({
  children,
  ...props
}: PageHeadingProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="flexStart"
      alignItems="center"
      paddingBottom={4}
      paddingX={{ base: 4, lg: 0 }}
    >
      <Heading
        color="gray.800"
        fontWeight="normal"
        {...props}
        fontSize={props.fontSize ?? props.fontSize}
      >
        {children}
      </Heading>
    </Stack>
  );
};

export default PageHeading;
