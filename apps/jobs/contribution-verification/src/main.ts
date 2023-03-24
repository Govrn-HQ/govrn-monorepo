import { batch } from '@govrn/protocol-client';
import {
  getDaosWithVerificationSettings,
  getDaoVerificationThreshold,
  getUnverifiedContributions,
  upsertVerifiedGuildContribution,
} from './db';

const BATCH_SIZE = 100;

const main = async () => {
  console.log('starting contribution verification');

  // Check all unverified guild contributions and compare to verifications
  // mark as verified if they meet the attestation threshold
  // skip daos without verification thresholds

  // Retrieve all daos which have defined verifications settings
  const daos = await getDaosWithVerificationSettings();

  for (const dao of daos) {
    console.log('dao', dao);
    const id = dao.id;
    const name = dao.name;

    const settingThreshold = await getDaoVerificationThreshold(
      dao.verification_setting_id,
    );

    const unverifiedContributions = await getUnverifiedContributions(id);

    // process the guilds unverified contributions
    await batch(
      unverifiedContributions,
      async guildContribution => {
        console.log('contribution', guildContribution);
        const contributionId = guildContribution.id;
        const attestationCount =
          guildContribution.contribution.attestations.length;

        if (attestationCount >= settingThreshold) {
          console.log(
            `verifying dao: ${name} contribution: ${contributionId} attestationCount: ${attestationCount} threshold: ${settingThreshold}`,
          );
          await upsertVerifiedGuildContribution(contributionId);
        }
      },
      BATCH_SIZE,
    );
  }
};

main()
  .then()
  .catch(e => console.error(e));
