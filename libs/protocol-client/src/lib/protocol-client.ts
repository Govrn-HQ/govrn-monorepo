import { ActivityType } from './client/activity_type';
import { Attestation } from './client/attestation';
import { Contribution, GuildContribution } from './client/contribution';
import { Custom } from './client/custom';
import { JobRun } from './client/jobRun';
import { Guild, GuildVerificationSetting } from './client/guild';
import { Linear } from './client/linear';
import { Twitter } from './client/twitter';
import { User } from './client/user';
import { GraphQLClient } from 'graphql-request';
import { Chain } from './client/chain';

export { cursorPagination } from './client/pagination';

export class GovrnProtocol {
  activity_type: ActivityType;
  attestation: Attestation;
  client: GraphQLClient;
  custom: Custom;
  chain: Chain;
  contribution: Contribution;
  guildContribution: GuildContribution;
  guildVerificationSetting: GuildVerificationSetting;
  jobRun: JobRun;
  guild: Guild;
  linear: Linear;
  twitter: Twitter;
  user: User;

  constructor(
    apiUrl: string,
    clientParams?: { credentials: RequestCredentials },
    clientHeaders?: { [key: string]: string },
  ) {
    this.client = new GraphQLClient(apiUrl, {
      ...clientParams,
      headers: {
        'Content-Type': `application/json`,
        Accept: `application/json`,
        ...clientHeaders,
      },
    });
    this.linear = new Linear(this.client);
    this.user = new User(this.client);
    this.contribution = new Contribution(this.client);
    this.chain = new Chain(this.client);
    this.activity_type = new ActivityType(this.client);
    this.attestation = new Attestation(this.client);
    this.twitter = new Twitter(this.client);
    this.jobRun = new JobRun(this.client);
    this.guild = new Guild(this.client);
    this.guildContribution = new GuildContribution(this.client);
    this.guildVerificationSetting = new GuildVerificationSetting(this.client);
    this.custom = new Custom(this.client);
  }
}
