import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuildTwitterIntegrationArgs } from "./args/AggregateGuildTwitterIntegrationArgs";
import { CreateManyGuildTwitterIntegrationArgs } from "./args/CreateManyGuildTwitterIntegrationArgs";
import { CreateOneGuildTwitterIntegrationArgs } from "./args/CreateOneGuildTwitterIntegrationArgs";
import { DeleteManyGuildTwitterIntegrationArgs } from "./args/DeleteManyGuildTwitterIntegrationArgs";
import { DeleteOneGuildTwitterIntegrationArgs } from "./args/DeleteOneGuildTwitterIntegrationArgs";
import { FindFirstGuildTwitterIntegrationArgs } from "./args/FindFirstGuildTwitterIntegrationArgs";
import { FindFirstGuildTwitterIntegrationOrThrowArgs } from "./args/FindFirstGuildTwitterIntegrationOrThrowArgs";
import { FindManyGuildTwitterIntegrationArgs } from "./args/FindManyGuildTwitterIntegrationArgs";
import { FindUniqueGuildTwitterIntegrationArgs } from "./args/FindUniqueGuildTwitterIntegrationArgs";
import { FindUniqueGuildTwitterIntegrationOrThrowArgs } from "./args/FindUniqueGuildTwitterIntegrationOrThrowArgs";
import { GroupByGuildTwitterIntegrationArgs } from "./args/GroupByGuildTwitterIntegrationArgs";
import { UpdateManyGuildTwitterIntegrationArgs } from "./args/UpdateManyGuildTwitterIntegrationArgs";
import { UpdateOneGuildTwitterIntegrationArgs } from "./args/UpdateOneGuildTwitterIntegrationArgs";
import { UpsertOneGuildTwitterIntegrationArgs } from "./args/UpsertOneGuildTwitterIntegrationArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { GuildTwitterIntegration } from "../../../models/GuildTwitterIntegration";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGuildTwitterIntegration } from "../../outputs/AggregateGuildTwitterIntegration";
import { GuildTwitterIntegrationGroupBy } from "../../outputs/GuildTwitterIntegrationGroupBy";

@TypeGraphQL.Resolver(_of => GuildTwitterIntegration)
export class GuildTwitterIntegrationCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateGuildTwitterIntegration, {
    nullable: false
  })
  async aggregateGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildTwitterIntegrationArgs): Promise<AggregateGuildTwitterIntegration> {
    return getPrismaFromContext(ctx).guildTwitterIntegration.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyGuildTwitterIntegrationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildTwitterIntegration, {
    nullable: false
  })
  async createOneGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneGuildTwitterIntegrationArgs): Promise<GuildTwitterIntegration> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyGuildTwitterIntegrationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildTwitterIntegration, {
    nullable: true
  })
  async deleteOneGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGuildTwitterIntegrationArgs): Promise<GuildTwitterIntegration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildTwitterIntegration, {
    nullable: true
  })
  async findFirstGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildTwitterIntegrationArgs): Promise<GuildTwitterIntegration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildTwitterIntegration, {
    nullable: true
  })
  async findFirstGuildTwitterIntegrationOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildTwitterIntegrationOrThrowArgs): Promise<GuildTwitterIntegration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildTwitterIntegration], {
    nullable: false
  })
  async guildTwitterIntegrations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGuildTwitterIntegrationArgs): Promise<GuildTwitterIntegration[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildTwitterIntegration, {
    nullable: true
  })
  async guildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildTwitterIntegrationArgs): Promise<GuildTwitterIntegration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildTwitterIntegration, {
    nullable: true
  })
  async getGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildTwitterIntegrationOrThrowArgs): Promise<GuildTwitterIntegration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildTwitterIntegrationGroupBy], {
    nullable: false
  })
  async groupByGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGuildTwitterIntegrationArgs): Promise<GuildTwitterIntegrationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyGuildTwitterIntegrationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildTwitterIntegration, {
    nullable: true
  })
  async updateOneGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGuildTwitterIntegrationArgs): Promise<GuildTwitterIntegration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildTwitterIntegration, {
    nullable: false
  })
  async upsertOneGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneGuildTwitterIntegrationArgs): Promise<GuildTwitterIntegration> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
