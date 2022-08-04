import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { UpdateManyUserActivityArgs } from './args/UpdateManyUserActivityArgs';
import { UserActivity } from '../../../models/UserActivity';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => UserActivity)
export class UpdateManyUserActivityResolver {
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
}
