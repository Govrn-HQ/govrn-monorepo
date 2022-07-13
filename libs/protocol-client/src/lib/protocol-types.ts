import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type ActivityType = {
  _count?: Maybe<ActivityTypeCount>;
  active: Scalars['Boolean'];
  categoryActivity: Array<CategoryActivityType>;
  contributions: Array<Contribution>;
  createdAt: Scalars['DateTime'];
  default: Scalars['Boolean'];
  guilds: Array<GuildActivityType>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users: Array<UserActivity>;
};


export type ActivityTypeCategoryActivityArgs = {
  cursor?: InputMaybe<CategoryActivityTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryActivityTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryActivityTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryActivityTypeWhereInput>;
};


export type ActivityTypeContributionsArgs = {
  cursor?: InputMaybe<ContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContributionWhereInput>;
};


export type ActivityTypeGuildsArgs = {
  cursor?: InputMaybe<GuildActivityTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildActivityTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildActivityTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildActivityTypeWhereInput>;
};


export type ActivityTypeUsersArgs = {
  cursor?: InputMaybe<UserActivityWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserActivityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserActivityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserActivityWhereInput>;
};

export type ActivityTypeAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type ActivityTypeAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ActivityTypeCount = {
  categoryActivity: Scalars['Int'];
  contributions: Scalars['Int'];
  guilds: Scalars['Int'];
  users: Scalars['Int'];
};

export type ActivityTypeCountAggregate = {
  _all: Scalars['Int'];
  active: Scalars['Int'];
  createdAt: Scalars['Int'];
  default: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ActivityTypeCountOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  default?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ActivityTypeCreateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  categoryActivity?: InputMaybe<CategoryActivityTypeCreateNestedManyWithoutActivity_TypeInput>;
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutActivity_TypeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  default?: InputMaybe<Scalars['Boolean']>;
  guilds?: InputMaybe<GuildActivityTypeCreateNestedManyWithoutActivity_TypeInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserActivityCreateNestedManyWithoutActivity_TypeInput>;
};

export type ActivityTypeCreateManyInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityTypeCreateNestedOneWithoutCategoryActivityInput = {
  connect?: InputMaybe<ActivityTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityTypeCreateOrConnectWithoutCategoryActivityInput>;
  create?: InputMaybe<ActivityTypeCreateWithoutCategoryActivityInput>;
};

export type ActivityTypeCreateNestedOneWithoutContributionsInput = {
  connect?: InputMaybe<ActivityTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityTypeCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<ActivityTypeCreateWithoutContributionsInput>;
};

export type ActivityTypeCreateNestedOneWithoutGuildsInput = {
  connect?: InputMaybe<ActivityTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityTypeCreateOrConnectWithoutGuildsInput>;
  create?: InputMaybe<ActivityTypeCreateWithoutGuildsInput>;
};

export type ActivityTypeCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<ActivityTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityTypeCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<ActivityTypeCreateWithoutUsersInput>;
};

export type ActivityTypeCreateOrConnectWithoutCategoryActivityInput = {
  create: ActivityTypeCreateWithoutCategoryActivityInput;
  where: ActivityTypeWhereUniqueInput;
};

export type ActivityTypeCreateOrConnectWithoutContributionsInput = {
  create: ActivityTypeCreateWithoutContributionsInput;
  where: ActivityTypeWhereUniqueInput;
};

export type ActivityTypeCreateOrConnectWithoutGuildsInput = {
  create: ActivityTypeCreateWithoutGuildsInput;
  where: ActivityTypeWhereUniqueInput;
};

export type ActivityTypeCreateOrConnectWithoutUsersInput = {
  create: ActivityTypeCreateWithoutUsersInput;
  where: ActivityTypeWhereUniqueInput;
};

export type ActivityTypeCreateWithoutCategoryActivityInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutActivity_TypeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  default?: InputMaybe<Scalars['Boolean']>;
  guilds?: InputMaybe<GuildActivityTypeCreateNestedManyWithoutActivity_TypeInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserActivityCreateNestedManyWithoutActivity_TypeInput>;
};

export type ActivityTypeCreateWithoutContributionsInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  categoryActivity?: InputMaybe<CategoryActivityTypeCreateNestedManyWithoutActivity_TypeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  default?: InputMaybe<Scalars['Boolean']>;
  guilds?: InputMaybe<GuildActivityTypeCreateNestedManyWithoutActivity_TypeInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserActivityCreateNestedManyWithoutActivity_TypeInput>;
};

export type ActivityTypeCreateWithoutGuildsInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  categoryActivity?: InputMaybe<CategoryActivityTypeCreateNestedManyWithoutActivity_TypeInput>;
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutActivity_TypeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  default?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserActivityCreateNestedManyWithoutActivity_TypeInput>;
};

export type ActivityTypeCreateWithoutUsersInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  categoryActivity?: InputMaybe<CategoryActivityTypeCreateNestedManyWithoutActivity_TypeInput>;
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutActivity_TypeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  default?: InputMaybe<Scalars['Boolean']>;
  guilds?: InputMaybe<GuildActivityTypeCreateNestedManyWithoutActivity_TypeInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityTypeGroupBy = {
  _avg?: Maybe<ActivityTypeAvgAggregate>;
  _count?: Maybe<ActivityTypeCountAggregate>;
  _max?: Maybe<ActivityTypeMaxAggregate>;
  _min?: Maybe<ActivityTypeMinAggregate>;
  _sum?: Maybe<ActivityTypeSumAggregate>;
  active: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  default: Scalars['Boolean'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ActivityTypeMaxAggregate = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  default?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ActivityTypeMaxOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  default?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ActivityTypeMinAggregate = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  default?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ActivityTypeMinOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  default?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ActivityTypeOrderByWithAggregationInput = {
  _avg?: InputMaybe<ActivityTypeAvgOrderByAggregateInput>;
  _count?: InputMaybe<ActivityTypeCountOrderByAggregateInput>;
  _max?: InputMaybe<ActivityTypeMaxOrderByAggregateInput>;
  _min?: InputMaybe<ActivityTypeMinOrderByAggregateInput>;
  _sum?: InputMaybe<ActivityTypeSumOrderByAggregateInput>;
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  default?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ActivityTypeOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  categoryActivity?: InputMaybe<CategoryActivityTypeOrderByRelationAggregateInput>;
  contributions?: InputMaybe<ContributionOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  default?: InputMaybe<SortOrder>;
  guilds?: InputMaybe<GuildActivityTypeOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserActivityOrderByRelationAggregateInput>;
};

export type ActivityTypeRelationFilter = {
  is?: InputMaybe<ActivityTypeWhereInput>;
  isNot?: InputMaybe<ActivityTypeWhereInput>;
};

export enum ActivityTypeScalarFieldEnum {
  Active = 'active',
  CreatedAt = 'createdAt',
  Default = 'default',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ActivityTypeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ActivityTypeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ActivityTypeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ActivityTypeScalarWhereWithAggregatesInput>>;
  active?: InputMaybe<BoolWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  default?: InputMaybe<BoolWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ActivityTypeSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type ActivityTypeSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ActivityTypeUpdateInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categoryActivity?: InputMaybe<CategoryActivityTypeUpdateManyWithoutActivity_TypeInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutActivity_TypeInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildActivityTypeUpdateManyWithoutActivity_TypeInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserActivityUpdateManyWithoutActivity_TypeInput>;
};

export type ActivityTypeUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ActivityTypeUpdateOneRequiredWithoutCategoryActivityInput = {
  connect?: InputMaybe<ActivityTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityTypeCreateOrConnectWithoutCategoryActivityInput>;
  create?: InputMaybe<ActivityTypeCreateWithoutCategoryActivityInput>;
  update?: InputMaybe<ActivityTypeUpdateWithoutCategoryActivityInput>;
  upsert?: InputMaybe<ActivityTypeUpsertWithoutCategoryActivityInput>;
};

export type ActivityTypeUpdateOneRequiredWithoutContributionsInput = {
  connect?: InputMaybe<ActivityTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityTypeCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<ActivityTypeCreateWithoutContributionsInput>;
  update?: InputMaybe<ActivityTypeUpdateWithoutContributionsInput>;
  upsert?: InputMaybe<ActivityTypeUpsertWithoutContributionsInput>;
};

export type ActivityTypeUpdateOneRequiredWithoutGuildsInput = {
  connect?: InputMaybe<ActivityTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityTypeCreateOrConnectWithoutGuildsInput>;
  create?: InputMaybe<ActivityTypeCreateWithoutGuildsInput>;
  update?: InputMaybe<ActivityTypeUpdateWithoutGuildsInput>;
  upsert?: InputMaybe<ActivityTypeUpsertWithoutGuildsInput>;
};

export type ActivityTypeUpdateOneRequiredWithoutUsersInput = {
  connect?: InputMaybe<ActivityTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityTypeCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<ActivityTypeCreateWithoutUsersInput>;
  update?: InputMaybe<ActivityTypeUpdateWithoutUsersInput>;
  upsert?: InputMaybe<ActivityTypeUpsertWithoutUsersInput>;
};

export type ActivityTypeUpdateWithoutCategoryActivityInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutActivity_TypeInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildActivityTypeUpdateManyWithoutActivity_TypeInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserActivityUpdateManyWithoutActivity_TypeInput>;
};

export type ActivityTypeUpdateWithoutContributionsInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categoryActivity?: InputMaybe<CategoryActivityTypeUpdateManyWithoutActivity_TypeInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildActivityTypeUpdateManyWithoutActivity_TypeInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserActivityUpdateManyWithoutActivity_TypeInput>;
};

export type ActivityTypeUpdateWithoutGuildsInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categoryActivity?: InputMaybe<CategoryActivityTypeUpdateManyWithoutActivity_TypeInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutActivity_TypeInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserActivityUpdateManyWithoutActivity_TypeInput>;
};

export type ActivityTypeUpdateWithoutUsersInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categoryActivity?: InputMaybe<CategoryActivityTypeUpdateManyWithoutActivity_TypeInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutActivity_TypeInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildActivityTypeUpdateManyWithoutActivity_TypeInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ActivityTypeUpsertWithoutCategoryActivityInput = {
  create: ActivityTypeCreateWithoutCategoryActivityInput;
  update: ActivityTypeUpdateWithoutCategoryActivityInput;
};

export type ActivityTypeUpsertWithoutContributionsInput = {
  create: ActivityTypeCreateWithoutContributionsInput;
  update: ActivityTypeUpdateWithoutContributionsInput;
};

export type ActivityTypeUpsertWithoutGuildsInput = {
  create: ActivityTypeCreateWithoutGuildsInput;
  update: ActivityTypeUpdateWithoutGuildsInput;
};

export type ActivityTypeUpsertWithoutUsersInput = {
  create: ActivityTypeCreateWithoutUsersInput;
  update: ActivityTypeUpdateWithoutUsersInput;
};

export type ActivityTypeWhereInput = {
  AND?: InputMaybe<Array<ActivityTypeWhereInput>>;
  NOT?: InputMaybe<Array<ActivityTypeWhereInput>>;
  OR?: InputMaybe<Array<ActivityTypeWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  categoryActivity?: InputMaybe<CategoryActivityTypeListRelationFilter>;
  contributions?: InputMaybe<ContributionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  default?: InputMaybe<BoolFilter>;
  guilds?: InputMaybe<GuildActivityTypeListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserActivityListRelationFilter>;
};

export type ActivityTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AffectedRowsOutput = {
  count: Scalars['Int'];
};

export type AggregateActivityType = {
  _avg?: Maybe<ActivityTypeAvgAggregate>;
  _count?: Maybe<ActivityTypeCountAggregate>;
  _max?: Maybe<ActivityTypeMaxAggregate>;
  _min?: Maybe<ActivityTypeMinAggregate>;
  _sum?: Maybe<ActivityTypeSumAggregate>;
};

export type AggregateAttestation = {
  _avg?: Maybe<AttestationAvgAggregate>;
  _count?: Maybe<AttestationCountAggregate>;
  _max?: Maybe<AttestationMaxAggregate>;
  _min?: Maybe<AttestationMinAggregate>;
  _sum?: Maybe<AttestationSumAggregate>;
};

export type AggregateAttestationConfidence = {
  _avg?: Maybe<AttestationConfidenceAvgAggregate>;
  _count?: Maybe<AttestationConfidenceCountAggregate>;
  _max?: Maybe<AttestationConfidenceMaxAggregate>;
  _min?: Maybe<AttestationConfidenceMinAggregate>;
  _sum?: Maybe<AttestationConfidenceSumAggregate>;
};

export type AggregateCategoryActivity = {
  _avg?: Maybe<CategoryActivityAvgAggregate>;
  _count?: Maybe<CategoryActivityCountAggregate>;
  _max?: Maybe<CategoryActivityMaxAggregate>;
  _min?: Maybe<CategoryActivityMinAggregate>;
  _sum?: Maybe<CategoryActivitySumAggregate>;
};

export type AggregateCategoryActivityType = {
  _avg?: Maybe<CategoryActivityTypeAvgAggregate>;
  _count?: Maybe<CategoryActivityTypeCountAggregate>;
  _max?: Maybe<CategoryActivityTypeMaxAggregate>;
  _min?: Maybe<CategoryActivityTypeMinAggregate>;
  _sum?: Maybe<CategoryActivityTypeSumAggregate>;
};

export type AggregateChainType = {
  _avg?: Maybe<ChainTypeAvgAggregate>;
  _count?: Maybe<ChainTypeCountAggregate>;
  _max?: Maybe<ChainTypeMaxAggregate>;
  _min?: Maybe<ChainTypeMinAggregate>;
  _sum?: Maybe<ChainTypeSumAggregate>;
};

export type AggregateContribution = {
  _avg?: Maybe<ContributionAvgAggregate>;
  _count?: Maybe<ContributionCountAggregate>;
  _max?: Maybe<ContributionMaxAggregate>;
  _min?: Maybe<ContributionMinAggregate>;
  _sum?: Maybe<ContributionSumAggregate>;
};

export type AggregateContributionStatus = {
  _avg?: Maybe<ContributionStatusAvgAggregate>;
  _count?: Maybe<ContributionStatusCountAggregate>;
  _max?: Maybe<ContributionStatusMaxAggregate>;
  _min?: Maybe<ContributionStatusMinAggregate>;
  _sum?: Maybe<ContributionStatusSumAggregate>;
};

export type AggregateDiscordUser = {
  _avg?: Maybe<DiscordUserAvgAggregate>;
  _count?: Maybe<DiscordUserCountAggregate>;
  _max?: Maybe<DiscordUserMaxAggregate>;
  _min?: Maybe<DiscordUserMinAggregate>;
  _sum?: Maybe<DiscordUserSumAggregate>;
};

export type AggregateGuild = {
  _avg?: Maybe<GuildAvgAggregate>;
  _count?: Maybe<GuildCountAggregate>;
  _max?: Maybe<GuildMaxAggregate>;
  _min?: Maybe<GuildMinAggregate>;
  _sum?: Maybe<GuildSumAggregate>;
};

export type AggregateGuildActivityType = {
  _avg?: Maybe<GuildActivityTypeAvgAggregate>;
  _count?: Maybe<GuildActivityTypeCountAggregate>;
  _max?: Maybe<GuildActivityTypeMaxAggregate>;
  _min?: Maybe<GuildActivityTypeMinAggregate>;
  _sum?: Maybe<GuildActivityTypeSumAggregate>;
};

export type AggregateGuildContribution = {
  _avg?: Maybe<GuildContributionAvgAggregate>;
  _count?: Maybe<GuildContributionCountAggregate>;
  _max?: Maybe<GuildContributionMaxAggregate>;
  _min?: Maybe<GuildContributionMinAggregate>;
  _sum?: Maybe<GuildContributionSumAggregate>;
};

export type AggregateGuildUser = {
  _avg?: Maybe<GuildUserAvgAggregate>;
  _count?: Maybe<GuildUserCountAggregate>;
  _max?: Maybe<GuildUserMaxAggregate>;
  _min?: Maybe<GuildUserMinAggregate>;
  _sum?: Maybe<GuildUserSumAggregate>;
};

export type AggregateJobRun = {
  _avg?: Maybe<JobRunAvgAggregate>;
  _count?: Maybe<JobRunCountAggregate>;
  _max?: Maybe<JobRunMaxAggregate>;
  _min?: Maybe<JobRunMinAggregate>;
  _sum?: Maybe<JobRunSumAggregate>;
};

export type AggregateLinearCycle = {
  _avg?: Maybe<LinearCycleAvgAggregate>;
  _count?: Maybe<LinearCycleCountAggregate>;
  _max?: Maybe<LinearCycleMaxAggregate>;
  _min?: Maybe<LinearCycleMinAggregate>;
  _sum?: Maybe<LinearCycleSumAggregate>;
};

export type AggregateLinearIssue = {
  _avg?: Maybe<LinearIssueAvgAggregate>;
  _count?: Maybe<LinearIssueCountAggregate>;
  _max?: Maybe<LinearIssueMaxAggregate>;
  _min?: Maybe<LinearIssueMinAggregate>;
  _sum?: Maybe<LinearIssueSumAggregate>;
};

export type AggregateLinearProject = {
  _avg?: Maybe<LinearProjectAvgAggregate>;
  _count?: Maybe<LinearProjectCountAggregate>;
  _max?: Maybe<LinearProjectMaxAggregate>;
  _min?: Maybe<LinearProjectMinAggregate>;
  _sum?: Maybe<LinearProjectSumAggregate>;
};

export type AggregateLinearTeam = {
  _avg?: Maybe<LinearTeamAvgAggregate>;
  _count?: Maybe<LinearTeamCountAggregate>;
  _max?: Maybe<LinearTeamMaxAggregate>;
  _min?: Maybe<LinearTeamMinAggregate>;
  _sum?: Maybe<LinearTeamSumAggregate>;
};

export type AggregateLinearUser = {
  _avg?: Maybe<LinearUserAvgAggregate>;
  _count?: Maybe<LinearUserCountAggregate>;
  _max?: Maybe<LinearUserMaxAggregate>;
  _min?: Maybe<LinearUserMinAggregate>;
  _sum?: Maybe<LinearUserSumAggregate>;
};

export type AggregatePartner = {
  _avg?: Maybe<PartnerAvgAggregate>;
  _count?: Maybe<PartnerCountAggregate>;
  _max?: Maybe<PartnerMaxAggregate>;
  _min?: Maybe<PartnerMinAggregate>;
  _sum?: Maybe<PartnerSumAggregate>;
};

export type AggregateTwitterAccount = {
  _avg?: Maybe<TwitterAccountAvgAggregate>;
  _count?: Maybe<TwitterAccountCountAggregate>;
  _max?: Maybe<TwitterAccountMaxAggregate>;
  _min?: Maybe<TwitterAccountMinAggregate>;
  _sum?: Maybe<TwitterAccountSumAggregate>;
};

export type AggregateTwitterTweet = {
  _avg?: Maybe<TwitterTweetAvgAggregate>;
  _count?: Maybe<TwitterTweetCountAggregate>;
  _max?: Maybe<TwitterTweetMaxAggregate>;
  _min?: Maybe<TwitterTweetMinAggregate>;
  _sum?: Maybe<TwitterTweetSumAggregate>;
};

export type AggregateTwitterUser = {
  _avg?: Maybe<TwitterUserAvgAggregate>;
  _count?: Maybe<TwitterUserCountAggregate>;
  _max?: Maybe<TwitterUserMaxAggregate>;
  _min?: Maybe<TwitterUserMinAggregate>;
  _sum?: Maybe<TwitterUserSumAggregate>;
};

export type AggregateUser = {
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type AggregateUserActivity = {
  _avg?: Maybe<UserActivityAvgAggregate>;
  _count?: Maybe<UserActivityCountAggregate>;
  _max?: Maybe<UserActivityMaxAggregate>;
  _min?: Maybe<UserActivityMinAggregate>;
  _sum?: Maybe<UserActivitySumAggregate>;
};

export type Attestation = {
  confidence: AttestationConfidence;
  confidence_id: Scalars['Int'];
  contribution: Contribution;
  contribution_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  date_of_attestation: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  user_id: Scalars['Int'];
};

export type AttestationAvgAggregate = {
  confidence_id?: Maybe<Scalars['Float']>;
  contribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type AttestationAvgOrderByAggregateInput = {
  confidence_id?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type AttestationConfidence = {
  _count?: Maybe<AttestationConfidenceCount>;
  attestations: Array<Attestation>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type AttestationConfidenceAttestationsArgs = {
  cursor?: InputMaybe<AttestationWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationWhereInput>;
};

export type AttestationConfidenceAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type AttestationConfidenceAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type AttestationConfidenceCount = {
  attestations: Scalars['Int'];
};

export type AttestationConfidenceCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type AttestationConfidenceCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AttestationConfidenceCreateInput = {
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutConfidenceInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AttestationConfidenceCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AttestationConfidenceCreateNestedOneWithoutAttestationsInput = {
  connect?: InputMaybe<AttestationConfidenceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AttestationConfidenceCreateOrConnectWithoutAttestationsInput>;
  create?: InputMaybe<AttestationConfidenceCreateWithoutAttestationsInput>;
};

export type AttestationConfidenceCreateOrConnectWithoutAttestationsInput = {
  create: AttestationConfidenceCreateWithoutAttestationsInput;
  where: AttestationConfidenceWhereUniqueInput;
};

export type AttestationConfidenceCreateWithoutAttestationsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AttestationConfidenceGroupBy = {
  _avg?: Maybe<AttestationConfidenceAvgAggregate>;
  _count?: Maybe<AttestationConfidenceCountAggregate>;
  _max?: Maybe<AttestationConfidenceMaxAggregate>;
  _min?: Maybe<AttestationConfidenceMinAggregate>;
  _sum?: Maybe<AttestationConfidenceSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AttestationConfidenceMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AttestationConfidenceMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AttestationConfidenceMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AttestationConfidenceMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AttestationConfidenceOrderByWithAggregationInput = {
  _avg?: InputMaybe<AttestationConfidenceAvgOrderByAggregateInput>;
  _count?: InputMaybe<AttestationConfidenceCountOrderByAggregateInput>;
  _max?: InputMaybe<AttestationConfidenceMaxOrderByAggregateInput>;
  _min?: InputMaybe<AttestationConfidenceMinOrderByAggregateInput>;
  _sum?: InputMaybe<AttestationConfidenceSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AttestationConfidenceOrderByWithRelationInput = {
  attestations?: InputMaybe<AttestationOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AttestationConfidenceRelationFilter = {
  is?: InputMaybe<AttestationConfidenceWhereInput>;
  isNot?: InputMaybe<AttestationConfidenceWhereInput>;
};

export enum AttestationConfidenceScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type AttestationConfidenceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AttestationConfidenceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AttestationConfidenceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AttestationConfidenceScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AttestationConfidenceSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type AttestationConfidenceSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type AttestationConfidenceUpdateInput = {
  attestations?: InputMaybe<AttestationUpdateManyWithoutConfidenceInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttestationConfidenceUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttestationConfidenceUpdateOneRequiredWithoutAttestationsInput = {
  connect?: InputMaybe<AttestationConfidenceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AttestationConfidenceCreateOrConnectWithoutAttestationsInput>;
  create?: InputMaybe<AttestationConfidenceCreateWithoutAttestationsInput>;
  update?: InputMaybe<AttestationConfidenceUpdateWithoutAttestationsInput>;
  upsert?: InputMaybe<AttestationConfidenceUpsertWithoutAttestationsInput>;
};

export type AttestationConfidenceUpdateWithoutAttestationsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttestationConfidenceUpsertWithoutAttestationsInput = {
  create: AttestationConfidenceCreateWithoutAttestationsInput;
  update: AttestationConfidenceUpdateWithoutAttestationsInput;
};

export type AttestationConfidenceWhereInput = {
  AND?: InputMaybe<Array<AttestationConfidenceWhereInput>>;
  NOT?: InputMaybe<Array<AttestationConfidenceWhereInput>>;
  OR?: InputMaybe<Array<AttestationConfidenceWhereInput>>;
  attestations?: InputMaybe<AttestationListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AttestationConfidenceWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AttestationCountAggregate = {
  _all: Scalars['Int'];
  confidence_id: Scalars['Int'];
  contribution_id: Scalars['Int'];
  createdAt: Scalars['Int'];
  date_of_attestation: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type AttestationCountOrderByAggregateInput = {
  confidence_id?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date_of_attestation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type AttestationCreateInput = {
  confidence: AttestationConfidenceCreateNestedOneWithoutAttestationsInput;
  contribution: ContributionCreateNestedOneWithoutAttestationsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date_of_attestation?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAttestationsInput;
};

export type AttestationCreateManyConfidenceInput = {
  contribution_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date_of_attestation?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type AttestationCreateManyConfidenceInputEnvelope = {
  data: Array<AttestationCreateManyConfidenceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AttestationCreateManyContributionInput = {
  confidence_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date_of_attestation?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type AttestationCreateManyContributionInputEnvelope = {
  data: Array<AttestationCreateManyContributionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AttestationCreateManyInput = {
  confidence_id: Scalars['Int'];
  contribution_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date_of_attestation?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type AttestationCreateManyUserInput = {
  confidence_id: Scalars['Int'];
  contribution_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date_of_attestation?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AttestationCreateManyUserInputEnvelope = {
  data: Array<AttestationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AttestationCreateNestedManyWithoutConfidenceInput = {
  connect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AttestationCreateOrConnectWithoutConfidenceInput>>;
  create?: InputMaybe<Array<AttestationCreateWithoutConfidenceInput>>;
  createMany?: InputMaybe<AttestationCreateManyConfidenceInputEnvelope>;
};

export type AttestationCreateNestedManyWithoutContributionInput = {
  connect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AttestationCreateOrConnectWithoutContributionInput>>;
  create?: InputMaybe<Array<AttestationCreateWithoutContributionInput>>;
  createMany?: InputMaybe<AttestationCreateManyContributionInputEnvelope>;
};

export type AttestationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AttestationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AttestationCreateWithoutUserInput>>;
  createMany?: InputMaybe<AttestationCreateManyUserInputEnvelope>;
};

export type AttestationCreateOrConnectWithoutConfidenceInput = {
  create: AttestationCreateWithoutConfidenceInput;
  where: AttestationWhereUniqueInput;
};

export type AttestationCreateOrConnectWithoutContributionInput = {
  create: AttestationCreateWithoutContributionInput;
  where: AttestationWhereUniqueInput;
};

export type AttestationCreateOrConnectWithoutUserInput = {
  create: AttestationCreateWithoutUserInput;
  where: AttestationWhereUniqueInput;
};

export type AttestationCreateWithoutConfidenceInput = {
  contribution: ContributionCreateNestedOneWithoutAttestationsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date_of_attestation?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAttestationsInput;
};

export type AttestationCreateWithoutContributionInput = {
  confidence: AttestationConfidenceCreateNestedOneWithoutAttestationsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date_of_attestation?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAttestationsInput;
};

export type AttestationCreateWithoutUserInput = {
  confidence: AttestationConfidenceCreateNestedOneWithoutAttestationsInput;
  contribution: ContributionCreateNestedOneWithoutAttestationsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date_of_attestation?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AttestationGroupBy = {
  _avg?: Maybe<AttestationAvgAggregate>;
  _count?: Maybe<AttestationCountAggregate>;
  _max?: Maybe<AttestationMaxAggregate>;
  _min?: Maybe<AttestationMinAggregate>;
  _sum?: Maybe<AttestationSumAggregate>;
  confidence_id: Scalars['Int'];
  contribution_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  date_of_attestation: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user_id: Scalars['Int'];
};

export type AttestationListRelationFilter = {
  every?: InputMaybe<AttestationWhereInput>;
  none?: InputMaybe<AttestationWhereInput>;
  some?: InputMaybe<AttestationWhereInput>;
};

export type AttestationMaxAggregate = {
  confidence_id?: Maybe<Scalars['Int']>;
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date_of_attestation?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type AttestationMaxOrderByAggregateInput = {
  confidence_id?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date_of_attestation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type AttestationMinAggregate = {
  confidence_id?: Maybe<Scalars['Int']>;
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date_of_attestation?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type AttestationMinOrderByAggregateInput = {
  confidence_id?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date_of_attestation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type AttestationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AttestationOrderByWithAggregationInput = {
  _avg?: InputMaybe<AttestationAvgOrderByAggregateInput>;
  _count?: InputMaybe<AttestationCountOrderByAggregateInput>;
  _max?: InputMaybe<AttestationMaxOrderByAggregateInput>;
  _min?: InputMaybe<AttestationMinOrderByAggregateInput>;
  _sum?: InputMaybe<AttestationSumOrderByAggregateInput>;
  confidence_id?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date_of_attestation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type AttestationOrderByWithRelationInput = {
  confidence?: InputMaybe<AttestationConfidenceOrderByWithRelationInput>;
  confidence_id?: InputMaybe<SortOrder>;
  contribution?: InputMaybe<ContributionOrderByWithRelationInput>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date_of_attestation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum AttestationScalarFieldEnum {
  ConfidenceId = 'confidence_id',
  ContributionId = 'contribution_id',
  CreatedAt = 'createdAt',
  DateOfAttestation = 'date_of_attestation',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type AttestationScalarWhereInput = {
  AND?: InputMaybe<Array<AttestationScalarWhereInput>>;
  NOT?: InputMaybe<Array<AttestationScalarWhereInput>>;
  OR?: InputMaybe<Array<AttestationScalarWhereInput>>;
  confidence_id?: InputMaybe<IntFilter>;
  contribution_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date_of_attestation?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type AttestationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AttestationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AttestationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AttestationScalarWhereWithAggregatesInput>>;
  confidence_id?: InputMaybe<IntWithAggregatesFilter>;
  contribution_id?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  date_of_attestation?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type AttestationSumAggregate = {
  confidence_id?: Maybe<Scalars['Int']>;
  contribution_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type AttestationSumOrderByAggregateInput = {
  confidence_id?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type AttestationUpdateInput = {
  confidence?: InputMaybe<AttestationConfidenceUpdateOneRequiredWithoutAttestationsInput>;
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutAttestationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_attestation?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAttestationsInput>;
};

export type AttestationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_attestation?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttestationUpdateManyWithWhereWithoutConfidenceInput = {
  data: AttestationUpdateManyMutationInput;
  where: AttestationScalarWhereInput;
};

export type AttestationUpdateManyWithWhereWithoutContributionInput = {
  data: AttestationUpdateManyMutationInput;
  where: AttestationScalarWhereInput;
};

export type AttestationUpdateManyWithWhereWithoutUserInput = {
  data: AttestationUpdateManyMutationInput;
  where: AttestationScalarWhereInput;
};

export type AttestationUpdateManyWithoutConfidenceInput = {
  connect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AttestationCreateOrConnectWithoutConfidenceInput>>;
  create?: InputMaybe<Array<AttestationCreateWithoutConfidenceInput>>;
  createMany?: InputMaybe<AttestationCreateManyConfidenceInputEnvelope>;
  delete?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AttestationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  set?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  update?: InputMaybe<Array<AttestationUpdateWithWhereUniqueWithoutConfidenceInput>>;
  updateMany?: InputMaybe<Array<AttestationUpdateManyWithWhereWithoutConfidenceInput>>;
  upsert?: InputMaybe<Array<AttestationUpsertWithWhereUniqueWithoutConfidenceInput>>;
};

export type AttestationUpdateManyWithoutContributionInput = {
  connect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AttestationCreateOrConnectWithoutContributionInput>>;
  create?: InputMaybe<Array<AttestationCreateWithoutContributionInput>>;
  createMany?: InputMaybe<AttestationCreateManyContributionInputEnvelope>;
  delete?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AttestationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  set?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  update?: InputMaybe<Array<AttestationUpdateWithWhereUniqueWithoutContributionInput>>;
  updateMany?: InputMaybe<Array<AttestationUpdateManyWithWhereWithoutContributionInput>>;
  upsert?: InputMaybe<Array<AttestationUpsertWithWhereUniqueWithoutContributionInput>>;
};

export type AttestationUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AttestationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AttestationCreateWithoutUserInput>>;
  createMany?: InputMaybe<AttestationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AttestationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  set?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  update?: InputMaybe<Array<AttestationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AttestationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AttestationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AttestationUpdateWithWhereUniqueWithoutConfidenceInput = {
  data: AttestationUpdateWithoutConfidenceInput;
  where: AttestationWhereUniqueInput;
};

export type AttestationUpdateWithWhereUniqueWithoutContributionInput = {
  data: AttestationUpdateWithoutContributionInput;
  where: AttestationWhereUniqueInput;
};

export type AttestationUpdateWithWhereUniqueWithoutUserInput = {
  data: AttestationUpdateWithoutUserInput;
  where: AttestationWhereUniqueInput;
};

export type AttestationUpdateWithoutConfidenceInput = {
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutAttestationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_attestation?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAttestationsInput>;
};

export type AttestationUpdateWithoutContributionInput = {
  confidence?: InputMaybe<AttestationConfidenceUpdateOneRequiredWithoutAttestationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_attestation?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAttestationsInput>;
};

export type AttestationUpdateWithoutUserInput = {
  confidence?: InputMaybe<AttestationConfidenceUpdateOneRequiredWithoutAttestationsInput>;
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutAttestationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_attestation?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttestationUpsertWithWhereUniqueWithoutConfidenceInput = {
  create: AttestationCreateWithoutConfidenceInput;
  update: AttestationUpdateWithoutConfidenceInput;
  where: AttestationWhereUniqueInput;
};

export type AttestationUpsertWithWhereUniqueWithoutContributionInput = {
  create: AttestationCreateWithoutContributionInput;
  update: AttestationUpdateWithoutContributionInput;
  where: AttestationWhereUniqueInput;
};

export type AttestationUpsertWithWhereUniqueWithoutUserInput = {
  create: AttestationCreateWithoutUserInput;
  update: AttestationUpdateWithoutUserInput;
  where: AttestationWhereUniqueInput;
};

export type AttestationUserCreateInput = {
  address: Scalars['String'];
  chainName: Scalars['String'];
  confidenceName: Scalars['String'];
  contributionId: Scalars['Int'];
  userId: Scalars['Float'];
};

export type AttestationUserOnChainCreateInput = {
  confidence: Scalars['String'];
  contributionOnChainId: Scalars['Float'];
  userId: Scalars['Float'];
};

export type AttestationUserOnChainUpdateInput = {
  confidence: Scalars['String'];
  contributionOnChainId: Scalars['Float'];
  id: Scalars['Float'];
  userId: Scalars['Float'];
};

export type AttestationUser_IdContribution_IdCompoundUniqueInput = {
  contribution_id: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type AttestationWhereInput = {
  AND?: InputMaybe<Array<AttestationWhereInput>>;
  NOT?: InputMaybe<Array<AttestationWhereInput>>;
  OR?: InputMaybe<Array<AttestationWhereInput>>;
  confidence?: InputMaybe<AttestationConfidenceRelationFilter>;
  confidence_id?: InputMaybe<IntFilter>;
  contribution?: InputMaybe<ContributionRelationFilter>;
  contribution_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date_of_attestation?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type AttestationWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  user_id_contribution_id?: InputMaybe<AttestationUser_IdContribution_IdCompoundUniqueInput>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type BoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type CategoryActivity = {
  _count?: Maybe<CategoryActivityCount>;
  activityTypes: Array<CategoryActivityType>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type CategoryActivityActivityTypesArgs = {
  cursor?: InputMaybe<CategoryActivityTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryActivityTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryActivityTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryActivityTypeWhereInput>;
};

export type CategoryActivityAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type CategoryActivityAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CategoryActivityCount = {
  activityTypes: Scalars['Int'];
};

export type CategoryActivityCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CategoryActivityCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryActivityCreateInput = {
  activityTypes?: InputMaybe<CategoryActivityTypeCreateNestedManyWithoutCategory_ActivityInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryActivityCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryActivityCreateNestedOneWithoutActivityTypesInput = {
  connect?: InputMaybe<CategoryActivityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryActivityCreateOrConnectWithoutActivityTypesInput>;
  create?: InputMaybe<CategoryActivityCreateWithoutActivityTypesInput>;
};

export type CategoryActivityCreateOrConnectWithoutActivityTypesInput = {
  create: CategoryActivityCreateWithoutActivityTypesInput;
  where: CategoryActivityWhereUniqueInput;
};

export type CategoryActivityCreateWithoutActivityTypesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryActivityGroupBy = {
  _avg?: Maybe<CategoryActivityAvgAggregate>;
  _count?: Maybe<CategoryActivityCountAggregate>;
  _max?: Maybe<CategoryActivityMaxAggregate>;
  _min?: Maybe<CategoryActivityMinAggregate>;
  _sum?: Maybe<CategoryActivitySumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CategoryActivityMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryActivityMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryActivityMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryActivityMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryActivityOrderByWithAggregationInput = {
  _avg?: InputMaybe<CategoryActivityAvgOrderByAggregateInput>;
  _count?: InputMaybe<CategoryActivityCountOrderByAggregateInput>;
  _max?: InputMaybe<CategoryActivityMaxOrderByAggregateInput>;
  _min?: InputMaybe<CategoryActivityMinOrderByAggregateInput>;
  _sum?: InputMaybe<CategoryActivitySumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryActivityOrderByWithRelationInput = {
  activityTypes?: InputMaybe<CategoryActivityTypeOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryActivityRelationFilter = {
  is?: InputMaybe<CategoryActivityWhereInput>;
  isNot?: InputMaybe<CategoryActivityWhereInput>;
};

export enum CategoryActivityScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type CategoryActivityScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CategoryActivityScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CategoryActivityScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CategoryActivityScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CategoryActivitySumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type CategoryActivitySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CategoryActivityType = {
  activity_type: ActivityType;
  activity_type_id: Scalars['Int'];
  category_activity: CategoryActivity;
  category_activity_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CategoryActivityTypeAvgAggregate = {
  activity_type_id?: Maybe<Scalars['Float']>;
  category_activity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type CategoryActivityTypeAvgOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  category_activity_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type CategoryActivityTypeCategory_Activity_IdActivity_Type_IdCompoundUniqueInput = {
  activity_type_id: Scalars['Int'];
  category_activity_id: Scalars['Int'];
};

export type CategoryActivityTypeCountAggregate = {
  _all: Scalars['Int'];
  activity_type_id: Scalars['Int'];
  category_activity_id: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CategoryActivityTypeCountOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  category_activity_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryActivityTypeCreateInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutCategoryActivityInput;
  category_activity: CategoryActivityCreateNestedOneWithoutActivityTypesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryActivityTypeCreateManyActivity_TypeInput = {
  category_activity_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryActivityTypeCreateManyActivity_TypeInputEnvelope = {
  data: Array<CategoryActivityTypeCreateManyActivity_TypeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CategoryActivityTypeCreateManyCategory_ActivityInput = {
  activity_type_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryActivityTypeCreateManyCategory_ActivityInputEnvelope = {
  data: Array<CategoryActivityTypeCreateManyCategory_ActivityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CategoryActivityTypeCreateManyInput = {
  activity_type_id: Scalars['Int'];
  category_activity_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryActivityTypeCreateNestedManyWithoutActivity_TypeInput = {
  connect?: InputMaybe<Array<CategoryActivityTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryActivityTypeCreateOrConnectWithoutActivity_TypeInput>>;
  create?: InputMaybe<Array<CategoryActivityTypeCreateWithoutActivity_TypeInput>>;
  createMany?: InputMaybe<CategoryActivityTypeCreateManyActivity_TypeInputEnvelope>;
};

export type CategoryActivityTypeCreateNestedManyWithoutCategory_ActivityInput = {
  connect?: InputMaybe<Array<CategoryActivityTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryActivityTypeCreateOrConnectWithoutCategory_ActivityInput>>;
  create?: InputMaybe<Array<CategoryActivityTypeCreateWithoutCategory_ActivityInput>>;
  createMany?: InputMaybe<CategoryActivityTypeCreateManyCategory_ActivityInputEnvelope>;
};

export type CategoryActivityTypeCreateOrConnectWithoutActivity_TypeInput = {
  create: CategoryActivityTypeCreateWithoutActivity_TypeInput;
  where: CategoryActivityTypeWhereUniqueInput;
};

export type CategoryActivityTypeCreateOrConnectWithoutCategory_ActivityInput = {
  create: CategoryActivityTypeCreateWithoutCategory_ActivityInput;
  where: CategoryActivityTypeWhereUniqueInput;
};

export type CategoryActivityTypeCreateWithoutActivity_TypeInput = {
  category_activity: CategoryActivityCreateNestedOneWithoutActivityTypesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryActivityTypeCreateWithoutCategory_ActivityInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutCategoryActivityInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryActivityTypeGroupBy = {
  _avg?: Maybe<CategoryActivityTypeAvgAggregate>;
  _count?: Maybe<CategoryActivityTypeCountAggregate>;
  _max?: Maybe<CategoryActivityTypeMaxAggregate>;
  _min?: Maybe<CategoryActivityTypeMinAggregate>;
  _sum?: Maybe<CategoryActivityTypeSumAggregate>;
  activity_type_id: Scalars['Int'];
  category_activity_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CategoryActivityTypeListRelationFilter = {
  every?: InputMaybe<CategoryActivityTypeWhereInput>;
  none?: InputMaybe<CategoryActivityTypeWhereInput>;
  some?: InputMaybe<CategoryActivityTypeWhereInput>;
};

export type CategoryActivityTypeMaxAggregate = {
  activity_type_id?: Maybe<Scalars['Int']>;
  category_activity_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryActivityTypeMaxOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  category_activity_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryActivityTypeMinAggregate = {
  activity_type_id?: Maybe<Scalars['Int']>;
  category_activity_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryActivityTypeMinOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  category_activity_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryActivityTypeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CategoryActivityTypeOrderByWithAggregationInput = {
  _avg?: InputMaybe<CategoryActivityTypeAvgOrderByAggregateInput>;
  _count?: InputMaybe<CategoryActivityTypeCountOrderByAggregateInput>;
  _max?: InputMaybe<CategoryActivityTypeMaxOrderByAggregateInput>;
  _min?: InputMaybe<CategoryActivityTypeMinOrderByAggregateInput>;
  _sum?: InputMaybe<CategoryActivityTypeSumOrderByAggregateInput>;
  activity_type_id?: InputMaybe<SortOrder>;
  category_activity_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryActivityTypeOrderByWithRelationInput = {
  activity_type?: InputMaybe<ActivityTypeOrderByWithRelationInput>;
  activity_type_id?: InputMaybe<SortOrder>;
  category_activity?: InputMaybe<CategoryActivityOrderByWithRelationInput>;
  category_activity_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum CategoryActivityTypeScalarFieldEnum {
  ActivityTypeId = 'activity_type_id',
  CategoryActivityId = 'category_activity_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type CategoryActivityTypeScalarWhereInput = {
  AND?: InputMaybe<Array<CategoryActivityTypeScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoryActivityTypeScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoryActivityTypeScalarWhereInput>>;
  activity_type_id?: InputMaybe<IntFilter>;
  category_activity_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryActivityTypeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CategoryActivityTypeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CategoryActivityTypeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CategoryActivityTypeScalarWhereWithAggregatesInput>>;
  activity_type_id?: InputMaybe<IntWithAggregatesFilter>;
  category_activity_id?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CategoryActivityTypeSumAggregate = {
  activity_type_id?: Maybe<Scalars['Int']>;
  category_activity_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type CategoryActivityTypeSumOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  category_activity_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type CategoryActivityTypeUpdateInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutCategoryActivityInput>;
  category_activity?: InputMaybe<CategoryActivityUpdateOneRequiredWithoutActivityTypesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryActivityTypeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryActivityTypeUpdateManyWithWhereWithoutActivity_TypeInput = {
  data: CategoryActivityTypeUpdateManyMutationInput;
  where: CategoryActivityTypeScalarWhereInput;
};

export type CategoryActivityTypeUpdateManyWithWhereWithoutCategory_ActivityInput = {
  data: CategoryActivityTypeUpdateManyMutationInput;
  where: CategoryActivityTypeScalarWhereInput;
};

export type CategoryActivityTypeUpdateManyWithoutActivity_TypeInput = {
  connect?: InputMaybe<Array<CategoryActivityTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryActivityTypeCreateOrConnectWithoutActivity_TypeInput>>;
  create?: InputMaybe<Array<CategoryActivityTypeCreateWithoutActivity_TypeInput>>;
  createMany?: InputMaybe<CategoryActivityTypeCreateManyActivity_TypeInputEnvelope>;
  delete?: InputMaybe<Array<CategoryActivityTypeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryActivityTypeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryActivityTypeWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryActivityTypeWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryActivityTypeUpdateWithWhereUniqueWithoutActivity_TypeInput>>;
  updateMany?: InputMaybe<Array<CategoryActivityTypeUpdateManyWithWhereWithoutActivity_TypeInput>>;
  upsert?: InputMaybe<Array<CategoryActivityTypeUpsertWithWhereUniqueWithoutActivity_TypeInput>>;
};

export type CategoryActivityTypeUpdateManyWithoutCategory_ActivityInput = {
  connect?: InputMaybe<Array<CategoryActivityTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryActivityTypeCreateOrConnectWithoutCategory_ActivityInput>>;
  create?: InputMaybe<Array<CategoryActivityTypeCreateWithoutCategory_ActivityInput>>;
  createMany?: InputMaybe<CategoryActivityTypeCreateManyCategory_ActivityInputEnvelope>;
  delete?: InputMaybe<Array<CategoryActivityTypeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryActivityTypeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryActivityTypeWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryActivityTypeWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryActivityTypeUpdateWithWhereUniqueWithoutCategory_ActivityInput>>;
  updateMany?: InputMaybe<Array<CategoryActivityTypeUpdateManyWithWhereWithoutCategory_ActivityInput>>;
  upsert?: InputMaybe<Array<CategoryActivityTypeUpsertWithWhereUniqueWithoutCategory_ActivityInput>>;
};

export type CategoryActivityTypeUpdateWithWhereUniqueWithoutActivity_TypeInput = {
  data: CategoryActivityTypeUpdateWithoutActivity_TypeInput;
  where: CategoryActivityTypeWhereUniqueInput;
};

export type CategoryActivityTypeUpdateWithWhereUniqueWithoutCategory_ActivityInput = {
  data: CategoryActivityTypeUpdateWithoutCategory_ActivityInput;
  where: CategoryActivityTypeWhereUniqueInput;
};

export type CategoryActivityTypeUpdateWithoutActivity_TypeInput = {
  category_activity?: InputMaybe<CategoryActivityUpdateOneRequiredWithoutActivityTypesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryActivityTypeUpdateWithoutCategory_ActivityInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutCategoryActivityInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryActivityTypeUpsertWithWhereUniqueWithoutActivity_TypeInput = {
  create: CategoryActivityTypeCreateWithoutActivity_TypeInput;
  update: CategoryActivityTypeUpdateWithoutActivity_TypeInput;
  where: CategoryActivityTypeWhereUniqueInput;
};

export type CategoryActivityTypeUpsertWithWhereUniqueWithoutCategory_ActivityInput = {
  create: CategoryActivityTypeCreateWithoutCategory_ActivityInput;
  update: CategoryActivityTypeUpdateWithoutCategory_ActivityInput;
  where: CategoryActivityTypeWhereUniqueInput;
};

export type CategoryActivityTypeWhereInput = {
  AND?: InputMaybe<Array<CategoryActivityTypeWhereInput>>;
  NOT?: InputMaybe<Array<CategoryActivityTypeWhereInput>>;
  OR?: InputMaybe<Array<CategoryActivityTypeWhereInput>>;
  activity_type?: InputMaybe<ActivityTypeRelationFilter>;
  activity_type_id?: InputMaybe<IntFilter>;
  category_activity?: InputMaybe<CategoryActivityRelationFilter>;
  category_activity_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryActivityTypeWhereUniqueInput = {
  category_activity_id_activity_type_id?: InputMaybe<CategoryActivityTypeCategory_Activity_IdActivity_Type_IdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']>;
};

export type CategoryActivityUpdateInput = {
  activityTypes?: InputMaybe<CategoryActivityTypeUpdateManyWithoutCategory_ActivityInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryActivityUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryActivityUpdateOneRequiredWithoutActivityTypesInput = {
  connect?: InputMaybe<CategoryActivityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryActivityCreateOrConnectWithoutActivityTypesInput>;
  create?: InputMaybe<CategoryActivityCreateWithoutActivityTypesInput>;
  update?: InputMaybe<CategoryActivityUpdateWithoutActivityTypesInput>;
  upsert?: InputMaybe<CategoryActivityUpsertWithoutActivityTypesInput>;
};

export type CategoryActivityUpdateWithoutActivityTypesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryActivityUpsertWithoutActivityTypesInput = {
  create: CategoryActivityCreateWithoutActivityTypesInput;
  update: CategoryActivityUpdateWithoutActivityTypesInput;
};

export type CategoryActivityWhereInput = {
  AND?: InputMaybe<Array<CategoryActivityWhereInput>>;
  NOT?: InputMaybe<Array<CategoryActivityWhereInput>>;
  OR?: InputMaybe<Array<CategoryActivityWhereInput>>;
  activityTypes?: InputMaybe<CategoryActivityTypeListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryActivityWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ChainType = {
  _count?: Maybe<ChainTypeCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users: Array<User>;
};


export type ChainTypeUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type ChainTypeAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type ChainTypeAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ChainTypeCount = {
  users: Scalars['Int'];
};

export type ChainTypeCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ChainTypeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ChainTypeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutChain_TypeInput>;
};

export type ChainTypeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ChainTypeCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<ChainTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChainTypeCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<ChainTypeCreateWithoutUsersInput>;
};

export type ChainTypeCreateOrConnectWithoutUsersInput = {
  create: ChainTypeCreateWithoutUsersInput;
  where: ChainTypeWhereUniqueInput;
};

export type ChainTypeCreateWithoutUsersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ChainTypeGroupBy = {
  _avg?: Maybe<ChainTypeAvgAggregate>;
  _count?: Maybe<ChainTypeCountAggregate>;
  _max?: Maybe<ChainTypeMaxAggregate>;
  _min?: Maybe<ChainTypeMinAggregate>;
  _sum?: Maybe<ChainTypeSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ChainTypeMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ChainTypeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ChainTypeMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ChainTypeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ChainTypeOrderByWithAggregationInput = {
  _avg?: InputMaybe<ChainTypeAvgOrderByAggregateInput>;
  _count?: InputMaybe<ChainTypeCountOrderByAggregateInput>;
  _max?: InputMaybe<ChainTypeMaxOrderByAggregateInput>;
  _min?: InputMaybe<ChainTypeMinOrderByAggregateInput>;
  _sum?: InputMaybe<ChainTypeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ChainTypeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export type ChainTypeRelationFilter = {
  is?: InputMaybe<ChainTypeWhereInput>;
  isNot?: InputMaybe<ChainTypeWhereInput>;
};

export enum ChainTypeScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ChainTypeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ChainTypeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ChainTypeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ChainTypeScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ChainTypeSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type ChainTypeSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ChainTypeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutChain_TypeInput>;
};

export type ChainTypeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChainTypeUpdateOneRequiredWithoutUsersInput = {
  connect?: InputMaybe<ChainTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChainTypeCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<ChainTypeCreateWithoutUsersInput>;
  update?: InputMaybe<ChainTypeUpdateWithoutUsersInput>;
  upsert?: InputMaybe<ChainTypeUpsertWithoutUsersInput>;
};

export type ChainTypeUpdateWithoutUsersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChainTypeUpsertWithoutUsersInput = {
  create: ChainTypeCreateWithoutUsersInput;
  update: ChainTypeUpdateWithoutUsersInput;
};

export type ChainTypeWhereInput = {
  AND?: InputMaybe<Array<ChainTypeWhereInput>>;
  NOT?: InputMaybe<Array<ChainTypeWhereInput>>;
  OR?: InputMaybe<Array<ChainTypeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type ChainTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Contribution = {
  _count?: Maybe<ContributionCount>;
  activity_type: ActivityType;
  activity_type_id: Scalars['Int'];
  attestations: Array<Attestation>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission: Scalars['DateTime'];
  details?: Maybe<Scalars['String']>;
  guilds: Array<GuildContribution>;
  id: Scalars['Int'];
  linear_issue?: Maybe<LinearIssue>;
  name: Scalars['String'];
  on_chain_id?: Maybe<Scalars['Int']>;
  partners: Array<Partner>;
  proof?: Maybe<Scalars['String']>;
  status: ContributionStatus;
  status_id: Scalars['Int'];
  tweet?: Maybe<TwitterTweet>;
  updatedAt: Scalars['DateTime'];
  user: User;
  user_id: Scalars['Int'];
};


export type ContributionAttestationsArgs = {
  cursor?: InputMaybe<AttestationWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationWhereInput>;
};


export type ContributionGuildsArgs = {
  cursor?: InputMaybe<GuildContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildContributionWhereInput>;
};


export type ContributionPartnersArgs = {
  cursor?: InputMaybe<PartnerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PartnerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PartnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PartnerWhereInput>;
};

export type ContributionAvgAggregate = {
  activity_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  on_chain_id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type ContributionAvgOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  on_chain_id?: InputMaybe<SortOrder>;
  status_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ContributionCount = {
  attestations: Scalars['Int'];
  guilds: Scalars['Int'];
  partners: Scalars['Int'];
};

export type ContributionCountAggregate = {
  _all: Scalars['Int'];
  activity_type_id: Scalars['Int'];
  date_of_engagement: Scalars['Int'];
  date_of_submission: Scalars['Int'];
  details: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  on_chain_id: Scalars['Int'];
  proof: Scalars['Int'];
  status_id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type ContributionCountOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  date_of_engagement?: InputMaybe<SortOrder>;
  date_of_submission?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  on_chain_id?: InputMaybe<SortOrder>;
  proof?: InputMaybe<SortOrder>;
  status_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ContributionCreateInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  guilds?: InputMaybe<GuildContributionCreateNestedManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueCreateNestedOneWithoutContributionInput>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  partners?: InputMaybe<PartnerCreateNestedManyWithoutContributionInput>;
  proof?: InputMaybe<Scalars['String']>;
  status: ContributionStatusCreateNestedOneWithoutContributionsInput;
  tweet?: InputMaybe<TwitterTweetCreateNestedOneWithoutContributionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateManyActivity_TypeInput = {
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  proof?: InputMaybe<Scalars['String']>;
  status_id: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type ContributionCreateManyActivity_TypeInputEnvelope = {
  data: Array<ContributionCreateManyActivity_TypeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ContributionCreateManyInput = {
  activity_type_id: Scalars['Int'];
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  proof?: InputMaybe<Scalars['String']>;
  status_id: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type ContributionCreateManyStatusInput = {
  activity_type_id: Scalars['Int'];
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  proof?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type ContributionCreateManyStatusInputEnvelope = {
  data: Array<ContributionCreateManyStatusInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ContributionCreateManyUserInput = {
  activity_type_id: Scalars['Int'];
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  proof?: InputMaybe<Scalars['String']>;
  status_id: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ContributionCreateManyUserInputEnvelope = {
  data: Array<ContributionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ContributionCreateNestedManyWithoutActivity_TypeInput = {
  connect?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ContributionCreateOrConnectWithoutActivity_TypeInput>>;
  create?: InputMaybe<Array<ContributionCreateWithoutActivity_TypeInput>>;
  createMany?: InputMaybe<ContributionCreateManyActivity_TypeInputEnvelope>;
};

export type ContributionCreateNestedManyWithoutStatusInput = {
  connect?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ContributionCreateOrConnectWithoutStatusInput>>;
  create?: InputMaybe<Array<ContributionCreateWithoutStatusInput>>;
  createMany?: InputMaybe<ContributionCreateManyStatusInputEnvelope>;
};

export type ContributionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ContributionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ContributionCreateWithoutUserInput>>;
  createMany?: InputMaybe<ContributionCreateManyUserInputEnvelope>;
};

export type ContributionCreateNestedOneWithoutAttestationsInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutAttestationsInput>;
  create?: InputMaybe<ContributionCreateWithoutAttestationsInput>;
};

export type ContributionCreateNestedOneWithoutGuildsInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutGuildsInput>;
  create?: InputMaybe<ContributionCreateWithoutGuildsInput>;
};

export type ContributionCreateNestedOneWithoutLinear_IssueInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutLinear_IssueInput>;
  create?: InputMaybe<ContributionCreateWithoutLinear_IssueInput>;
};

export type ContributionCreateNestedOneWithoutPartnersInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutPartnersInput>;
  create?: InputMaybe<ContributionCreateWithoutPartnersInput>;
};

export type ContributionCreateNestedOneWithoutTweetInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutTweetInput>;
  create?: InputMaybe<ContributionCreateWithoutTweetInput>;
};

export type ContributionCreateOrConnectWithoutActivity_TypeInput = {
  create: ContributionCreateWithoutActivity_TypeInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionCreateOrConnectWithoutAttestationsInput = {
  create: ContributionCreateWithoutAttestationsInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionCreateOrConnectWithoutGuildsInput = {
  create: ContributionCreateWithoutGuildsInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionCreateOrConnectWithoutLinear_IssueInput = {
  create: ContributionCreateWithoutLinear_IssueInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionCreateOrConnectWithoutPartnersInput = {
  create: ContributionCreateWithoutPartnersInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionCreateOrConnectWithoutStatusInput = {
  create: ContributionCreateWithoutStatusInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionCreateOrConnectWithoutTweetInput = {
  create: ContributionCreateWithoutTweetInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionCreateOrConnectWithoutUserInput = {
  create: ContributionCreateWithoutUserInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionCreateWithoutActivity_TypeInput = {
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  guilds?: InputMaybe<GuildContributionCreateNestedManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueCreateNestedOneWithoutContributionInput>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  partners?: InputMaybe<PartnerCreateNestedManyWithoutContributionInput>;
  proof?: InputMaybe<Scalars['String']>;
  status: ContributionStatusCreateNestedOneWithoutContributionsInput;
  tweet?: InputMaybe<TwitterTweetCreateNestedOneWithoutContributionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutAttestationsInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  guilds?: InputMaybe<GuildContributionCreateNestedManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueCreateNestedOneWithoutContributionInput>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  partners?: InputMaybe<PartnerCreateNestedManyWithoutContributionInput>;
  proof?: InputMaybe<Scalars['String']>;
  status: ContributionStatusCreateNestedOneWithoutContributionsInput;
  tweet?: InputMaybe<TwitterTweetCreateNestedOneWithoutContributionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutGuildsInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  linear_issue?: InputMaybe<LinearIssueCreateNestedOneWithoutContributionInput>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  partners?: InputMaybe<PartnerCreateNestedManyWithoutContributionInput>;
  proof?: InputMaybe<Scalars['String']>;
  status: ContributionStatusCreateNestedOneWithoutContributionsInput;
  tweet?: InputMaybe<TwitterTweetCreateNestedOneWithoutContributionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutLinear_IssueInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  guilds?: InputMaybe<GuildContributionCreateNestedManyWithoutContributionInput>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  partners?: InputMaybe<PartnerCreateNestedManyWithoutContributionInput>;
  proof?: InputMaybe<Scalars['String']>;
  status: ContributionStatusCreateNestedOneWithoutContributionsInput;
  tweet?: InputMaybe<TwitterTweetCreateNestedOneWithoutContributionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutPartnersInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  guilds?: InputMaybe<GuildContributionCreateNestedManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueCreateNestedOneWithoutContributionInput>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  proof?: InputMaybe<Scalars['String']>;
  status: ContributionStatusCreateNestedOneWithoutContributionsInput;
  tweet?: InputMaybe<TwitterTweetCreateNestedOneWithoutContributionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutStatusInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  guilds?: InputMaybe<GuildContributionCreateNestedManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueCreateNestedOneWithoutContributionInput>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  partners?: InputMaybe<PartnerCreateNestedManyWithoutContributionInput>;
  proof?: InputMaybe<Scalars['String']>;
  tweet?: InputMaybe<TwitterTweetCreateNestedOneWithoutContributionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutTweetInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  guilds?: InputMaybe<GuildContributionCreateNestedManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueCreateNestedOneWithoutContributionInput>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  partners?: InputMaybe<PartnerCreateNestedManyWithoutContributionInput>;
  proof?: InputMaybe<Scalars['String']>;
  status: ContributionStatusCreateNestedOneWithoutContributionsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutUserInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  guilds?: InputMaybe<GuildContributionCreateNestedManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueCreateNestedOneWithoutContributionInput>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  partners?: InputMaybe<PartnerCreateNestedManyWithoutContributionInput>;
  proof?: InputMaybe<Scalars['String']>;
  status: ContributionStatusCreateNestedOneWithoutContributionsInput;
  tweet?: InputMaybe<TwitterTweetCreateNestedOneWithoutContributionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ContributionGroupBy = {
  _avg?: Maybe<ContributionAvgAggregate>;
  _count?: Maybe<ContributionCountAggregate>;
  _max?: Maybe<ContributionMaxAggregate>;
  _min?: Maybe<ContributionMinAggregate>;
  _sum?: Maybe<ContributionSumAggregate>;
  activity_type_id: Scalars['Int'];
  date_of_engagement: Scalars['DateTime'];
  date_of_submission: Scalars['DateTime'];
  details?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  on_chain_id?: Maybe<Scalars['Int']>;
  proof?: Maybe<Scalars['String']>;
  status_id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user_id: Scalars['Int'];
};

export type ContributionListRelationFilter = {
  every?: InputMaybe<ContributionWhereInput>;
  none?: InputMaybe<ContributionWhereInput>;
  some?: InputMaybe<ContributionWhereInput>;
};

export type ContributionMaxAggregate = {
  activity_type_id?: Maybe<Scalars['Int']>;
  date_of_engagement?: Maybe<Scalars['DateTime']>;
  date_of_submission?: Maybe<Scalars['DateTime']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  on_chain_id?: Maybe<Scalars['Int']>;
  proof?: Maybe<Scalars['String']>;
  status_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type ContributionMaxOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  date_of_engagement?: InputMaybe<SortOrder>;
  date_of_submission?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  on_chain_id?: InputMaybe<SortOrder>;
  proof?: InputMaybe<SortOrder>;
  status_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ContributionMinAggregate = {
  activity_type_id?: Maybe<Scalars['Int']>;
  date_of_engagement?: Maybe<Scalars['DateTime']>;
  date_of_submission?: Maybe<Scalars['DateTime']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  on_chain_id?: Maybe<Scalars['Int']>;
  proof?: Maybe<Scalars['String']>;
  status_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type ContributionMinOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  date_of_engagement?: InputMaybe<SortOrder>;
  date_of_submission?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  on_chain_id?: InputMaybe<SortOrder>;
  proof?: InputMaybe<SortOrder>;
  status_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ContributionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ContributionOrderByWithAggregationInput = {
  _avg?: InputMaybe<ContributionAvgOrderByAggregateInput>;
  _count?: InputMaybe<ContributionCountOrderByAggregateInput>;
  _max?: InputMaybe<ContributionMaxOrderByAggregateInput>;
  _min?: InputMaybe<ContributionMinOrderByAggregateInput>;
  _sum?: InputMaybe<ContributionSumOrderByAggregateInput>;
  activity_type_id?: InputMaybe<SortOrder>;
  date_of_engagement?: InputMaybe<SortOrder>;
  date_of_submission?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  on_chain_id?: InputMaybe<SortOrder>;
  proof?: InputMaybe<SortOrder>;
  status_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ContributionOrderByWithRelationInput = {
  activity_type?: InputMaybe<ActivityTypeOrderByWithRelationInput>;
  activity_type_id?: InputMaybe<SortOrder>;
  attestations?: InputMaybe<AttestationOrderByRelationAggregateInput>;
  date_of_engagement?: InputMaybe<SortOrder>;
  date_of_submission?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  guilds?: InputMaybe<GuildContributionOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  linear_issue?: InputMaybe<LinearIssueOrderByWithRelationInput>;
  name?: InputMaybe<SortOrder>;
  on_chain_id?: InputMaybe<SortOrder>;
  partners?: InputMaybe<PartnerOrderByRelationAggregateInput>;
  proof?: InputMaybe<SortOrder>;
  status?: InputMaybe<ContributionStatusOrderByWithRelationInput>;
  status_id?: InputMaybe<SortOrder>;
  tweet?: InputMaybe<TwitterTweetOrderByWithRelationInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export type ContributionRelationFilter = {
  is?: InputMaybe<ContributionWhereInput>;
  isNot?: InputMaybe<ContributionWhereInput>;
};

export enum ContributionScalarFieldEnum {
  ActivityTypeId = 'activity_type_id',
  DateOfEngagement = 'date_of_engagement',
  DateOfSubmission = 'date_of_submission',
  Details = 'details',
  Id = 'id',
  Name = 'name',
  OnChainId = 'on_chain_id',
  Proof = 'proof',
  StatusId = 'status_id',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type ContributionScalarWhereInput = {
  AND?: InputMaybe<Array<ContributionScalarWhereInput>>;
  NOT?: InputMaybe<Array<ContributionScalarWhereInput>>;
  OR?: InputMaybe<Array<ContributionScalarWhereInput>>;
  activity_type_id?: InputMaybe<IntFilter>;
  date_of_engagement?: InputMaybe<DateTimeFilter>;
  date_of_submission?: InputMaybe<DateTimeFilter>;
  details?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  on_chain_id?: InputMaybe<IntNullableFilter>;
  proof?: InputMaybe<StringNullableFilter>;
  status_id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type ContributionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ContributionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ContributionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ContributionScalarWhereWithAggregatesInput>>;
  activity_type_id?: InputMaybe<IntWithAggregatesFilter>;
  date_of_engagement?: InputMaybe<DateTimeWithAggregatesFilter>;
  date_of_submission?: InputMaybe<DateTimeWithAggregatesFilter>;
  details?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  on_chain_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  proof?: InputMaybe<StringNullableWithAggregatesFilter>;
  status_id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type ContributionStatus = {
  _count?: Maybe<ContributionStatusCount>;
  contributions: Array<Contribution>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type ContributionStatusContributionsArgs = {
  cursor?: InputMaybe<ContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContributionWhereInput>;
};

export type ContributionStatusAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type ContributionStatusAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ContributionStatusCount = {
  contributions: Scalars['Int'];
};

export type ContributionStatusCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ContributionStatusCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ContributionStatusCreateInput = {
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutStatusInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ContributionStatusCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ContributionStatusCreateNestedOneWithoutContributionsInput = {
  connect?: InputMaybe<ContributionStatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionStatusCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<ContributionStatusCreateWithoutContributionsInput>;
};

export type ContributionStatusCreateOrConnectWithoutContributionsInput = {
  create: ContributionStatusCreateWithoutContributionsInput;
  where: ContributionStatusWhereUniqueInput;
};

export type ContributionStatusCreateWithoutContributionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ContributionStatusGroupBy = {
  _avg?: Maybe<ContributionStatusAvgAggregate>;
  _count?: Maybe<ContributionStatusCountAggregate>;
  _max?: Maybe<ContributionStatusMaxAggregate>;
  _min?: Maybe<ContributionStatusMinAggregate>;
  _sum?: Maybe<ContributionStatusSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ContributionStatusMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContributionStatusMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ContributionStatusMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContributionStatusMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ContributionStatusOrderByWithAggregationInput = {
  _avg?: InputMaybe<ContributionStatusAvgOrderByAggregateInput>;
  _count?: InputMaybe<ContributionStatusCountOrderByAggregateInput>;
  _max?: InputMaybe<ContributionStatusMaxOrderByAggregateInput>;
  _min?: InputMaybe<ContributionStatusMinOrderByAggregateInput>;
  _sum?: InputMaybe<ContributionStatusSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ContributionStatusOrderByWithRelationInput = {
  contributions?: InputMaybe<ContributionOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ContributionStatusRelationFilter = {
  is?: InputMaybe<ContributionStatusWhereInput>;
  isNot?: InputMaybe<ContributionStatusWhereInput>;
};

export enum ContributionStatusScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ContributionStatusScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ContributionStatusScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ContributionStatusScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ContributionStatusScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ContributionStatusSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type ContributionStatusSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ContributionStatusUpdateInput = {
  contributions?: InputMaybe<ContributionUpdateManyWithoutStatusInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContributionStatusUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContributionStatusUpdateOneRequiredWithoutContributionsInput = {
  connect?: InputMaybe<ContributionStatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionStatusCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<ContributionStatusCreateWithoutContributionsInput>;
  update?: InputMaybe<ContributionStatusUpdateWithoutContributionsInput>;
  upsert?: InputMaybe<ContributionStatusUpsertWithoutContributionsInput>;
};

export type ContributionStatusUpdateWithoutContributionsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContributionStatusUpsertWithoutContributionsInput = {
  create: ContributionStatusCreateWithoutContributionsInput;
  update: ContributionStatusUpdateWithoutContributionsInput;
};

export type ContributionStatusWhereInput = {
  AND?: InputMaybe<Array<ContributionStatusWhereInput>>;
  NOT?: InputMaybe<Array<ContributionStatusWhereInput>>;
  OR?: InputMaybe<Array<ContributionStatusWhereInput>>;
  contributions?: InputMaybe<ContributionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ContributionStatusWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ContributionSumAggregate = {
  activity_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  on_chain_id?: Maybe<Scalars['Int']>;
  status_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type ContributionSumOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  on_chain_id?: InputMaybe<SortOrder>;
  status_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ContributionUpdateInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsInput>;
  tweet?: InputMaybe<TwitterTweetUpdateOneWithoutContributionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsInput>;
};

export type ContributionUpdateManyMutationInput = {
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContributionUpdateManyWithWhereWithoutActivity_TypeInput = {
  data: ContributionUpdateManyMutationInput;
  where: ContributionScalarWhereInput;
};

export type ContributionUpdateManyWithWhereWithoutStatusInput = {
  data: ContributionUpdateManyMutationInput;
  where: ContributionScalarWhereInput;
};

export type ContributionUpdateManyWithWhereWithoutUserInput = {
  data: ContributionUpdateManyMutationInput;
  where: ContributionScalarWhereInput;
};

export type ContributionUpdateManyWithoutActivity_TypeInput = {
  connect?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ContributionCreateOrConnectWithoutActivity_TypeInput>>;
  create?: InputMaybe<Array<ContributionCreateWithoutActivity_TypeInput>>;
  createMany?: InputMaybe<ContributionCreateManyActivity_TypeInputEnvelope>;
  delete?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ContributionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  set?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  update?: InputMaybe<Array<ContributionUpdateWithWhereUniqueWithoutActivity_TypeInput>>;
  updateMany?: InputMaybe<Array<ContributionUpdateManyWithWhereWithoutActivity_TypeInput>>;
  upsert?: InputMaybe<Array<ContributionUpsertWithWhereUniqueWithoutActivity_TypeInput>>;
};

export type ContributionUpdateManyWithoutStatusInput = {
  connect?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ContributionCreateOrConnectWithoutStatusInput>>;
  create?: InputMaybe<Array<ContributionCreateWithoutStatusInput>>;
  createMany?: InputMaybe<ContributionCreateManyStatusInputEnvelope>;
  delete?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ContributionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  set?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  update?: InputMaybe<Array<ContributionUpdateWithWhereUniqueWithoutStatusInput>>;
  updateMany?: InputMaybe<Array<ContributionUpdateManyWithWhereWithoutStatusInput>>;
  upsert?: InputMaybe<Array<ContributionUpsertWithWhereUniqueWithoutStatusInput>>;
};

export type ContributionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ContributionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ContributionCreateWithoutUserInput>>;
  createMany?: InputMaybe<ContributionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ContributionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  set?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  update?: InputMaybe<Array<ContributionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ContributionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ContributionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ContributionUpdateOneRequiredWithoutAttestationsInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutAttestationsInput>;
  create?: InputMaybe<ContributionCreateWithoutAttestationsInput>;
  update?: InputMaybe<ContributionUpdateWithoutAttestationsInput>;
  upsert?: InputMaybe<ContributionUpsertWithoutAttestationsInput>;
};

export type ContributionUpdateOneRequiredWithoutGuildsInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutGuildsInput>;
  create?: InputMaybe<ContributionCreateWithoutGuildsInput>;
  update?: InputMaybe<ContributionUpdateWithoutGuildsInput>;
  upsert?: InputMaybe<ContributionUpsertWithoutGuildsInput>;
};

export type ContributionUpdateOneRequiredWithoutPartnersInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutPartnersInput>;
  create?: InputMaybe<ContributionCreateWithoutPartnersInput>;
  update?: InputMaybe<ContributionUpdateWithoutPartnersInput>;
  upsert?: InputMaybe<ContributionUpsertWithoutPartnersInput>;
};

export type ContributionUpdateOneWithoutLinear_IssueInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutLinear_IssueInput>;
  create?: InputMaybe<ContributionCreateWithoutLinear_IssueInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ContributionUpdateWithoutLinear_IssueInput>;
  upsert?: InputMaybe<ContributionUpsertWithoutLinear_IssueInput>;
};

export type ContributionUpdateOneWithoutTweetInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutTweetInput>;
  create?: InputMaybe<ContributionCreateWithoutTweetInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ContributionUpdateWithoutTweetInput>;
  upsert?: InputMaybe<ContributionUpsertWithoutTweetInput>;
};

export type ContributionUpdateWithWhereUniqueWithoutActivity_TypeInput = {
  data: ContributionUpdateWithoutActivity_TypeInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionUpdateWithWhereUniqueWithoutStatusInput = {
  data: ContributionUpdateWithoutStatusInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionUpdateWithWhereUniqueWithoutUserInput = {
  data: ContributionUpdateWithoutUserInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionUpdateWithoutActivity_TypeInput = {
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsInput>;
  tweet?: InputMaybe<TwitterTweetUpdateOneWithoutContributionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsInput>;
};

export type ContributionUpdateWithoutAttestationsInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsInput>;
  tweet?: InputMaybe<TwitterTweetUpdateOneWithoutContributionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsInput>;
};

export type ContributionUpdateWithoutGuildsInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsInput>;
  tweet?: InputMaybe<TwitterTweetUpdateOneWithoutContributionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsInput>;
};

export type ContributionUpdateWithoutLinear_IssueInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsInput>;
  tweet?: InputMaybe<TwitterTweetUpdateOneWithoutContributionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsInput>;
};

export type ContributionUpdateWithoutPartnersInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsInput>;
  tweet?: InputMaybe<TwitterTweetUpdateOneWithoutContributionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsInput>;
};

export type ContributionUpdateWithoutStatusInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tweet?: InputMaybe<TwitterTweetUpdateOneWithoutContributionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsInput>;
};

export type ContributionUpdateWithoutTweetInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsInput>;
};

export type ContributionUpdateWithoutUserInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsInput>;
  tweet?: InputMaybe<TwitterTweetUpdateOneWithoutContributionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContributionUpsertWithWhereUniqueWithoutActivity_TypeInput = {
  create: ContributionCreateWithoutActivity_TypeInput;
  update: ContributionUpdateWithoutActivity_TypeInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionUpsertWithWhereUniqueWithoutStatusInput = {
  create: ContributionCreateWithoutStatusInput;
  update: ContributionUpdateWithoutStatusInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionUpsertWithWhereUniqueWithoutUserInput = {
  create: ContributionCreateWithoutUserInput;
  update: ContributionUpdateWithoutUserInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionUpsertWithoutAttestationsInput = {
  create: ContributionCreateWithoutAttestationsInput;
  update: ContributionUpdateWithoutAttestationsInput;
};

export type ContributionUpsertWithoutGuildsInput = {
  create: ContributionCreateWithoutGuildsInput;
  update: ContributionUpdateWithoutGuildsInput;
};

export type ContributionUpsertWithoutLinear_IssueInput = {
  create: ContributionCreateWithoutLinear_IssueInput;
  update: ContributionUpdateWithoutLinear_IssueInput;
};

export type ContributionUpsertWithoutPartnersInput = {
  create: ContributionCreateWithoutPartnersInput;
  update: ContributionUpdateWithoutPartnersInput;
};

export type ContributionUpsertWithoutTweetInput = {
  create: ContributionCreateWithoutTweetInput;
  update: ContributionUpdateWithoutTweetInput;
};

export type ContributionWhereInput = {
  AND?: InputMaybe<Array<ContributionWhereInput>>;
  NOT?: InputMaybe<Array<ContributionWhereInput>>;
  OR?: InputMaybe<Array<ContributionWhereInput>>;
  activity_type?: InputMaybe<ActivityTypeRelationFilter>;
  activity_type_id?: InputMaybe<IntFilter>;
  attestations?: InputMaybe<AttestationListRelationFilter>;
  date_of_engagement?: InputMaybe<DateTimeFilter>;
  date_of_submission?: InputMaybe<DateTimeFilter>;
  details?: InputMaybe<StringNullableFilter>;
  guilds?: InputMaybe<GuildContributionListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  linear_issue?: InputMaybe<LinearIssueRelationFilter>;
  name?: InputMaybe<StringFilter>;
  on_chain_id?: InputMaybe<IntNullableFilter>;
  partners?: InputMaybe<PartnerListRelationFilter>;
  proof?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<ContributionStatusRelationFilter>;
  status_id?: InputMaybe<IntFilter>;
  tweet?: InputMaybe<TwitterTweetRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type ContributionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  on_chain_id?: InputMaybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DiscordUser = {
  createdAt: Scalars['DateTime'];
  discord_id: Scalars['String'];
  display_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  user_id: Scalars['Int'];
};

export type DiscordUserAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type DiscordUserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type DiscordUserCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  discord_id: Scalars['Int'];
  display_name: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type DiscordUserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  display_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type DiscordUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id: Scalars['String'];
  display_name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutDiscord_UsersInput;
};

export type DiscordUserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id: Scalars['String'];
  display_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type DiscordUserCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id: Scalars['String'];
  display_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DiscordUserCreateManyUserInputEnvelope = {
  data: Array<DiscordUserCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type DiscordUserCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<DiscordUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DiscordUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<DiscordUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<DiscordUserCreateManyUserInputEnvelope>;
};

export type DiscordUserCreateOrConnectWithoutUserInput = {
  create: DiscordUserCreateWithoutUserInput;
  where: DiscordUserWhereUniqueInput;
};

export type DiscordUserCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id: Scalars['String'];
  display_name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DiscordUserGroupBy = {
  _avg?: Maybe<DiscordUserAvgAggregate>;
  _count?: Maybe<DiscordUserCountAggregate>;
  _max?: Maybe<DiscordUserMaxAggregate>;
  _min?: Maybe<DiscordUserMinAggregate>;
  _sum?: Maybe<DiscordUserSumAggregate>;
  createdAt: Scalars['DateTime'];
  discord_id: Scalars['String'];
  display_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user_id: Scalars['Int'];
};

export type DiscordUserListRelationFilter = {
  every?: InputMaybe<DiscordUserWhereInput>;
  none?: InputMaybe<DiscordUserWhereInput>;
  some?: InputMaybe<DiscordUserWhereInput>;
};

export type DiscordUserMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  discord_id?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type DiscordUserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  display_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type DiscordUserMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  discord_id?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type DiscordUserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  display_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type DiscordUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type DiscordUserOrderByWithAggregationInput = {
  _avg?: InputMaybe<DiscordUserAvgOrderByAggregateInput>;
  _count?: InputMaybe<DiscordUserCountOrderByAggregateInput>;
  _max?: InputMaybe<DiscordUserMaxOrderByAggregateInput>;
  _min?: InputMaybe<DiscordUserMinOrderByAggregateInput>;
  _sum?: InputMaybe<DiscordUserSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  display_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type DiscordUserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  display_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum DiscordUserScalarFieldEnum {
  CreatedAt = 'createdAt',
  DiscordId = 'discord_id',
  DisplayName = 'display_name',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type DiscordUserScalarWhereInput = {
  AND?: InputMaybe<Array<DiscordUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<DiscordUserScalarWhereInput>>;
  OR?: InputMaybe<Array<DiscordUserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  discord_id?: InputMaybe<StringFilter>;
  display_name?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type DiscordUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DiscordUserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DiscordUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DiscordUserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  discord_id?: InputMaybe<StringWithAggregatesFilter>;
  display_name?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type DiscordUserSumAggregate = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type DiscordUserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type DiscordUserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutDiscord_UsersInput>;
};

export type DiscordUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DiscordUserUpdateManyWithWhereWithoutUserInput = {
  data: DiscordUserUpdateManyMutationInput;
  where: DiscordUserScalarWhereInput;
};

export type DiscordUserUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<DiscordUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DiscordUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<DiscordUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<DiscordUserCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<DiscordUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DiscordUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DiscordUserWhereUniqueInput>>;
  set?: InputMaybe<Array<DiscordUserWhereUniqueInput>>;
  update?: InputMaybe<Array<DiscordUserUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<DiscordUserUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<DiscordUserUpsertWithWhereUniqueWithoutUserInput>>;
};

export type DiscordUserUpdateWithWhereUniqueWithoutUserInput = {
  data: DiscordUserUpdateWithoutUserInput;
  where: DiscordUserWhereUniqueInput;
};

export type DiscordUserUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DiscordUserUpsertWithWhereUniqueWithoutUserInput = {
  create: DiscordUserCreateWithoutUserInput;
  update: DiscordUserUpdateWithoutUserInput;
  where: DiscordUserWhereUniqueInput;
};

export type DiscordUserWhereInput = {
  AND?: InputMaybe<Array<DiscordUserWhereInput>>;
  NOT?: InputMaybe<Array<DiscordUserWhereInput>>;
  OR?: InputMaybe<Array<DiscordUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  discord_id?: InputMaybe<StringFilter>;
  display_name?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type DiscordUserWhereUniqueInput = {
  discord_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Guild = {
  _count?: Maybe<GuildCount>;
  activity_type: Array<GuildActivityType>;
  congrats_channel?: Maybe<Scalars['Int']>;
  contributions: Array<GuildContribution>;
  createdAt: Scalars['DateTime'];
  discord_id?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  twitter_account?: Maybe<TwitterAccount>;
  updatedAt: Scalars['DateTime'];
  users: Array<GuildUser>;
};


export type GuildActivity_TypeArgs = {
  cursor?: InputMaybe<GuildActivityTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildActivityTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildActivityTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildActivityTypeWhereInput>;
};


export type GuildContributionsArgs = {
  cursor?: InputMaybe<GuildContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildContributionWhereInput>;
};


export type GuildUsersArgs = {
  cursor?: InputMaybe<GuildUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildUserWhereInput>;
};

export type GuildActivityType = {
  activity_type: ActivityType;
  activity_type_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  guild: Guild;
  guild_id: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type GuildActivityTypeAvgAggregate = {
  activity_type_id?: Maybe<Scalars['Float']>;
  guild_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type GuildActivityTypeAvgOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GuildActivityTypeCountAggregate = {
  _all: Scalars['Int'];
  activity_type_id: Scalars['Int'];
  createdAt: Scalars['Int'];
  guild_id: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GuildActivityTypeCountOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildActivityTypeCreateInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutGuildsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild: GuildCreateNestedOneWithoutActivity_TypeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildActivityTypeCreateManyActivity_TypeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild_id: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildActivityTypeCreateManyActivity_TypeInputEnvelope = {
  data: Array<GuildActivityTypeCreateManyActivity_TypeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuildActivityTypeCreateManyGuildInput = {
  activity_type_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildActivityTypeCreateManyGuildInputEnvelope = {
  data: Array<GuildActivityTypeCreateManyGuildInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuildActivityTypeCreateManyInput = {
  activity_type_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild_id: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildActivityTypeCreateNestedManyWithoutActivity_TypeInput = {
  connect?: InputMaybe<Array<GuildActivityTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildActivityTypeCreateOrConnectWithoutActivity_TypeInput>>;
  create?: InputMaybe<Array<GuildActivityTypeCreateWithoutActivity_TypeInput>>;
  createMany?: InputMaybe<GuildActivityTypeCreateManyActivity_TypeInputEnvelope>;
};

export type GuildActivityTypeCreateNestedManyWithoutGuildInput = {
  connect?: InputMaybe<Array<GuildActivityTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildActivityTypeCreateOrConnectWithoutGuildInput>>;
  create?: InputMaybe<Array<GuildActivityTypeCreateWithoutGuildInput>>;
  createMany?: InputMaybe<GuildActivityTypeCreateManyGuildInputEnvelope>;
};

export type GuildActivityTypeCreateOrConnectWithoutActivity_TypeInput = {
  create: GuildActivityTypeCreateWithoutActivity_TypeInput;
  where: GuildActivityTypeWhereUniqueInput;
};

export type GuildActivityTypeCreateOrConnectWithoutGuildInput = {
  create: GuildActivityTypeCreateWithoutGuildInput;
  where: GuildActivityTypeWhereUniqueInput;
};

export type GuildActivityTypeCreateWithoutActivity_TypeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild: GuildCreateNestedOneWithoutActivity_TypeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildActivityTypeCreateWithoutGuildInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutGuildsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildActivityTypeGroupBy = {
  _avg?: Maybe<GuildActivityTypeAvgAggregate>;
  _count?: Maybe<GuildActivityTypeCountAggregate>;
  _max?: Maybe<GuildActivityTypeMaxAggregate>;
  _min?: Maybe<GuildActivityTypeMinAggregate>;
  _sum?: Maybe<GuildActivityTypeSumAggregate>;
  activity_type_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  guild_id: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type GuildActivityTypeGuild_IdActivity_Type_IdCompoundUniqueInput = {
  activity_type_id: Scalars['Int'];
  guild_id: Scalars['Int'];
};

export type GuildActivityTypeListRelationFilter = {
  every?: InputMaybe<GuildActivityTypeWhereInput>;
  none?: InputMaybe<GuildActivityTypeWhereInput>;
  some?: InputMaybe<GuildActivityTypeWhereInput>;
};

export type GuildActivityTypeMaxAggregate = {
  activity_type_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuildActivityTypeMaxOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildActivityTypeMinAggregate = {
  activity_type_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuildActivityTypeMinOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildActivityTypeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GuildActivityTypeOrderByWithAggregationInput = {
  _avg?: InputMaybe<GuildActivityTypeAvgOrderByAggregateInput>;
  _count?: InputMaybe<GuildActivityTypeCountOrderByAggregateInput>;
  _max?: InputMaybe<GuildActivityTypeMaxOrderByAggregateInput>;
  _min?: InputMaybe<GuildActivityTypeMinOrderByAggregateInput>;
  _sum?: InputMaybe<GuildActivityTypeSumOrderByAggregateInput>;
  activity_type_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildActivityTypeOrderByWithRelationInput = {
  activity_type?: InputMaybe<ActivityTypeOrderByWithRelationInput>;
  activity_type_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild?: InputMaybe<GuildOrderByWithRelationInput>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum GuildActivityTypeScalarFieldEnum {
  ActivityTypeId = 'activity_type_id',
  CreatedAt = 'createdAt',
  GuildId = 'guild_id',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type GuildActivityTypeScalarWhereInput = {
  AND?: InputMaybe<Array<GuildActivityTypeScalarWhereInput>>;
  NOT?: InputMaybe<Array<GuildActivityTypeScalarWhereInput>>;
  OR?: InputMaybe<Array<GuildActivityTypeScalarWhereInput>>;
  activity_type_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guild_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GuildActivityTypeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GuildActivityTypeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GuildActivityTypeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GuildActivityTypeScalarWhereWithAggregatesInput>>;
  activity_type_id?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  guild_id?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type GuildActivityTypeSumAggregate = {
  activity_type_id?: Maybe<Scalars['Int']>;
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type GuildActivityTypeSumOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GuildActivityTypeUpdateInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutGuildsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutActivity_TypeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildActivityTypeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildActivityTypeUpdateManyWithWhereWithoutActivity_TypeInput = {
  data: GuildActivityTypeUpdateManyMutationInput;
  where: GuildActivityTypeScalarWhereInput;
};

export type GuildActivityTypeUpdateManyWithWhereWithoutGuildInput = {
  data: GuildActivityTypeUpdateManyMutationInput;
  where: GuildActivityTypeScalarWhereInput;
};

export type GuildActivityTypeUpdateManyWithoutActivity_TypeInput = {
  connect?: InputMaybe<Array<GuildActivityTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildActivityTypeCreateOrConnectWithoutActivity_TypeInput>>;
  create?: InputMaybe<Array<GuildActivityTypeCreateWithoutActivity_TypeInput>>;
  createMany?: InputMaybe<GuildActivityTypeCreateManyActivity_TypeInputEnvelope>;
  delete?: InputMaybe<Array<GuildActivityTypeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuildActivityTypeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuildActivityTypeWhereUniqueInput>>;
  set?: InputMaybe<Array<GuildActivityTypeWhereUniqueInput>>;
  update?: InputMaybe<Array<GuildActivityTypeUpdateWithWhereUniqueWithoutActivity_TypeInput>>;
  updateMany?: InputMaybe<Array<GuildActivityTypeUpdateManyWithWhereWithoutActivity_TypeInput>>;
  upsert?: InputMaybe<Array<GuildActivityTypeUpsertWithWhereUniqueWithoutActivity_TypeInput>>;
};

export type GuildActivityTypeUpdateManyWithoutGuildInput = {
  connect?: InputMaybe<Array<GuildActivityTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildActivityTypeCreateOrConnectWithoutGuildInput>>;
  create?: InputMaybe<Array<GuildActivityTypeCreateWithoutGuildInput>>;
  createMany?: InputMaybe<GuildActivityTypeCreateManyGuildInputEnvelope>;
  delete?: InputMaybe<Array<GuildActivityTypeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuildActivityTypeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuildActivityTypeWhereUniqueInput>>;
  set?: InputMaybe<Array<GuildActivityTypeWhereUniqueInput>>;
  update?: InputMaybe<Array<GuildActivityTypeUpdateWithWhereUniqueWithoutGuildInput>>;
  updateMany?: InputMaybe<Array<GuildActivityTypeUpdateManyWithWhereWithoutGuildInput>>;
  upsert?: InputMaybe<Array<GuildActivityTypeUpsertWithWhereUniqueWithoutGuildInput>>;
};

export type GuildActivityTypeUpdateWithWhereUniqueWithoutActivity_TypeInput = {
  data: GuildActivityTypeUpdateWithoutActivity_TypeInput;
  where: GuildActivityTypeWhereUniqueInput;
};

export type GuildActivityTypeUpdateWithWhereUniqueWithoutGuildInput = {
  data: GuildActivityTypeUpdateWithoutGuildInput;
  where: GuildActivityTypeWhereUniqueInput;
};

export type GuildActivityTypeUpdateWithoutActivity_TypeInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutActivity_TypeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildActivityTypeUpdateWithoutGuildInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutGuildsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildActivityTypeUpsertWithWhereUniqueWithoutActivity_TypeInput = {
  create: GuildActivityTypeCreateWithoutActivity_TypeInput;
  update: GuildActivityTypeUpdateWithoutActivity_TypeInput;
  where: GuildActivityTypeWhereUniqueInput;
};

export type GuildActivityTypeUpsertWithWhereUniqueWithoutGuildInput = {
  create: GuildActivityTypeCreateWithoutGuildInput;
  update: GuildActivityTypeUpdateWithoutGuildInput;
  where: GuildActivityTypeWhereUniqueInput;
};

export type GuildActivityTypeWhereInput = {
  AND?: InputMaybe<Array<GuildActivityTypeWhereInput>>;
  NOT?: InputMaybe<Array<GuildActivityTypeWhereInput>>;
  OR?: InputMaybe<Array<GuildActivityTypeWhereInput>>;
  activity_type?: InputMaybe<ActivityTypeRelationFilter>;
  activity_type_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guild?: InputMaybe<GuildRelationFilter>;
  guild_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GuildActivityTypeWhereUniqueInput = {
  guild_id_activity_type_id?: InputMaybe<GuildActivityTypeGuild_IdActivity_Type_IdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']>;
};

export type GuildAvgAggregate = {
  congrats_channel?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type GuildAvgOrderByAggregateInput = {
  congrats_channel?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GuildContribution = {
  contribution: Contribution;
  contribution_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  guild: Guild;
  guild_id: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type GuildContributionAvgAggregate = {
  contribution_id?: Maybe<Scalars['Float']>;
  guild_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type GuildContributionAvgOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GuildContributionCountAggregate = {
  _all: Scalars['Int'];
  contribution_id: Scalars['Int'];
  createdAt: Scalars['Int'];
  guild_id: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GuildContributionCountOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildContributionCreateInput = {
  contribution: ContributionCreateNestedOneWithoutGuildsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild: GuildCreateNestedOneWithoutContributionsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildContributionCreateManyContributionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild_id: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildContributionCreateManyContributionInputEnvelope = {
  data: Array<GuildContributionCreateManyContributionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuildContributionCreateManyGuildInput = {
  contribution_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildContributionCreateManyGuildInputEnvelope = {
  data: Array<GuildContributionCreateManyGuildInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuildContributionCreateManyInput = {
  contribution_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild_id: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildContributionCreateNestedManyWithoutContributionInput = {
  connect?: InputMaybe<Array<GuildContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildContributionCreateOrConnectWithoutContributionInput>>;
  create?: InputMaybe<Array<GuildContributionCreateWithoutContributionInput>>;
  createMany?: InputMaybe<GuildContributionCreateManyContributionInputEnvelope>;
};

export type GuildContributionCreateNestedManyWithoutGuildInput = {
  connect?: InputMaybe<Array<GuildContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildContributionCreateOrConnectWithoutGuildInput>>;
  create?: InputMaybe<Array<GuildContributionCreateWithoutGuildInput>>;
  createMany?: InputMaybe<GuildContributionCreateManyGuildInputEnvelope>;
};

export type GuildContributionCreateOrConnectWithoutContributionInput = {
  create: GuildContributionCreateWithoutContributionInput;
  where: GuildContributionWhereUniqueInput;
};

export type GuildContributionCreateOrConnectWithoutGuildInput = {
  create: GuildContributionCreateWithoutGuildInput;
  where: GuildContributionWhereUniqueInput;
};

export type GuildContributionCreateWithoutContributionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild: GuildCreateNestedOneWithoutContributionsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildContributionCreateWithoutGuildInput = {
  contribution: ContributionCreateNestedOneWithoutGuildsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildContributionGroupBy = {
  _avg?: Maybe<GuildContributionAvgAggregate>;
  _count?: Maybe<GuildContributionCountAggregate>;
  _max?: Maybe<GuildContributionMaxAggregate>;
  _min?: Maybe<GuildContributionMinAggregate>;
  _sum?: Maybe<GuildContributionSumAggregate>;
  contribution_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  guild_id: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type GuildContributionGuild_IdContribution_IdCompoundUniqueInput = {
  contribution_id: Scalars['Int'];
  guild_id: Scalars['Int'];
};

export type GuildContributionListRelationFilter = {
  every?: InputMaybe<GuildContributionWhereInput>;
  none?: InputMaybe<GuildContributionWhereInput>;
  some?: InputMaybe<GuildContributionWhereInput>;
};

export type GuildContributionMaxAggregate = {
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuildContributionMaxOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildContributionMinAggregate = {
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuildContributionMinOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildContributionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GuildContributionOrderByWithAggregationInput = {
  _avg?: InputMaybe<GuildContributionAvgOrderByAggregateInput>;
  _count?: InputMaybe<GuildContributionCountOrderByAggregateInput>;
  _max?: InputMaybe<GuildContributionMaxOrderByAggregateInput>;
  _min?: InputMaybe<GuildContributionMinOrderByAggregateInput>;
  _sum?: InputMaybe<GuildContributionSumOrderByAggregateInput>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildContributionOrderByWithRelationInput = {
  contribution?: InputMaybe<ContributionOrderByWithRelationInput>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild?: InputMaybe<GuildOrderByWithRelationInput>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum GuildContributionScalarFieldEnum {
  ContributionId = 'contribution_id',
  CreatedAt = 'createdAt',
  GuildId = 'guild_id',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type GuildContributionScalarWhereInput = {
  AND?: InputMaybe<Array<GuildContributionScalarWhereInput>>;
  NOT?: InputMaybe<Array<GuildContributionScalarWhereInput>>;
  OR?: InputMaybe<Array<GuildContributionScalarWhereInput>>;
  contribution_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guild_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GuildContributionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GuildContributionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GuildContributionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GuildContributionScalarWhereWithAggregatesInput>>;
  contribution_id?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  guild_id?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type GuildContributionSumAggregate = {
  contribution_id?: Maybe<Scalars['Int']>;
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type GuildContributionSumOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GuildContributionUpdateInput = {
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutGuildsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutContributionsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildContributionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildContributionUpdateManyWithWhereWithoutContributionInput = {
  data: GuildContributionUpdateManyMutationInput;
  where: GuildContributionScalarWhereInput;
};

export type GuildContributionUpdateManyWithWhereWithoutGuildInput = {
  data: GuildContributionUpdateManyMutationInput;
  where: GuildContributionScalarWhereInput;
};

export type GuildContributionUpdateManyWithoutContributionInput = {
  connect?: InputMaybe<Array<GuildContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildContributionCreateOrConnectWithoutContributionInput>>;
  create?: InputMaybe<Array<GuildContributionCreateWithoutContributionInput>>;
  createMany?: InputMaybe<GuildContributionCreateManyContributionInputEnvelope>;
  delete?: InputMaybe<Array<GuildContributionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuildContributionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuildContributionWhereUniqueInput>>;
  set?: InputMaybe<Array<GuildContributionWhereUniqueInput>>;
  update?: InputMaybe<Array<GuildContributionUpdateWithWhereUniqueWithoutContributionInput>>;
  updateMany?: InputMaybe<Array<GuildContributionUpdateManyWithWhereWithoutContributionInput>>;
  upsert?: InputMaybe<Array<GuildContributionUpsertWithWhereUniqueWithoutContributionInput>>;
};

export type GuildContributionUpdateManyWithoutGuildInput = {
  connect?: InputMaybe<Array<GuildContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildContributionCreateOrConnectWithoutGuildInput>>;
  create?: InputMaybe<Array<GuildContributionCreateWithoutGuildInput>>;
  createMany?: InputMaybe<GuildContributionCreateManyGuildInputEnvelope>;
  delete?: InputMaybe<Array<GuildContributionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuildContributionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuildContributionWhereUniqueInput>>;
  set?: InputMaybe<Array<GuildContributionWhereUniqueInput>>;
  update?: InputMaybe<Array<GuildContributionUpdateWithWhereUniqueWithoutGuildInput>>;
  updateMany?: InputMaybe<Array<GuildContributionUpdateManyWithWhereWithoutGuildInput>>;
  upsert?: InputMaybe<Array<GuildContributionUpsertWithWhereUniqueWithoutGuildInput>>;
};

export type GuildContributionUpdateWithWhereUniqueWithoutContributionInput = {
  data: GuildContributionUpdateWithoutContributionInput;
  where: GuildContributionWhereUniqueInput;
};

export type GuildContributionUpdateWithWhereUniqueWithoutGuildInput = {
  data: GuildContributionUpdateWithoutGuildInput;
  where: GuildContributionWhereUniqueInput;
};

export type GuildContributionUpdateWithoutContributionInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutContributionsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildContributionUpdateWithoutGuildInput = {
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutGuildsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildContributionUpsertWithWhereUniqueWithoutContributionInput = {
  create: GuildContributionCreateWithoutContributionInput;
  update: GuildContributionUpdateWithoutContributionInput;
  where: GuildContributionWhereUniqueInput;
};

export type GuildContributionUpsertWithWhereUniqueWithoutGuildInput = {
  create: GuildContributionCreateWithoutGuildInput;
  update: GuildContributionUpdateWithoutGuildInput;
  where: GuildContributionWhereUniqueInput;
};

export type GuildContributionWhereInput = {
  AND?: InputMaybe<Array<GuildContributionWhereInput>>;
  NOT?: InputMaybe<Array<GuildContributionWhereInput>>;
  OR?: InputMaybe<Array<GuildContributionWhereInput>>;
  contribution?: InputMaybe<ContributionRelationFilter>;
  contribution_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guild?: InputMaybe<GuildRelationFilter>;
  guild_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GuildContributionWhereUniqueInput = {
  guild_id_contribution_id?: InputMaybe<GuildContributionGuild_IdContribution_IdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']>;
};

export type GuildCount = {
  activity_type: Scalars['Int'];
  contributions: Scalars['Int'];
  users: Scalars['Int'];
};

export type GuildCountAggregate = {
  _all: Scalars['Int'];
  congrats_channel: Scalars['Int'];
  createdAt: Scalars['Int'];
  discord_id: Scalars['Int'];
  id: Scalars['Int'];
  logo: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GuildCountOrderByAggregateInput = {
  congrats_channel?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildCreateInput = {
  activity_type?: InputMaybe<GuildActivityTypeCreateNestedManyWithoutGuildInput>;
  congrats_channel?: InputMaybe<Scalars['Int']>;
  contributions?: InputMaybe<GuildContributionCreateNestedManyWithoutGuildInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  twitter_account?: InputMaybe<TwitterAccountCreateNestedOneWithoutGuildInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<GuildUserCreateNestedManyWithoutGuildInput>;
};

export type GuildCreateManyInput = {
  congrats_channel?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildCreateNestedOneWithoutActivity_TypeInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutActivity_TypeInput>;
  create?: InputMaybe<GuildCreateWithoutActivity_TypeInput>;
};

export type GuildCreateNestedOneWithoutContributionsInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<GuildCreateWithoutContributionsInput>;
};

export type GuildCreateNestedOneWithoutTwitter_AccountInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutTwitter_AccountInput>;
  create?: InputMaybe<GuildCreateWithoutTwitter_AccountInput>;
};

export type GuildCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<GuildCreateWithoutUsersInput>;
};

export type GuildCreateOrConnectWithoutActivity_TypeInput = {
  create: GuildCreateWithoutActivity_TypeInput;
  where: GuildWhereUniqueInput;
};

export type GuildCreateOrConnectWithoutContributionsInput = {
  create: GuildCreateWithoutContributionsInput;
  where: GuildWhereUniqueInput;
};

export type GuildCreateOrConnectWithoutTwitter_AccountInput = {
  create: GuildCreateWithoutTwitter_AccountInput;
  where: GuildWhereUniqueInput;
};

export type GuildCreateOrConnectWithoutUsersInput = {
  create: GuildCreateWithoutUsersInput;
  where: GuildWhereUniqueInput;
};

export type GuildCreateWithoutActivity_TypeInput = {
  congrats_channel?: InputMaybe<Scalars['Int']>;
  contributions?: InputMaybe<GuildContributionCreateNestedManyWithoutGuildInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  twitter_account?: InputMaybe<TwitterAccountCreateNestedOneWithoutGuildInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<GuildUserCreateNestedManyWithoutGuildInput>;
};

export type GuildCreateWithoutContributionsInput = {
  activity_type?: InputMaybe<GuildActivityTypeCreateNestedManyWithoutGuildInput>;
  congrats_channel?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  twitter_account?: InputMaybe<TwitterAccountCreateNestedOneWithoutGuildInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<GuildUserCreateNestedManyWithoutGuildInput>;
};

export type GuildCreateWithoutTwitter_AccountInput = {
  activity_type?: InputMaybe<GuildActivityTypeCreateNestedManyWithoutGuildInput>;
  congrats_channel?: InputMaybe<Scalars['Int']>;
  contributions?: InputMaybe<GuildContributionCreateNestedManyWithoutGuildInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<GuildUserCreateNestedManyWithoutGuildInput>;
};

export type GuildCreateWithoutUsersInput = {
  activity_type?: InputMaybe<GuildActivityTypeCreateNestedManyWithoutGuildInput>;
  congrats_channel?: InputMaybe<Scalars['Int']>;
  contributions?: InputMaybe<GuildContributionCreateNestedManyWithoutGuildInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  twitter_account?: InputMaybe<TwitterAccountCreateNestedOneWithoutGuildInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildGroupBy = {
  _avg?: Maybe<GuildAvgAggregate>;
  _count?: Maybe<GuildCountAggregate>;
  _max?: Maybe<GuildMaxAggregate>;
  _min?: Maybe<GuildMinAggregate>;
  _sum?: Maybe<GuildSumAggregate>;
  congrats_channel?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  discord_id?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type GuildMaxAggregate = {
  congrats_channel?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discord_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuildMaxOrderByAggregateInput = {
  congrats_channel?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildMinAggregate = {
  congrats_channel?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discord_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuildMinOrderByAggregateInput = {
  congrats_channel?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildOrderByWithAggregationInput = {
  _avg?: InputMaybe<GuildAvgOrderByAggregateInput>;
  _count?: InputMaybe<GuildCountOrderByAggregateInput>;
  _max?: InputMaybe<GuildMaxOrderByAggregateInput>;
  _min?: InputMaybe<GuildMinOrderByAggregateInput>;
  _sum?: InputMaybe<GuildSumOrderByAggregateInput>;
  congrats_channel?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildOrderByWithRelationInput = {
  activity_type?: InputMaybe<GuildActivityTypeOrderByRelationAggregateInput>;
  congrats_channel?: InputMaybe<SortOrder>;
  contributions?: InputMaybe<GuildContributionOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  twitter_account?: InputMaybe<TwitterAccountOrderByWithRelationInput>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<GuildUserOrderByRelationAggregateInput>;
};

export type GuildRelationFilter = {
  is?: InputMaybe<GuildWhereInput>;
  isNot?: InputMaybe<GuildWhereInput>;
};

export enum GuildScalarFieldEnum {
  CongratsChannel = 'congrats_channel',
  CreatedAt = 'createdAt',
  DiscordId = 'discord_id',
  Id = 'id',
  Logo = 'logo',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type GuildScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GuildScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GuildScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GuildScalarWhereWithAggregatesInput>>;
  congrats_channel?: InputMaybe<IntNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  discord_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  logo?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type GuildSumAggregate = {
  congrats_channel?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type GuildSumOrderByAggregateInput = {
  congrats_channel?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GuildUpdateInput = {
  activity_type?: InputMaybe<GuildActivityTypeUpdateManyWithoutGuildInput>;
  congrats_channel?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  contributions?: InputMaybe<GuildContributionUpdateManyWithoutGuildInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_account?: InputMaybe<TwitterAccountUpdateOneWithoutGuildInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<GuildUserUpdateManyWithoutGuildInput>;
};

export type GuildUpdateManyMutationInput = {
  congrats_channel?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildUpdateOneRequiredWithoutActivity_TypeInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutActivity_TypeInput>;
  create?: InputMaybe<GuildCreateWithoutActivity_TypeInput>;
  update?: InputMaybe<GuildUpdateWithoutActivity_TypeInput>;
  upsert?: InputMaybe<GuildUpsertWithoutActivity_TypeInput>;
};

export type GuildUpdateOneRequiredWithoutContributionsInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<GuildCreateWithoutContributionsInput>;
  update?: InputMaybe<GuildUpdateWithoutContributionsInput>;
  upsert?: InputMaybe<GuildUpsertWithoutContributionsInput>;
};

export type GuildUpdateOneRequiredWithoutUsersInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<GuildCreateWithoutUsersInput>;
  update?: InputMaybe<GuildUpdateWithoutUsersInput>;
  upsert?: InputMaybe<GuildUpsertWithoutUsersInput>;
};

export type GuildUpdateOneWithoutTwitter_AccountInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutTwitter_AccountInput>;
  create?: InputMaybe<GuildCreateWithoutTwitter_AccountInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<GuildUpdateWithoutTwitter_AccountInput>;
  upsert?: InputMaybe<GuildUpsertWithoutTwitter_AccountInput>;
};

export type GuildUpdateWithoutActivity_TypeInput = {
  congrats_channel?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  contributions?: InputMaybe<GuildContributionUpdateManyWithoutGuildInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_account?: InputMaybe<TwitterAccountUpdateOneWithoutGuildInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<GuildUserUpdateManyWithoutGuildInput>;
};

export type GuildUpdateWithoutContributionsInput = {
  activity_type?: InputMaybe<GuildActivityTypeUpdateManyWithoutGuildInput>;
  congrats_channel?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_account?: InputMaybe<TwitterAccountUpdateOneWithoutGuildInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<GuildUserUpdateManyWithoutGuildInput>;
};

export type GuildUpdateWithoutTwitter_AccountInput = {
  activity_type?: InputMaybe<GuildActivityTypeUpdateManyWithoutGuildInput>;
  congrats_channel?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  contributions?: InputMaybe<GuildContributionUpdateManyWithoutGuildInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<GuildUserUpdateManyWithoutGuildInput>;
};

export type GuildUpdateWithoutUsersInput = {
  activity_type?: InputMaybe<GuildActivityTypeUpdateManyWithoutGuildInput>;
  congrats_channel?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  contributions?: InputMaybe<GuildContributionUpdateManyWithoutGuildInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_account?: InputMaybe<TwitterAccountUpdateOneWithoutGuildInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildUpsertWithoutActivity_TypeInput = {
  create: GuildCreateWithoutActivity_TypeInput;
  update: GuildUpdateWithoutActivity_TypeInput;
};

export type GuildUpsertWithoutContributionsInput = {
  create: GuildCreateWithoutContributionsInput;
  update: GuildUpdateWithoutContributionsInput;
};

export type GuildUpsertWithoutTwitter_AccountInput = {
  create: GuildCreateWithoutTwitter_AccountInput;
  update: GuildUpdateWithoutTwitter_AccountInput;
};

export type GuildUpsertWithoutUsersInput = {
  create: GuildCreateWithoutUsersInput;
  update: GuildUpdateWithoutUsersInput;
};

export type GuildUser = {
  createdAt: Scalars['DateTime'];
  guild: Guild;
  guild_id: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  user_id: Scalars['Int'];
};

export type GuildUserAvgAggregate = {
  guild_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type GuildUserAvgOrderByAggregateInput = {
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type GuildUserCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  guild_id: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type GuildUserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type GuildUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild: GuildCreateNestedOneWithoutUsersInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutGuild_UsersInput;
};

export type GuildUserCreateManyGuildInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type GuildUserCreateManyGuildInputEnvelope = {
  data: Array<GuildUserCreateManyGuildInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuildUserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild_id: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type GuildUserCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild_id: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildUserCreateManyUserInputEnvelope = {
  data: Array<GuildUserCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuildUserCreateNestedManyWithoutGuildInput = {
  connect?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildUserCreateOrConnectWithoutGuildInput>>;
  create?: InputMaybe<Array<GuildUserCreateWithoutGuildInput>>;
  createMany?: InputMaybe<GuildUserCreateManyGuildInputEnvelope>;
};

export type GuildUserCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<GuildUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<GuildUserCreateManyUserInputEnvelope>;
};

export type GuildUserCreateOrConnectWithoutGuildInput = {
  create: GuildUserCreateWithoutGuildInput;
  where: GuildUserWhereUniqueInput;
};

export type GuildUserCreateOrConnectWithoutUserInput = {
  create: GuildUserCreateWithoutUserInput;
  where: GuildUserWhereUniqueInput;
};

export type GuildUserCreateWithoutGuildInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutGuild_UsersInput;
};

export type GuildUserCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild: GuildCreateNestedOneWithoutUsersInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildUserGroupBy = {
  _avg?: Maybe<GuildUserAvgAggregate>;
  _count?: Maybe<GuildUserCountAggregate>;
  _max?: Maybe<GuildUserMaxAggregate>;
  _min?: Maybe<GuildUserMinAggregate>;
  _sum?: Maybe<GuildUserSumAggregate>;
  createdAt: Scalars['DateTime'];
  guild_id: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user_id: Scalars['Int'];
};

export type GuildUserListRelationFilter = {
  every?: InputMaybe<GuildUserWhereInput>;
  none?: InputMaybe<GuildUserWhereInput>;
  some?: InputMaybe<GuildUserWhereInput>;
};

export type GuildUserMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type GuildUserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type GuildUserMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type GuildUserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type GuildUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GuildUserOrderByWithAggregationInput = {
  _avg?: InputMaybe<GuildUserAvgOrderByAggregateInput>;
  _count?: InputMaybe<GuildUserCountOrderByAggregateInput>;
  _max?: InputMaybe<GuildUserMaxOrderByAggregateInput>;
  _min?: InputMaybe<GuildUserMinOrderByAggregateInput>;
  _sum?: InputMaybe<GuildUserSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type GuildUserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  guild?: InputMaybe<GuildOrderByWithRelationInput>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum GuildUserScalarFieldEnum {
  CreatedAt = 'createdAt',
  GuildId = 'guild_id',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type GuildUserScalarWhereInput = {
  AND?: InputMaybe<Array<GuildUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<GuildUserScalarWhereInput>>;
  OR?: InputMaybe<Array<GuildUserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guild_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type GuildUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GuildUserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GuildUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GuildUserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  guild_id?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type GuildUserSumAggregate = {
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type GuildUserSumOrderByAggregateInput = {
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type GuildUserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutGuild_UsersInput>;
};

export type GuildUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildUserUpdateManyWithWhereWithoutGuildInput = {
  data: GuildUserUpdateManyMutationInput;
  where: GuildUserScalarWhereInput;
};

export type GuildUserUpdateManyWithWhereWithoutUserInput = {
  data: GuildUserUpdateManyMutationInput;
  where: GuildUserScalarWhereInput;
};

export type GuildUserUpdateManyWithoutGuildInput = {
  connect?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildUserCreateOrConnectWithoutGuildInput>>;
  create?: InputMaybe<Array<GuildUserCreateWithoutGuildInput>>;
  createMany?: InputMaybe<GuildUserCreateManyGuildInputEnvelope>;
  delete?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuildUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  set?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  update?: InputMaybe<Array<GuildUserUpdateWithWhereUniqueWithoutGuildInput>>;
  updateMany?: InputMaybe<Array<GuildUserUpdateManyWithWhereWithoutGuildInput>>;
  upsert?: InputMaybe<Array<GuildUserUpsertWithWhereUniqueWithoutGuildInput>>;
};

export type GuildUserUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<GuildUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<GuildUserCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuildUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  set?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  update?: InputMaybe<Array<GuildUserUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<GuildUserUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<GuildUserUpsertWithWhereUniqueWithoutUserInput>>;
};

export type GuildUserUpdateWithWhereUniqueWithoutGuildInput = {
  data: GuildUserUpdateWithoutGuildInput;
  where: GuildUserWhereUniqueInput;
};

export type GuildUserUpdateWithWhereUniqueWithoutUserInput = {
  data: GuildUserUpdateWithoutUserInput;
  where: GuildUserWhereUniqueInput;
};

export type GuildUserUpdateWithoutGuildInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutGuild_UsersInput>;
};

export type GuildUserUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildUserUpsertWithWhereUniqueWithoutGuildInput = {
  create: GuildUserCreateWithoutGuildInput;
  update: GuildUserUpdateWithoutGuildInput;
  where: GuildUserWhereUniqueInput;
};

export type GuildUserUpsertWithWhereUniqueWithoutUserInput = {
  create: GuildUserCreateWithoutUserInput;
  update: GuildUserUpdateWithoutUserInput;
  where: GuildUserWhereUniqueInput;
};

export type GuildUserUser_IdGuild_IdCompoundUniqueInput = {
  guild_id: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type GuildUserWhereInput = {
  AND?: InputMaybe<Array<GuildUserWhereInput>>;
  NOT?: InputMaybe<Array<GuildUserWhereInput>>;
  OR?: InputMaybe<Array<GuildUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guild?: InputMaybe<GuildRelationFilter>;
  guild_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type GuildUserWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  user_id_guild_id?: InputMaybe<GuildUserUser_IdGuild_IdCompoundUniqueInput>;
};

export type GuildWhereInput = {
  AND?: InputMaybe<Array<GuildWhereInput>>;
  NOT?: InputMaybe<Array<GuildWhereInput>>;
  OR?: InputMaybe<Array<GuildWhereInput>>;
  activity_type?: InputMaybe<GuildActivityTypeListRelationFilter>;
  congrats_channel?: InputMaybe<IntNullableFilter>;
  contributions?: InputMaybe<GuildContributionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  discord_id?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  logo?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  twitter_account?: InputMaybe<TwitterAccountRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<GuildUserListRelationFilter>;
};

export type GuildWhereUniqueInput = {
  discord_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type JobRun = {
  completedDate: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  startDate: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type JobRunAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type JobRunAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type JobRunCountAggregate = {
  _all: Scalars['Int'];
  completedDate: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  startDate: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type JobRunCountOrderByAggregateInput = {
  completedDate?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type JobRunCreateInput = {
  completedDate: Scalars['DateTime'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  startDate: Scalars['DateTime'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type JobRunCreateManyInput = {
  completedDate: Scalars['DateTime'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  startDate: Scalars['DateTime'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type JobRunGroupBy = {
  _avg?: Maybe<JobRunAvgAggregate>;
  _count?: Maybe<JobRunCountAggregate>;
  _max?: Maybe<JobRunMaxAggregate>;
  _min?: Maybe<JobRunMinAggregate>;
  _sum?: Maybe<JobRunSumAggregate>;
  completedDate: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  startDate: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type JobRunMaxAggregate = {
  completedDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobRunMaxOrderByAggregateInput = {
  completedDate?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type JobRunMinAggregate = {
  completedDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobRunMinOrderByAggregateInput = {
  completedDate?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type JobRunOrderByWithAggregationInput = {
  _avg?: InputMaybe<JobRunAvgOrderByAggregateInput>;
  _count?: InputMaybe<JobRunCountOrderByAggregateInput>;
  _max?: InputMaybe<JobRunMaxOrderByAggregateInput>;
  _min?: InputMaybe<JobRunMinOrderByAggregateInput>;
  _sum?: InputMaybe<JobRunSumOrderByAggregateInput>;
  completedDate?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type JobRunOrderByWithRelationInput = {
  completedDate?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum JobRunScalarFieldEnum {
  CompletedDate = 'completedDate',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  StartDate = 'startDate',
  UpdatedAt = 'updatedAt'
}

export type JobRunScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<JobRunScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<JobRunScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<JobRunScalarWhereWithAggregatesInput>>;
  completedDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  startDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type JobRunSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type JobRunSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type JobRunUpdateInput = {
  completedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type JobRunUpdateManyMutationInput = {
  completedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type JobRunWhereInput = {
  AND?: InputMaybe<Array<JobRunWhereInput>>;
  NOT?: InputMaybe<Array<JobRunWhereInput>>;
  OR?: InputMaybe<Array<JobRunWhereInput>>;
  completedDate?: InputMaybe<DateTimeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type JobRunWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type LinearCycle = {
  _count?: Maybe<LinearCycleCount>;
  endsAt: Scalars['DateTime'];
  id: Scalars['Int'];
  issues: Array<LinearIssue>;
  linear_id: Scalars['String'];
  number: Scalars['Int'];
  startsAt: Scalars['DateTime'];
};


export type LinearCycleIssuesArgs = {
  cursor?: InputMaybe<LinearIssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearIssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearIssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearIssueWhereInput>;
};

export type LinearCycleAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

export type LinearCycleAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
};

export type LinearCycleCount = {
  issues: Scalars['Int'];
};

export type LinearCycleCountAggregate = {
  _all: Scalars['Int'];
  endsAt: Scalars['Int'];
  id: Scalars['Int'];
  linear_id: Scalars['Int'];
  number: Scalars['Int'];
  startsAt: Scalars['Int'];
};

export type LinearCycleCountOrderByAggregateInput = {
  endsAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  startsAt?: InputMaybe<SortOrder>;
};

export type LinearCycleCreateInput = {
  endsAt: Scalars['DateTime'];
  issues?: InputMaybe<LinearIssueCreateNestedManyWithoutCycleInput>;
  linear_id: Scalars['String'];
  number: Scalars['Int'];
  startsAt: Scalars['DateTime'];
};

export type LinearCycleCreateManyInput = {
  endsAt: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Int']>;
  linear_id: Scalars['String'];
  number: Scalars['Int'];
  startsAt: Scalars['DateTime'];
};

export type LinearCycleCreateNestedOneWithoutIssuesInput = {
  connect?: InputMaybe<LinearCycleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LinearCycleCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<LinearCycleCreateWithoutIssuesInput>;
};

export type LinearCycleCreateOrConnectWithoutIssuesInput = {
  create: LinearCycleCreateWithoutIssuesInput;
  where: LinearCycleWhereUniqueInput;
};

export type LinearCycleCreateWithoutIssuesInput = {
  endsAt: Scalars['DateTime'];
  linear_id: Scalars['String'];
  number: Scalars['Int'];
  startsAt: Scalars['DateTime'];
};

export type LinearCycleGroupBy = {
  _avg?: Maybe<LinearCycleAvgAggregate>;
  _count?: Maybe<LinearCycleCountAggregate>;
  _max?: Maybe<LinearCycleMaxAggregate>;
  _min?: Maybe<LinearCycleMinAggregate>;
  _sum?: Maybe<LinearCycleSumAggregate>;
  endsAt: Scalars['DateTime'];
  id: Scalars['Int'];
  linear_id: Scalars['String'];
  number: Scalars['Int'];
  startsAt: Scalars['DateTime'];
};

export type LinearCycleMaxAggregate = {
  endsAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  linear_id?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  startsAt?: Maybe<Scalars['DateTime']>;
};

export type LinearCycleMaxOrderByAggregateInput = {
  endsAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  startsAt?: InputMaybe<SortOrder>;
};

export type LinearCycleMinAggregate = {
  endsAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  linear_id?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  startsAt?: Maybe<Scalars['DateTime']>;
};

export type LinearCycleMinOrderByAggregateInput = {
  endsAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  startsAt?: InputMaybe<SortOrder>;
};

export type LinearCycleOrderByWithAggregationInput = {
  _avg?: InputMaybe<LinearCycleAvgOrderByAggregateInput>;
  _count?: InputMaybe<LinearCycleCountOrderByAggregateInput>;
  _max?: InputMaybe<LinearCycleMaxOrderByAggregateInput>;
  _min?: InputMaybe<LinearCycleMinOrderByAggregateInput>;
  _sum?: InputMaybe<LinearCycleSumOrderByAggregateInput>;
  endsAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  startsAt?: InputMaybe<SortOrder>;
};

export type LinearCycleOrderByWithRelationInput = {
  endsAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issues?: InputMaybe<LinearIssueOrderByRelationAggregateInput>;
  linear_id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  startsAt?: InputMaybe<SortOrder>;
};

export type LinearCycleRelationFilter = {
  is?: InputMaybe<LinearCycleWhereInput>;
  isNot?: InputMaybe<LinearCycleWhereInput>;
};

export enum LinearCycleScalarFieldEnum {
  EndsAt = 'endsAt',
  Id = 'id',
  LinearId = 'linear_id',
  Number = 'number',
  StartsAt = 'startsAt'
}

export type LinearCycleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LinearCycleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LinearCycleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LinearCycleScalarWhereWithAggregatesInput>>;
  endsAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  linear_id?: InputMaybe<StringWithAggregatesFilter>;
  number?: InputMaybe<IntWithAggregatesFilter>;
  startsAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type LinearCycleSumAggregate = {
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
};

export type LinearCycleSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
};

export type LinearCycleUpdateInput = {
  endsAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  issues?: InputMaybe<LinearIssueUpdateManyWithoutCycleInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  startsAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LinearCycleUpdateManyMutationInput = {
  endsAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  startsAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LinearCycleUpdateOneWithoutIssuesInput = {
  connect?: InputMaybe<LinearCycleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LinearCycleCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<LinearCycleCreateWithoutIssuesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LinearCycleUpdateWithoutIssuesInput>;
  upsert?: InputMaybe<LinearCycleUpsertWithoutIssuesInput>;
};

export type LinearCycleUpdateWithoutIssuesInput = {
  endsAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  startsAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LinearCycleUpsertWithoutIssuesInput = {
  create: LinearCycleCreateWithoutIssuesInput;
  update: LinearCycleUpdateWithoutIssuesInput;
};

export type LinearCycleWhereInput = {
  AND?: InputMaybe<Array<LinearCycleWhereInput>>;
  NOT?: InputMaybe<Array<LinearCycleWhereInput>>;
  OR?: InputMaybe<Array<LinearCycleWhereInput>>;
  endsAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  issues?: InputMaybe<LinearIssueListRelationFilter>;
  linear_id?: InputMaybe<StringFilter>;
  number?: InputMaybe<IntFilter>;
  startsAt?: InputMaybe<DateTimeFilter>;
};

export type LinearCycleWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  linear_id?: InputMaybe<Scalars['String']>;
};

export type LinearIssue = {
  archivedAt?: Maybe<Scalars['DateTime']>;
  assignee?: Maybe<LinearUser>;
  assignee_id?: Maybe<Scalars['Int']>;
  autoArchivedAt?: Maybe<Scalars['DateTime']>;
  autoClosedAt?: Maybe<Scalars['DateTime']>;
  boardOrder?: Maybe<Scalars['Int']>;
  branchName?: Maybe<Scalars['String']>;
  canceledAt?: Maybe<Scalars['DateTime']>;
  completedAt?: Maybe<Scalars['DateTime']>;
  contribution?: Maybe<Contribution>;
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<LinearUser>;
  creator_id?: Maybe<Scalars['Int']>;
  customerTickerCount?: Maybe<Scalars['Int']>;
  cycle?: Maybe<LinearCycle>;
  cycle_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  estimate?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  identifier?: Maybe<Scalars['String']>;
  linear_id?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  priorityLabel?: Maybe<Scalars['String']>;
  project?: Maybe<LinearProject>;
  project_id?: Maybe<Scalars['Int']>;
  snoozedUntilAt?: Maybe<Scalars['DateTime']>;
  sortOrder?: Maybe<Scalars['Float']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  subIssueSortOrder?: Maybe<Scalars['Float']>;
  team?: Maybe<LinearTeam>;
  team_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  trashed?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type LinearIssueAvgAggregate = {
  assignee_id?: Maybe<Scalars['Float']>;
  boardOrder?: Maybe<Scalars['Float']>;
  contribution_id?: Maybe<Scalars['Float']>;
  creator_id?: Maybe<Scalars['Float']>;
  customerTickerCount?: Maybe<Scalars['Float']>;
  cycle_id?: Maybe<Scalars['Float']>;
  estimate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
  sortOrder?: Maybe<Scalars['Float']>;
  subIssueSortOrder?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

export type LinearIssueAvgOrderByAggregateInput = {
  assignee_id?: InputMaybe<SortOrder>;
  boardOrder?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  creator_id?: InputMaybe<SortOrder>;
  customerTickerCount?: InputMaybe<SortOrder>;
  cycle_id?: InputMaybe<SortOrder>;
  estimate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  sortOrder?: InputMaybe<SortOrder>;
  subIssueSortOrder?: InputMaybe<SortOrder>;
  team_id?: InputMaybe<SortOrder>;
};

export type LinearIssueCountAggregate = {
  _all: Scalars['Int'];
  archivedAt: Scalars['Int'];
  assignee_id: Scalars['Int'];
  autoArchivedAt: Scalars['Int'];
  autoClosedAt: Scalars['Int'];
  boardOrder: Scalars['Int'];
  branchName: Scalars['Int'];
  canceledAt: Scalars['Int'];
  completedAt: Scalars['Int'];
  contribution_id: Scalars['Int'];
  createdAt: Scalars['Int'];
  creator_id: Scalars['Int'];
  customerTickerCount: Scalars['Int'];
  cycle_id: Scalars['Int'];
  description: Scalars['Int'];
  dueDate: Scalars['Int'];
  estimate: Scalars['Int'];
  id: Scalars['Int'];
  identifier: Scalars['Int'];
  linear_id: Scalars['Int'];
  priority: Scalars['Int'];
  priorityLabel: Scalars['Int'];
  project_id: Scalars['Int'];
  snoozedUntilAt: Scalars['Int'];
  sortOrder: Scalars['Int'];
  startedAt: Scalars['Int'];
  subIssueSortOrder: Scalars['Int'];
  team_id: Scalars['Int'];
  title: Scalars['Int'];
  trashed: Scalars['Int'];
  updatedAt: Scalars['Int'];
  url: Scalars['Int'];
};

export type LinearIssueCountOrderByAggregateInput = {
  archivedAt?: InputMaybe<SortOrder>;
  assignee_id?: InputMaybe<SortOrder>;
  autoArchivedAt?: InputMaybe<SortOrder>;
  autoClosedAt?: InputMaybe<SortOrder>;
  boardOrder?: InputMaybe<SortOrder>;
  branchName?: InputMaybe<SortOrder>;
  canceledAt?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creator_id?: InputMaybe<SortOrder>;
  customerTickerCount?: InputMaybe<SortOrder>;
  cycle_id?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  estimate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  priorityLabel?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  snoozedUntilAt?: InputMaybe<SortOrder>;
  sortOrder?: InputMaybe<SortOrder>;
  startedAt?: InputMaybe<SortOrder>;
  subIssueSortOrder?: InputMaybe<SortOrder>;
  team_id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trashed?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type LinearIssueCreateInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  assignee?: InputMaybe<LinearUserCreateNestedOneWithoutAssigned_IssuesInput>;
  autoArchivedAt?: InputMaybe<Scalars['DateTime']>;
  autoClosedAt?: InputMaybe<Scalars['DateTime']>;
  boardOrder?: InputMaybe<Scalars['Int']>;
  branchName?: InputMaybe<Scalars['String']>;
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  contribution?: InputMaybe<ContributionCreateNestedOneWithoutLinear_IssueInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<LinearUserCreateNestedOneWithoutCreated_IssuesInput>;
  customerTickerCount?: InputMaybe<Scalars['Int']>;
  cycle?: InputMaybe<LinearCycleCreateNestedOneWithoutIssuesInput>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  estimate?: InputMaybe<Scalars['Float']>;
  identifier?: InputMaybe<Scalars['String']>;
  linear_id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  priorityLabel?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<LinearProjectCreateNestedOneWithoutIssuesInput>;
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Float']>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  team?: InputMaybe<LinearTeamCreateNestedOneWithoutIssuesInput>;
  title?: InputMaybe<Scalars['String']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearIssueCreateManyAssigneeInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  autoArchivedAt?: InputMaybe<Scalars['DateTime']>;
  autoClosedAt?: InputMaybe<Scalars['DateTime']>;
  boardOrder?: InputMaybe<Scalars['Int']>;
  branchName?: InputMaybe<Scalars['String']>;
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  contribution_id?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator_id?: InputMaybe<Scalars['Int']>;
  customerTickerCount?: InputMaybe<Scalars['Int']>;
  cycle_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  estimate?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<Scalars['String']>;
  linear_id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  priorityLabel?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['Int']>;
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Float']>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  team_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearIssueCreateManyAssigneeInputEnvelope = {
  data: Array<LinearIssueCreateManyAssigneeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LinearIssueCreateManyCreatorInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  assignee_id?: InputMaybe<Scalars['Int']>;
  autoArchivedAt?: InputMaybe<Scalars['DateTime']>;
  autoClosedAt?: InputMaybe<Scalars['DateTime']>;
  boardOrder?: InputMaybe<Scalars['Int']>;
  branchName?: InputMaybe<Scalars['String']>;
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  contribution_id?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  customerTickerCount?: InputMaybe<Scalars['Int']>;
  cycle_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  estimate?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<Scalars['String']>;
  linear_id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  priorityLabel?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['Int']>;
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Float']>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  team_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearIssueCreateManyCreatorInputEnvelope = {
  data: Array<LinearIssueCreateManyCreatorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LinearIssueCreateManyCycleInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  assignee_id?: InputMaybe<Scalars['Int']>;
  autoArchivedAt?: InputMaybe<Scalars['DateTime']>;
  autoClosedAt?: InputMaybe<Scalars['DateTime']>;
  boardOrder?: InputMaybe<Scalars['Int']>;
  branchName?: InputMaybe<Scalars['String']>;
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  contribution_id?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator_id?: InputMaybe<Scalars['Int']>;
  customerTickerCount?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  estimate?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<Scalars['String']>;
  linear_id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  priorityLabel?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['Int']>;
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Float']>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  team_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearIssueCreateManyCycleInputEnvelope = {
  data: Array<LinearIssueCreateManyCycleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LinearIssueCreateManyInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  assignee_id?: InputMaybe<Scalars['Int']>;
  autoArchivedAt?: InputMaybe<Scalars['DateTime']>;
  autoClosedAt?: InputMaybe<Scalars['DateTime']>;
  boardOrder?: InputMaybe<Scalars['Int']>;
  branchName?: InputMaybe<Scalars['String']>;
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  contribution_id?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator_id?: InputMaybe<Scalars['Int']>;
  customerTickerCount?: InputMaybe<Scalars['Int']>;
  cycle_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  estimate?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<Scalars['String']>;
  linear_id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  priorityLabel?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['Int']>;
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Float']>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  team_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearIssueCreateManyProjectInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  assignee_id?: InputMaybe<Scalars['Int']>;
  autoArchivedAt?: InputMaybe<Scalars['DateTime']>;
  autoClosedAt?: InputMaybe<Scalars['DateTime']>;
  boardOrder?: InputMaybe<Scalars['Int']>;
  branchName?: InputMaybe<Scalars['String']>;
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  contribution_id?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator_id?: InputMaybe<Scalars['Int']>;
  customerTickerCount?: InputMaybe<Scalars['Int']>;
  cycle_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  estimate?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<Scalars['String']>;
  linear_id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  priorityLabel?: InputMaybe<Scalars['String']>;
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Float']>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  team_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearIssueCreateManyProjectInputEnvelope = {
  data: Array<LinearIssueCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LinearIssueCreateManyTeamInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  assignee_id?: InputMaybe<Scalars['Int']>;
  autoArchivedAt?: InputMaybe<Scalars['DateTime']>;
  autoClosedAt?: InputMaybe<Scalars['DateTime']>;
  boardOrder?: InputMaybe<Scalars['Int']>;
  branchName?: InputMaybe<Scalars['String']>;
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  contribution_id?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator_id?: InputMaybe<Scalars['Int']>;
  customerTickerCount?: InputMaybe<Scalars['Int']>;
  cycle_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  estimate?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<Scalars['String']>;
  linear_id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  priorityLabel?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['Int']>;
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Float']>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearIssueCreateManyTeamInputEnvelope = {
  data: Array<LinearIssueCreateManyTeamInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LinearIssueCreateNestedManyWithoutAssigneeInput = {
  connect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LinearIssueCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<LinearIssueCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<LinearIssueCreateManyAssigneeInputEnvelope>;
};

export type LinearIssueCreateNestedManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LinearIssueCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<LinearIssueCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<LinearIssueCreateManyCreatorInputEnvelope>;
};

export type LinearIssueCreateNestedManyWithoutCycleInput = {
  connect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LinearIssueCreateOrConnectWithoutCycleInput>>;
  create?: InputMaybe<Array<LinearIssueCreateWithoutCycleInput>>;
  createMany?: InputMaybe<LinearIssueCreateManyCycleInputEnvelope>;
};

export type LinearIssueCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LinearIssueCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<LinearIssueCreateWithoutProjectInput>>;
  createMany?: InputMaybe<LinearIssueCreateManyProjectInputEnvelope>;
};

export type LinearIssueCreateNestedManyWithoutTeamInput = {
  connect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LinearIssueCreateOrConnectWithoutTeamInput>>;
  create?: InputMaybe<Array<LinearIssueCreateWithoutTeamInput>>;
  createMany?: InputMaybe<LinearIssueCreateManyTeamInputEnvelope>;
};

export type LinearIssueCreateNestedOneWithoutContributionInput = {
  connect?: InputMaybe<LinearIssueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LinearIssueCreateOrConnectWithoutContributionInput>;
  create?: InputMaybe<LinearIssueCreateWithoutContributionInput>;
};

export type LinearIssueCreateOrConnectWithoutAssigneeInput = {
  create: LinearIssueCreateWithoutAssigneeInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueCreateOrConnectWithoutContributionInput = {
  create: LinearIssueCreateWithoutContributionInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueCreateOrConnectWithoutCreatorInput = {
  create: LinearIssueCreateWithoutCreatorInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueCreateOrConnectWithoutCycleInput = {
  create: LinearIssueCreateWithoutCycleInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueCreateOrConnectWithoutProjectInput = {
  create: LinearIssueCreateWithoutProjectInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueCreateOrConnectWithoutTeamInput = {
  create: LinearIssueCreateWithoutTeamInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueCreateWithoutAssigneeInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  autoArchivedAt?: InputMaybe<Scalars['DateTime']>;
  autoClosedAt?: InputMaybe<Scalars['DateTime']>;
  boardOrder?: InputMaybe<Scalars['Int']>;
  branchName?: InputMaybe<Scalars['String']>;
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  contribution?: InputMaybe<ContributionCreateNestedOneWithoutLinear_IssueInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<LinearUserCreateNestedOneWithoutCreated_IssuesInput>;
  customerTickerCount?: InputMaybe<Scalars['Int']>;
  cycle?: InputMaybe<LinearCycleCreateNestedOneWithoutIssuesInput>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  estimate?: InputMaybe<Scalars['Float']>;
  identifier?: InputMaybe<Scalars['String']>;
  linear_id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  priorityLabel?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<LinearProjectCreateNestedOneWithoutIssuesInput>;
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Float']>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  team?: InputMaybe<LinearTeamCreateNestedOneWithoutIssuesInput>;
  title?: InputMaybe<Scalars['String']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearIssueCreateWithoutContributionInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  assignee?: InputMaybe<LinearUserCreateNestedOneWithoutAssigned_IssuesInput>;
  autoArchivedAt?: InputMaybe<Scalars['DateTime']>;
  autoClosedAt?: InputMaybe<Scalars['DateTime']>;
  boardOrder?: InputMaybe<Scalars['Int']>;
  branchName?: InputMaybe<Scalars['String']>;
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<LinearUserCreateNestedOneWithoutCreated_IssuesInput>;
  customerTickerCount?: InputMaybe<Scalars['Int']>;
  cycle?: InputMaybe<LinearCycleCreateNestedOneWithoutIssuesInput>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  estimate?: InputMaybe<Scalars['Float']>;
  identifier?: InputMaybe<Scalars['String']>;
  linear_id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  priorityLabel?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<LinearProjectCreateNestedOneWithoutIssuesInput>;
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Float']>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  team?: InputMaybe<LinearTeamCreateNestedOneWithoutIssuesInput>;
  title?: InputMaybe<Scalars['String']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearIssueCreateWithoutCreatorInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  assignee?: InputMaybe<LinearUserCreateNestedOneWithoutAssigned_IssuesInput>;
  autoArchivedAt?: InputMaybe<Scalars['DateTime']>;
  autoClosedAt?: InputMaybe<Scalars['DateTime']>;
  boardOrder?: InputMaybe<Scalars['Int']>;
  branchName?: InputMaybe<Scalars['String']>;
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  contribution?: InputMaybe<ContributionCreateNestedOneWithoutLinear_IssueInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  customerTickerCount?: InputMaybe<Scalars['Int']>;
  cycle?: InputMaybe<LinearCycleCreateNestedOneWithoutIssuesInput>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  estimate?: InputMaybe<Scalars['Float']>;
  identifier?: InputMaybe<Scalars['String']>;
  linear_id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  priorityLabel?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<LinearProjectCreateNestedOneWithoutIssuesInput>;
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Float']>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  team?: InputMaybe<LinearTeamCreateNestedOneWithoutIssuesInput>;
  title?: InputMaybe<Scalars['String']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearIssueCreateWithoutCycleInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  assignee?: InputMaybe<LinearUserCreateNestedOneWithoutAssigned_IssuesInput>;
  autoArchivedAt?: InputMaybe<Scalars['DateTime']>;
  autoClosedAt?: InputMaybe<Scalars['DateTime']>;
  boardOrder?: InputMaybe<Scalars['Int']>;
  branchName?: InputMaybe<Scalars['String']>;
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  contribution?: InputMaybe<ContributionCreateNestedOneWithoutLinear_IssueInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<LinearUserCreateNestedOneWithoutCreated_IssuesInput>;
  customerTickerCount?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  estimate?: InputMaybe<Scalars['Float']>;
  identifier?: InputMaybe<Scalars['String']>;
  linear_id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  priorityLabel?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<LinearProjectCreateNestedOneWithoutIssuesInput>;
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Float']>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  team?: InputMaybe<LinearTeamCreateNestedOneWithoutIssuesInput>;
  title?: InputMaybe<Scalars['String']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearIssueCreateWithoutProjectInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  assignee?: InputMaybe<LinearUserCreateNestedOneWithoutAssigned_IssuesInput>;
  autoArchivedAt?: InputMaybe<Scalars['DateTime']>;
  autoClosedAt?: InputMaybe<Scalars['DateTime']>;
  boardOrder?: InputMaybe<Scalars['Int']>;
  branchName?: InputMaybe<Scalars['String']>;
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  contribution?: InputMaybe<ContributionCreateNestedOneWithoutLinear_IssueInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<LinearUserCreateNestedOneWithoutCreated_IssuesInput>;
  customerTickerCount?: InputMaybe<Scalars['Int']>;
  cycle?: InputMaybe<LinearCycleCreateNestedOneWithoutIssuesInput>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  estimate?: InputMaybe<Scalars['Float']>;
  identifier?: InputMaybe<Scalars['String']>;
  linear_id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  priorityLabel?: InputMaybe<Scalars['String']>;
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Float']>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  team?: InputMaybe<LinearTeamCreateNestedOneWithoutIssuesInput>;
  title?: InputMaybe<Scalars['String']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearIssueCreateWithoutTeamInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  assignee?: InputMaybe<LinearUserCreateNestedOneWithoutAssigned_IssuesInput>;
  autoArchivedAt?: InputMaybe<Scalars['DateTime']>;
  autoClosedAt?: InputMaybe<Scalars['DateTime']>;
  boardOrder?: InputMaybe<Scalars['Int']>;
  branchName?: InputMaybe<Scalars['String']>;
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  contribution?: InputMaybe<ContributionCreateNestedOneWithoutLinear_IssueInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<LinearUserCreateNestedOneWithoutCreated_IssuesInput>;
  customerTickerCount?: InputMaybe<Scalars['Int']>;
  cycle?: InputMaybe<LinearCycleCreateNestedOneWithoutIssuesInput>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  estimate?: InputMaybe<Scalars['Float']>;
  identifier?: InputMaybe<Scalars['String']>;
  linear_id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  priorityLabel?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<LinearProjectCreateNestedOneWithoutIssuesInput>;
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Float']>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearIssueGroupBy = {
  _avg?: Maybe<LinearIssueAvgAggregate>;
  _count?: Maybe<LinearIssueCountAggregate>;
  _max?: Maybe<LinearIssueMaxAggregate>;
  _min?: Maybe<LinearIssueMinAggregate>;
  _sum?: Maybe<LinearIssueSumAggregate>;
  archivedAt?: Maybe<Scalars['DateTime']>;
  assignee_id?: Maybe<Scalars['Int']>;
  autoArchivedAt?: Maybe<Scalars['DateTime']>;
  autoClosedAt?: Maybe<Scalars['DateTime']>;
  boardOrder?: Maybe<Scalars['Int']>;
  branchName?: Maybe<Scalars['String']>;
  canceledAt?: Maybe<Scalars['DateTime']>;
  completedAt?: Maybe<Scalars['DateTime']>;
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator_id?: Maybe<Scalars['Int']>;
  customerTickerCount?: Maybe<Scalars['Int']>;
  cycle_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  estimate?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  identifier?: Maybe<Scalars['String']>;
  linear_id?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  priorityLabel?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  snoozedUntilAt?: Maybe<Scalars['DateTime']>;
  sortOrder?: Maybe<Scalars['Float']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  subIssueSortOrder?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  trashed?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type LinearIssueListRelationFilter = {
  every?: InputMaybe<LinearIssueWhereInput>;
  none?: InputMaybe<LinearIssueWhereInput>;
  some?: InputMaybe<LinearIssueWhereInput>;
};

export type LinearIssueMaxAggregate = {
  archivedAt?: Maybe<Scalars['DateTime']>;
  assignee_id?: Maybe<Scalars['Int']>;
  autoArchivedAt?: Maybe<Scalars['DateTime']>;
  autoClosedAt?: Maybe<Scalars['DateTime']>;
  boardOrder?: Maybe<Scalars['Int']>;
  branchName?: Maybe<Scalars['String']>;
  canceledAt?: Maybe<Scalars['DateTime']>;
  completedAt?: Maybe<Scalars['DateTime']>;
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator_id?: Maybe<Scalars['Int']>;
  customerTickerCount?: Maybe<Scalars['Int']>;
  cycle_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  estimate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  linear_id?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  priorityLabel?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  snoozedUntilAt?: Maybe<Scalars['DateTime']>;
  sortOrder?: Maybe<Scalars['Float']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  subIssueSortOrder?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  trashed?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type LinearIssueMaxOrderByAggregateInput = {
  archivedAt?: InputMaybe<SortOrder>;
  assignee_id?: InputMaybe<SortOrder>;
  autoArchivedAt?: InputMaybe<SortOrder>;
  autoClosedAt?: InputMaybe<SortOrder>;
  boardOrder?: InputMaybe<SortOrder>;
  branchName?: InputMaybe<SortOrder>;
  canceledAt?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creator_id?: InputMaybe<SortOrder>;
  customerTickerCount?: InputMaybe<SortOrder>;
  cycle_id?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  estimate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  priorityLabel?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  snoozedUntilAt?: InputMaybe<SortOrder>;
  sortOrder?: InputMaybe<SortOrder>;
  startedAt?: InputMaybe<SortOrder>;
  subIssueSortOrder?: InputMaybe<SortOrder>;
  team_id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trashed?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type LinearIssueMinAggregate = {
  archivedAt?: Maybe<Scalars['DateTime']>;
  assignee_id?: Maybe<Scalars['Int']>;
  autoArchivedAt?: Maybe<Scalars['DateTime']>;
  autoClosedAt?: Maybe<Scalars['DateTime']>;
  boardOrder?: Maybe<Scalars['Int']>;
  branchName?: Maybe<Scalars['String']>;
  canceledAt?: Maybe<Scalars['DateTime']>;
  completedAt?: Maybe<Scalars['DateTime']>;
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator_id?: Maybe<Scalars['Int']>;
  customerTickerCount?: Maybe<Scalars['Int']>;
  cycle_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  estimate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  linear_id?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  priorityLabel?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  snoozedUntilAt?: Maybe<Scalars['DateTime']>;
  sortOrder?: Maybe<Scalars['Float']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  subIssueSortOrder?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  trashed?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type LinearIssueMinOrderByAggregateInput = {
  archivedAt?: InputMaybe<SortOrder>;
  assignee_id?: InputMaybe<SortOrder>;
  autoArchivedAt?: InputMaybe<SortOrder>;
  autoClosedAt?: InputMaybe<SortOrder>;
  boardOrder?: InputMaybe<SortOrder>;
  branchName?: InputMaybe<SortOrder>;
  canceledAt?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creator_id?: InputMaybe<SortOrder>;
  customerTickerCount?: InputMaybe<SortOrder>;
  cycle_id?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  estimate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  priorityLabel?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  snoozedUntilAt?: InputMaybe<SortOrder>;
  sortOrder?: InputMaybe<SortOrder>;
  startedAt?: InputMaybe<SortOrder>;
  subIssueSortOrder?: InputMaybe<SortOrder>;
  team_id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trashed?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type LinearIssueOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LinearIssueOrderByWithAggregationInput = {
  _avg?: InputMaybe<LinearIssueAvgOrderByAggregateInput>;
  _count?: InputMaybe<LinearIssueCountOrderByAggregateInput>;
  _max?: InputMaybe<LinearIssueMaxOrderByAggregateInput>;
  _min?: InputMaybe<LinearIssueMinOrderByAggregateInput>;
  _sum?: InputMaybe<LinearIssueSumOrderByAggregateInput>;
  archivedAt?: InputMaybe<SortOrder>;
  assignee_id?: InputMaybe<SortOrder>;
  autoArchivedAt?: InputMaybe<SortOrder>;
  autoClosedAt?: InputMaybe<SortOrder>;
  boardOrder?: InputMaybe<SortOrder>;
  branchName?: InputMaybe<SortOrder>;
  canceledAt?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creator_id?: InputMaybe<SortOrder>;
  customerTickerCount?: InputMaybe<SortOrder>;
  cycle_id?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  estimate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  priorityLabel?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  snoozedUntilAt?: InputMaybe<SortOrder>;
  sortOrder?: InputMaybe<SortOrder>;
  startedAt?: InputMaybe<SortOrder>;
  subIssueSortOrder?: InputMaybe<SortOrder>;
  team_id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trashed?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type LinearIssueOrderByWithRelationInput = {
  archivedAt?: InputMaybe<SortOrder>;
  assignee?: InputMaybe<LinearUserOrderByWithRelationInput>;
  assignee_id?: InputMaybe<SortOrder>;
  autoArchivedAt?: InputMaybe<SortOrder>;
  autoClosedAt?: InputMaybe<SortOrder>;
  boardOrder?: InputMaybe<SortOrder>;
  branchName?: InputMaybe<SortOrder>;
  canceledAt?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  contribution?: InputMaybe<ContributionOrderByWithRelationInput>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creator?: InputMaybe<LinearUserOrderByWithRelationInput>;
  creator_id?: InputMaybe<SortOrder>;
  customerTickerCount?: InputMaybe<SortOrder>;
  cycle?: InputMaybe<LinearCycleOrderByWithRelationInput>;
  cycle_id?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  estimate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  priorityLabel?: InputMaybe<SortOrder>;
  project?: InputMaybe<LinearProjectOrderByWithRelationInput>;
  project_id?: InputMaybe<SortOrder>;
  snoozedUntilAt?: InputMaybe<SortOrder>;
  sortOrder?: InputMaybe<SortOrder>;
  startedAt?: InputMaybe<SortOrder>;
  subIssueSortOrder?: InputMaybe<SortOrder>;
  team?: InputMaybe<LinearTeamOrderByWithRelationInput>;
  team_id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trashed?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type LinearIssueRelationFilter = {
  is?: InputMaybe<LinearIssueWhereInput>;
  isNot?: InputMaybe<LinearIssueWhereInput>;
};

export enum LinearIssueScalarFieldEnum {
  ArchivedAt = 'archivedAt',
  AssigneeId = 'assignee_id',
  AutoArchivedAt = 'autoArchivedAt',
  AutoClosedAt = 'autoClosedAt',
  BoardOrder = 'boardOrder',
  BranchName = 'branchName',
  CanceledAt = 'canceledAt',
  CompletedAt = 'completedAt',
  ContributionId = 'contribution_id',
  CreatedAt = 'createdAt',
  CreatorId = 'creator_id',
  CustomerTickerCount = 'customerTickerCount',
  CycleId = 'cycle_id',
  Description = 'description',
  DueDate = 'dueDate',
  Estimate = 'estimate',
  Id = 'id',
  Identifier = 'identifier',
  LinearId = 'linear_id',
  Priority = 'priority',
  PriorityLabel = 'priorityLabel',
  ProjectId = 'project_id',
  SnoozedUntilAt = 'snoozedUntilAt',
  SortOrder = 'sortOrder',
  StartedAt = 'startedAt',
  SubIssueSortOrder = 'subIssueSortOrder',
  TeamId = 'team_id',
  Title = 'title',
  Trashed = 'trashed',
  UpdatedAt = 'updatedAt',
  Url = 'url'
}

export type LinearIssueScalarWhereInput = {
  AND?: InputMaybe<Array<LinearIssueScalarWhereInput>>;
  NOT?: InputMaybe<Array<LinearIssueScalarWhereInput>>;
  OR?: InputMaybe<Array<LinearIssueScalarWhereInput>>;
  archivedAt?: InputMaybe<DateTimeNullableFilter>;
  assignee_id?: InputMaybe<IntNullableFilter>;
  autoArchivedAt?: InputMaybe<DateTimeNullableFilter>;
  autoClosedAt?: InputMaybe<DateTimeNullableFilter>;
  boardOrder?: InputMaybe<IntNullableFilter>;
  branchName?: InputMaybe<StringNullableFilter>;
  canceledAt?: InputMaybe<DateTimeNullableFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  contribution_id?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  creator_id?: InputMaybe<IntNullableFilter>;
  customerTickerCount?: InputMaybe<IntNullableFilter>;
  cycle_id?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  dueDate?: InputMaybe<DateTimeNullableFilter>;
  estimate?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IntFilter>;
  identifier?: InputMaybe<StringNullableFilter>;
  linear_id?: InputMaybe<StringNullableFilter>;
  priority?: InputMaybe<IntNullableFilter>;
  priorityLabel?: InputMaybe<StringNullableFilter>;
  project_id?: InputMaybe<IntNullableFilter>;
  snoozedUntilAt?: InputMaybe<DateTimeNullableFilter>;
  sortOrder?: InputMaybe<FloatNullableFilter>;
  startedAt?: InputMaybe<DateTimeNullableFilter>;
  subIssueSortOrder?: InputMaybe<FloatNullableFilter>;
  team_id?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringNullableFilter>;
  trashed?: InputMaybe<BoolNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  url?: InputMaybe<StringNullableFilter>;
};

export type LinearIssueScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LinearIssueScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LinearIssueScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LinearIssueScalarWhereWithAggregatesInput>>;
  archivedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  assignee_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  autoArchivedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  autoClosedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  boardOrder?: InputMaybe<IntNullableWithAggregatesFilter>;
  branchName?: InputMaybe<StringNullableWithAggregatesFilter>;
  canceledAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  completedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  contribution_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  creator_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  customerTickerCount?: InputMaybe<IntNullableWithAggregatesFilter>;
  cycle_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  dueDate?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  estimate?: InputMaybe<FloatNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  identifier?: InputMaybe<StringNullableWithAggregatesFilter>;
  linear_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  priority?: InputMaybe<IntNullableWithAggregatesFilter>;
  priorityLabel?: InputMaybe<StringNullableWithAggregatesFilter>;
  project_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  snoozedUntilAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  sortOrder?: InputMaybe<FloatNullableWithAggregatesFilter>;
  startedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  subIssueSortOrder?: InputMaybe<FloatNullableWithAggregatesFilter>;
  team_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  title?: InputMaybe<StringNullableWithAggregatesFilter>;
  trashed?: InputMaybe<BoolNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  url?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type LinearIssueSumAggregate = {
  assignee_id?: Maybe<Scalars['Int']>;
  boardOrder?: Maybe<Scalars['Int']>;
  contribution_id?: Maybe<Scalars['Int']>;
  creator_id?: Maybe<Scalars['Int']>;
  customerTickerCount?: Maybe<Scalars['Int']>;
  cycle_id?: Maybe<Scalars['Int']>;
  estimate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
  sortOrder?: Maybe<Scalars['Float']>;
  subIssueSortOrder?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Int']>;
};

export type LinearIssueSumOrderByAggregateInput = {
  assignee_id?: InputMaybe<SortOrder>;
  boardOrder?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  creator_id?: InputMaybe<SortOrder>;
  customerTickerCount?: InputMaybe<SortOrder>;
  cycle_id?: InputMaybe<SortOrder>;
  estimate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  sortOrder?: InputMaybe<SortOrder>;
  subIssueSortOrder?: InputMaybe<SortOrder>;
  team_id?: InputMaybe<SortOrder>;
};

export type LinearIssueUpdateInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  assignee?: InputMaybe<LinearUserUpdateOneWithoutAssigned_IssuesInput>;
  autoArchivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoClosedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  boardOrder?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  branchName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  canceledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  contribution?: InputMaybe<ContributionUpdateOneWithoutLinear_IssueInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<LinearUserUpdateOneWithoutCreated_IssuesInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cycle?: InputMaybe<LinearCycleUpdateOneWithoutIssuesInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  priorityLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<LinearProjectUpdateOneWithoutIssuesInput>;
  snoozedUntilAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  startedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subIssueSortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  team?: InputMaybe<LinearTeamUpdateOneWithoutIssuesInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  trashed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearIssueUpdateManyMutationInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoArchivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoClosedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  boardOrder?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  branchName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  canceledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  priorityLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  snoozedUntilAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  startedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subIssueSortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  trashed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearIssueUpdateManyWithWhereWithoutAssigneeInput = {
  data: LinearIssueUpdateManyMutationInput;
  where: LinearIssueScalarWhereInput;
};

export type LinearIssueUpdateManyWithWhereWithoutCreatorInput = {
  data: LinearIssueUpdateManyMutationInput;
  where: LinearIssueScalarWhereInput;
};

export type LinearIssueUpdateManyWithWhereWithoutCycleInput = {
  data: LinearIssueUpdateManyMutationInput;
  where: LinearIssueScalarWhereInput;
};

export type LinearIssueUpdateManyWithWhereWithoutProjectInput = {
  data: LinearIssueUpdateManyMutationInput;
  where: LinearIssueScalarWhereInput;
};

export type LinearIssueUpdateManyWithWhereWithoutTeamInput = {
  data: LinearIssueUpdateManyMutationInput;
  where: LinearIssueScalarWhereInput;
};

export type LinearIssueUpdateManyWithoutAssigneeInput = {
  connect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LinearIssueCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<LinearIssueCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<LinearIssueCreateManyAssigneeInputEnvelope>;
  delete?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LinearIssueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  set?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  update?: InputMaybe<Array<LinearIssueUpdateWithWhereUniqueWithoutAssigneeInput>>;
  updateMany?: InputMaybe<Array<LinearIssueUpdateManyWithWhereWithoutAssigneeInput>>;
  upsert?: InputMaybe<Array<LinearIssueUpsertWithWhereUniqueWithoutAssigneeInput>>;
};

export type LinearIssueUpdateManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LinearIssueCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<LinearIssueCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<LinearIssueCreateManyCreatorInputEnvelope>;
  delete?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LinearIssueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  set?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  update?: InputMaybe<Array<LinearIssueUpdateWithWhereUniqueWithoutCreatorInput>>;
  updateMany?: InputMaybe<Array<LinearIssueUpdateManyWithWhereWithoutCreatorInput>>;
  upsert?: InputMaybe<Array<LinearIssueUpsertWithWhereUniqueWithoutCreatorInput>>;
};

export type LinearIssueUpdateManyWithoutCycleInput = {
  connect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LinearIssueCreateOrConnectWithoutCycleInput>>;
  create?: InputMaybe<Array<LinearIssueCreateWithoutCycleInput>>;
  createMany?: InputMaybe<LinearIssueCreateManyCycleInputEnvelope>;
  delete?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LinearIssueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  set?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  update?: InputMaybe<Array<LinearIssueUpdateWithWhereUniqueWithoutCycleInput>>;
  updateMany?: InputMaybe<Array<LinearIssueUpdateManyWithWhereWithoutCycleInput>>;
  upsert?: InputMaybe<Array<LinearIssueUpsertWithWhereUniqueWithoutCycleInput>>;
};

export type LinearIssueUpdateManyWithoutProjectInput = {
  connect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LinearIssueCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<LinearIssueCreateWithoutProjectInput>>;
  createMany?: InputMaybe<LinearIssueCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LinearIssueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  set?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  update?: InputMaybe<Array<LinearIssueUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<LinearIssueUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<LinearIssueUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type LinearIssueUpdateManyWithoutTeamInput = {
  connect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LinearIssueCreateOrConnectWithoutTeamInput>>;
  create?: InputMaybe<Array<LinearIssueCreateWithoutTeamInput>>;
  createMany?: InputMaybe<LinearIssueCreateManyTeamInputEnvelope>;
  delete?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LinearIssueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  set?: InputMaybe<Array<LinearIssueWhereUniqueInput>>;
  update?: InputMaybe<Array<LinearIssueUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: InputMaybe<Array<LinearIssueUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: InputMaybe<Array<LinearIssueUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type LinearIssueUpdateOneWithoutContributionInput = {
  connect?: InputMaybe<LinearIssueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LinearIssueCreateOrConnectWithoutContributionInput>;
  create?: InputMaybe<LinearIssueCreateWithoutContributionInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LinearIssueUpdateWithoutContributionInput>;
  upsert?: InputMaybe<LinearIssueUpsertWithoutContributionInput>;
};

export type LinearIssueUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: LinearIssueUpdateWithoutAssigneeInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueUpdateWithWhereUniqueWithoutCreatorInput = {
  data: LinearIssueUpdateWithoutCreatorInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueUpdateWithWhereUniqueWithoutCycleInput = {
  data: LinearIssueUpdateWithoutCycleInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueUpdateWithWhereUniqueWithoutProjectInput = {
  data: LinearIssueUpdateWithoutProjectInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueUpdateWithWhereUniqueWithoutTeamInput = {
  data: LinearIssueUpdateWithoutTeamInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueUpdateWithoutAssigneeInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoArchivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoClosedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  boardOrder?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  branchName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  canceledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  contribution?: InputMaybe<ContributionUpdateOneWithoutLinear_IssueInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<LinearUserUpdateOneWithoutCreated_IssuesInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cycle?: InputMaybe<LinearCycleUpdateOneWithoutIssuesInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  priorityLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<LinearProjectUpdateOneWithoutIssuesInput>;
  snoozedUntilAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  startedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subIssueSortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  team?: InputMaybe<LinearTeamUpdateOneWithoutIssuesInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  trashed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearIssueUpdateWithoutContributionInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  assignee?: InputMaybe<LinearUserUpdateOneWithoutAssigned_IssuesInput>;
  autoArchivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoClosedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  boardOrder?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  branchName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  canceledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<LinearUserUpdateOneWithoutCreated_IssuesInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cycle?: InputMaybe<LinearCycleUpdateOneWithoutIssuesInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  priorityLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<LinearProjectUpdateOneWithoutIssuesInput>;
  snoozedUntilAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  startedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subIssueSortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  team?: InputMaybe<LinearTeamUpdateOneWithoutIssuesInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  trashed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearIssueUpdateWithoutCreatorInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  assignee?: InputMaybe<LinearUserUpdateOneWithoutAssigned_IssuesInput>;
  autoArchivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoClosedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  boardOrder?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  branchName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  canceledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  contribution?: InputMaybe<ContributionUpdateOneWithoutLinear_IssueInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cycle?: InputMaybe<LinearCycleUpdateOneWithoutIssuesInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  priorityLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<LinearProjectUpdateOneWithoutIssuesInput>;
  snoozedUntilAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  startedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subIssueSortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  team?: InputMaybe<LinearTeamUpdateOneWithoutIssuesInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  trashed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearIssueUpdateWithoutCycleInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  assignee?: InputMaybe<LinearUserUpdateOneWithoutAssigned_IssuesInput>;
  autoArchivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoClosedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  boardOrder?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  branchName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  canceledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  contribution?: InputMaybe<ContributionUpdateOneWithoutLinear_IssueInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<LinearUserUpdateOneWithoutCreated_IssuesInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  priorityLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<LinearProjectUpdateOneWithoutIssuesInput>;
  snoozedUntilAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  startedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subIssueSortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  team?: InputMaybe<LinearTeamUpdateOneWithoutIssuesInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  trashed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearIssueUpdateWithoutProjectInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  assignee?: InputMaybe<LinearUserUpdateOneWithoutAssigned_IssuesInput>;
  autoArchivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoClosedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  boardOrder?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  branchName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  canceledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  contribution?: InputMaybe<ContributionUpdateOneWithoutLinear_IssueInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<LinearUserUpdateOneWithoutCreated_IssuesInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cycle?: InputMaybe<LinearCycleUpdateOneWithoutIssuesInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  priorityLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  snoozedUntilAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  startedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subIssueSortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  team?: InputMaybe<LinearTeamUpdateOneWithoutIssuesInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  trashed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearIssueUpdateWithoutTeamInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  assignee?: InputMaybe<LinearUserUpdateOneWithoutAssigned_IssuesInput>;
  autoArchivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoClosedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  boardOrder?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  branchName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  canceledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  contribution?: InputMaybe<ContributionUpdateOneWithoutLinear_IssueInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<LinearUserUpdateOneWithoutCreated_IssuesInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cycle?: InputMaybe<LinearCycleUpdateOneWithoutIssuesInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  priorityLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<LinearProjectUpdateOneWithoutIssuesInput>;
  snoozedUntilAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  startedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subIssueSortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  trashed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearIssueUpsertWithWhereUniqueWithoutAssigneeInput = {
  create: LinearIssueCreateWithoutAssigneeInput;
  update: LinearIssueUpdateWithoutAssigneeInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueUpsertWithWhereUniqueWithoutCreatorInput = {
  create: LinearIssueCreateWithoutCreatorInput;
  update: LinearIssueUpdateWithoutCreatorInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueUpsertWithWhereUniqueWithoutCycleInput = {
  create: LinearIssueCreateWithoutCycleInput;
  update: LinearIssueUpdateWithoutCycleInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueUpsertWithWhereUniqueWithoutProjectInput = {
  create: LinearIssueCreateWithoutProjectInput;
  update: LinearIssueUpdateWithoutProjectInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueUpsertWithWhereUniqueWithoutTeamInput = {
  create: LinearIssueCreateWithoutTeamInput;
  update: LinearIssueUpdateWithoutTeamInput;
  where: LinearIssueWhereUniqueInput;
};

export type LinearIssueUpsertWithoutContributionInput = {
  create: LinearIssueCreateWithoutContributionInput;
  update: LinearIssueUpdateWithoutContributionInput;
};

export type LinearIssueWhereInput = {
  AND?: InputMaybe<Array<LinearIssueWhereInput>>;
  NOT?: InputMaybe<Array<LinearIssueWhereInput>>;
  OR?: InputMaybe<Array<LinearIssueWhereInput>>;
  archivedAt?: InputMaybe<DateTimeNullableFilter>;
  assignee?: InputMaybe<LinearUserRelationFilter>;
  assignee_id?: InputMaybe<IntNullableFilter>;
  autoArchivedAt?: InputMaybe<DateTimeNullableFilter>;
  autoClosedAt?: InputMaybe<DateTimeNullableFilter>;
  boardOrder?: InputMaybe<IntNullableFilter>;
  branchName?: InputMaybe<StringNullableFilter>;
  canceledAt?: InputMaybe<DateTimeNullableFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  contribution?: InputMaybe<ContributionRelationFilter>;
  contribution_id?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  creator?: InputMaybe<LinearUserRelationFilter>;
  creator_id?: InputMaybe<IntNullableFilter>;
  customerTickerCount?: InputMaybe<IntNullableFilter>;
  cycle?: InputMaybe<LinearCycleRelationFilter>;
  cycle_id?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  dueDate?: InputMaybe<DateTimeNullableFilter>;
  estimate?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IntFilter>;
  identifier?: InputMaybe<StringNullableFilter>;
  linear_id?: InputMaybe<StringNullableFilter>;
  priority?: InputMaybe<IntNullableFilter>;
  priorityLabel?: InputMaybe<StringNullableFilter>;
  project?: InputMaybe<LinearProjectRelationFilter>;
  project_id?: InputMaybe<IntNullableFilter>;
  snoozedUntilAt?: InputMaybe<DateTimeNullableFilter>;
  sortOrder?: InputMaybe<FloatNullableFilter>;
  startedAt?: InputMaybe<DateTimeNullableFilter>;
  subIssueSortOrder?: InputMaybe<FloatNullableFilter>;
  team?: InputMaybe<LinearTeamRelationFilter>;
  team_id?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringNullableFilter>;
  trashed?: InputMaybe<BoolNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  url?: InputMaybe<StringNullableFilter>;
};

export type LinearIssueWhereUniqueInput = {
  contribution_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  linear_id?: InputMaybe<Scalars['String']>;
};

export type LinearProject = {
  _count?: Maybe<LinearProjectCount>;
  id: Scalars['Int'];
  issues: Array<LinearIssue>;
  linear_id: Scalars['String'];
  name: Scalars['String'];
};


export type LinearProjectIssuesArgs = {
  cursor?: InputMaybe<LinearIssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearIssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearIssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearIssueWhereInput>;
};

export type LinearProjectAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type LinearProjectAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type LinearProjectCount = {
  issues: Scalars['Int'];
};

export type LinearProjectCountAggregate = {
  _all: Scalars['Int'];
  id: Scalars['Int'];
  linear_id: Scalars['Int'];
  name: Scalars['Int'];
};

export type LinearProjectCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LinearProjectCreateInput = {
  issues?: InputMaybe<LinearIssueCreateNestedManyWithoutProjectInput>;
  linear_id: Scalars['String'];
  name: Scalars['String'];
};

export type LinearProjectCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  linear_id: Scalars['String'];
  name: Scalars['String'];
};

export type LinearProjectCreateNestedOneWithoutIssuesInput = {
  connect?: InputMaybe<LinearProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LinearProjectCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<LinearProjectCreateWithoutIssuesInput>;
};

export type LinearProjectCreateOrConnectWithoutIssuesInput = {
  create: LinearProjectCreateWithoutIssuesInput;
  where: LinearProjectWhereUniqueInput;
};

export type LinearProjectCreateWithoutIssuesInput = {
  linear_id: Scalars['String'];
  name: Scalars['String'];
};

export type LinearProjectGroupBy = {
  _avg?: Maybe<LinearProjectAvgAggregate>;
  _count?: Maybe<LinearProjectCountAggregate>;
  _max?: Maybe<LinearProjectMaxAggregate>;
  _min?: Maybe<LinearProjectMinAggregate>;
  _sum?: Maybe<LinearProjectSumAggregate>;
  id: Scalars['Int'];
  linear_id: Scalars['String'];
  name: Scalars['String'];
};

export type LinearProjectMaxAggregate = {
  id?: Maybe<Scalars['Int']>;
  linear_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type LinearProjectMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LinearProjectMinAggregate = {
  id?: Maybe<Scalars['Int']>;
  linear_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type LinearProjectMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LinearProjectOrderByWithAggregationInput = {
  _avg?: InputMaybe<LinearProjectAvgOrderByAggregateInput>;
  _count?: InputMaybe<LinearProjectCountOrderByAggregateInput>;
  _max?: InputMaybe<LinearProjectMaxOrderByAggregateInput>;
  _min?: InputMaybe<LinearProjectMinOrderByAggregateInput>;
  _sum?: InputMaybe<LinearProjectSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LinearProjectOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  issues?: InputMaybe<LinearIssueOrderByRelationAggregateInput>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LinearProjectRelationFilter = {
  is?: InputMaybe<LinearProjectWhereInput>;
  isNot?: InputMaybe<LinearProjectWhereInput>;
};

export enum LinearProjectScalarFieldEnum {
  Id = 'id',
  LinearId = 'linear_id',
  Name = 'name'
}

export type LinearProjectScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LinearProjectScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LinearProjectScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LinearProjectScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  linear_id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type LinearProjectSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type LinearProjectSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type LinearProjectUpdateInput = {
  issues?: InputMaybe<LinearIssueUpdateManyWithoutProjectInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LinearProjectUpdateManyMutationInput = {
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LinearProjectUpdateOneWithoutIssuesInput = {
  connect?: InputMaybe<LinearProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LinearProjectCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<LinearProjectCreateWithoutIssuesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LinearProjectUpdateWithoutIssuesInput>;
  upsert?: InputMaybe<LinearProjectUpsertWithoutIssuesInput>;
};

export type LinearProjectUpdateWithoutIssuesInput = {
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LinearProjectUpsertWithoutIssuesInput = {
  create: LinearProjectCreateWithoutIssuesInput;
  update: LinearProjectUpdateWithoutIssuesInput;
};

export type LinearProjectWhereInput = {
  AND?: InputMaybe<Array<LinearProjectWhereInput>>;
  NOT?: InputMaybe<Array<LinearProjectWhereInput>>;
  OR?: InputMaybe<Array<LinearProjectWhereInput>>;
  id?: InputMaybe<IntFilter>;
  issues?: InputMaybe<LinearIssueListRelationFilter>;
  linear_id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type LinearProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  linear_id?: InputMaybe<Scalars['String']>;
};

export type LinearTeam = {
  _count?: Maybe<LinearTeamCount>;
  id: Scalars['Int'];
  issues: Array<LinearIssue>;
  key: Scalars['String'];
  linear_id: Scalars['String'];
  name: Scalars['String'];
};


export type LinearTeamIssuesArgs = {
  cursor?: InputMaybe<LinearIssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearIssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearIssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearIssueWhereInput>;
};

export type LinearTeamAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type LinearTeamAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type LinearTeamCount = {
  issues: Scalars['Int'];
};

export type LinearTeamCountAggregate = {
  _all: Scalars['Int'];
  id: Scalars['Int'];
  key: Scalars['Int'];
  linear_id: Scalars['Int'];
  name: Scalars['Int'];
};

export type LinearTeamCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LinearTeamCreateInput = {
  issues?: InputMaybe<LinearIssueCreateNestedManyWithoutTeamInput>;
  key: Scalars['String'];
  linear_id: Scalars['String'];
  name: Scalars['String'];
};

export type LinearTeamCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  key: Scalars['String'];
  linear_id: Scalars['String'];
  name: Scalars['String'];
};

export type LinearTeamCreateNestedOneWithoutIssuesInput = {
  connect?: InputMaybe<LinearTeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LinearTeamCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<LinearTeamCreateWithoutIssuesInput>;
};

export type LinearTeamCreateOrConnectWithoutIssuesInput = {
  create: LinearTeamCreateWithoutIssuesInput;
  where: LinearTeamWhereUniqueInput;
};

export type LinearTeamCreateWithoutIssuesInput = {
  key: Scalars['String'];
  linear_id: Scalars['String'];
  name: Scalars['String'];
};

export type LinearTeamGroupBy = {
  _avg?: Maybe<LinearTeamAvgAggregate>;
  _count?: Maybe<LinearTeamCountAggregate>;
  _max?: Maybe<LinearTeamMaxAggregate>;
  _min?: Maybe<LinearTeamMinAggregate>;
  _sum?: Maybe<LinearTeamSumAggregate>;
  id: Scalars['Int'];
  key: Scalars['String'];
  linear_id: Scalars['String'];
  name: Scalars['String'];
};

export type LinearTeamMaxAggregate = {
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  linear_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type LinearTeamMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LinearTeamMinAggregate = {
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  linear_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type LinearTeamMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LinearTeamOrderByWithAggregationInput = {
  _avg?: InputMaybe<LinearTeamAvgOrderByAggregateInput>;
  _count?: InputMaybe<LinearTeamCountOrderByAggregateInput>;
  _max?: InputMaybe<LinearTeamMaxOrderByAggregateInput>;
  _min?: InputMaybe<LinearTeamMinOrderByAggregateInput>;
  _sum?: InputMaybe<LinearTeamSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LinearTeamOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  issues?: InputMaybe<LinearIssueOrderByRelationAggregateInput>;
  key?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LinearTeamRelationFilter = {
  is?: InputMaybe<LinearTeamWhereInput>;
  isNot?: InputMaybe<LinearTeamWhereInput>;
};

export enum LinearTeamScalarFieldEnum {
  Id = 'id',
  Key = 'key',
  LinearId = 'linear_id',
  Name = 'name'
}

export type LinearTeamScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LinearTeamScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LinearTeamScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LinearTeamScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  key?: InputMaybe<StringWithAggregatesFilter>;
  linear_id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type LinearTeamSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type LinearTeamSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type LinearTeamUpdateInput = {
  issues?: InputMaybe<LinearIssueUpdateManyWithoutTeamInput>;
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LinearTeamUpdateManyMutationInput = {
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LinearTeamUpdateOneWithoutIssuesInput = {
  connect?: InputMaybe<LinearTeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LinearTeamCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<LinearTeamCreateWithoutIssuesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LinearTeamUpdateWithoutIssuesInput>;
  upsert?: InputMaybe<LinearTeamUpsertWithoutIssuesInput>;
};

export type LinearTeamUpdateWithoutIssuesInput = {
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LinearTeamUpsertWithoutIssuesInput = {
  create: LinearTeamCreateWithoutIssuesInput;
  update: LinearTeamUpdateWithoutIssuesInput;
};

export type LinearTeamWhereInput = {
  AND?: InputMaybe<Array<LinearTeamWhereInput>>;
  NOT?: InputMaybe<Array<LinearTeamWhereInput>>;
  OR?: InputMaybe<Array<LinearTeamWhereInput>>;
  id?: InputMaybe<IntFilter>;
  issues?: InputMaybe<LinearIssueListRelationFilter>;
  key?: InputMaybe<StringFilter>;
  linear_id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type LinearTeamWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  linear_id?: InputMaybe<Scalars['String']>;
};

export type LinearUser = {
  _count?: Maybe<LinearUserCount>;
  active: Scalars['Boolean'];
  assigned_issues: Array<LinearIssue>;
  createdAt?: Maybe<Scalars['DateTime']>;
  created_issues: Array<LinearIssue>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  linear_id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['Int']>;
};


export type LinearUserAssigned_IssuesArgs = {
  cursor?: InputMaybe<LinearIssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearIssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearIssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearIssueWhereInput>;
};


export type LinearUserCreated_IssuesArgs = {
  cursor?: InputMaybe<LinearIssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearIssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearIssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearIssueWhereInput>;
};

export type LinearUserAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type LinearUserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LinearUserCount = {
  assigned_issues: Scalars['Int'];
  created_issues: Scalars['Int'];
};

export type LinearUserCountAggregate = {
  _all: Scalars['Int'];
  active: Scalars['Int'];
  createdAt: Scalars['Int'];
  displayName: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  linear_id: Scalars['Int'];
  name: Scalars['Int'];
  url: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type LinearUserCountOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayName?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LinearUserCreateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  assigned_issues?: InputMaybe<LinearIssueCreateNestedManyWithoutAssigneeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  created_issues?: InputMaybe<LinearIssueCreateNestedManyWithoutCreatorInput>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  linear_id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserCreateNestedOneWithoutLinear_UsersInput>;
};

export type LinearUserCreateManyInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  linear_id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

export type LinearUserCreateManyUserInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  linear_id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearUserCreateManyUserInputEnvelope = {
  data: Array<LinearUserCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LinearUserCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<LinearUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LinearUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LinearUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<LinearUserCreateManyUserInputEnvelope>;
};

export type LinearUserCreateNestedOneWithoutAssigned_IssuesInput = {
  connect?: InputMaybe<LinearUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LinearUserCreateOrConnectWithoutAssigned_IssuesInput>;
  create?: InputMaybe<LinearUserCreateWithoutAssigned_IssuesInput>;
};

export type LinearUserCreateNestedOneWithoutCreated_IssuesInput = {
  connect?: InputMaybe<LinearUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LinearUserCreateOrConnectWithoutCreated_IssuesInput>;
  create?: InputMaybe<LinearUserCreateWithoutCreated_IssuesInput>;
};

export type LinearUserCreateOrConnectWithoutAssigned_IssuesInput = {
  create: LinearUserCreateWithoutAssigned_IssuesInput;
  where: LinearUserWhereUniqueInput;
};

export type LinearUserCreateOrConnectWithoutCreated_IssuesInput = {
  create: LinearUserCreateWithoutCreated_IssuesInput;
  where: LinearUserWhereUniqueInput;
};

export type LinearUserCreateOrConnectWithoutUserInput = {
  create: LinearUserCreateWithoutUserInput;
  where: LinearUserWhereUniqueInput;
};

export type LinearUserCreateWithoutAssigned_IssuesInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  created_issues?: InputMaybe<LinearIssueCreateNestedManyWithoutCreatorInput>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  linear_id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserCreateNestedOneWithoutLinear_UsersInput>;
};

export type LinearUserCreateWithoutCreated_IssuesInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  assigned_issues?: InputMaybe<LinearIssueCreateNestedManyWithoutAssigneeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  linear_id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserCreateNestedOneWithoutLinear_UsersInput>;
};

export type LinearUserCreateWithoutUserInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  assigned_issues?: InputMaybe<LinearIssueCreateNestedManyWithoutAssigneeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  created_issues?: InputMaybe<LinearIssueCreateNestedManyWithoutCreatorInput>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  linear_id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinearUserGroupBy = {
  _avg?: Maybe<LinearUserAvgAggregate>;
  _count?: Maybe<LinearUserCountAggregate>;
  _max?: Maybe<LinearUserMaxAggregate>;
  _min?: Maybe<LinearUserMinAggregate>;
  _sum?: Maybe<LinearUserSumAggregate>;
  active: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  linear_id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type LinearUserListRelationFilter = {
  every?: InputMaybe<LinearUserWhereInput>;
  none?: InputMaybe<LinearUserWhereInput>;
  some?: InputMaybe<LinearUserWhereInput>;
};

export type LinearUserMaxAggregate = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  linear_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type LinearUserMaxOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayName?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LinearUserMinAggregate = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  linear_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type LinearUserMinOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayName?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LinearUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LinearUserOrderByWithAggregationInput = {
  _avg?: InputMaybe<LinearUserAvgOrderByAggregateInput>;
  _count?: InputMaybe<LinearUserCountOrderByAggregateInput>;
  _max?: InputMaybe<LinearUserMaxOrderByAggregateInput>;
  _min?: InputMaybe<LinearUserMinOrderByAggregateInput>;
  _sum?: InputMaybe<LinearUserSumOrderByAggregateInput>;
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayName?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LinearUserOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  assigned_issues?: InputMaybe<LinearIssueOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  created_issues?: InputMaybe<LinearIssueOrderByRelationAggregateInput>;
  displayName?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linear_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export type LinearUserRelationFilter = {
  is?: InputMaybe<LinearUserWhereInput>;
  isNot?: InputMaybe<LinearUserWhereInput>;
};

export enum LinearUserScalarFieldEnum {
  Active = 'active',
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Email = 'email',
  Id = 'id',
  LinearId = 'linear_id',
  Name = 'name',
  Url = 'url',
  UserId = 'user_id'
}

export type LinearUserScalarWhereInput = {
  AND?: InputMaybe<Array<LinearUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<LinearUserScalarWhereInput>>;
  OR?: InputMaybe<Array<LinearUserScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  displayName?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  linear_id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  url?: InputMaybe<StringNullableFilter>;
  user_id?: InputMaybe<IntNullableFilter>;
};

export type LinearUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LinearUserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LinearUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LinearUserScalarWhereWithAggregatesInput>>;
  active?: InputMaybe<BoolWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  displayName?: InputMaybe<StringNullableWithAggregatesFilter>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  linear_id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  url?: InputMaybe<StringNullableWithAggregatesFilter>;
  user_id?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type LinearUserSumAggregate = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type LinearUserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LinearUserUpdateInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  assigned_issues?: InputMaybe<LinearIssueUpdateManyWithoutAssigneeInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  created_issues?: InputMaybe<LinearIssueUpdateManyWithoutCreatorInput>;
  displayName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutLinear_UsersInput>;
};

export type LinearUserUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  displayName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearUserUpdateManyWithWhereWithoutUserInput = {
  data: LinearUserUpdateManyMutationInput;
  where: LinearUserScalarWhereInput;
};

export type LinearUserUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<LinearUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LinearUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LinearUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<LinearUserCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<LinearUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LinearUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LinearUserWhereUniqueInput>>;
  set?: InputMaybe<Array<LinearUserWhereUniqueInput>>;
  update?: InputMaybe<Array<LinearUserUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<LinearUserUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<LinearUserUpsertWithWhereUniqueWithoutUserInput>>;
};

export type LinearUserUpdateOneWithoutAssigned_IssuesInput = {
  connect?: InputMaybe<LinearUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LinearUserCreateOrConnectWithoutAssigned_IssuesInput>;
  create?: InputMaybe<LinearUserCreateWithoutAssigned_IssuesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LinearUserUpdateWithoutAssigned_IssuesInput>;
  upsert?: InputMaybe<LinearUserUpsertWithoutAssigned_IssuesInput>;
};

export type LinearUserUpdateOneWithoutCreated_IssuesInput = {
  connect?: InputMaybe<LinearUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LinearUserCreateOrConnectWithoutCreated_IssuesInput>;
  create?: InputMaybe<LinearUserCreateWithoutCreated_IssuesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LinearUserUpdateWithoutCreated_IssuesInput>;
  upsert?: InputMaybe<LinearUserUpsertWithoutCreated_IssuesInput>;
};

export type LinearUserUpdateWithWhereUniqueWithoutUserInput = {
  data: LinearUserUpdateWithoutUserInput;
  where: LinearUserWhereUniqueInput;
};

export type LinearUserUpdateWithoutAssigned_IssuesInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  created_issues?: InputMaybe<LinearIssueUpdateManyWithoutCreatorInput>;
  displayName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutLinear_UsersInput>;
};

export type LinearUserUpdateWithoutCreated_IssuesInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  assigned_issues?: InputMaybe<LinearIssueUpdateManyWithoutAssigneeInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  displayName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutLinear_UsersInput>;
};

export type LinearUserUpdateWithoutUserInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  assigned_issues?: InputMaybe<LinearIssueUpdateManyWithoutAssigneeInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  created_issues?: InputMaybe<LinearIssueUpdateManyWithoutCreatorInput>;
  displayName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearUserUpsertWithWhereUniqueWithoutUserInput = {
  create: LinearUserCreateWithoutUserInput;
  update: LinearUserUpdateWithoutUserInput;
  where: LinearUserWhereUniqueInput;
};

export type LinearUserUpsertWithoutAssigned_IssuesInput = {
  create: LinearUserCreateWithoutAssigned_IssuesInput;
  update: LinearUserUpdateWithoutAssigned_IssuesInput;
};

export type LinearUserUpsertWithoutCreated_IssuesInput = {
  create: LinearUserCreateWithoutCreated_IssuesInput;
  update: LinearUserUpdateWithoutCreated_IssuesInput;
};

export type LinearUserWhereInput = {
  AND?: InputMaybe<Array<LinearUserWhereInput>>;
  NOT?: InputMaybe<Array<LinearUserWhereInput>>;
  OR?: InputMaybe<Array<LinearUserWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  assigned_issues?: InputMaybe<LinearIssueListRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  created_issues?: InputMaybe<LinearIssueListRelationFilter>;
  displayName?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  linear_id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  url?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntNullableFilter>;
};

export type LinearUserWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  linear_id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  createActivityType: ActivityType;
  createAttestation: Attestation;
  createAttestationConfidence: AttestationConfidence;
  createCategoryActivity: CategoryActivity;
  createCategoryActivityType: CategoryActivityType;
  createChainType: ChainType;
  createContribution: Contribution;
  createContributionStatus: ContributionStatus;
  createDiscordUser: DiscordUser;
  createGuild: Guild;
  createGuildActivityType: GuildActivityType;
  createGuildContribution: GuildContribution;
  createGuildUser: GuildUser;
  createJobRun: JobRun;
  createLinearCycle: LinearCycle;
  createLinearIssue: LinearIssue;
  createLinearProject: LinearProject;
  createLinearTeam: LinearTeam;
  createLinearUser: LinearUser;
  createManyActivityType: AffectedRowsOutput;
  createManyAttestation: AffectedRowsOutput;
  createManyAttestationConfidence: AffectedRowsOutput;
  createManyCategoryActivity: AffectedRowsOutput;
  createManyCategoryActivityType: AffectedRowsOutput;
  createManyChainType: AffectedRowsOutput;
  createManyContribution: AffectedRowsOutput;
  createManyContributionStatus: AffectedRowsOutput;
  createManyDiscordUser: AffectedRowsOutput;
  createManyGuild: AffectedRowsOutput;
  createManyGuildActivityType: AffectedRowsOutput;
  createManyGuildContribution: AffectedRowsOutput;
  createManyGuildUser: AffectedRowsOutput;
  createManyJobRun: AffectedRowsOutput;
  createManyLinearCycle: AffectedRowsOutput;
  createManyLinearIssue: AffectedRowsOutput;
  createManyLinearProject: AffectedRowsOutput;
  createManyLinearTeam: AffectedRowsOutput;
  createManyLinearUser: AffectedRowsOutput;
  createManyPartner: AffectedRowsOutput;
  createManyTwitterAccount: AffectedRowsOutput;
  createManyTwitterTweet: AffectedRowsOutput;
  createManyTwitterUser: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserActivity: AffectedRowsOutput;
  createOnChainUserContribution: Contribution;
  createPartner: Partner;
  createTwitterAccount: TwitterAccount;
  createTwitterTweet: TwitterTweet;
  createTwitterUser: TwitterUser;
  createUser: User;
  createUserActivity: UserActivity;
  createUserAttestation: Attestation;
  createUserContribution: Contribution;
  createUserCustom: User;
  createUserOnChainAttestation: Attestation;
  deleteActivityType?: Maybe<ActivityType>;
  deleteAttestation?: Maybe<Attestation>;
  deleteAttestationConfidence?: Maybe<AttestationConfidence>;
  deleteCategoryActivity?: Maybe<CategoryActivity>;
  deleteCategoryActivityType?: Maybe<CategoryActivityType>;
  deleteChainType?: Maybe<ChainType>;
  deleteContribution?: Maybe<Contribution>;
  deleteContributionStatus?: Maybe<ContributionStatus>;
  deleteDiscordUser?: Maybe<DiscordUser>;
  deleteGuild?: Maybe<Guild>;
  deleteGuildActivityType?: Maybe<GuildActivityType>;
  deleteGuildContribution?: Maybe<GuildContribution>;
  deleteGuildUser?: Maybe<GuildUser>;
  deleteJobRun?: Maybe<JobRun>;
  deleteLinearCycle?: Maybe<LinearCycle>;
  deleteLinearIssue?: Maybe<LinearIssue>;
  deleteLinearProject?: Maybe<LinearProject>;
  deleteLinearTeam?: Maybe<LinearTeam>;
  deleteLinearUser?: Maybe<LinearUser>;
  deleteManyActivityType: AffectedRowsOutput;
  deleteManyAttestation: AffectedRowsOutput;
  deleteManyAttestationConfidence: AffectedRowsOutput;
  deleteManyCategoryActivity: AffectedRowsOutput;
  deleteManyCategoryActivityType: AffectedRowsOutput;
  deleteManyChainType: AffectedRowsOutput;
  deleteManyContribution: AffectedRowsOutput;
  deleteManyContributionStatus: AffectedRowsOutput;
  deleteManyDiscordUser: AffectedRowsOutput;
  deleteManyGuild: AffectedRowsOutput;
  deleteManyGuildActivityType: AffectedRowsOutput;
  deleteManyGuildContribution: AffectedRowsOutput;
  deleteManyGuildUser: AffectedRowsOutput;
  deleteManyJobRun: AffectedRowsOutput;
  deleteManyLinearCycle: AffectedRowsOutput;
  deleteManyLinearIssue: AffectedRowsOutput;
  deleteManyLinearProject: AffectedRowsOutput;
  deleteManyLinearTeam: AffectedRowsOutput;
  deleteManyLinearUser: AffectedRowsOutput;
  deleteManyPartner: AffectedRowsOutput;
  deleteManyTwitterAccount: AffectedRowsOutput;
  deleteManyTwitterTweet: AffectedRowsOutput;
  deleteManyTwitterUser: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserActivity: AffectedRowsOutput;
  deletePartner?: Maybe<Partner>;
  deleteTwitterAccount?: Maybe<TwitterAccount>;
  deleteTwitterTweet?: Maybe<TwitterTweet>;
  deleteTwitterUser?: Maybe<TwitterUser>;
  deleteUser?: Maybe<User>;
  deleteUserActivity?: Maybe<UserActivity>;
  updateActivityType?: Maybe<ActivityType>;
  updateAttestation?: Maybe<Attestation>;
  updateAttestationConfidence?: Maybe<AttestationConfidence>;
  updateCategoryActivity?: Maybe<CategoryActivity>;
  updateCategoryActivityType?: Maybe<CategoryActivityType>;
  updateChainType?: Maybe<ChainType>;
  updateContribution?: Maybe<Contribution>;
  updateContributionStatus?: Maybe<ContributionStatus>;
  updateDiscordUser?: Maybe<DiscordUser>;
  updateGuild?: Maybe<Guild>;
  updateGuildActivityType?: Maybe<GuildActivityType>;
  updateGuildContribution?: Maybe<GuildContribution>;
  updateGuildUser?: Maybe<GuildUser>;
  updateJobRun?: Maybe<JobRun>;
  updateLinearCycle?: Maybe<LinearCycle>;
  updateLinearIssue?: Maybe<LinearIssue>;
  updateLinearProject?: Maybe<LinearProject>;
  updateLinearTeam?: Maybe<LinearTeam>;
  updateLinearUser?: Maybe<LinearUser>;
  updateManyActivityType: AffectedRowsOutput;
  updateManyAttestation: AffectedRowsOutput;
  updateManyAttestationConfidence: AffectedRowsOutput;
  updateManyCategoryActivity: AffectedRowsOutput;
  updateManyCategoryActivityType: AffectedRowsOutput;
  updateManyChainType: AffectedRowsOutput;
  updateManyContribution: AffectedRowsOutput;
  updateManyContributionStatus: AffectedRowsOutput;
  updateManyDiscordUser: AffectedRowsOutput;
  updateManyGuild: AffectedRowsOutput;
  updateManyGuildActivityType: AffectedRowsOutput;
  updateManyGuildContribution: AffectedRowsOutput;
  updateManyGuildUser: AffectedRowsOutput;
  updateManyJobRun: AffectedRowsOutput;
  updateManyLinearCycle: AffectedRowsOutput;
  updateManyLinearIssue: AffectedRowsOutput;
  updateManyLinearProject: AffectedRowsOutput;
  updateManyLinearTeam: AffectedRowsOutput;
  updateManyLinearUser: AffectedRowsOutput;
  updateManyPartner: AffectedRowsOutput;
  updateManyTwitterAccount: AffectedRowsOutput;
  updateManyTwitterTweet: AffectedRowsOutput;
  updateManyTwitterUser: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserActivity: AffectedRowsOutput;
  updatePartner?: Maybe<Partner>;
  updateTwitterAccount?: Maybe<TwitterAccount>;
  updateTwitterTweet?: Maybe<TwitterTweet>;
  updateTwitterUser?: Maybe<TwitterUser>;
  updateUser?: Maybe<User>;
  updateUserActivity?: Maybe<UserActivity>;
  updateUserContribution: Contribution;
  updateUserCustom: User;
  updateUserOnChainAttestation: Attestation;
  updateUserOnChainContribution: Contribution;
  upsertActivityType: ActivityType;
  upsertAttestation: Attestation;
  upsertAttestationConfidence: AttestationConfidence;
  upsertCategoryActivity: CategoryActivity;
  upsertCategoryActivityType: CategoryActivityType;
  upsertChainType: ChainType;
  upsertContribution: Contribution;
  upsertContributionStatus: ContributionStatus;
  upsertDiscordUser: DiscordUser;
  upsertGuild: Guild;
  upsertGuildActivityType: GuildActivityType;
  upsertGuildContribution: GuildContribution;
  upsertGuildUser: GuildUser;
  upsertJobRun: JobRun;
  upsertLinearCycle: LinearCycle;
  upsertLinearIssue: LinearIssue;
  upsertLinearProject: LinearProject;
  upsertLinearTeam: LinearTeam;
  upsertLinearUser: LinearUser;
  upsertPartner: Partner;
  upsertTwitterAccount: TwitterAccount;
  upsertTwitterTweet: TwitterTweet;
  upsertTwitterUser: TwitterUser;
  upsertUser: User;
  upsertUserActivity: UserActivity;
};


export type MutationCreateActivityTypeArgs = {
  data: ActivityTypeCreateInput;
};


export type MutationCreateAttestationArgs = {
  data: AttestationCreateInput;
};


export type MutationCreateAttestationConfidenceArgs = {
  data: AttestationConfidenceCreateInput;
};


export type MutationCreateCategoryActivityArgs = {
  data: CategoryActivityCreateInput;
};


export type MutationCreateCategoryActivityTypeArgs = {
  data: CategoryActivityTypeCreateInput;
};


export type MutationCreateChainTypeArgs = {
  data: ChainTypeCreateInput;
};


export type MutationCreateContributionArgs = {
  data: ContributionCreateInput;
};


export type MutationCreateContributionStatusArgs = {
  data: ContributionStatusCreateInput;
};


export type MutationCreateDiscordUserArgs = {
  data: DiscordUserCreateInput;
};


export type MutationCreateGuildArgs = {
  data: GuildCreateInput;
};


export type MutationCreateGuildActivityTypeArgs = {
  data: GuildActivityTypeCreateInput;
};


export type MutationCreateGuildContributionArgs = {
  data: GuildContributionCreateInput;
};


export type MutationCreateGuildUserArgs = {
  data: GuildUserCreateInput;
};


export type MutationCreateJobRunArgs = {
  data: JobRunCreateInput;
};


export type MutationCreateLinearCycleArgs = {
  data: LinearCycleCreateInput;
};


export type MutationCreateLinearIssueArgs = {
  data: LinearIssueCreateInput;
};


export type MutationCreateLinearProjectArgs = {
  data: LinearProjectCreateInput;
};


export type MutationCreateLinearTeamArgs = {
  data: LinearTeamCreateInput;
};


export type MutationCreateLinearUserArgs = {
  data: LinearUserCreateInput;
};


export type MutationCreateManyActivityTypeArgs = {
  data: Array<ActivityTypeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyAttestationArgs = {
  data: Array<AttestationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyAttestationConfidenceArgs = {
  data: Array<AttestationConfidenceCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCategoryActivityArgs = {
  data: Array<CategoryActivityCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCategoryActivityTypeArgs = {
  data: Array<CategoryActivityTypeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyChainTypeArgs = {
  data: Array<ChainTypeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyContributionArgs = {
  data: Array<ContributionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyContributionStatusArgs = {
  data: Array<ContributionStatusCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyDiscordUserArgs = {
  data: Array<DiscordUserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyGuildArgs = {
  data: Array<GuildCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyGuildActivityTypeArgs = {
  data: Array<GuildActivityTypeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyGuildContributionArgs = {
  data: Array<GuildContributionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyGuildUserArgs = {
  data: Array<GuildUserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyJobRunArgs = {
  data: Array<JobRunCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyLinearCycleArgs = {
  data: Array<LinearCycleCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyLinearIssueArgs = {
  data: Array<LinearIssueCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyLinearProjectArgs = {
  data: Array<LinearProjectCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyLinearTeamArgs = {
  data: Array<LinearTeamCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyLinearUserArgs = {
  data: Array<LinearUserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPartnerArgs = {
  data: Array<PartnerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTwitterAccountArgs = {
  data: Array<TwitterAccountCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTwitterTweetArgs = {
  data: Array<TwitterTweetCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTwitterUserArgs = {
  data: Array<TwitterUserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserActivityArgs = {
  data: Array<UserActivityCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOnChainUserContributionArgs = {
  data: UserOnChainContributionCreateInput;
};


export type MutationCreatePartnerArgs = {
  data: PartnerCreateInput;
};


export type MutationCreateTwitterAccountArgs = {
  data: TwitterAccountCreateInput;
};


export type MutationCreateTwitterTweetArgs = {
  data: TwitterTweetCreateInput;
};


export type MutationCreateTwitterUserArgs = {
  data: TwitterUserCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserActivityArgs = {
  data: UserActivityCreateInput;
};


export type MutationCreateUserAttestationArgs = {
  data: AttestationUserCreateInput;
};


export type MutationCreateUserContributionArgs = {
  data: UserContributionCreateInput;
};


export type MutationCreateUserCustomArgs = {
  data: UserCreateCustomInput;
};


export type MutationCreateUserOnChainAttestationArgs = {
  data: AttestationUserOnChainCreateInput;
};


export type MutationDeleteActivityTypeArgs = {
  where: ActivityTypeWhereUniqueInput;
};


export type MutationDeleteAttestationArgs = {
  where: AttestationWhereUniqueInput;
};


export type MutationDeleteAttestationConfidenceArgs = {
  where: AttestationConfidenceWhereUniqueInput;
};


export type MutationDeleteCategoryActivityArgs = {
  where: CategoryActivityWhereUniqueInput;
};


export type MutationDeleteCategoryActivityTypeArgs = {
  where: CategoryActivityTypeWhereUniqueInput;
};


export type MutationDeleteChainTypeArgs = {
  where: ChainTypeWhereUniqueInput;
};


export type MutationDeleteContributionArgs = {
  where: ContributionWhereUniqueInput;
};


export type MutationDeleteContributionStatusArgs = {
  where: ContributionStatusWhereUniqueInput;
};


export type MutationDeleteDiscordUserArgs = {
  where: DiscordUserWhereUniqueInput;
};


export type MutationDeleteGuildArgs = {
  where: GuildWhereUniqueInput;
};


export type MutationDeleteGuildActivityTypeArgs = {
  where: GuildActivityTypeWhereUniqueInput;
};


export type MutationDeleteGuildContributionArgs = {
  where: GuildContributionWhereUniqueInput;
};


export type MutationDeleteGuildUserArgs = {
  where: GuildUserWhereUniqueInput;
};


export type MutationDeleteJobRunArgs = {
  where: JobRunWhereUniqueInput;
};


export type MutationDeleteLinearCycleArgs = {
  where: LinearCycleWhereUniqueInput;
};


export type MutationDeleteLinearIssueArgs = {
  where: LinearIssueWhereUniqueInput;
};


export type MutationDeleteLinearProjectArgs = {
  where: LinearProjectWhereUniqueInput;
};


export type MutationDeleteLinearTeamArgs = {
  where: LinearTeamWhereUniqueInput;
};


export type MutationDeleteLinearUserArgs = {
  where: LinearUserWhereUniqueInput;
};


export type MutationDeleteManyActivityTypeArgs = {
  where?: InputMaybe<ActivityTypeWhereInput>;
};


export type MutationDeleteManyAttestationArgs = {
  where?: InputMaybe<AttestationWhereInput>;
};


export type MutationDeleteManyAttestationConfidenceArgs = {
  where?: InputMaybe<AttestationConfidenceWhereInput>;
};


export type MutationDeleteManyCategoryActivityArgs = {
  where?: InputMaybe<CategoryActivityWhereInput>;
};


export type MutationDeleteManyCategoryActivityTypeArgs = {
  where?: InputMaybe<CategoryActivityTypeWhereInput>;
};


export type MutationDeleteManyChainTypeArgs = {
  where?: InputMaybe<ChainTypeWhereInput>;
};


export type MutationDeleteManyContributionArgs = {
  where?: InputMaybe<ContributionWhereInput>;
};


export type MutationDeleteManyContributionStatusArgs = {
  where?: InputMaybe<ContributionStatusWhereInput>;
};


export type MutationDeleteManyDiscordUserArgs = {
  where?: InputMaybe<DiscordUserWhereInput>;
};


export type MutationDeleteManyGuildArgs = {
  where?: InputMaybe<GuildWhereInput>;
};


export type MutationDeleteManyGuildActivityTypeArgs = {
  where?: InputMaybe<GuildActivityTypeWhereInput>;
};


export type MutationDeleteManyGuildContributionArgs = {
  where?: InputMaybe<GuildContributionWhereInput>;
};


export type MutationDeleteManyGuildUserArgs = {
  where?: InputMaybe<GuildUserWhereInput>;
};


export type MutationDeleteManyJobRunArgs = {
  where?: InputMaybe<JobRunWhereInput>;
};


export type MutationDeleteManyLinearCycleArgs = {
  where?: InputMaybe<LinearCycleWhereInput>;
};


export type MutationDeleteManyLinearIssueArgs = {
  where?: InputMaybe<LinearIssueWhereInput>;
};


export type MutationDeleteManyLinearProjectArgs = {
  where?: InputMaybe<LinearProjectWhereInput>;
};


export type MutationDeleteManyLinearTeamArgs = {
  where?: InputMaybe<LinearTeamWhereInput>;
};


export type MutationDeleteManyLinearUserArgs = {
  where?: InputMaybe<LinearUserWhereInput>;
};


export type MutationDeleteManyPartnerArgs = {
  where?: InputMaybe<PartnerWhereInput>;
};


export type MutationDeleteManyTwitterAccountArgs = {
  where?: InputMaybe<TwitterAccountWhereInput>;
};


export type MutationDeleteManyTwitterTweetArgs = {
  where?: InputMaybe<TwitterTweetWhereInput>;
};


export type MutationDeleteManyTwitterUserArgs = {
  where?: InputMaybe<TwitterUserWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserActivityArgs = {
  where?: InputMaybe<UserActivityWhereInput>;
};


export type MutationDeletePartnerArgs = {
  where: PartnerWhereUniqueInput;
};


export type MutationDeleteTwitterAccountArgs = {
  where: TwitterAccountWhereUniqueInput;
};


export type MutationDeleteTwitterTweetArgs = {
  where: TwitterTweetWhereUniqueInput;
};


export type MutationDeleteTwitterUserArgs = {
  where: TwitterUserWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserActivityArgs = {
  where: UserActivityWhereUniqueInput;
};


export type MutationUpdateActivityTypeArgs = {
  data: ActivityTypeUpdateInput;
  where: ActivityTypeWhereUniqueInput;
};


export type MutationUpdateAttestationArgs = {
  data: AttestationUpdateInput;
  where: AttestationWhereUniqueInput;
};


export type MutationUpdateAttestationConfidenceArgs = {
  data: AttestationConfidenceUpdateInput;
  where: AttestationConfidenceWhereUniqueInput;
};


export type MutationUpdateCategoryActivityArgs = {
  data: CategoryActivityUpdateInput;
  where: CategoryActivityWhereUniqueInput;
};


export type MutationUpdateCategoryActivityTypeArgs = {
  data: CategoryActivityTypeUpdateInput;
  where: CategoryActivityTypeWhereUniqueInput;
};


export type MutationUpdateChainTypeArgs = {
  data: ChainTypeUpdateInput;
  where: ChainTypeWhereUniqueInput;
};


export type MutationUpdateContributionArgs = {
  data: ContributionUpdateInput;
  where: ContributionWhereUniqueInput;
};


export type MutationUpdateContributionStatusArgs = {
  data: ContributionStatusUpdateInput;
  where: ContributionStatusWhereUniqueInput;
};


export type MutationUpdateDiscordUserArgs = {
  data: DiscordUserUpdateInput;
  where: DiscordUserWhereUniqueInput;
};


export type MutationUpdateGuildArgs = {
  data: GuildUpdateInput;
  where: GuildWhereUniqueInput;
};


export type MutationUpdateGuildActivityTypeArgs = {
  data: GuildActivityTypeUpdateInput;
  where: GuildActivityTypeWhereUniqueInput;
};


export type MutationUpdateGuildContributionArgs = {
  data: GuildContributionUpdateInput;
  where: GuildContributionWhereUniqueInput;
};


export type MutationUpdateGuildUserArgs = {
  data: GuildUserUpdateInput;
  where: GuildUserWhereUniqueInput;
};


export type MutationUpdateJobRunArgs = {
  data: JobRunUpdateInput;
  where: JobRunWhereUniqueInput;
};


export type MutationUpdateLinearCycleArgs = {
  data: LinearCycleUpdateInput;
  where: LinearCycleWhereUniqueInput;
};


export type MutationUpdateLinearIssueArgs = {
  data: LinearIssueUpdateInput;
  where: LinearIssueWhereUniqueInput;
};


export type MutationUpdateLinearProjectArgs = {
  data: LinearProjectUpdateInput;
  where: LinearProjectWhereUniqueInput;
};


export type MutationUpdateLinearTeamArgs = {
  data: LinearTeamUpdateInput;
  where: LinearTeamWhereUniqueInput;
};


export type MutationUpdateLinearUserArgs = {
  data: LinearUserUpdateInput;
  where: LinearUserWhereUniqueInput;
};


export type MutationUpdateManyActivityTypeArgs = {
  data: ActivityTypeUpdateManyMutationInput;
  where?: InputMaybe<ActivityTypeWhereInput>;
};


export type MutationUpdateManyAttestationArgs = {
  data: AttestationUpdateManyMutationInput;
  where?: InputMaybe<AttestationWhereInput>;
};


export type MutationUpdateManyAttestationConfidenceArgs = {
  data: AttestationConfidenceUpdateManyMutationInput;
  where?: InputMaybe<AttestationConfidenceWhereInput>;
};


export type MutationUpdateManyCategoryActivityArgs = {
  data: CategoryActivityUpdateManyMutationInput;
  where?: InputMaybe<CategoryActivityWhereInput>;
};


export type MutationUpdateManyCategoryActivityTypeArgs = {
  data: CategoryActivityTypeUpdateManyMutationInput;
  where?: InputMaybe<CategoryActivityTypeWhereInput>;
};


export type MutationUpdateManyChainTypeArgs = {
  data: ChainTypeUpdateManyMutationInput;
  where?: InputMaybe<ChainTypeWhereInput>;
};


export type MutationUpdateManyContributionArgs = {
  data: ContributionUpdateManyMutationInput;
  where?: InputMaybe<ContributionWhereInput>;
};


export type MutationUpdateManyContributionStatusArgs = {
  data: ContributionStatusUpdateManyMutationInput;
  where?: InputMaybe<ContributionStatusWhereInput>;
};


export type MutationUpdateManyDiscordUserArgs = {
  data: DiscordUserUpdateManyMutationInput;
  where?: InputMaybe<DiscordUserWhereInput>;
};


export type MutationUpdateManyGuildArgs = {
  data: GuildUpdateManyMutationInput;
  where?: InputMaybe<GuildWhereInput>;
};


export type MutationUpdateManyGuildActivityTypeArgs = {
  data: GuildActivityTypeUpdateManyMutationInput;
  where?: InputMaybe<GuildActivityTypeWhereInput>;
};


export type MutationUpdateManyGuildContributionArgs = {
  data: GuildContributionUpdateManyMutationInput;
  where?: InputMaybe<GuildContributionWhereInput>;
};


export type MutationUpdateManyGuildUserArgs = {
  data: GuildUserUpdateManyMutationInput;
  where?: InputMaybe<GuildUserWhereInput>;
};


export type MutationUpdateManyJobRunArgs = {
  data: JobRunUpdateManyMutationInput;
  where?: InputMaybe<JobRunWhereInput>;
};


export type MutationUpdateManyLinearCycleArgs = {
  data: LinearCycleUpdateManyMutationInput;
  where?: InputMaybe<LinearCycleWhereInput>;
};


export type MutationUpdateManyLinearIssueArgs = {
  data: LinearIssueUpdateManyMutationInput;
  where?: InputMaybe<LinearIssueWhereInput>;
};


export type MutationUpdateManyLinearProjectArgs = {
  data: LinearProjectUpdateManyMutationInput;
  where?: InputMaybe<LinearProjectWhereInput>;
};


export type MutationUpdateManyLinearTeamArgs = {
  data: LinearTeamUpdateManyMutationInput;
  where?: InputMaybe<LinearTeamWhereInput>;
};


export type MutationUpdateManyLinearUserArgs = {
  data: LinearUserUpdateManyMutationInput;
  where?: InputMaybe<LinearUserWhereInput>;
};


export type MutationUpdateManyPartnerArgs = {
  data: PartnerUpdateManyMutationInput;
  where?: InputMaybe<PartnerWhereInput>;
};


export type MutationUpdateManyTwitterAccountArgs = {
  data: TwitterAccountUpdateManyMutationInput;
  where?: InputMaybe<TwitterAccountWhereInput>;
};


export type MutationUpdateManyTwitterTweetArgs = {
  data: TwitterTweetUpdateManyMutationInput;
  where?: InputMaybe<TwitterTweetWhereInput>;
};


export type MutationUpdateManyTwitterUserArgs = {
  data: TwitterUserUpdateManyMutationInput;
  where?: InputMaybe<TwitterUserWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserActivityArgs = {
  data: UserActivityUpdateManyMutationInput;
  where?: InputMaybe<UserActivityWhereInput>;
};


export type MutationUpdatePartnerArgs = {
  data: PartnerUpdateInput;
  where: PartnerWhereUniqueInput;
};


export type MutationUpdateTwitterAccountArgs = {
  data: TwitterAccountUpdateInput;
  where: TwitterAccountWhereUniqueInput;
};


export type MutationUpdateTwitterTweetArgs = {
  data: TwitterTweetUpdateInput;
  where: TwitterTweetWhereUniqueInput;
};


export type MutationUpdateTwitterUserArgs = {
  data: TwitterUserUpdateInput;
  where: TwitterUserWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserActivityArgs = {
  data: UserActivityUpdateInput;
  where: UserActivityWhereUniqueInput;
};


export type MutationUpdateUserContributionArgs = {
  data: UserContributionUpdateInput;
};


export type MutationUpdateUserCustomArgs = {
  data: UserUpdateCustomInput;
};


export type MutationUpdateUserOnChainAttestationArgs = {
  data: AttestationUserOnChainUpdateInput;
};


export type MutationUpdateUserOnChainContributionArgs = {
  data: UserOnChainContributionUpdateInput;
};


export type MutationUpsertActivityTypeArgs = {
  create: ActivityTypeCreateInput;
  update: ActivityTypeUpdateInput;
  where: ActivityTypeWhereUniqueInput;
};


export type MutationUpsertAttestationArgs = {
  create: AttestationCreateInput;
  update: AttestationUpdateInput;
  where: AttestationWhereUniqueInput;
};


export type MutationUpsertAttestationConfidenceArgs = {
  create: AttestationConfidenceCreateInput;
  update: AttestationConfidenceUpdateInput;
  where: AttestationConfidenceWhereUniqueInput;
};


export type MutationUpsertCategoryActivityArgs = {
  create: CategoryActivityCreateInput;
  update: CategoryActivityUpdateInput;
  where: CategoryActivityWhereUniqueInput;
};


export type MutationUpsertCategoryActivityTypeArgs = {
  create: CategoryActivityTypeCreateInput;
  update: CategoryActivityTypeUpdateInput;
  where: CategoryActivityTypeWhereUniqueInput;
};


export type MutationUpsertChainTypeArgs = {
  create: ChainTypeCreateInput;
  update: ChainTypeUpdateInput;
  where: ChainTypeWhereUniqueInput;
};


export type MutationUpsertContributionArgs = {
  create: ContributionCreateInput;
  update: ContributionUpdateInput;
  where: ContributionWhereUniqueInput;
};


export type MutationUpsertContributionStatusArgs = {
  create: ContributionStatusCreateInput;
  update: ContributionStatusUpdateInput;
  where: ContributionStatusWhereUniqueInput;
};


export type MutationUpsertDiscordUserArgs = {
  create: DiscordUserCreateInput;
  update: DiscordUserUpdateInput;
  where: DiscordUserWhereUniqueInput;
};


export type MutationUpsertGuildArgs = {
  create: GuildCreateInput;
  update: GuildUpdateInput;
  where: GuildWhereUniqueInput;
};


export type MutationUpsertGuildActivityTypeArgs = {
  create: GuildActivityTypeCreateInput;
  update: GuildActivityTypeUpdateInput;
  where: GuildActivityTypeWhereUniqueInput;
};


export type MutationUpsertGuildContributionArgs = {
  create: GuildContributionCreateInput;
  update: GuildContributionUpdateInput;
  where: GuildContributionWhereUniqueInput;
};


export type MutationUpsertGuildUserArgs = {
  create: GuildUserCreateInput;
  update: GuildUserUpdateInput;
  where: GuildUserWhereUniqueInput;
};


export type MutationUpsertJobRunArgs = {
  create: JobRunCreateInput;
  update: JobRunUpdateInput;
  where: JobRunWhereUniqueInput;
};


export type MutationUpsertLinearCycleArgs = {
  create: LinearCycleCreateInput;
  update: LinearCycleUpdateInput;
  where: LinearCycleWhereUniqueInput;
};


export type MutationUpsertLinearIssueArgs = {
  create: LinearIssueCreateInput;
  update: LinearIssueUpdateInput;
  where: LinearIssueWhereUniqueInput;
};


export type MutationUpsertLinearProjectArgs = {
  create: LinearProjectCreateInput;
  update: LinearProjectUpdateInput;
  where: LinearProjectWhereUniqueInput;
};


export type MutationUpsertLinearTeamArgs = {
  create: LinearTeamCreateInput;
  update: LinearTeamUpdateInput;
  where: LinearTeamWhereUniqueInput;
};


export type MutationUpsertLinearUserArgs = {
  create: LinearUserCreateInput;
  update: LinearUserUpdateInput;
  where: LinearUserWhereUniqueInput;
};


export type MutationUpsertPartnerArgs = {
  create: PartnerCreateInput;
  update: PartnerUpdateInput;
  where: PartnerWhereUniqueInput;
};


export type MutationUpsertTwitterAccountArgs = {
  create: TwitterAccountCreateInput;
  update: TwitterAccountUpdateInput;
  where: TwitterAccountWhereUniqueInput;
};


export type MutationUpsertTwitterTweetArgs = {
  create: TwitterTweetCreateInput;
  update: TwitterTweetUpdateInput;
  where: TwitterTweetWhereUniqueInput;
};


export type MutationUpsertTwitterUserArgs = {
  create: TwitterUserCreateInput;
  update: TwitterUserUpdateInput;
  where: TwitterUserWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertUserActivityArgs = {
  create: UserActivityCreateInput;
  update: UserActivityUpdateInput;
  where: UserActivityWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Partner = {
  contribution: Contribution;
  contribution_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  user_id: Scalars['Int'];
};

export type PartnerAvgAggregate = {
  contribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type PartnerAvgOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type PartnerCountAggregate = {
  _all: Scalars['Int'];
  contribution_id: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type PartnerCountOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type PartnerCreateInput = {
  contribution: ContributionCreateNestedOneWithoutPartnersInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionPartnersInput;
};

export type PartnerCreateManyContributionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type PartnerCreateManyContributionInputEnvelope = {
  data: Array<PartnerCreateManyContributionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PartnerCreateManyInput = {
  contribution_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type PartnerCreateManyUserInput = {
  contribution_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PartnerCreateManyUserInputEnvelope = {
  data: Array<PartnerCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PartnerCreateNestedManyWithoutContributionInput = {
  connect?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PartnerCreateOrConnectWithoutContributionInput>>;
  create?: InputMaybe<Array<PartnerCreateWithoutContributionInput>>;
  createMany?: InputMaybe<PartnerCreateManyContributionInputEnvelope>;
};

export type PartnerCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PartnerCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PartnerCreateWithoutUserInput>>;
  createMany?: InputMaybe<PartnerCreateManyUserInputEnvelope>;
};

export type PartnerCreateOrConnectWithoutContributionInput = {
  create: PartnerCreateWithoutContributionInput;
  where: PartnerWhereUniqueInput;
};

export type PartnerCreateOrConnectWithoutUserInput = {
  create: PartnerCreateWithoutUserInput;
  where: PartnerWhereUniqueInput;
};

export type PartnerCreateWithoutContributionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionPartnersInput;
};

export type PartnerCreateWithoutUserInput = {
  contribution: ContributionCreateNestedOneWithoutPartnersInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PartnerGroupBy = {
  _avg?: Maybe<PartnerAvgAggregate>;
  _count?: Maybe<PartnerCountAggregate>;
  _max?: Maybe<PartnerMaxAggregate>;
  _min?: Maybe<PartnerMinAggregate>;
  _sum?: Maybe<PartnerSumAggregate>;
  contribution_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user_id: Scalars['Int'];
};

export type PartnerListRelationFilter = {
  every?: InputMaybe<PartnerWhereInput>;
  none?: InputMaybe<PartnerWhereInput>;
  some?: InputMaybe<PartnerWhereInput>;
};

export type PartnerMaxAggregate = {
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type PartnerMaxOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type PartnerMinAggregate = {
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type PartnerMinOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type PartnerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PartnerOrderByWithAggregationInput = {
  _avg?: InputMaybe<PartnerAvgOrderByAggregateInput>;
  _count?: InputMaybe<PartnerCountOrderByAggregateInput>;
  _max?: InputMaybe<PartnerMaxOrderByAggregateInput>;
  _min?: InputMaybe<PartnerMinOrderByAggregateInput>;
  _sum?: InputMaybe<PartnerSumOrderByAggregateInput>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type PartnerOrderByWithRelationInput = {
  contribution?: InputMaybe<ContributionOrderByWithRelationInput>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum PartnerScalarFieldEnum {
  ContributionId = 'contribution_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type PartnerScalarWhereInput = {
  AND?: InputMaybe<Array<PartnerScalarWhereInput>>;
  NOT?: InputMaybe<Array<PartnerScalarWhereInput>>;
  OR?: InputMaybe<Array<PartnerScalarWhereInput>>;
  contribution_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type PartnerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PartnerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PartnerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PartnerScalarWhereWithAggregatesInput>>;
  contribution_id?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type PartnerSumAggregate = {
  contribution_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type PartnerSumOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type PartnerUpdateInput = {
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutPartnersInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionPartnersInput>;
};

export type PartnerUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PartnerUpdateManyWithWhereWithoutContributionInput = {
  data: PartnerUpdateManyMutationInput;
  where: PartnerScalarWhereInput;
};

export type PartnerUpdateManyWithWhereWithoutUserInput = {
  data: PartnerUpdateManyMutationInput;
  where: PartnerScalarWhereInput;
};

export type PartnerUpdateManyWithoutContributionInput = {
  connect?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PartnerCreateOrConnectWithoutContributionInput>>;
  create?: InputMaybe<Array<PartnerCreateWithoutContributionInput>>;
  createMany?: InputMaybe<PartnerCreateManyContributionInputEnvelope>;
  delete?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PartnerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  set?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  update?: InputMaybe<Array<PartnerUpdateWithWhereUniqueWithoutContributionInput>>;
  updateMany?: InputMaybe<Array<PartnerUpdateManyWithWhereWithoutContributionInput>>;
  upsert?: InputMaybe<Array<PartnerUpsertWithWhereUniqueWithoutContributionInput>>;
};

export type PartnerUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PartnerCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PartnerCreateWithoutUserInput>>;
  createMany?: InputMaybe<PartnerCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PartnerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  set?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  update?: InputMaybe<Array<PartnerUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PartnerUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PartnerUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PartnerUpdateWithWhereUniqueWithoutContributionInput = {
  data: PartnerUpdateWithoutContributionInput;
  where: PartnerWhereUniqueInput;
};

export type PartnerUpdateWithWhereUniqueWithoutUserInput = {
  data: PartnerUpdateWithoutUserInput;
  where: PartnerWhereUniqueInput;
};

export type PartnerUpdateWithoutContributionInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionPartnersInput>;
};

export type PartnerUpdateWithoutUserInput = {
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutPartnersInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PartnerUpsertWithWhereUniqueWithoutContributionInput = {
  create: PartnerCreateWithoutContributionInput;
  update: PartnerUpdateWithoutContributionInput;
  where: PartnerWhereUniqueInput;
};

export type PartnerUpsertWithWhereUniqueWithoutUserInput = {
  create: PartnerCreateWithoutUserInput;
  update: PartnerUpdateWithoutUserInput;
  where: PartnerWhereUniqueInput;
};

export type PartnerUser_IdContribution_IdCompoundUniqueInput = {
  contribution_id: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type PartnerWhereInput = {
  AND?: InputMaybe<Array<PartnerWhereInput>>;
  NOT?: InputMaybe<Array<PartnerWhereInput>>;
  OR?: InputMaybe<Array<PartnerWhereInput>>;
  contribution?: InputMaybe<ContributionRelationFilter>;
  contribution_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type PartnerWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  user_id_contribution_id?: InputMaybe<PartnerUser_IdContribution_IdCompoundUniqueInput>;
};

export type Query = {
  activityType?: Maybe<ActivityType>;
  activityTypes: Array<ActivityType>;
  aggregateActivityType: AggregateActivityType;
  aggregateAttestation: AggregateAttestation;
  aggregateAttestationConfidence: AggregateAttestationConfidence;
  aggregateCategoryActivity: AggregateCategoryActivity;
  aggregateCategoryActivityType: AggregateCategoryActivityType;
  aggregateChainType: AggregateChainType;
  aggregateContribution: AggregateContribution;
  aggregateContributionStatus: AggregateContributionStatus;
  aggregateDiscordUser: AggregateDiscordUser;
  aggregateGuild: AggregateGuild;
  aggregateGuildActivityType: AggregateGuildActivityType;
  aggregateGuildContribution: AggregateGuildContribution;
  aggregateGuildUser: AggregateGuildUser;
  aggregateJobRun: AggregateJobRun;
  aggregateLinearCycle: AggregateLinearCycle;
  aggregateLinearIssue: AggregateLinearIssue;
  aggregateLinearProject: AggregateLinearProject;
  aggregateLinearTeam: AggregateLinearTeam;
  aggregateLinearUser: AggregateLinearUser;
  aggregatePartner: AggregatePartner;
  aggregateTwitterAccount: AggregateTwitterAccount;
  aggregateTwitterTweet: AggregateTwitterTweet;
  aggregateTwitterUser: AggregateTwitterUser;
  aggregateUser: AggregateUser;
  aggregateUserActivity: AggregateUserActivity;
  attestation?: Maybe<Attestation>;
  attestationConfidence?: Maybe<AttestationConfidence>;
  attestationConfidences: Array<AttestationConfidence>;
  attestations: Array<Attestation>;
  categoryActivities: Array<CategoryActivity>;
  categoryActivity?: Maybe<CategoryActivity>;
  categoryActivityType?: Maybe<CategoryActivityType>;
  categoryActivityTypes: Array<CategoryActivityType>;
  chainType?: Maybe<ChainType>;
  chainTypes: Array<ChainType>;
  contribution?: Maybe<Contribution>;
  contributionStatus?: Maybe<ContributionStatus>;
  contributionStatuses: Array<ContributionStatus>;
  contributions: Array<Contribution>;
  discordUser?: Maybe<DiscordUser>;
  discordUsers: Array<DiscordUser>;
  findFirstActivityType?: Maybe<ActivityType>;
  findFirstAttestation?: Maybe<Attestation>;
  findFirstAttestationConfidence?: Maybe<AttestationConfidence>;
  findFirstCategoryActivity?: Maybe<CategoryActivity>;
  findFirstCategoryActivityType?: Maybe<CategoryActivityType>;
  findFirstChainType?: Maybe<ChainType>;
  findFirstContribution?: Maybe<Contribution>;
  findFirstContributionStatus?: Maybe<ContributionStatus>;
  findFirstDiscordUser?: Maybe<DiscordUser>;
  findFirstGuild?: Maybe<Guild>;
  findFirstGuildActivityType?: Maybe<GuildActivityType>;
  findFirstGuildContribution?: Maybe<GuildContribution>;
  findFirstGuildUser?: Maybe<GuildUser>;
  findFirstJobRun?: Maybe<JobRun>;
  findFirstLinearCycle?: Maybe<LinearCycle>;
  findFirstLinearIssue?: Maybe<LinearIssue>;
  findFirstLinearProject?: Maybe<LinearProject>;
  findFirstLinearTeam?: Maybe<LinearTeam>;
  findFirstLinearUser?: Maybe<LinearUser>;
  findFirstPartner?: Maybe<Partner>;
  findFirstTwitterAccount?: Maybe<TwitterAccount>;
  findFirstTwitterTweet?: Maybe<TwitterTweet>;
  findFirstTwitterUser?: Maybe<TwitterUser>;
  findFirstUser?: Maybe<User>;
  findFirstUserActivity?: Maybe<UserActivity>;
  getUser: User;
  groupByActivityType: Array<ActivityTypeGroupBy>;
  groupByAttestation: Array<AttestationGroupBy>;
  groupByAttestationConfidence: Array<AttestationConfidenceGroupBy>;
  groupByCategoryActivity: Array<CategoryActivityGroupBy>;
  groupByCategoryActivityType: Array<CategoryActivityTypeGroupBy>;
  groupByChainType: Array<ChainTypeGroupBy>;
  groupByContribution: Array<ContributionGroupBy>;
  groupByContributionStatus: Array<ContributionStatusGroupBy>;
  groupByDiscordUser: Array<DiscordUserGroupBy>;
  groupByGuild: Array<GuildGroupBy>;
  groupByGuildActivityType: Array<GuildActivityTypeGroupBy>;
  groupByGuildContribution: Array<GuildContributionGroupBy>;
  groupByGuildUser: Array<GuildUserGroupBy>;
  groupByJobRun: Array<JobRunGroupBy>;
  groupByLinearCycle: Array<LinearCycleGroupBy>;
  groupByLinearIssue: Array<LinearIssueGroupBy>;
  groupByLinearProject: Array<LinearProjectGroupBy>;
  groupByLinearTeam: Array<LinearTeamGroupBy>;
  groupByLinearUser: Array<LinearUserGroupBy>;
  groupByPartner: Array<PartnerGroupBy>;
  groupByTwitterAccount: Array<TwitterAccountGroupBy>;
  groupByTwitterTweet: Array<TwitterTweetGroupBy>;
  groupByTwitterUser: Array<TwitterUserGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserActivity: Array<UserActivityGroupBy>;
  guild?: Maybe<Guild>;
  guildActivityType?: Maybe<GuildActivityType>;
  guildActivityTypes: Array<GuildActivityType>;
  guildContribution?: Maybe<GuildContribution>;
  guildContributions: Array<GuildContribution>;
  guildUser?: Maybe<GuildUser>;
  guildUsers: Array<GuildUser>;
  guilds: Array<Guild>;
  jobRun?: Maybe<JobRun>;
  jobRuns: Array<JobRun>;
  linearCycle?: Maybe<LinearCycle>;
  linearCycles: Array<LinearCycle>;
  linearIssue?: Maybe<LinearIssue>;
  linearIssues: Array<LinearIssue>;
  linearProject?: Maybe<LinearProject>;
  linearProjects: Array<LinearProject>;
  linearTeam?: Maybe<LinearTeam>;
  linearTeams: Array<LinearTeam>;
  linearUser?: Maybe<LinearUser>;
  linearUsers: Array<LinearUser>;
  listUserByAddress: Array<User>;
  partner?: Maybe<Partner>;
  partners: Array<Partner>;
  twitterAccount?: Maybe<TwitterAccount>;
  twitterAccounts: Array<TwitterAccount>;
  twitterTweet?: Maybe<TwitterTweet>;
  twitterTweets: Array<TwitterTweet>;
  twitterUser?: Maybe<TwitterUser>;
  twitterUsers: Array<TwitterUser>;
  user?: Maybe<User>;
  userActivities: Array<UserActivity>;
  userActivity?: Maybe<UserActivity>;
  users: Array<User>;
};


export type QueryActivityTypeArgs = {
  where: ActivityTypeWhereUniqueInput;
};


export type QueryActivityTypesArgs = {
  cursor?: InputMaybe<ActivityTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActivityTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActivityTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActivityTypeWhereInput>;
};


export type QueryAggregateActivityTypeArgs = {
  cursor?: InputMaybe<ActivityTypeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ActivityTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActivityTypeWhereInput>;
};


export type QueryAggregateAttestationArgs = {
  cursor?: InputMaybe<AttestationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationWhereInput>;
};


export type QueryAggregateAttestationConfidenceArgs = {
  cursor?: InputMaybe<AttestationConfidenceWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AttestationConfidenceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationConfidenceWhereInput>;
};


export type QueryAggregateCategoryActivityArgs = {
  cursor?: InputMaybe<CategoryActivityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CategoryActivityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryActivityWhereInput>;
};


export type QueryAggregateCategoryActivityTypeArgs = {
  cursor?: InputMaybe<CategoryActivityTypeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CategoryActivityTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryActivityTypeWhereInput>;
};


export type QueryAggregateChainTypeArgs = {
  cursor?: InputMaybe<ChainTypeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ChainTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChainTypeWhereInput>;
};


export type QueryAggregateContributionArgs = {
  cursor?: InputMaybe<ContributionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContributionWhereInput>;
};


export type QueryAggregateContributionStatusArgs = {
  cursor?: InputMaybe<ContributionStatusWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ContributionStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContributionStatusWhereInput>;
};


export type QueryAggregateDiscordUserArgs = {
  cursor?: InputMaybe<DiscordUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DiscordUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DiscordUserWhereInput>;
};


export type QueryAggregateGuildArgs = {
  cursor?: InputMaybe<GuildWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GuildOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildWhereInput>;
};


export type QueryAggregateGuildActivityTypeArgs = {
  cursor?: InputMaybe<GuildActivityTypeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GuildActivityTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildActivityTypeWhereInput>;
};


export type QueryAggregateGuildContributionArgs = {
  cursor?: InputMaybe<GuildContributionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GuildContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildContributionWhereInput>;
};


export type QueryAggregateGuildUserArgs = {
  cursor?: InputMaybe<GuildUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GuildUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildUserWhereInput>;
};


export type QueryAggregateJobRunArgs = {
  cursor?: InputMaybe<JobRunWhereUniqueInput>;
  orderBy?: InputMaybe<Array<JobRunOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobRunWhereInput>;
};


export type QueryAggregateLinearCycleArgs = {
  cursor?: InputMaybe<LinearCycleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LinearCycleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearCycleWhereInput>;
};


export type QueryAggregateLinearIssueArgs = {
  cursor?: InputMaybe<LinearIssueWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LinearIssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearIssueWhereInput>;
};


export type QueryAggregateLinearProjectArgs = {
  cursor?: InputMaybe<LinearProjectWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LinearProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearProjectWhereInput>;
};


export type QueryAggregateLinearTeamArgs = {
  cursor?: InputMaybe<LinearTeamWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LinearTeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearTeamWhereInput>;
};


export type QueryAggregateLinearUserArgs = {
  cursor?: InputMaybe<LinearUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LinearUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearUserWhereInput>;
};


export type QueryAggregatePartnerArgs = {
  cursor?: InputMaybe<PartnerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PartnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PartnerWhereInput>;
};


export type QueryAggregateTwitterAccountArgs = {
  cursor?: InputMaybe<TwitterAccountWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TwitterAccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterAccountWhereInput>;
};


export type QueryAggregateTwitterTweetArgs = {
  cursor?: InputMaybe<TwitterTweetWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TwitterTweetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterTweetWhereInput>;
};


export type QueryAggregateTwitterUserArgs = {
  cursor?: InputMaybe<TwitterUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TwitterUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterUserWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserActivityArgs = {
  cursor?: InputMaybe<UserActivityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserActivityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserActivityWhereInput>;
};


export type QueryAttestationArgs = {
  where: AttestationWhereUniqueInput;
};


export type QueryAttestationConfidenceArgs = {
  where: AttestationConfidenceWhereUniqueInput;
};


export type QueryAttestationConfidencesArgs = {
  cursor?: InputMaybe<AttestationConfidenceWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationConfidenceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationConfidenceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationConfidenceWhereInput>;
};


export type QueryAttestationsArgs = {
  cursor?: InputMaybe<AttestationWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationWhereInput>;
};


export type QueryCategoryActivitiesArgs = {
  cursor?: InputMaybe<CategoryActivityWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryActivityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryActivityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryActivityWhereInput>;
};


export type QueryCategoryActivityArgs = {
  where: CategoryActivityWhereUniqueInput;
};


export type QueryCategoryActivityTypeArgs = {
  where: CategoryActivityTypeWhereUniqueInput;
};


export type QueryCategoryActivityTypesArgs = {
  cursor?: InputMaybe<CategoryActivityTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryActivityTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryActivityTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryActivityTypeWhereInput>;
};


export type QueryChainTypeArgs = {
  where: ChainTypeWhereUniqueInput;
};


export type QueryChainTypesArgs = {
  cursor?: InputMaybe<ChainTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChainTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChainTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChainTypeWhereInput>;
};


export type QueryContributionArgs = {
  where: ContributionWhereUniqueInput;
};


export type QueryContributionStatusArgs = {
  where: ContributionStatusWhereUniqueInput;
};


export type QueryContributionStatusesArgs = {
  cursor?: InputMaybe<ContributionStatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContributionStatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ContributionStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContributionStatusWhereInput>;
};


export type QueryContributionsArgs = {
  cursor?: InputMaybe<ContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContributionWhereInput>;
};


export type QueryDiscordUserArgs = {
  where: DiscordUserWhereUniqueInput;
};


export type QueryDiscordUsersArgs = {
  cursor?: InputMaybe<DiscordUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<DiscordUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DiscordUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DiscordUserWhereInput>;
};


export type QueryFindFirstActivityTypeArgs = {
  cursor?: InputMaybe<ActivityTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActivityTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActivityTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActivityTypeWhereInput>;
};


export type QueryFindFirstAttestationArgs = {
  cursor?: InputMaybe<AttestationWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationWhereInput>;
};


export type QueryFindFirstAttestationConfidenceArgs = {
  cursor?: InputMaybe<AttestationConfidenceWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationConfidenceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationConfidenceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationConfidenceWhereInput>;
};


export type QueryFindFirstCategoryActivityArgs = {
  cursor?: InputMaybe<CategoryActivityWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryActivityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryActivityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryActivityWhereInput>;
};


export type QueryFindFirstCategoryActivityTypeArgs = {
  cursor?: InputMaybe<CategoryActivityTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryActivityTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryActivityTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryActivityTypeWhereInput>;
};


export type QueryFindFirstChainTypeArgs = {
  cursor?: InputMaybe<ChainTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChainTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChainTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChainTypeWhereInput>;
};


export type QueryFindFirstContributionArgs = {
  cursor?: InputMaybe<ContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContributionWhereInput>;
};


export type QueryFindFirstContributionStatusArgs = {
  cursor?: InputMaybe<ContributionStatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContributionStatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ContributionStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContributionStatusWhereInput>;
};


export type QueryFindFirstDiscordUserArgs = {
  cursor?: InputMaybe<DiscordUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<DiscordUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DiscordUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DiscordUserWhereInput>;
};


export type QueryFindFirstGuildArgs = {
  cursor?: InputMaybe<GuildWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildWhereInput>;
};


export type QueryFindFirstGuildActivityTypeArgs = {
  cursor?: InputMaybe<GuildActivityTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildActivityTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildActivityTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildActivityTypeWhereInput>;
};


export type QueryFindFirstGuildContributionArgs = {
  cursor?: InputMaybe<GuildContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildContributionWhereInput>;
};


export type QueryFindFirstGuildUserArgs = {
  cursor?: InputMaybe<GuildUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildUserWhereInput>;
};


export type QueryFindFirstJobRunArgs = {
  cursor?: InputMaybe<JobRunWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobRunScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobRunOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobRunWhereInput>;
};


export type QueryFindFirstLinearCycleArgs = {
  cursor?: InputMaybe<LinearCycleWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearCycleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearCycleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearCycleWhereInput>;
};


export type QueryFindFirstLinearIssueArgs = {
  cursor?: InputMaybe<LinearIssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearIssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearIssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearIssueWhereInput>;
};


export type QueryFindFirstLinearProjectArgs = {
  cursor?: InputMaybe<LinearProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearProjectWhereInput>;
};


export type QueryFindFirstLinearTeamArgs = {
  cursor?: InputMaybe<LinearTeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearTeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearTeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearTeamWhereInput>;
};


export type QueryFindFirstLinearUserArgs = {
  cursor?: InputMaybe<LinearUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearUserWhereInput>;
};


export type QueryFindFirstPartnerArgs = {
  cursor?: InputMaybe<PartnerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PartnerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PartnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PartnerWhereInput>;
};


export type QueryFindFirstTwitterAccountArgs = {
  cursor?: InputMaybe<TwitterAccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwitterAccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwitterAccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterAccountWhereInput>;
};


export type QueryFindFirstTwitterTweetArgs = {
  cursor?: InputMaybe<TwitterTweetWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwitterTweetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwitterTweetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterTweetWhereInput>;
};


export type QueryFindFirstTwitterUserArgs = {
  cursor?: InputMaybe<TwitterUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwitterUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwitterUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterUserWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserActivityArgs = {
  cursor?: InputMaybe<UserActivityWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserActivityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserActivityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserActivityWhereInput>;
};


export type QueryGetUserArgs = {
  id: Scalars['Float'];
};


export type QueryGroupByActivityTypeArgs = {
  by: Array<ActivityTypeScalarFieldEnum>;
  having?: InputMaybe<ActivityTypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ActivityTypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActivityTypeWhereInput>;
};


export type QueryGroupByAttestationArgs = {
  by: Array<AttestationScalarFieldEnum>;
  having?: InputMaybe<AttestationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationWhereInput>;
};


export type QueryGroupByAttestationConfidenceArgs = {
  by: Array<AttestationConfidenceScalarFieldEnum>;
  having?: InputMaybe<AttestationConfidenceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AttestationConfidenceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationConfidenceWhereInput>;
};


export type QueryGroupByCategoryActivityArgs = {
  by: Array<CategoryActivityScalarFieldEnum>;
  having?: InputMaybe<CategoryActivityScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CategoryActivityOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryActivityWhereInput>;
};


export type QueryGroupByCategoryActivityTypeArgs = {
  by: Array<CategoryActivityTypeScalarFieldEnum>;
  having?: InputMaybe<CategoryActivityTypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CategoryActivityTypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryActivityTypeWhereInput>;
};


export type QueryGroupByChainTypeArgs = {
  by: Array<ChainTypeScalarFieldEnum>;
  having?: InputMaybe<ChainTypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ChainTypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChainTypeWhereInput>;
};


export type QueryGroupByContributionArgs = {
  by: Array<ContributionScalarFieldEnum>;
  having?: InputMaybe<ContributionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ContributionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContributionWhereInput>;
};


export type QueryGroupByContributionStatusArgs = {
  by: Array<ContributionStatusScalarFieldEnum>;
  having?: InputMaybe<ContributionStatusScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ContributionStatusOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContributionStatusWhereInput>;
};


export type QueryGroupByDiscordUserArgs = {
  by: Array<DiscordUserScalarFieldEnum>;
  having?: InputMaybe<DiscordUserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DiscordUserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DiscordUserWhereInput>;
};


export type QueryGroupByGuildArgs = {
  by: Array<GuildScalarFieldEnum>;
  having?: InputMaybe<GuildScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GuildOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildWhereInput>;
};


export type QueryGroupByGuildActivityTypeArgs = {
  by: Array<GuildActivityTypeScalarFieldEnum>;
  having?: InputMaybe<GuildActivityTypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GuildActivityTypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildActivityTypeWhereInput>;
};


export type QueryGroupByGuildContributionArgs = {
  by: Array<GuildContributionScalarFieldEnum>;
  having?: InputMaybe<GuildContributionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GuildContributionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildContributionWhereInput>;
};


export type QueryGroupByGuildUserArgs = {
  by: Array<GuildUserScalarFieldEnum>;
  having?: InputMaybe<GuildUserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GuildUserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildUserWhereInput>;
};


export type QueryGroupByJobRunArgs = {
  by: Array<JobRunScalarFieldEnum>;
  having?: InputMaybe<JobRunScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<JobRunOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobRunWhereInput>;
};


export type QueryGroupByLinearCycleArgs = {
  by: Array<LinearCycleScalarFieldEnum>;
  having?: InputMaybe<LinearCycleScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LinearCycleOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearCycleWhereInput>;
};


export type QueryGroupByLinearIssueArgs = {
  by: Array<LinearIssueScalarFieldEnum>;
  having?: InputMaybe<LinearIssueScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LinearIssueOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearIssueWhereInput>;
};


export type QueryGroupByLinearProjectArgs = {
  by: Array<LinearProjectScalarFieldEnum>;
  having?: InputMaybe<LinearProjectScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LinearProjectOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearProjectWhereInput>;
};


export type QueryGroupByLinearTeamArgs = {
  by: Array<LinearTeamScalarFieldEnum>;
  having?: InputMaybe<LinearTeamScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LinearTeamOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearTeamWhereInput>;
};


export type QueryGroupByLinearUserArgs = {
  by: Array<LinearUserScalarFieldEnum>;
  having?: InputMaybe<LinearUserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LinearUserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearUserWhereInput>;
};


export type QueryGroupByPartnerArgs = {
  by: Array<PartnerScalarFieldEnum>;
  having?: InputMaybe<PartnerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PartnerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PartnerWhereInput>;
};


export type QueryGroupByTwitterAccountArgs = {
  by: Array<TwitterAccountScalarFieldEnum>;
  having?: InputMaybe<TwitterAccountScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TwitterAccountOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterAccountWhereInput>;
};


export type QueryGroupByTwitterTweetArgs = {
  by: Array<TwitterTweetScalarFieldEnum>;
  having?: InputMaybe<TwitterTweetScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TwitterTweetOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterTweetWhereInput>;
};


export type QueryGroupByTwitterUserArgs = {
  by: Array<TwitterUserScalarFieldEnum>;
  having?: InputMaybe<TwitterUserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TwitterUserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterUserWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUserActivityArgs = {
  by: Array<UserActivityScalarFieldEnum>;
  having?: InputMaybe<UserActivityScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserActivityOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserActivityWhereInput>;
};


export type QueryGuildArgs = {
  where: GuildWhereUniqueInput;
};


export type QueryGuildActivityTypeArgs = {
  where: GuildActivityTypeWhereUniqueInput;
};


export type QueryGuildActivityTypesArgs = {
  cursor?: InputMaybe<GuildActivityTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildActivityTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildActivityTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildActivityTypeWhereInput>;
};


export type QueryGuildContributionArgs = {
  where: GuildContributionWhereUniqueInput;
};


export type QueryGuildContributionsArgs = {
  cursor?: InputMaybe<GuildContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildContributionWhereInput>;
};


export type QueryGuildUserArgs = {
  where: GuildUserWhereUniqueInput;
};


export type QueryGuildUsersArgs = {
  cursor?: InputMaybe<GuildUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildUserWhereInput>;
};


export type QueryGuildsArgs = {
  cursor?: InputMaybe<GuildWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildWhereInput>;
};


export type QueryJobRunArgs = {
  where: JobRunWhereUniqueInput;
};


export type QueryJobRunsArgs = {
  cursor?: InputMaybe<JobRunWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobRunScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobRunOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobRunWhereInput>;
};


export type QueryLinearCycleArgs = {
  where: LinearCycleWhereUniqueInput;
};


export type QueryLinearCyclesArgs = {
  cursor?: InputMaybe<LinearCycleWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearCycleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearCycleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearCycleWhereInput>;
};


export type QueryLinearIssueArgs = {
  where: LinearIssueWhereUniqueInput;
};


export type QueryLinearIssuesArgs = {
  cursor?: InputMaybe<LinearIssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearIssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearIssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearIssueWhereInput>;
};


export type QueryLinearProjectArgs = {
  where: LinearProjectWhereUniqueInput;
};


export type QueryLinearProjectsArgs = {
  cursor?: InputMaybe<LinearProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearProjectWhereInput>;
};


export type QueryLinearTeamArgs = {
  where: LinearTeamWhereUniqueInput;
};


export type QueryLinearTeamsArgs = {
  cursor?: InputMaybe<LinearTeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearTeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearTeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearTeamWhereInput>;
};


export type QueryLinearUserArgs = {
  where: LinearUserWhereUniqueInput;
};


export type QueryLinearUsersArgs = {
  cursor?: InputMaybe<LinearUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearUserWhereInput>;
};


export type QueryListUserByAddressArgs = {
  address: Scalars['String'];
};


export type QueryPartnerArgs = {
  where: PartnerWhereUniqueInput;
};


export type QueryPartnersArgs = {
  cursor?: InputMaybe<PartnerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PartnerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PartnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PartnerWhereInput>;
};


export type QueryTwitterAccountArgs = {
  where: TwitterAccountWhereUniqueInput;
};


export type QueryTwitterAccountsArgs = {
  cursor?: InputMaybe<TwitterAccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwitterAccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwitterAccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterAccountWhereInput>;
};


export type QueryTwitterTweetArgs = {
  where: TwitterTweetWhereUniqueInput;
};


export type QueryTwitterTweetsArgs = {
  cursor?: InputMaybe<TwitterTweetWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwitterTweetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwitterTweetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterTweetWhereInput>;
};


export type QueryTwitterUserArgs = {
  where: TwitterUserWhereUniqueInput;
};


export type QueryTwitterUsersArgs = {
  cursor?: InputMaybe<TwitterUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwitterUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwitterUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterUserWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserActivitiesArgs = {
  cursor?: InputMaybe<UserActivityWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserActivityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserActivityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserActivityWhereInput>;
};


export type QueryUserActivityArgs = {
  where: UserActivityWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TwitterAccount = {
  account_name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  guild?: Maybe<Guild>;
  guild_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type TwitterAccountAvgAggregate = {
  guild_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type TwitterAccountAvgOrderByAggregateInput = {
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type TwitterAccountCountAggregate = {
  _all: Scalars['Int'];
  account_name: Scalars['Int'];
  createdAt: Scalars['Int'];
  guild_id: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TwitterAccountCountOrderByAggregateInput = {
  account_name?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterAccountCreateInput = {
  account_name: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild?: InputMaybe<GuildCreateNestedOneWithoutTwitter_AccountInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterAccountCreateManyInput = {
  account_name: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterAccountCreateNestedOneWithoutGuildInput = {
  connect?: InputMaybe<TwitterAccountWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TwitterAccountCreateOrConnectWithoutGuildInput>;
  create?: InputMaybe<TwitterAccountCreateWithoutGuildInput>;
};

export type TwitterAccountCreateOrConnectWithoutGuildInput = {
  create: TwitterAccountCreateWithoutGuildInput;
  where: TwitterAccountWhereUniqueInput;
};

export type TwitterAccountCreateWithoutGuildInput = {
  account_name: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterAccountGroupBy = {
  _avg?: Maybe<TwitterAccountAvgAggregate>;
  _count?: Maybe<TwitterAccountCountAggregate>;
  _max?: Maybe<TwitterAccountMaxAggregate>;
  _min?: Maybe<TwitterAccountMinAggregate>;
  _sum?: Maybe<TwitterAccountSumAggregate>;
  account_name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  guild_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type TwitterAccountMaxAggregate = {
  account_name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TwitterAccountMaxOrderByAggregateInput = {
  account_name?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterAccountMinAggregate = {
  account_name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TwitterAccountMinOrderByAggregateInput = {
  account_name?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterAccountOrderByWithAggregationInput = {
  _avg?: InputMaybe<TwitterAccountAvgOrderByAggregateInput>;
  _count?: InputMaybe<TwitterAccountCountOrderByAggregateInput>;
  _max?: InputMaybe<TwitterAccountMaxOrderByAggregateInput>;
  _min?: InputMaybe<TwitterAccountMinOrderByAggregateInput>;
  _sum?: InputMaybe<TwitterAccountSumOrderByAggregateInput>;
  account_name?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterAccountOrderByWithRelationInput = {
  account_name?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild?: InputMaybe<GuildOrderByWithRelationInput>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterAccountRelationFilter = {
  is?: InputMaybe<TwitterAccountWhereInput>;
  isNot?: InputMaybe<TwitterAccountWhereInput>;
};

export enum TwitterAccountScalarFieldEnum {
  AccountName = 'account_name',
  CreatedAt = 'createdAt',
  GuildId = 'guild_id',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type TwitterAccountScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TwitterAccountScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TwitterAccountScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TwitterAccountScalarWhereWithAggregatesInput>>;
  account_name?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  guild_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TwitterAccountSumAggregate = {
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type TwitterAccountSumOrderByAggregateInput = {
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type TwitterAccountUpdateInput = {
  account_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneWithoutTwitter_AccountInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterAccountUpdateManyMutationInput = {
  account_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterAccountUpdateOneWithoutGuildInput = {
  connect?: InputMaybe<TwitterAccountWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TwitterAccountCreateOrConnectWithoutGuildInput>;
  create?: InputMaybe<TwitterAccountCreateWithoutGuildInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TwitterAccountUpdateWithoutGuildInput>;
  upsert?: InputMaybe<TwitterAccountUpsertWithoutGuildInput>;
};

export type TwitterAccountUpdateWithoutGuildInput = {
  account_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterAccountUpsertWithoutGuildInput = {
  create: TwitterAccountCreateWithoutGuildInput;
  update: TwitterAccountUpdateWithoutGuildInput;
};

export type TwitterAccountWhereInput = {
  AND?: InputMaybe<Array<TwitterAccountWhereInput>>;
  NOT?: InputMaybe<Array<TwitterAccountWhereInput>>;
  OR?: InputMaybe<Array<TwitterAccountWhereInput>>;
  account_name?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guild?: InputMaybe<GuildRelationFilter>;
  guild_id?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TwitterAccountWhereUniqueInput = {
  account_name?: InputMaybe<Scalars['String']>;
  guild_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type TwitterTweet = {
  contribution?: Maybe<Contribution>;
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  text: Scalars['String'];
  twitter_tweet_id: Scalars['Int'];
  twitter_user?: Maybe<TwitterUser>;
  twitter_user_id?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type TwitterTweetAvgAggregate = {
  contribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  twitter_tweet_id?: Maybe<Scalars['Float']>;
  twitter_user_id?: Maybe<Scalars['Float']>;
};

export type TwitterTweetAvgOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
};

export type TwitterTweetCountAggregate = {
  _all: Scalars['Int'];
  contribution_id: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  text: Scalars['Int'];
  twitter_tweet_id: Scalars['Int'];
  twitter_user_id: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TwitterTweetCountOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterTweetCreateInput = {
  contribution?: InputMaybe<ContributionCreateNestedOneWithoutTweetInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  text: Scalars['String'];
  twitter_tweet_id: Scalars['Int'];
  twitter_user?: InputMaybe<TwitterUserCreateNestedOneWithoutTweetsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetCreateManyInput = {
  contribution_id?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
  twitter_tweet_id: Scalars['Int'];
  twitter_user_id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetCreateManyTwitter_UserInput = {
  contribution_id?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
  twitter_tweet_id: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetCreateManyTwitter_UserInputEnvelope = {
  data: Array<TwitterTweetCreateManyTwitter_UserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TwitterTweetCreateNestedManyWithoutTwitter_UserInput = {
  connect?: InputMaybe<Array<TwitterTweetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TwitterTweetCreateOrConnectWithoutTwitter_UserInput>>;
  create?: InputMaybe<Array<TwitterTweetCreateWithoutTwitter_UserInput>>;
  createMany?: InputMaybe<TwitterTweetCreateManyTwitter_UserInputEnvelope>;
};

export type TwitterTweetCreateNestedOneWithoutContributionInput = {
  connect?: InputMaybe<TwitterTweetWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TwitterTweetCreateOrConnectWithoutContributionInput>;
  create?: InputMaybe<TwitterTweetCreateWithoutContributionInput>;
};

export type TwitterTweetCreateOrConnectWithoutContributionInput = {
  create: TwitterTweetCreateWithoutContributionInput;
  where: TwitterTweetWhereUniqueInput;
};

export type TwitterTweetCreateOrConnectWithoutTwitter_UserInput = {
  create: TwitterTweetCreateWithoutTwitter_UserInput;
  where: TwitterTweetWhereUniqueInput;
};

export type TwitterTweetCreateWithoutContributionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  text: Scalars['String'];
  twitter_tweet_id: Scalars['Int'];
  twitter_user?: InputMaybe<TwitterUserCreateNestedOneWithoutTweetsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetCreateWithoutTwitter_UserInput = {
  contribution?: InputMaybe<ContributionCreateNestedOneWithoutTweetInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  text: Scalars['String'];
  twitter_tweet_id: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetGroupBy = {
  _avg?: Maybe<TwitterTweetAvgAggregate>;
  _count?: Maybe<TwitterTweetCountAggregate>;
  _max?: Maybe<TwitterTweetMaxAggregate>;
  _min?: Maybe<TwitterTweetMinAggregate>;
  _sum?: Maybe<TwitterTweetSumAggregate>;
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  text: Scalars['String'];
  twitter_tweet_id: Scalars['Int'];
  twitter_user_id?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type TwitterTweetListRelationFilter = {
  every?: InputMaybe<TwitterTweetWhereInput>;
  none?: InputMaybe<TwitterTweetWhereInput>;
  some?: InputMaybe<TwitterTweetWhereInput>;
};

export type TwitterTweetMaxAggregate = {
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  twitter_tweet_id?: Maybe<Scalars['Int']>;
  twitter_user_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TwitterTweetMaxOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterTweetMinAggregate = {
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  twitter_tweet_id?: Maybe<Scalars['Int']>;
  twitter_user_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TwitterTweetMinOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterTweetOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TwitterTweetOrderByWithAggregationInput = {
  _avg?: InputMaybe<TwitterTweetAvgOrderByAggregateInput>;
  _count?: InputMaybe<TwitterTweetCountOrderByAggregateInput>;
  _max?: InputMaybe<TwitterTweetMaxOrderByAggregateInput>;
  _min?: InputMaybe<TwitterTweetMinOrderByAggregateInput>;
  _sum?: InputMaybe<TwitterTweetSumOrderByAggregateInput>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterTweetOrderByWithRelationInput = {
  contribution?: InputMaybe<ContributionOrderByWithRelationInput>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  twitter_user?: InputMaybe<TwitterUserOrderByWithRelationInput>;
  twitter_user_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterTweetRelationFilter = {
  is?: InputMaybe<TwitterTweetWhereInput>;
  isNot?: InputMaybe<TwitterTweetWhereInput>;
};

export enum TwitterTweetScalarFieldEnum {
  ContributionId = 'contribution_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  Text = 'text',
  TwitterTweetId = 'twitter_tweet_id',
  TwitterUserId = 'twitter_user_id',
  UpdatedAt = 'updatedAt'
}

export type TwitterTweetScalarWhereInput = {
  AND?: InputMaybe<Array<TwitterTweetScalarWhereInput>>;
  NOT?: InputMaybe<Array<TwitterTweetScalarWhereInput>>;
  OR?: InputMaybe<Array<TwitterTweetScalarWhereInput>>;
  contribution_id?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  twitter_tweet_id?: InputMaybe<IntFilter>;
  twitter_user_id?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TwitterTweetScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TwitterTweetScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TwitterTweetScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TwitterTweetScalarWhereWithAggregatesInput>>;
  contribution_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
  twitter_tweet_id?: InputMaybe<IntWithAggregatesFilter>;
  twitter_user_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TwitterTweetSumAggregate = {
  contribution_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  twitter_tweet_id?: Maybe<Scalars['Int']>;
  twitter_user_id?: Maybe<Scalars['Int']>;
};

export type TwitterTweetSumOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
};

export type TwitterTweetUpdateInput = {
  contribution?: InputMaybe<ContributionUpdateOneWithoutTweetInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  twitter_tweet_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutTweetsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterTweetUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  twitter_tweet_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterTweetUpdateManyWithWhereWithoutTwitter_UserInput = {
  data: TwitterTweetUpdateManyMutationInput;
  where: TwitterTweetScalarWhereInput;
};

export type TwitterTweetUpdateManyWithoutTwitter_UserInput = {
  connect?: InputMaybe<Array<TwitterTweetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TwitterTweetCreateOrConnectWithoutTwitter_UserInput>>;
  create?: InputMaybe<Array<TwitterTweetCreateWithoutTwitter_UserInput>>;
  createMany?: InputMaybe<TwitterTweetCreateManyTwitter_UserInputEnvelope>;
  delete?: InputMaybe<Array<TwitterTweetWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TwitterTweetScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TwitterTweetWhereUniqueInput>>;
  set?: InputMaybe<Array<TwitterTweetWhereUniqueInput>>;
  update?: InputMaybe<Array<TwitterTweetUpdateWithWhereUniqueWithoutTwitter_UserInput>>;
  updateMany?: InputMaybe<Array<TwitterTweetUpdateManyWithWhereWithoutTwitter_UserInput>>;
  upsert?: InputMaybe<Array<TwitterTweetUpsertWithWhereUniqueWithoutTwitter_UserInput>>;
};

export type TwitterTweetUpdateOneWithoutContributionInput = {
  connect?: InputMaybe<TwitterTweetWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TwitterTweetCreateOrConnectWithoutContributionInput>;
  create?: InputMaybe<TwitterTweetCreateWithoutContributionInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TwitterTweetUpdateWithoutContributionInput>;
  upsert?: InputMaybe<TwitterTweetUpsertWithoutContributionInput>;
};

export type TwitterTweetUpdateWithWhereUniqueWithoutTwitter_UserInput = {
  data: TwitterTweetUpdateWithoutTwitter_UserInput;
  where: TwitterTweetWhereUniqueInput;
};

export type TwitterTweetUpdateWithoutContributionInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  twitter_tweet_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutTweetsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterTweetUpdateWithoutTwitter_UserInput = {
  contribution?: InputMaybe<ContributionUpdateOneWithoutTweetInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  twitter_tweet_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterTweetUpsertWithWhereUniqueWithoutTwitter_UserInput = {
  create: TwitterTweetCreateWithoutTwitter_UserInput;
  update: TwitterTweetUpdateWithoutTwitter_UserInput;
  where: TwitterTweetWhereUniqueInput;
};

export type TwitterTweetUpsertWithoutContributionInput = {
  create: TwitterTweetCreateWithoutContributionInput;
  update: TwitterTweetUpdateWithoutContributionInput;
};

export type TwitterTweetWhereInput = {
  AND?: InputMaybe<Array<TwitterTweetWhereInput>>;
  NOT?: InputMaybe<Array<TwitterTweetWhereInput>>;
  OR?: InputMaybe<Array<TwitterTweetWhereInput>>;
  contribution?: InputMaybe<ContributionRelationFilter>;
  contribution_id?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  twitter_tweet_id?: InputMaybe<IntFilter>;
  twitter_user?: InputMaybe<TwitterUserRelationFilter>;
  twitter_user_id?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TwitterTweetWhereUniqueInput = {
  contribution_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  twitter_tweet_id?: InputMaybe<Scalars['Int']>;
};

export type TwitterUser = {
  _count?: Maybe<TwitterUserCount>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  tweets: Array<TwitterTweet>;
  twitter_user_id?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};


export type TwitterUserTweetsArgs = {
  cursor?: InputMaybe<TwitterTweetWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwitterTweetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwitterTweetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterTweetWhereInput>;
};

export type TwitterUserAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type TwitterUserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type TwitterUserCount = {
  tweets: Scalars['Int'];
};

export type TwitterUserCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  twitter_user_id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  user_id: Scalars['Int'];
  username: Scalars['Int'];
};

export type TwitterUserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type TwitterUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  tweets?: InputMaybe<TwitterTweetCreateNestedManyWithoutTwitter_UserInput>;
  twitter_user_id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutTwitter_UserInput>;
  username: Scalars['String'];
};

export type TwitterUserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  twitter_user_id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id?: InputMaybe<Scalars['Int']>;
  username: Scalars['String'];
};

export type TwitterUserCreateNestedOneWithoutTweetsInput = {
  connect?: InputMaybe<TwitterUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TwitterUserCreateOrConnectWithoutTweetsInput>;
  create?: InputMaybe<TwitterUserCreateWithoutTweetsInput>;
};

export type TwitterUserCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<TwitterUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TwitterUserCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<TwitterUserCreateWithoutUserInput>;
};

export type TwitterUserCreateOrConnectWithoutTweetsInput = {
  create: TwitterUserCreateWithoutTweetsInput;
  where: TwitterUserWhereUniqueInput;
};

export type TwitterUserCreateOrConnectWithoutUserInput = {
  create: TwitterUserCreateWithoutUserInput;
  where: TwitterUserWhereUniqueInput;
};

export type TwitterUserCreateWithoutTweetsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  twitter_user_id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutTwitter_UserInput>;
  username: Scalars['String'];
};

export type TwitterUserCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  tweets?: InputMaybe<TwitterTweetCreateNestedManyWithoutTwitter_UserInput>;
  twitter_user_id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type TwitterUserGroupBy = {
  _avg?: Maybe<TwitterUserAvgAggregate>;
  _count?: Maybe<TwitterUserCountAggregate>;
  _max?: Maybe<TwitterUserMaxAggregate>;
  _min?: Maybe<TwitterUserMinAggregate>;
  _sum?: Maybe<TwitterUserSumAggregate>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  twitter_user_id?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user_id?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};

export type TwitterUserMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  twitter_user_id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type TwitterUserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type TwitterUserMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  twitter_user_id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type TwitterUserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type TwitterUserOrderByWithAggregationInput = {
  _avg?: InputMaybe<TwitterUserAvgOrderByAggregateInput>;
  _count?: InputMaybe<TwitterUserCountOrderByAggregateInput>;
  _max?: InputMaybe<TwitterUserMaxOrderByAggregateInput>;
  _min?: InputMaybe<TwitterUserMinOrderByAggregateInput>;
  _sum?: InputMaybe<TwitterUserSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type TwitterUserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  tweets?: InputMaybe<TwitterTweetOrderByRelationAggregateInput>;
  twitter_user_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type TwitterUserRelationFilter = {
  is?: InputMaybe<TwitterUserWhereInput>;
  isNot?: InputMaybe<TwitterUserWhereInput>;
};

export enum TwitterUserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  TwitterUserId = 'twitter_user_id',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id',
  Username = 'username'
}

export type TwitterUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TwitterUserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TwitterUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TwitterUserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  twitter_user_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type TwitterUserSumAggregate = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type TwitterUserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type TwitterUserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tweets?: InputMaybe<TwitterTweetUpdateManyWithoutTwitter_UserInput>;
  twitter_user_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutTwitter_UserInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TwitterUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TwitterUserUpdateOneWithoutTweetsInput = {
  connect?: InputMaybe<TwitterUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TwitterUserCreateOrConnectWithoutTweetsInput>;
  create?: InputMaybe<TwitterUserCreateWithoutTweetsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TwitterUserUpdateWithoutTweetsInput>;
  upsert?: InputMaybe<TwitterUserUpsertWithoutTweetsInput>;
};

export type TwitterUserUpdateOneWithoutUserInput = {
  connect?: InputMaybe<TwitterUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TwitterUserCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<TwitterUserCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TwitterUserUpdateWithoutUserInput>;
  upsert?: InputMaybe<TwitterUserUpsertWithoutUserInput>;
};

export type TwitterUserUpdateWithoutTweetsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutTwitter_UserInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TwitterUserUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tweets?: InputMaybe<TwitterTweetUpdateManyWithoutTwitter_UserInput>;
  twitter_user_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TwitterUserUpsertWithoutTweetsInput = {
  create: TwitterUserCreateWithoutTweetsInput;
  update: TwitterUserUpdateWithoutTweetsInput;
};

export type TwitterUserUpsertWithoutUserInput = {
  create: TwitterUserCreateWithoutUserInput;
  update: TwitterUserUpdateWithoutUserInput;
};

export type TwitterUserWhereInput = {
  AND?: InputMaybe<Array<TwitterUserWhereInput>>;
  NOT?: InputMaybe<Array<TwitterUserWhereInput>>;
  OR?: InputMaybe<Array<TwitterUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  tweets?: InputMaybe<TwitterTweetListRelationFilter>;
  twitter_user_id?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntNullableFilter>;
  username?: InputMaybe<StringFilter>;
};

export type TwitterUserWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  twitter_user_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  _count?: Maybe<UserCount>;
  active: Scalars['Boolean'];
  activities: Array<UserActivity>;
  address: Scalars['String'];
  attestations: Array<Attestation>;
  chain_type: ChainType;
  chain_type_id: Scalars['Int'];
  contributionPartners: Array<Partner>;
  contributions: Array<Contribution>;
  createdAt: Scalars['DateTime'];
  discord_users: Array<DiscordUser>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  guild_users: Array<GuildUser>;
  id: Scalars['Int'];
  linear_users: Array<LinearUser>;
  name?: Maybe<Scalars['String']>;
  twitter_user?: Maybe<TwitterUser>;
  updatedAt: Scalars['DateTime'];
};


export type UserActivitiesArgs = {
  cursor?: InputMaybe<UserActivityWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserActivityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserActivityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserActivityWhereInput>;
};


export type UserAttestationsArgs = {
  cursor?: InputMaybe<AttestationWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationWhereInput>;
};


export type UserContributionPartnersArgs = {
  cursor?: InputMaybe<PartnerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PartnerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PartnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PartnerWhereInput>;
};


export type UserContributionsArgs = {
  cursor?: InputMaybe<ContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContributionWhereInput>;
};


export type UserDiscord_UsersArgs = {
  cursor?: InputMaybe<DiscordUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<DiscordUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DiscordUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DiscordUserWhereInput>;
};


export type UserGuild_UsersArgs = {
  cursor?: InputMaybe<GuildUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildUserWhereInput>;
};


export type UserLinear_UsersArgs = {
  cursor?: InputMaybe<LinearUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinearUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinearUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinearUserWhereInput>;
};

export type UserActivity = {
  activity_type: ActivityType;
  activity_type_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  user_id: Scalars['Int'];
};

export type UserActivityAvgAggregate = {
  activity_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type UserActivityAvgOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserActivityCountAggregate = {
  _all: Scalars['Int'];
  activity_type_id: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type UserActivityCountOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserActivityCreateInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutUsersInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutActivitiesInput;
};

export type UserActivityCreateManyActivity_TypeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type UserActivityCreateManyActivity_TypeInputEnvelope = {
  data: Array<UserActivityCreateManyActivity_TypeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserActivityCreateManyInput = {
  activity_type_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type UserActivityCreateManyUserInput = {
  activity_type_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserActivityCreateManyUserInputEnvelope = {
  data: Array<UserActivityCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserActivityCreateNestedManyWithoutActivity_TypeInput = {
  connect?: InputMaybe<Array<UserActivityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserActivityCreateOrConnectWithoutActivity_TypeInput>>;
  create?: InputMaybe<Array<UserActivityCreateWithoutActivity_TypeInput>>;
  createMany?: InputMaybe<UserActivityCreateManyActivity_TypeInputEnvelope>;
};

export type UserActivityCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserActivityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserActivityCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserActivityCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserActivityCreateManyUserInputEnvelope>;
};

export type UserActivityCreateOrConnectWithoutActivity_TypeInput = {
  create: UserActivityCreateWithoutActivity_TypeInput;
  where: UserActivityWhereUniqueInput;
};

export type UserActivityCreateOrConnectWithoutUserInput = {
  create: UserActivityCreateWithoutUserInput;
  where: UserActivityWhereUniqueInput;
};

export type UserActivityCreateWithoutActivity_TypeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutActivitiesInput;
};

export type UserActivityCreateWithoutUserInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutUsersInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserActivityGroupBy = {
  _avg?: Maybe<UserActivityAvgAggregate>;
  _count?: Maybe<UserActivityCountAggregate>;
  _max?: Maybe<UserActivityMaxAggregate>;
  _min?: Maybe<UserActivityMinAggregate>;
  _sum?: Maybe<UserActivitySumAggregate>;
  activity_type_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user_id: Scalars['Int'];
};

export type UserActivityListRelationFilter = {
  every?: InputMaybe<UserActivityWhereInput>;
  none?: InputMaybe<UserActivityWhereInput>;
  some?: InputMaybe<UserActivityWhereInput>;
};

export type UserActivityMaxAggregate = {
  activity_type_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type UserActivityMaxOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserActivityMinAggregate = {
  activity_type_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type UserActivityMinOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserActivityOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserActivityOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserActivityAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserActivityCountOrderByAggregateInput>;
  _max?: InputMaybe<UserActivityMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserActivityMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserActivitySumOrderByAggregateInput>;
  activity_type_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserActivityOrderByWithRelationInput = {
  activity_type?: InputMaybe<ActivityTypeOrderByWithRelationInput>;
  activity_type_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum UserActivityScalarFieldEnum {
  ActivityTypeId = 'activity_type_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type UserActivityScalarWhereInput = {
  AND?: InputMaybe<Array<UserActivityScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserActivityScalarWhereInput>>;
  OR?: InputMaybe<Array<UserActivityScalarWhereInput>>;
  activity_type_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type UserActivityScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserActivityScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserActivityScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserActivityScalarWhereWithAggregatesInput>>;
  activity_type_id?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type UserActivitySumAggregate = {
  activity_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type UserActivitySumOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserActivityUpdateInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutUsersInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutActivitiesInput>;
};

export type UserActivityUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserActivityUpdateManyWithWhereWithoutActivity_TypeInput = {
  data: UserActivityUpdateManyMutationInput;
  where: UserActivityScalarWhereInput;
};

export type UserActivityUpdateManyWithWhereWithoutUserInput = {
  data: UserActivityUpdateManyMutationInput;
  where: UserActivityScalarWhereInput;
};

export type UserActivityUpdateManyWithoutActivity_TypeInput = {
  connect?: InputMaybe<Array<UserActivityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserActivityCreateOrConnectWithoutActivity_TypeInput>>;
  create?: InputMaybe<Array<UserActivityCreateWithoutActivity_TypeInput>>;
  createMany?: InputMaybe<UserActivityCreateManyActivity_TypeInputEnvelope>;
  delete?: InputMaybe<Array<UserActivityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserActivityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserActivityWhereUniqueInput>>;
  set?: InputMaybe<Array<UserActivityWhereUniqueInput>>;
  update?: InputMaybe<Array<UserActivityUpdateWithWhereUniqueWithoutActivity_TypeInput>>;
  updateMany?: InputMaybe<Array<UserActivityUpdateManyWithWhereWithoutActivity_TypeInput>>;
  upsert?: InputMaybe<Array<UserActivityUpsertWithWhereUniqueWithoutActivity_TypeInput>>;
};

export type UserActivityUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserActivityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserActivityCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserActivityCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserActivityCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserActivityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserActivityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserActivityWhereUniqueInput>>;
  set?: InputMaybe<Array<UserActivityWhereUniqueInput>>;
  update?: InputMaybe<Array<UserActivityUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserActivityUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserActivityUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserActivityUpdateWithWhereUniqueWithoutActivity_TypeInput = {
  data: UserActivityUpdateWithoutActivity_TypeInput;
  where: UserActivityWhereUniqueInput;
};

export type UserActivityUpdateWithWhereUniqueWithoutUserInput = {
  data: UserActivityUpdateWithoutUserInput;
  where: UserActivityWhereUniqueInput;
};

export type UserActivityUpdateWithoutActivity_TypeInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutActivitiesInput>;
};

export type UserActivityUpdateWithoutUserInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutUsersInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserActivityUpsertWithWhereUniqueWithoutActivity_TypeInput = {
  create: UserActivityCreateWithoutActivity_TypeInput;
  update: UserActivityUpdateWithoutActivity_TypeInput;
  where: UserActivityWhereUniqueInput;
};

export type UserActivityUpsertWithWhereUniqueWithoutUserInput = {
  create: UserActivityCreateWithoutUserInput;
  update: UserActivityUpdateWithoutUserInput;
  where: UserActivityWhereUniqueInput;
};

export type UserActivityUser_IdActivity_Type_IdCompoundUniqueInput = {
  activity_type_id: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type UserActivityWhereInput = {
  AND?: InputMaybe<Array<UserActivityWhereInput>>;
  NOT?: InputMaybe<Array<UserActivityWhereInput>>;
  OR?: InputMaybe<Array<UserActivityWhereInput>>;
  activity_type?: InputMaybe<ActivityTypeRelationFilter>;
  activity_type_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type UserActivityWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  user_id_activity_type_id?: InputMaybe<UserActivityUser_IdActivity_Type_IdCompoundUniqueInput>;
};

export type UserAvgAggregate = {
  chain_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  chain_type_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type UserContributionCreateInput = {
  activityTypeName: Scalars['String'];
  address: Scalars['String'];
  chainName: Scalars['String'];
  dateOfEngagement: Scalars['DateTime'];
  details: Scalars['String'];
  guildId: Scalars['Float'];
  name: Scalars['String'];
  proof: Scalars['String'];
  status: Scalars['String'];
  userId: Scalars['Float'];
};

export type UserContributionUpdateInput = {
  activityTypeName: Scalars['String'];
  address: Scalars['String'];
  chainName: Scalars['String'];
  contributionId: Scalars['Int'];
  currentGuildId?: InputMaybe<Scalars['Float']>;
  dateOfEngagement: Scalars['DateTime'];
  details: Scalars['String'];
  guildId?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  proof: Scalars['String'];
  status: Scalars['String'];
  userId: Scalars['Float'];
};

export type UserCount = {
  activities: Scalars['Int'];
  attestations: Scalars['Int'];
  contributionPartners: Scalars['Int'];
  contributions: Scalars['Int'];
  discord_users: Scalars['Int'];
  guild_users: Scalars['Int'];
  linear_users: Scalars['Int'];
};

export type UserCountAggregate = {
  _all: Scalars['Int'];
  active: Scalars['Int'];
  address: Scalars['Int'];
  chain_type_id: Scalars['Int'];
  createdAt: Scalars['Int'];
  display_name: Scalars['Int'];
  email: Scalars['Int'];
  full_name: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  chain_type_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  display_name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  full_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateCustomInput = {
  address: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserCreateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  activities?: InputMaybe<UserActivityCreateNestedManyWithoutUserInput>;
  address: Scalars['String'];
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutUserInput>;
  chain_type: ChainTypeCreateNestedOneWithoutUsersInput;
  contributionPartners?: InputMaybe<PartnerCreateNestedManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_users?: InputMaybe<DiscordUserCreateNestedManyWithoutUserInput>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  guild_users?: InputMaybe<GuildUserCreateNestedManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  twitter_user?: InputMaybe<TwitterUserCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyChain_TypeInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  address: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyChain_TypeInputEnvelope = {
  data: Array<UserCreateManyChain_TypeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateManyInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  address: Scalars['String'];
  chain_type_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedManyWithoutChain_TypeInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutChain_TypeInput>>;
  create?: InputMaybe<Array<UserCreateWithoutChain_TypeInput>>;
  createMany?: InputMaybe<UserCreateManyChain_TypeInputEnvelope>;
};

export type UserCreateNestedOneWithoutActivitiesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutActivitiesInput>;
  create?: InputMaybe<UserCreateWithoutActivitiesInput>;
};

export type UserCreateNestedOneWithoutAttestationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAttestationsInput>;
  create?: InputMaybe<UserCreateWithoutAttestationsInput>;
};

export type UserCreateNestedOneWithoutContributionPartnersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutContributionPartnersInput>;
  create?: InputMaybe<UserCreateWithoutContributionPartnersInput>;
};

export type UserCreateNestedOneWithoutContributionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<UserCreateWithoutContributionsInput>;
};

export type UserCreateNestedOneWithoutDiscord_UsersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutDiscord_UsersInput>;
  create?: InputMaybe<UserCreateWithoutDiscord_UsersInput>;
};

export type UserCreateNestedOneWithoutGuild_UsersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutGuild_UsersInput>;
  create?: InputMaybe<UserCreateWithoutGuild_UsersInput>;
};

export type UserCreateNestedOneWithoutLinear_UsersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLinear_UsersInput>;
  create?: InputMaybe<UserCreateWithoutLinear_UsersInput>;
};

export type UserCreateNestedOneWithoutTwitter_UserInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTwitter_UserInput>;
  create?: InputMaybe<UserCreateWithoutTwitter_UserInput>;
};

export type UserCreateOrConnectWithoutActivitiesInput = {
  create: UserCreateWithoutActivitiesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAttestationsInput = {
  create: UserCreateWithoutAttestationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChain_TypeInput = {
  create: UserCreateWithoutChain_TypeInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutContributionPartnersInput = {
  create: UserCreateWithoutContributionPartnersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutContributionsInput = {
  create: UserCreateWithoutContributionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutDiscord_UsersInput = {
  create: UserCreateWithoutDiscord_UsersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutGuild_UsersInput = {
  create: UserCreateWithoutGuild_UsersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLinear_UsersInput = {
  create: UserCreateWithoutLinear_UsersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTwitter_UserInput = {
  create: UserCreateWithoutTwitter_UserInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutActivitiesInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  address: Scalars['String'];
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutUserInput>;
  chain_type: ChainTypeCreateNestedOneWithoutUsersInput;
  contributionPartners?: InputMaybe<PartnerCreateNestedManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_users?: InputMaybe<DiscordUserCreateNestedManyWithoutUserInput>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  guild_users?: InputMaybe<GuildUserCreateNestedManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  twitter_user?: InputMaybe<TwitterUserCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutAttestationsInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  activities?: InputMaybe<UserActivityCreateNestedManyWithoutUserInput>;
  address: Scalars['String'];
  chain_type: ChainTypeCreateNestedOneWithoutUsersInput;
  contributionPartners?: InputMaybe<PartnerCreateNestedManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_users?: InputMaybe<DiscordUserCreateNestedManyWithoutUserInput>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  guild_users?: InputMaybe<GuildUserCreateNestedManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  twitter_user?: InputMaybe<TwitterUserCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutChain_TypeInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  activities?: InputMaybe<UserActivityCreateNestedManyWithoutUserInput>;
  address: Scalars['String'];
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutUserInput>;
  contributionPartners?: InputMaybe<PartnerCreateNestedManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_users?: InputMaybe<DiscordUserCreateNestedManyWithoutUserInput>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  guild_users?: InputMaybe<GuildUserCreateNestedManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  twitter_user?: InputMaybe<TwitterUserCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutContributionPartnersInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  activities?: InputMaybe<UserActivityCreateNestedManyWithoutUserInput>;
  address: Scalars['String'];
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutUserInput>;
  chain_type: ChainTypeCreateNestedOneWithoutUsersInput;
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_users?: InputMaybe<DiscordUserCreateNestedManyWithoutUserInput>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  guild_users?: InputMaybe<GuildUserCreateNestedManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  twitter_user?: InputMaybe<TwitterUserCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutContributionsInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  activities?: InputMaybe<UserActivityCreateNestedManyWithoutUserInput>;
  address: Scalars['String'];
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutUserInput>;
  chain_type: ChainTypeCreateNestedOneWithoutUsersInput;
  contributionPartners?: InputMaybe<PartnerCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_users?: InputMaybe<DiscordUserCreateNestedManyWithoutUserInput>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  guild_users?: InputMaybe<GuildUserCreateNestedManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  twitter_user?: InputMaybe<TwitterUserCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutDiscord_UsersInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  activities?: InputMaybe<UserActivityCreateNestedManyWithoutUserInput>;
  address: Scalars['String'];
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutUserInput>;
  chain_type: ChainTypeCreateNestedOneWithoutUsersInput;
  contributionPartners?: InputMaybe<PartnerCreateNestedManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  guild_users?: InputMaybe<GuildUserCreateNestedManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  twitter_user?: InputMaybe<TwitterUserCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutGuild_UsersInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  activities?: InputMaybe<UserActivityCreateNestedManyWithoutUserInput>;
  address: Scalars['String'];
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutUserInput>;
  chain_type: ChainTypeCreateNestedOneWithoutUsersInput;
  contributionPartners?: InputMaybe<PartnerCreateNestedManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_users?: InputMaybe<DiscordUserCreateNestedManyWithoutUserInput>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  linear_users?: InputMaybe<LinearUserCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  twitter_user?: InputMaybe<TwitterUserCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutLinear_UsersInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  activities?: InputMaybe<UserActivityCreateNestedManyWithoutUserInput>;
  address: Scalars['String'];
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutUserInput>;
  chain_type: ChainTypeCreateNestedOneWithoutUsersInput;
  contributionPartners?: InputMaybe<PartnerCreateNestedManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_users?: InputMaybe<DiscordUserCreateNestedManyWithoutUserInput>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  guild_users?: InputMaybe<GuildUserCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  twitter_user?: InputMaybe<TwitterUserCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutTwitter_UserInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  activities?: InputMaybe<UserActivityCreateNestedManyWithoutUserInput>;
  address: Scalars['String'];
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutUserInput>;
  chain_type: ChainTypeCreateNestedOneWithoutUsersInput;
  contributionPartners?: InputMaybe<PartnerCreateNestedManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_users?: InputMaybe<DiscordUserCreateNestedManyWithoutUserInput>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  guild_users?: InputMaybe<GuildUserCreateNestedManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserGroupBy = {
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  active: Scalars['Boolean'];
  address: Scalars['String'];
  chain_type_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  chain_type_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  chain_type_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  display_name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  full_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  chain_type_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  chain_type_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  display_name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  full_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOnChainContributionCreateInput = {
  activityTypeId: Scalars['Float'];
  dateOfEngagement: Scalars['DateTime'];
  dateOfSubmission: Scalars['DateTime'];
  details: Scalars['String'];
  name: Scalars['String'];
  onChainId: Scalars['Float'];
  proof: Scalars['String'];
  status: Scalars['String'];
  userId: Scalars['Float'];
};

export type UserOnChainContributionUpdateInput = {
  dateOfEngagement: Scalars['DateTime'];
  dateOfSubmission: Scalars['DateTime'];
  details: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  onChainId: Scalars['Float'];
  proof: Scalars['String'];
  status: Scalars['String'];
  userId: Scalars['Float'];
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  active?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  chain_type_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  display_name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  full_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  activities?: InputMaybe<UserActivityOrderByRelationAggregateInput>;
  address?: InputMaybe<SortOrder>;
  attestations?: InputMaybe<AttestationOrderByRelationAggregateInput>;
  chain_type?: InputMaybe<ChainTypeOrderByWithRelationInput>;
  chain_type_id?: InputMaybe<SortOrder>;
  contributionPartners?: InputMaybe<PartnerOrderByRelationAggregateInput>;
  contributions?: InputMaybe<ContributionOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  discord_users?: InputMaybe<DiscordUserOrderByRelationAggregateInput>;
  display_name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  full_name?: InputMaybe<SortOrder>;
  guild_users?: InputMaybe<GuildUserOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  linear_users?: InputMaybe<LinearUserOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  twitter_user?: InputMaybe<TwitterUserOrderByWithRelationInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Active = 'active',
  Address = 'address',
  ChainTypeId = 'chain_type_id',
  CreatedAt = 'createdAt',
  DisplayName = 'display_name',
  Email = 'email',
  FullName = 'full_name',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  address?: InputMaybe<StringFilter>;
  chain_type_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  display_name?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  full_name?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  active?: InputMaybe<BoolWithAggregatesFilter>;
  address?: InputMaybe<StringWithAggregatesFilter>;
  chain_type_id?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  display_name?: InputMaybe<StringNullableWithAggregatesFilter>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  full_name?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserSumAggregate = {
  chain_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  chain_type_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateCustomInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UserUpdateInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutChain_TypeInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutChain_TypeInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutChain_TypeInput>>;
  create?: InputMaybe<Array<UserCreateWithoutChain_TypeInput>>;
  createMany?: InputMaybe<UserCreateManyChain_TypeInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutChain_TypeInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutChain_TypeInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutChain_TypeInput>>;
};

export type UserUpdateOneRequiredWithoutActivitiesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutActivitiesInput>;
  create?: InputMaybe<UserCreateWithoutActivitiesInput>;
  update?: InputMaybe<UserUpdateWithoutActivitiesInput>;
  upsert?: InputMaybe<UserUpsertWithoutActivitiesInput>;
};

export type UserUpdateOneRequiredWithoutAttestationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAttestationsInput>;
  create?: InputMaybe<UserCreateWithoutAttestationsInput>;
  update?: InputMaybe<UserUpdateWithoutAttestationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAttestationsInput>;
};

export type UserUpdateOneRequiredWithoutContributionPartnersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutContributionPartnersInput>;
  create?: InputMaybe<UserCreateWithoutContributionPartnersInput>;
  update?: InputMaybe<UserUpdateWithoutContributionPartnersInput>;
  upsert?: InputMaybe<UserUpsertWithoutContributionPartnersInput>;
};

export type UserUpdateOneRequiredWithoutContributionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<UserCreateWithoutContributionsInput>;
  update?: InputMaybe<UserUpdateWithoutContributionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutContributionsInput>;
};

export type UserUpdateOneRequiredWithoutDiscord_UsersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutDiscord_UsersInput>;
  create?: InputMaybe<UserCreateWithoutDiscord_UsersInput>;
  update?: InputMaybe<UserUpdateWithoutDiscord_UsersInput>;
  upsert?: InputMaybe<UserUpsertWithoutDiscord_UsersInput>;
};

export type UserUpdateOneRequiredWithoutGuild_UsersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutGuild_UsersInput>;
  create?: InputMaybe<UserCreateWithoutGuild_UsersInput>;
  update?: InputMaybe<UserUpdateWithoutGuild_UsersInput>;
  upsert?: InputMaybe<UserUpsertWithoutGuild_UsersInput>;
};

export type UserUpdateOneWithoutLinear_UsersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLinear_UsersInput>;
  create?: InputMaybe<UserCreateWithoutLinear_UsersInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutLinear_UsersInput>;
  upsert?: InputMaybe<UserUpsertWithoutLinear_UsersInput>;
};

export type UserUpdateOneWithoutTwitter_UserInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTwitter_UserInput>;
  create?: InputMaybe<UserCreateWithoutTwitter_UserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutTwitter_UserInput>;
  upsert?: InputMaybe<UserUpsertWithoutTwitter_UserInput>;
};

export type UserUpdateWithWhereUniqueWithoutChain_TypeInput = {
  data: UserUpdateWithoutChain_TypeInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutActivitiesInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAttestationsInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChain_TypeInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutContributionPartnersInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutContributionsInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutDiscord_UsersInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutGuild_UsersInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutLinear_UsersInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTwitter_UserInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutChain_TypeInput = {
  create: UserCreateWithoutChain_TypeInput;
  update: UserUpdateWithoutChain_TypeInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutActivitiesInput = {
  create: UserCreateWithoutActivitiesInput;
  update: UserUpdateWithoutActivitiesInput;
};

export type UserUpsertWithoutAttestationsInput = {
  create: UserCreateWithoutAttestationsInput;
  update: UserUpdateWithoutAttestationsInput;
};

export type UserUpsertWithoutContributionPartnersInput = {
  create: UserCreateWithoutContributionPartnersInput;
  update: UserUpdateWithoutContributionPartnersInput;
};

export type UserUpsertWithoutContributionsInput = {
  create: UserCreateWithoutContributionsInput;
  update: UserUpdateWithoutContributionsInput;
};

export type UserUpsertWithoutDiscord_UsersInput = {
  create: UserCreateWithoutDiscord_UsersInput;
  update: UserUpdateWithoutDiscord_UsersInput;
};

export type UserUpsertWithoutGuild_UsersInput = {
  create: UserCreateWithoutGuild_UsersInput;
  update: UserUpdateWithoutGuild_UsersInput;
};

export type UserUpsertWithoutLinear_UsersInput = {
  create: UserCreateWithoutLinear_UsersInput;
  update: UserUpdateWithoutLinear_UsersInput;
};

export type UserUpsertWithoutTwitter_UserInput = {
  create: UserCreateWithoutTwitter_UserInput;
  update: UserUpdateWithoutTwitter_UserInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  activities?: InputMaybe<UserActivityListRelationFilter>;
  address?: InputMaybe<StringFilter>;
  attestations?: InputMaybe<AttestationListRelationFilter>;
  chain_type?: InputMaybe<ChainTypeRelationFilter>;
  chain_type_id?: InputMaybe<IntFilter>;
  contributionPartners?: InputMaybe<PartnerListRelationFilter>;
  contributions?: InputMaybe<ContributionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  discord_users?: InputMaybe<DiscordUserListRelationFilter>;
  display_name?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  full_name?: InputMaybe<StringNullableFilter>;
  guild_users?: InputMaybe<GuildUserListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  linear_users?: InputMaybe<LinearUserListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  twitter_user?: InputMaybe<TwitterUserRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  address?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type JobFieldsFragmentFragment = { id: number, createdAt: any, updatedAt: any, completedDate: any, name: string, startDate: any };

export type ListJobRunsQueryVariables = Exact<{
  where?: JobRunWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<JobRunOrderByWithRelationInput> | JobRunOrderByWithRelationInput>;
}>;


export type ListJobRunsQuery = { result: Array<{ id: number, createdAt: any, updatedAt: any, completedDate: any, name: string, startDate: any }> };

export type GetJobRunQueryVariables = Exact<{
  where: JobRunWhereUniqueInput;
}>;


export type GetJobRunQuery = { result?: { id: number, createdAt: any, updatedAt: any, completedDate: any, name: string, startDate: any } | null };

export type BulkCreateIssuesMutationVariables = Exact<{
  data: Array<LinearIssueCreateManyInput> | LinearIssueCreateManyInput;
  skipDuplicates: Scalars['Boolean'];
}>;


export type BulkCreateIssuesMutation = { createManyLinearIssue: { count: number } };

export type LinearUserFragmentFragment = { active: boolean, displayName?: string | null, email?: string | null, linear_id: string, name?: string | null, url?: string | null, id: number, createdAt?: any | null };

export type UpsertLinearUserMutationVariables = Exact<{
  create: LinearUserCreateInput;
  update: LinearUserUpdateInput;
  where: LinearUserWhereUniqueInput;
}>;


export type UpsertLinearUserMutation = { upsertLinearUser: { active: boolean, displayName?: string | null, email?: string | null, linear_id: string, name?: string | null, url?: string | null, id: number, createdAt?: any | null } };

export type UpdateLinearUserMutationVariables = Exact<{
  data: LinearUserUpdateInput;
  where: LinearUserWhereUniqueInput;
}>;


export type UpdateLinearUserMutation = { updateLinearUser?: { active: boolean, displayName?: string | null, email?: string | null, linear_id: string, name?: string | null, url?: string | null, id: number, createdAt?: any | null } | null };

export type UpsertLinearCycleMutationVariables = Exact<{
  create: LinearCycleCreateInput;
  update: LinearCycleUpdateInput;
  where: LinearCycleWhereUniqueInput;
}>;


export type UpsertLinearCycleMutation = { upsertLinearCycle: { id: number, endsAt: any, linear_id: string, number: number, startsAt: any } };

export type UpsertLinearProjectMutationVariables = Exact<{
  create: LinearProjectCreateInput;
  update: LinearProjectUpdateInput;
  where: LinearProjectWhereUniqueInput;
}>;


export type UpsertLinearProjectMutation = { upsertLinearProject: { id: number, linear_id: string, name: string } };

export type UpsertLinearTeamMutationVariables = Exact<{
  create: LinearTeamCreateInput;
  update: LinearTeamUpdateInput;
  where: LinearTeamWhereUniqueInput;
}>;


export type UpsertLinearTeamMutation = { upsertLinearTeam: { id: number, key: string, name: string, linear_id: string } };

export type CreateJobRunMutationVariables = Exact<{
  data: JobRunCreateInput;
}>;


export type CreateJobRunMutation = { createJobRun: { completedDate: any, startDate: any, name: string } };

export type GuildFragmentFragment = { congrats_channel?: number | null, createdAt: any, discord_id?: string | null, id: number, logo?: string | null, name?: string | null, updatedAt: any };

export type CreateGuildMutationVariables = Exact<{
  data: GuildCreateInput;
}>;


export type CreateGuildMutation = { createGuild: { congrats_channel?: number | null, discord_id?: string | null, logo?: string | null, name?: string | null } };

export type DeleteGuildUserMutationVariables = Exact<{
  where: GuildUserWhereUniqueInput;
}>;


export type DeleteGuildUserMutation = { deleteGuildUser?: { id: number } | null };

export type GetGuildQueryVariables = Exact<{
  where: GuildWhereUniqueInput;
}>;


export type GetGuildQuery = { result?: { congrats_channel?: number | null, createdAt: any, discord_id?: string | null, id: number, logo?: string | null, name?: string | null, updatedAt: any } | null };

export type ListGuildsQueryVariables = Exact<{
  where?: GuildWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<GuildOrderByWithRelationInput> | GuildOrderByWithRelationInput>;
}>;


export type ListGuildsQuery = { result: Array<{ congrats_channel?: number | null, createdAt: any, discord_id?: string | null, id: number, logo?: string | null, name?: string | null, updatedAt: any }> };

export type TwitterTweetFragmentFragment = { id: number, updatedAt: any, createdAt: any, text: string, twitter_tweet_id: number, twitter_user?: { id: number, name?: string | null, createdAt: any, updatedAt: any, username: string } | null, contribution?: { date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: any, on_chain_id?: number | null, activity_type: { active: boolean, createdAt: any, id: number, name: string, updatedAt: any }, status: { createdAt: any, id: number, name: string, updatedAt: any }, user: { address: string, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any }, attestations: Array<{ id: number, user_id: number, date_of_attestation: any }>, guilds: Array<{ guild: { id: number, name?: string | null } }> } | null };

export type BulkCreateTwitterTweetMutationVariables = Exact<{
  data: Array<TwitterTweetCreateManyInput> | TwitterTweetCreateManyInput;
  skipDuplicates: Scalars['Boolean'];
}>;


export type BulkCreateTwitterTweetMutation = { createManyTwitterTweet: { count: number } };

export type TwitterAccountFragmentFragment = { account_name: string, createdAt: any, id: number, updatedAt: any, guild?: { id: number, name?: string | null } | null };

export type ListTwitterAccountsQueryVariables = Exact<{
  where?: TwitterAccountWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<TwitterAccountOrderByWithRelationInput> | TwitterAccountOrderByWithRelationInput>;
}>;


export type ListTwitterAccountsQuery = { result: Array<{ account_name: string, createdAt: any, id: number, updatedAt: any, guild?: { id: number, name?: string | null } | null }> };

export type TwitterUserFragmentFragment = { createdAt: any, updatedAt: any, description?: string | null, id: number, twitter_user_id?: string | null, username: string, user?: { id: number } | null };

export type UpsertTwitterUserMutationVariables = Exact<{
  create: TwitterUserCreateInput;
  update: TwitterUserUpdateInput;
  where: TwitterUserWhereUniqueInput;
}>;


export type UpsertTwitterUserMutation = { upsertTwitterUser: { createdAt: any, updatedAt: any, description?: string | null, id: number, twitter_user_id?: string | null, username: string, user?: { id: number } | null } };

export type UserFragmentFragment = { address: string, active: boolean, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any, chain_type: { id: number, name: string, createdAt: any, updatedAt: any } };

export type GetUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserQuery = { result?: { address: string, active: boolean, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any, chain_type: { id: number, name: string, createdAt: any, updatedAt: any } } | null };

export type GetUserCustomQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetUserCustomQuery = { result: { address: string, active: boolean, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any, chain_type: { id: number, name: string, createdAt: any, updatedAt: any } } };

export type ListUsersQueryVariables = Exact<{
  where?: UserWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput>;
}>;


export type ListUsersQuery = { result: Array<{ address: string, active: boolean, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any, chain_type: { id: number, name: string, createdAt: any, updatedAt: any } }> };

export type ListUserByAddressQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type ListUserByAddressQuery = { result: Array<{ address: string, active: boolean, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any, chain_type: { id: number, name: string, createdAt: any, updatedAt: any } }> };

export type UpdateUserMutationVariables = Exact<{
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}>;


export type UpdateUserMutation = { updateUser?: { address: string, active: boolean, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any, chain_type: { id: number, name: string, createdAt: any, updatedAt: any } } | null };

export type UpdateUserCustomMutationVariables = Exact<{
  data: UserUpdateCustomInput;
}>;


export type UpdateUserCustomMutation = { updateUserCustom: { address: string, active: boolean, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any, chain_type: { id: number, name: string, createdAt: any, updatedAt: any } } };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { createUser: { address: string, active: boolean, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any, chain_type: { id: number, name: string, createdAt: any, updatedAt: any } } };

export type CreateUserCustomMutationVariables = Exact<{
  data: UserCreateCustomInput;
}>;


export type CreateUserCustomMutation = { createUserCustom: { address: string, active: boolean, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any, chain_type: { id: number, name: string, createdAt: any, updatedAt: any } } };

export type ContributionFragmentFragment = { date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: any, on_chain_id?: number | null, activity_type: { active: boolean, createdAt: any, id: number, name: string, updatedAt: any }, status: { createdAt: any, id: number, name: string, updatedAt: any }, user: { address: string, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any }, attestations: Array<{ id: number, user_id: number, date_of_attestation: any }>, guilds: Array<{ guild: { id: number, name?: string | null } }> };

export type GetContributionQueryVariables = Exact<{
  where: ContributionWhereUniqueInput;
}>;


export type GetContributionQuery = { result?: { date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: any, on_chain_id?: number | null, activity_type: { active: boolean, createdAt: any, id: number, name: string, updatedAt: any }, status: { createdAt: any, id: number, name: string, updatedAt: any }, user: { address: string, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any }, attestations: Array<{ id: number, user_id: number, date_of_attestation: any }>, guilds: Array<{ guild: { id: number, name?: string | null } }> } | null };

export type ListContributionsQueryVariables = Exact<{
  where?: ContributionWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<ContributionOrderByWithRelationInput> | ContributionOrderByWithRelationInput>;
}>;


export type ListContributionsQuery = { result: Array<{ date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: any, on_chain_id?: number | null, activity_type: { active: boolean, createdAt: any, id: number, name: string, updatedAt: any }, status: { createdAt: any, id: number, name: string, updatedAt: any }, user: { address: string, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any }, attestations: Array<{ id: number, user_id: number, date_of_attestation: any }>, guilds: Array<{ guild: { id: number, name?: string | null } }> }> };

export type CreateContributionMutationVariables = Exact<{
  data: ContributionCreateInput;
}>;


export type CreateContributionMutation = { createContribution: { date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: any, on_chain_id?: number | null, activity_type: { active: boolean, createdAt: any, id: number, name: string, updatedAt: any }, status: { createdAt: any, id: number, name: string, updatedAt: any }, user: { address: string, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any }, attestations: Array<{ id: number, user_id: number, date_of_attestation: any }>, guilds: Array<{ guild: { id: number, name?: string | null } }> } };

export type CreateUserContributionMutationVariables = Exact<{
  data: UserContributionCreateInput;
}>;


export type CreateUserContributionMutation = { createUserContribution: { date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: any, on_chain_id?: number | null, activity_type: { active: boolean, createdAt: any, id: number, name: string, updatedAt: any }, status: { createdAt: any, id: number, name: string, updatedAt: any }, user: { address: string, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any }, attestations: Array<{ id: number, user_id: number, date_of_attestation: any }>, guilds: Array<{ guild: { id: number, name?: string | null } }> } };

export type CreateOnChainUserContributionMutationVariables = Exact<{
  data: UserOnChainContributionCreateInput;
}>;


export type CreateOnChainUserContributionMutation = { createOnChainUserContribution: { date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: any, on_chain_id?: number | null, activity_type: { active: boolean, createdAt: any, id: number, name: string, updatedAt: any }, status: { createdAt: any, id: number, name: string, updatedAt: any }, user: { address: string, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any }, attestations: Array<{ id: number, user_id: number, date_of_attestation: any }>, guilds: Array<{ guild: { id: number, name?: string | null } }> } };

export type UpdateUserContributionMutationVariables = Exact<{
  data: UserContributionUpdateInput;
}>;


export type UpdateUserContributionMutation = { updateUserContribution: { date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: any, on_chain_id?: number | null, activity_type: { active: boolean, createdAt: any, id: number, name: string, updatedAt: any }, status: { createdAt: any, id: number, name: string, updatedAt: any }, user: { address: string, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any }, attestations: Array<{ id: number, user_id: number, date_of_attestation: any }>, guilds: Array<{ guild: { id: number, name?: string | null } }> } };

export type UpdateUserOnChainContributionMutationVariables = Exact<{
  data: UserOnChainContributionUpdateInput;
}>;


export type UpdateUserOnChainContributionMutation = { updateUserOnChainContribution: { date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: any, on_chain_id?: number | null, activity_type: { active: boolean, createdAt: any, id: number, name: string, updatedAt: any }, status: { createdAt: any, id: number, name: string, updatedAt: any }, user: { address: string, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any }, attestations: Array<{ id: number, user_id: number, date_of_attestation: any }>, guilds: Array<{ guild: { id: number, name?: string | null } }> } };

export type BulkCreateContributionMutationVariables = Exact<{
  data: Array<ContributionCreateManyInput> | ContributionCreateManyInput;
  skipDuplicates: Scalars['Boolean'];
}>;


export type BulkCreateContributionMutation = { createManyContribution: { count: number } };

export type UpdateContributionMutationVariables = Exact<{
  data: ContributionUpdateInput;
  where: ContributionWhereUniqueInput;
}>;


export type UpdateContributionMutation = { updateContribution?: { date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: any, on_chain_id?: number | null, activity_type: { active: boolean, createdAt: any, id: number, name: string, updatedAt: any }, status: { createdAt: any, id: number, name: string, updatedAt: any }, user: { address: string, createdAt: any, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: any }, attestations: Array<{ id: number, user_id: number, date_of_attestation: any }>, guilds: Array<{ guild: { id: number, name?: string | null } }> } | null };

export type ActivityTypeFragmentFragment = { active: boolean, createdAt: any, id: number, name: string, updatedAt: any };

export type ListActivityTypesQueryVariables = Exact<{
  where?: ActivityTypeWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<ActivityTypeOrderByWithRelationInput> | ActivityTypeOrderByWithRelationInput>;
}>;


export type ListActivityTypesQuery = { result: Array<{ active: boolean, createdAt: any, id: number, name: string, updatedAt: any }> };

export type CreateActivityTypeMutationVariables = Exact<{
  data: ActivityTypeCreateInput;
}>;


export type CreateActivityTypeMutation = { createActivityType: { active: boolean, createdAt: any, id: number, name: string, updatedAt: any } };

export type UserActivityFragmentFragment = { createdAt: any, id: number, updatedAt: any, activity_type: { id: number }, user: { id: number } };

export type CreateUserActivityMutationVariables = Exact<{
  data: UserActivityCreateInput;
}>;


export type CreateUserActivityMutation = { createUserActivity: { createdAt: any, id: number, updatedAt: any, activity_type: { id: number }, user: { id: number } } };

export type AttestationFragmentFragment = { date_of_attestation: any, id: number, updatedAt: any, confidence: { createdAt: any, id: number, name: string, updatedAt: any }, contribution: { activity_type_id: number, date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: any, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } };

export type ListAttestationsQueryVariables = Exact<{
  where?: AttestationWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput> | AttestationOrderByWithRelationInput>;
}>;


export type ListAttestationsQuery = { result: Array<{ date_of_attestation: any, id: number, updatedAt: any, confidence: { createdAt: any, id: number, name: string, updatedAt: any }, contribution: { activity_type_id: number, date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: any, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } }> };

export type CreateAttestationMutationVariables = Exact<{
  data: AttestationCreateInput;
}>;


export type CreateAttestationMutation = { createAttestation: { date_of_attestation: any, id: number, updatedAt: any, confidence: { createdAt: any, id: number, name: string, updatedAt: any }, contribution: { activity_type_id: number, date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: any, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } } };

export type CreateUserOnChainAttestationMutationVariables = Exact<{
  data: AttestationUserOnChainCreateInput;
}>;


export type CreateUserOnChainAttestationMutation = { createUserOnChainAttestation: { date_of_attestation: any, id: number, updatedAt: any, confidence: { createdAt: any, id: number, name: string, updatedAt: any }, contribution: { activity_type_id: number, date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: any, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } } };

export type UpdateUserOnChainAttestationMutationVariables = Exact<{
  data: AttestationUserOnChainUpdateInput;
}>;


export type UpdateUserOnChainAttestationMutation = { updateUserOnChainAttestation: { date_of_attestation: any, id: number, updatedAt: any, confidence: { createdAt: any, id: number, name: string, updatedAt: any }, contribution: { activity_type_id: number, date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: any, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } } };

export type BulkCreateAttestationMutationVariables = Exact<{
  data: Array<AttestationCreateManyInput> | AttestationCreateManyInput;
  skipDuplicates: Scalars['Boolean'];
}>;


export type BulkCreateAttestationMutation = { createManyAttestation: { count: number } };

export type UpdateAttestationMutationVariables = Exact<{
  data: AttestationUpdateInput;
  where: AttestationWhereUniqueInput;
}>;


export type UpdateAttestationMutation = { updateAttestation?: { date_of_attestation: any, id: number, updatedAt: any, confidence: { createdAt: any, id: number, name: string, updatedAt: any }, contribution: { activity_type_id: number, date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: any, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } } | null };

export type PartnerFragmentFragment = { createdAt: any, updatedAt: any, contribution: { activity_type_id: number, date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: any, user_id: number }, user: { name?: string | null, address: string, id: number } };

export type ListPartnersQueryVariables = Exact<{
  where?: PartnerWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<PartnerOrderByWithRelationInput> | PartnerOrderByWithRelationInput>;
}>;


export type ListPartnersQuery = { result: Array<{ createdAt: any, updatedAt: any, contribution: { activity_type_id: number, date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: any, user_id: number }, user: { name?: string | null, address: string, id: number } }> };

export type CreateUserAttestationMutationVariables = Exact<{
  data: AttestationUserCreateInput;
}>;


export type CreateUserAttestationMutation = { createUserAttestation: { date_of_attestation: any, id: number, updatedAt: any, confidence: { createdAt: any, id: number, name: string, updatedAt: any }, contribution: { activity_type_id: number, date_of_engagement: any, date_of_submission: any, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: any, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } } };

export const JobFieldsFragmentFragmentDoc = gql`
    fragment JobFieldsFragment on JobRun {
  id
  createdAt
  updatedAt
  completedDate
  name
  startDate
}
    `;
export const LinearUserFragmentFragmentDoc = gql`
    fragment LinearUserFragment on LinearUser {
  active
  displayName
  email
  linear_id
  name
  url
  id
  createdAt
}
    `;
export const GuildFragmentFragmentDoc = gql`
    fragment GuildFragment on Guild {
  congrats_channel
  createdAt
  discord_id
  id
  logo
  name
  updatedAt
}
    `;
export const ContributionFragmentFragmentDoc = gql`
    fragment ContributionFragment on Contribution {
  activity_type {
    active
    createdAt
    id
    name
    updatedAt
  }
  date_of_engagement
  date_of_submission
  details
  id
  name
  proof
  status {
    createdAt
    id
    name
    updatedAt
  }
  updatedAt
  user {
    address
    createdAt
    display_name
    full_name
    id
    name
    updatedAt
  }
  attestations {
    id
    user_id
    date_of_attestation
  }
  guilds {
    guild {
      id
      name
    }
  }
  on_chain_id
}
    `;
export const TwitterTweetFragmentFragmentDoc = gql`
    fragment TwitterTweetFragment on TwitterTweet {
  id
  updatedAt
  createdAt
  text
  twitter_tweet_id
  twitter_user {
    id
    name
    createdAt
    updatedAt
    username
  }
  contribution {
    ...ContributionFragment
  }
}
    `;
export const TwitterAccountFragmentFragmentDoc = gql`
    fragment TwitterAccountFragment on TwitterAccount {
  account_name
  createdAt
  guild {
    id
    name
  }
  id
  updatedAt
}
    `;
export const TwitterUserFragmentFragmentDoc = gql`
    fragment TwitterUserFragment on TwitterUser {
  createdAt
  updatedAt
  description
  id
  twitter_user_id
  user {
    id
  }
  username
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  address
  active
  chain_type {
    id
    name
    createdAt
    updatedAt
  }
  createdAt
  display_name
  full_name
  id
  name
  updatedAt
}
    `;
export const ActivityTypeFragmentFragmentDoc = gql`
    fragment ActivityTypeFragment on ActivityType {
  active
  createdAt
  id
  name
  updatedAt
}
    `;
export const UserActivityFragmentFragmentDoc = gql`
    fragment UserActivityFragment on UserActivity {
  activity_type {
    id
  }
  createdAt
  id
  user {
    id
  }
  updatedAt
}
    `;
export const AttestationFragmentFragmentDoc = gql`
    fragment AttestationFragment on Attestation {
  confidence {
    createdAt
    id
    name
    updatedAt
  }
  contribution {
    activity_type_id
    date_of_engagement
    date_of_submission
    details
    id
    name
    proof
    status_id
    updatedAt
    user_id
    on_chain_id
  }
  date_of_attestation
  id
  updatedAt
  user {
    name
    address
    id
  }
}
    `;
export const PartnerFragmentFragmentDoc = gql`
    fragment PartnerFragment on Partner {
  contribution {
    activity_type_id
    date_of_engagement
    date_of_submission
    details
    id
    name
    proof
    status_id
    updatedAt
    user_id
  }
  createdAt
  updatedAt
  user {
    name
    address
    id
  }
}
    `;
export const ListJobRunsDocument = gql`
    query listJobRuns($where: JobRunWhereInput! = {}, $skip: Int! = 0, $first: Int! = 10, $orderBy: [JobRunOrderByWithRelationInput!]) {
  result: jobRuns(where: $where, skip: $skip, take: $first, orderBy: $orderBy) {
    ...JobFieldsFragment
  }
}
    ${JobFieldsFragmentFragmentDoc}`;
export const GetJobRunDocument = gql`
    query getJobRun($where: JobRunWhereUniqueInput!) {
  result: jobRun(where: $where) {
    ...JobFieldsFragment
  }
}
    ${JobFieldsFragmentFragmentDoc}`;
export const BulkCreateIssuesDocument = gql`
    mutation bulkCreateIssues($data: [LinearIssueCreateManyInput!]!, $skipDuplicates: Boolean!) {
  createManyLinearIssue(data: $data, skipDuplicates: $skipDuplicates) {
    count
  }
}
    `;
export const UpsertLinearUserDocument = gql`
    mutation upsertLinearUser($create: LinearUserCreateInput!, $update: LinearUserUpdateInput!, $where: LinearUserWhereUniqueInput!) {
  upsertLinearUser(create: $create, update: $update, where: $where) {
    ...LinearUserFragment
  }
}
    ${LinearUserFragmentFragmentDoc}`;
export const UpdateLinearUserDocument = gql`
    mutation updateLinearUser($data: LinearUserUpdateInput!, $where: LinearUserWhereUniqueInput!) {
  updateLinearUser(data: $data, where: $where) {
    ...LinearUserFragment
  }
}
    ${LinearUserFragmentFragmentDoc}`;
export const UpsertLinearCycleDocument = gql`
    mutation upsertLinearCycle($create: LinearCycleCreateInput!, $update: LinearCycleUpdateInput!, $where: LinearCycleWhereUniqueInput!) {
  upsertLinearCycle(create: $create, update: $update, where: $where) {
    id
    endsAt
    linear_id
    number
    startsAt
  }
}
    `;
export const UpsertLinearProjectDocument = gql`
    mutation upsertLinearProject($create: LinearProjectCreateInput!, $update: LinearProjectUpdateInput!, $where: LinearProjectWhereUniqueInput!) {
  upsertLinearProject(create: $create, update: $update, where: $where) {
    id
    linear_id
    name
  }
}
    `;
export const UpsertLinearTeamDocument = gql`
    mutation upsertLinearTeam($create: LinearTeamCreateInput!, $update: LinearTeamUpdateInput!, $where: LinearTeamWhereUniqueInput!) {
  upsertLinearTeam(create: $create, update: $update, where: $where) {
    id
    key
    name
    linear_id
  }
}
    `;
export const CreateJobRunDocument = gql`
    mutation createJobRun($data: JobRunCreateInput!) {
  createJobRun(data: $data) {
    completedDate
    startDate
    name
  }
}
    `;
export const CreateGuildDocument = gql`
    mutation createGuild($data: GuildCreateInput!) {
  createGuild(data: $data) {
    congrats_channel
    discord_id
    logo
    name
  }
}
    `;
export const DeleteGuildUserDocument = gql`
    mutation deleteGuildUser($where: GuildUserWhereUniqueInput!) {
  deleteGuildUser(where: $where) {
    id
  }
}
    `;
export const GetGuildDocument = gql`
    query getGuild($where: GuildWhereUniqueInput!) {
  result: guild(where: $where) {
    ...GuildFragment
  }
}
    ${GuildFragmentFragmentDoc}`;
export const ListGuildsDocument = gql`
    query listGuilds($where: GuildWhereInput! = {}, $skip: Int! = 0, $first: Int! = 10, $orderBy: [GuildOrderByWithRelationInput!]) {
  result: guilds(where: $where, skip: $skip, take: $first, orderBy: $orderBy) {
    ...GuildFragment
  }
}
    ${GuildFragmentFragmentDoc}`;
export const BulkCreateTwitterTweetDocument = gql`
    mutation bulkCreateTwitterTweet($data: [TwitterTweetCreateManyInput!]!, $skipDuplicates: Boolean!) {
  createManyTwitterTweet(data: $data, skipDuplicates: $skipDuplicates) {
    count
  }
}
    `;
export const ListTwitterAccountsDocument = gql`
    query listTwitterAccounts($where: TwitterAccountWhereInput! = {}, $skip: Int! = 0, $first: Int! = 10, $orderBy: [TwitterAccountOrderByWithRelationInput!]) {
  result: twitterAccounts(
    where: $where
    skip: $skip
    take: $first
    orderBy: $orderBy
  ) {
    ...TwitterAccountFragment
  }
}
    ${TwitterAccountFragmentFragmentDoc}`;
export const UpsertTwitterUserDocument = gql`
    mutation upsertTwitterUser($create: TwitterUserCreateInput!, $update: TwitterUserUpdateInput!, $where: TwitterUserWhereUniqueInput!) {
  upsertTwitterUser(create: $create, update: $update, where: $where) {
    ...TwitterUserFragment
  }
}
    ${TwitterUserFragmentFragmentDoc}`;
export const GetUserDocument = gql`
    query getUser($where: UserWhereUniqueInput!) {
  result: user(where: $where) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export const GetUserCustomDocument = gql`
    query getUserCustom($id: Float!) {
  result: getUser(id: $id) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export const ListUsersDocument = gql`
    query listUsers($where: UserWhereInput! = {}, $skip: Int! = 0, $first: Int! = 10, $orderBy: [UserOrderByWithRelationInput!]) {
  result: users(where: $where, skip: $skip, take: $first, orderBy: $orderBy) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export const ListUserByAddressDocument = gql`
    query listUserByAddress($address: String!) {
  result: listUserByAddress(address: $address) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export const UpdateUserDocument = gql`
    mutation updateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export const UpdateUserCustomDocument = gql`
    mutation updateUserCustom($data: UserUpdateCustomInput!) {
  updateUserCustom(data: $data) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export const CreateUserDocument = gql`
    mutation createUser($data: UserCreateInput!) {
  createUser(data: $data) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export const CreateUserCustomDocument = gql`
    mutation createUserCustom($data: UserCreateCustomInput!) {
  createUserCustom(data: $data) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export const GetContributionDocument = gql`
    query getContribution($where: ContributionWhereUniqueInput!) {
  result: contribution(where: $where) {
    ...ContributionFragment
  }
}
    ${ContributionFragmentFragmentDoc}`;
export const ListContributionsDocument = gql`
    query listContributions($where: ContributionWhereInput! = {}, $skip: Int! = 0, $first: Int! = 10, $orderBy: [ContributionOrderByWithRelationInput!]) {
  result: contributions(
    where: $where
    skip: $skip
    take: $first
    orderBy: $orderBy
  ) {
    ...ContributionFragment
  }
}
    ${ContributionFragmentFragmentDoc}`;
export const CreateContributionDocument = gql`
    mutation createContribution($data: ContributionCreateInput!) {
  createContribution(data: $data) {
    ...ContributionFragment
  }
}
    ${ContributionFragmentFragmentDoc}`;
export const CreateUserContributionDocument = gql`
    mutation createUserContribution($data: UserContributionCreateInput!) {
  createUserContribution(data: $data) {
    ...ContributionFragment
  }
}
    ${ContributionFragmentFragmentDoc}`;
export const CreateOnChainUserContributionDocument = gql`
    mutation createOnChainUserContribution($data: UserOnChainContributionCreateInput!) {
  createOnChainUserContribution(data: $data) {
    ...ContributionFragment
  }
}
    ${ContributionFragmentFragmentDoc}`;
export const UpdateUserContributionDocument = gql`
    mutation updateUserContribution($data: UserContributionUpdateInput!) {
  updateUserContribution(data: $data) {
    ...ContributionFragment
  }
}
    ${ContributionFragmentFragmentDoc}`;
export const UpdateUserOnChainContributionDocument = gql`
    mutation updateUserOnChainContribution($data: UserOnChainContributionUpdateInput!) {
  updateUserOnChainContribution(data: $data) {
    ...ContributionFragment
  }
}
    ${ContributionFragmentFragmentDoc}`;
export const BulkCreateContributionDocument = gql`
    mutation bulkCreateContribution($data: [ContributionCreateManyInput!]!, $skipDuplicates: Boolean!) {
  createManyContribution(data: $data, skipDuplicates: $skipDuplicates) {
    count
  }
}
    `;
export const UpdateContributionDocument = gql`
    mutation updateContribution($data: ContributionUpdateInput!, $where: ContributionWhereUniqueInput!) {
  updateContribution(data: $data, where: $where) {
    ...ContributionFragment
  }
}
    ${ContributionFragmentFragmentDoc}`;
export const ListActivityTypesDocument = gql`
    query listActivityTypes($where: ActivityTypeWhereInput! = {}, $skip: Int! = 0, $first: Int! = 10, $orderBy: [ActivityTypeOrderByWithRelationInput!]) {
  result: activityTypes(
    where: $where
    skip: $skip
    take: $first
    orderBy: $orderBy
  ) {
    ...ActivityTypeFragment
  }
}
    ${ActivityTypeFragmentFragmentDoc}`;
export const CreateActivityTypeDocument = gql`
    mutation createActivityType($data: ActivityTypeCreateInput!) {
  createActivityType(data: $data) {
    ...ActivityTypeFragment
  }
}
    ${ActivityTypeFragmentFragmentDoc}`;
export const CreateUserActivityDocument = gql`
    mutation createUserActivity($data: UserActivityCreateInput!) {
  createUserActivity(data: $data) {
    ...UserActivityFragment
  }
}
    ${UserActivityFragmentFragmentDoc}`;
export const ListAttestationsDocument = gql`
    query listAttestations($where: AttestationWhereInput! = {}, $skip: Int! = 0, $first: Int! = 10, $orderBy: [AttestationOrderByWithRelationInput!]) {
  result: attestations(
    where: $where
    skip: $skip
    take: $first
    orderBy: $orderBy
  ) {
    ...AttestationFragment
  }
}
    ${AttestationFragmentFragmentDoc}`;
export const CreateAttestationDocument = gql`
    mutation createAttestation($data: AttestationCreateInput!) {
  createAttestation(data: $data) {
    ...AttestationFragment
  }
}
    ${AttestationFragmentFragmentDoc}`;
export const CreateUserOnChainAttestationDocument = gql`
    mutation createUserOnChainAttestation($data: AttestationUserOnChainCreateInput!) {
  createUserOnChainAttestation(data: $data) {
    ...AttestationFragment
  }
}
    ${AttestationFragmentFragmentDoc}`;
export const UpdateUserOnChainAttestationDocument = gql`
    mutation updateUserOnChainAttestation($data: AttestationUserOnChainUpdateInput!) {
  updateUserOnChainAttestation(data: $data) {
    ...AttestationFragment
  }
}
    ${AttestationFragmentFragmentDoc}`;
export const BulkCreateAttestationDocument = gql`
    mutation bulkCreateAttestation($data: [AttestationCreateManyInput!]!, $skipDuplicates: Boolean!) {
  createManyAttestation(data: $data, skipDuplicates: $skipDuplicates) {
    count
  }
}
    `;
export const UpdateAttestationDocument = gql`
    mutation updateAttestation($data: AttestationUpdateInput!, $where: AttestationWhereUniqueInput!) {
  updateAttestation(data: $data, where: $where) {
    ...AttestationFragment
  }
}
    ${AttestationFragmentFragmentDoc}`;
export const ListPartnersDocument = gql`
    query listPartners($where: PartnerWhereInput! = {}, $skip: Int! = 0, $first: Int! = 10, $orderBy: [PartnerOrderByWithRelationInput!]) {
  result: partners(where: $where, skip: $skip, take: $first, orderBy: $orderBy) {
    ...PartnerFragment
  }
}
    ${PartnerFragmentFragmentDoc}`;
export const CreateUserAttestationDocument = gql`
    mutation createUserAttestation($data: AttestationUserCreateInput!) {
  createUserAttestation(data: $data) {
    ...AttestationFragment
  }
}
    ${AttestationFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    listJobRuns(variables?: ListJobRunsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListJobRunsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListJobRunsQuery>(ListJobRunsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listJobRuns', 'query');
    },
    getJobRun(variables: GetJobRunQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetJobRunQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetJobRunQuery>(GetJobRunDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getJobRun', 'query');
    },
    bulkCreateIssues(variables: BulkCreateIssuesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BulkCreateIssuesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<BulkCreateIssuesMutation>(BulkCreateIssuesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'bulkCreateIssues', 'mutation');
    },
    upsertLinearUser(variables: UpsertLinearUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertLinearUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertLinearUserMutation>(UpsertLinearUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertLinearUser', 'mutation');
    },
    updateLinearUser(variables: UpdateLinearUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateLinearUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateLinearUserMutation>(UpdateLinearUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateLinearUser', 'mutation');
    },
    upsertLinearCycle(variables: UpsertLinearCycleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertLinearCycleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertLinearCycleMutation>(UpsertLinearCycleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertLinearCycle', 'mutation');
    },
    upsertLinearProject(variables: UpsertLinearProjectMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertLinearProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertLinearProjectMutation>(UpsertLinearProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertLinearProject', 'mutation');
    },
    upsertLinearTeam(variables: UpsertLinearTeamMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertLinearTeamMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertLinearTeamMutation>(UpsertLinearTeamDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertLinearTeam', 'mutation');
    },
    createJobRun(variables: CreateJobRunMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateJobRunMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateJobRunMutation>(CreateJobRunDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createJobRun', 'mutation');
    },
    createGuild(variables: CreateGuildMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateGuildMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateGuildMutation>(CreateGuildDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createGuild', 'mutation');
    },
    deleteGuildUser(variables: DeleteGuildUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteGuildUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteGuildUserMutation>(DeleteGuildUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteGuildUser', 'mutation');
    },
    getGuild(variables: GetGuildQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetGuildQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGuildQuery>(GetGuildDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getGuild', 'query');
    },
    listGuilds(variables?: ListGuildsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListGuildsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListGuildsQuery>(ListGuildsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listGuilds', 'query');
    },
    bulkCreateTwitterTweet(variables: BulkCreateTwitterTweetMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BulkCreateTwitterTweetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<BulkCreateTwitterTweetMutation>(BulkCreateTwitterTweetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'bulkCreateTwitterTweet', 'mutation');
    },
    listTwitterAccounts(variables?: ListTwitterAccountsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListTwitterAccountsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListTwitterAccountsQuery>(ListTwitterAccountsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listTwitterAccounts', 'query');
    },
    upsertTwitterUser(variables: UpsertTwitterUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertTwitterUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertTwitterUserMutation>(UpsertTwitterUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertTwitterUser', 'mutation');
    },
    getUser(variables: GetUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserQuery>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUser', 'query');
    },
    getUserCustom(variables: GetUserCustomQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserCustomQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserCustomQuery>(GetUserCustomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserCustom', 'query');
    },
    listUsers(variables?: ListUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListUsersQuery>(ListUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listUsers', 'query');
    },
    listUserByAddress(variables: ListUserByAddressQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListUserByAddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListUserByAddressQuery>(ListUserByAddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listUserByAddress', 'query');
    },
    updateUser(variables: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserMutation>(UpdateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUser', 'mutation');
    },
    updateUserCustom(variables: UpdateUserCustomMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserCustomMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserCustomMutation>(UpdateUserCustomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserCustom', 'mutation');
    },
    createUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser', 'mutation');
    },
    createUserCustom(variables: CreateUserCustomMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserCustomMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserCustomMutation>(CreateUserCustomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserCustom', 'mutation');
    },
    getContribution(variables: GetContributionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetContributionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetContributionQuery>(GetContributionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContribution', 'query');
    },
    listContributions(variables?: ListContributionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListContributionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListContributionsQuery>(ListContributionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listContributions', 'query');
    },
    createContribution(variables: CreateContributionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateContributionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateContributionMutation>(CreateContributionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createContribution', 'mutation');
    },
    createUserContribution(variables: CreateUserContributionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserContributionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserContributionMutation>(CreateUserContributionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserContribution', 'mutation');
    },
    createOnChainUserContribution(variables: CreateOnChainUserContributionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateOnChainUserContributionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOnChainUserContributionMutation>(CreateOnChainUserContributionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOnChainUserContribution', 'mutation');
    },
    updateUserContribution(variables: UpdateUserContributionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserContributionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserContributionMutation>(UpdateUserContributionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserContribution', 'mutation');
    },
    updateUserOnChainContribution(variables: UpdateUserOnChainContributionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserOnChainContributionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserOnChainContributionMutation>(UpdateUserOnChainContributionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserOnChainContribution', 'mutation');
    },
    bulkCreateContribution(variables: BulkCreateContributionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BulkCreateContributionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<BulkCreateContributionMutation>(BulkCreateContributionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'bulkCreateContribution', 'mutation');
    },
    updateContribution(variables: UpdateContributionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateContributionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateContributionMutation>(UpdateContributionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateContribution', 'mutation');
    },
    listActivityTypes(variables?: ListActivityTypesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListActivityTypesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListActivityTypesQuery>(ListActivityTypesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listActivityTypes', 'query');
    },
    createActivityType(variables: CreateActivityTypeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateActivityTypeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateActivityTypeMutation>(CreateActivityTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createActivityType', 'mutation');
    },
    createUserActivity(variables: CreateUserActivityMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserActivityMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserActivityMutation>(CreateUserActivityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserActivity', 'mutation');
    },
    listAttestations(variables?: ListAttestationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListAttestationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListAttestationsQuery>(ListAttestationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listAttestations', 'query');
    },
    createAttestation(variables: CreateAttestationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateAttestationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateAttestationMutation>(CreateAttestationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createAttestation', 'mutation');
    },
    createUserOnChainAttestation(variables: CreateUserOnChainAttestationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserOnChainAttestationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserOnChainAttestationMutation>(CreateUserOnChainAttestationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserOnChainAttestation', 'mutation');
    },
    updateUserOnChainAttestation(variables: UpdateUserOnChainAttestationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserOnChainAttestationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserOnChainAttestationMutation>(UpdateUserOnChainAttestationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserOnChainAttestation', 'mutation');
    },
    bulkCreateAttestation(variables: BulkCreateAttestationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BulkCreateAttestationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<BulkCreateAttestationMutation>(BulkCreateAttestationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'bulkCreateAttestation', 'mutation');
    },
    updateAttestation(variables: UpdateAttestationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateAttestationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateAttestationMutation>(UpdateAttestationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateAttestation', 'mutation');
    },
    listPartners(variables?: ListPartnersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListPartnersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListPartnersQuery>(ListPartnersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listPartners', 'query');
    },
    createUserAttestation(variables: CreateUserAttestationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserAttestationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserAttestationMutation>(CreateUserAttestationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserAttestation', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;