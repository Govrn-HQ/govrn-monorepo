import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { DeleteTwitterTweetArgs } from './args/DeleteTwitterTweetArgs';
import { TwitterTweet } from '../../../models/TwitterTweet';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => TwitterTweet)
export class DeleteTwitterTweetResolver {
  @TypeGraphQL.Mutation(_returns => TwitterTweet, {
    nullable: true,
  })
  async deleteTwitterTweet(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteTwitterTweetArgs,
  ): Promise<TwitterTweet | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).twitterTweet.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
