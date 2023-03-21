import { Box, Grid } from '@chakra-ui/react';
import { useOverlay } from '../contexts/OverlayContext';
import PageHeading from './PageHeading';
import DaoTextareaForm from './DaoTextareaForm';
import DaoImportCard from './DaoImportCard';
import ModalWrapper from './ModalWrapper';
import { useNavigate } from 'react-router-dom';

const CreateDaoLayout = () => {
  const { setModals } = useOverlay();
  const localOverlay = useOverlay();
  const navigate = useNavigate();

  const createDaoModalHandler = () => {
    setModals({ createDaoModal: true });
  };

  // we can add the other methods in as they're ready. we'll add the ImportHistoryTable back in at that point
  const daoImportMethods = [
    {
      importName: 'Create a DAO Manually',
      importDescription: `Simply add your members' Ethereum wallet addresses in the provided space. Once done, click "Create a DAO" and you're all set to join the party!`,
      importButtonCopy: 'Create a DAO',
      importModalHandler: createDaoModalHandler,
    },
  ];

  return (
    <>
      <Box
        paddingY={{ base: '4', md: '8' }}
        paddingX={{ base: '0', md: '8' }}
        color="gray.700"
        maxWidth="1200px"
        width="100%"
      >
        <PageHeading>Create a DAO</PageHeading>
        <Grid
          padding={{ base: 4, lg: 0 }}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
            xl: 'repeat(2, 1fr)',
          }}
          gap={8}
          justifyContent="space-between"
        >
          {daoImportMethods.map(importMethod => (
            <DaoImportCard
              importName={importMethod.importName}
              importDescription={importMethod.importDescription}
              importButtonCopy={importMethod.importButtonCopy}
              importModalHandler={importMethod.importModalHandler}
            />
          ))}
        </Grid>
      </Box>
      <ModalWrapper
        name="createDaoModal"
        title="Create a DAO"
        localOverlay={localOverlay}
        size="3xl"
        content={
          <DaoTextareaForm
            onSuccess={daoId => navigate(`/dao/${daoId}/settings`)}
          />
        }
      />
    </>
  );
};

export default CreateDaoLayout;
