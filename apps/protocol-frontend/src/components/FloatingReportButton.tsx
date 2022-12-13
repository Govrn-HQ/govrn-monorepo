import { Box, IconButton, Tooltip } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import { useAccount } from 'wagmi';

import { useOverlay } from '../contexts/OverlayContext';
import ReportForm from './ReportForm';
import ModalWrapper from './ModalWrapper';
import { useNavigate } from 'react-router-dom';

const FloatingReportButton = () => {
  const localOverlay = useOverlay();
  const { setModals } = useOverlay();
  const navigate = useNavigate();

  const handleReportingFormModal = () =>
    setModals({ reportingFormModal: true });

  const closeForm = () => {
    setModals({ reportingFormModal: false });
    // navigation waits until modal's closing transition finishes.
    setTimeout(() => navigate('/contributions'), 300);
  };

  const { isConnected } = useAccount();

  return (
    <Box position="fixed" bottom="40px" right={['16px', '84px']} zIndex={1}>
      <Tooltip label="Report Contribution" fontSize="md">
        <IconButton
          aria-label="Add Contribution Activity Report Button"
          background="brand.gradient"
          color="white"
          size="lg"
          fontSize={{ base: 'xl', lg: '2xl' }}
          borderRadius="9999px"
          boxShadow="xl"
          transition="background 100ms ease-in-out transform 250ms ease-in-out"
          _hover={{
            background: 'brand.gradientHover',
          }}
          _focus={{
            background: 'brand.gradientFocused',
          }}
          data-testid="floatingreportbtn-testid"
          icon={<FiPlus />}
          onClick={handleReportingFormModal}
          disabled={!isConnected}
        />
      </Tooltip>
      <ModalWrapper
        name="reportingFormModal"
        title="Report Contribution Activity"
        localOverlay={localOverlay}
        content={<ReportForm onFinish={() => closeForm()} />}
      />
    </Box>
  );
};

export default FloatingReportButton;
