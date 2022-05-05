import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';
import { Input } from '@govrn/protocol-ui';

interface SiteLayoutProps {
  children: React.ReactChild;
  minHeight?: string;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({
  children,
  minHeight = '100vh',
}: SiteLayoutProps) => {
  return (
    <Flex
      direction="column"
      overflowX="hidden"
      margin="0 auto"
      minHeight={minHeight || '100vh'}
      minWidth="100vw"
      position="relative"
      background="white"
    >
      <Header />
      <Flex
        direction="column"
        align="center"
        justify={['flex-start', 'flex-start', 'center', 'center']}
        flex="1"
        minHeight={['100vh', '100vh', '0', '0']}
      >
        {children}
      </Flex>
      {/* <Footer /> // can add a Footer if you have one */}
    </Flex>
  );
};

export default SiteLayout;
