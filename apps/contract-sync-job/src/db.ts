import { GovrnProtocol, SortOrder } from '@govrn/protocol-client';

export type ContributionData = {
  name: string;
  status_id: number;
  activity_type_id: number;
  user_id: number;
  date_of_engagement: Date;
  date_of_submission: Date;
  details?: string;
  proof?: string;
  on_chain_id: number;
  /* Chain ID itself, not the id of chain record in db. */
  chain_id: number;
};

const PROTOCOL_URL = process.env.PROTOCOL_URL;
const CONTRACT_SYNC_TOKEN = process.env.CONTRACT_SYNC_TOKEN;

export const govrn = new GovrnProtocol(PROTOCOL_URL, null, {
  Authorization: CONTRACT_SYNC_TOKEN,
});

export const getOrInsertUser = async (data: {
  address: string;
}): Promise<number> => {
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
};

export const getOrInsertActivityType = async (data: {
  name: string;
}): Promise<number> => {
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
    console.error(error);
  }
}

const getIdOfChain = async (chainId: number) => {
  const chain = await govrn.chain.get({ where: { chain_id: `${chainId}` } });
  return chain.id;
};

export const upsertContribution = async (contribution: ContributionData) => {
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
      activity_type: { connect: { id: contribution.activity_type_id } },
      status: {
        connect: { name: 'minted' },
      },
      on_chain_id: contribution.on_chain_id,
      chain: { connect: { chain_id: `${contribution.chain_id}` } },
    },
    update: {
      name: { set: contribution.name },
      on_chain_id: { set: contribution.on_chain_id },
      // proof: { set: contribution.proof },
      // details: { set: contribution.details },
      chain: { connect: { chain_id: `${contribution.chain_id}` } },
      status: { connect: { id: contribution.status_id } },
    },
  });
};

export const bulkCreateAttestions = async (
  attestations: {
    confidence_id: number;
    user_id: number;
    contribution_id: number;
    date_of_attestation: Date;
  }[],
) => {
  return await govrn.attestation.bulkCreate({
    data: attestations,
    skipDuplicates: true,
  });
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
