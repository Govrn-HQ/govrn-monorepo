import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  Stack,
  HStack,
  Badge,
  Heading,
  Text,
  Link as ChakraLink,
  Divider,
  Icon,
} from '@chakra-ui/react';
import { formatDate } from '../utils/date';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { UIContribution } from '@govrn/ui-types';
import { FiArrowLeft } from 'react-icons/fi';
import { HiOutlineLink } from 'react-icons/hi';
import PageHeading from './PageHeading';
import { BLOCK_EXPLORER_URLS } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

interface ContributionDetailShellProps {
  contribution: UIContribution;
}

const ContributionDetailShell = ({
  contribution,
}: ContributionDetailShellProps) => {
  const navigate = useNavigate();
  return (
    <Box
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '4', md: '8' }}
      color="gray.700"
      maxWidth="900px"
      width="100%"
    >
      <PageHeading>Contribution Details</PageHeading>
      <Flex direction="column" paddingBottom={4}>
        <Box>
          <Button
            leftIcon={<FiArrowLeft />}
            variant="ghost"
            onClick={() => navigate(-1)}
            padding={2}
          >
            Back
          </Button>
        </Box>
      </Flex>
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
            <Heading as="h3" size="md" fontWeight="medium" color="gray.700">
              {contribution?.name}
            </Heading>
            <Flex
              direction="row"
              justifyContent={{ base: 'space-between' }}
              flexBasis={{ base: '100%', lg: '50%' }}
            >
              <Badge colorScheme="gray" variant="subtle" padding={1}>
                {contribution?.status?.name === 'minted'
                  ? `${contribution?.status.name} 🌞`
                  : `${contribution?.status.name} 👀`}
              </Badge>
              <Text fontSize="sm" color="gray.600">
                {`${contribution?.date_of_engagement}`}
              </Text>
            </Flex>
            <Flex>
              {contribution?.guilds.length > 0 &&
                contribution?.guilds.map(guild => (
                  <Badge
                    colorScheme="cyan"
                    variant="outline"
                    padding={1}
                    key={guild.guild.id}
                  >
                    {guild.guild.name}
                  </Badge>
                ))}
            </Flex>
          </Flex>
          {contribution?.details && <Text>{contribution?.details}</Text>}
          <Stack marginBottom={4} fontSize="sm" fontWeight="bolder">
            {contribution?.proof && (
              <ChakraLink href={contribution?.proof} isExternal>
                View Proof <ExternalLinkIcon mx="2px" />
              </ChakraLink>
            )}

            {contribution?.tx_hash !== null && (
              <ChakraLink
                href={`${BLOCK_EXPLORER_URLS['gnosisChain']}/${contribution?.tx_hash}`}
                isExternal
              >
                View on Block Explorer <Icon as={HiOutlineLink} mx="2px" />
              </ChakraLink>
            )}
          </Stack>
        </Flex>
        <Divider />
        {contribution?.attestations.length > 0 && (
          <Flex paddingY={4}>
            <Stack spacing={2} width="full">
              <Heading as="h4" fontSize="lg" fontWeight="normal">
                {contribution?.attestations.length} Attestations
              </Heading>
              <List listStyleType="none">
                {contribution?.attestations.map(attestation => (
                  <ListItem
                    key={attestation.id}
                    value={attestation.id}
                    padding={2}
                    marginY={4}
                    borderRadius="lg"
                    backgroundColor="gray.50"
                  >
                    <Stack shouldWrapChildren spacing={2}>
                      <Text fontSize="sm" fontWeight="medium">
                        {attestation.user?.name}
                      </Text>
                      <HStack justify="space-between">
                        <HStack spacing="3">
                          <Text
                            fontSize="xs"
                            color="subtle"
                            fontWeight="medium"
                          >
                            {formatDate(attestation.date_of_attestation)}
                          </Text>
                        </HStack>
                      </HStack>
                    </Stack>
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default ContributionDetailShell;
