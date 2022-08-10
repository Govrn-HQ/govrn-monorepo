import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { FindManyTwitterUserArgs } from './args/FindManyTwitterUserArgs';
import { TwitterUser } from '../../../models/TwitterUser';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => TwitterUser)
export class FindManyTwitterUserResolver {
  @TypeGraphQL.Query(_returns => [TwitterUser], {
    nullable: false,
  })
  async twitterUsers(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyTwitterUserArgs,
  ): Promise<TwitterUser[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterUser.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
