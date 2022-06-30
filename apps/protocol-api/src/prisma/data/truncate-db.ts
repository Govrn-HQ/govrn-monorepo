import { Logger } from '@govrn-monorepo/utils';
import { PrismaClient } from '@prisma/client';

/**
 * Table's names are sorted in away to prevent foreign key violations.
 *
 * To perform all deletions explicitly, one query at a time, starting with child tables.
 */
const tableNames = [
  'LinearTeam',
  'LinearProject',
  'LinearCycle',
  'LinearIssue',
  'LinearUser',
  'Contribution',
  'ActivityType',
  'User',
  'ChainType',
  'Attestation',
  'AttestationConfidence',
  'CategoryActivity',
  'CategoryActivityType',
  'ContributionStatus',
  'DiscordUser',
  'Guild',
  'GuildActivityType',
  'GuildUser',
  'GuildContribution',
  'JobRun',
  'Partner',
  'TwitterAccount',
  'TwitterTweet',
  'TwitterUser',
  'UserActivity',
];

const dropDB = async () => {
  Logger.warn(':: Truncating all DBs. New start!');
  const client = new PrismaClient();

  try {
    for (const t of tableNames) {
      // NOTE: Template Variables cannot be used for identifiers such
      // as column names, table names or database names. This why command
      // is calculated beforehand.
      const command = `DELETE FROM "${t}" CASCADE;`;
      const deletedRecords = await client.$executeRawUnsafe(command);
      Logger.warn(`:: Deleted ${deletedRecords} ${t}(s)`);
    }
    // client.$executeRaw();
  } catch (e) {
    Logger.error(e);
  } finally {
    Logger.warn(`:: Deleted ${tableNames.length} tables done.`);
  }
};

const main = async () => {
  await dropDB();
};

try {
  main();
} catch (e) {
  Logger.error(e);
}

export default dropDB;
