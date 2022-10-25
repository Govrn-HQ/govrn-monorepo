import { GovrnProtocol } from '@govrn/protocol-client';

export const getOrInsertUser = async (
  govrn: GovrnProtocol,
  data: { address: string },
): Promise<number> => {
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

export const getOrInsertActivityType = async (
  govrn: GovrnProtocol,
  data: { name: string },
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

export async function getContribution(
  govrn: GovrnProtocol,
  data: { tokenId: number },
) {
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

export const createJobRun = async (
  govrn: GovrnProtocol,
  job: { startDate: Date; completedDate: Date; name: string },
) => {
  return await govrn.jobRun.create({
    data: job,
  });
};
