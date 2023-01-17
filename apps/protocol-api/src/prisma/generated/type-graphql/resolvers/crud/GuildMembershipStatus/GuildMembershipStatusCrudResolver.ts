import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGuildMembershipStatusArgs } from "./args/AggregateGuildMembershipStatusArgs";
import { CreateManyGuildMembershipStatusArgs } from "./args/CreateManyGuildMembershipStatusArgs";
import { CreateOneGuildMembershipStatusArgs } from "./args/CreateOneGuildMembershipStatusArgs";
import { DeleteManyGuildMembershipStatusArgs } from "./args/DeleteManyGuildMembershipStatusArgs";
import { DeleteOneGuildMembershipStatusArgs } from "./args/DeleteOneGuildMembershipStatusArgs";
import { FindFirstGuildMembershipStatusArgs } from "./args/FindFirstGuildMembershipStatusArgs";
import { FindFirstGuildMembershipStatusOrThrowArgs } from "./args/FindFirstGuildMembershipStatusOrThrowArgs";
import { FindManyGuildMembershipStatusArgs } from "./args/FindManyGuildMembershipStatusArgs";
import { FindUniqueGuildMembershipStatusArgs } from "./args/FindUniqueGuildMembershipStatusArgs";
import { FindUniqueGuildMembershipStatusOrThrowArgs } from "./args/FindUniqueGuildMembershipStatusOrThrowArgs";
import { GroupByGuildMembershipStatusArgs } from "./args/GroupByGuildMembershipStatusArgs";
import { UpdateManyGuildMembershipStatusArgs } from "./args/UpdateManyGuildMembershipStatusArgs";
import { UpdateOneGuildMembershipStatusArgs } from "./args/UpdateOneGuildMembershipStatusArgs";
import { UpsertOneGuildMembershipStatusArgs } from "./args/UpsertOneGuildMembershipStatusArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { GuildMembershipStatus } from "../../../models/GuildMembershipStatus";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGuildMembershipStatus } from "../../outputs/AggregateGuildMembershipStatus";
import { GuildMembershipStatusGroupBy } from "../../outputs/GuildMembershipStatusGroupBy";

@TypeGraphQL.Resolver(_of => GuildMembershipStatus)
export class GuildMembershipStatusCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateGuildMembershipStatus, {
    nullable: false
  })
  async aggregateGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildMembershipStatusArgs): Promise<AggregateGuildMembershipStatus> {
    return getPrismaFromContext(ctx).guildMembershipStatus.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyGuildMembershipStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildMembershipStatus, {
    nullable: false
  })
  async createOneGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneGuildMembershipStatusArgs): Promise<GuildMembershipStatus> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyGuildMembershipStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildMembershipStatus, {
    nullable: true
  })
  async deleteOneGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGuildMembershipStatusArgs): Promise<GuildMembershipStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildMembershipStatus, {
    nullable: true
  })
  async findFirstGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildMembershipStatusArgs): Promise<GuildMembershipStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildMembershipStatus, {
    nullable: true
  })
  async findFirstGuildMembershipStatusOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildMembershipStatusOrThrowArgs): Promise<GuildMembershipStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildMembershipStatus], {
    nullable: false
  })
  async guildMembershipStatuses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGuildMembershipStatusArgs): Promise<GuildMembershipStatus[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildMembershipStatus, {
    nullable: true
  })
  async guildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildMembershipStatusArgs): Promise<GuildMembershipStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildMembershipStatus, {
    nullable: true
  })
  async getGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildMembershipStatusOrThrowArgs): Promise<GuildMembershipStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildMembershipStatusGroupBy], {
    nullable: false
  })
  async groupByGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGuildMembershipStatusArgs): Promise<GuildMembershipStatusGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyGuildMembershipStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildMembershipStatus, {
    nullable: true
  })
  async updateOneGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGuildMembershipStatusArgs): Promise<GuildMembershipStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildMembershipStatus, {
    nullable: false
  })
  async upsertOneGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneGuildMembershipStatusArgs): Promise<GuildMembershipStatus> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
