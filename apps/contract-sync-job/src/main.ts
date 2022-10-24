import { GovrnContract, NetworkConfig } from '@govrn/govrn-contract-client';
import { GovrnGraphClient } from '@govrn/govrn-subgraph-client';
import { GovrnProtocol, SortOrder } from '@govrn/protocol-client';
import { ethers } from 'ethers';
import { GraphQLClient } from 'graphql-request';
import { fetchIPFS } from './ipfs';
import {
  ContributionData,
  createJobRun,
  getContribution,
  getOrInsertActivityType,
  getOrInsertUser,
  upsertContribution,
} from './db';

const PROTOCOL_URL = process.env.PROTOCOL_URL;
const SUBGRAPH_ENDPOINT = process.env.SUBGRAPH_URL;
const CONTRACT_SYNC_TOKEN = process.env.CONTRACT_SYNC_TOKEN;
const JOB_NAME = 'contract-sync-job';

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const CHAIN_URL = process.env.CHAIN_URL;
const CHAIN_ID = 100;

const networkConfig: NetworkConfig = {
  address: CONTRACT_ADDRESS,
  chainId: CHAIN_ID,
};

const provider = new ethers.providers.JsonRpcProvider(CHAIN_URL);
const govrnContract = new GovrnContract(networkConfig, provider);

const main = async () => {
  console.log(':: Starting to Process Contribution(s)');

  const graphQLClient = new GraphQLClient(SUBGRAPH_ENDPOINT);
  const govrn = new GovrnProtocol(PROTOCOL_URL, null, {
    Authorization: CONTRACT_SYNC_TOKEN,
  });
  const client = new GovrnGraphClient(graphQLClient);

  const lastRun = await govrn.jobRun.list({
    first: 1,
    orderBy: { completedDate: SortOrder.Desc },
    where: { name: { equals: JOB_NAME } },
  });
  const startDate =
    lastRun.length > 0 ? new Date(lastRun[0].startDate) : new Date();

  const contributionsEvents = (await client.listContributions({}))
    .contributions;
  const contributionActivityTypeId = await getOrInsertActivityType(govrn, {
    name: 'Contribution',
  });
  console.log(
    `:: Processing ${contributionsEvents.length} Contribution Event(s)`,
  );
  const contributionResults = await Promise.all(
    contributionsEvents.map(async (event): Promise<ContributionData | null> => {
      const contr = await govrnContract.contributions({
        tokenId: event.contributionId,
      });

      const userId = await getOrInsertUser(govrn, {
        address: event.address,
      });

      const detailsUri = ethers.utils.toUtf8String(contr.detailsUri);
      try {
        const contributionDetails = await fetchIPFS(detailsUri);
        return {
          name: contributionDetails.name,
          status_id: 2,
          activity_type_id: contributionActivityTypeId,
          user_id: userId,
          date_of_engagement: new Date(contr.dateOfEngagement.toNumber()),
          date_of_submission: new Date(contr.dateOfSubmission.toNumber()),
          details: contributionDetails.details,
          proof: contributionDetails.proof,
          on_chain_id: Number(event.id),
          chain_id: CHAIN_ID,
        };
      } catch {
        return null;
      }
    }),
  );
  const contributions = contributionResults.filter(
    contribution => contribution !== null,
  );

  if (contributions.length > 0) {
    const promises = await Promise.allSettled(
      contributions.map(
        async contribution => await upsertContribution(govrn, contribution),
      ),
    );

    const upsertedCount = promises.filter(p => p.status === 'fulfilled').length;
    if (upsertedCount > 0) {
      console.log(`:: Inserted ${upsertedCount} Contribution(s)`);
    }

    const failedCount = promises.length - upsertedCount;
    if (failedCount > 0) {
      console.log(`:: Failed to Insert ${failedCount} Contribution(s)`);
    }

    console.log(`:: Finished Processing Contribution Events`);
  }

  console.log(':: Starting to Process Attestations');

  const attestationEvents = (await client.listAttestations({})).attestations;
  console.log(`:: Processing ${attestationEvents.length} Attestation Event(s)`);

  const attestations = await Promise.all(
    attestationEvents.map(async event => {
      const attestation = await govrnContract.attestations({
        tokenId: event.contribution.id,
        address: event.attestor,
      });

      console.log(
        `:: Processing Attestation of contribution: ${attestation.contribution.toNumber()}`,
      );
      const contributionId = await getContribution(govrn, {
        tokenId: attestation.contribution.toNumber(),
      });

      const userId = await getOrInsertUser(govrn, {
        address: event.attestor,
      });

      return {
        confidence_id: 1, // TODO: insert the manually.
        user_id: userId,
        contribution_id: contributionId,
        date_of_attestation: new Date(attestation.dateOfSubmission.toNumber()),
      };
    }),
  );

  const attestationsCount = await govrn.attestation.bulkCreate({
    data: attestations,
    skipDuplicates: true,
  });

  console.log(
    `:: Inserting ${attestationsCount.createManyAttestation.count} Attestations`,
  );

  await createJobRun(govrn, {
    startDate,
    completedDate: new Date(),
    name: JOB_NAME,
  });
  console.log(`:: Finished processing Contributions`);
};

main()
  .then()
  .catch(e => console.error(e));
