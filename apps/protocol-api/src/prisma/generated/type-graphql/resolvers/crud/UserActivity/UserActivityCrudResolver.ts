import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserActivityArgs } from "./args/AggregateUserActivityArgs";
import { CreateManyUserActivityArgs } from "./args/CreateManyUserActivityArgs";
import { CreateOneUserActivityArgs } from "./args/CreateOneUserActivityArgs";
import { DeleteManyUserActivityArgs } from "./args/DeleteManyUserActivityArgs";
import { DeleteOneUserActivityArgs } from "./args/DeleteOneUserActivityArgs";
import { FindFirstUserActivityArgs } from "./args/FindFirstUserActivityArgs";
import { FindFirstUserActivityOrThrowArgs } from "./args/FindFirstUserActivityOrThrowArgs";
import { FindManyUserActivityArgs } from "./args/FindManyUserActivityArgs";
import { FindUniqueUserActivityArgs } from "./args/FindUniqueUserActivityArgs";
import { FindUniqueUserActivityOrThrowArgs } from "./args/FindUniqueUserActivityOrThrowArgs";
import { GroupByUserActivityArgs } from "./args/GroupByUserActivityArgs";
import { UpdateManyUserActivityArgs } from "./args/UpdateManyUserActivityArgs";
import { UpdateOneUserActivityArgs } from "./args/UpdateOneUserActivityArgs";
import { UpsertOneUserActivityArgs } from "./args/UpsertOneUserActivityArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { UserActivity } from "../../../models/UserActivity";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUserActivity } from "../../outputs/AggregateUserActivity";
import { UserActivityGroupBy } from "../../outputs/UserActivityGroupBy";

@TypeGraphQL.Resolver(_of => UserActivity)
export class UserActivityCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateUserActivity, {
    nullable: false
  })
  async aggregateUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserActivityArgs): Promise<AggregateUserActivity> {
    return getPrismaFromContext(ctx).userActivity.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUserActivityArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserActivity, {
    nullable: false
  })
  async createOneUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserActivityArgs): Promise<UserActivity> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUserActivityArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserActivity, {
    nullable: true
  })
  async deleteOneUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserActivityArgs): Promise<UserActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserActivity, {
    nullable: true
  })
  async findFirstUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserActivityArgs): Promise<UserActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserActivity, {
    nullable: true
  })
  async findFirstUserActivityOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserActivityOrThrowArgs): Promise<UserActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserActivity], {
    nullable: false
  })
  async userActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserActivityArgs): Promise<UserActivity[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserActivity, {
    nullable: true
  })
  async userActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserActivityArgs): Promise<UserActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserActivity, {
    nullable: true
  })
  async getUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserActivityOrThrowArgs): Promise<UserActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserActivityGroupBy], {
    nullable: false
  })
  async groupByUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserActivityArgs): Promise<UserActivityGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUserActivityArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserActivity, {
    nullable: true
  })
  async updateOneUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUserActivityArgs): Promise<UserActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserActivity, {
    nullable: false
  })
  async upsertOneUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserActivityArgs): Promise<UserActivity> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
