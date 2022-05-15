import React from 'react';
import {
  Flex,
  Grid,
  GridItem,
  Container,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';
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
      bg="gray.50"
      minHeight="100vh"
      as="main"
      width="100%"
      templateColumns="repeat(5, 1fr)"
    >
      <GridItem width="100%" colStart={1} colEnd={2}>
        {isDesktop && location.pathname !== '/' ? <Sidebar /> : null}{' '}
      </GridItem>
      <GridItem width="100%" colStart={2} colEnd={6}>
        <Box
          paddingBottom={{ base: '12', lg: '24' }}
          paddingY={8}
          maxWidth="1200px"
          overflowY="auto"
        >
          {children}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default SiteLayout;
