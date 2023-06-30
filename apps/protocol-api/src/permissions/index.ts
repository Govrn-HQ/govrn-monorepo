import { deny, or, rule, shield, and } from 'graphql-shield';
import {
  createUserAttestationInput,
  createOnChainUserContributionInput,
  createUserContributionInput,
  createUserCustomInput,
  createUserOnChainAttestationInput,
  createOneVerificationSettingInput,
  updateOneVerificationSettingInput,
  deleteUserContributionInput,
  updateUserContributionInput,
  updateUserCustomInput,
  updateUserOnChainAttestationInput,
  updateUserOnChainContributionInput,
  updateGuildCustomInput,
  createGuildUserCustomInput,
  createGuildUserZeroCustomInput,
  createGuildUserRecruitCustomInput,
  updateGuildUserCustomInput,
  updateGuildUserRecruitCustomInput,
  getOrCreateActivityTypeInput,
  createUserSplitContractInput,
  updateUserSplitContractInput,
  createSplitPaymentInput,
} from './inputs';

const AIRTABLE_API_TOKEN = process.env.AIRTABlE_API_TOKEN;
const KEVIN_MALONE_TOKEN = process.env.KEVIN_MALONE_TOKEN;
const LINEAR_JOB_TOKEN = process.env.LINEAR_JOB_TOKEN;
const CONTRACT_SYNC_JOB_TOKEN = process.env.CONTRACT_SYNC_JOB_TOKEN;
const CONTRIBUTION_VERIFICATION_TOKEN =
  process.env.CONTRIBUTION_VERIFICATION_TOKEN;

const BACKEND_TOKENS = [
  AIRTABLE_API_TOKEN,
  KEVIN_MALONE_TOKEN,
  LINEAR_JOB_TOKEN,
  CONTRACT_SYNC_JOB_TOKEN,
  CONTRIBUTION_VERIFICATION_TOKEN,
];

// Rule is admin of passed in dao
// Rule is member of passed in dao
//
const byString = function (o, s) {
  try {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, ''); // strip a leading dot
    const a = s.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
      const k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return null;
      }
    }
    return o;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  return true;
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
  ['updateGuildUserRecruitCustomInput', 'data.userId'],
  ['getOrCreateActivityType', 'data.userId'],
  ['updateGuildUserCustom', 'data.userId'],
]);
const isUsers = rule()(async (parent, args, ctx, info) => {
  try {
    const userId = byString(args, isUsersMapping.get(info.fieldName));
    const user = await ctx.prisma.user.findFirst({
      where: {
        address: ctx.req.session.siwe.data.address,
      },
    });

    const isUser = user.id === userId;
    if (!isUser) {
      return new Error('User does not own resource');
    }
    return isUser;
  } catch (e) {
    console.error(e);
    return new Error('Error in isUsers rule');
  }
});

// TODO: Add helpful error messages
const isUsersContributionMapping = new Map([
  ['deleteUserContribution', 'where.contributionId'],
  ['updateUserContribution', 'data.contributionId'],
  ['updateUserOnChainContribution', 'id'],
]);
const isUsersContribution = rule()(async (parent, args, ctx, info) => {
  try {
    const contributionId = byString(
      args,
      isUsersContributionMapping.get(info.fieldName),
    );
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
    const isUser = user.id === contribution.user_id;
    if (!isUser) {
      return new Error('User does not own contribution');
    }
    return isUser;
  } catch (e) {
    console.error(e);
    return new Error('Error in isUserContribution');
  }
});

const isUsersAttestationMapping = new Map([
  ['updateUserOnChainAttestation', 'id'],
]);
const isUsersAttestation = rule()(async (parent, args, ctx, info) => {
  try {
    const attestationId = byString(
      args,
      isUsersAttestationMapping.get(info.fieldName),
    );
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

    const isUser = user.id === attestation.user_id;
    if (!isUser) {
      return new Error('User does not own attestation');
    }
    return isUser;
  } catch (e) {
    console.error(e);
    return new Error('Error in isUsersAttestationMapping');
  }
});

