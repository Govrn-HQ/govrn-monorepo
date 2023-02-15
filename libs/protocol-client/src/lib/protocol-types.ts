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
  DateTime: string | Date;
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
  categoryActivity?: InputMaybe<CategoryActivityTypeUpdateManyWithoutActivity_TypeNestedInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutActivity_TypeNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildActivityTypeUpdateManyWithoutActivity_TypeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserActivityUpdateManyWithoutActivity_TypeNestedInput>;
};

export type ActivityTypeUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ActivityTypeUpdateOneRequiredWithoutCategoryActivityNestedInput = {
  connect?: InputMaybe<ActivityTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityTypeCreateOrConnectWithoutCategoryActivityInput>;
  create?: InputMaybe<ActivityTypeCreateWithoutCategoryActivityInput>;
  update?: InputMaybe<ActivityTypeUpdateWithoutCategoryActivityInput>;
  upsert?: InputMaybe<ActivityTypeUpsertWithoutCategoryActivityInput>;
};

export type ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput = {
  connect?: InputMaybe<ActivityTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityTypeCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<ActivityTypeCreateWithoutContributionsInput>;
  update?: InputMaybe<ActivityTypeUpdateWithoutContributionsInput>;
  upsert?: InputMaybe<ActivityTypeUpsertWithoutContributionsInput>;
};

export type ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput = {
  connect?: InputMaybe<ActivityTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityTypeCreateOrConnectWithoutGuildsInput>;
  create?: InputMaybe<ActivityTypeCreateWithoutGuildsInput>;
  update?: InputMaybe<ActivityTypeUpdateWithoutGuildsInput>;
  upsert?: InputMaybe<ActivityTypeUpsertWithoutGuildsInput>;
};

export type ActivityTypeUpdateOneRequiredWithoutUsersNestedInput = {
  connect?: InputMaybe<ActivityTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityTypeCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<ActivityTypeCreateWithoutUsersInput>;
  update?: InputMaybe<ActivityTypeUpdateWithoutUsersInput>;
  upsert?: InputMaybe<ActivityTypeUpsertWithoutUsersInput>;
};

export type ActivityTypeUpdateWithoutCategoryActivityInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutActivity_TypeNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildActivityTypeUpdateManyWithoutActivity_TypeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserActivityUpdateManyWithoutActivity_TypeNestedInput>;
};

export type ActivityTypeUpdateWithoutContributionsInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categoryActivity?: InputMaybe<CategoryActivityTypeUpdateManyWithoutActivity_TypeNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildActivityTypeUpdateManyWithoutActivity_TypeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserActivityUpdateManyWithoutActivity_TypeNestedInput>;
};

export type ActivityTypeUpdateWithoutGuildsInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categoryActivity?: InputMaybe<CategoryActivityTypeUpdateManyWithoutActivity_TypeNestedInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutActivity_TypeNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserActivityUpdateManyWithoutActivity_TypeNestedInput>;
};

export type ActivityTypeUpdateWithoutUsersInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categoryActivity?: InputMaybe<CategoryActivityTypeUpdateManyWithoutActivity_TypeNestedInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutActivity_TypeNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildActivityTypeUpdateManyWithoutActivity_TypeNestedInput>;
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

