import React from 'react';
import { Flex, Container } from '@chakra-ui/react';
import Header from './Header';

interface SiteLayoutProps {
  children: React.ReactNode;
  minHeight?: string;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({
  children,
  minHeight = '100vh',
}: SiteLayoutProps) => {
  return (
    <Flex
      as="section"
      direction="column"
      overflowX="hidden"
      overflowY="auto"
      margin="0 auto"
      minHeight={minHeight || '100vh'}
      minWidth="100vw"
      height="100vh"
      position="relative"
      background="gray.50"
    >
      <Header />
      {/* <Flex
        direction="column"
        align="center"
        justify={['flex-start', 'flex-start', 'center', 'center']}
        flex="1"
        minHeight={['100vh', '100vh', '0', '0']}
      > */}
      <Container
        // paddingTop={{ base: '8', lg: '12' }}
        paddingBottom={{ base: '12', lg: '24' }}
        flex="1"
      >
        {children}
      </Container>
      {/* </Flex>  on the fence about this using Flex or not - will remove after decision*/}
    </Flex>
  );
};

export default SiteLayout;
