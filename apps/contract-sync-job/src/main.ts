import { GovrnContract, NetworkConfig } from '@govrn/govrn-contract-client';
import { GovrnGraphClient } from '@govrn/govrn-subgraph-client';
import { ethers } from 'ethers';
import { fetchIPFS } from './ipfs';
import {
  createJobRun,
  getContribution,
  getJobRun,
  getOrInsertActivityType,
  getOrInsertUser,
  upsertContribution,
  upsertAttestation,
} from './db';
import { batch, MintedContributionSchemaV1 } from '@govrn/protocol-client';
import { getLogger } from '@govrn/utils';

const CHAIN_NAME = process.env.CHAIN_NAME;
const JOB_NAME = `contract-sync-job-${CHAIN_NAME}`;

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const CHAIN_URL = process.env.CHAIN_URL;
const CHAIN_ID = Number(process.env.CHAIN_ID);
const OFFSET_DATE = Number(process.env.OFFSET_DATE);

const BATCH_SIZE = 100;
const MAX_SUBGRAPH_RESPONSE = 1000;

const networkConfig: NetworkConfig = {
  address: CONTRACT_ADDRESS,
  chainId: CHAIN_ID,
};

const provider = new ethers.providers.JsonRpcProvider(CHAIN_URL);
const govrnContract = new GovrnContract(networkConfig, provider);
export const logger = getLogger('contract-sync-job', CHAIN_NAME);

