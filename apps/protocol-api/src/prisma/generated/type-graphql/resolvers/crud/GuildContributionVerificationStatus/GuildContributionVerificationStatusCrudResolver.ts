import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuildContributionVerificationStatusArgs } from "./args/AggregateGuildContributionVerificationStatusArgs";
import { CreateManyGuildContributionVerificationStatusArgs } from "./args/CreateManyGuildContributionVerificationStatusArgs";
import { CreateOneGuildContributionVerificationStatusArgs } from "./args/CreateOneGuildContributionVerificationStatusArgs";
import { DeleteManyGuildContributionVerificationStatusArgs } from "./args/DeleteManyGuildContributionVerificationStatusArgs";
import { DeleteOneGuildContributionVerificationStatusArgs } from "./args/DeleteOneGuildContributionVerificationStatusArgs";
import { FindFirstGuildContributionVerificationStatusArgs } from "./args/FindFirstGuildContributionVerificationStatusArgs";
import { FindFirstGuildContributionVerificationStatusOrThrowArgs } from "./args/FindFirstGuildContributionVerificationStatusOrThrowArgs";
import { FindManyGuildContributionVerificationStatusArgs } from "./args/FindManyGuildContributionVerificationStatusArgs";
import { FindUniqueGuildContributionVerificationStatusArgs } from "./args/FindUniqueGuildContributionVerificationStatusArgs";
import { FindUniqueGuildContributionVerificationStatusOrThrowArgs } from "./args/FindUniqueGuildContributionVerificationStatusOrThrowArgs";
import { GroupByGuildContributionVerificationStatusArgs } from "./args/GroupByGuildContributionVerificationStatusArgs";
import { UpdateManyGuildContributionVerificationStatusArgs } from "./args/UpdateManyGuildContributionVerificationStatusArgs";
import { UpdateOneGuildContributionVerificationStatusArgs } from "./args/UpdateOneGuildContributionVerificationStatusArgs";
import { UpsertOneGuildContributionVerificationStatusArgs } from "./args/UpsertOneGuildContributionVerificationStatusArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { GuildContributionVerificationStatus } from "../../../models/GuildContributionVerificationStatus";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGuildContributionVerificationStatus } from "../../outputs/AggregateGuildContributionVerificationStatus";
import { GuildContributionVerificationStatusGroupBy } from "../../outputs/GuildContributionVerificationStatusGroupBy";

@TypeGraphQL.Resolver(_of => GuildContributionVerificationStatus)
export class GuildContributionVerificationStatusCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateGuildContributionVerificationStatus, {
    nullable: false
  })
  async aggregateGuildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildContributionVerificationStatusArgs): Promise<AggregateGuildContributionVerificationStatus> {
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyGuildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyGuildContributionVerificationStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildContributionVerificationStatus, {
    nullable: false
  })
  async createOneGuildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneGuildContributionVerificationStatusArgs): Promise<GuildContributionVerificationStatus> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyGuildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyGuildContributionVerificationStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildContributionVerificationStatus, {
    nullable: true
  })
  async deleteOneGuildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGuildContributionVerificationStatusArgs): Promise<GuildContributionVerificationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildContributionVerificationStatus, {
    nullable: true
  })
  async findFirstGuildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildContributionVerificationStatusArgs): Promise<GuildContributionVerificationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildContributionVerificationStatus, {
    nullable: true
  })
  async findFirstGuildContributionVerificationStatusOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildContributionVerificationStatusOrThrowArgs): Promise<GuildContributionVerificationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildContributionVerificationStatus], {
    nullable: false
  })
  async guildContributionVerificationStatuses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGuildContributionVerificationStatusArgs): Promise<GuildContributionVerificationStatus[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildContributionVerificationStatus, {
    nullable: true
  })
  async guildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildContributionVerificationStatusArgs): Promise<GuildContributionVerificationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildContributionVerificationStatus, {
    nullable: true
  })
  async getGuildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildContributionVerificationStatusOrThrowArgs): Promise<GuildContributionVerificationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildContributionVerificationStatusGroupBy], {
    nullable: false
  })
  async groupByGuildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGuildContributionVerificationStatusArgs): Promise<GuildContributionVerificationStatusGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyGuildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyGuildContributionVerificationStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildContributionVerificationStatus, {
    nullable: true
  })
  async updateOneGuildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGuildContributionVerificationStatusArgs): Promise<GuildContributionVerificationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildContributionVerificationStatus, {
    nullable: false
  })
  async upsertOneGuildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneGuildContributionVerificationStatusArgs): Promise<GuildContributionVerificationStatus> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
