import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { DeleteActivityTypeArgs } from './args/DeleteActivityTypeArgs';
import { ActivityType } from '../../../models/ActivityType';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => ActivityType)
export class DeleteActivityTypeResolver {
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
}
