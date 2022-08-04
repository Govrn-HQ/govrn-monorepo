import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateGuildContributionArgs } from './args/AggregateGuildContributionArgs';
import { CreateGuildContributionArgs } from './args/CreateGuildContributionArgs';
import { CreateManyGuildContributionArgs } from './args/CreateManyGuildContributionArgs';
import { DeleteGuildContributionArgs } from './args/DeleteGuildContributionArgs';
import { DeleteManyGuildContributionArgs } from './args/DeleteManyGuildContributionArgs';
import { FindFirstGuildContributionArgs } from './args/FindFirstGuildContributionArgs';
import { FindManyGuildContributionArgs } from './args/FindManyGuildContributionArgs';
import { FindUniqueGuildContributionArgs } from './args/FindUniqueGuildContributionArgs';
import { GroupByGuildContributionArgs } from './args/GroupByGuildContributionArgs';
import { UpdateGuildContributionArgs } from './args/UpdateGuildContributionArgs';
import { UpdateManyGuildContributionArgs } from './args/UpdateManyGuildContributionArgs';
import { UpsertGuildContributionArgs } from './args/UpsertGuildContributionArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { GuildContribution } from '../../../models/GuildContribution';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateGuildContribution } from '../../outputs/AggregateGuildContribution';
import { GuildContributionGroupBy } from '../../outputs/GuildContributionGroupBy';

@TypeGraphQL.Resolver(_of => GuildContribution)
export class GuildContributionCrudResolver {
  @TypeGraphQL.Query(_returns => GuildContribution, {
    nullable: true,
  })
  async guildContribution(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueGuildContributionArgs,
  ): Promise<GuildContribution | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildContribution.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildContribution, {
    nullable: true,
  })
  async findFirstGuildContribution(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstGuildContributionArgs,
  ): Promise<GuildContribution | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildContribution.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildContribution], {
    nullable: false,
  })
  async guildContributions(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyGuildContributionArgs,
  ): Promise<GuildContribution[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildContribution.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildContribution, {
    nullable: false,
  })
  async createGuildContribution(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateGuildContributionArgs,
  ): Promise<GuildContribution> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildContribution.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyGuildContribution(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyGuildContributionArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildContribution.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildContribution, {
    nullable: true,
  })
  async deleteGuildContribution(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteGuildContributionArgs,
  ): Promise<GuildContribution | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildContribution.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildContribution, {
    nullable: true,
  })
  async updateGuildContribution(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateGuildContributionArgs,
  ): Promise<GuildContribution | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildContribution.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyGuildContribution(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyGuildContributionArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildContribution.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyGuildContribution(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyGuildContributionArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildContribution.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildContribution, {
    nullable: false,
  })
  async upsertGuildContribution(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertGuildContributionArgs,
  ): Promise<GuildContribution> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildContribution.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateGuildContribution, {
    nullable: false,
  })
  async aggregateGuildContribution(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateGuildContributionArgs,
  ): Promise<AggregateGuildContribution> {
    return getPrismaFromContext(ctx).guildContribution.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildContributionGroupBy], {
    nullable: false,
  })
  async groupByGuildContribution(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByGuildContributionArgs,
  ): Promise<GuildContributionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).guildContribution.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
