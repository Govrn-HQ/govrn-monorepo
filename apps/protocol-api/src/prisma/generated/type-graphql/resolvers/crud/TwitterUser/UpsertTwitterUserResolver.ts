import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { UpsertTwitterUserArgs } from './args/UpsertTwitterUserArgs';
import { TwitterUser } from '../../../models/TwitterUser';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => TwitterUser)
export class UpsertTwitterUserResolver {
  @TypeGraphQL.Mutation(_returns => TwitterUser, {
    nullable: false,
  })
  async upsertTwitterUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertTwitterUserArgs,
  ): Promise<TwitterUser> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterUser.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
