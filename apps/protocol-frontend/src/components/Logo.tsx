import React from 'react';
import { Stack, Image } from '@chakra-ui/react';
import govrnLogo from '../assets/govrn-logo.png';

const Logo: React.FC = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flexStart"
      alignItems="center"
      maxWidth={{ base: '150px', lg: '180px' }}
      width={{ base: '150px', lg: '180px' }}
      height={{ base: 12 }}
    >
      <Image
        src={govrnLogo}
        alt="Govrn Logo"
        objectFit="contain"
        width={{ base: '150px', lg: '168px' }}
        height={{ base: '4rem' }}
      />
    </Stack>
  );
};

export default Logo;
