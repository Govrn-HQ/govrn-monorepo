import { GovrnProtocol } from '@govrn/protocol-client';

const PROTOCOL_URL = process.env.PROTOCOL_URL;
const TOKEN = ''; //process.env.CONTRIBUTION_VERIFICATION_TOKEN

export const govrn = new GovrnProtocol(PROTOCOL_URL, null, {
  Authorization: TOKEN,
});

export async function getDaosWithVerificationSettings() {
  throw 'not implemented';
}