const isGuildAdminMapping = new Map([
  ['updateGuildCustom', 'where.guildId'],
  ['updateGuildUserCustom', 'data.guildId'],
  ['createGuildUserCustom', 'data.guildId'],
  ['updateOneVerificationSetting', 'data.guilds.connect.0.id'],
  ['createOneVerificationSetting', 'data.guilds.connect.0.id'],
]);

const isGuildAdmin = rule()(async (parent, args, ctx, info) => {
  try {
    const guildId = byString(args, isGuildAdminMapping.get(info.fieldName));
    const user = await ctx.prisma.user.findFirst({
      where: {
        address: ctx.req.session.siwe.data.address,
      },
    });
    const guildUsers = await ctx.prisma.guildUser.findMany({
      where: {
        guild_id: { equals: guildId },
        membershipStatus: {
          is: { name: { equals: 'Admin' } },
        },
      },
      take: 1000, // Assume no more than 1000 admins
    });

    const foundUser = guildUsers.find(
      guildUser => guildUser.user_id === user.id,
    );
    if (!foundUser) {
      return new Error(`User is not guild admin of guild ${guildId}`);
    }
    return Boolean(foundUser);
  } catch (e) {
    console.error(e);
    return new Error(`Error in isGuildAdmin`);
  }
});

const JOB_ONLY_QUERIES = {
  chain: hasToken,
  contributionStatuses: hasToken,
  guildMembershipStatus: hasToken,
  jobRuns: hasToken,
  linearIssues: hasToken,
  linearUsers: hasToken,
  twitterTweets: hasToken,
  users: hasToken,
  guildContributions: hasToken,
};

