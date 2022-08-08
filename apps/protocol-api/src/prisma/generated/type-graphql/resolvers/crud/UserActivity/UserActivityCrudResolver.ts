import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateUserActivityArgs } from './args/AggregateUserActivityArgs';
import { CreateManyUserActivityArgs } from './args/CreateManyUserActivityArgs';
import { CreateUserActivityArgs } from './args/CreateUserActivityArgs';
import { DeleteManyUserActivityArgs } from './args/DeleteManyUserActivityArgs';
import { DeleteUserActivityArgs } from './args/DeleteUserActivityArgs';
import { FindFirstUserActivityArgs } from './args/FindFirstUserActivityArgs';
import { FindManyUserActivityArgs } from './args/FindManyUserActivityArgs';
import { FindUniqueUserActivityArgs } from './args/FindUniqueUserActivityArgs';
import { GroupByUserActivityArgs } from './args/GroupByUserActivityArgs';
import { UpdateManyUserActivityArgs } from './args/UpdateManyUserActivityArgs';
import { UpdateUserActivityArgs } from './args/UpdateUserActivityArgs';
import { UpsertUserActivityArgs } from './args/UpsertUserActivityArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { UserActivity } from '../../../models/UserActivity';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateUserActivity } from '../../outputs/AggregateUserActivity';
import { UserActivityGroupBy } from '../../outputs/UserActivityGroupBy';

@TypeGraphQL.Resolver(_of => UserActivity)
export class UserActivityCrudResolver {
  @TypeGraphQL.Query(_returns => UserActivity, {
    nullable: true,
  })
  async userActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueUserActivityArgs,
  ): Promise<UserActivity | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).userActivity.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserActivity, {
    nullable: true,
  })
  async findFirstUserActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstUserActivityArgs,
  ): Promise<UserActivity | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).userActivity.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserActivity], {
    nullable: false,
  })
  async userActivities(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyUserActivityArgs,
  ): Promise<UserActivity[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).userActivity.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserActivity, {
    nullable: false,
  })
  async createUserActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateUserActivityArgs,
  ): Promise<UserActivity> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).userActivity.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyUserActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyUserActivityArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).userActivity.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserActivity, {
    nullable: true,
  })
  async deleteUserActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteUserActivityArgs,
  ): Promise<UserActivity | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).userActivity.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserActivity, {
    nullable: true,
  })
  async updateUserActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateUserActivityArgs,
  ): Promise<UserActivity | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).userActivity.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyUserActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyUserActivityArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).userActivity.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyUserActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyUserActivityArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).userActivity.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserActivity, {
    nullable: false,
  })
  async upsertUserActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertUserActivityArgs,
  ): Promise<UserActivity> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).userActivity.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateUserActivity, {
    nullable: false,
  })
  async aggregateUserActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateUserActivityArgs,
  ): Promise<AggregateUserActivity> {
    return getPrismaFromContext(ctx).userActivity.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserActivityGroupBy], {
    nullable: false,
  })
  async groupByUserActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByUserActivityArgs,
  ): Promise<UserActivityGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).userActivity.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
