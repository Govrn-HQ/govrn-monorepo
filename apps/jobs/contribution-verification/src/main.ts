import { batch } from '@govrn/protocol-client';
import {
  createJobRun,
  getDaosWithVerificationSettings,
  getDaoVerificationThreshold,
  getUnverifiedContributions,
  upsertVerifiedGuildContribution,
} from './db';

const JOB_NAME = 'contribution-verification';
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

    // update last run time
    const startDate = new Date();

    // TODO: batch log errors
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

    // mark last run as successful
    // TODO: move to job utils (ENG-1019)
    // TODO: add more metadata to job run
    await createJobRun({
      startDate,
      completedDate: new Date(),
      name: JOB_NAME,
    });
  }
};

main()
  .then()
  .catch(e => console.error(e));
