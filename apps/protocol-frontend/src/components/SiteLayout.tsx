import React from 'react';
import { Flex, Grid, useBreakpointValue } from '@chakra-ui/react';
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
    <Grid
      templateColumns="20vw auto"
      as="section"
      position="relative"
      height="100vh"
      bg="gray.50"
      overflowY="auto"
    >
      {isDesktop && location.pathname !== '/' ? <Sidebar /> : null}
      <Flex direction="column" gridColumnStart="2">
        {children}
      </Flex>
    </Grid>
  );
};

export default SiteLayout;