const main = async () => {
  logger.info(':: Starting to Process Contribution(s)');

  const client = new GovrnGraphClient(CHAIN_ID);
  const lastRun = await getJobRun({ name: JOB_NAME });

  const startDate =
    lastRun.length > 0
      ? new Date(lastRun[0].completedDate)
      : new Date(267285020000);
  const windowSizeSeconds = OFFSET_DATE * 60 * 60;
  const lookbackWindowStart = Math.ceil(
    startDate.getTime() / 1000 - windowSizeSeconds,
  );

  logger.info(":: Last run's completed date: " + startDate.toISOString());
  const lookbackWindowStartStr = new Date(
    lookbackWindowStart * 1000,
  ).toISOString();
  logger.info(
    ':: Lookback window start time: ' +
      lookbackWindowStartStr +
      ' (' +
      lookbackWindowStart +
      ')',
  );

  // loop until all events in the time window have been processed
  let batchNum = 0;
  const contributionsEvents = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const contributionsEventsBatch = (
      await client.listContributions({
        where: { createdAt_gte: lookbackWindowStart },
        first: MAX_SUBGRAPH_RESPONSE,
        skip: batchNum * MAX_SUBGRAPH_RESPONSE,
      })
    ).contributions;
    batchNum++;

    if (contributionsEventsBatch.length === 0) {
      logger.info(':: No more contribution events to process');
      break;
    }

    contributionsEvents.push(...contributionsEventsBatch);

    if (contributionsEventsBatch.length !== MAX_SUBGRAPH_RESPONSE) {
      logger.info(
        `:: Retrieved all ${contributionsEvents.length} contribution events`,
      );
      break;
    }
  }

  const contributionActivityTypeId = await getOrInsertActivityType({
    name: 'Contribution',
  });
  logger.info(
    `:: Processing ${contributionsEvents.length} Contribution Event(s)`,
  );

  const { results: contributions } = await batch(
    contributionsEvents,
    async event => {
      const contr = await govrnContract.contributions({
        tokenId: event.contributionId,
      });

      // if owner == 0, the contribution has been burned
      // skip for now
      if (Number(contr[0]) == 0) {
        logger.info(
          ':: contribution %s has been burned - skipping',
          event.contributionId,
        );
        return null;
      }

      const userId = await getOrInsertUser({
        address: event.address,
      });

      const detailsUri = ethers.utils.toUtf8String(contr.detailsUri);
      try {
        const contributionDetails = await fetchIPFS<MintedContributionSchemaV1>(
          detailsUri,
        );
        if (contributionDetails?.version === 1) {
          return {
            name: contributionDetails.name,
            status_name: 'minted',
            activity_type_name: contributionDetails.activityName,
            user_id: userId,
            date_of_engagement: new Date(contr.dateOfEngagement.toNumber()),
            date_of_submission: new Date(contr.dateOfSubmission.toNumber()),
            details: contributionDetails.details,
            proof: contributionDetails.proof,
            on_chain_id: Number(event.id),
            chain_id: CHAIN_ID,
            txHash: event.txHash,
          };
        }
        return {
          name: contributionDetails.name,
          status_name: 'minted',
          activity_type_id: contributionActivityTypeId,
          user_id: userId,
          date_of_engagement: new Date(contr.dateOfEngagement.toNumber()),
          date_of_submission: new Date(contr.dateOfSubmission.toNumber()),
          details: contributionDetails.details,
          proof: contributionDetails.proof,
          on_chain_id: Number(event.id),
          chain_id: CHAIN_ID,
          txHash: event.txHash,
        };
      } catch (error) {
        logger.error(
          ':: Error fetching contribution details for contribution %s: %s',
          event.contributionId,
          error,
        );
        return null;
      }
    },
    BATCH_SIZE,
  );

  if (contributions.length > 0) {
    const { results: inserted, errors } = await batch(
      contributions.filter(contribution => contribution !== null),
      async contribution => await upsertContribution(contribution),
      BATCH_SIZE,
    );
    if (errors?.length > 0) {
      logger.error(':: %s Error(s) Upserting Contribution(s): ', errors.length);
      for (const err of errors) {
        logger.error('[ %s ]', err.message);
      }
    }

    const upsertedCount = inserted.filter(c => c != null).length;
    if (upsertedCount > 0) {
      logger.info(`:: Inserted ${upsertedCount} Contribution(s)`);
    }

    const failedCount = contributionsEvents.length - upsertedCount;
    if (failedCount > 0) {
      logger.error(`:: Failed to Insert ${failedCount} Contribution(s)`);
    }

    logger.info(`:: Finished Processing Contribution Events`);
  }

  logger.info(':: Starting to Process Attestations');

  // loop until all events in the time window have been processed
  batchNum = 0;
  const attestationEvents = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const attestationEventsBatch = (
      await client.listContributions({
        where: { createdAt_gte: lookbackWindowStart },
        first: MAX_SUBGRAPH_RESPONSE,
        skip: batchNum * MAX_SUBGRAPH_RESPONSE,
      })
    ).contributions;
    batchNum++;

    if (attestationEventsBatch.length === 0) {
      logger.info(':: No more attestation events to process');
      break;
    }

    attestationEvents.push(...attestationEventsBatch);

    if (attestationEventsBatch.length !== MAX_SUBGRAPH_RESPONSE) {
      logger.info(
        `:: Retrieved all ${contributionsEvents.length} attestation events`,
      );
      break;
    }
  }

  logger.info(`:: Processing ${attestationEvents.length} Attestation Event(s)`);

  const { results: attestations } = await batch(
    attestationEvents,
    async event => {
      logger.info(
        `:: Processing Attestation of contribution: ${Number(
          event.contribution.id,
        )}`,
      );
      const contributionId = await getContribution({
        tokenId: Number(event.contribution.id),
      });

      const userId = await getOrInsertUser({
        address: event.attestor,
      });

      return {
        confidence_id: 1, // TODO: insert the manually.
        user_id: userId,
        contribution_id: contributionId,
      };
    },
    BATCH_SIZE,
  );

  const { results: insertedAttestations, errors: insertedErrors } = await batch(
    attestations,
    async attestation => await upsertAttestation(attestation),
    BATCH_SIZE,
  );
  if (insertedErrors?.length > 0) {
    logger.error(
      ':: %s Error(s) Upserting Attestations(s): ',
      insertedErrors.length,
    );
    for (const err of insertedErrors) {
      logger.error('[ %s ]', err.message);
    }
  }
  logger.info(`:: Inserting ${insertedAttestations.length} Attestations`);
  logger.info(
    `:: ${
      attestations.length - insertedAttestations.length
    } of attestations already existing`,
  );

  await createJobRun({
    startDate,
    completedDate: new Date(),
    name: JOB_NAME,
  });
  logger.info(`:: Finished processing Contributions`);
};

main()
  .then()
  .catch(e => logger.error(e));
