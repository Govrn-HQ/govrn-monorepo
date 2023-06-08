import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  Stack,
  HStack,
  Heading,
  Text,
  Link as ChakraLink,
  Divider,
  Icon,
} from '@chakra-ui/react';
import { formatDate } from '../utils/date';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Pill } from '@govrn/protocol-ui';
import { UIContribution } from '@govrn/ui-types';
import { FiArrowLeft } from 'react-icons/fi';
import { HiOutlineLink } from 'react-icons/hi';
import { BLOCK_EXPLORER_URLS } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { ipfsToHttp } from '../utils/ipfs';
import { useOverlay } from '../contexts/OverlayContext';
import { AttestationModal } from './BulkAttestationModal';
import ModalWrapper from './ModalWrapper';
import { VerifiedCelebrationModal } from './VerifiedCelebrationModal';

interface ContributionDetailShellProps {
  contribution: UIContribution;
}

const ContributionDetailShell = ({
  contribution,
}: ContributionDetailShellProps) => {
  const [verifiedContribution, setVerifiedContribution] =
    useState<UIContribution | null>(null);
  const navigate = useNavigate();
  const { setModals } = useOverlay();
  const localOverlay = useOverlay();
  console.log('contribution', contribution);

  const attestationsModalHandler = () => {
    setModals({ attestationModal: true });
  };

  return (
    <>
      <Box
        paddingY={{ base: '4', md: '8' }}
        paddingX={{ base: '4', md: '8' }}
        color="gray.700"
        maxWidth="900px"
        width="100%"
      >
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
              <Heading
                as="h2"
                size={{ base: 'lg', lg: 'xl' }}
                fontWeight="medium"
                color="gray.700"
              >
                {contribution?.name}
              </Heading>
              <Flex direction="column" gap={2}>
                <Text fontSize="sm" color="gray.600">
                  {`${contribution?.date_of_engagement}`}
                </Text>
                <Flex direction="row" gap={2}>
                  {contribution?.guilds.length > 0 &&
                    contribution?.guilds.map(guild => (
                      <Pill
                        label={guild.guild.name}
                        icon={
                          (guild.guild.verification_setting !== null &&
                            guild.verificationStatus?.name === 'Verified') ||
                          guild.guild.verification_setting
                            ?.num_of_attestations === 0
                            ? 'checkmark'
                            : null
                        }
                        status={
                          (guild.guild.verification_setting !== null &&
                            guild.verificationStatus?.name === 'Verified') ||
                          guild.guild.verification_setting
                            ?.num_of_attestations === 0
                            ? 'primary'
                            : 'tertiary'
                        }
                      />
                    ))}
                  <Pill
                    status={
                      contribution?.status.name === 'minted'
                        ? 'secondary'
                        : 'tertiary'
                    }
                    label={
                      contribution?.status.name.charAt(0).toUpperCase() +
                      contribution?.status.name.slice(1)
                    }
                  />
                </Flex>
              </Flex>
            </Flex>
            {contribution?.details && (
              <Text maxW={{ base: '40ch' }}>{contribution?.details}</Text>
            )}
            <Stack marginBottom={4} fontSize="sm" fontWeight="bolder">
              {contribution?.proof && (
                <ChakraLink href={ipfsToHttp(contribution?.proof)} isExternal>
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
          {contribution?.status?.name === 'minted' ? (
            <Stack spacing={2} width="full" maxW="20ch" paddingTop={4}>
              <Button variant="primary" onClick={attestationsModalHandler}>
                Attest
              </Button>
            </Stack>
          ) : null}
          {contribution?.attestations.length > 0 && (
            <Flex paddingY={4}>
              <Stack spacing={2} width="full" maxW="20ch">
                <Flex direction="column" gap={2}>
                  <Heading as="h3" fontSize="lg" fontWeight="normal">
                    {contribution?.attestations.length}
                    {contribution?.attestations.length > 1
                      ? ' Attestations'
                      : ' Attestation'}
                  </Heading>
                </Flex>
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
                              {formatDate(attestation.createdAt)}
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
      <ModalWrapper
        name="attestationModal"
        title="Attest to DAO Contributions"
        localOverlay={localOverlay}
        size="3xl"
        content={
          <AttestationModal
            contribution={contribution}
            setVerifiedContribution={setVerifiedContribution}
          />
        }
      />
      {verifiedContribution !== null && (
        <ModalWrapper
          name="verifiedCelebrationModal"
          title=""
          localOverlay={localOverlay}
          size="3xl"
          bgColor="brand.gradientBackgroundModal"
          closeButtonColor="white"
          content={
            <VerifiedCelebrationModal
              verifiedContribution={verifiedContribution}
            />
          }
        />
      )}
    </>
  );
};

export default ContributionDetailShell;
