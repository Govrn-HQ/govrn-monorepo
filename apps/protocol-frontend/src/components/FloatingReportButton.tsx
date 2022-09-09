import { Box, IconButton, Tooltip } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import { useAccount } from 'wagmi';
import { ModalWrapper } from '@govrn/protocol-ui';

import { useOverlay } from '../contexts/OverlayContext';
import ReportForm from './ReportForm';
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
          aria-label="Add Contribution Activity Report"
          bgColor="brand.primary.100"
          color="brand.primary.600"
          size="lg"
          borderRadius="9999px"
          boxShadow="xl"
          transition="bgColor 100ms ease-in-out transform 250ms ease-in-out"
          _hover={{
            bgColor: 'brand.primary.200',
            transform: 'translateY(-4px)',
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
