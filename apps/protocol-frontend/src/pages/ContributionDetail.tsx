import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Text, Button, Heading } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';

import ContributionDetailShell from '../components/ContributionDetailShell';
import { useContributionGet } from '../hooks/useContributionGet';
import { useNavigate } from 'react-router-dom';
import { RequireAuth } from '../utils/requireAuth';
import SiteLayout from '../components/SiteLayout';

const ContributionDetails = () => {
  const { id } = useParams();
  const { data: contribution } = useContributionGet(parseInt(id || '0'));

  console.log('contribution', contribution);
  const navigate = useNavigate();

  // const memorizedContributionData = useMemo(() => {
  //   if (id) {
  //     return contribution;
  //   }
  // }, [contribution]);

  let DetailComponent = () => (
    <Box
      marginY={{ base: 10, md: 0 }}
      paddingY={{ base: '8', md: '8' }}
      paddingX={{ base: '4', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
      width="100%"
    >
      <Flex
        justify="center"
        direction="column"
        wrap="wrap"
        width="100%"
        paddingX={{ base: 4 }}
        paddingY={{ base: 4 }}
        background="white"
        boxShadow="sm"
        borderRadius={{ base: 'none', md: 'lg' }}
        marginBottom={4}
        gap={4}
      >
        <Heading
          fontSize={{ base: 'xl', lg: '3xl' }}
          color="gray.800"
          fontWeight="normal"
        >
          <span
            role="img"
            aria-labelledby="eyes emoji showcasing that there are not any Contributions submitted yet"
          >
            👀
          </span>{' '}
          Couldn't find this Contribution{' '}
          <span
            role="img"
            aria-labelledby="eyes emoji showcasing that there are not any Contributions submitted yet"
          >
            👀
          </span>
        </Heading>
        <Text>Let's try another one! </Text>
        <Box>
          <Button
            leftIcon={<FiArrowLeft />}
            variant="outline"
            padding={2}
            paddingX={4}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Box>
      </Flex>
    </Box>
  );

  if (contribution !== undefined && contribution !== null) {
    DetailComponent = () => (
      <ContributionDetailShell contribution={contribution} />
    );
  }

  if (contribution === undefined || contribution === null) {
    return <div>Error</div>;
  }
  return (
    <SiteLayout>
      <RequireAuth>
        {/* <DetailComponent /> */}
        <ContributionDetailShell contribution={contribution} />
      </RequireAuth>
    </SiteLayout>
  );
};

export default ContributionDetails;
