import { GovrnProtocol } from '@govrn/protocol-client';

const PROTOCOL_URL = process.env.PROTOCOL_URL;
const TOKEN = process.env.CONTRIBUTION_VERIFICATION_TOKEN;
const VERIFIED_STRING = 'Verified';
const UNVERIFIED_STRING = 'Unverified';

export const govrn = new GovrnProtocol(PROTOCOL_URL, null, {
  Authorization: TOKEN,
});

// Get all DAOs with verification settings
export async function getDaosWithVerificationSettings() {
  return await govrn.guild.list({
    where: {
      verification_setting_id: {
        not: null,
      },
    },
  });
}

export async function getDaoVerificationThreshold(
  verificationSettingId: number,
) {
  const setting = await govrn.guildVerificationSetting.get({
    id: verificationSettingId,
  });
  return setting.num_of_attestations;
}

export async function getUnverifiedContributions(daoId: number) {
  const result = await govrn.guildContribution.list({
    where: {
      guild_id: {
        equals: daoId,
      },
      OR: [
        {
          verificationStatus: { is: { name: { equals: UNVERIFIED_STRING } } },
        },
        {
          verificationStatus: { is: { name: { equals: null } } },
        },
      ],
    },
  });
  return result.result;
}

export async function upsertGuildContributionAttestationThreshold(
  contributionId: number,
  threshold: number,
) {
  await govrn.guildContribution.upsert({
    where: { id: contributionId },
    data: {
      attestation_threshold: { set: threshold },
    },
  });
}

export async function upsertVerifiedGuildContribution(contributionId: number) {
  await govrn.guildContribution.upsert({
    where: { id: contributionId },
    data: {
      verificationStatus: {
        connect: {
          name: VERIFIED_STRING,
        },
      },
    },
  });
}

// TODO: ENG-1019
export const createJobRun = async (job: {
  startDate: Date;
  completedDate: Date;
  name: string;
}) => {
  return await govrn.jobRun.create({
    data: job,
  });
};
