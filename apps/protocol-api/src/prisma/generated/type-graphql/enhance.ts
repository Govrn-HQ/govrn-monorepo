import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Guild: crudResolvers.GuildCrudResolver,
  GuildContribution: crudResolvers.GuildContributionCrudResolver,
  ChainType: crudResolvers.ChainTypeCrudResolver,
  Contribution: crudResolvers.ContributionCrudResolver,
  Partner: crudResolvers.PartnerCrudResolver,
  Attestation: crudResolvers.AttestationCrudResolver,
  AttestationConfidence: crudResolvers.AttestationConfidenceCrudResolver,
  ContributionStatus: crudResolvers.ContributionStatusCrudResolver,
  ActivityType: crudResolvers.ActivityTypeCrudResolver,
  UserActivity: crudResolvers.UserActivityCrudResolver,
  CategoryActivity: crudResolvers.CategoryActivityCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Guild: {
    guild: actionResolvers.FindUniqueGuildResolver,
    findFirstGuild: actionResolvers.FindFirstGuildResolver,
    guilds: actionResolvers.FindManyGuildResolver,
    createGuild: actionResolvers.CreateGuildResolver,
    createManyGuild: actionResolvers.CreateManyGuildResolver,
    deleteGuild: actionResolvers.DeleteGuildResolver,
    updateGuild: actionResolvers.UpdateGuildResolver,
    deleteManyGuild: actionResolvers.DeleteManyGuildResolver,
    updateManyGuild: actionResolvers.UpdateManyGuildResolver,
    upsertGuild: actionResolvers.UpsertGuildResolver,
    aggregateGuild: actionResolvers.AggregateGuildResolver,
    groupByGuild: actionResolvers.GroupByGuildResolver
  },
  GuildContribution: {
    guildContribution: actionResolvers.FindUniqueGuildContributionResolver,
    findFirstGuildContribution: actionResolvers.FindFirstGuildContributionResolver,
    guildContributions: actionResolvers.FindManyGuildContributionResolver,
    createGuildContribution: actionResolvers.CreateGuildContributionResolver,
    createManyGuildContribution: actionResolvers.CreateManyGuildContributionResolver,
    deleteGuildContribution: actionResolvers.DeleteGuildContributionResolver,
    updateGuildContribution: actionResolvers.UpdateGuildContributionResolver,
    deleteManyGuildContribution: actionResolvers.DeleteManyGuildContributionResolver,
    updateManyGuildContribution: actionResolvers.UpdateManyGuildContributionResolver,
    upsertGuildContribution: actionResolvers.UpsertGuildContributionResolver,
    aggregateGuildContribution: actionResolvers.AggregateGuildContributionResolver,
    groupByGuildContribution: actionResolvers.GroupByGuildContributionResolver
  },
  ChainType: {
    chainType: actionResolvers.FindUniqueChainTypeResolver,
    findFirstChainType: actionResolvers.FindFirstChainTypeResolver,
    chainTypes: actionResolvers.FindManyChainTypeResolver,
    createChainType: actionResolvers.CreateChainTypeResolver,
    createManyChainType: actionResolvers.CreateManyChainTypeResolver,
    deleteChainType: actionResolvers.DeleteChainTypeResolver,
    updateChainType: actionResolvers.UpdateChainTypeResolver,
    deleteManyChainType: actionResolvers.DeleteManyChainTypeResolver,
    updateManyChainType: actionResolvers.UpdateManyChainTypeResolver,
    upsertChainType: actionResolvers.UpsertChainTypeResolver,
    aggregateChainType: actionResolvers.AggregateChainTypeResolver,
    groupByChainType: actionResolvers.GroupByChainTypeResolver
  },
  Contribution: {
    contribution: actionResolvers.FindUniqueContributionResolver,
    findFirstContribution: actionResolvers.FindFirstContributionResolver,
    contributions: actionResolvers.FindManyContributionResolver,
    createContribution: actionResolvers.CreateContributionResolver,
    createManyContribution: actionResolvers.CreateManyContributionResolver,
    deleteContribution: actionResolvers.DeleteContributionResolver,
    updateContribution: actionResolvers.UpdateContributionResolver,
    deleteManyContribution: actionResolvers.DeleteManyContributionResolver,
    updateManyContribution: actionResolvers.UpdateManyContributionResolver,
    upsertContribution: actionResolvers.UpsertContributionResolver,
    aggregateContribution: actionResolvers.AggregateContributionResolver,
    groupByContribution: actionResolvers.GroupByContributionResolver
  },
  Partner: {
    partner: actionResolvers.FindUniquePartnerResolver,
    findFirstPartner: actionResolvers.FindFirstPartnerResolver,
    partners: actionResolvers.FindManyPartnerResolver,
    createPartner: actionResolvers.CreatePartnerResolver,
    createManyPartner: actionResolvers.CreateManyPartnerResolver,
    deletePartner: actionResolvers.DeletePartnerResolver,
    updatePartner: actionResolvers.UpdatePartnerResolver,
    deleteManyPartner: actionResolvers.DeleteManyPartnerResolver,
    updateManyPartner: actionResolvers.UpdateManyPartnerResolver,
    upsertPartner: actionResolvers.UpsertPartnerResolver,
    aggregatePartner: actionResolvers.AggregatePartnerResolver,
    groupByPartner: actionResolvers.GroupByPartnerResolver
  },
  Attestation: {
    attestation: actionResolvers.FindUniqueAttestationResolver,
    findFirstAttestation: actionResolvers.FindFirstAttestationResolver,
    attestations: actionResolvers.FindManyAttestationResolver,
    createAttestation: actionResolvers.CreateAttestationResolver,
    createManyAttestation: actionResolvers.CreateManyAttestationResolver,
    deleteAttestation: actionResolvers.DeleteAttestationResolver,
    updateAttestation: actionResolvers.UpdateAttestationResolver,
    deleteManyAttestation: actionResolvers.DeleteManyAttestationResolver,
    updateManyAttestation: actionResolvers.UpdateManyAttestationResolver,
    upsertAttestation: actionResolvers.UpsertAttestationResolver,
    aggregateAttestation: actionResolvers.AggregateAttestationResolver,
    groupByAttestation: actionResolvers.GroupByAttestationResolver
  },
  AttestationConfidence: {
    attestationConfidence: actionResolvers.FindUniqueAttestationConfidenceResolver,
    findFirstAttestationConfidence: actionResolvers.FindFirstAttestationConfidenceResolver,
    attestationConfidences: actionResolvers.FindManyAttestationConfidenceResolver,
    createAttestationConfidence: actionResolvers.CreateAttestationConfidenceResolver,
    createManyAttestationConfidence: actionResolvers.CreateManyAttestationConfidenceResolver,
    deleteAttestationConfidence: actionResolvers.DeleteAttestationConfidenceResolver,
    updateAttestationConfidence: actionResolvers.UpdateAttestationConfidenceResolver,
    deleteManyAttestationConfidence: actionResolvers.DeleteManyAttestationConfidenceResolver,
    updateManyAttestationConfidence: actionResolvers.UpdateManyAttestationConfidenceResolver,
    upsertAttestationConfidence: actionResolvers.UpsertAttestationConfidenceResolver,
    aggregateAttestationConfidence: actionResolvers.AggregateAttestationConfidenceResolver,
    groupByAttestationConfidence: actionResolvers.GroupByAttestationConfidenceResolver
  },
  ContributionStatus: {
    contributionStatus: actionResolvers.FindUniqueContributionStatusResolver,
    findFirstContributionStatus: actionResolvers.FindFirstContributionStatusResolver,
    contributionStatuses: actionResolvers.FindManyContributionStatusResolver,
    createContributionStatus: actionResolvers.CreateContributionStatusResolver,
    createManyContributionStatus: actionResolvers.CreateManyContributionStatusResolver,
    deleteContributionStatus: actionResolvers.DeleteContributionStatusResolver,
    updateContributionStatus: actionResolvers.UpdateContributionStatusResolver,
    deleteManyContributionStatus: actionResolvers.DeleteManyContributionStatusResolver,
    updateManyContributionStatus: actionResolvers.UpdateManyContributionStatusResolver,
    upsertContributionStatus: actionResolvers.UpsertContributionStatusResolver,
    aggregateContributionStatus: actionResolvers.AggregateContributionStatusResolver,
    groupByContributionStatus: actionResolvers.GroupByContributionStatusResolver
  },
  ActivityType: {
    activityType: actionResolvers.FindUniqueActivityTypeResolver,
    findFirstActivityType: actionResolvers.FindFirstActivityTypeResolver,
    activityTypes: actionResolvers.FindManyActivityTypeResolver,
    createActivityType: actionResolvers.CreateActivityTypeResolver,
    createManyActivityType: actionResolvers.CreateManyActivityTypeResolver,
    deleteActivityType: actionResolvers.DeleteActivityTypeResolver,
    updateActivityType: actionResolvers.UpdateActivityTypeResolver,
    deleteManyActivityType: actionResolvers.DeleteManyActivityTypeResolver,
    updateManyActivityType: actionResolvers.UpdateManyActivityTypeResolver,
    upsertActivityType: actionResolvers.UpsertActivityTypeResolver,
    aggregateActivityType: actionResolvers.AggregateActivityTypeResolver,
    groupByActivityType: actionResolvers.GroupByActivityTypeResolver
  },
  UserActivity: {
    userActivity: actionResolvers.FindUniqueUserActivityResolver,
    findFirstUserActivity: actionResolvers.FindFirstUserActivityResolver,
    userActivities: actionResolvers.FindManyUserActivityResolver,
    createUserActivity: actionResolvers.CreateUserActivityResolver,
    createManyUserActivity: actionResolvers.CreateManyUserActivityResolver,
    deleteUserActivity: actionResolvers.DeleteUserActivityResolver,
    updateUserActivity: actionResolvers.UpdateUserActivityResolver,
    deleteManyUserActivity: actionResolvers.DeleteManyUserActivityResolver,
    updateManyUserActivity: actionResolvers.UpdateManyUserActivityResolver,
    upsertUserActivity: actionResolvers.UpsertUserActivityResolver,
    aggregateUserActivity: actionResolvers.AggregateUserActivityResolver,
    groupByUserActivity: actionResolvers.GroupByUserActivityResolver
  },
  CategoryActivity: {
    categoryActivity: actionResolvers.FindUniqueCategoryActivityResolver,
    findFirstCategoryActivity: actionResolvers.FindFirstCategoryActivityResolver,
    categoryActivities: actionResolvers.FindManyCategoryActivityResolver,
    createCategoryActivity: actionResolvers.CreateCategoryActivityResolver,
    createManyCategoryActivity: actionResolvers.CreateManyCategoryActivityResolver,
    deleteCategoryActivity: actionResolvers.DeleteCategoryActivityResolver,
    updateCategoryActivity: actionResolvers.UpdateCategoryActivityResolver,
    deleteManyCategoryActivity: actionResolvers.DeleteManyCategoryActivityResolver,
    updateManyCategoryActivity: actionResolvers.UpdateManyCategoryActivityResolver,
    upsertCategoryActivity: actionResolvers.UpsertCategoryActivityResolver,
    aggregateCategoryActivity: actionResolvers.AggregateCategoryActivityResolver,
    groupByCategoryActivity: actionResolvers.GroupByCategoryActivityResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Guild: ["guild", "findFirstGuild", "guilds", "createGuild", "createManyGuild", "deleteGuild", "updateGuild", "deleteManyGuild", "updateManyGuild", "upsertGuild", "aggregateGuild", "groupByGuild"],
  GuildContribution: ["guildContribution", "findFirstGuildContribution", "guildContributions", "createGuildContribution", "createManyGuildContribution", "deleteGuildContribution", "updateGuildContribution", "deleteManyGuildContribution", "updateManyGuildContribution", "upsertGuildContribution", "aggregateGuildContribution", "groupByGuildContribution"],
  ChainType: ["chainType", "findFirstChainType", "chainTypes", "createChainType", "createManyChainType", "deleteChainType", "updateChainType", "deleteManyChainType", "updateManyChainType", "upsertChainType", "aggregateChainType", "groupByChainType"],
  Contribution: ["contribution", "findFirstContribution", "contributions", "createContribution", "createManyContribution", "deleteContribution", "updateContribution", "deleteManyContribution", "updateManyContribution", "upsertContribution", "aggregateContribution", "groupByContribution"],
  Partner: ["partner", "findFirstPartner", "partners", "createPartner", "createManyPartner", "deletePartner", "updatePartner", "deleteManyPartner", "updateManyPartner", "upsertPartner", "aggregatePartner", "groupByPartner"],
  Attestation: ["attestation", "findFirstAttestation", "attestations", "createAttestation", "createManyAttestation", "deleteAttestation", "updateAttestation", "deleteManyAttestation", "updateManyAttestation", "upsertAttestation", "aggregateAttestation", "groupByAttestation"],
  AttestationConfidence: ["attestationConfidence", "findFirstAttestationConfidence", "attestationConfidences", "createAttestationConfidence", "createManyAttestationConfidence", "deleteAttestationConfidence", "updateAttestationConfidence", "deleteManyAttestationConfidence", "updateManyAttestationConfidence", "upsertAttestationConfidence", "aggregateAttestationConfidence", "groupByAttestationConfidence"],
  ContributionStatus: ["contributionStatus", "findFirstContributionStatus", "contributionStatuses", "createContributionStatus", "createManyContributionStatus", "deleteContributionStatus", "updateContributionStatus", "deleteManyContributionStatus", "updateManyContributionStatus", "upsertContributionStatus", "aggregateContributionStatus", "groupByContributionStatus"],
  ActivityType: ["activityType", "findFirstActivityType", "activityTypes", "createActivityType", "createManyActivityType", "deleteActivityType", "updateActivityType", "deleteManyActivityType", "updateManyActivityType", "upsertActivityType", "aggregateActivityType", "groupByActivityType"],
  UserActivity: ["userActivity", "findFirstUserActivity", "userActivities", "createUserActivity", "createManyUserActivity", "deleteUserActivity", "updateUserActivity", "deleteManyUserActivity", "updateManyUserActivity", "upsertUserActivity", "aggregateUserActivity", "groupByUserActivity"],
  CategoryActivity: ["categoryActivity", "findFirstCategoryActivity", "categoryActivities", "createCategoryActivity", "createManyCategoryActivity", "deleteCategoryActivity", "updateCategoryActivity", "deleteManyCategoryActivity", "updateManyCategoryActivity", "upsertCategoryActivity", "aggregateCategoryActivity", "groupByCategoryActivity"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueGuildArgs: ["where"],
  FindFirstGuildArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyGuildArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateGuildArgs: ["data"],
  CreateManyGuildArgs: ["data", "skipDuplicates"],
  DeleteGuildArgs: ["where"],
  UpdateGuildArgs: ["data", "where"],
  DeleteManyGuildArgs: ["where"],
  UpdateManyGuildArgs: ["data", "where"],
  UpsertGuildArgs: ["where", "create", "update"],
  AggregateGuildArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByGuildArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueGuildContributionArgs: ["where"],
  FindFirstGuildContributionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyGuildContributionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateGuildContributionArgs: ["data"],
  CreateManyGuildContributionArgs: ["data", "skipDuplicates"],
  DeleteGuildContributionArgs: ["where"],
  UpdateGuildContributionArgs: ["data", "where"],
  DeleteManyGuildContributionArgs: ["where"],
  UpdateManyGuildContributionArgs: ["data", "where"],
  UpsertGuildContributionArgs: ["where", "create", "update"],
  AggregateGuildContributionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByGuildContributionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueChainTypeArgs: ["where"],
  FindFirstChainTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyChainTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateChainTypeArgs: ["data"],
  CreateManyChainTypeArgs: ["data", "skipDuplicates"],
  DeleteChainTypeArgs: ["where"],
  UpdateChainTypeArgs: ["data", "where"],
  DeleteManyChainTypeArgs: ["where"],
  UpdateManyChainTypeArgs: ["data", "where"],
  UpsertChainTypeArgs: ["where", "create", "update"],
  AggregateChainTypeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByChainTypeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueContributionArgs: ["where"],
  FindFirstContributionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyContributionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateContributionArgs: ["data"],
  CreateManyContributionArgs: ["data", "skipDuplicates"],
  DeleteContributionArgs: ["where"],
  UpdateContributionArgs: ["data", "where"],
  DeleteManyContributionArgs: ["where"],
  UpdateManyContributionArgs: ["data", "where"],
  UpsertContributionArgs: ["where", "create", "update"],
  AggregateContributionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByContributionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePartnerArgs: ["where"],
  FindFirstPartnerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPartnerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePartnerArgs: ["data"],
  CreateManyPartnerArgs: ["data", "skipDuplicates"],
  DeletePartnerArgs: ["where"],
  UpdatePartnerArgs: ["data", "where"],
  DeleteManyPartnerArgs: ["where"],
  UpdateManyPartnerArgs: ["data", "where"],
  UpsertPartnerArgs: ["where", "create", "update"],
  AggregatePartnerArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPartnerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueAttestationArgs: ["where"],
  FindFirstAttestationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAttestationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAttestationArgs: ["data"],
  CreateManyAttestationArgs: ["data", "skipDuplicates"],
  DeleteAttestationArgs: ["where"],
  UpdateAttestationArgs: ["data", "where"],
  DeleteManyAttestationArgs: ["where"],
  UpdateManyAttestationArgs: ["data", "where"],
  UpsertAttestationArgs: ["where", "create", "update"],
  AggregateAttestationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAttestationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueAttestationConfidenceArgs: ["where"],
  FindFirstAttestationConfidenceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAttestationConfidenceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAttestationConfidenceArgs: ["data"],
  CreateManyAttestationConfidenceArgs: ["data", "skipDuplicates"],
  DeleteAttestationConfidenceArgs: ["where"],
  UpdateAttestationConfidenceArgs: ["data", "where"],
  DeleteManyAttestationConfidenceArgs: ["where"],
  UpdateManyAttestationConfidenceArgs: ["data", "where"],
  UpsertAttestationConfidenceArgs: ["where", "create", "update"],
  AggregateAttestationConfidenceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAttestationConfidenceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueContributionStatusArgs: ["where"],
  FindFirstContributionStatusArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyContributionStatusArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateContributionStatusArgs: ["data"],
  CreateManyContributionStatusArgs: ["data", "skipDuplicates"],
  DeleteContributionStatusArgs: ["where"],
  UpdateContributionStatusArgs: ["data", "where"],
  DeleteManyContributionStatusArgs: ["where"],
  UpdateManyContributionStatusArgs: ["data", "where"],
  UpsertContributionStatusArgs: ["where", "create", "update"],
  AggregateContributionStatusArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByContributionStatusArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueActivityTypeArgs: ["where"],
  FindFirstActivityTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyActivityTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateActivityTypeArgs: ["data"],
  CreateManyActivityTypeArgs: ["data", "skipDuplicates"],
  DeleteActivityTypeArgs: ["where"],
  UpdateActivityTypeArgs: ["data", "where"],
  DeleteManyActivityTypeArgs: ["where"],
  UpdateManyActivityTypeArgs: ["data", "where"],
  UpsertActivityTypeArgs: ["where", "create", "update"],
  AggregateActivityTypeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByActivityTypeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserActivityArgs: ["where"],
  FindFirstUserActivityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserActivityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserActivityArgs: ["data"],
  CreateManyUserActivityArgs: ["data", "skipDuplicates"],
  DeleteUserActivityArgs: ["where"],
  UpdateUserActivityArgs: ["data", "where"],
  DeleteManyUserActivityArgs: ["where"],
  UpdateManyUserActivityArgs: ["data", "where"],
  UpsertUserActivityArgs: ["where", "create", "update"],
  AggregateUserActivityArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserActivityArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCategoryActivityArgs: ["where"],
  FindFirstCategoryActivityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCategoryActivityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCategoryActivityArgs: ["data"],
  CreateManyCategoryActivityArgs: ["data", "skipDuplicates"],
  DeleteCategoryActivityArgs: ["where"],
  UpdateCategoryActivityArgs: ["data", "where"],
  DeleteManyCategoryActivityArgs: ["where"],
  UpdateManyCategoryActivityArgs: ["data", "where"],
  UpsertCategoryActivityArgs: ["where", "create", "update"],
  AggregateCategoryActivityArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCategoryActivityArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Guild: relationResolvers.GuildRelationsResolver,
  GuildContribution: relationResolvers.GuildContributionRelationsResolver,
  ChainType: relationResolvers.ChainTypeRelationsResolver,
  Contribution: relationResolvers.ContributionRelationsResolver,
  Partner: relationResolvers.PartnerRelationsResolver,
  Attestation: relationResolvers.AttestationRelationsResolver,
  AttestationConfidence: relationResolvers.AttestationConfidenceRelationsResolver,
  ContributionStatus: relationResolvers.ContributionStatusRelationsResolver,
  ActivityType: relationResolvers.ActivityTypeRelationsResolver,
  UserActivity: relationResolvers.UserActivityRelationsResolver,
  CategoryActivity: relationResolvers.CategoryActivityRelationsResolver
};
const relationResolversInfo = {
  User: ["chain_type", "activities", "attestations", "contributionPartners", "contributions"],
  Guild: ["contributions"],
  GuildContribution: ["guild", "contribution"],
  ChainType: ["users"],
  Contribution: ["status", "activity_type", "user", "attestations", "partners", "guilds"],
  Partner: ["user", "contribution"],
  Attestation: ["confidence", "user", "contribution"],
  AttestationConfidence: ["attestations"],
  ContributionStatus: ["contributions"],
  ActivityType: ["category_activity", "users", "contributions"],
  UserActivity: ["user", "activity_type"],
  CategoryActivity: ["activityTypes"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type_id", "full_name"],
  Guild: ["id", "createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo"],
  GuildContribution: ["id", "createdAt", "updatedAt", "guild_id", "contribution_id"],
  ChainType: ["id", "createdAt", "updatedAt", "name"],
  Contribution: ["id", "updatedAt", "status_id", "activity_type_id", "user_id", "date_of_submission", "date_of_engagement", "details", "proof"],
  Partner: ["id", "createdAt", "updatedAt", "user_id", "contribution_id"],
  Attestation: ["id", "createdAt", "updatedAt", "confidence_id", "user_id", "contribution_id", "date_of_attestation"],
  AttestationConfidence: ["id", "createdAt", "updatedAt", "name"],
  ContributionStatus: ["id", "createdAt", "updatedAt", "name"],
  ActivityType: ["id", "createdAt", "updatedAt", "name", "active", "category_activity_id"],
  UserActivity: ["id", "createdAt", "updatedAt", "user_id", "activity_type_id"],
  CategoryActivity: ["id", "createdAt", "updatedAt", "name"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type_id", "full_name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateGuild: ["_count", "_avg", "_sum", "_min", "_max"],
  GuildGroupBy: ["id", "createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateGuildContribution: ["_count", "_avg", "_sum", "_min", "_max"],
  GuildContributionGroupBy: ["id", "createdAt", "updatedAt", "guild_id", "contribution_id", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateChainType: ["_count", "_avg", "_sum", "_min", "_max"],
  ChainTypeGroupBy: ["id", "createdAt", "updatedAt", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateContribution: ["_count", "_avg", "_sum", "_min", "_max"],
  ContributionGroupBy: ["id", "updatedAt", "status_id", "activity_type_id", "user_id", "date_of_submission", "date_of_engagement", "details", "proof", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePartner: ["_count", "_avg", "_sum", "_min", "_max"],
  PartnerGroupBy: ["id", "createdAt", "updatedAt", "user_id", "contribution_id", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAttestation: ["_count", "_avg", "_sum", "_min", "_max"],
  AttestationGroupBy: ["id", "createdAt", "updatedAt", "confidence_id", "user_id", "contribution_id", "date_of_attestation", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAttestationConfidence: ["_count", "_avg", "_sum", "_min", "_max"],
  AttestationConfidenceGroupBy: ["id", "createdAt", "updatedAt", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateContributionStatus: ["_count", "_avg", "_sum", "_min", "_max"],
  ContributionStatusGroupBy: ["id", "createdAt", "updatedAt", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateActivityType: ["_count", "_avg", "_sum", "_min", "_max"],
  ActivityTypeGroupBy: ["id", "createdAt", "updatedAt", "name", "active", "category_activity_id", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUserActivity: ["_count", "_avg", "_sum", "_min", "_max"],
  UserActivityGroupBy: ["id", "createdAt", "updatedAt", "user_id", "activity_type_id", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCategoryActivity: ["_count", "_avg", "_sum", "_min", "_max"],
  CategoryActivityGroupBy: ["id", "createdAt", "updatedAt", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["activities", "attestations", "contributionPartners", "contributions"],
  UserCountAggregate: ["id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type_id", "full_name", "_all"],
  UserAvgAggregate: ["id", "chain_type_id"],
  UserSumAggregate: ["id", "chain_type_id"],
  UserMinAggregate: ["id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type_id", "full_name"],
  UserMaxAggregate: ["id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type_id", "full_name"],
  GuildCount: ["contributions"],
  GuildCountAggregate: ["id", "createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo", "_all"],
  GuildAvgAggregate: ["id", "discord_id", "congrats_channel"],
  GuildSumAggregate: ["id", "discord_id", "congrats_channel"],
  GuildMinAggregate: ["id", "createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo"],
  GuildMaxAggregate: ["id", "createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo"],
  GuildContributionCountAggregate: ["id", "createdAt", "updatedAt", "guild_id", "contribution_id", "_all"],
  GuildContributionAvgAggregate: ["id", "guild_id", "contribution_id"],
  GuildContributionSumAggregate: ["id", "guild_id", "contribution_id"],
  GuildContributionMinAggregate: ["id", "createdAt", "updatedAt", "guild_id", "contribution_id"],
  GuildContributionMaxAggregate: ["id", "createdAt", "updatedAt", "guild_id", "contribution_id"],
  ChainTypeCount: ["users"],
  ChainTypeCountAggregate: ["id", "createdAt", "updatedAt", "name", "_all"],
  ChainTypeAvgAggregate: ["id"],
  ChainTypeSumAggregate: ["id"],
  ChainTypeMinAggregate: ["id", "createdAt", "updatedAt", "name"],
  ChainTypeMaxAggregate: ["id", "createdAt", "updatedAt", "name"],
  ContributionCount: ["attestations", "partners", "guilds"],
  ContributionCountAggregate: ["id", "updatedAt", "status_id", "activity_type_id", "user_id", "date_of_submission", "date_of_engagement", "details", "proof", "_all"],
  ContributionAvgAggregate: ["id", "status_id", "activity_type_id", "user_id"],
  ContributionSumAggregate: ["id", "status_id", "activity_type_id", "user_id"],
  ContributionMinAggregate: ["id", "updatedAt", "status_id", "activity_type_id", "user_id", "date_of_submission", "date_of_engagement", "details", "proof"],
  ContributionMaxAggregate: ["id", "updatedAt", "status_id", "activity_type_id", "user_id", "date_of_submission", "date_of_engagement", "details", "proof"],
  PartnerCountAggregate: ["id", "createdAt", "updatedAt", "user_id", "contribution_id", "_all"],
  PartnerAvgAggregate: ["id", "user_id", "contribution_id"],
  PartnerSumAggregate: ["id", "user_id", "contribution_id"],
  PartnerMinAggregate: ["id", "createdAt", "updatedAt", "user_id", "contribution_id"],
  PartnerMaxAggregate: ["id", "createdAt", "updatedAt", "user_id", "contribution_id"],
  AttestationCountAggregate: ["id", "createdAt", "updatedAt", "confidence_id", "user_id", "contribution_id", "date_of_attestation", "_all"],
  AttestationAvgAggregate: ["id", "confidence_id", "user_id", "contribution_id"],
  AttestationSumAggregate: ["id", "confidence_id", "user_id", "contribution_id"],
  AttestationMinAggregate: ["id", "createdAt", "updatedAt", "confidence_id", "user_id", "contribution_id", "date_of_attestation"],
  AttestationMaxAggregate: ["id", "createdAt", "updatedAt", "confidence_id", "user_id", "contribution_id", "date_of_attestation"],
  AttestationConfidenceCount: ["attestations"],
  AttestationConfidenceCountAggregate: ["id", "createdAt", "updatedAt", "name", "_all"],
  AttestationConfidenceAvgAggregate: ["id"],
  AttestationConfidenceSumAggregate: ["id"],
  AttestationConfidenceMinAggregate: ["id", "createdAt", "updatedAt", "name"],
  AttestationConfidenceMaxAggregate: ["id", "createdAt", "updatedAt", "name"],
  ContributionStatusCount: ["contributions"],
  ContributionStatusCountAggregate: ["id", "createdAt", "updatedAt", "name", "_all"],
  ContributionStatusAvgAggregate: ["id"],
  ContributionStatusSumAggregate: ["id"],
  ContributionStatusMinAggregate: ["id", "createdAt", "updatedAt", "name"],
  ContributionStatusMaxAggregate: ["id", "createdAt", "updatedAt", "name"],
  ActivityTypeCount: ["users", "contributions"],
  ActivityTypeCountAggregate: ["id", "createdAt", "updatedAt", "name", "active", "category_activity_id", "_all"],
  ActivityTypeAvgAggregate: ["id", "category_activity_id"],
  ActivityTypeSumAggregate: ["id", "category_activity_id"],
  ActivityTypeMinAggregate: ["id", "createdAt", "updatedAt", "name", "active", "category_activity_id"],
  ActivityTypeMaxAggregate: ["id", "createdAt", "updatedAt", "name", "active", "category_activity_id"],
  UserActivityCountAggregate: ["id", "createdAt", "updatedAt", "user_id", "activity_type_id", "_all"],
  UserActivityAvgAggregate: ["id", "user_id", "activity_type_id"],
  UserActivitySumAggregate: ["id", "user_id", "activity_type_id"],
  UserActivityMinAggregate: ["id", "createdAt", "updatedAt", "user_id", "activity_type_id"],
  UserActivityMaxAggregate: ["id", "createdAt", "updatedAt", "user_id", "activity_type_id"],
  CategoryActivityCount: ["activityTypes"],
  CategoryActivityCountAggregate: ["id", "createdAt", "updatedAt", "name", "_all"],
  CategoryActivityAvgAggregate: ["id"],
  CategoryActivitySumAggregate: ["id"],
  CategoryActivityMinAggregate: ["id", "createdAt", "updatedAt", "name"],
  CategoryActivityMaxAggregate: ["id", "createdAt", "updatedAt", "name"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type_id", "chain_type", "full_name", "activities", "attestations", "contributionPartners", "contributions"],
  UserOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type_id", "chain_type", "full_name", "activities", "attestations", "contributionPartners", "contributions"],
  UserWhereUniqueInput: ["id"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type_id", "full_name", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type_id", "full_name"],
  GuildWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo", "contributions"],
  GuildOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo", "contributions"],
  GuildWhereUniqueInput: ["id"],
  GuildOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo", "_count", "_avg", "_max", "_min", "_sum"],
  GuildScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo"],
  GuildContributionWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "guild_id", "guild", "contribution_id", "contribution"],
  GuildContributionOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "guild_id", "guild", "contribution_id", "contribution"],
  GuildContributionWhereUniqueInput: ["id", "guild_id_contribution_id"],
  GuildContributionOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "guild_id", "contribution_id", "_count", "_avg", "_max", "_min", "_sum"],
  GuildContributionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "guild_id", "contribution_id"],
  ChainTypeWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "users"],
  ChainTypeOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "users"],
  ChainTypeWhereUniqueInput: ["id", "name"],
  ChainTypeOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "_count", "_avg", "_max", "_min", "_sum"],
  ChainTypeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name"],
  ContributionWhereInput: ["AND", "OR", "NOT", "id", "updatedAt", "status_id", "status", "activity_type_id", "activity_type", "user_id", "user", "date_of_submission", "date_of_engagement", "details", "proof", "attestations", "partners", "guilds"],
  ContributionOrderByWithRelationInput: ["id", "updatedAt", "status_id", "status", "activity_type_id", "activity_type", "user_id", "user", "date_of_submission", "date_of_engagement", "details", "proof", "attestations", "partners", "guilds"],
  ContributionWhereUniqueInput: ["id"],
  ContributionOrderByWithAggregationInput: ["id", "updatedAt", "status_id", "activity_type_id", "user_id", "date_of_submission", "date_of_engagement", "details", "proof", "_count", "_avg", "_max", "_min", "_sum"],
  ContributionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "updatedAt", "status_id", "activity_type_id", "user_id", "date_of_submission", "date_of_engagement", "details", "proof"],
  PartnerWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "user_id", "user", "contribution_id", "contribution"],
  PartnerOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "user_id", "user", "contribution_id", "contribution"],
  PartnerWhereUniqueInput: ["id", "user_id_contribution_id"],
  PartnerOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "user_id", "contribution_id", "_count", "_avg", "_max", "_min", "_sum"],
  PartnerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "user_id", "contribution_id"],
  AttestationWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "confidence_id", "confidence", "user_id", "user", "contribution_id", "contribution", "date_of_attestation"],
  AttestationOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "confidence_id", "confidence", "user_id", "user", "contribution_id", "contribution", "date_of_attestation"],
  AttestationWhereUniqueInput: ["id", "user_id_contribution_id"],
  AttestationOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "confidence_id", "user_id", "contribution_id", "date_of_attestation", "_count", "_avg", "_max", "_min", "_sum"],
  AttestationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "confidence_id", "user_id", "contribution_id", "date_of_attestation"],
  AttestationConfidenceWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "attestations"],
  AttestationConfidenceOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "attestations"],
  AttestationConfidenceWhereUniqueInput: ["id", "name"],
  AttestationConfidenceOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "_count", "_avg", "_max", "_min", "_sum"],
  AttestationConfidenceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name"],
  ContributionStatusWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "contributions"],
  ContributionStatusOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "contributions"],
  ContributionStatusWhereUniqueInput: ["id", "name"],
  ContributionStatusOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "_count", "_avg", "_max", "_min", "_sum"],
  ContributionStatusScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name"],
  ActivityTypeWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "active", "category_activity_id", "category_activity", "users", "contributions"],
  ActivityTypeOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "active", "category_activity_id", "category_activity", "users", "contributions"],
  ActivityTypeWhereUniqueInput: ["id", "name"],
  ActivityTypeOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "active", "category_activity_id", "_count", "_avg", "_max", "_min", "_sum"],
  ActivityTypeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "active", "category_activity_id"],
  UserActivityWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "user_id", "user", "activity_type_id", "activity_type"],
  UserActivityOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "user_id", "user", "activity_type_id", "activity_type"],
  UserActivityWhereUniqueInput: ["id", "user_id_activity_type_id"],
  UserActivityOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "user_id", "activity_type_id", "_count", "_avg", "_max", "_min", "_sum"],
  UserActivityScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "user_id", "activity_type_id"],
  CategoryActivityWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "activityTypes"],
  CategoryActivityOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "activityTypes"],
  CategoryActivityWhereUniqueInput: ["id", "name"],
  CategoryActivityOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "_count", "_avg", "_max", "_min", "_sum"],
  CategoryActivityScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name"],
  UserCreateInput: ["createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type", "full_name", "activities", "attestations", "contributionPartners", "contributions"],
  UserUpdateInput: ["createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type", "full_name", "activities", "attestations", "contributionPartners", "contributions"],
  UserCreateManyInput: ["id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type_id", "full_name"],
  UserUpdateManyMutationInput: ["createdAt", "updatedAt", "name", "dispaly_name", "address", "full_name"],
  GuildCreateInput: ["createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo", "contributions"],
  GuildUpdateInput: ["createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo", "contributions"],
  GuildCreateManyInput: ["id", "createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo"],
  GuildUpdateManyMutationInput: ["createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo"],
  GuildContributionCreateInput: ["createdAt", "updatedAt", "guild", "contribution"],
  GuildContributionUpdateInput: ["createdAt", "updatedAt", "guild", "contribution"],
  GuildContributionCreateManyInput: ["id", "createdAt", "updatedAt", "guild_id", "contribution_id"],
  GuildContributionUpdateManyMutationInput: ["createdAt", "updatedAt"],
  ChainTypeCreateInput: ["createdAt", "updatedAt", "name", "users"],
  ChainTypeUpdateInput: ["createdAt", "updatedAt", "name", "users"],
  ChainTypeCreateManyInput: ["id", "createdAt", "updatedAt", "name"],
  ChainTypeUpdateManyMutationInput: ["createdAt", "updatedAt", "name"],
  ContributionCreateInput: ["updatedAt", "status", "activity_type", "user", "date_of_submission", "date_of_engagement", "details", "proof", "attestations", "partners", "guilds"],
  ContributionUpdateInput: ["updatedAt", "status", "activity_type", "user", "date_of_submission", "date_of_engagement", "details", "proof", "attestations", "partners", "guilds"],
  ContributionCreateManyInput: ["id", "updatedAt", "status_id", "activity_type_id", "user_id", "date_of_submission", "date_of_engagement", "details", "proof"],
  ContributionUpdateManyMutationInput: ["updatedAt", "date_of_submission", "date_of_engagement", "details", "proof"],
  PartnerCreateInput: ["createdAt", "updatedAt", "user", "contribution"],
  PartnerUpdateInput: ["createdAt", "updatedAt", "user", "contribution"],
  PartnerCreateManyInput: ["id", "createdAt", "updatedAt", "user_id", "contribution_id"],
  PartnerUpdateManyMutationInput: ["createdAt", "updatedAt"],
  AttestationCreateInput: ["createdAt", "updatedAt", "confidence", "user", "contribution", "date_of_attestation"],
  AttestationUpdateInput: ["createdAt", "updatedAt", "confidence", "user", "contribution", "date_of_attestation"],
  AttestationCreateManyInput: ["id", "createdAt", "updatedAt", "confidence_id", "user_id", "contribution_id", "date_of_attestation"],
  AttestationUpdateManyMutationInput: ["createdAt", "updatedAt", "date_of_attestation"],
  AttestationConfidenceCreateInput: ["createdAt", "updatedAt", "name", "attestations"],
  AttestationConfidenceUpdateInput: ["createdAt", "updatedAt", "name", "attestations"],
  AttestationConfidenceCreateManyInput: ["id", "createdAt", "updatedAt", "name"],
  AttestationConfidenceUpdateManyMutationInput: ["createdAt", "updatedAt", "name"],
  ContributionStatusCreateInput: ["createdAt", "updatedAt", "name", "contributions"],
  ContributionStatusUpdateInput: ["createdAt", "updatedAt", "name", "contributions"],
  ContributionStatusCreateManyInput: ["id", "createdAt", "updatedAt", "name"],
  ContributionStatusUpdateManyMutationInput: ["createdAt", "updatedAt", "name"],
  ActivityTypeCreateInput: ["createdAt", "updatedAt", "name", "active", "category_activity", "users", "contributions"],
  ActivityTypeUpdateInput: ["createdAt", "updatedAt", "name", "active", "category_activity", "users", "contributions"],
  ActivityTypeCreateManyInput: ["id", "createdAt", "updatedAt", "name", "active", "category_activity_id"],
  ActivityTypeUpdateManyMutationInput: ["createdAt", "updatedAt", "name", "active"],
  UserActivityCreateInput: ["createdAt", "updatedAt", "user", "activity_type"],
  UserActivityUpdateInput: ["createdAt", "updatedAt", "user", "activity_type"],
  UserActivityCreateManyInput: ["id", "createdAt", "updatedAt", "user_id", "activity_type_id"],
  UserActivityUpdateManyMutationInput: ["createdAt", "updatedAt"],
  CategoryActivityCreateInput: ["createdAt", "updatedAt", "name", "activityTypes"],
  CategoryActivityUpdateInput: ["createdAt", "updatedAt", "name", "activityTypes"],
  CategoryActivityCreateManyInput: ["id", "createdAt", "updatedAt", "name"],
  CategoryActivityUpdateManyMutationInput: ["createdAt", "updatedAt", "name"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  ChainTypeRelationFilter: ["is", "isNot"],
  UserActivityListRelationFilter: ["every", "some", "none"],
  AttestationListRelationFilter: ["every", "some", "none"],
  PartnerListRelationFilter: ["every", "some", "none"],
  ContributionListRelationFilter: ["every", "some", "none"],
  UserActivityOrderByRelationAggregateInput: ["_count"],
  AttestationOrderByRelationAggregateInput: ["_count"],
  PartnerOrderByRelationAggregateInput: ["_count"],
  ContributionOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type_id", "full_name"],
  UserAvgOrderByAggregateInput: ["id", "chain_type_id"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type_id", "full_name"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type_id", "full_name"],
  UserSumOrderByAggregateInput: ["id", "chain_type_id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  GuildContributionListRelationFilter: ["every", "some", "none"],
  GuildContributionOrderByRelationAggregateInput: ["_count"],
  GuildCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo"],
  GuildAvgOrderByAggregateInput: ["id", "discord_id", "congrats_channel"],
  GuildMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo"],
  GuildMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo"],
  GuildSumOrderByAggregateInput: ["id", "discord_id", "congrats_channel"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  GuildRelationFilter: ["is", "isNot"],
  ContributionRelationFilter: ["is", "isNot"],
  GuildContributionGuild_idContribution_idCompoundUniqueInput: ["guild_id", "contribution_id"],
  GuildContributionCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "guild_id", "contribution_id"],
  GuildContributionAvgOrderByAggregateInput: ["id", "guild_id", "contribution_id"],
  GuildContributionMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "guild_id", "contribution_id"],
  GuildContributionMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "guild_id", "contribution_id"],
  GuildContributionSumOrderByAggregateInput: ["id", "guild_id", "contribution_id"],
  UserListRelationFilter: ["every", "some", "none"],
  UserOrderByRelationAggregateInput: ["_count"],
  ChainTypeCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  ChainTypeAvgOrderByAggregateInput: ["id"],
  ChainTypeMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  ChainTypeMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  ChainTypeSumOrderByAggregateInput: ["id"],
  ContributionStatusRelationFilter: ["is", "isNot"],
  ActivityTypeRelationFilter: ["is", "isNot"],
  UserRelationFilter: ["is", "isNot"],
  ContributionCountOrderByAggregateInput: ["id", "updatedAt", "status_id", "activity_type_id", "user_id", "date_of_submission", "date_of_engagement", "details", "proof"],
  ContributionAvgOrderByAggregateInput: ["id", "status_id", "activity_type_id", "user_id"],
  ContributionMaxOrderByAggregateInput: ["id", "updatedAt", "status_id", "activity_type_id", "user_id", "date_of_submission", "date_of_engagement", "details", "proof"],
  ContributionMinOrderByAggregateInput: ["id", "updatedAt", "status_id", "activity_type_id", "user_id", "date_of_submission", "date_of_engagement", "details", "proof"],
  ContributionSumOrderByAggregateInput: ["id", "status_id", "activity_type_id", "user_id"],
  PartnerUser_idContribution_idCompoundUniqueInput: ["user_id", "contribution_id"],
  PartnerCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "user_id", "contribution_id"],
  PartnerAvgOrderByAggregateInput: ["id", "user_id", "contribution_id"],
  PartnerMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "user_id", "contribution_id"],
  PartnerMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "user_id", "contribution_id"],
  PartnerSumOrderByAggregateInput: ["id", "user_id", "contribution_id"],
  AttestationConfidenceRelationFilter: ["is", "isNot"],
  AttestationUser_idContribution_idCompoundUniqueInput: ["user_id", "contribution_id"],
  AttestationCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "confidence_id", "user_id", "contribution_id", "date_of_attestation"],
  AttestationAvgOrderByAggregateInput: ["id", "confidence_id", "user_id", "contribution_id"],
  AttestationMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "confidence_id", "user_id", "contribution_id", "date_of_attestation"],
  AttestationMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "confidence_id", "user_id", "contribution_id", "date_of_attestation"],
  AttestationSumOrderByAggregateInput: ["id", "confidence_id", "user_id", "contribution_id"],
  AttestationConfidenceCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  AttestationConfidenceAvgOrderByAggregateInput: ["id"],
  AttestationConfidenceMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  AttestationConfidenceMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  AttestationConfidenceSumOrderByAggregateInput: ["id"],
  ContributionStatusCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  ContributionStatusAvgOrderByAggregateInput: ["id"],
  ContributionStatusMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  ContributionStatusMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  ContributionStatusSumOrderByAggregateInput: ["id"],
  BoolFilter: ["equals", "not"],
  CategoryActivityRelationFilter: ["is", "isNot"],
  ActivityTypeCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "active", "category_activity_id"],
  ActivityTypeAvgOrderByAggregateInput: ["id", "category_activity_id"],
  ActivityTypeMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "active", "category_activity_id"],
  ActivityTypeMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "active", "category_activity_id"],
  ActivityTypeSumOrderByAggregateInput: ["id", "category_activity_id"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UserActivityUser_idActivity_type_idCompoundUniqueInput: ["user_id", "activity_type_id"],
  UserActivityCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "user_id", "activity_type_id"],
  UserActivityAvgOrderByAggregateInput: ["id", "user_id", "activity_type_id"],
  UserActivityMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "user_id", "activity_type_id"],
  UserActivityMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "user_id", "activity_type_id"],
  UserActivitySumOrderByAggregateInput: ["id", "user_id", "activity_type_id"],
  ActivityTypeListRelationFilter: ["every", "some", "none"],
  ActivityTypeOrderByRelationAggregateInput: ["_count"],
  CategoryActivityCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  CategoryActivityAvgOrderByAggregateInput: ["id"],
  CategoryActivityMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  CategoryActivityMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  CategoryActivitySumOrderByAggregateInput: ["id"],
  ChainTypeCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  UserActivityCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  AttestationCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  PartnerCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  ContributionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  ChainTypeUpdateOneRequiredWithoutUsersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserActivityUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AttestationUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PartnerUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ContributionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  GuildContributionCreateNestedManyWithoutGuildInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  GuildContributionUpdateManyWithoutGuildInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  GuildCreateNestedOneWithoutContributionsInput: ["create", "connectOrCreate", "connect"],
  ContributionCreateNestedOneWithoutGuildsInput: ["create", "connectOrCreate", "connect"],
  GuildUpdateOneRequiredWithoutContributionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ContributionUpdateOneRequiredWithoutGuildsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedManyWithoutChain_typeInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateManyWithoutChain_typeInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ContributionStatusCreateNestedOneWithoutContributionsInput: ["create", "connectOrCreate", "connect"],
  ActivityTypeCreateNestedOneWithoutContributionsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutContributionsInput: ["create", "connectOrCreate", "connect"],
  AttestationCreateNestedManyWithoutContributionInput: ["create", "connectOrCreate", "createMany", "connect"],
  PartnerCreateNestedManyWithoutContributionInput: ["create", "connectOrCreate", "createMany", "connect"],
  GuildContributionCreateNestedManyWithoutContributionInput: ["create", "connectOrCreate", "createMany", "connect"],
  ContributionStatusUpdateOneRequiredWithoutContributionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ActivityTypeUpdateOneRequiredWithoutContributionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutContributionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AttestationUpdateManyWithoutContributionInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PartnerUpdateManyWithoutContributionInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  GuildContributionUpdateManyWithoutContributionInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutContributionPartnersInput: ["create", "connectOrCreate", "connect"],
  ContributionCreateNestedOneWithoutPartnersInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutContributionPartnersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ContributionUpdateOneRequiredWithoutPartnersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AttestationConfidenceCreateNestedOneWithoutAttestationsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutAttestationsInput: ["create", "connectOrCreate", "connect"],
  ContributionCreateNestedOneWithoutAttestationsInput: ["create", "connectOrCreate", "connect"],
  AttestationConfidenceUpdateOneRequiredWithoutAttestationsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutAttestationsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ContributionUpdateOneRequiredWithoutAttestationsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AttestationCreateNestedManyWithoutConfidenceInput: ["create", "connectOrCreate", "createMany", "connect"],
  AttestationUpdateManyWithoutConfidenceInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ContributionCreateNestedManyWithoutStatusInput: ["create", "connectOrCreate", "createMany", "connect"],
  ContributionUpdateManyWithoutStatusInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CategoryActivityCreateNestedOneWithoutActivityTypesInput: ["create", "connectOrCreate", "connect"],
  UserActivityCreateNestedManyWithoutActivity_typeInput: ["create", "connectOrCreate", "createMany", "connect"],
  ContributionCreateNestedManyWithoutActivity_typeInput: ["create", "connectOrCreate", "createMany", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  CategoryActivityUpdateOneRequiredWithoutActivityTypesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserActivityUpdateManyWithoutActivity_typeInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ContributionUpdateManyWithoutActivity_typeInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutActivitiesInput: ["create", "connectOrCreate", "connect"],
  ActivityTypeCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutActivitiesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ActivityTypeUpdateOneRequiredWithoutUsersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ActivityTypeCreateNestedManyWithoutCategory_activityInput: ["create", "connectOrCreate", "createMany", "connect"],
  ActivityTypeUpdateManyWithoutCategory_activityInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  ChainTypeCreateWithoutUsersInput: ["createdAt", "updatedAt", "name"],
  ChainTypeCreateOrConnectWithoutUsersInput: ["where", "create"],
  UserActivityCreateWithoutUserInput: ["createdAt", "updatedAt", "activity_type"],
  UserActivityCreateOrConnectWithoutUserInput: ["where", "create"],
  UserActivityCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  AttestationCreateWithoutUserInput: ["createdAt", "updatedAt", "confidence", "contribution", "date_of_attestation"],
  AttestationCreateOrConnectWithoutUserInput: ["where", "create"],
  AttestationCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  PartnerCreateWithoutUserInput: ["createdAt", "updatedAt", "contribution"],
  PartnerCreateOrConnectWithoutUserInput: ["where", "create"],
  PartnerCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ContributionCreateWithoutUserInput: ["updatedAt", "status", "activity_type", "date_of_submission", "date_of_engagement", "details", "proof", "attestations", "partners", "guilds"],
  ContributionCreateOrConnectWithoutUserInput: ["where", "create"],
  ContributionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ChainTypeUpsertWithoutUsersInput: ["update", "create"],
  ChainTypeUpdateWithoutUsersInput: ["createdAt", "updatedAt", "name"],
  UserActivityUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  UserActivityUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  UserActivityUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  UserActivityScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "user_id", "activity_type_id"],
  AttestationUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  AttestationUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  AttestationUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  AttestationScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "confidence_id", "user_id", "contribution_id", "date_of_attestation"],
  PartnerUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  PartnerUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  PartnerUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  PartnerScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "user_id", "contribution_id"],
  ContributionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ContributionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ContributionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ContributionScalarWhereInput: ["AND", "OR", "NOT", "id", "updatedAt", "status_id", "activity_type_id", "user_id", "date_of_submission", "date_of_engagement", "details", "proof"],
  GuildContributionCreateWithoutGuildInput: ["createdAt", "updatedAt", "contribution"],
  GuildContributionCreateOrConnectWithoutGuildInput: ["where", "create"],
  GuildContributionCreateManyGuildInputEnvelope: ["data", "skipDuplicates"],
  GuildContributionUpsertWithWhereUniqueWithoutGuildInput: ["where", "update", "create"],
  GuildContributionUpdateWithWhereUniqueWithoutGuildInput: ["where", "data"],
  GuildContributionUpdateManyWithWhereWithoutGuildInput: ["where", "data"],
  GuildContributionScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "guild_id", "contribution_id"],
  GuildCreateWithoutContributionsInput: ["createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo"],
  GuildCreateOrConnectWithoutContributionsInput: ["where", "create"],
  ContributionCreateWithoutGuildsInput: ["updatedAt", "status", "activity_type", "user", "date_of_submission", "date_of_engagement", "details", "proof", "attestations", "partners"],
  ContributionCreateOrConnectWithoutGuildsInput: ["where", "create"],
  GuildUpsertWithoutContributionsInput: ["update", "create"],
  GuildUpdateWithoutContributionsInput: ["createdAt", "updatedAt", "discord_id", "name", "congrats_channel", "logo"],
  ContributionUpsertWithoutGuildsInput: ["update", "create"],
  ContributionUpdateWithoutGuildsInput: ["updatedAt", "status", "activity_type", "user", "date_of_submission", "date_of_engagement", "details", "proof", "attestations", "partners"],
  UserCreateWithoutChain_typeInput: ["createdAt", "updatedAt", "name", "dispaly_name", "address", "full_name", "activities", "attestations", "contributionPartners", "contributions"],
  UserCreateOrConnectWithoutChain_typeInput: ["where", "create"],
  UserCreateManyChain_typeInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithWhereUniqueWithoutChain_typeInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutChain_typeInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutChain_typeInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type_id", "full_name"],
  ContributionStatusCreateWithoutContributionsInput: ["createdAt", "updatedAt", "name"],
  ContributionStatusCreateOrConnectWithoutContributionsInput: ["where", "create"],
  ActivityTypeCreateWithoutContributionsInput: ["createdAt", "updatedAt", "name", "active", "category_activity", "users"],
  ActivityTypeCreateOrConnectWithoutContributionsInput: ["where", "create"],
  UserCreateWithoutContributionsInput: ["createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type", "full_name", "activities", "attestations", "contributionPartners"],
  UserCreateOrConnectWithoutContributionsInput: ["where", "create"],
  AttestationCreateWithoutContributionInput: ["createdAt", "updatedAt", "confidence", "user", "date_of_attestation"],
  AttestationCreateOrConnectWithoutContributionInput: ["where", "create"],
  AttestationCreateManyContributionInputEnvelope: ["data", "skipDuplicates"],
  PartnerCreateWithoutContributionInput: ["createdAt", "updatedAt", "user"],
  PartnerCreateOrConnectWithoutContributionInput: ["where", "create"],
  PartnerCreateManyContributionInputEnvelope: ["data", "skipDuplicates"],
  GuildContributionCreateWithoutContributionInput: ["createdAt", "updatedAt", "guild"],
  GuildContributionCreateOrConnectWithoutContributionInput: ["where", "create"],
  GuildContributionCreateManyContributionInputEnvelope: ["data", "skipDuplicates"],
  ContributionStatusUpsertWithoutContributionsInput: ["update", "create"],
  ContributionStatusUpdateWithoutContributionsInput: ["createdAt", "updatedAt", "name"],
  ActivityTypeUpsertWithoutContributionsInput: ["update", "create"],
  ActivityTypeUpdateWithoutContributionsInput: ["createdAt", "updatedAt", "name", "active", "category_activity", "users"],
  UserUpsertWithoutContributionsInput: ["update", "create"],
  UserUpdateWithoutContributionsInput: ["createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type", "full_name", "activities", "attestations", "contributionPartners"],
  AttestationUpsertWithWhereUniqueWithoutContributionInput: ["where", "update", "create"],
  AttestationUpdateWithWhereUniqueWithoutContributionInput: ["where", "data"],
  AttestationUpdateManyWithWhereWithoutContributionInput: ["where", "data"],
  PartnerUpsertWithWhereUniqueWithoutContributionInput: ["where", "update", "create"],
  PartnerUpdateWithWhereUniqueWithoutContributionInput: ["where", "data"],
  PartnerUpdateManyWithWhereWithoutContributionInput: ["where", "data"],
  GuildContributionUpsertWithWhereUniqueWithoutContributionInput: ["where", "update", "create"],
  GuildContributionUpdateWithWhereUniqueWithoutContributionInput: ["where", "data"],
  GuildContributionUpdateManyWithWhereWithoutContributionInput: ["where", "data"],
  UserCreateWithoutContributionPartnersInput: ["createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type", "full_name", "activities", "attestations", "contributions"],
  UserCreateOrConnectWithoutContributionPartnersInput: ["where", "create"],
  ContributionCreateWithoutPartnersInput: ["updatedAt", "status", "activity_type", "user", "date_of_submission", "date_of_engagement", "details", "proof", "attestations", "guilds"],
  ContributionCreateOrConnectWithoutPartnersInput: ["where", "create"],
  UserUpsertWithoutContributionPartnersInput: ["update", "create"],
  UserUpdateWithoutContributionPartnersInput: ["createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type", "full_name", "activities", "attestations", "contributions"],
  ContributionUpsertWithoutPartnersInput: ["update", "create"],
  ContributionUpdateWithoutPartnersInput: ["updatedAt", "status", "activity_type", "user", "date_of_submission", "date_of_engagement", "details", "proof", "attestations", "guilds"],
  AttestationConfidenceCreateWithoutAttestationsInput: ["createdAt", "updatedAt", "name"],
  AttestationConfidenceCreateOrConnectWithoutAttestationsInput: ["where", "create"],
  UserCreateWithoutAttestationsInput: ["createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type", "full_name", "activities", "contributionPartners", "contributions"],
  UserCreateOrConnectWithoutAttestationsInput: ["where", "create"],
  ContributionCreateWithoutAttestationsInput: ["updatedAt", "status", "activity_type", "user", "date_of_submission", "date_of_engagement", "details", "proof", "partners", "guilds"],
  ContributionCreateOrConnectWithoutAttestationsInput: ["where", "create"],
  AttestationConfidenceUpsertWithoutAttestationsInput: ["update", "create"],
  AttestationConfidenceUpdateWithoutAttestationsInput: ["createdAt", "updatedAt", "name"],
  UserUpsertWithoutAttestationsInput: ["update", "create"],
  UserUpdateWithoutAttestationsInput: ["createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type", "full_name", "activities", "contributionPartners", "contributions"],
  ContributionUpsertWithoutAttestationsInput: ["update", "create"],
  ContributionUpdateWithoutAttestationsInput: ["updatedAt", "status", "activity_type", "user", "date_of_submission", "date_of_engagement", "details", "proof", "partners", "guilds"],
  AttestationCreateWithoutConfidenceInput: ["createdAt", "updatedAt", "user", "contribution", "date_of_attestation"],
  AttestationCreateOrConnectWithoutConfidenceInput: ["where", "create"],
  AttestationCreateManyConfidenceInputEnvelope: ["data", "skipDuplicates"],
  AttestationUpsertWithWhereUniqueWithoutConfidenceInput: ["where", "update", "create"],
  AttestationUpdateWithWhereUniqueWithoutConfidenceInput: ["where", "data"],
  AttestationUpdateManyWithWhereWithoutConfidenceInput: ["where", "data"],
  ContributionCreateWithoutStatusInput: ["updatedAt", "activity_type", "user", "date_of_submission", "date_of_engagement", "details", "proof", "attestations", "partners", "guilds"],
  ContributionCreateOrConnectWithoutStatusInput: ["where", "create"],
  ContributionCreateManyStatusInputEnvelope: ["data", "skipDuplicates"],
  ContributionUpsertWithWhereUniqueWithoutStatusInput: ["where", "update", "create"],
  ContributionUpdateWithWhereUniqueWithoutStatusInput: ["where", "data"],
  ContributionUpdateManyWithWhereWithoutStatusInput: ["where", "data"],
  CategoryActivityCreateWithoutActivityTypesInput: ["createdAt", "updatedAt", "name"],
  CategoryActivityCreateOrConnectWithoutActivityTypesInput: ["where", "create"],
  UserActivityCreateWithoutActivity_typeInput: ["createdAt", "updatedAt", "user"],
  UserActivityCreateOrConnectWithoutActivity_typeInput: ["where", "create"],
  UserActivityCreateManyActivity_typeInputEnvelope: ["data", "skipDuplicates"],
  ContributionCreateWithoutActivity_typeInput: ["updatedAt", "status", "user", "date_of_submission", "date_of_engagement", "details", "proof", "attestations", "partners", "guilds"],
  ContributionCreateOrConnectWithoutActivity_typeInput: ["where", "create"],
  ContributionCreateManyActivity_typeInputEnvelope: ["data", "skipDuplicates"],
  CategoryActivityUpsertWithoutActivityTypesInput: ["update", "create"],
  CategoryActivityUpdateWithoutActivityTypesInput: ["createdAt", "updatedAt", "name"],
  UserActivityUpsertWithWhereUniqueWithoutActivity_typeInput: ["where", "update", "create"],
  UserActivityUpdateWithWhereUniqueWithoutActivity_typeInput: ["where", "data"],
  UserActivityUpdateManyWithWhereWithoutActivity_typeInput: ["where", "data"],
  ContributionUpsertWithWhereUniqueWithoutActivity_typeInput: ["where", "update", "create"],
  ContributionUpdateWithWhereUniqueWithoutActivity_typeInput: ["where", "data"],
  ContributionUpdateManyWithWhereWithoutActivity_typeInput: ["where", "data"],
  UserCreateWithoutActivitiesInput: ["createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type", "full_name", "attestations", "contributionPartners", "contributions"],
  UserCreateOrConnectWithoutActivitiesInput: ["where", "create"],
  ActivityTypeCreateWithoutUsersInput: ["createdAt", "updatedAt", "name", "active", "category_activity", "contributions"],
  ActivityTypeCreateOrConnectWithoutUsersInput: ["where", "create"],
  UserUpsertWithoutActivitiesInput: ["update", "create"],
  UserUpdateWithoutActivitiesInput: ["createdAt", "updatedAt", "name", "dispaly_name", "address", "chain_type", "full_name", "attestations", "contributionPartners", "contributions"],
  ActivityTypeUpsertWithoutUsersInput: ["update", "create"],
  ActivityTypeUpdateWithoutUsersInput: ["createdAt", "updatedAt", "name", "active", "category_activity", "contributions"],
  ActivityTypeCreateWithoutCategory_activityInput: ["createdAt", "updatedAt", "name", "active", "users", "contributions"],
  ActivityTypeCreateOrConnectWithoutCategory_activityInput: ["where", "create"],
  ActivityTypeCreateManyCategory_activityInputEnvelope: ["data", "skipDuplicates"],
  ActivityTypeUpsertWithWhereUniqueWithoutCategory_activityInput: ["where", "update", "create"],
  ActivityTypeUpdateWithWhereUniqueWithoutCategory_activityInput: ["where", "data"],
  ActivityTypeUpdateManyWithWhereWithoutCategory_activityInput: ["where", "data"],
  ActivityTypeScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "active", "category_activity_id"],
  UserActivityCreateManyUserInput: ["id", "createdAt", "updatedAt", "activity_type_id"],
  AttestationCreateManyUserInput: ["id", "createdAt", "updatedAt", "confidence_id", "contribution_id", "date_of_attestation"],
  PartnerCreateManyUserInput: ["id", "createdAt", "updatedAt", "contribution_id"],
  ContributionCreateManyUserInput: ["id", "updatedAt", "status_id", "activity_type_id", "date_of_submission", "date_of_engagement", "details", "proof"],
  UserActivityUpdateWithoutUserInput: ["createdAt", "updatedAt", "activity_type"],
  AttestationUpdateWithoutUserInput: ["createdAt", "updatedAt", "confidence", "contribution", "date_of_attestation"],
  PartnerUpdateWithoutUserInput: ["createdAt", "updatedAt", "contribution"],
  ContributionUpdateWithoutUserInput: ["updatedAt", "status", "activity_type", "date_of_submission", "date_of_engagement", "details", "proof", "attestations", "partners", "guilds"],
  GuildContributionCreateManyGuildInput: ["id", "createdAt", "updatedAt", "contribution_id"],
  GuildContributionUpdateWithoutGuildInput: ["createdAt", "updatedAt", "contribution"],
  UserCreateManyChain_typeInput: ["id", "createdAt", "updatedAt", "name", "dispaly_name", "address", "full_name"],
  UserUpdateWithoutChain_typeInput: ["createdAt", "updatedAt", "name", "dispaly_name", "address", "full_name", "activities", "attestations", "contributionPartners", "contributions"],
  AttestationCreateManyContributionInput: ["id", "createdAt", "updatedAt", "confidence_id", "user_id", "date_of_attestation"],
  PartnerCreateManyContributionInput: ["id", "createdAt", "updatedAt", "user_id"],
  GuildContributionCreateManyContributionInput: ["id", "createdAt", "updatedAt", "guild_id"],
  AttestationUpdateWithoutContributionInput: ["createdAt", "updatedAt", "confidence", "user", "date_of_attestation"],
  PartnerUpdateWithoutContributionInput: ["createdAt", "updatedAt", "user"],
  GuildContributionUpdateWithoutContributionInput: ["createdAt", "updatedAt", "guild"],
  AttestationCreateManyConfidenceInput: ["id", "createdAt", "updatedAt", "user_id", "contribution_id", "date_of_attestation"],
  AttestationUpdateWithoutConfidenceInput: ["createdAt", "updatedAt", "user", "contribution", "date_of_attestation"],
  ContributionCreateManyStatusInput: ["id", "updatedAt", "activity_type_id", "user_id", "date_of_submission", "date_of_engagement", "details", "proof"],
  ContributionUpdateWithoutStatusInput: ["updatedAt", "activity_type", "user", "date_of_submission", "date_of_engagement", "details", "proof", "attestations", "partners", "guilds"],
  UserActivityCreateManyActivity_typeInput: ["id", "createdAt", "updatedAt", "user_id"],
  ContributionCreateManyActivity_typeInput: ["id", "updatedAt", "status_id", "user_id", "date_of_submission", "date_of_engagement", "details", "proof"],
  UserActivityUpdateWithoutActivity_typeInput: ["createdAt", "updatedAt", "user"],
  ContributionUpdateWithoutActivity_typeInput: ["updatedAt", "status", "user", "date_of_submission", "date_of_engagement", "details", "proof", "attestations", "partners", "guilds"],
  ActivityTypeCreateManyCategory_activityInput: ["id", "createdAt", "updatedAt", "name", "active"],
  ActivityTypeUpdateWithoutCategory_activityInput: ["createdAt", "updatedAt", "name", "active", "users", "contributions"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

