import React from 'react';
import {
  Grid,
  Box,
  Flex,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
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
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const mobileNav = useDisclosure();
  const location = useLocation();

  return (
    <Grid
      templateColumns={{ base: '1fr', lg: '20vw auto' }}
      paddingX={{ base: 4, lg: 0 }}
      as="section"
      position="relative"
      height="100vh"
      bg="gray.50"
      overflowY="auto"
    >
      {isMobile && location.pathname !== '/' ? (
        <IconButton
          as={HiMenuAlt3}
          aria-label="Open mobile navigation"
          color="brand.primary.500"
          position="fixed"
          top={4}
          right={4}
          zIndex={1}
          size="sm"
          onClick={mobileNav.onOpen}
        />
      ) : null}
      {isDesktop && location.pathname !== '/' ? <Sidebar /> : null}
      <MobileNav isOpen={mobileNav.isOpen} onClose={mobileNav.onClose}>
        <Box>hi</Box>
      </MobileNav>
      <Flex direction="column" gridColumnStart={{ base: '0', lg: '2' }}>
        {children}
      </Flex>
      <FloatingReportButton />
    </Grid>
  );
};

export default SiteLayout;
