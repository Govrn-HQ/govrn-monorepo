import {
  ActivityTypeCreateNestedOneWithoutContributionsInput,
  GovrnProtocol,
  SortOrder,
} from '@govrn/protocol-client';
import { logger } from './main';
import { format } from 'util';

export type ContributionData = {
  contribution_id?: number;
  name: string;
  status_name: string;
  activity_type_name?: string;
  activity_type_id?: number;
  user_id: number;
  date_of_engagement: Date;
  date_of_submission: Date;
  details?: string;
  proof?: string;
  on_chain_id: number;
  /* Chain ID itself, not the id of chain record in db. */
  chain_id: number;
  txHash: string;
};

const CHAIN_ID = process.env.CHAIN_ID;
const PROTOCOL_URL = process.env.PROTOCOL_URL;
const CONTRACT_SYNC_TOKEN = process.env.CONTRACT_SYNC_TOKEN;

export const govrn = new GovrnProtocol(PROTOCOL_URL, null, {
  Authorization: CONTRACT_SYNC_TOKEN,
});

export const getOrInsertUser = async (data: {
  address: string;
}): Promise<number> => {
  try {
    // Query existing user.
    const user = await govrn.user.list({
      where: {
        address: { equals: data.address },
      },
      first: 1,
    });

    // Returns the id, if user exists.
    if (user.length === 1) {
      return user[0]?.id;
    }

    // Insert new user into db, if user doesn't exist.
    const newUser = await govrn.user.create({
      address: data.address,
      username: data.address,
    });

    return newUser.id;
  } catch (error) {
    const err = format(
      'Error getting or inserting user %s: %s',
      data.address,
      error,
    );
    throw err;
  }
};

export const getOrInsertActivityType = async (data: {
  name: string;
}): Promise<number> => {
  try {
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
  } catch (error) {
    const err = format(
      'Error getting or inserting activity type %s: %s',
      data.name,
      error,
    );
    throw err;
  }
};

export async function getContribution(data: { tokenId: number }) {
  try {
    const contrs = (
      await govrn.contribution.list({
        where: { on_chain_id: { equals: data.tokenId } },
        first: 1,
      })
    ).result;

    if (contrs.length != 0) return contrs[0].id;
    throw new Error('Contribution must exist for this attestation!');
  } catch (error) {
    const err = format(
      'Error getting contribution id %s: %s',
      data.tokenId,
      error,
    );
    throw err;
  }
}

const getIdOfChain = async (chainId: number) => {
  try {
    const chain = await govrn.chain.get({ where: { chain_id: `${chainId}` } });
    return chain.id;
  } catch (error) {
    const err = format('Error getting chain id %s: %s', chainId, error);
    throw err;
  }
};

export const upsertContribution = async (contribution: ContributionData) => {
  logger.info(
    `:: Upsert Contribution with on chain id ${contribution.on_chain_id} and/or id ${contribution.contribution_id}`,
  );

  try {
    // retrieve any existing pending contributions, i.e. contributions staged through
    // the UI but not yet minted
    const existingContribution = await govrn.contribution.list({
      where: {
        details: { equals: contribution.details },
        name: { equals: contribution.name },
        proof: { equals: contribution.proof },
        status: { is: { name: { equals: 'pending' } } },
        user_id: { equals: contribution.user_id },
        on_chain_id: { equals: null },
      },
    });

    // update all existing contributions status which have been minted on chain
    if (existingContribution.result.length > 0) {
      for (const result of existingContribution.result) {
        const existingContributionInDB = await govrn.contribution.list({
          where: {
            AND: [
              {
                on_chain_id: { equals: contribution.on_chain_id },
                chain: {
                  is: { chain_id: { equals: `${contribution.chain_id}` } },
                },
              },
            ],
          },
        });
        if (existingContributionInDB.result.length > 0) {
          await govrn.contribution.deleteStaging(
            existingContributionInDB.result[0].id,
          );
          continue;
        }

        await govrn.contribution.update({
          data: {
            date_of_engagement: { set: contribution.date_of_engagement },
            activity_type: {
              connectOrCreate: {
                create: { name: contribution.activity_type_name },
                where: { name: contribution.activity_type_name },
              },
            },
            status: {
              connect: { name: 'minted' },
            },
            on_chain_id: { set: contribution.on_chain_id },
            chain: { connect: { chain_id: `${CHAIN_ID}` } },
            tx_hash: { set: contribution.txHash },
          },
          where: {
            id: result.id,
          },
        });
      }
      return existingContribution.result.length;
    }

    // activity_type_name is nullable; if not supplied, use id
    let connectOrCreateActivityType: ActivityTypeCreateNestedOneWithoutContributionsInput;
    if (!contribution.activity_type_name) {
      connectOrCreateActivityType = {
        connect: { id: contribution.activity_type_id },
      };
    } else if (contribution.activity_type_name) {
      connectOrCreateActivityType = {
        connectOrCreate: {
          create: { name: contribution.activity_type_name },
          where: { name: contribution.activity_type_name },
        },
      };
    } else {
      throw new Error(
        'neither activity_type_name nor activity_type_id supplied',
      );
    }

    // create new db contribution if the supplied contribution was minted
    // directly through the contract
    return await govrn.contribution.upsert({
      where: {
        chain_id_on_chain_id: {
          chain_id: await getIdOfChain(contribution.chain_id),
          on_chain_id: contribution.on_chain_id,
        },
      },
      create: {
        name: contribution.name,
        proof: contribution.proof,
        details: contribution.details,
        date_of_engagement: contribution.date_of_engagement,
        user: { connect: { id: contribution.user_id } },
        activity_type: {
          ...connectOrCreateActivityType,
        },

        status: {
          connect: { name: 'minted' },
        },
        on_chain_id: contribution.on_chain_id,
        chain: { connect: { chain_id: `${CHAIN_ID}` } },
        tx_hash: contribution.txHash,
      },
      update: {
        name: { set: contribution.name },
        on_chain_id: { set: contribution.on_chain_id },
        proof: { set: contribution.proof ?? null },
        details: { set: contribution.details ?? null },
        chain: { connect: { chain_id: `${CHAIN_ID}` } },
        status: { connect: { name: contribution.status_name } },
        tx_hash: { set: contribution.txHash },
      },
    });
  } catch (error) {
    const err = format(
      'Error upserting contribution token id %s: %s',
      contribution.on_chain_id,
      error,
    );
    throw err;
  }
};

export const upsertAttestation = async (attestation: {
  confidence_id: number;
  user_id: number;
  contribution_id: number;
}) => {
  try {
    return await govrn.attestation.upsert({
      where: {
        user_id_contribution_id: {
          user_id: attestation.user_id,
          contribution_id: attestation.contribution_id,
        },
      },
      create: {
        attestation_status: { connect: { name: 'attested' } },
        user: { connect: { id: attestation.user_id } },
        contribution: { connect: { id: attestation.contribution_id } },
      },
      update: {
        attestation_status: { connect: { name: 'attested' } },
      },
    });
  } catch (error) {
    const err = format(
      'Error upserting attestation for contribution id %s: %s',
      attestation.contribution_id,
      error,
    );
    throw err;
  }
};

export const createJobRun = async (job: {
  startDate: Date;
  completedDate: Date;
  name: string;
}) => {
  return await govrn.jobRun.create({
    data: job,
  });
};

export const getJobRun = async (args: { name: string }) => {
  return await govrn.jobRun.list({
    first: 1,
    orderBy: { completedDate: SortOrder.Desc },
    where: { name: { equals: args.name } },
  });
};
