import { GovrnProtocol } from '@govrn/protocol-client';

const PROTOCOL_URL = process.env.PROTOCOL_URL;
const TOKEN = ''; //process.env.CONTRIBUTION_VERIFICATION_TOKEN

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
      verificationStatus: {
        is: {
          name: { equals: 'unverified' },
        },
      },
      /**
       * TODO: is the verified field redundant?
       * verified: {
       *  equals: false,
       * },
       */
    },
  });
  return result.result;
}
