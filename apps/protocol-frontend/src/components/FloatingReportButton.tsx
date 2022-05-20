import { Box, IconButton } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';

const FloatingReportButton = () => (
  <Box position="fixed" bottom="40px" right={['16px', '84px']} zIndex={1}>
    <IconButton
      aria-label="Add Contribution Activity"
      bgColor="brand.primary.100"
      color="brand.primary.600"
      size="lg"
      borderRadius="9999px"
      boxShadow="xl"
      transition="bgColor 100ms ease-in-out transform 250ms ease-in-out"
      _hover={{
        bgColor: 'brand.primary.200',
        transform: 'translateY(-8px)',
      }}
      icon={<FiPlus />}
    />
  </Box>
);

export default FloatingReportButton;
