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
      verificationSettings: {
        some: {
          id: {
            not: null,
          },
        },
      },
    },
  });
}
