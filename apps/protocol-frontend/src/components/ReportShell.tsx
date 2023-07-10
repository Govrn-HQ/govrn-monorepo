import { Container, Flex } from '@chakra-ui/react';
import PageHeading from './PageHeading';

import ReportForm from './ReportForm';
import { useNavigate } from 'react-router-dom';

const ReportShell = () => {
  const navigate = useNavigate();

  return (
    <Container
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '0', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
    >
      <PageHeading>Report a Contribution</PageHeading>
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
        <ReportForm onFinish={() => navigate('/contributions')} />
      </Flex>
    </Container>
  );
};

export default ReportShell;