const JOB_ONLY_MUTATIONS = {
  createManyAttestation: hasToken,
  createManyContribution: hasToken,
  createManyGuildUser: hasToken,
  createManyLinearIssue: hasToken,
  createManyUser: hasToken,
  createOneActivityType: hasToken,
  createOneContribution: hasToken,
  createOneGuild: hasToken,
  createOneGuildImport: hasToken,
  createOneGuildUser: hasToken,
  createOneJobRun: hasToken,
  createOneUser: hasToken,
  createOneUserActivity: hasToken,
  updateOneContribution: hasToken,
  updateOneGuild: hasToken,
  updateOneGuildContribution: hasToken,
  updateOneGuildImport: hasToken,
  updateOneUser: hasToken,
  upsertOneActivityType: hasToken,
  upsertOneAttestation: hasToken,
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
      getUser: or(isAuthenticated, hasToken),
      getTotalUserSplitPaymentsSent: or(isAuthenticated, hasToken),
      getTotalUserSplitPaymentsReceived: or(isAuthenticated, hasToken),
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
      userActivities: or(isAuthenticated, hasToken),
      verificationSetting: or(isAuthenticated, hasToken),
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
          and(createGuildUserZeroCustomInput, isUsers),
          and(createGuildUserRecruitCustomInput, isUsers),
        ),
      ), // only admin or user with status recruit

      createOneVerificationSetting: and(
        isAuthenticated,
        isGuildAdmin,
        createOneVerificationSettingInput,
      ), // only admin can create verification settings

      updateOneVerificationSetting: and(
        isAuthenticated,
        isGuildAdmin,
        updateOneVerificationSettingInput,
      ), // only admin can update verification settings

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

      getOrCreateActivityType: and(
        isAuthenticated,
        getOrCreateActivityTypeInput,
        isUsers,
      ), // is users activity type

      updateUserContribution: and(
        isAuthenticated,
        updateUserContributionInput,
        isUsersContribution,
      ), // only user can do this on their own
      updateGuildCustom: and(
        isAuthenticated,
        isGuildAdmin,
        updateGuildCustomInput,
      ), // Must be admin

      updateUserCustom: and(isAuthenticated, updateUserCustomInput, isUsers), // user can only update themselves

      updateGuildUserCustom: and(
        isAuthenticated,
        or(
          and(isUsers, updateGuildUserRecruitCustomInput),
          and(updateGuildUserCustomInput, isGuildAdmin),
        ),
      ), //  can only be done by user and admin of guild

      updateUserOnChainAttestation: and(
        isAuthenticated,
        updateUserOnChainAttestationInput,
        isUsersAttestation,
      ), // user can only make their own attestations

      // TODO: bring up split validations
      createUserSplitContract: and(
        isAuthenticated,
        createUserSplitContractInput,
        isUsers,
      ), // user can make their own split contract
      updateUserSplitContract: and(
        isAuthenticated,
        updateUserSplitContractInput,
        isUsers,
      ), // user can only update their own split contract
      createSplitContractPayment: and(isAuthenticated, createSplitPaymentInput), // any user or non-user can make a payment to a split contract
      updateUserOnChainContribution: and(
        isAuthenticated,
        updateUserOnChainContributionInput,
        isUsersContribution,
      ), // user can only make their own attestations
      ...JOB_ONLY_MUTATIONS,
    },
    ActivityType: {
      '*': or(isAuthenticated, hasToken),
    },
    Attestation: {
      '*': or(isAuthenticated, hasToken),
    },
    AttestationConfidence: {
      '*': or(isAuthenticated, hasToken),
    },
    AttestationStatus: {
      '*': or(isAuthenticated, hasToken),
    },
    ChainType: {
      '*': or(isAuthenticated, hasToken),
    },
    Chain: {
      id: hasToken,
      createdAt: hasToken,
      updatedAt: hasToken,
      name: hasToken,
      chain_id: or(isAuthenticated, hasToken),
    },
    Contribution: {
      '*': or(isAuthenticated, hasToken),
    },
    ContributionStatus: {
      '*': or(isAuthenticated, hasToken),
    },
    DiscordUser: {
      '*': or(isAuthenticated, hasToken),
    },
    Guild: {
      '*': or(isAuthenticated, hasToken),
    },
    GuildActivityType: {
      id: isAuthenticated,
      activity_type: isAuthenticated,
      guild: or(isAuthenticated, hasToken),
    },
    GuildContribution: {
      '*': or(isAuthenticated, hasToken),
    },
    GuildContributionVerificationStatus: {
      '*': or(isAuthenticated, hasToken),
    },
    GuildMembershipStatus: {
      '*': or(isAuthenticated, hasToken),
    },
    GuildImport: {
      '*': or(isAuthenticated, hasToken),
    },
    GuildImportStatus: {
      '*': or(isAuthenticated, hasToken),
    },
    GuildTwitterIntegration: {
      '*': or(isAuthenticated, hasToken),
    },
    GuildUser: {
      '*': or(isAuthenticated, hasToken),
    },
    IntegrationType: {
      '*': or(isAuthenticated, hasToken),
    },
    TwitterTweet: {
      '*': or(isAuthenticated, hasToken),
    },
    TwitterTweetContribution: {
      '*': or(isAuthenticated, hasToken),
    },
    TwitterUser: {
      '*': or(isAuthenticated, hasToken),
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
      '*': or(isAuthenticated, hasToken),
    },
    UserActivity: {
      '*': or(isAuthenticated, hasToken),
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
    VerificationSetting: {
      '*': or(isAuthenticated, hasToken),
    },
    SplitContract: {
      '*': or(isAuthenticated, hasToken),
    },
    UserSplitContract: {
      '*': or(isAuthenticated, hasToken),
    },
    SplitPayment: {
      '*': or(isAuthenticated, hasToken),
    },
  },
  {
    fallbackRule: deny,
    debug: process.env.NODE_ENV === 'development' ? true : false,
  },
);
