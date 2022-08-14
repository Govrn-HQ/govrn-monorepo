import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyTwitterTweetArgs } from "./args/FindManyTwitterTweetArgs";
import { TwitterTweet } from "../../../models/TwitterTweet";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterTweet)
export class FindManyTwitterTweetResolver {
  @TypeGraphQL.Query(_returns => [TwitterTweet], {
    nullable: false
  })
  async twitterTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTwitterTweetArgs): Promise<TwitterTweet[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).twitterTweet.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
