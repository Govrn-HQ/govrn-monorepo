import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  Stack,
  VStack,
  HStack,
  Badge,
  Heading,
  Text,
  Link as ChakraLink,
  Divider,
  Icon,
} from '@chakra-ui/react';
import * as _ from 'lodash';
import { formatDate } from '../utils/date';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { UIContribution } from '@govrn/ui-types';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { HiOutlineLink } from 'react-icons/hi';
import { useUser } from '../contexts/UserContext';
import * as lodash from 'lodash';
import PageHeading from './PageHeading';
import { BLOCK_EXPLORER_URLS } from '../utils/constants';
import { UIUser } from '@govrn/ui-types';
import { ControlledSelect, Option } from '@govrn/protocol-ui';
import ContributionsHeatMap from './ContributionsHeatMap';

interface DashboardShellProps {
  user: UIUser;
}

// fetching will need to happen on this page, will refetch after each filter update
// passing in the User so that the name is available upon initial render

const DashboardShell = ({ user }: DashboardShellProps) => {
  const { allDaos, userContributions } = useUser();

  // this is causing a race condition where the defaultValues of the Select is trying to use
  // this before it's available. this will likely be handled with making sure that the contributions/daos are loaded first

  const daoListOptions = allDaos.map(dao => ({
    value: dao.id,
    label: dao.name ?? '',
  }));

  const daoReset = [
    {
      value: null,
      label: 'No DAO',
    },
  ];

  const combinedDaoListOptions = [...new Set([...daoReset, ...daoListOptions])];
  const [selectedDaos, setSelectedDaos] = useState([]);

  useEffect(() => {
    if (allDaos) {
      setSelectedDaos(combinedDaoListOptions);
    }
  }, [allDaos]);

  return (
    <Box
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '4', md: '8' }}
      color="gray.700"
      maxWidth="900px"
      width="100%"
    >
      <PageHeading>Dashboard</PageHeading>
      <Flex
        justify="space-between"
        direction="column"
        wrap="wrap"
        width="100%"
        paddingX={4}
        paddingTop={4}
        background="white"
        boxShadow="sm"
        borderRadius={{ base: 'none', md: 'lg' }}
        marginBottom={4}
      >
        <Flex direction="column" gap={4}>
          <Flex direction={{ base: 'column' }} gap={2}>
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Time to party,{' '}
              <Text
                as="span"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
              >
                {user?.name}
              </Text>
            </Heading>
            <Flex paddingY={4}>
              {daoListOptions.length > 0 && (
                <ControlledSelect
                  defaultValue={combinedDaoListOptions}
                  label="Choose DAOs"
                  tip="Choose DAOs to display Contributions from."
                  onChange={(daos: Option[]) => {
                    console.log('onChange', daos);
                    setSelectedDaos(daos);
                  }}
                  options={daoListOptions}
                  isMulti
                />
              )}
              <pre>[selected DAOs: {selectedDaos.length}]</pre>
            </Flex>
            <Flex direction="column" gap={2}>
              <Heading
                as="h4"
                fontSize="lg"
                color="gray.800"
                fontWeight="normal"
              >
                Contribution Heat Map
              </Heading>
              <ContributionsHeatMap contributions={userContributions} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DashboardShell;
