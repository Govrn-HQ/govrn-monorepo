import { GovrnContract, NetworkConfig } from '@govrn/govrn-contract-client';
import { GovrnGraphClient } from '@govrn/govrn-subgraph-client';
import {
  ContributionCreateManyInput,
  GovrnProtocol,
  SortOrder,
} from '@govrn/protocol-client';
import { ethers } from 'ethers';
import { GraphQLClient } from 'graphql-request';

const protcolUrl = process.env.PROTOCOL_URL;
const SUBGRAPH_ENDPOINT = process.env.SUBGRAPH_URL;
const jobName = 'contract-sync-job';

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const CHAIN_URL = process.env.CHAIN_URL;
const networkConfig: NetworkConfig = {
  address: CONTRACT_ADDRESS,
  chainId: 2,
};

const provider = new ethers.providers.JsonRpcProvider(CHAIN_URL);
const govrnContract = new GovrnContract(networkConfig, provider);

const getOrInsertUser = async (
  govrn: GovrnProtocol,
  data: { address: string }
): Promise<number> => {
  // Query existing user.
  const user = await govrn.user.list({
    where: {
      address: { equals: data.address },
    },
    first: 1,
  });

  // Returns the id, if user exists.
  if (user.length !== 0) {
    return user[0]?.id;
  }

  // Insert new user into db, if user doesn't exist.
  const newUser = await govrn.user.create({
    address: data.address,
    username: data.address,
  });

  return newUser.id;
};

const getOrInsertActivityType = async (
  govrn: GovrnProtocol,
  data: { name: string }
): Promise<number> => {
  // Check for an existing activity types.
  const activityTypeId = await govrn.activity_type.list({
    where: { name: { equals: data.name } },
    first: 1,
  });
  if (activityTypeId.length > 0) return activityTypeId[0].id;

  // if there are no activity type, create new one.
  const activityTypeCreate = await govrn.activity_type.create({
    data: { name: data.name },
  });
  return activityTypeCreate.id;
};

async function getContribution(
  govrn: GovrnProtocol,
  data: { tokenId: number }
) {
  const contrs = await govrn.contribution.list({
    where: { on_chain_id: { equals: data.tokenId } },
    first: 1,
  });

  if (contrs.length != 0) return contrs[0].id;
  throw new Error('Contribution must exist for this attestation!');
}

const createJobRun = async (
  govrn: GovrnProtocol,
  job: { startDate: Date; completedDate: Date }
) => {
  const teamPromise = await govrn.jobRun.create({
    data: {
      startDate: job.startDate,
      completedDate: job.completedDate,
      name: jobName,
    },
  });
  return teamPromise;
};

const main = async () => {
  console.log(':: Starting to Process Contribution(s)');

  const graphQLClient = new GraphQLClient(SUBGRAPH_ENDPOINT);
  const govrn = new GovrnProtocol(protcolUrl);
  const client = new GovrnGraphClient(graphQLClient);

  const lastRun = await govrn.jobRun.list({
    first: 1,
    orderBy: { completedDate: SortOrder.Desc },
    where: { name: { equals: jobName } },
  });
  const startDate =
    lastRun.length > 0 ? new Date(lastRun[0].startDate) : new Date();

  const contributionsEvents = (await client.listContributions({}))
    .contributions;
  const contributionActivityTypeId = await getOrInsertActivityType(govrn, {
    name: 'Contribution',
  });
  console.log(
    `:: Processing ${contributionsEvents.length} Contribution Event(s)`
  );
  const contributions = await Promise.all(
    contributionsEvents.map(
      // async (event): Promise<ContributionCreateManyInput> => { needs updated type
      async (event) => {
        const contr = await govrnContract.contributions({
          tokenId: event.contributionId,
        });

        // console.log(`:: Processing Contribution: ${event.id} => ${contr.name}`);

        const userId = await getOrInsertUser(govrn, {
          address: event.address,
        });

        return {
          // name: contr.name,
          detailsUri: contr.detailsUri,
          status_id: 2,
          activity_type_id: contributionActivityTypeId,
          user_id: userId,
          date_of_engagement: new Date(contr.dateOfEngagement.toNumber()),
          date_of_submission: new Date(contr.dateOfSubmission.toNumber()),
          // details: contr.details,
          // proof: contr.proof,
          on_chain_id: Number(event.id),
        };
      }
    )
  );

  const contributionsCount = await govrn.contribution.bulkCreate({
    data: contributions,
    skipDuplicates: false,
  });

  console.log(`:: Inserting ${contributionsCount} Contribution(s)`);
  console.log(`:: Finished Processing Contribution Events`);
  console.log(':: Starting to Process Attestations');

  const attestationEvents = (await client.listAttestations({})).attestations;
  console.log(`:: Processing ${attestationEvents.length} Attestation Event(s)`);

  const attestations = await Promise.all(
    attestationEvents.map(async (event) => {
      const attestation = await govrnContract.attestations({
        tokenId: event.contribution.id,
        address: event.attestor,
      });

      console.log(
        `:: Processing Attestation of contribution: ${attestation.contribution.toNumber()}`
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
    })
  );

  const attestationsCount = await govrn.attestation.bulkCreate({
    data: attestations,
    skipDuplicates: false,
  });

  console.log(
    `:: Inserting ${attestationsCount.createManyAttestation.count} Attestations`
  );

  await createJobRun(govrn, { startDate, completedDate: new Date() });
  console.log(`:: Finished processing Contributions`);
};

main();