export type AggregateAttestationStatus = {
  _avg?: Maybe<AttestationStatusAvgAggregate>;
  _count?: Maybe<AttestationStatusCountAggregate>;
  _max?: Maybe<AttestationStatusMaxAggregate>;
  _min?: Maybe<AttestationStatusMinAggregate>;
  _sum?: Maybe<AttestationStatusSumAggregate>;
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

export type AggregateChain = {
  _avg?: Maybe<ChainAvgAggregate>;
  _count?: Maybe<ChainCountAggregate>;
  _max?: Maybe<ChainMaxAggregate>;
  _min?: Maybe<ChainMinAggregate>;
  _sum?: Maybe<ChainSumAggregate>;
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

export type AggregateGuildImport = {
  _avg?: Maybe<GuildImportAvgAggregate>;
  _count?: Maybe<GuildImportCountAggregate>;
  _max?: Maybe<GuildImportMaxAggregate>;
  _min?: Maybe<GuildImportMinAggregate>;
  _sum?: Maybe<GuildImportSumAggregate>;
};

export type AggregateGuildImportStatus = {
  _avg?: Maybe<GuildImportStatusAvgAggregate>;
  _count?: Maybe<GuildImportStatusCountAggregate>;
  _max?: Maybe<GuildImportStatusMaxAggregate>;
  _min?: Maybe<GuildImportStatusMinAggregate>;
  _sum?: Maybe<GuildImportStatusSumAggregate>;
};

export type AggregateGuildMembershipStatus = {
  _avg?: Maybe<GuildMembershipStatusAvgAggregate>;
  _count?: Maybe<GuildMembershipStatusCountAggregate>;
  _max?: Maybe<GuildMembershipStatusMaxAggregate>;
  _min?: Maybe<GuildMembershipStatusMinAggregate>;
  _sum?: Maybe<GuildMembershipStatusSumAggregate>;
};

export type AggregateGuildUser = {
  _avg?: Maybe<GuildUserAvgAggregate>;
  _count?: Maybe<GuildUserCountAggregate>;
  _max?: Maybe<GuildUserMaxAggregate>;
  _min?: Maybe<GuildUserMinAggregate>;
  _sum?: Maybe<GuildUserSumAggregate>;
};

export type AggregateIntegrationType = {
  _avg?: Maybe<IntegrationTypeAvgAggregate>;
  _count?: Maybe<IntegrationTypeCountAggregate>;
  _max?: Maybe<IntegrationTypeMaxAggregate>;
  _min?: Maybe<IntegrationTypeMinAggregate>;
  _sum?: Maybe<IntegrationTypeSumAggregate>;
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

export type AggregateTwitterTweetContribution = {
  _avg?: Maybe<TwitterTweetContributionAvgAggregate>;
  _count?: Maybe<TwitterTweetContributionCountAggregate>;
  _max?: Maybe<TwitterTweetContributionMaxAggregate>;
  _min?: Maybe<TwitterTweetContributionMinAggregate>;
  _sum?: Maybe<TwitterTweetContributionSumAggregate>;
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
  attestation_status?: Maybe<AttestationStatus>;
  attestation_status_id?: Maybe<Scalars['Int']>;
  confidence?: Maybe<AttestationConfidence>;
  confidence_id?: Maybe<Scalars['Int']>;
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
  attestation_status_id?: Maybe<Scalars['Float']>;
  confidence_id?: Maybe<Scalars['Float']>;
  contribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type AttestationAvgOrderByAggregateInput = {
  attestation_status_id?: InputMaybe<SortOrder>;
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
  attestations?: InputMaybe<AttestationUpdateManyWithoutConfidenceNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttestationConfidenceUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttestationConfidenceUpdateOneWithoutAttestationsNestedInput = {
  connect?: InputMaybe<AttestationConfidenceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AttestationConfidenceCreateOrConnectWithoutAttestationsInput>;
  create?: InputMaybe<AttestationConfidenceCreateWithoutAttestationsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
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
  attestation_status_id: Scalars['Int'];
  confidence_id: Scalars['Int'];
  contribution_id: Scalars['Int'];
  createdAt: Scalars['Int'];
  date_of_attestation: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type AttestationCountOrderByAggregateInput = {
  attestation_status_id?: InputMaybe<SortOrder>;
  confidence_id?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date_of_attestation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type AttestationCreateInput = {
  attestation_status?: InputMaybe<AttestationStatusCreateNestedOneWithoutAttestationInput>;
  confidence?: InputMaybe<AttestationConfidenceCreateNestedOneWithoutAttestationsInput>;
  contribution: ContributionCreateNestedOneWithoutAttestationsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date_of_attestation?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAttestationsInput;
};

export type AttestationCreateManyAttestation_StatusInput = {
  confidence_id?: InputMaybe<Scalars['Int']>;
  contribution_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date_of_attestation?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type AttestationCreateManyAttestation_StatusInputEnvelope = {
  data: Array<AttestationCreateManyAttestation_StatusInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AttestationCreateManyConfidenceInput = {
  attestation_status_id?: InputMaybe<Scalars['Int']>;
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
  attestation_status_id?: InputMaybe<Scalars['Int']>;
  confidence_id?: InputMaybe<Scalars['Int']>;
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
  attestation_status_id?: InputMaybe<Scalars['Int']>;
  confidence_id?: InputMaybe<Scalars['Int']>;
  contribution_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date_of_attestation?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type AttestationCreateManyUserInput = {
  attestation_status_id?: InputMaybe<Scalars['Int']>;
  confidence_id?: InputMaybe<Scalars['Int']>;
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

export type AttestationCreateNestedManyWithoutAttestation_StatusInput = {
  connect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AttestationCreateOrConnectWithoutAttestation_StatusInput>>;
  create?: InputMaybe<Array<AttestationCreateWithoutAttestation_StatusInput>>;
  createMany?: InputMaybe<AttestationCreateManyAttestation_StatusInputEnvelope>;
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

export type AttestationCreateOrConnectWithoutAttestation_StatusInput = {
  create: AttestationCreateWithoutAttestation_StatusInput;
  where: AttestationWhereUniqueInput;
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

export type AttestationCreateWithoutAttestation_StatusInput = {
  confidence?: InputMaybe<AttestationConfidenceCreateNestedOneWithoutAttestationsInput>;
  contribution: ContributionCreateNestedOneWithoutAttestationsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date_of_attestation?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAttestationsInput;
};

export type AttestationCreateWithoutConfidenceInput = {
  attestation_status?: InputMaybe<AttestationStatusCreateNestedOneWithoutAttestationInput>;
  contribution: ContributionCreateNestedOneWithoutAttestationsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date_of_attestation?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAttestationsInput;
};

export type AttestationCreateWithoutContributionInput = {
  attestation_status?: InputMaybe<AttestationStatusCreateNestedOneWithoutAttestationInput>;
  confidence?: InputMaybe<AttestationConfidenceCreateNestedOneWithoutAttestationsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date_of_attestation?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAttestationsInput;
};

export type AttestationCreateWithoutUserInput = {
  attestation_status?: InputMaybe<AttestationStatusCreateNestedOneWithoutAttestationInput>;
  confidence?: InputMaybe<AttestationConfidenceCreateNestedOneWithoutAttestationsInput>;
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
  attestation_status_id?: Maybe<Scalars['Int']>;
  confidence_id?: Maybe<Scalars['Int']>;
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
  attestation_status_id?: Maybe<Scalars['Int']>;
  confidence_id?: Maybe<Scalars['Int']>;
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date_of_attestation?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type AttestationMaxOrderByAggregateInput = {
  attestation_status_id?: InputMaybe<SortOrder>;
  confidence_id?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date_of_attestation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type AttestationMinAggregate = {
  attestation_status_id?: Maybe<Scalars['Int']>;
  confidence_id?: Maybe<Scalars['Int']>;
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date_of_attestation?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type AttestationMinOrderByAggregateInput = {
  attestation_status_id?: InputMaybe<SortOrder>;
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
  attestation_status_id?: InputMaybe<SortOrder>;
  confidence_id?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date_of_attestation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type AttestationOrderByWithRelationInput = {
  attestation_status?: InputMaybe<AttestationStatusOrderByWithRelationInput>;
  attestation_status_id?: InputMaybe<SortOrder>;
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
  AttestationStatusId = 'attestation_status_id',
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
  attestation_status_id?: InputMaybe<IntNullableFilter>;
  confidence_id?: InputMaybe<IntNullableFilter>;
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
  attestation_status_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  confidence_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  contribution_id?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  date_of_attestation?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type AttestationStatus = {
  _count?: Maybe<AttestationStatusCount>;
  attestation: Array<Attestation>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type AttestationStatusAttestationArgs = {
  cursor?: InputMaybe<AttestationWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationWhereInput>;
};

export type AttestationStatusAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type AttestationStatusAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type AttestationStatusCount = {
  attestation: Scalars['Int'];
};

export type AttestationStatusCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type AttestationStatusCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AttestationStatusCreateInput = {
  attestation?: InputMaybe<AttestationCreateNestedManyWithoutAttestation_StatusInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AttestationStatusCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AttestationStatusCreateNestedOneWithoutAttestationInput = {
  connect?: InputMaybe<AttestationStatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AttestationStatusCreateOrConnectWithoutAttestationInput>;
  create?: InputMaybe<AttestationStatusCreateWithoutAttestationInput>;
};

export type AttestationStatusCreateOrConnectWithoutAttestationInput = {
  create: AttestationStatusCreateWithoutAttestationInput;
  where: AttestationStatusWhereUniqueInput;
};

export type AttestationStatusCreateWithoutAttestationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AttestationStatusGroupBy = {
  _avg?: Maybe<AttestationStatusAvgAggregate>;
  _count?: Maybe<AttestationStatusCountAggregate>;
  _max?: Maybe<AttestationStatusMaxAggregate>;
  _min?: Maybe<AttestationStatusMinAggregate>;
  _sum?: Maybe<AttestationStatusSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AttestationStatusMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AttestationStatusMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AttestationStatusMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AttestationStatusMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AttestationStatusOrderByWithAggregationInput = {
  _avg?: InputMaybe<AttestationStatusAvgOrderByAggregateInput>;
  _count?: InputMaybe<AttestationStatusCountOrderByAggregateInput>;
  _max?: InputMaybe<AttestationStatusMaxOrderByAggregateInput>;
  _min?: InputMaybe<AttestationStatusMinOrderByAggregateInput>;
  _sum?: InputMaybe<AttestationStatusSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AttestationStatusOrderByWithRelationInput = {
  attestation?: InputMaybe<AttestationOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AttestationStatusRelationFilter = {
  is?: InputMaybe<AttestationStatusWhereInput>;
  isNot?: InputMaybe<AttestationStatusWhereInput>;
};

export enum AttestationStatusScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type AttestationStatusScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AttestationStatusScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AttestationStatusScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AttestationStatusScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AttestationStatusSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type AttestationStatusSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type AttestationStatusUpdateInput = {
  attestation?: InputMaybe<AttestationUpdateManyWithoutAttestation_StatusNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttestationStatusUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttestationStatusUpdateOneWithoutAttestationNestedInput = {
  connect?: InputMaybe<AttestationStatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AttestationStatusCreateOrConnectWithoutAttestationInput>;
  create?: InputMaybe<AttestationStatusCreateWithoutAttestationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AttestationStatusUpdateWithoutAttestationInput>;
  upsert?: InputMaybe<AttestationStatusUpsertWithoutAttestationInput>;
};

export type AttestationStatusUpdateWithoutAttestationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttestationStatusUpsertWithoutAttestationInput = {
  create: AttestationStatusCreateWithoutAttestationInput;
  update: AttestationStatusUpdateWithoutAttestationInput;
};

export type AttestationStatusWhereInput = {
  AND?: InputMaybe<Array<AttestationStatusWhereInput>>;
  NOT?: InputMaybe<Array<AttestationStatusWhereInput>>;
  OR?: InputMaybe<Array<AttestationStatusWhereInput>>;
  attestation?: InputMaybe<AttestationListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AttestationStatusWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AttestationSumAggregate = {
  attestation_status_id?: Maybe<Scalars['Int']>;
  confidence_id?: Maybe<Scalars['Int']>;
  contribution_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type AttestationSumOrderByAggregateInput = {
  attestation_status_id?: InputMaybe<SortOrder>;
  confidence_id?: InputMaybe<SortOrder>;
  contribution_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type AttestationUpdateInput = {
  attestation_status?: InputMaybe<AttestationStatusUpdateOneWithoutAttestationNestedInput>;
  confidence?: InputMaybe<AttestationConfidenceUpdateOneWithoutAttestationsNestedInput>;
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutAttestationsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_attestation?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAttestationsNestedInput>;
};

export type AttestationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_attestation?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttestationUpdateManyWithWhereWithoutAttestation_StatusInput = {
  data: AttestationUpdateManyMutationInput;
  where: AttestationScalarWhereInput;
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

export type AttestationUpdateManyWithoutAttestation_StatusNestedInput = {
  connect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AttestationCreateOrConnectWithoutAttestation_StatusInput>>;
  create?: InputMaybe<Array<AttestationCreateWithoutAttestation_StatusInput>>;
  createMany?: InputMaybe<AttestationCreateManyAttestation_StatusInputEnvelope>;
  delete?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AttestationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  set?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  update?: InputMaybe<Array<AttestationUpdateWithWhereUniqueWithoutAttestation_StatusInput>>;
  updateMany?: InputMaybe<Array<AttestationUpdateManyWithWhereWithoutAttestation_StatusInput>>;
  upsert?: InputMaybe<Array<AttestationUpsertWithWhereUniqueWithoutAttestation_StatusInput>>;
};

export type AttestationUpdateManyWithoutConfidenceNestedInput = {
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

export type AttestationUpdateManyWithoutContributionNestedInput = {
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

export type AttestationUpdateManyWithoutUserNestedInput = {
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

export type AttestationUpdateWithWhereUniqueWithoutAttestation_StatusInput = {
  data: AttestationUpdateWithoutAttestation_StatusInput;
  where: AttestationWhereUniqueInput;
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

export type AttestationUpdateWithoutAttestation_StatusInput = {
  confidence?: InputMaybe<AttestationConfidenceUpdateOneWithoutAttestationsNestedInput>;
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutAttestationsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_attestation?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAttestationsNestedInput>;
};

export type AttestationUpdateWithoutConfidenceInput = {
  attestation_status?: InputMaybe<AttestationStatusUpdateOneWithoutAttestationNestedInput>;
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutAttestationsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_attestation?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAttestationsNestedInput>;
};

export type AttestationUpdateWithoutContributionInput = {
  attestation_status?: InputMaybe<AttestationStatusUpdateOneWithoutAttestationNestedInput>;
  confidence?: InputMaybe<AttestationConfidenceUpdateOneWithoutAttestationsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_attestation?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAttestationsNestedInput>;
};

export type AttestationUpdateWithoutUserInput = {
  attestation_status?: InputMaybe<AttestationStatusUpdateOneWithoutAttestationNestedInput>;
  confidence?: InputMaybe<AttestationConfidenceUpdateOneWithoutAttestationsNestedInput>;
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutAttestationsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_attestation?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttestationUpsertWithWhereUniqueWithoutAttestation_StatusInput = {
  create: AttestationCreateWithoutAttestation_StatusInput;
  update: AttestationUpdateWithoutAttestation_StatusInput;
  where: AttestationWhereUniqueInput;
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
  chainId: Scalars['Float'];
  confidence: Scalars['String'];
  contributionOnChainId: Scalars['Float'];
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
  attestation_status?: InputMaybe<AttestationStatusRelationFilter>;
  attestation_status_id?: InputMaybe<IntNullableFilter>;
  confidence?: InputMaybe<AttestationConfidenceRelationFilter>;
  confidence_id?: InputMaybe<IntNullableFilter>;
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
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutCategoryActivityNestedInput>;
  category_activity?: InputMaybe<CategoryActivityUpdateOneRequiredWithoutActivityTypesNestedInput>;
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

export type CategoryActivityTypeUpdateManyWithoutActivity_TypeNestedInput = {
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

export type CategoryActivityTypeUpdateManyWithoutCategory_ActivityNestedInput = {
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
  category_activity?: InputMaybe<CategoryActivityUpdateOneRequiredWithoutActivityTypesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryActivityTypeUpdateWithoutCategory_ActivityInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutCategoryActivityNestedInput>;
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
  activityTypes?: InputMaybe<CategoryActivityTypeUpdateManyWithoutCategory_ActivityNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryActivityUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryActivityUpdateOneRequiredWithoutActivityTypesNestedInput = {
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

export type Chain = {
  _count?: Maybe<ChainCount>;
  chain_id: Scalars['String'];
  contributions: Array<Contribution>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type ChainContributionsArgs = {
  cursor?: InputMaybe<ContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContributionWhereInput>;
};

export type ChainAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type ChainAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ChainCount = {
  contributions: Scalars['Int'];
};

export type ChainCountAggregate = {
  _all: Scalars['Int'];
  chain_id: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ChainCountOrderByAggregateInput = {
  chain_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ChainCreateInput = {
  chain_id: Scalars['String'];
  contributions?: InputMaybe<ContributionCreateNestedManyWithoutChainInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ChainCreateManyInput = {
  chain_id: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ChainCreateNestedOneWithoutContributionsInput = {
  connect?: InputMaybe<ChainWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChainCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<ChainCreateWithoutContributionsInput>;
};

export type ChainCreateOrConnectWithoutContributionsInput = {
  create: ChainCreateWithoutContributionsInput;
  where: ChainWhereUniqueInput;
};

export type ChainCreateWithoutContributionsInput = {
  chain_id: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ChainGroupBy = {
  _avg?: Maybe<ChainAvgAggregate>;
  _count?: Maybe<ChainCountAggregate>;
  _max?: Maybe<ChainMaxAggregate>;
  _min?: Maybe<ChainMinAggregate>;
  _sum?: Maybe<ChainSumAggregate>;
  chain_id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ChainMaxAggregate = {
  chain_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ChainMaxOrderByAggregateInput = {
  chain_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ChainMinAggregate = {
  chain_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ChainMinOrderByAggregateInput = {
  chain_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ChainOrderByWithAggregationInput = {
  _avg?: InputMaybe<ChainAvgOrderByAggregateInput>;
  _count?: InputMaybe<ChainCountOrderByAggregateInput>;
  _max?: InputMaybe<ChainMaxOrderByAggregateInput>;
  _min?: InputMaybe<ChainMinOrderByAggregateInput>;
  _sum?: InputMaybe<ChainSumOrderByAggregateInput>;
  chain_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ChainOrderByWithRelationInput = {
  chain_id?: InputMaybe<SortOrder>;
  contributions?: InputMaybe<ContributionOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ChainRelationFilter = {
  is?: InputMaybe<ChainWhereInput>;
  isNot?: InputMaybe<ChainWhereInput>;
};

export enum ChainScalarFieldEnum {
  ChainId = 'chain_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ChainScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ChainScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ChainScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ChainScalarWhereWithAggregatesInput>>;
  chain_id?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ChainSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type ChainSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
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
  users?: InputMaybe<UserUpdateManyWithoutChain_TypeNestedInput>;
};

export type ChainTypeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChainTypeUpdateOneRequiredWithoutUsersNestedInput = {
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

export type ChainUpdateInput = {
  chain_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutChainNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChainUpdateManyMutationInput = {
  chain_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChainUpdateOneWithoutContributionsNestedInput = {
  connect?: InputMaybe<ChainWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChainCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<ChainCreateWithoutContributionsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ChainUpdateWithoutContributionsInput>;
  upsert?: InputMaybe<ChainUpsertWithoutContributionsInput>;
};

export type ChainUpdateWithoutContributionsInput = {
  chain_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChainUpsertWithoutContributionsInput = {
  create: ChainCreateWithoutContributionsInput;
  update: ChainUpdateWithoutContributionsInput;
};

export type ChainWhereInput = {
  AND?: InputMaybe<Array<ChainWhereInput>>;
  NOT?: InputMaybe<Array<ChainWhereInput>>;
  OR?: InputMaybe<Array<ChainWhereInput>>;
  chain_id?: InputMaybe<StringFilter>;
  contributions?: InputMaybe<ContributionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ChainWhereUniqueInput = {
  chain_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Contribution = {
  _count?: Maybe<ContributionCount>;
  activity_type: ActivityType;
  activity_type_id: Scalars['Int'];
  attestations: Array<Attestation>;
  chain?: Maybe<Chain>;
  chain_id?: Maybe<Scalars['Int']>;
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
  twitter_tweet_contributions: Array<TwitterTweetContribution>;
  tx_hash?: Maybe<Scalars['String']>;
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


export type ContributionTwitter_Tweet_ContributionsArgs = {
  cursor?: InputMaybe<TwitterTweetContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwitterTweetContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwitterTweetContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterTweetContributionWhereInput>;
};

export type ContributionAvgAggregate = {
  activity_type_id?: Maybe<Scalars['Float']>;
  chain_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  on_chain_id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type ContributionAvgOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  chain_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  on_chain_id?: InputMaybe<SortOrder>;
  status_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ContributionChain_IdOn_Chain_IdCompoundUniqueInput = {
  chain_id: Scalars['Int'];
  on_chain_id: Scalars['Int'];
};

export type ContributionCount = {
  attestations: Scalars['Int'];
  guilds: Scalars['Int'];
  partners: Scalars['Int'];
  twitter_tweet_contributions: Scalars['Int'];
};

export type ContributionCountAggregate = {
  _all: Scalars['Int'];
  activity_type_id: Scalars['Int'];
  chain_id: Scalars['Int'];
  date_of_engagement: Scalars['Int'];
  date_of_submission: Scalars['Int'];
  details: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  on_chain_id: Scalars['Int'];
  proof: Scalars['Int'];
  status_id: Scalars['Int'];
  tx_hash: Scalars['Int'];
  updatedAt: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type ContributionCountByActivityType = {
  activity_id: Scalars['Float'];
  activity_name: Scalars['String'];
  count: Scalars['Float'];
};

export type ContributionCountByDate = {
  count: Scalars['Float'];
  date: Scalars['DateTime'];
  guild_id?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
};

export type ContributionCountByUser = {
  address: Scalars['String'];
  count: Scalars['Float'];
  display_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type ContributionCountOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  chain_id?: InputMaybe<SortOrder>;
  date_of_engagement?: InputMaybe<SortOrder>;
  date_of_submission?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  on_chain_id?: InputMaybe<SortOrder>;
  proof?: InputMaybe<SortOrder>;
  status_id?: InputMaybe<SortOrder>;
  tx_hash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ContributionCreateInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  chain?: InputMaybe<ChainCreateNestedOneWithoutContributionsInput>;
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
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionCreateNestedManyWithoutContributionInput>;
  tx_hash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateManyActivity_TypeInput = {
  chain_id?: InputMaybe<Scalars['Int']>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  proof?: InputMaybe<Scalars['String']>;
  status_id: Scalars['Int'];
  tx_hash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type ContributionCreateManyActivity_TypeInputEnvelope = {
  data: Array<ContributionCreateManyActivity_TypeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ContributionCreateManyChainInput = {
  activity_type_id: Scalars['Int'];
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  proof?: InputMaybe<Scalars['String']>;
  status_id: Scalars['Int'];
  tx_hash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type ContributionCreateManyChainInputEnvelope = {
  data: Array<ContributionCreateManyChainInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ContributionCreateManyInput = {
  activity_type_id: Scalars['Int'];
  chain_id?: InputMaybe<Scalars['Int']>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  proof?: InputMaybe<Scalars['String']>;
  status_id: Scalars['Int'];
  tx_hash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type ContributionCreateManyStatusInput = {
  activity_type_id: Scalars['Int'];
  chain_id?: InputMaybe<Scalars['Int']>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  proof?: InputMaybe<Scalars['String']>;
  tx_hash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type ContributionCreateManyStatusInputEnvelope = {
  data: Array<ContributionCreateManyStatusInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ContributionCreateManyUserInput = {
  activity_type_id: Scalars['Int'];
  chain_id?: InputMaybe<Scalars['Int']>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  proof?: InputMaybe<Scalars['String']>;
  status_id: Scalars['Int'];
  tx_hash?: InputMaybe<Scalars['String']>;
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

export type ContributionCreateNestedManyWithoutChainInput = {
  connect?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ContributionCreateOrConnectWithoutChainInput>>;
  create?: InputMaybe<Array<ContributionCreateWithoutChainInput>>;
  createMany?: InputMaybe<ContributionCreateManyChainInputEnvelope>;
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

export type ContributionCreateNestedOneWithoutTwitter_Tweet_ContributionsInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutTwitter_Tweet_ContributionsInput>;
  create?: InputMaybe<ContributionCreateWithoutTwitter_Tweet_ContributionsInput>;
};

export type ContributionCreateOrConnectWithoutActivity_TypeInput = {
  create: ContributionCreateWithoutActivity_TypeInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionCreateOrConnectWithoutAttestationsInput = {
  create: ContributionCreateWithoutAttestationsInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionCreateOrConnectWithoutChainInput = {
  create: ContributionCreateWithoutChainInput;
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

export type ContributionCreateOrConnectWithoutTwitter_Tweet_ContributionsInput = {
  create: ContributionCreateWithoutTwitter_Tweet_ContributionsInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionCreateOrConnectWithoutUserInput = {
  create: ContributionCreateWithoutUserInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionCreateWithoutActivity_TypeInput = {
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  chain?: InputMaybe<ChainCreateNestedOneWithoutContributionsInput>;
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
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionCreateNestedManyWithoutContributionInput>;
  tx_hash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutAttestationsInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  chain?: InputMaybe<ChainCreateNestedOneWithoutContributionsInput>;
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
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionCreateNestedManyWithoutContributionInput>;
  tx_hash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutChainInput = {
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
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionCreateNestedManyWithoutContributionInput>;
  tx_hash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutGuildsInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  chain?: InputMaybe<ChainCreateNestedOneWithoutContributionsInput>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  linear_issue?: InputMaybe<LinearIssueCreateNestedOneWithoutContributionInput>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  partners?: InputMaybe<PartnerCreateNestedManyWithoutContributionInput>;
  proof?: InputMaybe<Scalars['String']>;
  status: ContributionStatusCreateNestedOneWithoutContributionsInput;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionCreateNestedManyWithoutContributionInput>;
  tx_hash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutLinear_IssueInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  chain?: InputMaybe<ChainCreateNestedOneWithoutContributionsInput>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  guilds?: InputMaybe<GuildContributionCreateNestedManyWithoutContributionInput>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  partners?: InputMaybe<PartnerCreateNestedManyWithoutContributionInput>;
  proof?: InputMaybe<Scalars['String']>;
  status: ContributionStatusCreateNestedOneWithoutContributionsInput;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionCreateNestedManyWithoutContributionInput>;
  tx_hash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutPartnersInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  chain?: InputMaybe<ChainCreateNestedOneWithoutContributionsInput>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  guilds?: InputMaybe<GuildContributionCreateNestedManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueCreateNestedOneWithoutContributionInput>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  proof?: InputMaybe<Scalars['String']>;
  status: ContributionStatusCreateNestedOneWithoutContributionsInput;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionCreateNestedManyWithoutContributionInput>;
  tx_hash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutStatusInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  chain?: InputMaybe<ChainCreateNestedOneWithoutContributionsInput>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  guilds?: InputMaybe<GuildContributionCreateNestedManyWithoutContributionInput>;
  linear_issue?: InputMaybe<LinearIssueCreateNestedOneWithoutContributionInput>;
  name: Scalars['String'];
  on_chain_id?: InputMaybe<Scalars['Int']>;
  partners?: InputMaybe<PartnerCreateNestedManyWithoutContributionInput>;
  proof?: InputMaybe<Scalars['String']>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionCreateNestedManyWithoutContributionInput>;
  tx_hash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutTwitter_Tweet_ContributionsInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  chain?: InputMaybe<ChainCreateNestedOneWithoutContributionsInput>;
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
  tx_hash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutContributionsInput;
};

export type ContributionCreateWithoutUserInput = {
  activity_type: ActivityTypeCreateNestedOneWithoutContributionsInput;
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutContributionInput>;
  chain?: InputMaybe<ChainCreateNestedOneWithoutContributionsInput>;
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
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionCreateNestedManyWithoutContributionInput>;
  tx_hash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ContributionGroupBy = {
  _avg?: Maybe<ContributionAvgAggregate>;
  _count?: Maybe<ContributionCountAggregate>;
  _max?: Maybe<ContributionMaxAggregate>;
  _min?: Maybe<ContributionMinAggregate>;
  _sum?: Maybe<ContributionSumAggregate>;
  activity_type_id: Scalars['Int'];
  chain_id?: Maybe<Scalars['Int']>;
  date_of_engagement: Scalars['DateTime'];
  date_of_submission: Scalars['DateTime'];
  details?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  on_chain_id?: Maybe<Scalars['Int']>;
  proof?: Maybe<Scalars['String']>;
  status_id: Scalars['Int'];
  tx_hash?: Maybe<Scalars['String']>;
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
  chain_id?: Maybe<Scalars['Int']>;
  date_of_engagement?: Maybe<Scalars['DateTime']>;
  date_of_submission?: Maybe<Scalars['DateTime']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  on_chain_id?: Maybe<Scalars['Int']>;
  proof?: Maybe<Scalars['String']>;
  status_id?: Maybe<Scalars['Int']>;
  tx_hash?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type ContributionMaxOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  chain_id?: InputMaybe<SortOrder>;
  date_of_engagement?: InputMaybe<SortOrder>;
  date_of_submission?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  on_chain_id?: InputMaybe<SortOrder>;
  proof?: InputMaybe<SortOrder>;
  status_id?: InputMaybe<SortOrder>;
  tx_hash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ContributionMinAggregate = {
  activity_type_id?: Maybe<Scalars['Int']>;
  chain_id?: Maybe<Scalars['Int']>;
  date_of_engagement?: Maybe<Scalars['DateTime']>;
  date_of_submission?: Maybe<Scalars['DateTime']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  on_chain_id?: Maybe<Scalars['Int']>;
  proof?: Maybe<Scalars['String']>;
  status_id?: Maybe<Scalars['Int']>;
  tx_hash?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type ContributionMinOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  chain_id?: InputMaybe<SortOrder>;
  date_of_engagement?: InputMaybe<SortOrder>;
  date_of_submission?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  on_chain_id?: InputMaybe<SortOrder>;
  proof?: InputMaybe<SortOrder>;
  status_id?: InputMaybe<SortOrder>;
  tx_hash?: InputMaybe<SortOrder>;
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
  chain_id?: InputMaybe<SortOrder>;
  date_of_engagement?: InputMaybe<SortOrder>;
  date_of_submission?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  on_chain_id?: InputMaybe<SortOrder>;
  proof?: InputMaybe<SortOrder>;
  status_id?: InputMaybe<SortOrder>;
  tx_hash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ContributionOrderByWithRelationInput = {
  activity_type?: InputMaybe<ActivityTypeOrderByWithRelationInput>;
  activity_type_id?: InputMaybe<SortOrder>;
  attestations?: InputMaybe<AttestationOrderByRelationAggregateInput>;
  chain?: InputMaybe<ChainOrderByWithRelationInput>;
  chain_id?: InputMaybe<SortOrder>;
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
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionOrderByRelationAggregateInput>;
  tx_hash?: InputMaybe<SortOrder>;
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
  ChainId = 'chain_id',
  DateOfEngagement = 'date_of_engagement',
  DateOfSubmission = 'date_of_submission',
  Details = 'details',
  Id = 'id',
  Name = 'name',
  OnChainId = 'on_chain_id',
  Proof = 'proof',
  StatusId = 'status_id',
  TxHash = 'tx_hash',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type ContributionScalarWhereInput = {
  AND?: InputMaybe<Array<ContributionScalarWhereInput>>;
  NOT?: InputMaybe<Array<ContributionScalarWhereInput>>;
  OR?: InputMaybe<Array<ContributionScalarWhereInput>>;
  activity_type_id?: InputMaybe<IntFilter>;
  chain_id?: InputMaybe<IntNullableFilter>;
  date_of_engagement?: InputMaybe<DateTimeFilter>;
  date_of_submission?: InputMaybe<DateTimeFilter>;
  details?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  on_chain_id?: InputMaybe<IntNullableFilter>;
  proof?: InputMaybe<StringNullableFilter>;
  status_id?: InputMaybe<IntFilter>;
  tx_hash?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type ContributionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ContributionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ContributionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ContributionScalarWhereWithAggregatesInput>>;
  activity_type_id?: InputMaybe<IntWithAggregatesFilter>;
  chain_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  date_of_engagement?: InputMaybe<DateTimeWithAggregatesFilter>;
  date_of_submission?: InputMaybe<DateTimeWithAggregatesFilter>;
  details?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  on_chain_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  proof?: InputMaybe<StringNullableWithAggregatesFilter>;
  status_id?: InputMaybe<IntWithAggregatesFilter>;
  tx_hash?: InputMaybe<StringNullableWithAggregatesFilter>;
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
  contributions?: InputMaybe<ContributionUpdateManyWithoutStatusNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContributionStatusUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput = {
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
  chain_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  on_chain_id?: Maybe<Scalars['Int']>;
  status_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type ContributionSumOrderByAggregateInput = {
  activity_type_id?: InputMaybe<SortOrder>;
  chain_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  on_chain_id?: InputMaybe<SortOrder>;
  status_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ContributionUpdateInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionNestedInput>;
  chain?: InputMaybe<ChainUpdateOneWithoutContributionsNestedInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionNestedInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionNestedInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionUpdateManyWithoutContributionNestedInput>;
  tx_hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsNestedInput>;
};

export type ContributionUpdateManyMutationInput = {
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tx_hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContributionUpdateManyWithWhereWithoutActivity_TypeInput = {
  data: ContributionUpdateManyMutationInput;
  where: ContributionScalarWhereInput;
};

export type ContributionUpdateManyWithWhereWithoutChainInput = {
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

export type ContributionUpdateManyWithoutActivity_TypeNestedInput = {
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

export type ContributionUpdateManyWithoutChainNestedInput = {
  connect?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ContributionCreateOrConnectWithoutChainInput>>;
  create?: InputMaybe<Array<ContributionCreateWithoutChainInput>>;
  createMany?: InputMaybe<ContributionCreateManyChainInputEnvelope>;
  delete?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ContributionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  set?: InputMaybe<Array<ContributionWhereUniqueInput>>;
  update?: InputMaybe<Array<ContributionUpdateWithWhereUniqueWithoutChainInput>>;
  updateMany?: InputMaybe<Array<ContributionUpdateManyWithWhereWithoutChainInput>>;
  upsert?: InputMaybe<Array<ContributionUpsertWithWhereUniqueWithoutChainInput>>;
};

export type ContributionUpdateManyWithoutStatusNestedInput = {
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

export type ContributionUpdateManyWithoutUserNestedInput = {
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

export type ContributionUpdateOneRequiredWithoutAttestationsNestedInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutAttestationsInput>;
  create?: InputMaybe<ContributionCreateWithoutAttestationsInput>;
  update?: InputMaybe<ContributionUpdateWithoutAttestationsInput>;
  upsert?: InputMaybe<ContributionUpsertWithoutAttestationsInput>;
};

export type ContributionUpdateOneRequiredWithoutGuildsNestedInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutGuildsInput>;
  create?: InputMaybe<ContributionCreateWithoutGuildsInput>;
  update?: InputMaybe<ContributionUpdateWithoutGuildsInput>;
  upsert?: InputMaybe<ContributionUpsertWithoutGuildsInput>;
};

export type ContributionUpdateOneRequiredWithoutPartnersNestedInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutPartnersInput>;
  create?: InputMaybe<ContributionCreateWithoutPartnersInput>;
  update?: InputMaybe<ContributionUpdateWithoutPartnersInput>;
  upsert?: InputMaybe<ContributionUpsertWithoutPartnersInput>;
};

export type ContributionUpdateOneRequiredWithoutTwitter_Tweet_ContributionsNestedInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutTwitter_Tweet_ContributionsInput>;
  create?: InputMaybe<ContributionCreateWithoutTwitter_Tweet_ContributionsInput>;
  update?: InputMaybe<ContributionUpdateWithoutTwitter_Tweet_ContributionsInput>;
  upsert?: InputMaybe<ContributionUpsertWithoutTwitter_Tweet_ContributionsInput>;
};

export type ContributionUpdateOneWithoutLinear_IssueNestedInput = {
  connect?: InputMaybe<ContributionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ContributionCreateOrConnectWithoutLinear_IssueInput>;
  create?: InputMaybe<ContributionCreateWithoutLinear_IssueInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ContributionUpdateWithoutLinear_IssueInput>;
  upsert?: InputMaybe<ContributionUpsertWithoutLinear_IssueInput>;
};

export type ContributionUpdateWithWhereUniqueWithoutActivity_TypeInput = {
  data: ContributionUpdateWithoutActivity_TypeInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionUpdateWithWhereUniqueWithoutChainInput = {
  data: ContributionUpdateWithoutChainInput;
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
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionNestedInput>;
  chain?: InputMaybe<ChainUpdateOneWithoutContributionsNestedInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionNestedInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionNestedInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionUpdateManyWithoutContributionNestedInput>;
  tx_hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsNestedInput>;
};

export type ContributionUpdateWithoutAttestationsInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput>;
  chain?: InputMaybe<ChainUpdateOneWithoutContributionsNestedInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionNestedInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionNestedInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionUpdateManyWithoutContributionNestedInput>;
  tx_hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsNestedInput>;
};

export type ContributionUpdateWithoutChainInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionNestedInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionNestedInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionNestedInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionUpdateManyWithoutContributionNestedInput>;
  tx_hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsNestedInput>;
};

export type ContributionUpdateWithoutGuildsInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionNestedInput>;
  chain?: InputMaybe<ChainUpdateOneWithoutContributionsNestedInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionNestedInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionUpdateManyWithoutContributionNestedInput>;
  tx_hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsNestedInput>;
};

export type ContributionUpdateWithoutLinear_IssueInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionNestedInput>;
  chain?: InputMaybe<ChainUpdateOneWithoutContributionsNestedInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionNestedInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionUpdateManyWithoutContributionNestedInput>;
  tx_hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsNestedInput>;
};

export type ContributionUpdateWithoutPartnersInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionNestedInput>;
  chain?: InputMaybe<ChainUpdateOneWithoutContributionsNestedInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionNestedInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionUpdateManyWithoutContributionNestedInput>;
  tx_hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsNestedInput>;
};

export type ContributionUpdateWithoutStatusInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionNestedInput>;
  chain?: InputMaybe<ChainUpdateOneWithoutContributionsNestedInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionNestedInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionNestedInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionUpdateManyWithoutContributionNestedInput>;
  tx_hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsNestedInput>;
};

export type ContributionUpdateWithoutTwitter_Tweet_ContributionsInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionNestedInput>;
  chain?: InputMaybe<ChainUpdateOneWithoutContributionsNestedInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionNestedInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionNestedInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput>;
  tx_hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionsNestedInput>;
};

export type ContributionUpdateWithoutUserInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutContributionsNestedInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutContributionNestedInput>;
  chain?: InputMaybe<ChainUpdateOneWithoutContributionsNestedInput>;
  date_of_engagement?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_submission?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guilds?: InputMaybe<GuildContributionUpdateManyWithoutContributionNestedInput>;
  linear_issue?: InputMaybe<LinearIssueUpdateOneWithoutContributionNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  on_chain_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  partners?: InputMaybe<PartnerUpdateManyWithoutContributionNestedInput>;
  proof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionUpdateManyWithoutContributionNestedInput>;
  tx_hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContributionUpsertWithWhereUniqueWithoutActivity_TypeInput = {
  create: ContributionCreateWithoutActivity_TypeInput;
  update: ContributionUpdateWithoutActivity_TypeInput;
  where: ContributionWhereUniqueInput;
};

export type ContributionUpsertWithWhereUniqueWithoutChainInput = {
  create: ContributionCreateWithoutChainInput;
  update: ContributionUpdateWithoutChainInput;
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

export type ContributionUpsertWithoutTwitter_Tweet_ContributionsInput = {
  create: ContributionCreateWithoutTwitter_Tweet_ContributionsInput;
  update: ContributionUpdateWithoutTwitter_Tweet_ContributionsInput;
};

export type ContributionWhereInput = {
  AND?: InputMaybe<Array<ContributionWhereInput>>;
  NOT?: InputMaybe<Array<ContributionWhereInput>>;
  OR?: InputMaybe<Array<ContributionWhereInput>>;
  activity_type?: InputMaybe<ActivityTypeRelationFilter>;
  activity_type_id?: InputMaybe<IntFilter>;
  attestations?: InputMaybe<AttestationListRelationFilter>;
  chain?: InputMaybe<ChainRelationFilter>;
  chain_id?: InputMaybe<IntNullableFilter>;
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
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionListRelationFilter>;
  tx_hash?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type ContributionWhereUniqueInput = {
  chain_id_on_chain_id?: InputMaybe<ContributionChain_IdOn_Chain_IdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']>;
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
  access_token?: Maybe<Scalars['String']>;
  active_token: Scalars['Boolean'];
  attribution_notification_period_min: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  discord_id: Scalars['String'];
  display_name?: Maybe<Scalars['String']>;
  enable_attribution_notification: Scalars['Boolean'];
  enable_mint_notification: Scalars['Boolean'];
  enable_new_guild_notification: Scalars['Boolean'];
  enable_notifications: Scalars['Boolean'];
  enable_submit_reminder: Scalars['Boolean'];
  id: Scalars['Int'];
  mint_notification_period_min: Scalars['Int'];
  new_guild_notification_period_min: Scalars['Int'];
  submit_reminder_period_min: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['Int']>;
};

export type DiscordUserAvgAggregate = {
  attribution_notification_period_min?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mint_notification_period_min?: Maybe<Scalars['Float']>;
  new_guild_notification_period_min?: Maybe<Scalars['Float']>;
  submit_reminder_period_min?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type DiscordUserAvgOrderByAggregateInput = {
  attribution_notification_period_min?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mint_notification_period_min?: InputMaybe<SortOrder>;
  new_guild_notification_period_min?: InputMaybe<SortOrder>;
  submit_reminder_period_min?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type DiscordUserCountAggregate = {
  _all: Scalars['Int'];
  access_token: Scalars['Int'];
  active_token: Scalars['Int'];
  attribution_notification_period_min: Scalars['Int'];
  createdAt: Scalars['Int'];
  discord_id: Scalars['Int'];
  display_name: Scalars['Int'];
  enable_attribution_notification: Scalars['Int'];
  enable_mint_notification: Scalars['Int'];
  enable_new_guild_notification: Scalars['Int'];
  enable_notifications: Scalars['Int'];
  enable_submit_reminder: Scalars['Int'];
  id: Scalars['Int'];
  mint_notification_period_min: Scalars['Int'];
  new_guild_notification_period_min: Scalars['Int'];
  submit_reminder_period_min: Scalars['Int'];
  updatedAt: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type DiscordUserCountOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  active_token?: InputMaybe<SortOrder>;
  attribution_notification_period_min?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  display_name?: InputMaybe<SortOrder>;
  enable_attribution_notification?: InputMaybe<SortOrder>;
  enable_mint_notification?: InputMaybe<SortOrder>;
  enable_new_guild_notification?: InputMaybe<SortOrder>;
  enable_notifications?: InputMaybe<SortOrder>;
  enable_submit_reminder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mint_notification_period_min?: InputMaybe<SortOrder>;
  new_guild_notification_period_min?: InputMaybe<SortOrder>;
  submit_reminder_period_min?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type DiscordUserCreateInput = {
  access_token?: InputMaybe<Scalars['String']>;
  active_token?: InputMaybe<Scalars['Boolean']>;
  attribution_notification_period_min?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id: Scalars['String'];
  display_name?: InputMaybe<Scalars['String']>;
  enable_attribution_notification?: InputMaybe<Scalars['Boolean']>;
  enable_mint_notification?: InputMaybe<Scalars['Boolean']>;
  enable_new_guild_notification?: InputMaybe<Scalars['Boolean']>;
  enable_notifications?: InputMaybe<Scalars['Boolean']>;
  enable_submit_reminder?: InputMaybe<Scalars['Boolean']>;
  mint_notification_period_min?: InputMaybe<Scalars['Int']>;
  new_guild_notification_period_min?: InputMaybe<Scalars['Int']>;
  submit_reminder_period_min?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutDiscord_UsersInput>;
};

export type DiscordUserCreateManyInput = {
  access_token?: InputMaybe<Scalars['String']>;
  active_token?: InputMaybe<Scalars['Boolean']>;
  attribution_notification_period_min?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id: Scalars['String'];
  display_name?: InputMaybe<Scalars['String']>;
  enable_attribution_notification?: InputMaybe<Scalars['Boolean']>;
  enable_mint_notification?: InputMaybe<Scalars['Boolean']>;
  enable_new_guild_notification?: InputMaybe<Scalars['Boolean']>;
  enable_notifications?: InputMaybe<Scalars['Boolean']>;
  enable_submit_reminder?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  mint_notification_period_min?: InputMaybe<Scalars['Int']>;
  new_guild_notification_period_min?: InputMaybe<Scalars['Int']>;
  submit_reminder_period_min?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

export type DiscordUserCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']>;
  active_token?: InputMaybe<Scalars['Boolean']>;
  attribution_notification_period_min?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id: Scalars['String'];
  display_name?: InputMaybe<Scalars['String']>;
  enable_attribution_notification?: InputMaybe<Scalars['Boolean']>;
  enable_mint_notification?: InputMaybe<Scalars['Boolean']>;
  enable_new_guild_notification?: InputMaybe<Scalars['Boolean']>;
  enable_notifications?: InputMaybe<Scalars['Boolean']>;
  enable_submit_reminder?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  mint_notification_period_min?: InputMaybe<Scalars['Int']>;
  new_guild_notification_period_min?: InputMaybe<Scalars['Int']>;
  submit_reminder_period_min?: InputMaybe<Scalars['Int']>;
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
  access_token?: InputMaybe<Scalars['String']>;
  active_token?: InputMaybe<Scalars['Boolean']>;
  attribution_notification_period_min?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id: Scalars['String'];
  display_name?: InputMaybe<Scalars['String']>;
  enable_attribution_notification?: InputMaybe<Scalars['Boolean']>;
  enable_mint_notification?: InputMaybe<Scalars['Boolean']>;
  enable_new_guild_notification?: InputMaybe<Scalars['Boolean']>;
  enable_notifications?: InputMaybe<Scalars['Boolean']>;
  enable_submit_reminder?: InputMaybe<Scalars['Boolean']>;
  mint_notification_period_min?: InputMaybe<Scalars['Int']>;
  new_guild_notification_period_min?: InputMaybe<Scalars['Int']>;
  submit_reminder_period_min?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DiscordUserGroupBy = {
  _avg?: Maybe<DiscordUserAvgAggregate>;
  _count?: Maybe<DiscordUserCountAggregate>;
  _max?: Maybe<DiscordUserMaxAggregate>;
  _min?: Maybe<DiscordUserMinAggregate>;
  _sum?: Maybe<DiscordUserSumAggregate>;
  access_token?: Maybe<Scalars['String']>;
  active_token: Scalars['Boolean'];
  attribution_notification_period_min: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  discord_id: Scalars['String'];
  display_name?: Maybe<Scalars['String']>;
  enable_attribution_notification: Scalars['Boolean'];
  enable_mint_notification: Scalars['Boolean'];
  enable_new_guild_notification: Scalars['Boolean'];
  enable_notifications: Scalars['Boolean'];
  enable_submit_reminder: Scalars['Boolean'];
  id: Scalars['Int'];
  mint_notification_period_min: Scalars['Int'];
  new_guild_notification_period_min: Scalars['Int'];
  submit_reminder_period_min: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user_id?: Maybe<Scalars['Int']>;
};

export type DiscordUserListRelationFilter = {
  every?: InputMaybe<DiscordUserWhereInput>;
  none?: InputMaybe<DiscordUserWhereInput>;
  some?: InputMaybe<DiscordUserWhereInput>;
};

export type DiscordUserMaxAggregate = {
  access_token?: Maybe<Scalars['String']>;
  active_token?: Maybe<Scalars['Boolean']>;
  attribution_notification_period_min?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discord_id?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  enable_attribution_notification?: Maybe<Scalars['Boolean']>;
  enable_mint_notification?: Maybe<Scalars['Boolean']>;
  enable_new_guild_notification?: Maybe<Scalars['Boolean']>;
  enable_notifications?: Maybe<Scalars['Boolean']>;
  enable_submit_reminder?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  mint_notification_period_min?: Maybe<Scalars['Int']>;
  new_guild_notification_period_min?: Maybe<Scalars['Int']>;
  submit_reminder_period_min?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type DiscordUserMaxOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  active_token?: InputMaybe<SortOrder>;
  attribution_notification_period_min?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  display_name?: InputMaybe<SortOrder>;
  enable_attribution_notification?: InputMaybe<SortOrder>;
  enable_mint_notification?: InputMaybe<SortOrder>;
  enable_new_guild_notification?: InputMaybe<SortOrder>;
  enable_notifications?: InputMaybe<SortOrder>;
  enable_submit_reminder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mint_notification_period_min?: InputMaybe<SortOrder>;
  new_guild_notification_period_min?: InputMaybe<SortOrder>;
  submit_reminder_period_min?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type DiscordUserMinAggregate = {
  access_token?: Maybe<Scalars['String']>;
  active_token?: Maybe<Scalars['Boolean']>;
  attribution_notification_period_min?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discord_id?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  enable_attribution_notification?: Maybe<Scalars['Boolean']>;
  enable_mint_notification?: Maybe<Scalars['Boolean']>;
  enable_new_guild_notification?: Maybe<Scalars['Boolean']>;
  enable_notifications?: Maybe<Scalars['Boolean']>;
  enable_submit_reminder?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  mint_notification_period_min?: Maybe<Scalars['Int']>;
  new_guild_notification_period_min?: Maybe<Scalars['Int']>;
  submit_reminder_period_min?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type DiscordUserMinOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  active_token?: InputMaybe<SortOrder>;
  attribution_notification_period_min?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  display_name?: InputMaybe<SortOrder>;
  enable_attribution_notification?: InputMaybe<SortOrder>;
  enable_mint_notification?: InputMaybe<SortOrder>;
  enable_new_guild_notification?: InputMaybe<SortOrder>;
  enable_notifications?: InputMaybe<SortOrder>;
  enable_submit_reminder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mint_notification_period_min?: InputMaybe<SortOrder>;
  new_guild_notification_period_min?: InputMaybe<SortOrder>;
  submit_reminder_period_min?: InputMaybe<SortOrder>;
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
  access_token?: InputMaybe<SortOrder>;
  active_token?: InputMaybe<SortOrder>;
  attribution_notification_period_min?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  display_name?: InputMaybe<SortOrder>;
  enable_attribution_notification?: InputMaybe<SortOrder>;
  enable_mint_notification?: InputMaybe<SortOrder>;
  enable_new_guild_notification?: InputMaybe<SortOrder>;
  enable_notifications?: InputMaybe<SortOrder>;
  enable_submit_reminder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mint_notification_period_min?: InputMaybe<SortOrder>;
  new_guild_notification_period_min?: InputMaybe<SortOrder>;
  submit_reminder_period_min?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type DiscordUserOrderByWithRelationInput = {
  access_token?: InputMaybe<SortOrder>;
  active_token?: InputMaybe<SortOrder>;
  attribution_notification_period_min?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  display_name?: InputMaybe<SortOrder>;
  enable_attribution_notification?: InputMaybe<SortOrder>;
  enable_mint_notification?: InputMaybe<SortOrder>;
  enable_new_guild_notification?: InputMaybe<SortOrder>;
  enable_notifications?: InputMaybe<SortOrder>;
  enable_submit_reminder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mint_notification_period_min?: InputMaybe<SortOrder>;
  new_guild_notification_period_min?: InputMaybe<SortOrder>;
  submit_reminder_period_min?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum DiscordUserScalarFieldEnum {
  AccessToken = 'access_token',
  ActiveToken = 'active_token',
  AttributionNotificationPeriodMin = 'attribution_notification_period_min',
  CreatedAt = 'createdAt',
  DiscordId = 'discord_id',
  DisplayName = 'display_name',
  EnableAttributionNotification = 'enable_attribution_notification',
  EnableMintNotification = 'enable_mint_notification',
  EnableNewGuildNotification = 'enable_new_guild_notification',
  EnableNotifications = 'enable_notifications',
  EnableSubmitReminder = 'enable_submit_reminder',
  Id = 'id',
  MintNotificationPeriodMin = 'mint_notification_period_min',
  NewGuildNotificationPeriodMin = 'new_guild_notification_period_min',
  SubmitReminderPeriodMin = 'submit_reminder_period_min',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type DiscordUserScalarWhereInput = {
  AND?: InputMaybe<Array<DiscordUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<DiscordUserScalarWhereInput>>;
  OR?: InputMaybe<Array<DiscordUserScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  active_token?: InputMaybe<BoolFilter>;
  attribution_notification_period_min?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  discord_id?: InputMaybe<StringFilter>;
  display_name?: InputMaybe<StringNullableFilter>;
  enable_attribution_notification?: InputMaybe<BoolFilter>;
  enable_mint_notification?: InputMaybe<BoolFilter>;
  enable_new_guild_notification?: InputMaybe<BoolFilter>;
  enable_notifications?: InputMaybe<BoolFilter>;
  enable_submit_reminder?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IntFilter>;
  mint_notification_period_min?: InputMaybe<IntFilter>;
  new_guild_notification_period_min?: InputMaybe<IntFilter>;
  submit_reminder_period_min?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntNullableFilter>;
};

export type DiscordUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DiscordUserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DiscordUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DiscordUserScalarWhereWithAggregatesInput>>;
  access_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  active_token?: InputMaybe<BoolWithAggregatesFilter>;
  attribution_notification_period_min?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  discord_id?: InputMaybe<StringWithAggregatesFilter>;
  display_name?: InputMaybe<StringNullableWithAggregatesFilter>;
  enable_attribution_notification?: InputMaybe<BoolWithAggregatesFilter>;
  enable_mint_notification?: InputMaybe<BoolWithAggregatesFilter>;
  enable_new_guild_notification?: InputMaybe<BoolWithAggregatesFilter>;
  enable_notifications?: InputMaybe<BoolWithAggregatesFilter>;
  enable_submit_reminder?: InputMaybe<BoolWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  mint_notification_period_min?: InputMaybe<IntWithAggregatesFilter>;
  new_guild_notification_period_min?: InputMaybe<IntWithAggregatesFilter>;
  submit_reminder_period_min?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type DiscordUserSumAggregate = {
  attribution_notification_period_min?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mint_notification_period_min?: Maybe<Scalars['Int']>;
  new_guild_notification_period_min?: Maybe<Scalars['Int']>;
  submit_reminder_period_min?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type DiscordUserSumOrderByAggregateInput = {
  attribution_notification_period_min?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mint_notification_period_min?: InputMaybe<SortOrder>;
  new_guild_notification_period_min?: InputMaybe<SortOrder>;
  submit_reminder_period_min?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type DiscordUserUpdateInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  active_token?: InputMaybe<BoolFieldUpdateOperationsInput>;
  attribution_notification_period_min?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  enable_attribution_notification?: InputMaybe<BoolFieldUpdateOperationsInput>;
  enable_mint_notification?: InputMaybe<BoolFieldUpdateOperationsInput>;
  enable_new_guild_notification?: InputMaybe<BoolFieldUpdateOperationsInput>;
  enable_notifications?: InputMaybe<BoolFieldUpdateOperationsInput>;
  enable_submit_reminder?: InputMaybe<BoolFieldUpdateOperationsInput>;
  mint_notification_period_min?: InputMaybe<IntFieldUpdateOperationsInput>;
  new_guild_notification_period_min?: InputMaybe<IntFieldUpdateOperationsInput>;
  submit_reminder_period_min?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutDiscord_UsersNestedInput>;
};

export type DiscordUserUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  active_token?: InputMaybe<BoolFieldUpdateOperationsInput>;
  attribution_notification_period_min?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  enable_attribution_notification?: InputMaybe<BoolFieldUpdateOperationsInput>;
  enable_mint_notification?: InputMaybe<BoolFieldUpdateOperationsInput>;
  enable_new_guild_notification?: InputMaybe<BoolFieldUpdateOperationsInput>;
  enable_notifications?: InputMaybe<BoolFieldUpdateOperationsInput>;
  enable_submit_reminder?: InputMaybe<BoolFieldUpdateOperationsInput>;
  mint_notification_period_min?: InputMaybe<IntFieldUpdateOperationsInput>;
  new_guild_notification_period_min?: InputMaybe<IntFieldUpdateOperationsInput>;
  submit_reminder_period_min?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DiscordUserUpdateManyWithWhereWithoutUserInput = {
  data: DiscordUserUpdateManyMutationInput;
  where: DiscordUserScalarWhereInput;
};

export type DiscordUserUpdateManyWithoutUserNestedInput = {
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
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  active_token?: InputMaybe<BoolFieldUpdateOperationsInput>;
  attribution_notification_period_min?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  enable_attribution_notification?: InputMaybe<BoolFieldUpdateOperationsInput>;
  enable_mint_notification?: InputMaybe<BoolFieldUpdateOperationsInput>;
  enable_new_guild_notification?: InputMaybe<BoolFieldUpdateOperationsInput>;
  enable_notifications?: InputMaybe<BoolFieldUpdateOperationsInput>;
  enable_submit_reminder?: InputMaybe<BoolFieldUpdateOperationsInput>;
  mint_notification_period_min?: InputMaybe<IntFieldUpdateOperationsInput>;
  new_guild_notification_period_min?: InputMaybe<IntFieldUpdateOperationsInput>;
  submit_reminder_period_min?: InputMaybe<IntFieldUpdateOperationsInput>;
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
  access_token?: InputMaybe<StringNullableFilter>;
  active_token?: InputMaybe<BoolFilter>;
  attribution_notification_period_min?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  discord_id?: InputMaybe<StringFilter>;
  display_name?: InputMaybe<StringNullableFilter>;
  enable_attribution_notification?: InputMaybe<BoolFilter>;
  enable_mint_notification?: InputMaybe<BoolFilter>;
  enable_new_guild_notification?: InputMaybe<BoolFilter>;
  enable_notifications?: InputMaybe<BoolFilter>;
  enable_submit_reminder?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IntFilter>;
  mint_notification_period_min?: InputMaybe<IntFilter>;
  new_guild_notification_period_min?: InputMaybe<IntFilter>;
  submit_reminder_period_min?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntNullableFilter>;
};

export type DiscordUserWhereUniqueInput = {
  discord_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type EnumGuildStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<GuildStatus>;
};

export type EnumGuildStatusFilter = {
  equals?: InputMaybe<GuildStatus>;
  in?: InputMaybe<Array<GuildStatus>>;
  not?: InputMaybe<NestedEnumGuildStatusFilter>;
  notIn?: InputMaybe<Array<GuildStatus>>;
};

export type EnumGuildStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumGuildStatusFilter>;
  _min?: InputMaybe<NestedEnumGuildStatusFilter>;
  equals?: InputMaybe<GuildStatus>;
  in?: InputMaybe<Array<GuildStatus>>;
  not?: InputMaybe<NestedEnumGuildStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<GuildStatus>>;
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

export type GetActiveUsersInput = {
  guildId: Scalars['Int'];
  numWindows: Scalars['Int'];
  startDate: Scalars['DateTime'];
  windowSizeDays: Scalars['Int'];
};

export type GetContributionInput = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  guildId?: InputMaybe<Scalars['Float']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Float']>;
};

export type GetOrCreateActivityTypeInput = {
  activityTypeName: Scalars['String'];
  userId?: InputMaybe<Scalars['Float']>;
};

export type GetUserContributionCountInput = {
  endDate: Scalars['DateTime'];
  excludeUnassigned?: InputMaybe<Scalars['Boolean']>;
  guildIds?: InputMaybe<Array<Scalars['Float']>>;
  id?: InputMaybe<Scalars['Float']>;
  startDate: Scalars['DateTime'];
};

export type Guild = {
  _count?: Maybe<GuildCount>;
  activity_type: Array<GuildActivityType>;
  congrats_channel?: Maybe<Scalars['String']>;
  contribution_reporting_channel?: Maybe<Scalars['String']>;
  contributions: Array<GuildContribution>;
  createdAt: Scalars['DateTime'];
  discord_id?: Maybe<Scalars['String']>;
  guild_imports: Array<GuildImport>;
  id: Scalars['Int'];
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status: GuildStatus;
  twitter_accounts: Array<TwitterAccount>;
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


export type GuildGuild_ImportsArgs = {
  cursor?: InputMaybe<GuildImportWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildImportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildImportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildImportWhereInput>;
};


export type GuildTwitter_AccountsArgs = {
  cursor?: InputMaybe<TwitterAccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwitterAccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwitterAccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterAccountWhereInput>;
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
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutActivity_TypeNestedInput>;
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

export type GuildActivityTypeUpdateManyWithoutActivity_TypeNestedInput = {
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

export type GuildActivityTypeUpdateManyWithoutGuildNestedInput = {
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
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutActivity_TypeNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildActivityTypeUpdateWithoutGuildInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput>;
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
  id?: Maybe<Scalars['Float']>;
};

export type GuildAvgOrderByAggregateInput = {
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
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutGuildsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutContributionsNestedInput>;
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

export type GuildContributionUpdateManyWithoutContributionNestedInput = {
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

export type GuildContributionUpdateManyWithoutGuildNestedInput = {
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
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutContributionsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildContributionUpdateWithoutGuildInput = {
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutGuildsNestedInput>;
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
  guild_imports: Scalars['Int'];
  twitter_accounts: Scalars['Int'];
  users: Scalars['Int'];
};

export type GuildCountAggregate = {
  _all: Scalars['Int'];
  congrats_channel: Scalars['Int'];
  contribution_reporting_channel: Scalars['Int'];
  createdAt: Scalars['Int'];
  discord_id: Scalars['Int'];
  id: Scalars['Int'];
  logo: Scalars['Int'];
  name: Scalars['Int'];
  status: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GuildCountOrderByAggregateInput = {
  congrats_channel?: InputMaybe<SortOrder>;
  contribution_reporting_channel?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildCreateInput = {
  activity_type?: InputMaybe<GuildActivityTypeCreateNestedManyWithoutGuildInput>;
  congrats_channel?: InputMaybe<Scalars['String']>;
  contribution_reporting_channel?: InputMaybe<Scalars['String']>;
  contributions?: InputMaybe<GuildContributionCreateNestedManyWithoutGuildInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id?: InputMaybe<Scalars['String']>;
  guild_imports?: InputMaybe<GuildImportCreateNestedManyWithoutGuildInput>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GuildStatus>;
  twitter_accounts?: InputMaybe<TwitterAccountCreateNestedManyWithoutGuildInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<GuildUserCreateNestedManyWithoutGuildInput>;
};

export type GuildCreateManyInput = {
  congrats_channel?: InputMaybe<Scalars['String']>;
  contribution_reporting_channel?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GuildStatus>;
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

export type GuildCreateNestedOneWithoutGuild_ImportsInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutGuild_ImportsInput>;
  create?: InputMaybe<GuildCreateWithoutGuild_ImportsInput>;
};

export type GuildCreateNestedOneWithoutTwitter_AccountsInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutTwitter_AccountsInput>;
  create?: InputMaybe<GuildCreateWithoutTwitter_AccountsInput>;
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

export type GuildCreateOrConnectWithoutGuild_ImportsInput = {
  create: GuildCreateWithoutGuild_ImportsInput;
  where: GuildWhereUniqueInput;
};

export type GuildCreateOrConnectWithoutTwitter_AccountsInput = {
  create: GuildCreateWithoutTwitter_AccountsInput;
  where: GuildWhereUniqueInput;
};

export type GuildCreateOrConnectWithoutUsersInput = {
  create: GuildCreateWithoutUsersInput;
  where: GuildWhereUniqueInput;
};

export type GuildCreateWithoutActivity_TypeInput = {
  congrats_channel?: InputMaybe<Scalars['String']>;
  contribution_reporting_channel?: InputMaybe<Scalars['String']>;
  contributions?: InputMaybe<GuildContributionCreateNestedManyWithoutGuildInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id?: InputMaybe<Scalars['String']>;
  guild_imports?: InputMaybe<GuildImportCreateNestedManyWithoutGuildInput>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GuildStatus>;
  twitter_accounts?: InputMaybe<TwitterAccountCreateNestedManyWithoutGuildInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<GuildUserCreateNestedManyWithoutGuildInput>;
};

export type GuildCreateWithoutContributionsInput = {
  activity_type?: InputMaybe<GuildActivityTypeCreateNestedManyWithoutGuildInput>;
  congrats_channel?: InputMaybe<Scalars['String']>;
  contribution_reporting_channel?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id?: InputMaybe<Scalars['String']>;
  guild_imports?: InputMaybe<GuildImportCreateNestedManyWithoutGuildInput>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GuildStatus>;
  twitter_accounts?: InputMaybe<TwitterAccountCreateNestedManyWithoutGuildInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<GuildUserCreateNestedManyWithoutGuildInput>;
};

export type GuildCreateWithoutGuild_ImportsInput = {
  activity_type?: InputMaybe<GuildActivityTypeCreateNestedManyWithoutGuildInput>;
  congrats_channel?: InputMaybe<Scalars['String']>;
  contribution_reporting_channel?: InputMaybe<Scalars['String']>;
  contributions?: InputMaybe<GuildContributionCreateNestedManyWithoutGuildInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GuildStatus>;
  twitter_accounts?: InputMaybe<TwitterAccountCreateNestedManyWithoutGuildInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<GuildUserCreateNestedManyWithoutGuildInput>;
};

export type GuildCreateWithoutTwitter_AccountsInput = {
  activity_type?: InputMaybe<GuildActivityTypeCreateNestedManyWithoutGuildInput>;
  congrats_channel?: InputMaybe<Scalars['String']>;
  contribution_reporting_channel?: InputMaybe<Scalars['String']>;
  contributions?: InputMaybe<GuildContributionCreateNestedManyWithoutGuildInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id?: InputMaybe<Scalars['String']>;
  guild_imports?: InputMaybe<GuildImportCreateNestedManyWithoutGuildInput>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GuildStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<GuildUserCreateNestedManyWithoutGuildInput>;
};

export type GuildCreateWithoutUsersInput = {
  activity_type?: InputMaybe<GuildActivityTypeCreateNestedManyWithoutGuildInput>;
  congrats_channel?: InputMaybe<Scalars['String']>;
  contribution_reporting_channel?: InputMaybe<Scalars['String']>;
  contributions?: InputMaybe<GuildContributionCreateNestedManyWithoutGuildInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discord_id?: InputMaybe<Scalars['String']>;
  guild_imports?: InputMaybe<GuildImportCreateNestedManyWithoutGuildInput>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GuildStatus>;
  twitter_accounts?: InputMaybe<TwitterAccountCreateNestedManyWithoutGuildInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildGroupBy = {
  _avg?: Maybe<GuildAvgAggregate>;
  _count?: Maybe<GuildCountAggregate>;
  _max?: Maybe<GuildMaxAggregate>;
  _min?: Maybe<GuildMinAggregate>;
  _sum?: Maybe<GuildSumAggregate>;
  congrats_channel?: Maybe<Scalars['String']>;
  contribution_reporting_channel?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  discord_id?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status: GuildStatus;
  updatedAt: Scalars['DateTime'];
};

export type GuildImport = {
  _count?: Maybe<GuildImportCount>;
  authentication_token: Scalars['String'];
  createdAt: Scalars['DateTime'];
  guild: Guild;
  guild_id: Scalars['Int'];
  id: Scalars['Int'];
  import_status: GuildImportStatus;
  import_status_id: Scalars['Int'];
  integration_type: IntegrationType;
  integration_type_id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  users: Array<GuildUser>;
};


export type GuildImportUsersArgs = {
  cursor?: InputMaybe<GuildUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildUserWhereInput>;
};

export type GuildImportAvgAggregate = {
  guild_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  import_status_id?: Maybe<Scalars['Float']>;
  integration_type_id?: Maybe<Scalars['Float']>;
};

export type GuildImportAvgOrderByAggregateInput = {
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  import_status_id?: InputMaybe<SortOrder>;
  integration_type_id?: InputMaybe<SortOrder>;
};

export type GuildImportCount = {
  users: Scalars['Int'];
};

export type GuildImportCountAggregate = {
  _all: Scalars['Int'];
  authentication_token: Scalars['Int'];
  createdAt: Scalars['Int'];
  guild_id: Scalars['Int'];
  id: Scalars['Int'];
  import_status_id: Scalars['Int'];
  integration_type_id: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GuildImportCountOrderByAggregateInput = {
  authentication_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  import_status_id?: InputMaybe<SortOrder>;
  integration_type_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildImportCreateInput = {
  authentication_token: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild: GuildCreateNestedOneWithoutGuild_ImportsInput;
  import_status: GuildImportStatusCreateNestedOneWithoutGuild_ImportsInput;
  integration_type: IntegrationTypeCreateNestedOneWithoutGuild_ImportsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<GuildUserCreateNestedManyWithoutGuild_ImportInput>;
};

export type GuildImportCreateManyGuildInput = {
  authentication_token: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  import_status_id: Scalars['Int'];
  integration_type_id: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildImportCreateManyGuildInputEnvelope = {
  data: Array<GuildImportCreateManyGuildInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuildImportCreateManyImport_StatusInput = {
  authentication_token: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild_id: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  integration_type_id: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildImportCreateManyImport_StatusInputEnvelope = {
  data: Array<GuildImportCreateManyImport_StatusInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuildImportCreateManyInput = {
  authentication_token: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild_id: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  import_status_id: Scalars['Int'];
  integration_type_id: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildImportCreateManyIntegration_TypeInput = {
  authentication_token: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild_id: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  import_status_id: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildImportCreateManyIntegration_TypeInputEnvelope = {
  data: Array<GuildImportCreateManyIntegration_TypeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuildImportCreateNestedManyWithoutGuildInput = {
  connect?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildImportCreateOrConnectWithoutGuildInput>>;
  create?: InputMaybe<Array<GuildImportCreateWithoutGuildInput>>;
  createMany?: InputMaybe<GuildImportCreateManyGuildInputEnvelope>;
};

export type GuildImportCreateNestedManyWithoutImport_StatusInput = {
  connect?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildImportCreateOrConnectWithoutImport_StatusInput>>;
  create?: InputMaybe<Array<GuildImportCreateWithoutImport_StatusInput>>;
  createMany?: InputMaybe<GuildImportCreateManyImport_StatusInputEnvelope>;
};

export type GuildImportCreateNestedManyWithoutIntegration_TypeInput = {
  connect?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildImportCreateOrConnectWithoutIntegration_TypeInput>>;
  create?: InputMaybe<Array<GuildImportCreateWithoutIntegration_TypeInput>>;
  createMany?: InputMaybe<GuildImportCreateManyIntegration_TypeInputEnvelope>;
};

export type GuildImportCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<GuildImportWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildImportCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<GuildImportCreateWithoutUsersInput>;
};

export type GuildImportCreateOrConnectWithoutGuildInput = {
  create: GuildImportCreateWithoutGuildInput;
  where: GuildImportWhereUniqueInput;
};

export type GuildImportCreateOrConnectWithoutImport_StatusInput = {
  create: GuildImportCreateWithoutImport_StatusInput;
  where: GuildImportWhereUniqueInput;
};

export type GuildImportCreateOrConnectWithoutIntegration_TypeInput = {
  create: GuildImportCreateWithoutIntegration_TypeInput;
  where: GuildImportWhereUniqueInput;
};

export type GuildImportCreateOrConnectWithoutUsersInput = {
  create: GuildImportCreateWithoutUsersInput;
  where: GuildImportWhereUniqueInput;
};

export type GuildImportCreateWithoutGuildInput = {
  authentication_token: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  import_status: GuildImportStatusCreateNestedOneWithoutGuild_ImportsInput;
  integration_type: IntegrationTypeCreateNestedOneWithoutGuild_ImportsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<GuildUserCreateNestedManyWithoutGuild_ImportInput>;
};

export type GuildImportCreateWithoutImport_StatusInput = {
  authentication_token: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild: GuildCreateNestedOneWithoutGuild_ImportsInput;
  integration_type: IntegrationTypeCreateNestedOneWithoutGuild_ImportsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<GuildUserCreateNestedManyWithoutGuild_ImportInput>;
};

export type GuildImportCreateWithoutIntegration_TypeInput = {
  authentication_token: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild: GuildCreateNestedOneWithoutGuild_ImportsInput;
  import_status: GuildImportStatusCreateNestedOneWithoutGuild_ImportsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<GuildUserCreateNestedManyWithoutGuild_ImportInput>;
};

export type GuildImportCreateWithoutUsersInput = {
  authentication_token: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild: GuildCreateNestedOneWithoutGuild_ImportsInput;
  import_status: GuildImportStatusCreateNestedOneWithoutGuild_ImportsInput;
  integration_type: IntegrationTypeCreateNestedOneWithoutGuild_ImportsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildImportGroupBy = {
  _avg?: Maybe<GuildImportAvgAggregate>;
  _count?: Maybe<GuildImportCountAggregate>;
  _max?: Maybe<GuildImportMaxAggregate>;
  _min?: Maybe<GuildImportMinAggregate>;
  _sum?: Maybe<GuildImportSumAggregate>;
  authentication_token: Scalars['String'];
  createdAt: Scalars['DateTime'];
  guild_id: Scalars['Int'];
  id: Scalars['Int'];
  import_status_id: Scalars['Int'];
  integration_type_id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type GuildImportListRelationFilter = {
  every?: InputMaybe<GuildImportWhereInput>;
  none?: InputMaybe<GuildImportWhereInput>;
  some?: InputMaybe<GuildImportWhereInput>;
};

export type GuildImportMaxAggregate = {
  authentication_token?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  import_status_id?: Maybe<Scalars['Int']>;
  integration_type_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuildImportMaxOrderByAggregateInput = {
  authentication_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  import_status_id?: InputMaybe<SortOrder>;
  integration_type_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildImportMinAggregate = {
  authentication_token?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  import_status_id?: Maybe<Scalars['Int']>;
  integration_type_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuildImportMinOrderByAggregateInput = {
  authentication_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  import_status_id?: InputMaybe<SortOrder>;
  integration_type_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildImportOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GuildImportOrderByWithAggregationInput = {
  _avg?: InputMaybe<GuildImportAvgOrderByAggregateInput>;
  _count?: InputMaybe<GuildImportCountOrderByAggregateInput>;
  _max?: InputMaybe<GuildImportMaxOrderByAggregateInput>;
  _min?: InputMaybe<GuildImportMinOrderByAggregateInput>;
  _sum?: InputMaybe<GuildImportSumOrderByAggregateInput>;
  authentication_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  import_status_id?: InputMaybe<SortOrder>;
  integration_type_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildImportOrderByWithRelationInput = {
  authentication_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guild?: InputMaybe<GuildOrderByWithRelationInput>;
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  import_status?: InputMaybe<GuildImportStatusOrderByWithRelationInput>;
  import_status_id?: InputMaybe<SortOrder>;
  integration_type?: InputMaybe<IntegrationTypeOrderByWithRelationInput>;
  integration_type_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<GuildUserOrderByRelationAggregateInput>;
};

export type GuildImportRelationFilter = {
  is?: InputMaybe<GuildImportWhereInput>;
  isNot?: InputMaybe<GuildImportWhereInput>;
};

export enum GuildImportScalarFieldEnum {
  AuthenticationToken = 'authentication_token',
  CreatedAt = 'createdAt',
  GuildId = 'guild_id',
  Id = 'id',
  ImportStatusId = 'import_status_id',
  IntegrationTypeId = 'integration_type_id',
  UpdatedAt = 'updatedAt'
}

export type GuildImportScalarWhereInput = {
  AND?: InputMaybe<Array<GuildImportScalarWhereInput>>;
  NOT?: InputMaybe<Array<GuildImportScalarWhereInput>>;
  OR?: InputMaybe<Array<GuildImportScalarWhereInput>>;
  authentication_token?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guild_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  import_status_id?: InputMaybe<IntFilter>;
  integration_type_id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GuildImportScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GuildImportScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GuildImportScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GuildImportScalarWhereWithAggregatesInput>>;
  authentication_token?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  guild_id?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  import_status_id?: InputMaybe<IntWithAggregatesFilter>;
  integration_type_id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type GuildImportStatus = {
  _count?: Maybe<GuildImportStatusCount>;
  createdAt: Scalars['DateTime'];
  guild_imports: Array<GuildImport>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type GuildImportStatusGuild_ImportsArgs = {
  cursor?: InputMaybe<GuildImportWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildImportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildImportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildImportWhereInput>;
};

export type GuildImportStatusAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type GuildImportStatusAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GuildImportStatusCount = {
  guild_imports: Scalars['Int'];
};

export type GuildImportStatusCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GuildImportStatusCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildImportStatusCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild_imports?: InputMaybe<GuildImportCreateNestedManyWithoutImport_StatusInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildImportStatusCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildImportStatusCreateNestedOneWithoutGuild_ImportsInput = {
  connect?: InputMaybe<GuildImportStatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildImportStatusCreateOrConnectWithoutGuild_ImportsInput>;
  create?: InputMaybe<GuildImportStatusCreateWithoutGuild_ImportsInput>;
};

export type GuildImportStatusCreateOrConnectWithoutGuild_ImportsInput = {
  create: GuildImportStatusCreateWithoutGuild_ImportsInput;
  where: GuildImportStatusWhereUniqueInput;
};

export type GuildImportStatusCreateWithoutGuild_ImportsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildImportStatusGroupBy = {
  _avg?: Maybe<GuildImportStatusAvgAggregate>;
  _count?: Maybe<GuildImportStatusCountAggregate>;
  _max?: Maybe<GuildImportStatusMaxAggregate>;
  _min?: Maybe<GuildImportStatusMinAggregate>;
  _sum?: Maybe<GuildImportStatusSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GuildImportStatusMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuildImportStatusMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildImportStatusMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuildImportStatusMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildImportStatusOrderByWithAggregationInput = {
  _avg?: InputMaybe<GuildImportStatusAvgOrderByAggregateInput>;
  _count?: InputMaybe<GuildImportStatusCountOrderByAggregateInput>;
  _max?: InputMaybe<GuildImportStatusMaxOrderByAggregateInput>;
  _min?: InputMaybe<GuildImportStatusMinOrderByAggregateInput>;
  _sum?: InputMaybe<GuildImportStatusSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildImportStatusOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  guild_imports?: InputMaybe<GuildImportOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildImportStatusRelationFilter = {
  is?: InputMaybe<GuildImportStatusWhereInput>;
  isNot?: InputMaybe<GuildImportStatusWhereInput>;
};

export enum GuildImportStatusScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type GuildImportStatusScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GuildImportStatusScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GuildImportStatusScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GuildImportStatusScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type GuildImportStatusSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type GuildImportStatusSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GuildImportStatusUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild_imports?: InputMaybe<GuildImportUpdateManyWithoutImport_StatusNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildImportStatusUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildImportStatusUpdateOneRequiredWithoutGuild_ImportsNestedInput = {
  connect?: InputMaybe<GuildImportStatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildImportStatusCreateOrConnectWithoutGuild_ImportsInput>;
  create?: InputMaybe<GuildImportStatusCreateWithoutGuild_ImportsInput>;
  update?: InputMaybe<GuildImportStatusUpdateWithoutGuild_ImportsInput>;
  upsert?: InputMaybe<GuildImportStatusUpsertWithoutGuild_ImportsInput>;
};

export type GuildImportStatusUpdateWithoutGuild_ImportsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildImportStatusUpsertWithoutGuild_ImportsInput = {
  create: GuildImportStatusCreateWithoutGuild_ImportsInput;
  update: GuildImportStatusUpdateWithoutGuild_ImportsInput;
};

export type GuildImportStatusWhereInput = {
  AND?: InputMaybe<Array<GuildImportStatusWhereInput>>;
  NOT?: InputMaybe<Array<GuildImportStatusWhereInput>>;
  OR?: InputMaybe<Array<GuildImportStatusWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guild_imports?: InputMaybe<GuildImportListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GuildImportStatusWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type GuildImportSumAggregate = {
  guild_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  import_status_id?: Maybe<Scalars['Int']>;
  integration_type_id?: Maybe<Scalars['Int']>;
};

export type GuildImportSumOrderByAggregateInput = {
  guild_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  import_status_id?: InputMaybe<SortOrder>;
  integration_type_id?: InputMaybe<SortOrder>;
};

export type GuildImportUpdateInput = {
  authentication_token?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutGuild_ImportsNestedInput>;
  import_status?: InputMaybe<GuildImportStatusUpdateOneRequiredWithoutGuild_ImportsNestedInput>;
  integration_type?: InputMaybe<IntegrationTypeUpdateOneRequiredWithoutGuild_ImportsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<GuildUserUpdateManyWithoutGuild_ImportNestedInput>;
};

export type GuildImportUpdateManyMutationInput = {
  authentication_token?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildImportUpdateManyWithWhereWithoutGuildInput = {
  data: GuildImportUpdateManyMutationInput;
  where: GuildImportScalarWhereInput;
};

export type GuildImportUpdateManyWithWhereWithoutImport_StatusInput = {
  data: GuildImportUpdateManyMutationInput;
  where: GuildImportScalarWhereInput;
};

export type GuildImportUpdateManyWithWhereWithoutIntegration_TypeInput = {
  data: GuildImportUpdateManyMutationInput;
  where: GuildImportScalarWhereInput;
};

export type GuildImportUpdateManyWithoutGuildNestedInput = {
  connect?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildImportCreateOrConnectWithoutGuildInput>>;
  create?: InputMaybe<Array<GuildImportCreateWithoutGuildInput>>;
  createMany?: InputMaybe<GuildImportCreateManyGuildInputEnvelope>;
  delete?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuildImportScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  set?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  update?: InputMaybe<Array<GuildImportUpdateWithWhereUniqueWithoutGuildInput>>;
  updateMany?: InputMaybe<Array<GuildImportUpdateManyWithWhereWithoutGuildInput>>;
  upsert?: InputMaybe<Array<GuildImportUpsertWithWhereUniqueWithoutGuildInput>>;
};

export type GuildImportUpdateManyWithoutImport_StatusNestedInput = {
  connect?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildImportCreateOrConnectWithoutImport_StatusInput>>;
  create?: InputMaybe<Array<GuildImportCreateWithoutImport_StatusInput>>;
  createMany?: InputMaybe<GuildImportCreateManyImport_StatusInputEnvelope>;
  delete?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuildImportScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  set?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  update?: InputMaybe<Array<GuildImportUpdateWithWhereUniqueWithoutImport_StatusInput>>;
  updateMany?: InputMaybe<Array<GuildImportUpdateManyWithWhereWithoutImport_StatusInput>>;
  upsert?: InputMaybe<Array<GuildImportUpsertWithWhereUniqueWithoutImport_StatusInput>>;
};

export type GuildImportUpdateManyWithoutIntegration_TypeNestedInput = {
  connect?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildImportCreateOrConnectWithoutIntegration_TypeInput>>;
  create?: InputMaybe<Array<GuildImportCreateWithoutIntegration_TypeInput>>;
  createMany?: InputMaybe<GuildImportCreateManyIntegration_TypeInputEnvelope>;
  delete?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuildImportScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  set?: InputMaybe<Array<GuildImportWhereUniqueInput>>;
  update?: InputMaybe<Array<GuildImportUpdateWithWhereUniqueWithoutIntegration_TypeInput>>;
  updateMany?: InputMaybe<Array<GuildImportUpdateManyWithWhereWithoutIntegration_TypeInput>>;
  upsert?: InputMaybe<Array<GuildImportUpsertWithWhereUniqueWithoutIntegration_TypeInput>>;
};

export type GuildImportUpdateOneWithoutUsersNestedInput = {
  connect?: InputMaybe<GuildImportWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildImportCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<GuildImportCreateWithoutUsersInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<GuildImportUpdateWithoutUsersInput>;
  upsert?: InputMaybe<GuildImportUpsertWithoutUsersInput>;
};

export type GuildImportUpdateWithWhereUniqueWithoutGuildInput = {
  data: GuildImportUpdateWithoutGuildInput;
  where: GuildImportWhereUniqueInput;
};

export type GuildImportUpdateWithWhereUniqueWithoutImport_StatusInput = {
  data: GuildImportUpdateWithoutImport_StatusInput;
  where: GuildImportWhereUniqueInput;
};

export type GuildImportUpdateWithWhereUniqueWithoutIntegration_TypeInput = {
  data: GuildImportUpdateWithoutIntegration_TypeInput;
  where: GuildImportWhereUniqueInput;
};

export type GuildImportUpdateWithoutGuildInput = {
  authentication_token?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  import_status?: InputMaybe<GuildImportStatusUpdateOneRequiredWithoutGuild_ImportsNestedInput>;
  integration_type?: InputMaybe<IntegrationTypeUpdateOneRequiredWithoutGuild_ImportsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<GuildUserUpdateManyWithoutGuild_ImportNestedInput>;
};

export type GuildImportUpdateWithoutImport_StatusInput = {
  authentication_token?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutGuild_ImportsNestedInput>;
  integration_type?: InputMaybe<IntegrationTypeUpdateOneRequiredWithoutGuild_ImportsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<GuildUserUpdateManyWithoutGuild_ImportNestedInput>;
};

export type GuildImportUpdateWithoutIntegration_TypeInput = {
  authentication_token?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutGuild_ImportsNestedInput>;
  import_status?: InputMaybe<GuildImportStatusUpdateOneRequiredWithoutGuild_ImportsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<GuildUserUpdateManyWithoutGuild_ImportNestedInput>;
};

export type GuildImportUpdateWithoutUsersInput = {
  authentication_token?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutGuild_ImportsNestedInput>;
  import_status?: InputMaybe<GuildImportStatusUpdateOneRequiredWithoutGuild_ImportsNestedInput>;
  integration_type?: InputMaybe<IntegrationTypeUpdateOneRequiredWithoutGuild_ImportsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildImportUpsertWithWhereUniqueWithoutGuildInput = {
  create: GuildImportCreateWithoutGuildInput;
  update: GuildImportUpdateWithoutGuildInput;
  where: GuildImportWhereUniqueInput;
};

export type GuildImportUpsertWithWhereUniqueWithoutImport_StatusInput = {
  create: GuildImportCreateWithoutImport_StatusInput;
  update: GuildImportUpdateWithoutImport_StatusInput;
  where: GuildImportWhereUniqueInput;
};

export type GuildImportUpsertWithWhereUniqueWithoutIntegration_TypeInput = {
  create: GuildImportCreateWithoutIntegration_TypeInput;
  update: GuildImportUpdateWithoutIntegration_TypeInput;
  where: GuildImportWhereUniqueInput;
};

export type GuildImportUpsertWithoutUsersInput = {
  create: GuildImportCreateWithoutUsersInput;
  update: GuildImportUpdateWithoutUsersInput;
};

export type GuildImportWhereInput = {
  AND?: InputMaybe<Array<GuildImportWhereInput>>;
  NOT?: InputMaybe<Array<GuildImportWhereInput>>;
  OR?: InputMaybe<Array<GuildImportWhereInput>>;
  authentication_token?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guild?: InputMaybe<GuildRelationFilter>;
  guild_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  import_status?: InputMaybe<GuildImportStatusRelationFilter>;
  import_status_id?: InputMaybe<IntFilter>;
  integration_type?: InputMaybe<IntegrationTypeRelationFilter>;
  integration_type_id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<GuildUserListRelationFilter>;
};

export type GuildImportWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type GuildMaxAggregate = {
  congrats_channel?: Maybe<Scalars['String']>;
  contribution_reporting_channel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discord_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GuildStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuildMaxOrderByAggregateInput = {
  congrats_channel?: InputMaybe<SortOrder>;
  contribution_reporting_channel?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildMembershipStatus = {
  _count?: Maybe<GuildMembershipStatusCount>;
  createdAt: Scalars['DateTime'];
  guildUsers: Array<GuildUser>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type GuildMembershipStatusGuildUsersArgs = {
  cursor?: InputMaybe<GuildUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildUserWhereInput>;
};

export type GuildMembershipStatusAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type GuildMembershipStatusAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GuildMembershipStatusCount = {
  guildUsers: Scalars['Int'];
};

export type GuildMembershipStatusCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GuildMembershipStatusCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildMembershipStatusCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guildUsers?: InputMaybe<GuildUserCreateNestedManyWithoutMembershipStatusInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildMembershipStatusCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildMembershipStatusCreateNestedOneWithoutGuildUsersInput = {
  connect?: InputMaybe<GuildMembershipStatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildMembershipStatusCreateOrConnectWithoutGuildUsersInput>;
  create?: InputMaybe<GuildMembershipStatusCreateWithoutGuildUsersInput>;
};

export type GuildMembershipStatusCreateOrConnectWithoutGuildUsersInput = {
  create: GuildMembershipStatusCreateWithoutGuildUsersInput;
  where: GuildMembershipStatusWhereUniqueInput;
};

export type GuildMembershipStatusCreateWithoutGuildUsersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildMembershipStatusGroupBy = {
  _avg?: Maybe<GuildMembershipStatusAvgAggregate>;
  _count?: Maybe<GuildMembershipStatusCountAggregate>;
  _max?: Maybe<GuildMembershipStatusMaxAggregate>;
  _min?: Maybe<GuildMembershipStatusMinAggregate>;
  _sum?: Maybe<GuildMembershipStatusSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GuildMembershipStatusMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuildMembershipStatusMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildMembershipStatusMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuildMembershipStatusMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildMembershipStatusOrderByWithAggregationInput = {
  _avg?: InputMaybe<GuildMembershipStatusAvgOrderByAggregateInput>;
  _count?: InputMaybe<GuildMembershipStatusCountOrderByAggregateInput>;
  _max?: InputMaybe<GuildMembershipStatusMaxOrderByAggregateInput>;
  _min?: InputMaybe<GuildMembershipStatusMinOrderByAggregateInput>;
  _sum?: InputMaybe<GuildMembershipStatusSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildMembershipStatusOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  guildUsers?: InputMaybe<GuildUserOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildMembershipStatusRelationFilter = {
  is?: InputMaybe<GuildMembershipStatusWhereInput>;
  isNot?: InputMaybe<GuildMembershipStatusWhereInput>;
};

export enum GuildMembershipStatusScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type GuildMembershipStatusScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GuildMembershipStatusScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GuildMembershipStatusScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GuildMembershipStatusScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type GuildMembershipStatusSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type GuildMembershipStatusSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GuildMembershipStatusUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guildUsers?: InputMaybe<GuildUserUpdateManyWithoutMembershipStatusNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildMembershipStatusUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildMembershipStatusUpdateOneWithoutGuildUsersNestedInput = {
  connect?: InputMaybe<GuildMembershipStatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildMembershipStatusCreateOrConnectWithoutGuildUsersInput>;
  create?: InputMaybe<GuildMembershipStatusCreateWithoutGuildUsersInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<GuildMembershipStatusUpdateWithoutGuildUsersInput>;
  upsert?: InputMaybe<GuildMembershipStatusUpsertWithoutGuildUsersInput>;
};

export type GuildMembershipStatusUpdateWithoutGuildUsersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildMembershipStatusUpsertWithoutGuildUsersInput = {
  create: GuildMembershipStatusCreateWithoutGuildUsersInput;
  update: GuildMembershipStatusUpdateWithoutGuildUsersInput;
};

export type GuildMembershipStatusWhereInput = {
  AND?: InputMaybe<Array<GuildMembershipStatusWhereInput>>;
  NOT?: InputMaybe<Array<GuildMembershipStatusWhereInput>>;
  OR?: InputMaybe<Array<GuildMembershipStatusWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guildUsers?: InputMaybe<GuildUserListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GuildMembershipStatusWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type GuildMinAggregate = {
  congrats_channel?: Maybe<Scalars['String']>;
  contribution_reporting_channel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discord_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GuildStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuildMinOrderByAggregateInput = {
  congrats_channel?: InputMaybe<SortOrder>;
  contribution_reporting_channel?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildOrderByWithAggregationInput = {
  _avg?: InputMaybe<GuildAvgOrderByAggregateInput>;
  _count?: InputMaybe<GuildCountOrderByAggregateInput>;
  _max?: InputMaybe<GuildMaxOrderByAggregateInput>;
  _min?: InputMaybe<GuildMinOrderByAggregateInput>;
  _sum?: InputMaybe<GuildSumOrderByAggregateInput>;
  congrats_channel?: InputMaybe<SortOrder>;
  contribution_reporting_channel?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GuildOrderByWithRelationInput = {
  activity_type?: InputMaybe<GuildActivityTypeOrderByRelationAggregateInput>;
  congrats_channel?: InputMaybe<SortOrder>;
  contribution_reporting_channel?: InputMaybe<SortOrder>;
  contributions?: InputMaybe<GuildContributionOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  discord_id?: InputMaybe<SortOrder>;
  guild_imports?: InputMaybe<GuildImportOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  twitter_accounts?: InputMaybe<TwitterAccountOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<GuildUserOrderByRelationAggregateInput>;
};

export type GuildRelationFilter = {
  is?: InputMaybe<GuildWhereInput>;
  isNot?: InputMaybe<GuildWhereInput>;
};

export enum GuildScalarFieldEnum {
  CongratsChannel = 'congrats_channel',
  ContributionReportingChannel = 'contribution_reporting_channel',
  CreatedAt = 'createdAt',
  DiscordId = 'discord_id',
  Id = 'id',
  Logo = 'logo',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type GuildScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GuildScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GuildScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GuildScalarWhereWithAggregatesInput>>;
  congrats_channel?: InputMaybe<StringNullableWithAggregatesFilter>;
  contribution_reporting_channel?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  discord_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  logo?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  status?: InputMaybe<EnumGuildStatusWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export enum GuildStatus {
  Inputted = 'INPUTTED',
  Onboarded = 'ONBOARDED',
  Validated = 'VALIDATED'
}

export type GuildSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type GuildSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GuildUpdateCustomInput = {
  congrats_channel?: InputMaybe<Scalars['String']>;
  contribution_reporting_channel?: InputMaybe<Scalars['String']>;
  discord_id?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type GuildUpdateCustomWhereInput = {
  guildId: Scalars['Int'];
};

export type GuildUpdateInput = {
  activity_type?: InputMaybe<GuildActivityTypeUpdateManyWithoutGuildNestedInput>;
  congrats_channel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contribution_reporting_channel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contributions?: InputMaybe<GuildContributionUpdateManyWithoutGuildNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_imports?: InputMaybe<GuildImportUpdateManyWithoutGuildNestedInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumGuildStatusFieldUpdateOperationsInput>;
  twitter_accounts?: InputMaybe<TwitterAccountUpdateManyWithoutGuildNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<GuildUserUpdateManyWithoutGuildNestedInput>;
};

export type GuildUpdateManyMutationInput = {
  congrats_channel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contribution_reporting_channel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumGuildStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildUpdateOneRequiredWithoutActivity_TypeNestedInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutActivity_TypeInput>;
  create?: InputMaybe<GuildCreateWithoutActivity_TypeInput>;
  update?: InputMaybe<GuildUpdateWithoutActivity_TypeInput>;
  upsert?: InputMaybe<GuildUpsertWithoutActivity_TypeInput>;
};

export type GuildUpdateOneRequiredWithoutContributionsNestedInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<GuildCreateWithoutContributionsInput>;
  update?: InputMaybe<GuildUpdateWithoutContributionsInput>;
  upsert?: InputMaybe<GuildUpsertWithoutContributionsInput>;
};

export type GuildUpdateOneRequiredWithoutGuild_ImportsNestedInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutGuild_ImportsInput>;
  create?: InputMaybe<GuildCreateWithoutGuild_ImportsInput>;
  update?: InputMaybe<GuildUpdateWithoutGuild_ImportsInput>;
  upsert?: InputMaybe<GuildUpsertWithoutGuild_ImportsInput>;
};

export type GuildUpdateOneRequiredWithoutUsersNestedInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<GuildCreateWithoutUsersInput>;
  update?: InputMaybe<GuildUpdateWithoutUsersInput>;
  upsert?: InputMaybe<GuildUpsertWithoutUsersInput>;
};

export type GuildUpdateOneWithoutTwitter_AccountsNestedInput = {
  connect?: InputMaybe<GuildWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuildCreateOrConnectWithoutTwitter_AccountsInput>;
  create?: InputMaybe<GuildCreateWithoutTwitter_AccountsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<GuildUpdateWithoutTwitter_AccountsInput>;
  upsert?: InputMaybe<GuildUpsertWithoutTwitter_AccountsInput>;
};

export type GuildUpdateWithoutActivity_TypeInput = {
  congrats_channel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contribution_reporting_channel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contributions?: InputMaybe<GuildContributionUpdateManyWithoutGuildNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_imports?: InputMaybe<GuildImportUpdateManyWithoutGuildNestedInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumGuildStatusFieldUpdateOperationsInput>;
  twitter_accounts?: InputMaybe<TwitterAccountUpdateManyWithoutGuildNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<GuildUserUpdateManyWithoutGuildNestedInput>;
};

export type GuildUpdateWithoutContributionsInput = {
  activity_type?: InputMaybe<GuildActivityTypeUpdateManyWithoutGuildNestedInput>;
  congrats_channel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contribution_reporting_channel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_imports?: InputMaybe<GuildImportUpdateManyWithoutGuildNestedInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumGuildStatusFieldUpdateOperationsInput>;
  twitter_accounts?: InputMaybe<TwitterAccountUpdateManyWithoutGuildNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<GuildUserUpdateManyWithoutGuildNestedInput>;
};

export type GuildUpdateWithoutGuild_ImportsInput = {
  activity_type?: InputMaybe<GuildActivityTypeUpdateManyWithoutGuildNestedInput>;
  congrats_channel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contribution_reporting_channel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contributions?: InputMaybe<GuildContributionUpdateManyWithoutGuildNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumGuildStatusFieldUpdateOperationsInput>;
  twitter_accounts?: InputMaybe<TwitterAccountUpdateManyWithoutGuildNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<GuildUserUpdateManyWithoutGuildNestedInput>;
};

export type GuildUpdateWithoutTwitter_AccountsInput = {
  activity_type?: InputMaybe<GuildActivityTypeUpdateManyWithoutGuildNestedInput>;
  congrats_channel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contribution_reporting_channel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contributions?: InputMaybe<GuildContributionUpdateManyWithoutGuildNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_imports?: InputMaybe<GuildImportUpdateManyWithoutGuildNestedInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumGuildStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<GuildUserUpdateManyWithoutGuildNestedInput>;
};

export type GuildUpdateWithoutUsersInput = {
  activity_type?: InputMaybe<GuildActivityTypeUpdateManyWithoutGuildNestedInput>;
  congrats_channel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contribution_reporting_channel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contributions?: InputMaybe<GuildContributionUpdateManyWithoutGuildNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_imports?: InputMaybe<GuildImportUpdateManyWithoutGuildNestedInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumGuildStatusFieldUpdateOperationsInput>;
  twitter_accounts?: InputMaybe<TwitterAccountUpdateManyWithoutGuildNestedInput>;
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

export type GuildUpsertWithoutGuild_ImportsInput = {
  create: GuildCreateWithoutGuild_ImportsInput;
  update: GuildUpdateWithoutGuild_ImportsInput;
};

export type GuildUpsertWithoutTwitter_AccountsInput = {
  create: GuildCreateWithoutTwitter_AccountsInput;
  update: GuildUpdateWithoutTwitter_AccountsInput;
};

export type GuildUpsertWithoutUsersInput = {
  create: GuildCreateWithoutUsersInput;
  update: GuildUpdateWithoutUsersInput;
};

export type GuildUser = {
  createdAt: Scalars['DateTime'];
  favorite: Scalars['Boolean'];
  guild: Guild;
  guild_id: Scalars['Int'];
  guild_import?: Maybe<GuildImport>;
  guild_import_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  membershipStatus?: Maybe<GuildMembershipStatus>;
  membership_status_id?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  user_id: Scalars['Int'];
};

export type GuildUserAvgAggregate = {
  guild_id?: Maybe<Scalars['Float']>;
  guild_import_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  membership_status_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type GuildUserAvgOrderByAggregateInput = {
  guild_id?: InputMaybe<SortOrder>;
  guild_import_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  membership_status_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type GuildUserCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  favorite: Scalars['Int'];
  guild_id: Scalars['Int'];
  guild_import_id: Scalars['Int'];
  id: Scalars['Int'];
  membership_status_id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type GuildUserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  favorite?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  guild_import_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  membership_status_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type GuildUserCreateCustomInput = {
  guildId?: InputMaybe<Scalars['Int']>;
  guildName?: InputMaybe<Scalars['String']>;
  membershipStatus?: InputMaybe<Scalars['String']>;
  userAddress?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type GuildUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  guild: GuildCreateNestedOneWithoutUsersInput;
  guild_import?: InputMaybe<GuildImportCreateNestedOneWithoutUsersInput>;
  membershipStatus?: InputMaybe<GuildMembershipStatusCreateNestedOneWithoutGuildUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutGuild_UsersInput;
};

export type GuildUserCreateManyGuildInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  guild_import_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  membership_status_id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type GuildUserCreateManyGuildInputEnvelope = {
  data: Array<GuildUserCreateManyGuildInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuildUserCreateManyGuild_ImportInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  guild_id: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  membership_status_id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type GuildUserCreateManyGuild_ImportInputEnvelope = {
  data: Array<GuildUserCreateManyGuild_ImportInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuildUserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  guild_id: Scalars['Int'];
  guild_import_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  membership_status_id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type GuildUserCreateManyMembershipStatusInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  guild_id: Scalars['Int'];
  guild_import_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type GuildUserCreateManyMembershipStatusInputEnvelope = {
  data: Array<GuildUserCreateManyMembershipStatusInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuildUserCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  guild_id: Scalars['Int'];
  guild_import_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  membership_status_id?: InputMaybe<Scalars['Int']>;
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

export type GuildUserCreateNestedManyWithoutGuild_ImportInput = {
  connect?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildUserCreateOrConnectWithoutGuild_ImportInput>>;
  create?: InputMaybe<Array<GuildUserCreateWithoutGuild_ImportInput>>;
  createMany?: InputMaybe<GuildUserCreateManyGuild_ImportInputEnvelope>;
};

export type GuildUserCreateNestedManyWithoutMembershipStatusInput = {
  connect?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildUserCreateOrConnectWithoutMembershipStatusInput>>;
  create?: InputMaybe<Array<GuildUserCreateWithoutMembershipStatusInput>>;
  createMany?: InputMaybe<GuildUserCreateManyMembershipStatusInputEnvelope>;
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

export type GuildUserCreateOrConnectWithoutGuild_ImportInput = {
  create: GuildUserCreateWithoutGuild_ImportInput;
  where: GuildUserWhereUniqueInput;
};

export type GuildUserCreateOrConnectWithoutMembershipStatusInput = {
  create: GuildUserCreateWithoutMembershipStatusInput;
  where: GuildUserWhereUniqueInput;
};

export type GuildUserCreateOrConnectWithoutUserInput = {
  create: GuildUserCreateWithoutUserInput;
  where: GuildUserWhereUniqueInput;
};

export type GuildUserCreateWithoutGuildInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  guild_import?: InputMaybe<GuildImportCreateNestedOneWithoutUsersInput>;
  membershipStatus?: InputMaybe<GuildMembershipStatusCreateNestedOneWithoutGuildUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutGuild_UsersInput;
};

export type GuildUserCreateWithoutGuild_ImportInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  guild: GuildCreateNestedOneWithoutUsersInput;
  membershipStatus?: InputMaybe<GuildMembershipStatusCreateNestedOneWithoutGuildUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutGuild_UsersInput;
};

export type GuildUserCreateWithoutMembershipStatusInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  guild: GuildCreateNestedOneWithoutUsersInput;
  guild_import?: InputMaybe<GuildImportCreateNestedOneWithoutUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutGuild_UsersInput;
};

export type GuildUserCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  guild: GuildCreateNestedOneWithoutUsersInput;
  guild_import?: InputMaybe<GuildImportCreateNestedOneWithoutUsersInput>;
  membershipStatus?: InputMaybe<GuildMembershipStatusCreateNestedOneWithoutGuildUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuildUserGroupBy = {
  _avg?: Maybe<GuildUserAvgAggregate>;
  _count?: Maybe<GuildUserCountAggregate>;
  _max?: Maybe<GuildUserMaxAggregate>;
  _min?: Maybe<GuildUserMinAggregate>;
  _sum?: Maybe<GuildUserSumAggregate>;
  createdAt: Scalars['DateTime'];
  favorite: Scalars['Boolean'];
  guild_id: Scalars['Int'];
  guild_import_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  membership_status_id?: Maybe<Scalars['Int']>;
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
  favorite?: Maybe<Scalars['Boolean']>;
  guild_id?: Maybe<Scalars['Int']>;
  guild_import_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  membership_status_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type GuildUserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  favorite?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  guild_import_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  membership_status_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type GuildUserMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  favorite?: Maybe<Scalars['Boolean']>;
  guild_id?: Maybe<Scalars['Int']>;
  guild_import_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  membership_status_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type GuildUserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  favorite?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  guild_import_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  membership_status_id?: InputMaybe<SortOrder>;
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
  favorite?: InputMaybe<SortOrder>;
  guild_id?: InputMaybe<SortOrder>;
  guild_import_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  membership_status_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type GuildUserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  favorite?: InputMaybe<SortOrder>;
  guild?: InputMaybe<GuildOrderByWithRelationInput>;
  guild_id?: InputMaybe<SortOrder>;
  guild_import?: InputMaybe<GuildImportOrderByWithRelationInput>;
  guild_import_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  membershipStatus?: InputMaybe<GuildMembershipStatusOrderByWithRelationInput>;
  membership_status_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum GuildUserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Favorite = 'favorite',
  GuildId = 'guild_id',
  GuildImportId = 'guild_import_id',
  Id = 'id',
  MembershipStatusId = 'membership_status_id',
  UpdatedAt = 'updatedAt',
  UserId = 'user_id'
}

export type GuildUserScalarWhereInput = {
  AND?: InputMaybe<Array<GuildUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<GuildUserScalarWhereInput>>;
  OR?: InputMaybe<Array<GuildUserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  favorite?: InputMaybe<BoolFilter>;
  guild_id?: InputMaybe<IntFilter>;
  guild_import_id?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  membership_status_id?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type GuildUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GuildUserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GuildUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GuildUserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  favorite?: InputMaybe<BoolWithAggregatesFilter>;
  guild_id?: InputMaybe<IntWithAggregatesFilter>;
  guild_import_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  membership_status_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type GuildUserSumAggregate = {
  guild_id?: Maybe<Scalars['Int']>;
  guild_import_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  membership_status_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type GuildUserSumOrderByAggregateInput = {
  guild_id?: InputMaybe<SortOrder>;
  guild_import_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  membership_status_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type GuildUserUpdateCustomInput = {
  favorite?: InputMaybe<Scalars['Boolean']>;
  guildId: Scalars['Int'];
  memberId?: InputMaybe<Scalars['Int']>;
  membershipStatus?: InputMaybe<Scalars['String']>;
  membershipStatusId?: InputMaybe<Scalars['Int']>;
  userAddress?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type GuildUserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutUsersNestedInput>;
  guild_import?: InputMaybe<GuildImportUpdateOneWithoutUsersNestedInput>;
  membershipStatus?: InputMaybe<GuildMembershipStatusUpdateOneWithoutGuildUsersNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutGuild_UsersNestedInput>;
};

export type GuildUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildUserUpdateManyWithWhereWithoutGuildInput = {
  data: GuildUserUpdateManyMutationInput;
  where: GuildUserScalarWhereInput;
};

export type GuildUserUpdateManyWithWhereWithoutGuild_ImportInput = {
  data: GuildUserUpdateManyMutationInput;
  where: GuildUserScalarWhereInput;
};

export type GuildUserUpdateManyWithWhereWithoutMembershipStatusInput = {
  data: GuildUserUpdateManyMutationInput;
  where: GuildUserScalarWhereInput;
};

export type GuildUserUpdateManyWithWhereWithoutUserInput = {
  data: GuildUserUpdateManyMutationInput;
  where: GuildUserScalarWhereInput;
};

export type GuildUserUpdateManyWithoutGuildNestedInput = {
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

export type GuildUserUpdateManyWithoutGuild_ImportNestedInput = {
  connect?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildUserCreateOrConnectWithoutGuild_ImportInput>>;
  create?: InputMaybe<Array<GuildUserCreateWithoutGuild_ImportInput>>;
  createMany?: InputMaybe<GuildUserCreateManyGuild_ImportInputEnvelope>;
  delete?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuildUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  set?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  update?: InputMaybe<Array<GuildUserUpdateWithWhereUniqueWithoutGuild_ImportInput>>;
  updateMany?: InputMaybe<Array<GuildUserUpdateManyWithWhereWithoutGuild_ImportInput>>;
  upsert?: InputMaybe<Array<GuildUserUpsertWithWhereUniqueWithoutGuild_ImportInput>>;
};

export type GuildUserUpdateManyWithoutMembershipStatusNestedInput = {
  connect?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuildUserCreateOrConnectWithoutMembershipStatusInput>>;
  create?: InputMaybe<Array<GuildUserCreateWithoutMembershipStatusInput>>;
  createMany?: InputMaybe<GuildUserCreateManyMembershipStatusInputEnvelope>;
  delete?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuildUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  set?: InputMaybe<Array<GuildUserWhereUniqueInput>>;
  update?: InputMaybe<Array<GuildUserUpdateWithWhereUniqueWithoutMembershipStatusInput>>;
  updateMany?: InputMaybe<Array<GuildUserUpdateManyWithWhereWithoutMembershipStatusInput>>;
  upsert?: InputMaybe<Array<GuildUserUpsertWithWhereUniqueWithoutMembershipStatusInput>>;
};

export type GuildUserUpdateManyWithoutUserNestedInput = {
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

export type GuildUserUpdateWithWhereUniqueWithoutGuild_ImportInput = {
  data: GuildUserUpdateWithoutGuild_ImportInput;
  where: GuildUserWhereUniqueInput;
};

export type GuildUserUpdateWithWhereUniqueWithoutMembershipStatusInput = {
  data: GuildUserUpdateWithoutMembershipStatusInput;
  where: GuildUserWhereUniqueInput;
};

export type GuildUserUpdateWithWhereUniqueWithoutUserInput = {
  data: GuildUserUpdateWithoutUserInput;
  where: GuildUserWhereUniqueInput;
};

export type GuildUserUpdateWithoutGuildInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  guild_import?: InputMaybe<GuildImportUpdateOneWithoutUsersNestedInput>;
  membershipStatus?: InputMaybe<GuildMembershipStatusUpdateOneWithoutGuildUsersNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutGuild_UsersNestedInput>;
};

export type GuildUserUpdateWithoutGuild_ImportInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutUsersNestedInput>;
  membershipStatus?: InputMaybe<GuildMembershipStatusUpdateOneWithoutGuildUsersNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutGuild_UsersNestedInput>;
};

export type GuildUserUpdateWithoutMembershipStatusInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutUsersNestedInput>;
  guild_import?: InputMaybe<GuildImportUpdateOneWithoutUsersNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutGuild_UsersNestedInput>;
};

export type GuildUserUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  guild?: InputMaybe<GuildUpdateOneRequiredWithoutUsersNestedInput>;
  guild_import?: InputMaybe<GuildImportUpdateOneWithoutUsersNestedInput>;
  membershipStatus?: InputMaybe<GuildMembershipStatusUpdateOneWithoutGuildUsersNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GuildUserUpsertWithWhereUniqueWithoutGuildInput = {
  create: GuildUserCreateWithoutGuildInput;
  update: GuildUserUpdateWithoutGuildInput;
  where: GuildUserWhereUniqueInput;
};

export type GuildUserUpsertWithWhereUniqueWithoutGuild_ImportInput = {
  create: GuildUserCreateWithoutGuild_ImportInput;
  update: GuildUserUpdateWithoutGuild_ImportInput;
  where: GuildUserWhereUniqueInput;
};

export type GuildUserUpsertWithWhereUniqueWithoutMembershipStatusInput = {
  create: GuildUserCreateWithoutMembershipStatusInput;
  update: GuildUserUpdateWithoutMembershipStatusInput;
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
  favorite?: InputMaybe<BoolFilter>;
  guild?: InputMaybe<GuildRelationFilter>;
  guild_id?: InputMaybe<IntFilter>;
  guild_import?: InputMaybe<GuildImportRelationFilter>;
  guild_import_id?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  membershipStatus?: InputMaybe<GuildMembershipStatusRelationFilter>;
  membership_status_id?: InputMaybe<IntNullableFilter>;
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
  congrats_channel?: InputMaybe<StringNullableFilter>;
  contribution_reporting_channel?: InputMaybe<StringNullableFilter>;
  contributions?: InputMaybe<GuildContributionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  discord_id?: InputMaybe<StringNullableFilter>;
  guild_imports?: InputMaybe<GuildImportListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  logo?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumGuildStatusFilter>;
  twitter_accounts?: InputMaybe<TwitterAccountListRelationFilter>;
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

export type IntNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['Int']>>;
  has?: InputMaybe<Scalars['Int']>;
  hasEvery?: InputMaybe<Array<Scalars['Int']>>;
  hasSome?: InputMaybe<Array<Scalars['Int']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
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

export type IntegrationType = {
  _count?: Maybe<IntegrationTypeCount>;
  createdAt: Scalars['DateTime'];
  guild_imports: Array<GuildImport>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type IntegrationTypeGuild_ImportsArgs = {
  cursor?: InputMaybe<GuildImportWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildImportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildImportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildImportWhereInput>;
};

export type IntegrationTypeAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type IntegrationTypeAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type IntegrationTypeCount = {
  guild_imports: Scalars['Int'];
};

export type IntegrationTypeCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type IntegrationTypeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IntegrationTypeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild_imports?: InputMaybe<GuildImportCreateNestedManyWithoutIntegration_TypeInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IntegrationTypeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IntegrationTypeCreateNestedOneWithoutGuild_ImportsInput = {
  connect?: InputMaybe<IntegrationTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IntegrationTypeCreateOrConnectWithoutGuild_ImportsInput>;
  create?: InputMaybe<IntegrationTypeCreateWithoutGuild_ImportsInput>;
};

export type IntegrationTypeCreateOrConnectWithoutGuild_ImportsInput = {
  create: IntegrationTypeCreateWithoutGuild_ImportsInput;
  where: IntegrationTypeWhereUniqueInput;
};

export type IntegrationTypeCreateWithoutGuild_ImportsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IntegrationTypeGroupBy = {
  _avg?: Maybe<IntegrationTypeAvgAggregate>;
  _count?: Maybe<IntegrationTypeCountAggregate>;
  _max?: Maybe<IntegrationTypeMaxAggregate>;
  _min?: Maybe<IntegrationTypeMinAggregate>;
  _sum?: Maybe<IntegrationTypeSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type IntegrationTypeMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationTypeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IntegrationTypeMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationTypeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IntegrationTypeOrderByWithAggregationInput = {
  _avg?: InputMaybe<IntegrationTypeAvgOrderByAggregateInput>;
  _count?: InputMaybe<IntegrationTypeCountOrderByAggregateInput>;
  _max?: InputMaybe<IntegrationTypeMaxOrderByAggregateInput>;
  _min?: InputMaybe<IntegrationTypeMinOrderByAggregateInput>;
  _sum?: InputMaybe<IntegrationTypeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IntegrationTypeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  guild_imports?: InputMaybe<GuildImportOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IntegrationTypeRelationFilter = {
  is?: InputMaybe<IntegrationTypeWhereInput>;
  isNot?: InputMaybe<IntegrationTypeWhereInput>;
};

export enum IntegrationTypeScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type IntegrationTypeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<IntegrationTypeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<IntegrationTypeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<IntegrationTypeScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type IntegrationTypeSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type IntegrationTypeSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type IntegrationTypeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guild_imports?: InputMaybe<GuildImportUpdateManyWithoutIntegration_TypeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationTypeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationTypeUpdateOneRequiredWithoutGuild_ImportsNestedInput = {
  connect?: InputMaybe<IntegrationTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IntegrationTypeCreateOrConnectWithoutGuild_ImportsInput>;
  create?: InputMaybe<IntegrationTypeCreateWithoutGuild_ImportsInput>;
  update?: InputMaybe<IntegrationTypeUpdateWithoutGuild_ImportsInput>;
  upsert?: InputMaybe<IntegrationTypeUpsertWithoutGuild_ImportsInput>;
};

export type IntegrationTypeUpdateWithoutGuild_ImportsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationTypeUpsertWithoutGuild_ImportsInput = {
  create: IntegrationTypeCreateWithoutGuild_ImportsInput;
  update: IntegrationTypeUpdateWithoutGuild_ImportsInput;
};

export type IntegrationTypeWhereInput = {
  AND?: InputMaybe<Array<IntegrationTypeWhereInput>>;
  NOT?: InputMaybe<Array<IntegrationTypeWhereInput>>;
  OR?: InputMaybe<Array<IntegrationTypeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guild_imports?: InputMaybe<GuildImportListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IntegrationTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
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
  issues?: InputMaybe<LinearIssueUpdateManyWithoutCycleNestedInput>;
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

export type LinearCycleUpdateOneWithoutIssuesNestedInput = {
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
  assignee?: InputMaybe<LinearUserUpdateOneWithoutAssigned_IssuesNestedInput>;
  autoArchivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoClosedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  boardOrder?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  branchName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  canceledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  contribution?: InputMaybe<ContributionUpdateOneWithoutLinear_IssueNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<LinearUserUpdateOneWithoutCreated_IssuesNestedInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cycle?: InputMaybe<LinearCycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  priorityLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<LinearProjectUpdateOneWithoutIssuesNestedInput>;
  snoozedUntilAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  startedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subIssueSortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  team?: InputMaybe<LinearTeamUpdateOneWithoutIssuesNestedInput>;
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

export type LinearIssueUpdateManyWithoutAssigneeNestedInput = {
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

export type LinearIssueUpdateManyWithoutCreatorNestedInput = {
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

export type LinearIssueUpdateManyWithoutCycleNestedInput = {
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

export type LinearIssueUpdateManyWithoutProjectNestedInput = {
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

export type LinearIssueUpdateManyWithoutTeamNestedInput = {
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

export type LinearIssueUpdateOneWithoutContributionNestedInput = {
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
  contribution?: InputMaybe<ContributionUpdateOneWithoutLinear_IssueNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<LinearUserUpdateOneWithoutCreated_IssuesNestedInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cycle?: InputMaybe<LinearCycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  priorityLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<LinearProjectUpdateOneWithoutIssuesNestedInput>;
  snoozedUntilAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  startedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subIssueSortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  team?: InputMaybe<LinearTeamUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  trashed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearIssueUpdateWithoutContributionInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  assignee?: InputMaybe<LinearUserUpdateOneWithoutAssigned_IssuesNestedInput>;
  autoArchivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoClosedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  boardOrder?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  branchName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  canceledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<LinearUserUpdateOneWithoutCreated_IssuesNestedInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cycle?: InputMaybe<LinearCycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  priorityLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<LinearProjectUpdateOneWithoutIssuesNestedInput>;
  snoozedUntilAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  startedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subIssueSortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  team?: InputMaybe<LinearTeamUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  trashed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearIssueUpdateWithoutCreatorInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  assignee?: InputMaybe<LinearUserUpdateOneWithoutAssigned_IssuesNestedInput>;
  autoArchivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoClosedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  boardOrder?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  branchName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  canceledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  contribution?: InputMaybe<ContributionUpdateOneWithoutLinear_IssueNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cycle?: InputMaybe<LinearCycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  priorityLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<LinearProjectUpdateOneWithoutIssuesNestedInput>;
  snoozedUntilAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  startedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subIssueSortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  team?: InputMaybe<LinearTeamUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  trashed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearIssueUpdateWithoutCycleInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  assignee?: InputMaybe<LinearUserUpdateOneWithoutAssigned_IssuesNestedInput>;
  autoArchivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoClosedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  boardOrder?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  branchName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  canceledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  contribution?: InputMaybe<ContributionUpdateOneWithoutLinear_IssueNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<LinearUserUpdateOneWithoutCreated_IssuesNestedInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  priorityLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<LinearProjectUpdateOneWithoutIssuesNestedInput>;
  snoozedUntilAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  startedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subIssueSortOrder?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  team?: InputMaybe<LinearTeamUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  trashed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearIssueUpdateWithoutProjectInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  assignee?: InputMaybe<LinearUserUpdateOneWithoutAssigned_IssuesNestedInput>;
  autoArchivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoClosedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  boardOrder?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  branchName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  canceledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  contribution?: InputMaybe<ContributionUpdateOneWithoutLinear_IssueNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<LinearUserUpdateOneWithoutCreated_IssuesNestedInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cycle?: InputMaybe<LinearCycleUpdateOneWithoutIssuesNestedInput>;
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
  team?: InputMaybe<LinearTeamUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  trashed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LinearIssueUpdateWithoutTeamInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  assignee?: InputMaybe<LinearUserUpdateOneWithoutAssigned_IssuesNestedInput>;
  autoArchivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  autoClosedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  boardOrder?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  branchName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  canceledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  contribution?: InputMaybe<ContributionUpdateOneWithoutLinear_IssueNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<LinearUserUpdateOneWithoutCreated_IssuesNestedInput>;
  customerTickerCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cycle?: InputMaybe<LinearCycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  priorityLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<LinearProjectUpdateOneWithoutIssuesNestedInput>;
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
  issues?: InputMaybe<LinearIssueUpdateManyWithoutProjectNestedInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LinearProjectUpdateManyMutationInput = {
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LinearProjectUpdateOneWithoutIssuesNestedInput = {
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
  issues?: InputMaybe<LinearIssueUpdateManyWithoutTeamNestedInput>;
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LinearTeamUpdateManyMutationInput = {
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LinearTeamUpdateOneWithoutIssuesNestedInput = {
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
  access_token?: Maybe<Scalars['String']>;
  active: Scalars['Boolean'];
  active_token?: Maybe<Scalars['Boolean']>;
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
  access_token: Scalars['Int'];
  active: Scalars['Int'];
  active_token: Scalars['Int'];
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
  access_token?: InputMaybe<SortOrder>;
  active?: InputMaybe<SortOrder>;
  active_token?: InputMaybe<SortOrder>;
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
  access_token?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_token?: InputMaybe<Scalars['Boolean']>;
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
  access_token?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_token?: InputMaybe<Scalars['Boolean']>;
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
  access_token?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_token?: InputMaybe<Scalars['Boolean']>;
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
  access_token?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_token?: InputMaybe<Scalars['Boolean']>;
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
  access_token?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_token?: InputMaybe<Scalars['Boolean']>;
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
  access_token?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_token?: InputMaybe<Scalars['Boolean']>;
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
  access_token?: Maybe<Scalars['String']>;
  active: Scalars['Boolean'];
  active_token?: Maybe<Scalars['Boolean']>;
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
  access_token?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  active_token?: Maybe<Scalars['Boolean']>;
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
  access_token?: InputMaybe<SortOrder>;
  active?: InputMaybe<SortOrder>;
  active_token?: InputMaybe<SortOrder>;
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
  access_token?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  active_token?: Maybe<Scalars['Boolean']>;
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
  access_token?: InputMaybe<SortOrder>;
  active?: InputMaybe<SortOrder>;
  active_token?: InputMaybe<SortOrder>;
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
  access_token?: InputMaybe<SortOrder>;
  active?: InputMaybe<SortOrder>;
  active_token?: InputMaybe<SortOrder>;
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
  access_token?: InputMaybe<SortOrder>;
  active?: InputMaybe<SortOrder>;
  active_token?: InputMaybe<SortOrder>;
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
  AccessToken = 'access_token',
  Active = 'active',
  ActiveToken = 'active_token',
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
  access_token?: InputMaybe<StringNullableFilter>;
  active?: InputMaybe<BoolFilter>;
  active_token?: InputMaybe<BoolNullableFilter>;
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
  access_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  active?: InputMaybe<BoolWithAggregatesFilter>;
  active_token?: InputMaybe<BoolNullableWithAggregatesFilter>;
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
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  active_token?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  assigned_issues?: InputMaybe<LinearIssueUpdateManyWithoutAssigneeNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  created_issues?: InputMaybe<LinearIssueUpdateManyWithoutCreatorNestedInput>;
  displayName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutLinear_UsersNestedInput>;
};

export type LinearUserUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  active_token?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
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

export type LinearUserUpdateManyWithoutUserNestedInput = {
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

export type LinearUserUpdateOneWithoutAssigned_IssuesNestedInput = {
  connect?: InputMaybe<LinearUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LinearUserCreateOrConnectWithoutAssigned_IssuesInput>;
  create?: InputMaybe<LinearUserCreateWithoutAssigned_IssuesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LinearUserUpdateWithoutAssigned_IssuesInput>;
  upsert?: InputMaybe<LinearUserUpsertWithoutAssigned_IssuesInput>;
};

export type LinearUserUpdateOneWithoutCreated_IssuesNestedInput = {
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
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  active_token?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  created_issues?: InputMaybe<LinearIssueUpdateManyWithoutCreatorNestedInput>;
  displayName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutLinear_UsersNestedInput>;
};

export type LinearUserUpdateWithoutCreated_IssuesInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  active_token?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  assigned_issues?: InputMaybe<LinearIssueUpdateManyWithoutAssigneeNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  displayName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutLinear_UsersNestedInput>;
};

export type LinearUserUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  active_token?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  assigned_issues?: InputMaybe<LinearIssueUpdateManyWithoutAssigneeNestedInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  created_issues?: InputMaybe<LinearIssueUpdateManyWithoutCreatorNestedInput>;
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
  access_token?: InputMaybe<StringNullableFilter>;
  active?: InputMaybe<BoolFilter>;
  active_token?: InputMaybe<BoolNullableFilter>;
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

export type ListActivityTypesByUserInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  createGuildUserCustom: GuildUser;
  createManyActivityType: AffectedRowsOutput;
  createManyAttestation: AffectedRowsOutput;
  createManyAttestationConfidence: AffectedRowsOutput;
  createManyAttestationStatus: AffectedRowsOutput;
  createManyCategoryActivity: AffectedRowsOutput;
  createManyCategoryActivityType: AffectedRowsOutput;
  createManyChain: AffectedRowsOutput;
  createManyChainType: AffectedRowsOutput;
  createManyContribution: AffectedRowsOutput;
  createManyContributionStatus: AffectedRowsOutput;
  createManyDiscordUser: AffectedRowsOutput;
  createManyGuild: AffectedRowsOutput;
  createManyGuildActivityType: AffectedRowsOutput;
  createManyGuildContribution: AffectedRowsOutput;
  createManyGuildImport: AffectedRowsOutput;
  createManyGuildImportStatus: AffectedRowsOutput;
  createManyGuildMembershipStatus: AffectedRowsOutput;
  createManyGuildUser: AffectedRowsOutput;
  createManyIntegrationType: AffectedRowsOutput;
  createManyJobRun: AffectedRowsOutput;
  createManyLinearCycle: AffectedRowsOutput;
  createManyLinearIssue: AffectedRowsOutput;
  createManyLinearProject: AffectedRowsOutput;
  createManyLinearTeam: AffectedRowsOutput;
  createManyLinearUser: AffectedRowsOutput;
  createManyPartner: AffectedRowsOutput;
  createManyTwitterAccount: AffectedRowsOutput;
  createManyTwitterTweet: AffectedRowsOutput;
  createManyTwitterTweetContribution: AffectedRowsOutput;
  createManyTwitterUser: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserActivity: AffectedRowsOutput;
  createOnChainUserContribution: Contribution;
  createOneActivityType: ActivityType;
  createOneAttestation: Attestation;
  createOneAttestationConfidence: AttestationConfidence;
  createOneAttestationStatus: AttestationStatus;
  createOneCategoryActivity: CategoryActivity;
  createOneCategoryActivityType: CategoryActivityType;
  createOneChain: Chain;
  createOneChainType: ChainType;
  createOneContribution: Contribution;
  createOneContributionStatus: ContributionStatus;
  createOneDiscordUser: DiscordUser;
  createOneGuild: Guild;
  createOneGuildActivityType: GuildActivityType;
  createOneGuildContribution: GuildContribution;
  createOneGuildImport: GuildImport;
  createOneGuildImportStatus: GuildImportStatus;
  createOneGuildMembershipStatus: GuildMembershipStatus;
  createOneGuildUser: GuildUser;
  createOneIntegrationType: IntegrationType;
  createOneJobRun: JobRun;
  createOneLinearCycle: LinearCycle;
  createOneLinearIssue: LinearIssue;
  createOneLinearProject: LinearProject;
  createOneLinearTeam: LinearTeam;
  createOneLinearUser: LinearUser;
  createOnePartner: Partner;
  createOneTwitterAccount: TwitterAccount;
  createOneTwitterTweet: TwitterTweet;
  createOneTwitterTweetContribution: TwitterTweetContribution;
  createOneTwitterUser: TwitterUser;
  createOneUser: User;
  createOneUserActivity: UserActivity;
  createUserAttestation: Attestation;
  createUserContribution: Contribution;
  createUserCustom: User;
  createUserOnChainAttestation: Attestation;
  deleteManyActivityType: AffectedRowsOutput;
  deleteManyAttestation: AffectedRowsOutput;
  deleteManyAttestationConfidence: AffectedRowsOutput;
  deleteManyAttestationStatus: AffectedRowsOutput;
  deleteManyCategoryActivity: AffectedRowsOutput;
  deleteManyCategoryActivityType: AffectedRowsOutput;
  deleteManyChain: AffectedRowsOutput;
  deleteManyChainType: AffectedRowsOutput;
  deleteManyContribution: AffectedRowsOutput;
  deleteManyContributionStatus: AffectedRowsOutput;
  deleteManyDiscordUser: AffectedRowsOutput;
  deleteManyGuild: AffectedRowsOutput;
  deleteManyGuildActivityType: AffectedRowsOutput;
  deleteManyGuildContribution: AffectedRowsOutput;
  deleteManyGuildImport: AffectedRowsOutput;
  deleteManyGuildImportStatus: AffectedRowsOutput;
  deleteManyGuildMembershipStatus: AffectedRowsOutput;
  deleteManyGuildUser: AffectedRowsOutput;
  deleteManyIntegrationType: AffectedRowsOutput;
  deleteManyJobRun: AffectedRowsOutput;
  deleteManyLinearCycle: AffectedRowsOutput;
  deleteManyLinearIssue: AffectedRowsOutput;
  deleteManyLinearProject: AffectedRowsOutput;
  deleteManyLinearTeam: AffectedRowsOutput;
  deleteManyLinearUser: AffectedRowsOutput;
  deleteManyPartner: AffectedRowsOutput;
  deleteManyTwitterAccount: AffectedRowsOutput;
  deleteManyTwitterTweet: AffectedRowsOutput;
  deleteManyTwitterTweetContribution: AffectedRowsOutput;
  deleteManyTwitterUser: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserActivity: AffectedRowsOutput;
  deleteOneActivityType?: Maybe<ActivityType>;
  deleteOneAttestation?: Maybe<Attestation>;
  deleteOneAttestationConfidence?: Maybe<AttestationConfidence>;
  deleteOneAttestationStatus?: Maybe<AttestationStatus>;
  deleteOneCategoryActivity?: Maybe<CategoryActivity>;
  deleteOneCategoryActivityType?: Maybe<CategoryActivityType>;
  deleteOneChain?: Maybe<Chain>;
  deleteOneChainType?: Maybe<ChainType>;
  deleteOneContribution?: Maybe<Contribution>;
  deleteOneContributionStatus?: Maybe<ContributionStatus>;
  deleteOneDiscordUser?: Maybe<DiscordUser>;
  deleteOneGuild?: Maybe<Guild>;
  deleteOneGuildActivityType?: Maybe<GuildActivityType>;
  deleteOneGuildContribution?: Maybe<GuildContribution>;
  deleteOneGuildImport?: Maybe<GuildImport>;
  deleteOneGuildImportStatus?: Maybe<GuildImportStatus>;
  deleteOneGuildMembershipStatus?: Maybe<GuildMembershipStatus>;
  deleteOneGuildUser?: Maybe<GuildUser>;
  deleteOneIntegrationType?: Maybe<IntegrationType>;
  deleteOneJobRun?: Maybe<JobRun>;
  deleteOneLinearCycle?: Maybe<LinearCycle>;
  deleteOneLinearIssue?: Maybe<LinearIssue>;
  deleteOneLinearProject?: Maybe<LinearProject>;
  deleteOneLinearTeam?: Maybe<LinearTeam>;
  deleteOneLinearUser?: Maybe<LinearUser>;
  deleteOnePartner?: Maybe<Partner>;
  deleteOneTwitterAccount?: Maybe<TwitterAccount>;
  deleteOneTwitterTweet?: Maybe<TwitterTweet>;
  deleteOneTwitterTweetContribution?: Maybe<TwitterTweetContribution>;
  deleteOneTwitterUser?: Maybe<TwitterUser>;
  deleteOneUser?: Maybe<User>;
  deleteOneUserActivity?: Maybe<UserActivity>;
  deleteUserContribution: Contribution;
  getOrCreateActivityType: ActivityType;
  updateGuildCustom: Guild;
  updateGuildUserCustom: GuildUser;
  updateManyActivityType: AffectedRowsOutput;
  updateManyAttestation: AffectedRowsOutput;
  updateManyAttestationConfidence: AffectedRowsOutput;
  updateManyAttestationStatus: AffectedRowsOutput;
  updateManyCategoryActivity: AffectedRowsOutput;
  updateManyCategoryActivityType: AffectedRowsOutput;
  updateManyChain: AffectedRowsOutput;
  updateManyChainType: AffectedRowsOutput;
  updateManyContribution: AffectedRowsOutput;
  updateManyContributionStatus: AffectedRowsOutput;
  updateManyDiscordUser: AffectedRowsOutput;
  updateManyGuild: AffectedRowsOutput;
  updateManyGuildActivityType: AffectedRowsOutput;
  updateManyGuildContribution: AffectedRowsOutput;
  updateManyGuildImport: AffectedRowsOutput;
  updateManyGuildImportStatus: AffectedRowsOutput;
  updateManyGuildMembershipStatus: AffectedRowsOutput;
  updateManyGuildUser: AffectedRowsOutput;
  updateManyIntegrationType: AffectedRowsOutput;
  updateManyJobRun: AffectedRowsOutput;
  updateManyLinearCycle: AffectedRowsOutput;
  updateManyLinearIssue: AffectedRowsOutput;
  updateManyLinearProject: AffectedRowsOutput;
  updateManyLinearTeam: AffectedRowsOutput;
  updateManyLinearUser: AffectedRowsOutput;
  updateManyPartner: AffectedRowsOutput;
  updateManyTwitterAccount: AffectedRowsOutput;
  updateManyTwitterTweet: AffectedRowsOutput;
  updateManyTwitterTweetContribution: AffectedRowsOutput;
  updateManyTwitterUser: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserActivity: AffectedRowsOutput;
  updateOneActivityType?: Maybe<ActivityType>;
  updateOneAttestation?: Maybe<Attestation>;
  updateOneAttestationConfidence?: Maybe<AttestationConfidence>;
  updateOneAttestationStatus?: Maybe<AttestationStatus>;
  updateOneCategoryActivity?: Maybe<CategoryActivity>;
  updateOneCategoryActivityType?: Maybe<CategoryActivityType>;
  updateOneChain?: Maybe<Chain>;
  updateOneChainType?: Maybe<ChainType>;
  updateOneContribution?: Maybe<Contribution>;
  updateOneContributionStatus?: Maybe<ContributionStatus>;
  updateOneDiscordUser?: Maybe<DiscordUser>;
  updateOneGuild?: Maybe<Guild>;
  updateOneGuildActivityType?: Maybe<GuildActivityType>;
  updateOneGuildContribution?: Maybe<GuildContribution>;
  updateOneGuildImport?: Maybe<GuildImport>;
  updateOneGuildImportStatus?: Maybe<GuildImportStatus>;
  updateOneGuildMembershipStatus?: Maybe<GuildMembershipStatus>;
  updateOneGuildUser?: Maybe<GuildUser>;
  updateOneIntegrationType?: Maybe<IntegrationType>;
  updateOneJobRun?: Maybe<JobRun>;
  updateOneLinearCycle?: Maybe<LinearCycle>;
  updateOneLinearIssue?: Maybe<LinearIssue>;
  updateOneLinearProject?: Maybe<LinearProject>;
  updateOneLinearTeam?: Maybe<LinearTeam>;
  updateOneLinearUser?: Maybe<LinearUser>;
  updateOnePartner?: Maybe<Partner>;
  updateOneTwitterAccount?: Maybe<TwitterAccount>;
  updateOneTwitterTweet?: Maybe<TwitterTweet>;
  updateOneTwitterTweetContribution?: Maybe<TwitterTweetContribution>;
  updateOneTwitterUser?: Maybe<TwitterUser>;
  updateOneUser?: Maybe<User>;
  updateOneUserActivity?: Maybe<UserActivity>;
  updateUserContribution: Contribution;
  updateUserCustom: User;
  updateUserOnChainAttestation: Attestation;
  updateUserOnChainContribution: Contribution;
  upsertOneActivityType: ActivityType;
  upsertOneAttestation: Attestation;
  upsertOneAttestationConfidence: AttestationConfidence;
  upsertOneAttestationStatus: AttestationStatus;
  upsertOneCategoryActivity: CategoryActivity;
  upsertOneCategoryActivityType: CategoryActivityType;
  upsertOneChain: Chain;
  upsertOneChainType: ChainType;
  upsertOneContribution: Contribution;
  upsertOneContributionStatus: ContributionStatus;
  upsertOneDiscordUser: DiscordUser;
  upsertOneGuild: Guild;
  upsertOneGuildActivityType: GuildActivityType;
  upsertOneGuildContribution: GuildContribution;
  upsertOneGuildImport: GuildImport;
  upsertOneGuildImportStatus: GuildImportStatus;
  upsertOneGuildMembershipStatus: GuildMembershipStatus;
  upsertOneGuildUser: GuildUser;
  upsertOneIntegrationType: IntegrationType;
  upsertOneJobRun: JobRun;
  upsertOneLinearCycle: LinearCycle;
  upsertOneLinearIssue: LinearIssue;
  upsertOneLinearProject: LinearProject;
  upsertOneLinearTeam: LinearTeam;
  upsertOneLinearUser: LinearUser;
  upsertOnePartner: Partner;
  upsertOneTwitterAccount: TwitterAccount;
  upsertOneTwitterTweet: TwitterTweet;
  upsertOneTwitterTweetContribution: TwitterTweetContribution;
  upsertOneTwitterUser: TwitterUser;
  upsertOneUser: User;
  upsertOneUserActivity: UserActivity;
};


export type MutationCreateGuildUserCustomArgs = {
  data: GuildUserCreateCustomInput;
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


export type MutationCreateManyAttestationStatusArgs = {
  data: Array<AttestationStatusCreateManyInput>;
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


export type MutationCreateManyChainArgs = {
  data: Array<ChainCreateManyInput>;
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


export type MutationCreateManyGuildImportArgs = {
  data: Array<GuildImportCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyGuildImportStatusArgs = {
  data: Array<GuildImportStatusCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyGuildMembershipStatusArgs = {
  data: Array<GuildMembershipStatusCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyGuildUserArgs = {
  data: Array<GuildUserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyIntegrationTypeArgs = {
  data: Array<IntegrationTypeCreateManyInput>;
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


export type MutationCreateManyTwitterTweetContributionArgs = {
  data: Array<TwitterTweetContributionCreateManyInput>;
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


export type MutationCreateOneActivityTypeArgs = {
  data: ActivityTypeCreateInput;
};


export type MutationCreateOneAttestationArgs = {
  data: AttestationCreateInput;
};


export type MutationCreateOneAttestationConfidenceArgs = {
  data: AttestationConfidenceCreateInput;
};


export type MutationCreateOneAttestationStatusArgs = {
  data: AttestationStatusCreateInput;
};


export type MutationCreateOneCategoryActivityArgs = {
  data: CategoryActivityCreateInput;
};


export type MutationCreateOneCategoryActivityTypeArgs = {
  data: CategoryActivityTypeCreateInput;
};


export type MutationCreateOneChainArgs = {
  data: ChainCreateInput;
};


export type MutationCreateOneChainTypeArgs = {
  data: ChainTypeCreateInput;
};


export type MutationCreateOneContributionArgs = {
  data: ContributionCreateInput;
};


export type MutationCreateOneContributionStatusArgs = {
  data: ContributionStatusCreateInput;
};


export type MutationCreateOneDiscordUserArgs = {
  data: DiscordUserCreateInput;
};


export type MutationCreateOneGuildArgs = {
  data: GuildCreateInput;
};


export type MutationCreateOneGuildActivityTypeArgs = {
  data: GuildActivityTypeCreateInput;
};


export type MutationCreateOneGuildContributionArgs = {
  data: GuildContributionCreateInput;
};


export type MutationCreateOneGuildImportArgs = {
  data: GuildImportCreateInput;
};


export type MutationCreateOneGuildImportStatusArgs = {
  data: GuildImportStatusCreateInput;
};


export type MutationCreateOneGuildMembershipStatusArgs = {
  data: GuildMembershipStatusCreateInput;
};


export type MutationCreateOneGuildUserArgs = {
  data: GuildUserCreateInput;
};


export type MutationCreateOneIntegrationTypeArgs = {
  data: IntegrationTypeCreateInput;
};


export type MutationCreateOneJobRunArgs = {
  data: JobRunCreateInput;
};


export type MutationCreateOneLinearCycleArgs = {
  data: LinearCycleCreateInput;
};


export type MutationCreateOneLinearIssueArgs = {
  data: LinearIssueCreateInput;
};


export type MutationCreateOneLinearProjectArgs = {
  data: LinearProjectCreateInput;
};


export type MutationCreateOneLinearTeamArgs = {
  data: LinearTeamCreateInput;
};


export type MutationCreateOneLinearUserArgs = {
  data: LinearUserCreateInput;
};


export type MutationCreateOnePartnerArgs = {
  data: PartnerCreateInput;
};


export type MutationCreateOneTwitterAccountArgs = {
  data: TwitterAccountCreateInput;
};


export type MutationCreateOneTwitterTweetArgs = {
  data: TwitterTweetCreateInput;
};


export type MutationCreateOneTwitterTweetContributionArgs = {
  data: TwitterTweetContributionCreateInput;
};


export type MutationCreateOneTwitterUserArgs = {
  data: TwitterUserCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneUserActivityArgs = {
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


export type MutationDeleteManyActivityTypeArgs = {
  where?: InputMaybe<ActivityTypeWhereInput>;
};


export type MutationDeleteManyAttestationArgs = {
  where?: InputMaybe<AttestationWhereInput>;
};


export type MutationDeleteManyAttestationConfidenceArgs = {
  where?: InputMaybe<AttestationConfidenceWhereInput>;
};


export type MutationDeleteManyAttestationStatusArgs = {
  where?: InputMaybe<AttestationStatusWhereInput>;
};


export type MutationDeleteManyCategoryActivityArgs = {
  where?: InputMaybe<CategoryActivityWhereInput>;
};


export type MutationDeleteManyCategoryActivityTypeArgs = {
  where?: InputMaybe<CategoryActivityTypeWhereInput>;
};


export type MutationDeleteManyChainArgs = {
  where?: InputMaybe<ChainWhereInput>;
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


export type MutationDeleteManyGuildImportArgs = {
  where?: InputMaybe<GuildImportWhereInput>;
};


export type MutationDeleteManyGuildImportStatusArgs = {
  where?: InputMaybe<GuildImportStatusWhereInput>;
};


export type MutationDeleteManyGuildMembershipStatusArgs = {
  where?: InputMaybe<GuildMembershipStatusWhereInput>;
};


export type MutationDeleteManyGuildUserArgs = {
  where?: InputMaybe<GuildUserWhereInput>;
};


export type MutationDeleteManyIntegrationTypeArgs = {
  where?: InputMaybe<IntegrationTypeWhereInput>;
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


export type MutationDeleteManyTwitterTweetContributionArgs = {
  where?: InputMaybe<TwitterTweetContributionWhereInput>;
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


export type MutationDeleteOneActivityTypeArgs = {
  where: ActivityTypeWhereUniqueInput;
};


export type MutationDeleteOneAttestationArgs = {
  where: AttestationWhereUniqueInput;
};


export type MutationDeleteOneAttestationConfidenceArgs = {
  where: AttestationConfidenceWhereUniqueInput;
};


export type MutationDeleteOneAttestationStatusArgs = {
  where: AttestationStatusWhereUniqueInput;
};


export type MutationDeleteOneCategoryActivityArgs = {
  where: CategoryActivityWhereUniqueInput;
};


export type MutationDeleteOneCategoryActivityTypeArgs = {
  where: CategoryActivityTypeWhereUniqueInput;
};


export type MutationDeleteOneChainArgs = {
  where: ChainWhereUniqueInput;
};


export type MutationDeleteOneChainTypeArgs = {
  where: ChainTypeWhereUniqueInput;
};


export type MutationDeleteOneContributionArgs = {
  where: ContributionWhereUniqueInput;
};


export type MutationDeleteOneContributionStatusArgs = {
  where: ContributionStatusWhereUniqueInput;
};


export type MutationDeleteOneDiscordUserArgs = {
  where: DiscordUserWhereUniqueInput;
};


export type MutationDeleteOneGuildArgs = {
  where: GuildWhereUniqueInput;
};


export type MutationDeleteOneGuildActivityTypeArgs = {
  where: GuildActivityTypeWhereUniqueInput;
};


export type MutationDeleteOneGuildContributionArgs = {
  where: GuildContributionWhereUniqueInput;
};


export type MutationDeleteOneGuildImportArgs = {
  where: GuildImportWhereUniqueInput;
};


export type MutationDeleteOneGuildImportStatusArgs = {
  where: GuildImportStatusWhereUniqueInput;
};


export type MutationDeleteOneGuildMembershipStatusArgs = {
  where: GuildMembershipStatusWhereUniqueInput;
};


export type MutationDeleteOneGuildUserArgs = {
  where: GuildUserWhereUniqueInput;
};


export type MutationDeleteOneIntegrationTypeArgs = {
  where: IntegrationTypeWhereUniqueInput;
};


export type MutationDeleteOneJobRunArgs = {
  where: JobRunWhereUniqueInput;
};


export type MutationDeleteOneLinearCycleArgs = {
  where: LinearCycleWhereUniqueInput;
};


export type MutationDeleteOneLinearIssueArgs = {
  where: LinearIssueWhereUniqueInput;
};


export type MutationDeleteOneLinearProjectArgs = {
  where: LinearProjectWhereUniqueInput;
};


export type MutationDeleteOneLinearTeamArgs = {
  where: LinearTeamWhereUniqueInput;
};


export type MutationDeleteOneLinearUserArgs = {
  where: LinearUserWhereUniqueInput;
};


export type MutationDeleteOnePartnerArgs = {
  where: PartnerWhereUniqueInput;
};


export type MutationDeleteOneTwitterAccountArgs = {
  where: TwitterAccountWhereUniqueInput;
};


export type MutationDeleteOneTwitterTweetArgs = {
  where: TwitterTweetWhereUniqueInput;
};


export type MutationDeleteOneTwitterTweetContributionArgs = {
  where: TwitterTweetContributionWhereUniqueInput;
};


export type MutationDeleteOneTwitterUserArgs = {
  where: TwitterUserWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneUserActivityArgs = {
  where: UserActivityWhereUniqueInput;
};


export type MutationDeleteUserContributionArgs = {
  where: UserContributionDeleteInput;
};


export type MutationGetOrCreateActivityTypeArgs = {
  data: GetOrCreateActivityTypeInput;
};


export type MutationUpdateGuildCustomArgs = {
  data: GuildUpdateCustomInput;
  where: GuildUpdateCustomWhereInput;
};


export type MutationUpdateGuildUserCustomArgs = {
  data: GuildUserUpdateCustomInput;
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


export type MutationUpdateManyAttestationStatusArgs = {
  data: AttestationStatusUpdateManyMutationInput;
  where?: InputMaybe<AttestationStatusWhereInput>;
};


export type MutationUpdateManyCategoryActivityArgs = {
  data: CategoryActivityUpdateManyMutationInput;
  where?: InputMaybe<CategoryActivityWhereInput>;
};


export type MutationUpdateManyCategoryActivityTypeArgs = {
  data: CategoryActivityTypeUpdateManyMutationInput;
  where?: InputMaybe<CategoryActivityTypeWhereInput>;
};


export type MutationUpdateManyChainArgs = {
  data: ChainUpdateManyMutationInput;
  where?: InputMaybe<ChainWhereInput>;
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


export type MutationUpdateManyGuildImportArgs = {
  data: GuildImportUpdateManyMutationInput;
  where?: InputMaybe<GuildImportWhereInput>;
};


export type MutationUpdateManyGuildImportStatusArgs = {
  data: GuildImportStatusUpdateManyMutationInput;
  where?: InputMaybe<GuildImportStatusWhereInput>;
};


export type MutationUpdateManyGuildMembershipStatusArgs = {
  data: GuildMembershipStatusUpdateManyMutationInput;
  where?: InputMaybe<GuildMembershipStatusWhereInput>;
};


export type MutationUpdateManyGuildUserArgs = {
  data: GuildUserUpdateManyMutationInput;
  where?: InputMaybe<GuildUserWhereInput>;
};


export type MutationUpdateManyIntegrationTypeArgs = {
  data: IntegrationTypeUpdateManyMutationInput;
  where?: InputMaybe<IntegrationTypeWhereInput>;
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


export type MutationUpdateManyTwitterTweetContributionArgs = {
  data: TwitterTweetContributionUpdateManyMutationInput;
  where?: InputMaybe<TwitterTweetContributionWhereInput>;
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


export type MutationUpdateOneActivityTypeArgs = {
  data: ActivityTypeUpdateInput;
  where: ActivityTypeWhereUniqueInput;
};


export type MutationUpdateOneAttestationArgs = {
  data: AttestationUpdateInput;
  where: AttestationWhereUniqueInput;
};


export type MutationUpdateOneAttestationConfidenceArgs = {
  data: AttestationConfidenceUpdateInput;
  where: AttestationConfidenceWhereUniqueInput;
};


export type MutationUpdateOneAttestationStatusArgs = {
  data: AttestationStatusUpdateInput;
  where: AttestationStatusWhereUniqueInput;
};


export type MutationUpdateOneCategoryActivityArgs = {
  data: CategoryActivityUpdateInput;
  where: CategoryActivityWhereUniqueInput;
};


export type MutationUpdateOneCategoryActivityTypeArgs = {
  data: CategoryActivityTypeUpdateInput;
  where: CategoryActivityTypeWhereUniqueInput;
};


export type MutationUpdateOneChainArgs = {
  data: ChainUpdateInput;
  where: ChainWhereUniqueInput;
};


export type MutationUpdateOneChainTypeArgs = {
  data: ChainTypeUpdateInput;
  where: ChainTypeWhereUniqueInput;
};


export type MutationUpdateOneContributionArgs = {
  data: ContributionUpdateInput;
  where: ContributionWhereUniqueInput;
};


export type MutationUpdateOneContributionStatusArgs = {
  data: ContributionStatusUpdateInput;
  where: ContributionStatusWhereUniqueInput;
};


export type MutationUpdateOneDiscordUserArgs = {
  data: DiscordUserUpdateInput;
  where: DiscordUserWhereUniqueInput;
};


export type MutationUpdateOneGuildArgs = {
  data: GuildUpdateInput;
  where: GuildWhereUniqueInput;
};


export type MutationUpdateOneGuildActivityTypeArgs = {
  data: GuildActivityTypeUpdateInput;
  where: GuildActivityTypeWhereUniqueInput;
};


export type MutationUpdateOneGuildContributionArgs = {
  data: GuildContributionUpdateInput;
  where: GuildContributionWhereUniqueInput;
};


export type MutationUpdateOneGuildImportArgs = {
  data: GuildImportUpdateInput;
  where: GuildImportWhereUniqueInput;
};


export type MutationUpdateOneGuildImportStatusArgs = {
  data: GuildImportStatusUpdateInput;
  where: GuildImportStatusWhereUniqueInput;
};


export type MutationUpdateOneGuildMembershipStatusArgs = {
  data: GuildMembershipStatusUpdateInput;
  where: GuildMembershipStatusWhereUniqueInput;
};


export type MutationUpdateOneGuildUserArgs = {
  data: GuildUserUpdateInput;
  where: GuildUserWhereUniqueInput;
};


export type MutationUpdateOneIntegrationTypeArgs = {
  data: IntegrationTypeUpdateInput;
  where: IntegrationTypeWhereUniqueInput;
};


export type MutationUpdateOneJobRunArgs = {
  data: JobRunUpdateInput;
  where: JobRunWhereUniqueInput;
};


export type MutationUpdateOneLinearCycleArgs = {
  data: LinearCycleUpdateInput;
  where: LinearCycleWhereUniqueInput;
};


export type MutationUpdateOneLinearIssueArgs = {
  data: LinearIssueUpdateInput;
  where: LinearIssueWhereUniqueInput;
};


export type MutationUpdateOneLinearProjectArgs = {
  data: LinearProjectUpdateInput;
  where: LinearProjectWhereUniqueInput;
};


export type MutationUpdateOneLinearTeamArgs = {
  data: LinearTeamUpdateInput;
  where: LinearTeamWhereUniqueInput;
};


export type MutationUpdateOneLinearUserArgs = {
  data: LinearUserUpdateInput;
  where: LinearUserWhereUniqueInput;
};


export type MutationUpdateOnePartnerArgs = {
  data: PartnerUpdateInput;
  where: PartnerWhereUniqueInput;
};


export type MutationUpdateOneTwitterAccountArgs = {
  data: TwitterAccountUpdateInput;
  where: TwitterAccountWhereUniqueInput;
};


export type MutationUpdateOneTwitterTweetArgs = {
  data: TwitterTweetUpdateInput;
  where: TwitterTweetWhereUniqueInput;
};


export type MutationUpdateOneTwitterTweetContributionArgs = {
  data: TwitterTweetContributionUpdateInput;
  where: TwitterTweetContributionWhereUniqueInput;
};


export type MutationUpdateOneTwitterUserArgs = {
  data: TwitterUserUpdateInput;
  where: TwitterUserWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneUserActivityArgs = {
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
  data: AttestationUpdateManyMutationInput;
  id: Scalars['Float'];
  status?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserOnChainContributionArgs = {
  chainId?: InputMaybe<Scalars['Float']>;
  data: ContributionUpdateManyMutationInput;
  id: Scalars['Float'];
  status?: InputMaybe<Scalars['String']>;
};


export type MutationUpsertOneActivityTypeArgs = {
  create: ActivityTypeCreateInput;
  update: ActivityTypeUpdateInput;
  where: ActivityTypeWhereUniqueInput;
};


export type MutationUpsertOneAttestationArgs = {
  create: AttestationCreateInput;
  update: AttestationUpdateInput;
  where: AttestationWhereUniqueInput;
};


export type MutationUpsertOneAttestationConfidenceArgs = {
  create: AttestationConfidenceCreateInput;
  update: AttestationConfidenceUpdateInput;
  where: AttestationConfidenceWhereUniqueInput;
};


export type MutationUpsertOneAttestationStatusArgs = {
  create: AttestationStatusCreateInput;
  update: AttestationStatusUpdateInput;
  where: AttestationStatusWhereUniqueInput;
};


export type MutationUpsertOneCategoryActivityArgs = {
  create: CategoryActivityCreateInput;
  update: CategoryActivityUpdateInput;
  where: CategoryActivityWhereUniqueInput;
};


export type MutationUpsertOneCategoryActivityTypeArgs = {
  create: CategoryActivityTypeCreateInput;
  update: CategoryActivityTypeUpdateInput;
  where: CategoryActivityTypeWhereUniqueInput;
};


export type MutationUpsertOneChainArgs = {
  create: ChainCreateInput;
  update: ChainUpdateInput;
  where: ChainWhereUniqueInput;
};


export type MutationUpsertOneChainTypeArgs = {
  create: ChainTypeCreateInput;
  update: ChainTypeUpdateInput;
  where: ChainTypeWhereUniqueInput;
};


export type MutationUpsertOneContributionArgs = {
  create: ContributionCreateInput;
  update: ContributionUpdateInput;
  where: ContributionWhereUniqueInput;
};


export type MutationUpsertOneContributionStatusArgs = {
  create: ContributionStatusCreateInput;
  update: ContributionStatusUpdateInput;
  where: ContributionStatusWhereUniqueInput;
};


export type MutationUpsertOneDiscordUserArgs = {
  create: DiscordUserCreateInput;
  update: DiscordUserUpdateInput;
  where: DiscordUserWhereUniqueInput;
};


export type MutationUpsertOneGuildArgs = {
  create: GuildCreateInput;
  update: GuildUpdateInput;
  where: GuildWhereUniqueInput;
};


export type MutationUpsertOneGuildActivityTypeArgs = {
  create: GuildActivityTypeCreateInput;
  update: GuildActivityTypeUpdateInput;
  where: GuildActivityTypeWhereUniqueInput;
};


export type MutationUpsertOneGuildContributionArgs = {
  create: GuildContributionCreateInput;
  update: GuildContributionUpdateInput;
  where: GuildContributionWhereUniqueInput;
};


export type MutationUpsertOneGuildImportArgs = {
  create: GuildImportCreateInput;
  update: GuildImportUpdateInput;
  where: GuildImportWhereUniqueInput;
};


export type MutationUpsertOneGuildImportStatusArgs = {
  create: GuildImportStatusCreateInput;
  update: GuildImportStatusUpdateInput;
  where: GuildImportStatusWhereUniqueInput;
};


export type MutationUpsertOneGuildMembershipStatusArgs = {
  create: GuildMembershipStatusCreateInput;
  update: GuildMembershipStatusUpdateInput;
  where: GuildMembershipStatusWhereUniqueInput;
};


export type MutationUpsertOneGuildUserArgs = {
  create: GuildUserCreateInput;
  update: GuildUserUpdateInput;
  where: GuildUserWhereUniqueInput;
};


export type MutationUpsertOneIntegrationTypeArgs = {
  create: IntegrationTypeCreateInput;
  update: IntegrationTypeUpdateInput;
  where: IntegrationTypeWhereUniqueInput;
};


export type MutationUpsertOneJobRunArgs = {
  create: JobRunCreateInput;
  update: JobRunUpdateInput;
  where: JobRunWhereUniqueInput;
};


export type MutationUpsertOneLinearCycleArgs = {
  create: LinearCycleCreateInput;
  update: LinearCycleUpdateInput;
  where: LinearCycleWhereUniqueInput;
};


export type MutationUpsertOneLinearIssueArgs = {
  create: LinearIssueCreateInput;
  update: LinearIssueUpdateInput;
  where: LinearIssueWhereUniqueInput;
};


export type MutationUpsertOneLinearProjectArgs = {
  create: LinearProjectCreateInput;
  update: LinearProjectUpdateInput;
  where: LinearProjectWhereUniqueInput;
};


export type MutationUpsertOneLinearTeamArgs = {
  create: LinearTeamCreateInput;
  update: LinearTeamUpdateInput;
  where: LinearTeamWhereUniqueInput;
};


export type MutationUpsertOneLinearUserArgs = {
  create: LinearUserCreateInput;
  update: LinearUserUpdateInput;
  where: LinearUserWhereUniqueInput;
};


export type MutationUpsertOnePartnerArgs = {
  create: PartnerCreateInput;
  update: PartnerUpdateInput;
  where: PartnerWhereUniqueInput;
};


export type MutationUpsertOneTwitterAccountArgs = {
  create: TwitterAccountCreateInput;
  update: TwitterAccountUpdateInput;
  where: TwitterAccountWhereUniqueInput;
};


export type MutationUpsertOneTwitterTweetArgs = {
  create: TwitterTweetCreateInput;
  update: TwitterTweetUpdateInput;
  where: TwitterTweetWhereUniqueInput;
};


export type MutationUpsertOneTwitterTweetContributionArgs = {
  create: TwitterTweetContributionCreateInput;
  update: TwitterTweetContributionUpdateInput;
  where: TwitterTweetContributionWhereUniqueInput;
};


export type MutationUpsertOneTwitterUserArgs = {
  create: TwitterUserCreateInput;
  update: TwitterUserUpdateInput;
  where: TwitterUserWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserActivityArgs = {
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

export type NestedEnumGuildStatusFilter = {
  equals?: InputMaybe<GuildStatus>;
  in?: InputMaybe<Array<GuildStatus>>;
  not?: InputMaybe<NestedEnumGuildStatusFilter>;
  notIn?: InputMaybe<Array<GuildStatus>>;
};

export type NestedEnumGuildStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumGuildStatusFilter>;
  _min?: InputMaybe<NestedEnumGuildStatusFilter>;
  equals?: InputMaybe<GuildStatus>;
  in?: InputMaybe<Array<GuildStatus>>;
  not?: InputMaybe<NestedEnumGuildStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<GuildStatus>>;
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
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutPartnersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionPartnersNestedInput>;
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

export type PartnerUpdateManyWithoutContributionNestedInput = {
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

export type PartnerUpdateManyWithoutUserNestedInput = {
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
  user?: InputMaybe<UserUpdateOneRequiredWithoutContributionPartnersNestedInput>;
};

export type PartnerUpdateWithoutUserInput = {
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutPartnersNestedInput>;
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
  aggregateAttestationStatus: AggregateAttestationStatus;
  aggregateCategoryActivity: AggregateCategoryActivity;
  aggregateCategoryActivityType: AggregateCategoryActivityType;
  aggregateChain: AggregateChain;
  aggregateChainType: AggregateChainType;
  aggregateContribution: AggregateContribution;
  aggregateContributionStatus: AggregateContributionStatus;
  aggregateDiscordUser: AggregateDiscordUser;
  aggregateGuild: AggregateGuild;
  aggregateGuildActivityType: AggregateGuildActivityType;
  aggregateGuildContribution: AggregateGuildContribution;
  aggregateGuildImport: AggregateGuildImport;
  aggregateGuildImportStatus: AggregateGuildImportStatus;
  aggregateGuildMembershipStatus: AggregateGuildMembershipStatus;
  aggregateGuildUser: AggregateGuildUser;
  aggregateIntegrationType: AggregateIntegrationType;
  aggregateJobRun: AggregateJobRun;
  aggregateLinearCycle: AggregateLinearCycle;
  aggregateLinearIssue: AggregateLinearIssue;
  aggregateLinearProject: AggregateLinearProject;
  aggregateLinearTeam: AggregateLinearTeam;
  aggregateLinearUser: AggregateLinearUser;
  aggregatePartner: AggregatePartner;
  aggregateTwitterAccount: AggregateTwitterAccount;
  aggregateTwitterTweet: AggregateTwitterTweet;
  aggregateTwitterTweetContribution: AggregateTwitterTweetContribution;
  aggregateTwitterUser: AggregateTwitterUser;
  aggregateUser: AggregateUser;
  aggregateUserActivity: AggregateUserActivity;
  attestation?: Maybe<Attestation>;
  attestationConfidence?: Maybe<AttestationConfidence>;
  attestationConfidences: Array<AttestationConfidence>;
  attestationStatus?: Maybe<AttestationStatus>;
  attestationStatuses: Array<AttestationStatus>;
  attestations: Array<Attestation>;
  categoryActivities: Array<CategoryActivity>;
  categoryActivity?: Maybe<CategoryActivity>;
  categoryActivityType?: Maybe<CategoryActivityType>;
  categoryActivityTypes: Array<CategoryActivityType>;
  chain?: Maybe<Chain>;
  chainType?: Maybe<ChainType>;
  chainTypes: Array<ChainType>;
  chains: Array<Chain>;
  contribution?: Maybe<Contribution>;
  contributionStatus?: Maybe<ContributionStatus>;
  contributionStatuses: Array<ContributionStatus>;
  contributions: Array<Contribution>;
  discordUser?: Maybe<DiscordUser>;
  discordUsers: Array<DiscordUser>;
  findFirstActivityType?: Maybe<ActivityType>;
  findFirstActivityTypeOrThrow?: Maybe<ActivityType>;
  findFirstAttestation?: Maybe<Attestation>;
  findFirstAttestationConfidence?: Maybe<AttestationConfidence>;
  findFirstAttestationConfidenceOrThrow?: Maybe<AttestationConfidence>;
  findFirstAttestationOrThrow?: Maybe<Attestation>;
  findFirstAttestationStatus?: Maybe<AttestationStatus>;
  findFirstAttestationStatusOrThrow?: Maybe<AttestationStatus>;
  findFirstCategoryActivity?: Maybe<CategoryActivity>;
  findFirstCategoryActivityOrThrow?: Maybe<CategoryActivity>;
  findFirstCategoryActivityType?: Maybe<CategoryActivityType>;
  findFirstCategoryActivityTypeOrThrow?: Maybe<CategoryActivityType>;
  findFirstChain?: Maybe<Chain>;
  findFirstChainOrThrow?: Maybe<Chain>;
  findFirstChainType?: Maybe<ChainType>;
  findFirstChainTypeOrThrow?: Maybe<ChainType>;
  findFirstContribution?: Maybe<Contribution>;
  findFirstContributionOrThrow?: Maybe<Contribution>;
  findFirstContributionStatus?: Maybe<ContributionStatus>;
  findFirstContributionStatusOrThrow?: Maybe<ContributionStatus>;
  findFirstDiscordUser?: Maybe<DiscordUser>;
  findFirstDiscordUserOrThrow?: Maybe<DiscordUser>;
  findFirstGuild?: Maybe<Guild>;
  findFirstGuildActivityType?: Maybe<GuildActivityType>;
  findFirstGuildActivityTypeOrThrow?: Maybe<GuildActivityType>;
  findFirstGuildContribution?: Maybe<GuildContribution>;
  findFirstGuildContributionOrThrow?: Maybe<GuildContribution>;
  findFirstGuildImport?: Maybe<GuildImport>;
  findFirstGuildImportOrThrow?: Maybe<GuildImport>;
  findFirstGuildImportStatus?: Maybe<GuildImportStatus>;
  findFirstGuildImportStatusOrThrow?: Maybe<GuildImportStatus>;
  findFirstGuildMembershipStatus?: Maybe<GuildMembershipStatus>;
  findFirstGuildMembershipStatusOrThrow?: Maybe<GuildMembershipStatus>;
  findFirstGuildOrThrow?: Maybe<Guild>;
  findFirstGuildUser?: Maybe<GuildUser>;
  findFirstGuildUserOrThrow?: Maybe<GuildUser>;
  findFirstIntegrationType?: Maybe<IntegrationType>;
  findFirstIntegrationTypeOrThrow?: Maybe<IntegrationType>;
  findFirstJobRun?: Maybe<JobRun>;
  findFirstJobRunOrThrow?: Maybe<JobRun>;
  findFirstLinearCycle?: Maybe<LinearCycle>;
  findFirstLinearCycleOrThrow?: Maybe<LinearCycle>;
  findFirstLinearIssue?: Maybe<LinearIssue>;
  findFirstLinearIssueOrThrow?: Maybe<LinearIssue>;
  findFirstLinearProject?: Maybe<LinearProject>;
  findFirstLinearProjectOrThrow?: Maybe<LinearProject>;
  findFirstLinearTeam?: Maybe<LinearTeam>;
  findFirstLinearTeamOrThrow?: Maybe<LinearTeam>;
  findFirstLinearUser?: Maybe<LinearUser>;
  findFirstLinearUserOrThrow?: Maybe<LinearUser>;
  findFirstPartner?: Maybe<Partner>;
  findFirstPartnerOrThrow?: Maybe<Partner>;
  findFirstTwitterAccount?: Maybe<TwitterAccount>;
  findFirstTwitterAccountOrThrow?: Maybe<TwitterAccount>;
  findFirstTwitterTweet?: Maybe<TwitterTweet>;
  findFirstTwitterTweetContribution?: Maybe<TwitterTweetContribution>;
  findFirstTwitterTweetContributionOrThrow?: Maybe<TwitterTweetContribution>;
  findFirstTwitterTweetOrThrow?: Maybe<TwitterTweet>;
  findFirstTwitterUser?: Maybe<TwitterUser>;
  findFirstTwitterUserOrThrow?: Maybe<TwitterUser>;
  findFirstUser?: Maybe<User>;
  findFirstUserActivity?: Maybe<UserActivity>;
  findFirstUserActivityOrThrow?: Maybe<UserActivity>;
  findFirstUserOrThrow?: Maybe<User>;
  getActiveGuildUsersAverage: Scalars['Float'];
  getActivityType?: Maybe<ActivityType>;
  getAttestation?: Maybe<Attestation>;
  getAttestationConfidence?: Maybe<AttestationConfidence>;
  getAttestationStatus?: Maybe<AttestationStatus>;
  getCategoryActivity?: Maybe<CategoryActivity>;
  getCategoryActivityType?: Maybe<CategoryActivityType>;
  getChain?: Maybe<Chain>;
  getChainType?: Maybe<ChainType>;
  getContribution?: Maybe<Contribution>;
  getContributionCountByActivityType: Array<ContributionCountByActivityType>;
  getContributionCountByDateForUserInRange: Array<ContributionCountByDate>;
  getContributionStatus?: Maybe<ContributionStatus>;
  getDaoContributionCount: Scalars['Int'];
  getDaoContributionCountByUser: Array<ContributionCountByUser>;
  getDiscordUser?: Maybe<DiscordUser>;
  getGuild?: Maybe<Guild>;
  getGuildActivityType?: Maybe<GuildActivityType>;
  getGuildContribution?: Maybe<GuildContribution>;
  getGuildImport?: Maybe<GuildImport>;
  getGuildImportStatus?: Maybe<GuildImportStatus>;
  getGuildMembershipStatus?: Maybe<GuildMembershipStatus>;
  getGuildUser?: Maybe<GuildUser>;
  getIntegrationType?: Maybe<IntegrationType>;
  getJobRun?: Maybe<JobRun>;
  getLinearCycle?: Maybe<LinearCycle>;
  getLinearIssue?: Maybe<LinearIssue>;
  getLinearProject?: Maybe<LinearProject>;
  getLinearTeam?: Maybe<LinearTeam>;
  getLinearUser?: Maybe<LinearUser>;
  getPartner?: Maybe<Partner>;
  getTwitterAccount?: Maybe<TwitterAccount>;
  getTwitterTweet?: Maybe<TwitterTweet>;
  getTwitterTweetContribution?: Maybe<TwitterTweetContribution>;
  getTwitterUser?: Maybe<TwitterUser>;
  getUser: User;
  getUserActivity?: Maybe<UserActivity>;
  groupByActivityType: Array<ActivityTypeGroupBy>;
  groupByAttestation: Array<AttestationGroupBy>;
  groupByAttestationConfidence: Array<AttestationConfidenceGroupBy>;
  groupByAttestationStatus: Array<AttestationStatusGroupBy>;
  groupByCategoryActivity: Array<CategoryActivityGroupBy>;
  groupByCategoryActivityType: Array<CategoryActivityTypeGroupBy>;
  groupByChain: Array<ChainGroupBy>;
  groupByChainType: Array<ChainTypeGroupBy>;
  groupByContribution: Array<ContributionGroupBy>;
  groupByContributionStatus: Array<ContributionStatusGroupBy>;
  groupByDiscordUser: Array<DiscordUserGroupBy>;
  groupByGuild: Array<GuildGroupBy>;
  groupByGuildActivityType: Array<GuildActivityTypeGroupBy>;
  groupByGuildContribution: Array<GuildContributionGroupBy>;
  groupByGuildImport: Array<GuildImportGroupBy>;
  groupByGuildImportStatus: Array<GuildImportStatusGroupBy>;
  groupByGuildMembershipStatus: Array<GuildMembershipStatusGroupBy>;
  groupByGuildUser: Array<GuildUserGroupBy>;
  groupByIntegrationType: Array<IntegrationTypeGroupBy>;
  groupByJobRun: Array<JobRunGroupBy>;
  groupByLinearCycle: Array<LinearCycleGroupBy>;
  groupByLinearIssue: Array<LinearIssueGroupBy>;
  groupByLinearProject: Array<LinearProjectGroupBy>;
  groupByLinearTeam: Array<LinearTeamGroupBy>;
  groupByLinearUser: Array<LinearUserGroupBy>;
  groupByPartner: Array<PartnerGroupBy>;
  groupByTwitterAccount: Array<TwitterAccountGroupBy>;
  groupByTwitterTweet: Array<TwitterTweetGroupBy>;
  groupByTwitterTweetContribution: Array<TwitterTweetContributionGroupBy>;
  groupByTwitterUser: Array<TwitterUserGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserActivity: Array<UserActivityGroupBy>;
  guild?: Maybe<Guild>;
  guildActivityType?: Maybe<GuildActivityType>;
  guildActivityTypes: Array<GuildActivityType>;
  guildContribution?: Maybe<GuildContribution>;
  guildContributions: Array<GuildContribution>;
  guildImport?: Maybe<GuildImport>;
  guildImportStatus?: Maybe<GuildImportStatus>;
  guildImportStatuses: Array<GuildImportStatus>;
  guildImports: Array<GuildImport>;
  guildMembershipStatus?: Maybe<GuildMembershipStatus>;
  guildMembershipStatuses: Array<GuildMembershipStatus>;
  guildUser?: Maybe<GuildUser>;
  guildUsers: Array<GuildUser>;
  guilds: Array<Guild>;
  integrationType?: Maybe<IntegrationType>;
  integrationTypes: Array<IntegrationType>;
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
  listActivityTypesByUser: Array<ActivityType>;
  listUserByAddress: Array<User>;
  partner?: Maybe<Partner>;
  partners: Array<Partner>;
  twitterAccount?: Maybe<TwitterAccount>;
  twitterAccounts: Array<TwitterAccount>;
  twitterTweet?: Maybe<TwitterTweet>;
  twitterTweetContribution?: Maybe<TwitterTweetContribution>;
  twitterTweetContributions: Array<TwitterTweetContribution>;
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


export type QueryAggregateAttestationStatusArgs = {
  cursor?: InputMaybe<AttestationStatusWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AttestationStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationStatusWhereInput>;
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


export type QueryAggregateChainArgs = {
  cursor?: InputMaybe<ChainWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ChainOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChainWhereInput>;
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


export type QueryAggregateGuildImportArgs = {
  cursor?: InputMaybe<GuildImportWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GuildImportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildImportWhereInput>;
};


export type QueryAggregateGuildImportStatusArgs = {
  cursor?: InputMaybe<GuildImportStatusWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GuildImportStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildImportStatusWhereInput>;
};


export type QueryAggregateGuildMembershipStatusArgs = {
  cursor?: InputMaybe<GuildMembershipStatusWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GuildMembershipStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildMembershipStatusWhereInput>;
};


export type QueryAggregateGuildUserArgs = {
  cursor?: InputMaybe<GuildUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GuildUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildUserWhereInput>;
};


export type QueryAggregateIntegrationTypeArgs = {
  cursor?: InputMaybe<IntegrationTypeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<IntegrationTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationTypeWhereInput>;
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


export type QueryAggregateTwitterTweetContributionArgs = {
  cursor?: InputMaybe<TwitterTweetContributionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TwitterTweetContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterTweetContributionWhereInput>;
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


export type QueryAttestationStatusArgs = {
  where: AttestationStatusWhereUniqueInput;
};


export type QueryAttestationStatusesArgs = {
  cursor?: InputMaybe<AttestationStatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationStatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationStatusWhereInput>;
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


export type QueryChainArgs = {
  where: ChainWhereUniqueInput;
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


export type QueryChainsArgs = {
  cursor?: InputMaybe<ChainWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChainScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChainOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChainWhereInput>;
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


export type QueryFindFirstActivityTypeOrThrowArgs = {
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


export type QueryFindFirstAttestationConfidenceOrThrowArgs = {
  cursor?: InputMaybe<AttestationConfidenceWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationConfidenceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationConfidenceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationConfidenceWhereInput>;
};


export type QueryFindFirstAttestationOrThrowArgs = {
  cursor?: InputMaybe<AttestationWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationWhereInput>;
};


export type QueryFindFirstAttestationStatusArgs = {
  cursor?: InputMaybe<AttestationStatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationStatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationStatusWhereInput>;
};


export type QueryFindFirstAttestationStatusOrThrowArgs = {
  cursor?: InputMaybe<AttestationStatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationStatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationStatusWhereInput>;
};


export type QueryFindFirstCategoryActivityArgs = {
  cursor?: InputMaybe<CategoryActivityWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryActivityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryActivityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryActivityWhereInput>;
};


export type QueryFindFirstCategoryActivityOrThrowArgs = {
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


export type QueryFindFirstCategoryActivityTypeOrThrowArgs = {
  cursor?: InputMaybe<CategoryActivityTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryActivityTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryActivityTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryActivityTypeWhereInput>;
};


export type QueryFindFirstChainArgs = {
  cursor?: InputMaybe<ChainWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChainScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChainOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChainWhereInput>;
};


export type QueryFindFirstChainOrThrowArgs = {
  cursor?: InputMaybe<ChainWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChainScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChainOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChainWhereInput>;
};


export type QueryFindFirstChainTypeArgs = {
  cursor?: InputMaybe<ChainTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChainTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChainTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChainTypeWhereInput>;
};


export type QueryFindFirstChainTypeOrThrowArgs = {
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


export type QueryFindFirstContributionOrThrowArgs = {
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


export type QueryFindFirstContributionStatusOrThrowArgs = {
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


export type QueryFindFirstDiscordUserOrThrowArgs = {
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


export type QueryFindFirstGuildActivityTypeOrThrowArgs = {
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


export type QueryFindFirstGuildContributionOrThrowArgs = {
  cursor?: InputMaybe<GuildContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildContributionWhereInput>;
};


export type QueryFindFirstGuildImportArgs = {
  cursor?: InputMaybe<GuildImportWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildImportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildImportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildImportWhereInput>;
};


export type QueryFindFirstGuildImportOrThrowArgs = {
  cursor?: InputMaybe<GuildImportWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildImportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildImportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildImportWhereInput>;
};


export type QueryFindFirstGuildImportStatusArgs = {
  cursor?: InputMaybe<GuildImportStatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildImportStatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildImportStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildImportStatusWhereInput>;
};


export type QueryFindFirstGuildImportStatusOrThrowArgs = {
  cursor?: InputMaybe<GuildImportStatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildImportStatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildImportStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildImportStatusWhereInput>;
};


export type QueryFindFirstGuildMembershipStatusArgs = {
  cursor?: InputMaybe<GuildMembershipStatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildMembershipStatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildMembershipStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildMembershipStatusWhereInput>;
};


export type QueryFindFirstGuildMembershipStatusOrThrowArgs = {
  cursor?: InputMaybe<GuildMembershipStatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildMembershipStatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildMembershipStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildMembershipStatusWhereInput>;
};


export type QueryFindFirstGuildOrThrowArgs = {
  cursor?: InputMaybe<GuildWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildWhereInput>;
};


export type QueryFindFirstGuildUserArgs = {
  cursor?: InputMaybe<GuildUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildUserWhereInput>;
};


export type QueryFindFirstGuildUserOrThrowArgs = {
  cursor?: InputMaybe<GuildUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildUserWhereInput>;
};


export type QueryFindFirstIntegrationTypeArgs = {
  cursor?: InputMaybe<IntegrationTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationTypeWhereInput>;
};


export type QueryFindFirstIntegrationTypeOrThrowArgs = {
  cursor?: InputMaybe<IntegrationTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationTypeWhereInput>;
};


export type QueryFindFirstJobRunArgs = {
  cursor?: InputMaybe<JobRunWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobRunScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobRunOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobRunWhereInput>;
};


export type QueryFindFirstJobRunOrThrowArgs = {
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


export type QueryFindFirstLinearCycleOrThrowArgs = {
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


export type QueryFindFirstLinearIssueOrThrowArgs = {
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


export type QueryFindFirstLinearProjectOrThrowArgs = {
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


export type QueryFindFirstLinearTeamOrThrowArgs = {
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


export type QueryFindFirstLinearUserOrThrowArgs = {
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


export type QueryFindFirstPartnerOrThrowArgs = {
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


export type QueryFindFirstTwitterAccountOrThrowArgs = {
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


export type QueryFindFirstTwitterTweetContributionArgs = {
  cursor?: InputMaybe<TwitterTweetContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwitterTweetContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwitterTweetContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterTweetContributionWhereInput>;
};


export type QueryFindFirstTwitterTweetContributionOrThrowArgs = {
  cursor?: InputMaybe<TwitterTweetContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwitterTweetContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwitterTweetContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterTweetContributionWhereInput>;
};


export type QueryFindFirstTwitterTweetOrThrowArgs = {
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


export type QueryFindFirstTwitterUserOrThrowArgs = {
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


export type QueryFindFirstUserActivityOrThrowArgs = {
  cursor?: InputMaybe<UserActivityWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserActivityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserActivityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserActivityWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetActiveGuildUsersAverageArgs = {
  where: GetActiveUsersInput;
};


export type QueryGetActivityTypeArgs = {
  where: ActivityTypeWhereUniqueInput;
};


export type QueryGetAttestationArgs = {
  where: AttestationWhereUniqueInput;
};


export type QueryGetAttestationConfidenceArgs = {
  where: AttestationConfidenceWhereUniqueInput;
};


export type QueryGetAttestationStatusArgs = {
  where: AttestationStatusWhereUniqueInput;
};


export type QueryGetCategoryActivityArgs = {
  where: CategoryActivityWhereUniqueInput;
};


export type QueryGetCategoryActivityTypeArgs = {
  where: CategoryActivityTypeWhereUniqueInput;
};


export type QueryGetChainArgs = {
  where: ChainWhereUniqueInput;
};


export type QueryGetChainTypeArgs = {
  where: ChainTypeWhereUniqueInput;
};


export type QueryGetContributionArgs = {
  where: ContributionWhereUniqueInput;
};


export type QueryGetContributionCountByActivityTypeArgs = {
  where: GetContributionInput;
};


export type QueryGetContributionCountByDateForUserInRangeArgs = {
  where: GetUserContributionCountInput;
};


export type QueryGetContributionStatusArgs = {
  where: ContributionStatusWhereUniqueInput;
};


export type QueryGetDaoContributionCountArgs = {
  where: GetContributionInput;
};


export type QueryGetDaoContributionCountByUserArgs = {
  where: GetContributionInput;
};


export type QueryGetDiscordUserArgs = {
  where: DiscordUserWhereUniqueInput;
};


export type QueryGetGuildArgs = {
  where: GuildWhereUniqueInput;
};


export type QueryGetGuildActivityTypeArgs = {
  where: GuildActivityTypeWhereUniqueInput;
};


export type QueryGetGuildContributionArgs = {
  where: GuildContributionWhereUniqueInput;
};


export type QueryGetGuildImportArgs = {
  where: GuildImportWhereUniqueInput;
};


export type QueryGetGuildImportStatusArgs = {
  where: GuildImportStatusWhereUniqueInput;
};


export type QueryGetGuildMembershipStatusArgs = {
  where: GuildMembershipStatusWhereUniqueInput;
};


export type QueryGetGuildUserArgs = {
  where: GuildUserWhereUniqueInput;
};


export type QueryGetIntegrationTypeArgs = {
  where: IntegrationTypeWhereUniqueInput;
};


export type QueryGetJobRunArgs = {
  where: JobRunWhereUniqueInput;
};


export type QueryGetLinearCycleArgs = {
  where: LinearCycleWhereUniqueInput;
};


export type QueryGetLinearIssueArgs = {
  where: LinearIssueWhereUniqueInput;
};


export type QueryGetLinearProjectArgs = {
  where: LinearProjectWhereUniqueInput;
};


export type QueryGetLinearTeamArgs = {
  where: LinearTeamWhereUniqueInput;
};


export type QueryGetLinearUserArgs = {
  where: LinearUserWhereUniqueInput;
};


export type QueryGetPartnerArgs = {
  where: PartnerWhereUniqueInput;
};


export type QueryGetTwitterAccountArgs = {
  where: TwitterAccountWhereUniqueInput;
};


export type QueryGetTwitterTweetArgs = {
  where: TwitterTweetWhereUniqueInput;
};


export type QueryGetTwitterTweetContributionArgs = {
  where: TwitterTweetContributionWhereUniqueInput;
};


export type QueryGetTwitterUserArgs = {
  where: TwitterUserWhereUniqueInput;
};


export type QueryGetUserArgs = {
  id: Scalars['Float'];
};


export type QueryGetUserActivityArgs = {
  where: UserActivityWhereUniqueInput;
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


export type QueryGroupByAttestationStatusArgs = {
  by: Array<AttestationStatusScalarFieldEnum>;
  having?: InputMaybe<AttestationStatusScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AttestationStatusOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttestationStatusWhereInput>;
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


export type QueryGroupByChainArgs = {
  by: Array<ChainScalarFieldEnum>;
  having?: InputMaybe<ChainScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ChainOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChainWhereInput>;
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


export type QueryGroupByGuildImportArgs = {
  by: Array<GuildImportScalarFieldEnum>;
  having?: InputMaybe<GuildImportScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GuildImportOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildImportWhereInput>;
};


export type QueryGroupByGuildImportStatusArgs = {
  by: Array<GuildImportStatusScalarFieldEnum>;
  having?: InputMaybe<GuildImportStatusScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GuildImportStatusOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildImportStatusWhereInput>;
};


export type QueryGroupByGuildMembershipStatusArgs = {
  by: Array<GuildMembershipStatusScalarFieldEnum>;
  having?: InputMaybe<GuildMembershipStatusScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GuildMembershipStatusOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildMembershipStatusWhereInput>;
};


export type QueryGroupByGuildUserArgs = {
  by: Array<GuildUserScalarFieldEnum>;
  having?: InputMaybe<GuildUserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GuildUserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildUserWhereInput>;
};


export type QueryGroupByIntegrationTypeArgs = {
  by: Array<IntegrationTypeScalarFieldEnum>;
  having?: InputMaybe<IntegrationTypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<IntegrationTypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationTypeWhereInput>;
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


export type QueryGroupByTwitterTweetContributionArgs = {
  by: Array<TwitterTweetContributionScalarFieldEnum>;
  having?: InputMaybe<TwitterTweetContributionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TwitterTweetContributionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterTweetContributionWhereInput>;
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


export type QueryGuildImportArgs = {
  where: GuildImportWhereUniqueInput;
};


export type QueryGuildImportStatusArgs = {
  where: GuildImportStatusWhereUniqueInput;
};


export type QueryGuildImportStatusesArgs = {
  cursor?: InputMaybe<GuildImportStatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildImportStatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildImportStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildImportStatusWhereInput>;
};


export type QueryGuildImportsArgs = {
  cursor?: InputMaybe<GuildImportWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildImportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildImportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildImportWhereInput>;
};


export type QueryGuildMembershipStatusArgs = {
  where: GuildMembershipStatusWhereUniqueInput;
};


export type QueryGuildMembershipStatusesArgs = {
  cursor?: InputMaybe<GuildMembershipStatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<GuildMembershipStatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GuildMembershipStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuildMembershipStatusWhereInput>;
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


export type QueryIntegrationTypeArgs = {
  where: IntegrationTypeWhereUniqueInput;
};


export type QueryIntegrationTypesArgs = {
  cursor?: InputMaybe<IntegrationTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationTypeWhereInput>;
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


export type QueryListActivityTypesByUserArgs = {
  where: ListActivityTypesByUserInput;
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


export type QueryTwitterTweetContributionArgs = {
  where: TwitterTweetContributionWhereUniqueInput;
};


export type QueryTwitterTweetContributionsArgs = {
  cursor?: InputMaybe<TwitterTweetContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwitterTweetContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwitterTweetContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterTweetContributionWhereInput>;
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
  guild?: InputMaybe<GuildCreateNestedOneWithoutTwitter_AccountsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterAccountCreateManyGuildInput = {
  account_name: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterAccountCreateManyGuildInputEnvelope = {
  data: Array<TwitterAccountCreateManyGuildInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TwitterAccountCreateManyInput = {
  account_name: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guild_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterAccountCreateNestedManyWithoutGuildInput = {
  connect?: InputMaybe<Array<TwitterAccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TwitterAccountCreateOrConnectWithoutGuildInput>>;
  create?: InputMaybe<Array<TwitterAccountCreateWithoutGuildInput>>;
  createMany?: InputMaybe<TwitterAccountCreateManyGuildInputEnvelope>;
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

export type TwitterAccountListRelationFilter = {
  every?: InputMaybe<TwitterAccountWhereInput>;
  none?: InputMaybe<TwitterAccountWhereInput>;
  some?: InputMaybe<TwitterAccountWhereInput>;
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

export type TwitterAccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
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

export enum TwitterAccountScalarFieldEnum {
  AccountName = 'account_name',
  CreatedAt = 'createdAt',
  GuildId = 'guild_id',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type TwitterAccountScalarWhereInput = {
  AND?: InputMaybe<Array<TwitterAccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<TwitterAccountScalarWhereInput>>;
  OR?: InputMaybe<Array<TwitterAccountScalarWhereInput>>;
  account_name?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guild_id?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

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
  guild?: InputMaybe<GuildUpdateOneWithoutTwitter_AccountsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterAccountUpdateManyMutationInput = {
  account_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterAccountUpdateManyWithWhereWithoutGuildInput = {
  data: TwitterAccountUpdateManyMutationInput;
  where: TwitterAccountScalarWhereInput;
};

export type TwitterAccountUpdateManyWithoutGuildNestedInput = {
  connect?: InputMaybe<Array<TwitterAccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TwitterAccountCreateOrConnectWithoutGuildInput>>;
  create?: InputMaybe<Array<TwitterAccountCreateWithoutGuildInput>>;
  createMany?: InputMaybe<TwitterAccountCreateManyGuildInputEnvelope>;
  delete?: InputMaybe<Array<TwitterAccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TwitterAccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TwitterAccountWhereUniqueInput>>;
  set?: InputMaybe<Array<TwitterAccountWhereUniqueInput>>;
  update?: InputMaybe<Array<TwitterAccountUpdateWithWhereUniqueWithoutGuildInput>>;
  updateMany?: InputMaybe<Array<TwitterAccountUpdateManyWithWhereWithoutGuildInput>>;
  upsert?: InputMaybe<Array<TwitterAccountUpsertWithWhereUniqueWithoutGuildInput>>;
};

export type TwitterAccountUpdateWithWhereUniqueWithoutGuildInput = {
  data: TwitterAccountUpdateWithoutGuildInput;
  where: TwitterAccountWhereUniqueInput;
};

export type TwitterAccountUpdateWithoutGuildInput = {
  account_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterAccountUpsertWithWhereUniqueWithoutGuildInput = {
  create: TwitterAccountCreateWithoutGuildInput;
  update: TwitterAccountUpdateWithoutGuildInput;
  where: TwitterAccountWhereUniqueInput;
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
  id?: InputMaybe<Scalars['Int']>;
};

export type TwitterTweet = {
  _count?: Maybe<TwitterTweetCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  text: Scalars['String'];
  twitter_tweet_contribution_ids: Array<Scalars['Int']>;
  twitter_tweet_contributions: Array<TwitterTweetContribution>;
  twitter_tweet_id: Scalars['Int'];
  twitter_user?: Maybe<TwitterUser>;
  twitter_user_id?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};


export type TwitterTweetTwitter_Tweet_ContributionsArgs = {
  cursor?: InputMaybe<TwitterTweetContributionWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwitterTweetContributionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwitterTweetContributionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwitterTweetContributionWhereInput>;
};

export type TwitterTweetAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
  twitter_tweet_contribution_ids?: Maybe<Scalars['Float']>;
  twitter_tweet_id?: Maybe<Scalars['Float']>;
  twitter_user_id?: Maybe<Scalars['Float']>;
};

export type TwitterTweetAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  twitter_tweet_contribution_ids?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
};

export type TwitterTweetContribution = {
  contribution: Contribution;
  contribution_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  twitter_tweet: TwitterTweet;
  twitter_tweet_id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type TwitterTweetContributionAvgAggregate = {
  contribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  twitter_tweet_id?: Maybe<Scalars['Float']>;
};

export type TwitterTweetContributionAvgOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
};

export type TwitterTweetContributionCountAggregate = {
  _all: Scalars['Int'];
  contribution_id: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  twitter_tweet_id: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TwitterTweetContributionCountOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterTweetContributionCreateInput = {
  contribution: ContributionCreateNestedOneWithoutTwitter_Tweet_ContributionsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  twitter_tweet: TwitterTweetCreateNestedOneWithoutTwitter_Tweet_ContributionsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetContributionCreateManyContributionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  twitter_tweet_id: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetContributionCreateManyContributionInputEnvelope = {
  data: Array<TwitterTweetContributionCreateManyContributionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TwitterTweetContributionCreateManyInput = {
  contribution_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  twitter_tweet_id: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetContributionCreateManyTwitter_TweetInput = {
  contribution_id: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetContributionCreateManyTwitter_TweetInputEnvelope = {
  data: Array<TwitterTweetContributionCreateManyTwitter_TweetInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TwitterTweetContributionCreateNestedManyWithoutContributionInput = {
  connect?: InputMaybe<Array<TwitterTweetContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TwitterTweetContributionCreateOrConnectWithoutContributionInput>>;
  create?: InputMaybe<Array<TwitterTweetContributionCreateWithoutContributionInput>>;
  createMany?: InputMaybe<TwitterTweetContributionCreateManyContributionInputEnvelope>;
};

export type TwitterTweetContributionCreateNestedManyWithoutTwitter_TweetInput = {
  connect?: InputMaybe<Array<TwitterTweetContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TwitterTweetContributionCreateOrConnectWithoutTwitter_TweetInput>>;
  create?: InputMaybe<Array<TwitterTweetContributionCreateWithoutTwitter_TweetInput>>;
  createMany?: InputMaybe<TwitterTweetContributionCreateManyTwitter_TweetInputEnvelope>;
};

export type TwitterTweetContributionCreateOrConnectWithoutContributionInput = {
  create: TwitterTweetContributionCreateWithoutContributionInput;
  where: TwitterTweetContributionWhereUniqueInput;
};

export type TwitterTweetContributionCreateOrConnectWithoutTwitter_TweetInput = {
  create: TwitterTweetContributionCreateWithoutTwitter_TweetInput;
  where: TwitterTweetContributionWhereUniqueInput;
};

export type TwitterTweetContributionCreateWithoutContributionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  twitter_tweet: TwitterTweetCreateNestedOneWithoutTwitter_Tweet_ContributionsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetContributionCreateWithoutTwitter_TweetInput = {
  contribution: ContributionCreateNestedOneWithoutTwitter_Tweet_ContributionsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetContributionGroupBy = {
  _avg?: Maybe<TwitterTweetContributionAvgAggregate>;
  _count?: Maybe<TwitterTweetContributionCountAggregate>;
  _max?: Maybe<TwitterTweetContributionMaxAggregate>;
  _min?: Maybe<TwitterTweetContributionMinAggregate>;
  _sum?: Maybe<TwitterTweetContributionSumAggregate>;
  contribution_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  twitter_tweet_id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type TwitterTweetContributionListRelationFilter = {
  every?: InputMaybe<TwitterTweetContributionWhereInput>;
  none?: InputMaybe<TwitterTweetContributionWhereInput>;
  some?: InputMaybe<TwitterTweetContributionWhereInput>;
};

export type TwitterTweetContributionMaxAggregate = {
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  twitter_tweet_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TwitterTweetContributionMaxOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterTweetContributionMinAggregate = {
  contribution_id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  twitter_tweet_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TwitterTweetContributionMinOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterTweetContributionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TwitterTweetContributionOrderByWithAggregationInput = {
  _avg?: InputMaybe<TwitterTweetContributionAvgOrderByAggregateInput>;
  _count?: InputMaybe<TwitterTweetContributionCountOrderByAggregateInput>;
  _max?: InputMaybe<TwitterTweetContributionMaxOrderByAggregateInput>;
  _min?: InputMaybe<TwitterTweetContributionMinOrderByAggregateInput>;
  _sum?: InputMaybe<TwitterTweetContributionSumOrderByAggregateInput>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterTweetContributionOrderByWithRelationInput = {
  contribution?: InputMaybe<ContributionOrderByWithRelationInput>;
  contribution_id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  twitter_tweet?: InputMaybe<TwitterTweetOrderByWithRelationInput>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum TwitterTweetContributionScalarFieldEnum {
  ContributionId = 'contribution_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  TwitterTweetId = 'twitter_tweet_id',
  UpdatedAt = 'updatedAt'
}

export type TwitterTweetContributionScalarWhereInput = {
  AND?: InputMaybe<Array<TwitterTweetContributionScalarWhereInput>>;
  NOT?: InputMaybe<Array<TwitterTweetContributionScalarWhereInput>>;
  OR?: InputMaybe<Array<TwitterTweetContributionScalarWhereInput>>;
  contribution_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  twitter_tweet_id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TwitterTweetContributionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TwitterTweetContributionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TwitterTweetContributionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TwitterTweetContributionScalarWhereWithAggregatesInput>>;
  contribution_id?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  twitter_tweet_id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TwitterTweetContributionSumAggregate = {
  contribution_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  twitter_tweet_id?: Maybe<Scalars['Int']>;
};

export type TwitterTweetContributionSumOrderByAggregateInput = {
  contribution_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
};

export type TwitterTweetContributionUpdateInput = {
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutTwitter_Tweet_ContributionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  twitter_tweet?: InputMaybe<TwitterTweetUpdateOneRequiredWithoutTwitter_Tweet_ContributionsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterTweetContributionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterTweetContributionUpdateManyWithWhereWithoutContributionInput = {
  data: TwitterTweetContributionUpdateManyMutationInput;
  where: TwitterTweetContributionScalarWhereInput;
};

export type TwitterTweetContributionUpdateManyWithWhereWithoutTwitter_TweetInput = {
  data: TwitterTweetContributionUpdateManyMutationInput;
  where: TwitterTweetContributionScalarWhereInput;
};

export type TwitterTweetContributionUpdateManyWithoutContributionNestedInput = {
  connect?: InputMaybe<Array<TwitterTweetContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TwitterTweetContributionCreateOrConnectWithoutContributionInput>>;
  create?: InputMaybe<Array<TwitterTweetContributionCreateWithoutContributionInput>>;
  createMany?: InputMaybe<TwitterTweetContributionCreateManyContributionInputEnvelope>;
  delete?: InputMaybe<Array<TwitterTweetContributionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TwitterTweetContributionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TwitterTweetContributionWhereUniqueInput>>;
  set?: InputMaybe<Array<TwitterTweetContributionWhereUniqueInput>>;
  update?: InputMaybe<Array<TwitterTweetContributionUpdateWithWhereUniqueWithoutContributionInput>>;
  updateMany?: InputMaybe<Array<TwitterTweetContributionUpdateManyWithWhereWithoutContributionInput>>;
  upsert?: InputMaybe<Array<TwitterTweetContributionUpsertWithWhereUniqueWithoutContributionInput>>;
};

export type TwitterTweetContributionUpdateManyWithoutTwitter_TweetNestedInput = {
  connect?: InputMaybe<Array<TwitterTweetContributionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TwitterTweetContributionCreateOrConnectWithoutTwitter_TweetInput>>;
  create?: InputMaybe<Array<TwitterTweetContributionCreateWithoutTwitter_TweetInput>>;
  createMany?: InputMaybe<TwitterTweetContributionCreateManyTwitter_TweetInputEnvelope>;
  delete?: InputMaybe<Array<TwitterTweetContributionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TwitterTweetContributionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TwitterTweetContributionWhereUniqueInput>>;
  set?: InputMaybe<Array<TwitterTweetContributionWhereUniqueInput>>;
  update?: InputMaybe<Array<TwitterTweetContributionUpdateWithWhereUniqueWithoutTwitter_TweetInput>>;
  updateMany?: InputMaybe<Array<TwitterTweetContributionUpdateManyWithWhereWithoutTwitter_TweetInput>>;
  upsert?: InputMaybe<Array<TwitterTweetContributionUpsertWithWhereUniqueWithoutTwitter_TweetInput>>;
};

export type TwitterTweetContributionUpdateWithWhereUniqueWithoutContributionInput = {
  data: TwitterTweetContributionUpdateWithoutContributionInput;
  where: TwitterTweetContributionWhereUniqueInput;
};

export type TwitterTweetContributionUpdateWithWhereUniqueWithoutTwitter_TweetInput = {
  data: TwitterTweetContributionUpdateWithoutTwitter_TweetInput;
  where: TwitterTweetContributionWhereUniqueInput;
};

export type TwitterTweetContributionUpdateWithoutContributionInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  twitter_tweet?: InputMaybe<TwitterTweetUpdateOneRequiredWithoutTwitter_Tweet_ContributionsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterTweetContributionUpdateWithoutTwitter_TweetInput = {
  contribution?: InputMaybe<ContributionUpdateOneRequiredWithoutTwitter_Tweet_ContributionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterTweetContributionUpsertWithWhereUniqueWithoutContributionInput = {
  create: TwitterTweetContributionCreateWithoutContributionInput;
  update: TwitterTweetContributionUpdateWithoutContributionInput;
  where: TwitterTweetContributionWhereUniqueInput;
};

export type TwitterTweetContributionUpsertWithWhereUniqueWithoutTwitter_TweetInput = {
  create: TwitterTweetContributionCreateWithoutTwitter_TweetInput;
  update: TwitterTweetContributionUpdateWithoutTwitter_TweetInput;
  where: TwitterTweetContributionWhereUniqueInput;
};

export type TwitterTweetContributionWhereInput = {
  AND?: InputMaybe<Array<TwitterTweetContributionWhereInput>>;
  NOT?: InputMaybe<Array<TwitterTweetContributionWhereInput>>;
  OR?: InputMaybe<Array<TwitterTweetContributionWhereInput>>;
  contribution?: InputMaybe<ContributionRelationFilter>;
  contribution_id?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  twitter_tweet?: InputMaybe<TwitterTweetRelationFilter>;
  twitter_tweet_id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TwitterTweetContributionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type TwitterTweetCount = {
  twitter_tweet_contributions: Scalars['Int'];
};

export type TwitterTweetCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  text: Scalars['Int'];
  twitter_tweet_contribution_ids: Scalars['Int'];
  twitter_tweet_id: Scalars['Int'];
  twitter_user_id: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TwitterTweetCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  twitter_tweet_contribution_ids?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterTweetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  text: Scalars['String'];
  twitter_tweet_contribution_ids?: InputMaybe<TwitterTweetCreatetwitter_Tweet_Contribution_IdsInput>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionCreateNestedManyWithoutTwitter_TweetInput>;
  twitter_tweet_id: Scalars['Int'];
  twitter_user?: InputMaybe<TwitterUserCreateNestedOneWithoutTweetsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
  twitter_tweet_contribution_ids?: InputMaybe<TwitterTweetCreatetwitter_Tweet_Contribution_IdsInput>;
  twitter_tweet_id: Scalars['Int'];
  twitter_user_id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetCreateManyTwitter_UserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
  twitter_tweet_contribution_ids?: InputMaybe<TwitterTweetCreatetwitter_Tweet_Contribution_IdsInput>;
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

export type TwitterTweetCreateNestedOneWithoutTwitter_Tweet_ContributionsInput = {
  connect?: InputMaybe<TwitterTweetWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TwitterTweetCreateOrConnectWithoutTwitter_Tweet_ContributionsInput>;
  create?: InputMaybe<TwitterTweetCreateWithoutTwitter_Tweet_ContributionsInput>;
};

export type TwitterTweetCreateOrConnectWithoutTwitter_Tweet_ContributionsInput = {
  create: TwitterTweetCreateWithoutTwitter_Tweet_ContributionsInput;
  where: TwitterTweetWhereUniqueInput;
};

export type TwitterTweetCreateOrConnectWithoutTwitter_UserInput = {
  create: TwitterTweetCreateWithoutTwitter_UserInput;
  where: TwitterTweetWhereUniqueInput;
};

export type TwitterTweetCreateWithoutTwitter_Tweet_ContributionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  text: Scalars['String'];
  twitter_tweet_contribution_ids?: InputMaybe<TwitterTweetCreatetwitter_Tweet_Contribution_IdsInput>;
  twitter_tweet_id: Scalars['Int'];
  twitter_user?: InputMaybe<TwitterUserCreateNestedOneWithoutTweetsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetCreateWithoutTwitter_UserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  text: Scalars['String'];
  twitter_tweet_contribution_ids?: InputMaybe<TwitterTweetCreatetwitter_Tweet_Contribution_IdsInput>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionCreateNestedManyWithoutTwitter_TweetInput>;
  twitter_tweet_id: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TwitterTweetCreatetwitter_Tweet_Contribution_IdsInput = {
  set: Array<Scalars['Int']>;
};

export type TwitterTweetGroupBy = {
  _avg?: Maybe<TwitterTweetAvgAggregate>;
  _count?: Maybe<TwitterTweetCountAggregate>;
  _max?: Maybe<TwitterTweetMaxAggregate>;
  _min?: Maybe<TwitterTweetMinAggregate>;
  _sum?: Maybe<TwitterTweetSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  text: Scalars['String'];
  twitter_tweet_contribution_ids?: Maybe<Array<Scalars['Int']>>;
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
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  twitter_tweet_id?: Maybe<Scalars['Int']>;
  twitter_user_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TwitterTweetMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterTweetMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  twitter_tweet_id?: Maybe<Scalars['Int']>;
  twitter_user_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TwitterTweetMinOrderByAggregateInput = {
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
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  twitter_tweet_contribution_ids?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TwitterTweetOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  twitter_tweet_contribution_ids?: InputMaybe<SortOrder>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionOrderByRelationAggregateInput>;
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
  CreatedAt = 'createdAt',
  Id = 'id',
  Text = 'text',
  TwitterTweetContributionIds = 'twitter_tweet_contribution_ids',
  TwitterTweetId = 'twitter_tweet_id',
  TwitterUserId = 'twitter_user_id',
  UpdatedAt = 'updatedAt'
}

export type TwitterTweetScalarWhereInput = {
  AND?: InputMaybe<Array<TwitterTweetScalarWhereInput>>;
  NOT?: InputMaybe<Array<TwitterTweetScalarWhereInput>>;
  OR?: InputMaybe<Array<TwitterTweetScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  twitter_tweet_contribution_ids?: InputMaybe<IntNullableListFilter>;
  twitter_tweet_id?: InputMaybe<IntFilter>;
  twitter_user_id?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TwitterTweetScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TwitterTweetScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TwitterTweetScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TwitterTweetScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
  twitter_tweet_contribution_ids?: InputMaybe<IntNullableListFilter>;
  twitter_tweet_id?: InputMaybe<IntWithAggregatesFilter>;
  twitter_user_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TwitterTweetSumAggregate = {
  id?: Maybe<Scalars['Int']>;
  twitter_tweet_contribution_ids?: Maybe<Array<Scalars['Int']>>;
  twitter_tweet_id?: Maybe<Scalars['Int']>;
  twitter_user_id?: Maybe<Scalars['Int']>;
};

export type TwitterTweetSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  twitter_tweet_contribution_ids?: InputMaybe<SortOrder>;
  twitter_tweet_id?: InputMaybe<SortOrder>;
  twitter_user_id?: InputMaybe<SortOrder>;
};

export type TwitterTweetUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  twitter_tweet_contribution_ids?: InputMaybe<TwitterTweetUpdatetwitter_Tweet_Contribution_IdsInput>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionUpdateManyWithoutTwitter_TweetNestedInput>;
  twitter_tweet_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutTweetsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterTweetUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  twitter_tweet_contribution_ids?: InputMaybe<TwitterTweetUpdatetwitter_Tweet_Contribution_IdsInput>;
  twitter_tweet_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterTweetUpdateManyWithWhereWithoutTwitter_UserInput = {
  data: TwitterTweetUpdateManyMutationInput;
  where: TwitterTweetScalarWhereInput;
};

export type TwitterTweetUpdateManyWithoutTwitter_UserNestedInput = {
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

export type TwitterTweetUpdateOneRequiredWithoutTwitter_Tweet_ContributionsNestedInput = {
  connect?: InputMaybe<TwitterTweetWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TwitterTweetCreateOrConnectWithoutTwitter_Tweet_ContributionsInput>;
  create?: InputMaybe<TwitterTweetCreateWithoutTwitter_Tweet_ContributionsInput>;
  update?: InputMaybe<TwitterTweetUpdateWithoutTwitter_Tweet_ContributionsInput>;
  upsert?: InputMaybe<TwitterTweetUpsertWithoutTwitter_Tweet_ContributionsInput>;
};

export type TwitterTweetUpdateWithWhereUniqueWithoutTwitter_UserInput = {
  data: TwitterTweetUpdateWithoutTwitter_UserInput;
  where: TwitterTweetWhereUniqueInput;
};

export type TwitterTweetUpdateWithoutTwitter_Tweet_ContributionsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  twitter_tweet_contribution_ids?: InputMaybe<TwitterTweetUpdatetwitter_Tweet_Contribution_IdsInput>;
  twitter_tweet_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutTweetsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterTweetUpdateWithoutTwitter_UserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  twitter_tweet_contribution_ids?: InputMaybe<TwitterTweetUpdatetwitter_Tweet_Contribution_IdsInput>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionUpdateManyWithoutTwitter_TweetNestedInput>;
  twitter_tweet_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TwitterTweetUpdatetwitter_Tweet_Contribution_IdsInput = {
  push?: InputMaybe<Array<Scalars['Int']>>;
  set?: InputMaybe<Array<Scalars['Int']>>;
};

export type TwitterTweetUpsertWithWhereUniqueWithoutTwitter_UserInput = {
  create: TwitterTweetCreateWithoutTwitter_UserInput;
  update: TwitterTweetUpdateWithoutTwitter_UserInput;
  where: TwitterTweetWhereUniqueInput;
};

export type TwitterTweetUpsertWithoutTwitter_Tweet_ContributionsInput = {
  create: TwitterTweetCreateWithoutTwitter_Tweet_ContributionsInput;
  update: TwitterTweetUpdateWithoutTwitter_Tweet_ContributionsInput;
};

export type TwitterTweetWhereInput = {
  AND?: InputMaybe<Array<TwitterTweetWhereInput>>;
  NOT?: InputMaybe<Array<TwitterTweetWhereInput>>;
  OR?: InputMaybe<Array<TwitterTweetWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  twitter_tweet_contribution_ids?: InputMaybe<IntNullableListFilter>;
  twitter_tweet_contributions?: InputMaybe<TwitterTweetContributionListRelationFilter>;
  twitter_tweet_id?: InputMaybe<IntFilter>;
  twitter_user?: InputMaybe<TwitterUserRelationFilter>;
  twitter_user_id?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TwitterTweetWhereUniqueInput = {
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
  tweets?: InputMaybe<TwitterTweetUpdateManyWithoutTwitter_UserNestedInput>;
  twitter_user_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutTwitter_UserNestedInput>;
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

export type TwitterUserUpdateOneWithoutTweetsNestedInput = {
  connect?: InputMaybe<TwitterUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TwitterUserCreateOrConnectWithoutTweetsInput>;
  create?: InputMaybe<TwitterUserCreateWithoutTweetsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TwitterUserUpdateWithoutTweetsInput>;
  upsert?: InputMaybe<TwitterUserUpsertWithoutTweetsInput>;
};

export type TwitterUserUpdateOneWithoutUserNestedInput = {
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
  user?: InputMaybe<UserUpdateOneWithoutTwitter_UserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TwitterUserUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tweets?: InputMaybe<TwitterTweetUpdateManyWithoutTwitter_UserNestedInput>;
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
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutUsersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutActivitiesNestedInput>;
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

export type UserActivityUpdateManyWithoutActivity_TypeNestedInput = {
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

export type UserActivityUpdateManyWithoutUserNestedInput = {
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
  user?: InputMaybe<UserUpdateOneRequiredWithoutActivitiesNestedInput>;
};

export type UserActivityUpdateWithoutUserInput = {
  activity_type?: InputMaybe<ActivityTypeUpdateOneRequiredWithoutUsersNestedInput>;
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
  chainId?: InputMaybe<Scalars['Float']>;
  chainName: Scalars['String'];
  dateOfEngagement: Scalars['DateTime'];
  details: Scalars['String'];
  guildId?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  proof: Scalars['String'];
  status: Scalars['String'];
  userId: Scalars['Float'];
};

export type UserContributionDeleteInput = {
  contributionId: Scalars['Int'];
};

export type UserContributionUpdateInput = {
  activityTypeName: Scalars['String'];
  address: Scalars['String'];
  chainName: Scalars['String'];
  contributionId: Scalars['Int'];
  contributionUserAddress?: InputMaybe<Scalars['String']>;
  currentGuildId?: InputMaybe<Scalars['Float']>;
  dateOfEngagement: Scalars['DateTime'];
  details?: InputMaybe<Scalars['String']>;
  guildId?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  proof?: InputMaybe<Scalars['String']>;
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
  chainId?: InputMaybe<Scalars['Float']>;
  dateOfEngagement: Scalars['DateTime'];
  dateOfSubmission: Scalars['DateTime'];
  details: Scalars['String'];
  name: Scalars['String'];
  onChainId: Scalars['Float'];
  proof: Scalars['String'];
  status: Scalars['String'];
  txHash: Scalars['String'];
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
  disconnectDiscordId?: InputMaybe<Scalars['Float']>;
  disconnectLinearId?: InputMaybe<Scalars['Float']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UserUpdateInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserNestedInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersNestedInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserNestedInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserNestedInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserNestedInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserNestedInput>;
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

export type UserUpdateManyWithoutChain_TypeNestedInput = {
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

export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutActivitiesInput>;
  create?: InputMaybe<UserCreateWithoutActivitiesInput>;
  update?: InputMaybe<UserUpdateWithoutActivitiesInput>;
  upsert?: InputMaybe<UserUpsertWithoutActivitiesInput>;
};

export type UserUpdateOneRequiredWithoutAttestationsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAttestationsInput>;
  create?: InputMaybe<UserCreateWithoutAttestationsInput>;
  update?: InputMaybe<UserUpdateWithoutAttestationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAttestationsInput>;
};

export type UserUpdateOneRequiredWithoutContributionPartnersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutContributionPartnersInput>;
  create?: InputMaybe<UserCreateWithoutContributionPartnersInput>;
  update?: InputMaybe<UserUpdateWithoutContributionPartnersInput>;
  upsert?: InputMaybe<UserUpsertWithoutContributionPartnersInput>;
};

export type UserUpdateOneRequiredWithoutContributionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutContributionsInput>;
  create?: InputMaybe<UserCreateWithoutContributionsInput>;
  update?: InputMaybe<UserUpdateWithoutContributionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutContributionsInput>;
};

export type UserUpdateOneRequiredWithoutGuild_UsersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutGuild_UsersInput>;
  create?: InputMaybe<UserCreateWithoutGuild_UsersInput>;
  update?: InputMaybe<UserUpdateWithoutGuild_UsersInput>;
  upsert?: InputMaybe<UserUpsertWithoutGuild_UsersInput>;
};

export type UserUpdateOneWithoutDiscord_UsersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutDiscord_UsersInput>;
  create?: InputMaybe<UserCreateWithoutDiscord_UsersInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutDiscord_UsersInput>;
  upsert?: InputMaybe<UserUpsertWithoutDiscord_UsersInput>;
};

export type UserUpdateOneWithoutLinear_UsersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLinear_UsersInput>;
  create?: InputMaybe<UserCreateWithoutLinear_UsersInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutLinear_UsersInput>;
  upsert?: InputMaybe<UserUpsertWithoutLinear_UsersInput>;
};

export type UserUpdateOneWithoutTwitter_UserNestedInput = {
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
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserNestedInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersNestedInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserNestedInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserNestedInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserNestedInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAttestationsInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersNestedInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserNestedInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserNestedInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserNestedInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChain_TypeInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserNestedInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserNestedInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserNestedInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserNestedInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutContributionPartnersInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserNestedInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersNestedInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserNestedInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserNestedInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutContributionsInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserNestedInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersNestedInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserNestedInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserNestedInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutDiscord_UsersInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserNestedInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersNestedInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserNestedInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserNestedInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutGuild_UsersInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserNestedInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersNestedInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserNestedInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserNestedInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutLinear_UsersInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserNestedInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersNestedInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserNestedInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserNestedInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter_user?: InputMaybe<TwitterUserUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTwitter_UserInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<UserActivityUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attestations?: InputMaybe<AttestationUpdateManyWithoutUserNestedInput>;
  chain_type?: InputMaybe<ChainTypeUpdateOneRequiredWithoutUsersNestedInput>;
  contributionPartners?: InputMaybe<PartnerUpdateManyWithoutUserNestedInput>;
  contributions?: InputMaybe<ContributionUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discord_users?: InputMaybe<DiscordUserUpdateManyWithoutUserNestedInput>;
  display_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  guild_users?: InputMaybe<GuildUserUpdateManyWithoutUserNestedInput>;
  linear_users?: InputMaybe<LinearUserUpdateManyWithoutUserNestedInput>;
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

export type JobFieldsFragmentFragment = { id: number, createdAt: string | Date, updatedAt: string | Date, completedDate: string | Date, name: string, startDate: string | Date };

export type ListJobRunsQueryVariables = Exact<{
  where?: JobRunWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<JobRunOrderByWithRelationInput> | JobRunOrderByWithRelationInput>;
}>;


export type ListJobRunsQuery = { result: Array<{ id: number, createdAt: string | Date, updatedAt: string | Date, completedDate: string | Date, name: string, startDate: string | Date }> };

export type GetJobRunQueryVariables = Exact<{
  where: JobRunWhereUniqueInput;
}>;


export type GetJobRunQuery = { result?: { id: number, createdAt: string | Date, updatedAt: string | Date, completedDate: string | Date, name: string, startDate: string | Date } | null };

export type LinearIssueFragmentFragment = { id: number, completedAt?: string | Date | null, createdAt?: string | Date | null };

export type ListLinearIssuesQueryVariables = Exact<{
  where?: LinearIssueWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<LinearIssueOrderByWithRelationInput> | LinearIssueOrderByWithRelationInput>;
}>;


export type ListLinearIssuesQuery = { result: Array<{ id: number, completedAt?: string | Date | null, createdAt?: string | Date | null }> };

export type BulkCreateIssuesMutationVariables = Exact<{
  data: Array<LinearIssueCreateManyInput> | LinearIssueCreateManyInput;
  skipDuplicates: Scalars['Boolean'];
}>;


export type BulkCreateIssuesMutation = { createManyLinearIssue: { count: number } };

export type LinearUserFragmentFragment = { id: number, active: boolean, displayName?: string | null, email?: string | null, linear_id: string, name?: string | null, url?: string | null, createdAt?: string | Date | null, access_token?: string | null, active_token?: boolean | null, user_id?: number | null };

export type ListLinearUsersQueryVariables = Exact<{
  where?: LinearUserWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<LinearUserOrderByWithRelationInput> | LinearUserOrderByWithRelationInput>;
}>;


export type ListLinearUsersQuery = { result: Array<{ id: number, active: boolean, displayName?: string | null, email?: string | null, linear_id: string, name?: string | null, url?: string | null, createdAt?: string | Date | null, access_token?: string | null, active_token?: boolean | null, user_id?: number | null }> };

export type UpsertLinearUserMutationVariables = Exact<{
  create: LinearUserCreateInput;
  update: LinearUserUpdateInput;
  where: LinearUserWhereUniqueInput;
}>;


export type UpsertLinearUserMutation = { upsertOneLinearUser: { id: number, active: boolean, displayName?: string | null, email?: string | null, linear_id: string, name?: string | null, url?: string | null, createdAt?: string | Date | null, access_token?: string | null, active_token?: boolean | null, user_id?: number | null } };

export type UpdateLinearUserMutationVariables = Exact<{
  data: LinearUserUpdateInput;
  where: LinearUserWhereUniqueInput;
}>;


export type UpdateLinearUserMutation = { updateOneLinearUser?: { id: number, active: boolean, displayName?: string | null, email?: string | null, linear_id: string, name?: string | null, url?: string | null, createdAt?: string | Date | null, access_token?: string | null, active_token?: boolean | null, user_id?: number | null } | null };

export type UpsertLinearCycleMutationVariables = Exact<{
  create: LinearCycleCreateInput;
  update: LinearCycleUpdateInput;
  where: LinearCycleWhereUniqueInput;
}>;


export type UpsertLinearCycleMutation = { upsertOneLinearCycle: { id: number, endsAt: string | Date, linear_id: string, number: number, startsAt: string | Date } };

export type UpsertLinearProjectMutationVariables = Exact<{
  create: LinearProjectCreateInput;
  update: LinearProjectUpdateInput;
  where: LinearProjectWhereUniqueInput;
}>;


export type UpsertLinearProjectMutation = { upsertOneLinearProject: { id: number, linear_id: string, name: string } };

export type UpsertLinearTeamMutationVariables = Exact<{
  create: LinearTeamCreateInput;
  update: LinearTeamUpdateInput;
  where: LinearTeamWhereUniqueInput;
}>;


export type UpsertLinearTeamMutation = { upsertOneLinearTeam: { id: number, key: string, name: string, linear_id: string } };

export type CreateJobRunMutationVariables = Exact<{
  data: JobRunCreateInput;
}>;


export type CreateJobRunMutation = { createOneJobRun: { completedDate: string | Date, startDate: string | Date, name: string } };

export type GuildFragmentFragment = { congrats_channel?: string | null, createdAt: string | Date, discord_id?: string | null, id: number, logo?: string | null, name?: string | null, updatedAt: string | Date, contribution_reporting_channel?: string | null, status: GuildStatus };

export type CreateGuildMutationVariables = Exact<{
  data: GuildCreateInput;
}>;


export type CreateGuildMutation = { createOneGuild: { congrats_channel?: string | null, discord_id?: string | null, logo?: string | null, name?: string | null } };

export type GetGuildQueryVariables = Exact<{
  where: GuildWhereUniqueInput;
}>;


export type GetGuildQuery = { result?: { congrats_channel?: string | null, createdAt: string | Date, discord_id?: string | null, id: number, logo?: string | null, name?: string | null, updatedAt: string | Date, contribution_reporting_channel?: string | null, status: GuildStatus } | null };

export type UpdateGuildCustomMutationVariables = Exact<{
  data: GuildUpdateCustomInput;
  where: GuildUpdateCustomWhereInput;
}>;


export type UpdateGuildCustomMutation = { updateGuildCustom: { congrats_channel?: string | null, createdAt: string | Date, discord_id?: string | null, id: number, logo?: string | null, name?: string | null, updatedAt: string | Date, contribution_reporting_channel?: string | null, status: GuildStatus } };

export type ListGuildsQueryVariables = Exact<{
  where?: GuildWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<GuildOrderByWithRelationInput> | GuildOrderByWithRelationInput>;
}>;


export type ListGuildsQuery = { result: Array<{ congrats_channel?: string | null, createdAt: string | Date, discord_id?: string | null, id: number, logo?: string | null, name?: string | null, updatedAt: string | Date, contribution_reporting_channel?: string | null, status: GuildStatus }> };

export type GetActiveGuildUsersAverageQueryVariables = Exact<{
  where: GetActiveUsersInput;
}>;


export type GetActiveGuildUsersAverageQuery = { result: number };

export type GuildUserFragmentFragment = { id: number, createdAt: string | Date, updatedAt: string | Date, favorite: boolean, user_id: number, user: { name?: string | null, display_name?: string | null, address: string }, guild: { id: number, name?: string | null }, membershipStatus?: { id: number, createdAt: string | Date, updatedAt: string | Date, name: string } | null };

export type CreateGuildUserCustomMutationVariables = Exact<{
  data: GuildUserCreateCustomInput;
}>;


export type CreateGuildUserCustomMutation = { createGuildUserCustom: { id: number, guild_id: number } };

export type DeleteGuildUserMutationVariables = Exact<{
  where: GuildUserWhereUniqueInput;
}>;


export type DeleteGuildUserMutation = { deleteOneGuildUser?: { id: number } | null };

export type ListGuildUsersQueryVariables = Exact<{
  where?: GuildUserWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<GuildUserOrderByWithRelationInput> | GuildUserOrderByWithRelationInput>;
}>;


export type ListGuildUsersQuery = { result: Array<{ id: number, createdAt: string | Date, updatedAt: string | Date, favorite: boolean, user_id: number, user: { name?: string | null, display_name?: string | null, address: string }, guild: { id: number, name?: string | null }, membershipStatus?: { id: number, createdAt: string | Date, updatedAt: string | Date, name: string } | null }> };

export type UpdateGuildUserCustomMutationVariables = Exact<{
  data: GuildUserUpdateCustomInput;
}>;


export type UpdateGuildUserCustomMutation = { updateGuildUserCustom: { id: number, createdAt: string | Date, updatedAt: string | Date, favorite: boolean, user_id: number, user: { name?: string | null, display_name?: string | null, address: string }, guild: { id: number, name?: string | null }, membershipStatus?: { id: number, createdAt: string | Date, updatedAt: string | Date, name: string } | null } };

export type GuildImportFragmentFragment = { id: number, createdAt: string | Date, updatedAt: string | Date, guild_id: number, integration_type_id: number, authentication_token: string, guild: { id: number, name?: string | null }, integration_type: { id: number, name: string }, import_status: { id: number, createdAt: string | Date, updatedAt: string | Date, name: string }, users: Array<{ user_id: number }> };

export type ListGuildImportsQueryVariables = Exact<{
  where?: GuildImportWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<GuildImportOrderByWithRelationInput> | GuildImportOrderByWithRelationInput>;
}>;


export type ListGuildImportsQuery = { result: Array<{ id: number, createdAt: string | Date, updatedAt: string | Date, guild_id: number, integration_type_id: number, authentication_token: string, guild: { id: number, name?: string | null }, integration_type: { id: number, name: string }, import_status: { id: number, createdAt: string | Date, updatedAt: string | Date, name: string }, users: Array<{ user_id: number }> }> };

export type TwitterTweetFragmentFragment = { id: number, updatedAt: string | Date, createdAt: string | Date, text: string, twitter_tweet_id: number, twitter_user?: { id: number, name?: string | null, createdAt: string | Date, updatedAt: string | Date, username: string } | null, twitter_tweet_contributions: Array<{ id: number, updatedAt: string | Date, createdAt: string | Date, contribution: { date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: string | Date, on_chain_id?: number | null, tx_hash?: string | null, activity_type: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, chain?: { chain_id: string } | null, status: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, user: { address: string, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date }, attestations: Array<{ id: number, user_id: number, date_of_attestation: string | Date, attestation_status?: { id: number, name: string } | null, user: { name?: string | null, address: string, id: number } }>, guilds: Array<{ id: number, guild_id: number, guild: { id: number, name?: string | null } }> } }> };

export type TwitterTweetContributionFragmentFragment = { id: number, updatedAt: string | Date, createdAt: string | Date, contribution: { date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: string | Date, on_chain_id?: number | null, tx_hash?: string | null, activity_type: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, chain?: { chain_id: string } | null, status: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, user: { address: string, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date }, attestations: Array<{ id: number, user_id: number, date_of_attestation: string | Date, attestation_status?: { id: number, name: string } | null, user: { name?: string | null, address: string, id: number } }>, guilds: Array<{ id: number, guild_id: number, guild: { id: number, name?: string | null } }> } };

export type BulkCreateTwitterTweetMutationVariables = Exact<{
  data: Array<TwitterTweetCreateManyInput> | TwitterTweetCreateManyInput;
  skipDuplicates: Scalars['Boolean'];
}>;


export type BulkCreateTwitterTweetMutation = { createManyTwitterTweet: { count: number } };

export type TwitterAccountFragmentFragment = { account_name: string, createdAt: string | Date, id: number, updatedAt: string | Date, guild?: { id: number, name?: string | null } | null };

export type ListTwitterAccountsQueryVariables = Exact<{
  where?: TwitterAccountWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<TwitterAccountOrderByWithRelationInput> | TwitterAccountOrderByWithRelationInput>;
}>;


export type ListTwitterAccountsQuery = { result: Array<{ account_name: string, createdAt: string | Date, id: number, updatedAt: string | Date, guild?: { id: number, name?: string | null } | null }> };

export type TwitterUserFragmentFragment = { createdAt: string | Date, updatedAt: string | Date, description?: string | null, id: number, twitter_user_id?: string | null, username: string, user?: { id: number } | null };

export type UpsertTwitterUserMutationVariables = Exact<{
  create: TwitterUserCreateInput;
  update: TwitterUserUpdateInput;
  where: TwitterUserWhereUniqueInput;
}>;


export type UpsertTwitterUserMutation = { upsertOneTwitterUser: { createdAt: string | Date, updatedAt: string | Date, description?: string | null, id: number, twitter_user_id?: string | null, username: string, user?: { id: number } | null } };

export type UserFragmentFragment = { address: string, active: boolean, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date, chain_type: { id: number, name: string, createdAt: string | Date, updatedAt: string | Date }, discord_users: Array<{ id: number, active_token: boolean }>, linear_users: Array<{ id: number, active_token?: boolean | null }>, guild_users: Array<{ id: number, user_id: number, guild_id: number, favorite: boolean, guild: { id: number, name?: string | null }, membershipStatus?: { name: string } | null }> };

export type GetUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserQuery = { result?: { address: string, active: boolean, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date, chain_type: { id: number, name: string, createdAt: string | Date, updatedAt: string | Date }, discord_users: Array<{ id: number, active_token: boolean }>, linear_users: Array<{ id: number, active_token?: boolean | null }>, guild_users: Array<{ id: number, user_id: number, guild_id: number, favorite: boolean, guild: { id: number, name?: string | null }, membershipStatus?: { name: string } | null }> } | null };

export type GetUserCustomQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetUserCustomQuery = { result: { address: string, active: boolean, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date, chain_type: { id: number, name: string, createdAt: string | Date, updatedAt: string | Date }, discord_users: Array<{ id: number, active_token: boolean }>, linear_users: Array<{ id: number, active_token?: boolean | null }>, guild_users: Array<{ id: number, user_id: number, guild_id: number, favorite: boolean, guild: { id: number, name?: string | null }, membershipStatus?: { name: string } | null }> } };

export type ListUsersQueryVariables = Exact<{
  where?: UserWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput>;
}>;


export type ListUsersQuery = { result: Array<{ address: string, active: boolean, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date, chain_type: { id: number, name: string, createdAt: string | Date, updatedAt: string | Date }, discord_users: Array<{ id: number, active_token: boolean }>, linear_users: Array<{ id: number, active_token?: boolean | null }>, guild_users: Array<{ id: number, user_id: number, guild_id: number, favorite: boolean, guild: { id: number, name?: string | null }, membershipStatus?: { name: string } | null }> }> };

export type ListUserByAddressQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type ListUserByAddressQuery = { result: Array<{ address: string, active: boolean, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date, chain_type: { id: number, name: string, createdAt: string | Date, updatedAt: string | Date }, discord_users: Array<{ id: number, active_token: boolean }>, linear_users: Array<{ id: number, active_token?: boolean | null }>, guild_users: Array<{ id: number, user_id: number, guild_id: number, favorite: boolean, guild: { id: number, name?: string | null }, membershipStatus?: { name: string } | null }> }> };

export type UpdateUserMutationVariables = Exact<{
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}>;


export type UpdateUserMutation = { updateOneUser?: { address: string, active: boolean, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date, chain_type: { id: number, name: string, createdAt: string | Date, updatedAt: string | Date }, discord_users: Array<{ id: number, active_token: boolean }>, linear_users: Array<{ id: number, active_token?: boolean | null }>, guild_users: Array<{ id: number, user_id: number, guild_id: number, favorite: boolean, guild: { id: number, name?: string | null }, membershipStatus?: { name: string } | null }> } | null };

export type UpdateUserCustomMutationVariables = Exact<{
  data: UserUpdateCustomInput;
}>;


export type UpdateUserCustomMutation = { updateUserCustom: { address: string, active: boolean, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date, chain_type: { id: number, name: string, createdAt: string | Date, updatedAt: string | Date }, discord_users: Array<{ id: number, active_token: boolean }>, linear_users: Array<{ id: number, active_token?: boolean | null }>, guild_users: Array<{ id: number, user_id: number, guild_id: number, favorite: boolean, guild: { id: number, name?: string | null }, membershipStatus?: { name: string } | null }> } };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { createOneUser: { address: string, active: boolean, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date, chain_type: { id: number, name: string, createdAt: string | Date, updatedAt: string | Date }, discord_users: Array<{ id: number, active_token: boolean }>, linear_users: Array<{ id: number, active_token?: boolean | null }>, guild_users: Array<{ id: number, user_id: number, guild_id: number, favorite: boolean, guild: { id: number, name?: string | null }, membershipStatus?: { name: string } | null }> } };

export type CreateUserCustomMutationVariables = Exact<{
  data: UserCreateCustomInput;
}>;


export type CreateUserCustomMutation = { createUserCustom: { address: string, active: boolean, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date, chain_type: { id: number, name: string, createdAt: string | Date, updatedAt: string | Date }, discord_users: Array<{ id: number, active_token: boolean }>, linear_users: Array<{ id: number, active_token?: boolean | null }>, guild_users: Array<{ id: number, user_id: number, guild_id: number, favorite: boolean, guild: { id: number, name?: string | null }, membershipStatus?: { name: string } | null }> } };

export type ContributionFragmentFragment = { date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: string | Date, on_chain_id?: number | null, tx_hash?: string | null, activity_type: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, chain?: { chain_id: string } | null, status: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, user: { address: string, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date }, attestations: Array<{ id: number, user_id: number, date_of_attestation: string | Date, attestation_status?: { id: number, name: string } | null, user: { name?: string | null, address: string, id: number } }>, guilds: Array<{ id: number, guild_id: number, guild: { id: number, name?: string | null } }> };

export type GetContributionQueryVariables = Exact<{
  where: ContributionWhereUniqueInput;
}>;


export type GetContributionQuery = { result?: { date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: string | Date, on_chain_id?: number | null, tx_hash?: string | null, activity_type: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, chain?: { chain_id: string } | null, status: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, user: { address: string, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date }, attestations: Array<{ id: number, user_id: number, date_of_attestation: string | Date, attestation_status?: { id: number, name: string } | null, user: { name?: string | null, address: string, id: number } }>, guilds: Array<{ id: number, guild_id: number, guild: { id: number, name?: string | null } }> } | null };

export type ListContributionsQueryVariables = Exact<{
  where?: ContributionWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<ContributionOrderByWithRelationInput> | ContributionOrderByWithRelationInput>;
}>;


export type ListContributionsQuery = { result: Array<{ date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: string | Date, on_chain_id?: number | null, tx_hash?: string | null, activity_type: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, chain?: { chain_id: string } | null, status: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, user: { address: string, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date }, attestations: Array<{ id: number, user_id: number, date_of_attestation: string | Date, attestation_status?: { id: number, name: string } | null, user: { name?: string | null, address: string, id: number } }>, guilds: Array<{ id: number, guild_id: number, guild: { id: number, name?: string | null } }> }> };

export type GetContributionCountByDateForUserInRangeQueryVariables = Exact<{
  where: GetUserContributionCountInput;
}>;


export type GetContributionCountByDateForUserInRangeQuery = { result: Array<{ count: number, date: string | Date, guild_id?: number | null, name: string }> };

export type GetDaoContributionCountQueryVariables = Exact<{
  where: GetContributionInput;
}>;


export type GetDaoContributionCountQuery = { result: number };

export type GetDaoContributionCountByUserQueryVariables = Exact<{
  where: GetContributionInput;
}>;


export type GetDaoContributionCountByUserQuery = { result: Array<{ count: number, display_name?: string | null, user_id?: number | null, address: string }> };

export type GetContributionCountByActivityTypeQueryVariables = Exact<{
  where: GetContributionInput;
}>;


export type GetContributionCountByActivityTypeQuery = { result: Array<{ count: number, activity_name: string, activity_id: number }> };

export type CreateContributionMutationVariables = Exact<{
  data: ContributionCreateInput;
}>;


export type CreateContributionMutation = { createOneContribution: { date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: string | Date, on_chain_id?: number | null, tx_hash?: string | null, activity_type: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, chain?: { chain_id: string } | null, status: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, user: { address: string, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date }, attestations: Array<{ id: number, user_id: number, date_of_attestation: string | Date, attestation_status?: { id: number, name: string } | null, user: { name?: string | null, address: string, id: number } }>, guilds: Array<{ id: number, guild_id: number, guild: { id: number, name?: string | null } }> } };

export type CreateUserContributionMutationVariables = Exact<{
  data: UserContributionCreateInput;
}>;


export type CreateUserContributionMutation = { createUserContribution: { date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: string | Date, on_chain_id?: number | null, tx_hash?: string | null, activity_type: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, chain?: { chain_id: string } | null, status: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, user: { address: string, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date }, attestations: Array<{ id: number, user_id: number, date_of_attestation: string | Date, attestation_status?: { id: number, name: string } | null, user: { name?: string | null, address: string, id: number } }>, guilds: Array<{ id: number, guild_id: number, guild: { id: number, name?: string | null } }> } };

export type CreateOnChainUserContributionMutationVariables = Exact<{
  data: UserOnChainContributionCreateInput;
}>;


export type CreateOnChainUserContributionMutation = { createOnChainUserContribution: { date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: string | Date, on_chain_id?: number | null, tx_hash?: string | null, activity_type: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, chain?: { chain_id: string } | null, status: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, user: { address: string, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date }, attestations: Array<{ id: number, user_id: number, date_of_attestation: string | Date, attestation_status?: { id: number, name: string } | null, user: { name?: string | null, address: string, id: number } }>, guilds: Array<{ id: number, guild_id: number, guild: { id: number, name?: string | null } }> } };

export type DeleteUserContributionMutationVariables = Exact<{
  where: UserContributionDeleteInput;
}>;


export type DeleteUserContributionMutation = { deleteUserContribution: { id: number } };

export type DeleteContributionMutationVariables = Exact<{
  where: ContributionWhereUniqueInput;
}>;


export type DeleteContributionMutation = { deleteOneContribution?: { id: number } | null };

export type UpdateUserContributionMutationVariables = Exact<{
  data: UserContributionUpdateInput;
}>;


export type UpdateUserContributionMutation = { updateUserContribution: { date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: string | Date, on_chain_id?: number | null, tx_hash?: string | null, activity_type: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, chain?: { chain_id: string } | null, status: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, user: { address: string, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date }, attestations: Array<{ id: number, user_id: number, date_of_attestation: string | Date, attestation_status?: { id: number, name: string } | null, user: { name?: string | null, address: string, id: number } }>, guilds: Array<{ id: number, guild_id: number, guild: { id: number, name?: string | null } }> } };

export type UpdateUserOnChainContributionMutationVariables = Exact<{
  id: Scalars['Float'];
  status: Scalars['String'];
  chainId: Scalars['Float'];
  data: ContributionUpdateManyMutationInput;
}>;


export type UpdateUserOnChainContributionMutation = { updateUserOnChainContribution: { date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: string | Date, on_chain_id?: number | null, tx_hash?: string | null, activity_type: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, chain?: { chain_id: string } | null, status: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, user: { address: string, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date }, attestations: Array<{ id: number, user_id: number, date_of_attestation: string | Date, attestation_status?: { id: number, name: string } | null, user: { name?: string | null, address: string, id: number } }>, guilds: Array<{ id: number, guild_id: number, guild: { id: number, name?: string | null } }> } };

export type BulkCreateContributionMutationVariables = Exact<{
  data: Array<ContributionCreateManyInput> | ContributionCreateManyInput;
  skipDuplicates: Scalars['Boolean'];
}>;


export type BulkCreateContributionMutation = { createManyContribution: { count: number } };

export type UpdateContributionMutationVariables = Exact<{
  data: ContributionUpdateInput;
  where: ContributionWhereUniqueInput;
}>;


export type UpdateContributionMutation = { updateOneContribution?: { date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: string | Date, on_chain_id?: number | null, tx_hash?: string | null, activity_type: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, chain?: { chain_id: string } | null, status: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, user: { address: string, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date }, attestations: Array<{ id: number, user_id: number, date_of_attestation: string | Date, attestation_status?: { id: number, name: string } | null, user: { name?: string | null, address: string, id: number } }>, guilds: Array<{ id: number, guild_id: number, guild: { id: number, name?: string | null } }> } | null };

export type UpsertContributionMutationVariables = Exact<{
  where: ContributionWhereUniqueInput;
  create: ContributionCreateInput;
  update: ContributionUpdateInput;
}>;


export type UpsertContributionMutation = { upsertOneContribution: { date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, updatedAt: string | Date, on_chain_id?: number | null, tx_hash?: string | null, activity_type: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, chain?: { chain_id: string } | null, status: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date }, user: { address: string, createdAt: string | Date, display_name?: string | null, full_name?: string | null, id: number, name?: string | null, updatedAt: string | Date }, attestations: Array<{ id: number, user_id: number, date_of_attestation: string | Date, attestation_status?: { id: number, name: string } | null, user: { name?: string | null, address: string, id: number } }>, guilds: Array<{ id: number, guild_id: number, guild: { id: number, name?: string | null } }> } };

export type GetContributionStatusQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetContributionStatusQuery = { contributionStatuses: Array<{ id: number, name: string }> };

export type ActivityTypeFragmentFragment = { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date };

export type ListActivityTypesQueryVariables = Exact<{
  where?: ActivityTypeWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<ActivityTypeOrderByWithRelationInput> | ActivityTypeOrderByWithRelationInput>;
}>;


export type ListActivityTypesQuery = { result: Array<{ active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date }> };

export type ListActivityTypesByUserQueryVariables = Exact<{
  where: ListActivityTypesByUserInput;
}>;


export type ListActivityTypesByUserQuery = { result: Array<{ id: number, name: string, active: boolean, createdAt: string | Date, updatedAt: string | Date }> };

export type CreateActivityTypeMutationVariables = Exact<{
  data: ActivityTypeCreateInput;
}>;


export type CreateActivityTypeMutation = { createOneActivityType: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date } };

export type GetOrCreateActivityTypeMutationVariables = Exact<{
  data: GetOrCreateActivityTypeInput;
}>;


export type GetOrCreateActivityTypeMutation = { getOrCreateActivityType: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date } };

export type UpsertActivityTypeMutationVariables = Exact<{
  create: ActivityTypeCreateInput;
  update: ActivityTypeUpdateInput;
  where: ActivityTypeWhereUniqueInput;
}>;


export type UpsertActivityTypeMutation = { upsertOneActivityType: { active: boolean, createdAt: string | Date, id: number, name: string, updatedAt: string | Date } };

export type UserActivityFragmentFragment = { createdAt: string | Date, id: number, updatedAt: string | Date, activity_type: { id: number }, user: { id: number } };

export type CreateUserActivityMutationVariables = Exact<{
  data: UserActivityCreateInput;
}>;


export type CreateUserActivityMutation = { createOneUserActivity: { createdAt: string | Date, id: number, updatedAt: string | Date, activity_type: { id: number }, user: { id: number } } };

export type ListAttestationsQueryVariables = Exact<{
  where?: AttestationWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput> | AttestationOrderByWithRelationInput>;
}>;


export type ListAttestationsQuery = { result: Array<{ date_of_attestation: string | Date, id: number, updatedAt: string | Date, confidence?: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date } | null, contribution: { activity_type_id: number, date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: string | Date, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } }> };

export type CreateAttestationMutationVariables = Exact<{
  data: AttestationCreateInput;
}>;


export type CreateAttestationMutation = { createOneAttestation: { date_of_attestation: string | Date, id: number, updatedAt: string | Date, confidence?: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date } | null, contribution: { activity_type_id: number, date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: string | Date, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } } };

export type CreateUserOnChainAttestationMutationVariables = Exact<{
  data: AttestationUserOnChainCreateInput;
}>;


export type CreateUserOnChainAttestationMutation = { createUserOnChainAttestation: { date_of_attestation: string | Date, id: number, updatedAt: string | Date, confidence?: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date } | null, contribution: { activity_type_id: number, date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: string | Date, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } } };

export type UpdateUserOnChainAttestationMutationVariables = Exact<{
  id: Scalars['Float'];
  status: Scalars['String'];
  data: AttestationUpdateManyMutationInput;
}>;


export type UpdateUserOnChainAttestationMutation = { updateUserOnChainAttestation: { date_of_attestation: string | Date, id: number, updatedAt: string | Date, confidence?: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date } | null, contribution: { activity_type_id: number, date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: string | Date, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } } };

export type BulkCreateAttestationMutationVariables = Exact<{
  data: Array<AttestationCreateManyInput> | AttestationCreateManyInput;
  skipDuplicates: Scalars['Boolean'];
}>;


export type BulkCreateAttestationMutation = { createManyAttestation: { count: number } };

export type UpdateAttestationMutationVariables = Exact<{
  data: AttestationUpdateInput;
  where: AttestationWhereUniqueInput;
}>;


export type UpdateAttestationMutation = { updateOneAttestation?: { date_of_attestation: string | Date, id: number, updatedAt: string | Date, confidence?: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date } | null, contribution: { activity_type_id: number, date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: string | Date, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } } | null };

export type UpsertAttestationMutationVariables = Exact<{
  where: AttestationWhereUniqueInput;
  create: AttestationCreateInput;
  update: AttestationUpdateInput;
}>;


export type UpsertAttestationMutation = { upsertOneAttestation: { date_of_attestation: string | Date, id: number, updatedAt: string | Date, confidence?: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date } | null, contribution: { activity_type_id: number, date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: string | Date, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } } };

export type PartnerFragmentFragment = { createdAt: string | Date, updatedAt: string | Date, contribution: { activity_type_id: number, date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: string | Date, user_id: number }, user: { name?: string | null, address: string, id: number } };

export type ListPartnersQueryVariables = Exact<{
  where?: PartnerWhereInput;
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<PartnerOrderByWithRelationInput> | PartnerOrderByWithRelationInput>;
}>;


export type ListPartnersQuery = { result: Array<{ createdAt: string | Date, updatedAt: string | Date, contribution: { activity_type_id: number, date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: string | Date, user_id: number }, user: { name?: string | null, address: string, id: number } }> };

export type AttestationFragmentFragment = { date_of_attestation: string | Date, id: number, updatedAt: string | Date, confidence?: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date } | null, contribution: { activity_type_id: number, date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: string | Date, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } };

export type CreateUserAttestationMutationVariables = Exact<{
  data: AttestationUserCreateInput;
}>;


export type CreateUserAttestationMutation = { createUserAttestation: { date_of_attestation: string | Date, id: number, updatedAt: string | Date, confidence?: { createdAt: string | Date, id: number, name: string, updatedAt: string | Date } | null, contribution: { activity_type_id: number, date_of_engagement: string | Date, date_of_submission: string | Date, details?: string | null, id: number, name: string, proof?: string | null, status_id: number, updatedAt: string | Date, user_id: number, on_chain_id?: number | null }, user: { name?: string | null, address: string, id: number } } };

export type ChainFragmentFragment = { id: number, createdAt: string | Date, updatedAt: string | Date, name: string, chain_id: string };

export type GetChainQueryVariables = Exact<{
  where: ChainWhereUniqueInput;
}>;


export type GetChainQuery = { result?: { id: number, createdAt: string | Date, updatedAt: string | Date, name: string, chain_id: string } | null };

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
export const LinearIssueFragmentFragmentDoc = gql`
    fragment LinearIssueFragment on LinearIssue {
  id
  completedAt
  createdAt
}
    `;
export const LinearUserFragmentFragmentDoc = gql`
    fragment LinearUserFragment on LinearUser {
  id
  active
  displayName
  email
  linear_id
  name
  url
  createdAt
  access_token
  active_token
  user_id
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
  contribution_reporting_channel
  status
}
    `;
export const GuildUserFragmentFragmentDoc = gql`
    fragment GuildUserFragment on GuildUser {
  id
  createdAt
  updatedAt
  favorite
  user_id
  user {
    name
    display_name
    address
  }
  guild {
    id
    name
  }
  membershipStatus {
    id
    createdAt
    updatedAt
    name
  }
}
    `;
export const GuildImportFragmentFragmentDoc = gql`
    fragment GuildImportFragment on GuildImport {
  id
  createdAt
  updatedAt
  guild_id
  guild {
    id
    name
  }
  integration_type_id
  integration_type {
    id
    name
  }
  authentication_token
  import_status {
    id
    createdAt
    updatedAt
    name
  }
  users {
    user_id
  }
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
  chain {
    chain_id
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
    attestation_status {
      id
      name
    }
    user {
      name
      address
      id
    }
  }
  guilds {
    id
    guild_id
    guild {
      id
      name
    }
  }
  on_chain_id
  tx_hash
}
    `;
export const TwitterTweetContributionFragmentFragmentDoc = gql`
    fragment TwitterTweetContributionFragment on TwitterTweetContribution {
  id
  updatedAt
  createdAt
  contribution {
    ...ContributionFragment
  }
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
  twitter_tweet_contributions {
    ...TwitterTweetContributionFragment
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
  discord_users {
    id
    active_token
  }
  linear_users {
    id
    active_token
  }
  guild_users {
    id
    user_id
    guild_id
    guild {
      id
      name
    }
    favorite
    membershipStatus {
      name
    }
  }
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
export const ChainFragmentFragmentDoc = gql`
    fragment ChainFragment on Chain {
  id
  createdAt
  updatedAt
  name
  chain_id
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
export const ListLinearIssuesDocument = gql`
    query listLinearIssues($where: LinearIssueWhereInput! = {}, $skip: Int! = 0, $first: Int! = 10, $orderBy: [LinearIssueOrderByWithRelationInput!]) {
  result: linearIssues(
    where: $where
    skip: $skip
    take: $first
    orderBy: $orderBy
  ) {
    ...LinearIssueFragment
  }
}
    ${LinearIssueFragmentFragmentDoc}`;
export const BulkCreateIssuesDocument = gql`
    mutation bulkCreateIssues($data: [LinearIssueCreateManyInput!]!, $skipDuplicates: Boolean!) {
  createManyLinearIssue(data: $data, skipDuplicates: $skipDuplicates) {
    count
  }
}
    `;
export const ListLinearUsersDocument = gql`
    query listLinearUsers($where: LinearUserWhereInput! = {}, $skip: Int! = 0, $first: Int! = 10, $orderBy: [LinearUserOrderByWithRelationInput!]) {
  result: linearUsers(where: $where, skip: $skip, take: $first, orderBy: $orderBy) {
    ...LinearUserFragment
  }
}
    ${LinearUserFragmentFragmentDoc}`;
export const UpsertLinearUserDocument = gql`
    mutation upsertLinearUser($create: LinearUserCreateInput!, $update: LinearUserUpdateInput!, $where: LinearUserWhereUniqueInput!) {
  upsertOneLinearUser(create: $create, update: $update, where: $where) {
    ...LinearUserFragment
  }
}
    ${LinearUserFragmentFragmentDoc}`;
export const UpdateLinearUserDocument = gql`
    mutation updateLinearUser($data: LinearUserUpdateInput!, $where: LinearUserWhereUniqueInput!) {
  updateOneLinearUser(data: $data, where: $where) {
    ...LinearUserFragment
  }
}
    ${LinearUserFragmentFragmentDoc}`;
export const UpsertLinearCycleDocument = gql`
    mutation upsertLinearCycle($create: LinearCycleCreateInput!, $update: LinearCycleUpdateInput!, $where: LinearCycleWhereUniqueInput!) {
  upsertOneLinearCycle(create: $create, update: $update, where: $where) {
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
  upsertOneLinearProject(create: $create, update: $update, where: $where) {
    id
    linear_id
    name
  }
}
    `;
export const UpsertLinearTeamDocument = gql`
    mutation upsertLinearTeam($create: LinearTeamCreateInput!, $update: LinearTeamUpdateInput!, $where: LinearTeamWhereUniqueInput!) {
  upsertOneLinearTeam(create: $create, update: $update, where: $where) {
    id
    key
    name
    linear_id
  }
}
    `;
export const CreateJobRunDocument = gql`
    mutation createJobRun($data: JobRunCreateInput!) {
  createOneJobRun(data: $data) {
    completedDate
    startDate
    name
  }
}
    `;
export const CreateGuildDocument = gql`
    mutation createGuild($data: GuildCreateInput!) {
  createOneGuild(data: $data) {
    congrats_channel
    discord_id
    logo
    name
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
export const UpdateGuildCustomDocument = gql`
    mutation updateGuildCustom($data: GuildUpdateCustomInput!, $where: GuildUpdateCustomWhereInput!) {
  updateGuildCustom(data: $data, where: $where) {
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
export const GetActiveGuildUsersAverageDocument = gql`
    query getActiveGuildUsersAverage($where: GetActiveUsersInput!) {
  result: getActiveGuildUsersAverage(where: $where)
}
    `;
export const CreateGuildUserCustomDocument = gql`
    mutation createGuildUserCustom($data: GuildUserCreateCustomInput!) {
  createGuildUserCustom(data: $data) {
    id
    guild_id
  }
}
    `;
export const DeleteGuildUserDocument = gql`
    mutation deleteGuildUser($where: GuildUserWhereUniqueInput!) {
  deleteOneGuildUser(where: $where) {
    id
  }
}
    `;
export const ListGuildUsersDocument = gql`
    query listGuildUsers($where: GuildUserWhereInput! = {}, $skip: Int! = 0, $first: Int! = 10, $orderBy: [GuildUserOrderByWithRelationInput!]) {
  result: guildUsers(where: $where, skip: $skip, take: $first, orderBy: $orderBy) {
    ...GuildUserFragment
  }
}
    ${GuildUserFragmentFragmentDoc}`;
export const UpdateGuildUserCustomDocument = gql`
    mutation updateGuildUserCustom($data: GuildUserUpdateCustomInput!) {
  updateGuildUserCustom(data: $data) {
    ...GuildUserFragment
  }
}
    ${GuildUserFragmentFragmentDoc}`;
export const ListGuildImportsDocument = gql`
    query listGuildImports($where: GuildImportWhereInput! = {}, $skip: Int! = 0, $first: Int! = 10, $orderBy: [GuildImportOrderByWithRelationInput!]) {
  result: guildImports(
    where: $where
    skip: $skip
    take: $first
    orderBy: $orderBy
  ) {
    ...GuildImportFragment
  }
}
    ${GuildImportFragmentFragmentDoc}`;
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
  upsertOneTwitterUser(create: $create, update: $update, where: $where) {
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
  updateOneUser(data: $data, where: $where) {
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
  createOneUser(data: $data) {
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
export const GetContributionCountByDateForUserInRangeDocument = gql`
    query getContributionCountByDateForUserInRange($where: GetUserContributionCountInput!) {
  result: getContributionCountByDateForUserInRange(where: $where) {
    count
    date
    guild_id
    name
  }
}
    `;
export const GetDaoContributionCountDocument = gql`
    query getDaoContributionCount($where: GetContributionInput!) {
  result: getDaoContributionCount(where: $where)
}
    `;
export const GetDaoContributionCountByUserDocument = gql`
    query getDaoContributionCountByUser($where: GetContributionInput!) {
  result: getDaoContributionCountByUser(where: $where) {
    count
    display_name
    user_id
    address
  }
}
    `;
export const GetContributionCountByActivityTypeDocument = gql`
    query getContributionCountByActivityType($where: GetContributionInput!) {
  result: getContributionCountByActivityType(where: $where) {
    count
    activity_name
    activity_id
  }
}
    `;
export const CreateContributionDocument = gql`
    mutation createContribution($data: ContributionCreateInput!) {
  createOneContribution(data: $data) {
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
export const DeleteUserContributionDocument = gql`
    mutation deleteUserContribution($where: UserContributionDeleteInput!) {
  deleteUserContribution(where: $where) {
    id
  }
}
    `;
export const DeleteContributionDocument = gql`
    mutation deleteContribution($where: ContributionWhereUniqueInput!) {
  deleteOneContribution(where: $where) {
    id
  }
}
    `;
export const UpdateUserContributionDocument = gql`
    mutation updateUserContribution($data: UserContributionUpdateInput!) {
  updateUserContribution(data: $data) {
    ...ContributionFragment
  }
}
    ${ContributionFragmentFragmentDoc}`;
export const UpdateUserOnChainContributionDocument = gql`
    mutation updateUserOnChainContribution($id: Float!, $status: String!, $chainId: Float!, $data: ContributionUpdateManyMutationInput!) {
  updateUserOnChainContribution(
    id: $id
    status: $status
    chainId: $chainId
    data: $data
  ) {
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
  updateOneContribution(data: $data, where: $where) {
    ...ContributionFragment
  }
}
    ${ContributionFragmentFragmentDoc}`;
export const UpsertContributionDocument = gql`
    mutation upsertContribution($where: ContributionWhereUniqueInput!, $create: ContributionCreateInput!, $update: ContributionUpdateInput!) {
  upsertOneContribution(where: $where, create: $create, update: $update) {
    ...ContributionFragment
  }
}
    ${ContributionFragmentFragmentDoc}`;
export const GetContributionStatusDocument = gql`
    query getContributionStatus($name: String!) {
  contributionStatuses(where: {name: {equals: $name}}) {
    id
    name
  }
}
    `;
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
export const ListActivityTypesByUserDocument = gql`
    query listActivityTypesByUser($where: ListActivityTypesByUserInput!) {
  result: listActivityTypesByUser(where: $where) {
    id
    name
    active
    createdAt
    updatedAt
  }
}
    `;
export const CreateActivityTypeDocument = gql`
    mutation createActivityType($data: ActivityTypeCreateInput!) {
  createOneActivityType(data: $data) {
    ...ActivityTypeFragment
  }
}
    ${ActivityTypeFragmentFragmentDoc}`;
export const GetOrCreateActivityTypeDocument = gql`
    mutation getOrCreateActivityType($data: GetOrCreateActivityTypeInput!) {
  getOrCreateActivityType(data: $data) {
    ...ActivityTypeFragment
  }
}
    ${ActivityTypeFragmentFragmentDoc}`;
export const UpsertActivityTypeDocument = gql`
    mutation upsertActivityType($create: ActivityTypeCreateInput!, $update: ActivityTypeUpdateInput!, $where: ActivityTypeWhereUniqueInput!) {
  upsertOneActivityType(create: $create, update: $update, where: $where) {
    ...ActivityTypeFragment
  }
}
    ${ActivityTypeFragmentFragmentDoc}`;
export const CreateUserActivityDocument = gql`
    mutation createUserActivity($data: UserActivityCreateInput!) {
  createOneUserActivity(data: $data) {
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
  createOneAttestation(data: $data) {
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
    mutation updateUserOnChainAttestation($id: Float!, $status: String!, $data: AttestationUpdateManyMutationInput!) {
  updateUserOnChainAttestation(id: $id, status: $status, data: $data) {
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
  updateOneAttestation(data: $data, where: $where) {
    ...AttestationFragment
  }
}
    ${AttestationFragmentFragmentDoc}`;
export const UpsertAttestationDocument = gql`
    mutation upsertAttestation($where: AttestationWhereUniqueInput!, $create: AttestationCreateInput!, $update: AttestationUpdateInput!) {
  upsertOneAttestation(where: $where, create: $create, update: $update) {
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
export const GetChainDocument = gql`
    query getChain($where: ChainWhereUniqueInput!) {
  result: chain(where: $where) {
    ...ChainFragment
  }
}
    ${ChainFragmentFragmentDoc}`;

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
    listLinearIssues(variables?: ListLinearIssuesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListLinearIssuesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListLinearIssuesQuery>(ListLinearIssuesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listLinearIssues', 'query');
    },
    bulkCreateIssues(variables: BulkCreateIssuesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BulkCreateIssuesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<BulkCreateIssuesMutation>(BulkCreateIssuesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'bulkCreateIssues', 'mutation');
    },
    listLinearUsers(variables?: ListLinearUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListLinearUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListLinearUsersQuery>(ListLinearUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listLinearUsers', 'query');
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
    getGuild(variables: GetGuildQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetGuildQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGuildQuery>(GetGuildDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getGuild', 'query');
    },
    updateGuildCustom(variables: UpdateGuildCustomMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateGuildCustomMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateGuildCustomMutation>(UpdateGuildCustomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateGuildCustom', 'mutation');
    },
    listGuilds(variables?: ListGuildsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListGuildsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListGuildsQuery>(ListGuildsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listGuilds', 'query');
    },
    getActiveGuildUsersAverage(variables: GetActiveGuildUsersAverageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetActiveGuildUsersAverageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetActiveGuildUsersAverageQuery>(GetActiveGuildUsersAverageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getActiveGuildUsersAverage', 'query');
    },
    createGuildUserCustom(variables: CreateGuildUserCustomMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateGuildUserCustomMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateGuildUserCustomMutation>(CreateGuildUserCustomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createGuildUserCustom', 'mutation');
    },
    deleteGuildUser(variables: DeleteGuildUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteGuildUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteGuildUserMutation>(DeleteGuildUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteGuildUser', 'mutation');
    },
    listGuildUsers(variables?: ListGuildUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListGuildUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListGuildUsersQuery>(ListGuildUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listGuildUsers', 'query');
    },
    updateGuildUserCustom(variables: UpdateGuildUserCustomMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateGuildUserCustomMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateGuildUserCustomMutation>(UpdateGuildUserCustomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateGuildUserCustom', 'mutation');
    },
    listGuildImports(variables?: ListGuildImportsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListGuildImportsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListGuildImportsQuery>(ListGuildImportsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listGuildImports', 'query');
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
    getContributionCountByDateForUserInRange(variables: GetContributionCountByDateForUserInRangeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetContributionCountByDateForUserInRangeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetContributionCountByDateForUserInRangeQuery>(GetContributionCountByDateForUserInRangeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContributionCountByDateForUserInRange', 'query');
    },
    getDaoContributionCount(variables: GetDaoContributionCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDaoContributionCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDaoContributionCountQuery>(GetDaoContributionCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDaoContributionCount', 'query');
    },
    getDaoContributionCountByUser(variables: GetDaoContributionCountByUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDaoContributionCountByUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDaoContributionCountByUserQuery>(GetDaoContributionCountByUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDaoContributionCountByUser', 'query');
    },
    getContributionCountByActivityType(variables: GetContributionCountByActivityTypeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetContributionCountByActivityTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetContributionCountByActivityTypeQuery>(GetContributionCountByActivityTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContributionCountByActivityType', 'query');
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
    deleteUserContribution(variables: DeleteUserContributionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserContributionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserContributionMutation>(DeleteUserContributionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserContribution', 'mutation');
    },
    deleteContribution(variables: DeleteContributionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteContributionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteContributionMutation>(DeleteContributionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteContribution', 'mutation');
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
    upsertContribution(variables: UpsertContributionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertContributionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertContributionMutation>(UpsertContributionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertContribution', 'mutation');
    },
    getContributionStatus(variables: GetContributionStatusQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetContributionStatusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetContributionStatusQuery>(GetContributionStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContributionStatus', 'query');
    },
    listActivityTypes(variables?: ListActivityTypesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListActivityTypesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListActivityTypesQuery>(ListActivityTypesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listActivityTypes', 'query');
    },
    listActivityTypesByUser(variables: ListActivityTypesByUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListActivityTypesByUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListActivityTypesByUserQuery>(ListActivityTypesByUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listActivityTypesByUser', 'query');
    },
    createActivityType(variables: CreateActivityTypeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateActivityTypeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateActivityTypeMutation>(CreateActivityTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createActivityType', 'mutation');
    },
    getOrCreateActivityType(variables: GetOrCreateActivityTypeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetOrCreateActivityTypeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOrCreateActivityTypeMutation>(GetOrCreateActivityTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getOrCreateActivityType', 'mutation');
    },
    upsertActivityType(variables: UpsertActivityTypeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertActivityTypeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertActivityTypeMutation>(UpsertActivityTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertActivityType', 'mutation');
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
    upsertAttestation(variables: UpsertAttestationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertAttestationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertAttestationMutation>(UpsertAttestationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertAttestation', 'mutation');
    },
    listPartners(variables?: ListPartnersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListPartnersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListPartnersQuery>(ListPartnersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listPartners', 'query');
    },
    createUserAttestation(variables: CreateUserAttestationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserAttestationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserAttestationMutation>(CreateUserAttestationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserAttestation', 'mutation');
    },
    getChain(variables: GetChainQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetChainQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetChainQuery>(GetChainDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getChain', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
