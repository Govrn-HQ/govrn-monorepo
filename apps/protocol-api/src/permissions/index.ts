import { deny, or, rule, shield, and } from 'graphql-shield';
import {
  createUserAttestationInput,
  createOnChainUserContributionInput,
  createUserContributionInput,
  createUserCustomInput,
  createUserOnChainAttestationInput,
  deleteUserContributionInput,
  updateUserContributionInput,
  updateUserCustomInput,
  updateUserOnChainAttestationInput,
  updateUserOnChainContributionInput,
  updateGuildCustomInput,
  createGuildUserCustomInput,
  createGuildUserRecruitCustomInput,
} from './inputs';

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
const byString = function (o, s) {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, ''); // strip a leading dot
  const a = s.split('.');
  for (let i = 0, n = a.length; i < n; ++i) {
    const k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};

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

const isUsersMapping = new Map([
  ['createUserAttestation', 'data.userId'],
  ['createUserContribution', 'data.userId'],
  ['createOnChainUserContribution', 'userId'],
  ['createUserOnChainAttestation', 'data.userId'],
  ['updateUserCustom', 'data.id'],
  ['createGuildUserCustom', 'data.userId'],
]);
const isUsers = rule()(async (parent, args, ctx, info) => {
  const userId = byString(args, isUsersMapping.get(info.fieldName));
  console.log('isUsers', userId, info.fieldName, args);
  const user = await ctx.prisma.user.findFirst({
    where: {
      address: ctx.req.session.siwe.data.address,
    },
  });
  console.log(user);

  return user.id === userId;
});

// TODO: Add helpful error messages
const isUsersContributionMapping = new Map([
  ['deleteUserContribution', 'where.contributionId'],
  ['updateUserContribution', 'data.contributionId'],
  ['updateUserOnChainContribution', 'id'],
]);
const isUsersContribution = rule()(async (parent, args, ctx, info) => {
  const contributionId = byString(
    args,
    isUsersContributionMapping.get(info.fieldName),
  );
  console.log('isUsersContribution', contributionId, info.fieldName, args);
  const user = await ctx.prisma.user.findFirst({
    where: {
      address: ctx.req.session.siwe.data.address,
    },
  });
  const contribution = await ctx.prisma.contribution.findFirst({
    where: {
      id: contributionId,
    },
  });

  console.log(user);
  console.log(contribution);

  return user.id === contribution.user_id;
});

const isUsersAttestationMapping = new Map([
  ['updateUserOnChainAttestation', 'id'],
]);
const isUsersAttestation = rule()(async (parent, args, ctx, info) => {
  const attestationId = byString(
    args,
    isUsersAttestationMapping.get(info.fieldName),
  );
  console.log('isUsersAttestation', attestationId, info.fieldName, args);
  const user = await ctx.prisma.user.findFirst({
    where: {
      address: ctx.req.session.siwe.data.address,
    },
  });
  const attestation = await ctx.prisma.attestation.findFirst({
    where: {
      id: attestationId,
    },
  });

  console.log(user);
  console.log(attestation);

  return user.id === attestation.user_id;
});

const isGuildAdminMapping = new Map([['updateGuildCustom', 'where.guildId']]);

const isGuildAdmin = rule()(async (parent, args, ctx, info) => {
  try {
    const guildId = byString(args, isGuildAdminMapping.get(info.fieldName));
    console.log('isGuildAdmin', guildId, info.fieldName, args);
    const user = await ctx.prisma.user.findFirst({
      where: {
        address: ctx.req.session.siwe.data.address,
      },
    });
    const guildUser = await ctx.prisma.guildUser.findFirst({
      where: {
        guild_id: { equals: guildId },
        membershipStatus: {
          is: { name: { equals: 'Admin' } },
        },
      },
    });

    console.log(user);
    console.log(guildUser);

    return user.id === guildUser.user_id;
  } catch (e) {
    console.error(e);
    return false;
  }
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
        isUsers,
      ), // user can only create on chain contribution for themself
      createUserAttestation: and(
        createUserAttestationInput,
        isAuthenticated,
        isUsers,
      ), // Can only create an attestation for yourself
      createUserContribution: and(
        isAuthenticated,
        createUserContributionInput,
        isUsers,
      ), // user can only create a contribution for itself
      createUserCustom: or(
        hasToken,
        and(isAuthenticated, createUserCustomInput),
      ),
      createGuildUserCustom: and(
        isAuthenticated,
        or(
          and(isGuildAdmin, createGuildUserCustomInput),
          and(createGuildUserRecruitCustomInput, isUsers),
        ),
      ), // only admin or user with status recruit

      createUserOnChainAttestation: and(
        isAuthenticated,
        createUserOnChainAttestationInput,
        isUsers,
      ), // only user can do this

      // deleteOneContribution: or(hasToken, isAuthenticated),
      deleteUserContribution: or(
        and(isAuthenticated, isUsersContribution, deleteUserContributionInput),
        hasToken,
      ), // User can only delete their own contribution

      getOrCreateActivityType: isAuthenticated, // TODO: scope permissions
      updateUserContribution: and(
        isAuthenticated,
        updateUserContributionInput,
        isUsersContribution,
      ), // only user can do this on their own
      updateGuildCustom: and(
        isAuthenticated,
        isGuildAdmin,
        updateGuildCustomInput,
      ), // Admin?

      updateUserCustom: and(isAuthenticated, updateUserCustomInput, isUsers), // user can only update themselves

      updateGuildUserCustom: isAuthenticated, //  can only be done by user and admin of guild
      // export type GuildUpdateCustomInput = {
      //   congrats_channel?: InputMaybe<Scalars['String']>;
      //   contribution_reporting_channel?: InputMaybe<Scalars['String']>;
      //   discord_id?: InputMaybe<Scalars['String']>;
      //   logo?: InputMaybe<Scalars['String']>;
      //   name?: InputMaybe<Scalars['String']>;
      // };

      updateUserOnChainAttestation: and(
        isAuthenticated,
        updateUserOnChainAttestationInput,
        isUsersAttestation,
      ), // user can only make their own attestations
      updateUserOnChainContribution: and(
        isAuthenticated,
        updateUserOnChainContributionInput,
        isUsersContribution,
      ), // user can only make their own attestations
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
