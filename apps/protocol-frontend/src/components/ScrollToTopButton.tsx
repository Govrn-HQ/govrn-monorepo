import { Box, IconButton, Tooltip } from '@chakra-ui/react';
import { FiChevronUp } from 'react-icons/fi';

const handleScroll = () => console.log('scrolling');

const ScrollToTopButton = () => {
  return (
    <Box position="fixed" bottom="100px" right={['16px', '84px']} zIndex={1}>
      <IconButton
        aria-label="Add Contribution Activity Report"
        bgColor="gray.200"
        color="gray.600"
        size="lg"
        borderRadius="9999px"
        boxShadow="xl"
        transition="bgColor 100ms ease-in-out transform 250ms ease-in-out"
        _hover={{
          bgColor: 'gray.300',
          transform: 'translateY(-4px)',
        }}
        icon={<FiChevronUp />}
        onClick={handleScroll}
      />
    </Box>
  );
};

export default ScrollToTopButton;
