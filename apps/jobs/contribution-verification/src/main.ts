import { getDaosWithVerificationSettings } from './db';

const main = async () => {
  console.log('starting contribution verification');

  // Check all guild contributions and compare to verifications
  // mark as verified if they meet the attestation threshold
  // skip daos without verification thresholds

  // Retrieve all daos which have defined verifications settings
  const daos = await getDaosWithVerificationSettings();
};
