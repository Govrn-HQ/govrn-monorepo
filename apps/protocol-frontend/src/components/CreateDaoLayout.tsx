import { Box, Flex } from '@chakra-ui/react';
import PageHeading from './PageHeading';

const CreateDaoLayout = () => {
  return (
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
        {/* <ReportForm onFinish={() => navigate('/contributions')} /> */}
      </Flex>
    </Box>
  );
};

export default CreateDaoLayout;
