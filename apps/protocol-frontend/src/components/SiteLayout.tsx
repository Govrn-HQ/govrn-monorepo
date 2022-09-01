import React from 'react';
import {
  Box,
  Flex,
  Grid,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import { useLocation } from 'react-router-dom';
import FloatingReportButton from './FloatingReportButton';
import { HiMenuAlt3 } from 'react-icons/hi';
import ScrollToTopButton from './ScrollToTopButton';

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
      as="section"
      position="relative"
      // height="100vh"
      bg="gray.50"
      overflow="auto"
      width="100%"
    >
      {isMobile && location.pathname !== '/' ? (
        <IconButton
          icon={<HiMenuAlt3 />}
          size="lg"
          aria-label="Open mobile navigation"
          color="brand.primary.500"
          position="fixed"
          top={4}
          right={4}
          zIndex={1}
          onClick={mobileNav.onOpen}
        />
      ) : null}
      {isDesktop && location.pathname !== '/' ? <Sidebar /> : null}
      <MobileNav isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
      <Flex
        direction="column"
        className="content-top"
        gridColumnStart={{ base: '0', lg: '2' }}
        width="100%"
        overflow="auto"
      >
        {children}
      </Flex>
      <ScrollToTopButton />
      <FloatingReportButton />
    </Grid>
  );
};

export default SiteLayout;
