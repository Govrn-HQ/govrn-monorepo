import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuildVerificationStatusArgs } from "./args/AggregateGuildVerificationStatusArgs";
import { CreateGuildVerificationStatusArgs } from "./args/CreateGuildVerificationStatusArgs";
import { CreateManyGuildVerificationStatusArgs } from "./args/CreateManyGuildVerificationStatusArgs";
import { DeleteGuildVerificationStatusArgs } from "./args/DeleteGuildVerificationStatusArgs";
import { DeleteManyGuildVerificationStatusArgs } from "./args/DeleteManyGuildVerificationStatusArgs";
import { FindFirstGuildVerificationStatusArgs } from "./args/FindFirstGuildVerificationStatusArgs";
import { FindManyGuildVerificationStatusArgs } from "./args/FindManyGuildVerificationStatusArgs";
import { FindUniqueGuildVerificationStatusArgs } from "./args/FindUniqueGuildVerificationStatusArgs";
import { GroupByGuildVerificationStatusArgs } from "./args/GroupByGuildVerificationStatusArgs";
import { UpdateGuildVerificationStatusArgs } from "./args/UpdateGuildVerificationStatusArgs";
import { UpdateManyGuildVerificationStatusArgs } from "./args/UpdateManyGuildVerificationStatusArgs";
import { UpsertGuildVerificationStatusArgs } from "./args/UpsertGuildVerificationStatusArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { GuildVerificationStatus } from "../../../models/GuildVerificationStatus";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGuildVerificationStatus } from "../../outputs/AggregateGuildVerificationStatus";
import { GuildVerificationStatusGroupBy } from "../../outputs/GuildVerificationStatusGroupBy";

@TypeGraphQL.Resolver(_of => GuildVerificationStatus)
export class GuildVerificationStatusCrudResolver {
  @TypeGraphQL.Query(_returns => GuildVerificationStatus, {
    nullable: true
  })
  async guildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildVerificationStatusArgs): Promise<GuildVerificationStatus | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GuildVerificationStatus, {
    nullable: true
  })
  async findFirstGuildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildVerificationStatusArgs): Promise<GuildVerificationStatus | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildVerificationStatus], {
    nullable: false
  })
  async guildVerificationStatuses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGuildVerificationStatusArgs): Promise<GuildVerificationStatus[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildVerificationStatus, {
    nullable: false
  })
  async createGuildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateGuildVerificationStatusArgs): Promise<GuildVerificationStatus> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyGuildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyGuildVerificationStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildVerificationStatus, {
    nullable: true
  })
  async deleteGuildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteGuildVerificationStatusArgs): Promise<GuildVerificationStatus | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildVerificationStatus, {
    nullable: true
  })
  async updateGuildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateGuildVerificationStatusArgs): Promise<GuildVerificationStatus | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyGuildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyGuildVerificationStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyGuildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyGuildVerificationStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildVerificationStatus, {
    nullable: false
  })
  async upsertGuildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertGuildVerificationStatusArgs): Promise<GuildVerificationStatus> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateGuildVerificationStatus, {
    nullable: false
  })
  async aggregateGuildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildVerificationStatusArgs): Promise<AggregateGuildVerificationStatus> {
    return getPrismaFromContext(ctx).guildVerificationStatus.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [GuildVerificationStatusGroupBy], {
    nullable: false
  })
  async groupByGuildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGuildVerificationStatusArgs): Promise<GuildVerificationStatusGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
