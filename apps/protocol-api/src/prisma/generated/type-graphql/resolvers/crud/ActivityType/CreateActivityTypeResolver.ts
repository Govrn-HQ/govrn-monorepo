import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { CreateActivityTypeArgs } from './args/CreateActivityTypeArgs';
import { ActivityType } from '../../../models/ActivityType';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => ActivityType)
export class CreateActivityTypeResolver {
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
}
