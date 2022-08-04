import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { UpdateManyTwitterUserArgs } from './args/UpdateManyTwitterUserArgs';
import { TwitterUser } from '../../../models/TwitterUser';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => TwitterUser)
export class UpdateManyTwitterUserResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyTwitterUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyTwitterUserArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterUser.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
