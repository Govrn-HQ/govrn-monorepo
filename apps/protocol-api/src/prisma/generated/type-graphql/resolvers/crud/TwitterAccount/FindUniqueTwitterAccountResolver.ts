import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { FindUniqueTwitterAccountArgs } from './args/FindUniqueTwitterAccountArgs';
import { TwitterAccount } from '../../../models/TwitterAccount';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => TwitterAccount)
export class FindUniqueTwitterAccountResolver {
  @TypeGraphQL.Query(_returns => TwitterAccount, {
    nullable: true,
  })
  async twitterAccount(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueTwitterAccountArgs,
  ): Promise<TwitterAccount | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterAccount.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
