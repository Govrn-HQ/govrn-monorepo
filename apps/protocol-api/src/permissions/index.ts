import { deny, or, rule, shield, and } from 'graphql-shield';
import { createOnChainUserContributionInput } from './inputs';

const AIRTABLE_API_TOKEN = process.env.AIRTABlE_API_TOKEN;
const KEVIN_MALONE_TOKEN = process.env.KEVIN_MALONE_TOKEN;
const LINEAR_JOB_TOKEN = process.env.LINEAR_JOB_TOKEN;
const CONTRACT_SYNC_JOB_TOKEN = process.env.CONTRACT_SYNC_JOB_TOKEN;

const BACKEND_TOKENS = [
  AIRTABLE_API_TOKEN,
  KEVIN_MALONE_TOKEN,
  LINEAR_JOB_TOKEN,
  CONTRACT_SYNC_JOB_TOKEN,
];

// Rule is admin of passed in dao
// Rule is member of passed in dao
//

const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  if (!ctx.req.session.siwe) {
    return false;
  }
  return true;
});

const hasToken = rule()(async (parent, args, ctx, info) => {
  const auth = ctx.req.headers['authorization'];
  if (auth) {
    const found = BACKEND_TOKENS.find(token => token === auth);
    return !!found;
  }
  return false;
});

const JOB_ONLY_QUERIES = {
  users: hasToken,
  jobRuns: hasToken,
  linearUsers: hasToken,
  linearIssues: hasToken,
  contributionStatuses: hasToken,
  chain: hasToken,
};

const JOB_ONLY_MUTATIONS = {
  createOneActivityType: hasToken,
  createOneContribution: hasToken,
  createOneGuild: hasToken,
  createOneGuildUser: hasToken,
  createOneJobRun: hasToken,
  createOneUser: hasToken,
  createManyAttestation: hasToken,
  createManyContribution: hasToken,
  createManyLinearIssue: hasToken,
  createOneUserActivity: hasToken,
  updateOneContribution: hasToken,
  updateOneGuild: hasToken,
  updateOneUser: hasToken,
  upsertOneAttestation: hasToken,
  upsertOneActivityType: hasToken,
  upsertOneContribution: hasToken,
  upsertOneLinearCycle: hasToken,
  upsertOneLinearIssue: hasToken,
  upsertOneLinearProject: hasToken,
  upsertOneLinearTeam: hasToken,
  upsertOneLinearUser: hasToken,
};

