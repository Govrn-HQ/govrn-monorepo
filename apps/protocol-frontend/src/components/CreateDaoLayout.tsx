import { Box, Flex, Grid } from '@chakra-ui/react';
import { useOverlay } from '../contexts/OverlayContext';
import DaoTextareaForm from './DaoTextareaForm';
import ModalWrapper from './ModalWrapper';
import PageHeading from './PageHeading';

const CreateDaoLayout = () => {
  // this will be removed once we add this to the dao settings page -- needed for testing the modal
  const { setModals } = useOverlay();
  const localOverlay = useOverlay();

  const createDaoModalHandler = () => {
    setModals({ createDaoModal: true });
  };

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
        <Flex
          justify="space-between"
          direction="column"
          wrap="wrap"
          width="100%"
          paddingX={4}
          paddingY={4}
          background="white"
          boxShadow="sm"
          borderRadius={{ base: 'none', md: 'lg' }}
          marginBottom={7}
        >
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
              xl: 'repeat(4, 1fr)',
            }}
            gap={4}
            justifyContent="space-between"
          >
            <DaoImportCard
              importName="Create a DAO Manually"
              importDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              importModal={createDaoModalHandler}
            />
          </Grid>
        </Flex>
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
