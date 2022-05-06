import React from 'react';
import { Flex, Container, useBreakpointValue } from '@chakra-ui/react';
import Header from './Header';
import Sidebar from './Sidebar';
import { matchRoutes, useLocation } from 'react-router-dom';

interface SiteLayoutProps {
  children: React.ReactNode;
  minHeight?: string;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({
  children,
  minHeight = '100vh',
}: SiteLayoutProps) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const location = useLocation();
  return (
    <Flex
      as="section"
      overflowX="hidden"
      overflowY="auto"
      // minHeight={minHeight || '100vh'}
      height="100vh"
      // position="relative"

      background="gray.50"
    >
      {/* <Header /> */}
      {isDesktop && location.pathname !== '/' ? <Sidebar /> : null}{' '}
      {/* TODO: add mobile nav > */}
      <Container
        paddingBottom={{ base: '12', lg: '24' }}
        paddingY={8}
        maxWidth="960px"
      >
        {children}
      </Container>
    </Flex>
  );
};

export default SiteLayout;