export const permissions = shield(
  {
    Query: {
      '*': deny,
      contribution: or(isAuthenticated, hasToken),
      contributions: or(isAuthenticated, hasToken),
      activityTypes: or(isAuthenticated, hasToken),
      attestations: isAuthenticated,
      listActivityTypesByUser: isAuthenticated,
      getUser: isAuthenticated,
      guild: or(isAuthenticated, hasToken),
      guilds: or(isAuthenticated, hasToken),
      guildUsers: or(isAuthenticated, hasToken),
      guildImports: or(isAuthenticated, hasToken),
      listUserByAddress: isAuthenticated,
      getContributionCountByDateForUserInRange: or(isAuthenticated, hasToken),
      getDaoContributionCountByUser: or(isAuthenticated, hasToken),
      getDaoContributionCount: or(isAuthenticated, hasToken),
      getContributionCountByActivityType: or(isAuthenticated, hasToken),
      getActiveGuildUsersAverage: or(isAuthenticated, hasToken),
      guildActivityTypes: or(isAuthenticated, hasToken),
      ...JOB_ONLY_QUERIES,
    },
    ContributionCountByUser: or(isAuthenticated, hasToken),
    ContributionCountByDate: or(isAuthenticated, hasToken),
    ContributionCountByActivityType: or(isAuthenticated, hasToken),
    // Input field to restrict sensitive fields and create rule for generic types where applicable
    Mutation: {
      '*': deny,
      createOnChainUserContribution: and(
        isAuthenticated,
        createOnChainUserContributionInput,
      ), // user can only create on chain contribution for itself
      //export type UserOnChainContributionCreateInput = {
      //  activityTypeId: Scalars['Float'];
      //  chainId?: InputMaybe<Scalars['Float']>;
      //  dateOfEngagement: Scalars['DateTime'];
      //  dateOfSubmission: Scalars['DateTime'];
      //  details: Scalars['String'];
      //  name: Scalars['String'];
      //  onChainId: Scalars['Float'];
      //  proof: Scalars['String'];
      //  status: Scalars['String'];
      //  txHash: Scalars['String'];
      //  userId: Scalars['Float'];
      //};
      createUserAttestation: isAuthenticated, // Can only create an attestation for yourself
      // export type AttestationUserCreateInput = {
      //   address: Scalars['String'];
      //   chainName: Scalars['String'];
      //   confidenceName: Scalars['String'];
      //   contributionId: Scalars['Int'];
      //   userId: Scalars['Float'];
      // };
      createUserContribution: isAuthenticated, // user can only create a contribution for itself
      // export type UserContributionCreateInput = {
      //   activityTypeName: Scalars['String'];
      //   address: Scalars['String'];
      //   chainId?: InputMaybe<Scalars['Float']>;
      //   chainName: Scalars['String'];
      //   dateOfEngagement: Scalars['DateTime'];
      //   details: Scalars['String'];
      //   guildId?: InputMaybe<Scalars['Float']>;
      //   name: Scalars['String'];
      //   proof: Scalars['String'];
      //   status: Scalars['String'];
      //   userId: Scalars['Float'];
      // };

      createUserCustom: or(hasToken, isAuthenticated), // Can only create a user if has address
      // export type UserCreateCustomInput = {
      //   address: Scalars['String'];
      //   email?: InputMaybe<Scalars['String']>;
      //   username: Scalars['String'];
      // };

      createGuildUserCustom: isAuthenticated, // only admin or user with status recruit
      // export type GuildUserCreateCustomInput = {
      //   guildId?: InputMaybe<Scalars['Int']>;
      //   guildName?: InputMaybe<Scalars['String']>;
      //   membershipStatus?: InputMaybe<Scalars['String']>;
      //   userAddress?: InputMaybe<Scalars['String']>;
      //   userId?: InputMaybe<Scalars['Int']>;
      // };

      createUserOnChainAttestation: isAuthenticated, // only user can do this
      // export type AttestationUserOnChainCreateInput = {
      //   chainId: Scalars['Float'];
      //   confidence: Scalars['String'];
      //   contributionOnChainId: Scalars['Float'];
      //   userId: Scalars['Float'];
      // };

      // deleteOneContribution: or(hasToken, isAuthenticated),
      deleteUserContribution: or(isAuthenticated, hasToken), // User can only delete their own contribution
      // export type UserContributionDeleteInput = {
      //   contributionId: Scalars['Int'];
      // };

      getOrCreateActivityType: isAuthenticated,
      updateUserContribution: isAuthenticated, // only user can do this on their own
      updateGuildCustom: isAuthenticated,
      // export type GuildUpdateCustomInput = {
      //   congrats_channel?: InputMaybe<Scalars['String']>;
      //   contribution_reporting_channel?: InputMaybe<Scalars['String']>;
      //   discord_id?: InputMaybe<Scalars['String']>;
      //   logo?: InputMaybe<Scalars['String']>;
      //   name?: InputMaybe<Scalars['String']>;
      // };

      updateUserCustom: isAuthenticated, // user can only update themselves
      // export type UserUpdateCustomInput = {
      //   disconnectLinearId?: InputMaybe<Scalars['Float']>;
      //   id: Scalars['Int'];
      //   name: Scalars['String'];
      // };

      updateGuildUserCustom: isAuthenticated, //  can only be done by user and admin of guild
      // export type GuildUpdateCustomInput = {
      //   congrats_channel?: InputMaybe<Scalars['String']>;
      //   contribution_reporting_channel?: InputMaybe<Scalars['String']>;
      //   discord_id?: InputMaybe<Scalars['String']>;
      //   logo?: InputMaybe<Scalars['String']>;
      //   name?: InputMaybe<Scalars['String']>;
      // };

      updateUserOnChainAttestation: isAuthenticated, // user can only make their own attestations
      // export type UpdateUserOnChainAttestationMutationVariables = Exact<{
      //   id: Scalars['Float'];
      //   status: Scalars['String'];
      //   data: AttestationUpdateManyMutationInput;
      // }>;

      updateUserOnChainContribution: isAuthenticated, // user can only make their own attestations
      // export type UpdateUserOnChainContributionMutationVariables = Exact<{
      //   id: Scalars['Float'];
      //   status: Scalars['String'];
      //   chainId: Scalars['Float'];
      //   data: ContributionUpdateManyMutationInput;
      // }>;

      ...JOB_ONLY_MUTATIONS,
    },
    ActivityType: {
      id: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
      active: or(isAuthenticated, hasToken),
      default: or(isAuthenticated, hasToken),
      users: or(isAuthenticated, hasToken),
      contributions: or(isAuthenticated, hasToken),
      categoryActivity: or(isAuthenticated, hasToken),
      guilds: or(isAuthenticated, hasToken),
    },
    Attestation: {
      id: or(isAuthenticated, hasToken),
      confidence: or(isAuthenticated, hasToken),
      contribution: or(isAuthenticated, hasToken),
      user: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      date_of_attestation: or(isAuthenticated, hasToken),
      user_id: or(isAuthenticated, hasToken),
      attestation_status: or(isAuthenticated, hasToken),
    },
    AttestationConfidence: {
      name: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      id: or(isAuthenticated, hasToken),
    },
    AttestationStatus: {
      id: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
    },
    ChainType: {
      id: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
      users: or(isAuthenticated, hasToken),
    },
    Chain: {
      id: hasToken,
      createdAt: hasToken,
      updatedAt: hasToken,
      name: hasToken,
      chain_id: or(isAuthenticated, hasToken),
    },
    Contribution: {
      id: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
      status_id: or(isAuthenticated, hasToken),
      status: or(isAuthenticated, hasToken),
      activity_type_id: or(isAuthenticated, hasToken),
      activity_type: or(isAuthenticated, hasToken),
      user_id: or(isAuthenticated, hasToken),
      user: or(isAuthenticated, hasToken),
      date_of_submission: or(isAuthenticated, hasToken),
      date_of_engagement: or(isAuthenticated, hasToken),
      details: or(isAuthenticated, hasToken),
      proof: or(isAuthenticated, hasToken),
      attestations: or(isAuthenticated, hasToken),
      partners: or(isAuthenticated, hasToken),
      guilds: or(isAuthenticated, hasToken),
      linear_issue: or(isAuthenticated, hasToken),
      twitter_tweet_contributions: or(isAuthenticated, hasToken),
      on_chain_id: or(isAuthenticated, hasToken),
      tx_hash: or(isAuthenticated, hasToken),
      chain: or(isAuthenticated, hasToken),
    },
    ContributionStatus: {
      id: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
      contributions: or(isAuthenticated, hasToken),
    },
    DiscordUser: {
      createdAt: or(isAuthenticated, hasToken),
      discord_id: or(isAuthenticated, hasToken),
      display_name: or(isAuthenticated, hasToken),
      id: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      user: or(isAuthenticated, hasToken),
      user_id: or(isAuthenticated, hasToken),
      access_token: or(isAuthenticated, hasToken),
      active_token: or(isAuthenticated, hasToken),
    },
    Guild: {
      activity_type: or(isAuthenticated, hasToken),
      congrats_channel: or(isAuthenticated, hasToken),
      contributions: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      discord_id: or(isAuthenticated, hasToken),
      id: or(isAuthenticated, hasToken),
      logo: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
      twitter_accounts: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      users: or(isAuthenticated, hasToken),
      contribution_reporting_channel: or(hasToken, isAuthenticated),
      status: or(hasToken, isAuthenticated),
    },
    GuildActivityType: {
      id: isAuthenticated,
      activity_type: isAuthenticated,
      guild: or(isAuthenticated, hasToken),
    },
    GuildContribution: {
      id: or(isAuthenticated, hasToken),
      contribution_id: or(isAuthenticated, hasToken),
      guild_id: or(isAuthenticated, hasToken),
      guild: or(isAuthenticated, hasToken),
    },
    GuildMembershipStatus: {
      id: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
    },
    GuildImport: {
      id: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      guild_id: or(isAuthenticated, hasToken),
      guild: or(isAuthenticated, hasToken),
      integration_type_id: or(isAuthenticated, hasToken),
      integration_type: or(isAuthenticated, hasToken),
      authentication_token: or(isAuthenticated, hasToken),
      import_status: or(isAuthenticated, hasToken),
      users: or(isAuthenticated, hasToken),
    },
    GuildImportStatus: {
      id: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
    },
    GuildUser: {
      id: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      user: or(isAuthenticated, hasToken),
      user_id: or(isAuthenticated, hasToken),
      guild: or(isAuthenticated, hasToken),
      guild_id: or(isAuthenticated, hasToken),
      favorite: or(isAuthenticated, hasToken),
      membershipStatus: or(isAuthenticated, hasToken),
      membership_status_id: or(isAuthenticated, hasToken),
    },
    IntegrationType: {
      id: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
    },
    TwitterUser: {
      id: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
      username: or(isAuthenticated, hasToken),
    },
    AffectedRowsOutput: {
      count: hasToken,
    },
    JobRun: {
      id: hasToken,
      createdAt: hasToken,
      updatedAt: hasToken,
      completedDate: hasToken,
      startDate: hasToken,
      name: hasToken,
    },
    User: {
      id: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
      display_name: or(isAuthenticated, hasToken),
      address: or(isAuthenticated, hasToken),
      chain_type: or(isAuthenticated, hasToken),
      full_name: or(isAuthenticated, hasToken),
      discord_users: or(isAuthenticated, hasToken),
      guild_users: or(isAuthenticated, hasToken),
      twitter_user: or(isAuthenticated, hasToken),
      active: or(isAuthenticated, hasToken),
      linear_users: or(isAuthenticated, hasToken),
    },
    UserActivity: {
      id: hasToken,
      createdAt: hasToken,
      updatedAt: hasToken,
      activity_type: hasToken,
      user: hasToken,
    },
    LinearIssue: {
      id: hasToken,
      archivedAt: hasToken,
      assignee_id: hasToken,
      autoArchivedAt: hasToken,
      autoClosedAt: hasToken,
      boardOrder: hasToken,
      branchName: hasToken,
      canceledAt: hasToken,
      completedAt: hasToken,
      createdAt: hasToken,
      creator_id: hasToken,
      customerTickerCount: hasToken,
      cycle_id: hasToken,
      description: hasToken,
      dueDate: hasToken,
      estimate: hasToken,
      identifier: hasToken,
      linear_id: hasToken,
      priority: hasToken,
      priorityLabel: hasToken,
      project_id: hasToken,
      snoozedUntilAt: hasToken,
      sortOrder: hasToken,
      startedAt: hasToken,
      subIssueSortOrder: hasToken,
      team_id: hasToken,
      title: hasToken,
      trashed: hasToken,
      updatedAt: hasToken,
      url: hasToken,
    },
    LinearTeam: {
      linear_id: hasToken,
      name: hasToken,
      key: hasToken,
      id: hasToken,
    },
    LinearProject: {
      linear_id: hasToken,
      name: hasToken,
      id: hasToken,
    },
    LinearCycle: {
      id: hasToken,
      endsAt: hasToken,
      linear_id: hasToken,
      number: hasToken,
      startsAt: hasToken,
    },
    LinearUser: {
      id: or(isAuthenticated, hasToken),
      active: hasToken,
      displayName: hasToken,
      email: hasToken,
      linear_id: hasToken,
      name: hasToken,
      url: hasToken,
      createdAt: hasToken,
      access_token: hasToken,
      active_token: or(isAuthenticated, hasToken),
      user_id: hasToken,
    },
  },
  {
    fallbackRule: deny,
    debug: process.env.NODE_ENV === 'development' ? true : false,
  },
);
