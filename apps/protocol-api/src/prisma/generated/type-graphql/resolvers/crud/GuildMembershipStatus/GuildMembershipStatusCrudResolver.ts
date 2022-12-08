import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuildMembershipStatusArgs } from "./args/AggregateGuildMembershipStatusArgs";
import { CreateGuildMembershipStatusArgs } from "./args/CreateGuildMembershipStatusArgs";
import { CreateManyGuildMembershipStatusArgs } from "./args/CreateManyGuildMembershipStatusArgs";
import { DeleteGuildMembershipStatusArgs } from "./args/DeleteGuildMembershipStatusArgs";
import { DeleteManyGuildMembershipStatusArgs } from "./args/DeleteManyGuildMembershipStatusArgs";
import { FindFirstGuildMembershipStatusArgs } from "./args/FindFirstGuildMembershipStatusArgs";
import { FindManyGuildMembershipStatusArgs } from "./args/FindManyGuildMembershipStatusArgs";
import { FindUniqueGuildMembershipStatusArgs } from "./args/FindUniqueGuildMembershipStatusArgs";
import { GroupByGuildMembershipStatusArgs } from "./args/GroupByGuildMembershipStatusArgs";
import { UpdateGuildMembershipStatusArgs } from "./args/UpdateGuildMembershipStatusArgs";
import { UpdateManyGuildMembershipStatusArgs } from "./args/UpdateManyGuildMembershipStatusArgs";
import { UpsertGuildMembershipStatusArgs } from "./args/UpsertGuildMembershipStatusArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { GuildMembershipStatus } from "../../../models/GuildMembershipStatus";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGuildMembershipStatus } from "../../outputs/AggregateGuildMembershipStatus";
import { GuildMembershipStatusGroupBy } from "../../outputs/GuildMembershipStatusGroupBy";

@TypeGraphQL.Resolver(_of => GuildMembershipStatus)
export class GuildMembershipStatusCrudResolver {
  @TypeGraphQL.Query(_returns => GuildMembershipStatus, {
    nullable: true
  })
  async guildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildMembershipStatusArgs): Promise<GuildMembershipStatus | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildMembershipStatus.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildMembershipStatus, {
    nullable: true
  })
  async findFirstGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildMembershipStatusArgs): Promise<GuildMembershipStatus | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildMembershipStatus.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildMembershipStatus], {
    nullable: false
  })
  async guildMembershipStatuses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGuildMembershipStatusArgs): Promise<GuildMembershipStatus[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildMembershipStatus.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildMembershipStatus, {
    nullable: false
  })
  async createGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateGuildMembershipStatusArgs): Promise<GuildMembershipStatus> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildMembershipStatus.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyGuildMembershipStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildMembershipStatus.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildMembershipStatus, {
    nullable: true
  })
  async deleteGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteGuildMembershipStatusArgs): Promise<GuildMembershipStatus | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildMembershipStatus.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildMembershipStatus, {
    nullable: true
  })
  async updateGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateGuildMembershipStatusArgs): Promise<GuildMembershipStatus | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildMembershipStatus.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyGuildMembershipStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildMembershipStatus.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyGuildMembershipStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildMembershipStatus.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildMembershipStatus, {
    nullable: false
  })
  async upsertGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertGuildMembershipStatusArgs): Promise<GuildMembershipStatus> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildMembershipStatus.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateGuildMembershipStatus, {
    nullable: false
  })
  async aggregateGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildMembershipStatusArgs): Promise<AggregateGuildMembershipStatus> {
    return getPrismaFromContext(ctx).guildMembershipStatus.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildMembershipStatusGroupBy], {
    nullable: false
  })
  async groupByGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGuildMembershipStatusArgs): Promise<GuildMembershipStatusGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildMembershipStatus.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
