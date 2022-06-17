import React from 'react';
import { Grid, Flex, useBreakpointValue, IconButton } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import FloatingReportButton from './FloatingReportButton';
import { HiMenuAlt3 } from 'react-icons/hi';

interface SiteLayoutProps {
  children: React.ReactNode;
  minHeight?: string;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({
  children,
}: SiteLayoutProps) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const location = useLocation();
  return (
    <Grid
      templateColumns={{ base: '1fr', lg: '20vw auto' }}
      as="section"
      position="relative"
      height="100vh"
      bg="gray.50"
      overflowY="auto"
    >
      {isDesktop && location.pathname !== '/' ? (
        <Sidebar />
      ) : (
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          size="lg"
          aria-label="Open menu"
          fontSize="24px"
          color="brand.primary.500"
          // onClick={mobileNav.onOpen}
          icon={<HiMenuAlt3 />}
        />
      )}
      <Flex direction="column" gridColumnStart={{ base: '1', lg: '2' }}>
        {children}
      </Flex>
      <FloatingReportButton />
    </Grid>
  );
};

export default SiteLayout;
