import { Box, Grid } from '@chakra-ui/react';
import { useOverlay } from '../contexts/OverlayContext';
import PageHeading from './PageHeading';
import DaoTextareaForm from './DaoTextareaForm';
import DaoImportCard from './DaoImportCard';
import ModalWrapper from './ModalWrapper';
import ImportHistoryTable from './ImportHistoryTable';

const CreateDaoLayout = () => {
  // this will be removed once we add this to the dao settings page -- needed for testing the modal
  const { setModals } = useOverlay();
  const localOverlay = useOverlay();

  const guildImportModalHandler = () => {
    setModals({ guildImportModal: true }); // no component yet, but added to overlay modals
  };

  const csvImportModalHandler = () => {
    setModals({ csvImportModal: true }); // no component yet, but added to overlay modals
  };

  const createDaoModalHandler = () => {
    setModals({ createDaoModal: true });
  };
  const daoImportMethods = [
    {
      importName: 'Import via Guild.xyz',
      importDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      importButtonCopy: 'Connect to Guild API',
      importModalHandler: guildImportModalHandler,
    },
    {
      importName: 'Import via CSV File',
      importDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      importButtonCopy: 'Upload CSV File',
      importModalHandler: csvImportModalHandler,
    },
    {
      importName: 'Create a DAO Manually',
      importDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
        <ImportHistoryTable />
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
        title="Add DAO Members"
        localOverlay={localOverlay}
        size="3xl"
        content={<DaoTextareaForm />}
      />
    </>
  );
};

export default CreateDaoLayout;
