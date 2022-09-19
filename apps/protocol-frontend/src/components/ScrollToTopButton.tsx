import { useEffect, useState } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { FiChevronUp } from 'react-icons/fi';

const handleScroll = () => {
  if (window !== null) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const buttonVisibility = () => {
      window.scrollY > 100 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener('scroll', buttonVisibility);
    return () => {
      window.removeEventListener('scroll', buttonVisibility);
    };
  }, []);

  return (
      {visible && (
        <Box
          position="fixed"
          bottom="100px"
          right={['16px', '84px']}
          zIndex={1}
        >
          <IconButton
            aria-label="Add Contribution Activity Report"
            bgColor="gray.200"
            color="gray.600"
            size="lg"
            borderRadius="9999px"
            boxShadow="xl"
            transition="all 100ms ease-in-out transform 250ms ease-in-out"
            _hover={{
              bgColor: 'gray.300',
              transform: 'translateY(-4px)',
            }}
            icon={<FiChevronUp />}
            onClick={handleScroll}
          />
        </Box>
      )}
  );
};

export default ScrollToTopButton;
