import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGuildContributionArgs } from "./args/AggregateGuildContributionArgs";
import { CreateManyGuildContributionArgs } from "./args/CreateManyGuildContributionArgs";
import { CreateOneGuildContributionArgs } from "./args/CreateOneGuildContributionArgs";
import { DeleteManyGuildContributionArgs } from "./args/DeleteManyGuildContributionArgs";
import { DeleteOneGuildContributionArgs } from "./args/DeleteOneGuildContributionArgs";
import { FindFirstGuildContributionArgs } from "./args/FindFirstGuildContributionArgs";
import { FindFirstGuildContributionOrThrowArgs } from "./args/FindFirstGuildContributionOrThrowArgs";
import { FindManyGuildContributionArgs } from "./args/FindManyGuildContributionArgs";
import { FindUniqueGuildContributionArgs } from "./args/FindUniqueGuildContributionArgs";
import { FindUniqueGuildContributionOrThrowArgs } from "./args/FindUniqueGuildContributionOrThrowArgs";
import { GroupByGuildContributionArgs } from "./args/GroupByGuildContributionArgs";
import { UpdateManyGuildContributionArgs } from "./args/UpdateManyGuildContributionArgs";
import { UpdateOneGuildContributionArgs } from "./args/UpdateOneGuildContributionArgs";
import { UpsertOneGuildContributionArgs } from "./args/UpsertOneGuildContributionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { GuildContribution } from "../../../models/GuildContribution";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGuildContribution } from "../../outputs/AggregateGuildContribution";
import { GuildContributionGroupBy } from "../../outputs/GuildContributionGroupBy";

@TypeGraphQL.Resolver(_of => GuildContribution)
export class GuildContributionCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateGuildContribution, {
    nullable: false
  })
  async aggregateGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildContributionArgs): Promise<AggregateGuildContribution> {
    return getPrismaFromContext(ctx).guildContribution.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyGuildContributionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildContribution, {
    nullable: false
  })
  async createOneGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneGuildContributionArgs): Promise<GuildContribution> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyGuildContributionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildContribution, {
    nullable: true
  })
  async deleteOneGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGuildContributionArgs): Promise<GuildContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildContribution, {
    nullable: true
  })
  async findFirstGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildContributionArgs): Promise<GuildContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildContribution, {
    nullable: true
  })
  async findFirstGuildContributionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildContributionOrThrowArgs): Promise<GuildContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildContribution], {
    nullable: false
  })
  async guildContributions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGuildContributionArgs): Promise<GuildContribution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildContribution, {
    nullable: true
  })
  async guildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildContributionArgs): Promise<GuildContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildContribution, {
    nullable: true
  })
  async getGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildContributionOrThrowArgs): Promise<GuildContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildContributionGroupBy], {
    nullable: false
  })
  async groupByGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGuildContributionArgs): Promise<GuildContributionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyGuildContributionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildContribution, {
    nullable: true
  })
  async updateOneGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGuildContributionArgs): Promise<GuildContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildContribution, {
    nullable: false
  })
  async upsertOneGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneGuildContributionArgs): Promise<GuildContribution> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
