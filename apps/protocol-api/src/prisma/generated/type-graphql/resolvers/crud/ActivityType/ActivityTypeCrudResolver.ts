import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateActivityTypeArgs } from './args/AggregateActivityTypeArgs';
import { CreateActivityTypeArgs } from './args/CreateActivityTypeArgs';
import { CreateManyActivityTypeArgs } from './args/CreateManyActivityTypeArgs';
import { DeleteActivityTypeArgs } from './args/DeleteActivityTypeArgs';
import { DeleteManyActivityTypeArgs } from './args/DeleteManyActivityTypeArgs';
import { FindFirstActivityTypeArgs } from './args/FindFirstActivityTypeArgs';
import { FindManyActivityTypeArgs } from './args/FindManyActivityTypeArgs';
import { FindUniqueActivityTypeArgs } from './args/FindUniqueActivityTypeArgs';
import { GroupByActivityTypeArgs } from './args/GroupByActivityTypeArgs';
import { UpdateActivityTypeArgs } from './args/UpdateActivityTypeArgs';
import { UpdateManyActivityTypeArgs } from './args/UpdateManyActivityTypeArgs';
import { UpsertActivityTypeArgs } from './args/UpsertActivityTypeArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { ActivityType } from '../../../models/ActivityType';
import { ActivityTypeGroupBy } from '../../outputs/ActivityTypeGroupBy';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateActivityType } from '../../outputs/AggregateActivityType';

@TypeGraphQL.Resolver(_of => ActivityType)
export class ActivityTypeCrudResolver {
  @TypeGraphQL.Query(_returns => ActivityType, {
    nullable: true,
  })
  async activityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActivityTypeArgs,
  ): Promise<ActivityType | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).activityType.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ActivityType, {
    nullable: true,
  })
  async findFirstActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActivityTypeArgs,
  ): Promise<ActivityType | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).activityType.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ActivityType], {
    nullable: false,
  })
  async activityTypes(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActivityTypeArgs,
  ): Promise<ActivityType[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).activityType.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ActivityType, {
    nullable: false,
  })
  async createActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActivityTypeArgs,
  ): Promise<ActivityType> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).activityType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActivityTypeArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).activityType.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ActivityType, {
    nullable: true,
  })
  async deleteActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActivityTypeArgs,
  ): Promise<ActivityType | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).activityType.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ActivityType, {
    nullable: true,
  })
  async updateActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActivityTypeArgs,
  ): Promise<ActivityType | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).activityType.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActivityTypeArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).activityType.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActivityTypeArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).activityType.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ActivityType, {
    nullable: false,
  })
  async upsertActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActivityTypeArgs,
  ): Promise<ActivityType> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).activityType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateActivityType, {
    nullable: false,
  })
  async aggregateActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActivityTypeArgs,
  ): Promise<AggregateActivityType> {
    return getPrismaFromContext(ctx).activityType.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ActivityTypeGroupBy], {
    nullable: false,
  })
  async groupByActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByActivityTypeArgs,
  ): Promise<ActivityTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).activityType.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
