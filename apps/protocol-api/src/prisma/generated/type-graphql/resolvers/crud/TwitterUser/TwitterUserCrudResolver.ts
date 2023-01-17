import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTwitterUserArgs } from "./args/AggregateTwitterUserArgs";
import { CreateManyTwitterUserArgs } from "./args/CreateManyTwitterUserArgs";
import { CreateOneTwitterUserArgs } from "./args/CreateOneTwitterUserArgs";
import { DeleteManyTwitterUserArgs } from "./args/DeleteManyTwitterUserArgs";
import { DeleteOneTwitterUserArgs } from "./args/DeleteOneTwitterUserArgs";
import { FindFirstTwitterUserArgs } from "./args/FindFirstTwitterUserArgs";
import { FindFirstTwitterUserOrThrowArgs } from "./args/FindFirstTwitterUserOrThrowArgs";
import { FindManyTwitterUserArgs } from "./args/FindManyTwitterUserArgs";
import { FindUniqueTwitterUserArgs } from "./args/FindUniqueTwitterUserArgs";
import { FindUniqueTwitterUserOrThrowArgs } from "./args/FindUniqueTwitterUserOrThrowArgs";
import { GroupByTwitterUserArgs } from "./args/GroupByTwitterUserArgs";
import { UpdateManyTwitterUserArgs } from "./args/UpdateManyTwitterUserArgs";
import { UpdateOneTwitterUserArgs } from "./args/UpdateOneTwitterUserArgs";
import { UpsertOneTwitterUserArgs } from "./args/UpsertOneTwitterUserArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TwitterUser } from "../../../models/TwitterUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTwitterUser } from "../../outputs/AggregateTwitterUser";
import { TwitterUserGroupBy } from "../../outputs/TwitterUserGroupBy";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class TwitterUserCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTwitterUser, {
    nullable: false
  })
  async aggregateTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTwitterUserArgs): Promise<AggregateTwitterUser> {
    return getPrismaFromContext(ctx).twitterUser.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTwitterUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterUser, {
    nullable: false
  })
  async createOneTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTwitterUserArgs): Promise<TwitterUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTwitterUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterUser, {
    nullable: true
  })
  async deleteOneTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTwitterUserArgs): Promise<TwitterUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TwitterUser, {
    nullable: true
  })
  async findFirstTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTwitterUserArgs): Promise<TwitterUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TwitterUser, {
    nullable: true
  })
  async findFirstTwitterUserOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTwitterUserOrThrowArgs): Promise<TwitterUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TwitterUser], {
    nullable: false
  })
  async twitterUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTwitterUserArgs): Promise<TwitterUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TwitterUser, {
    nullable: true
  })
  async twitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTwitterUserArgs): Promise<TwitterUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TwitterUser, {
    nullable: true
  })
  async getTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTwitterUserOrThrowArgs): Promise<TwitterUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TwitterUserGroupBy], {
    nullable: false
  })
  async groupByTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTwitterUserArgs): Promise<TwitterUserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTwitterUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterUser, {
    nullable: true
  })
  async updateOneTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTwitterUserArgs): Promise<TwitterUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TwitterUser, {
    nullable: false
  })
  async upsertOneTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTwitterUserArgs): Promise<TwitterUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
