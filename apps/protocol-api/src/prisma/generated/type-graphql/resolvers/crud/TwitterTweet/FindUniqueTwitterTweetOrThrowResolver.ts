import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTwitterTweetOrThrowArgs } from "./args/FindUniqueTwitterTweetOrThrowArgs";
import { TwitterTweet } from "../../../models/TwitterTweet";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterTweet)
export class FindUniqueTwitterTweetOrThrowResolver {
  @TypeGraphQL.Query(_returns => TwitterTweet, {
    nullable: true
  })
  async getTwitterTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTwitterTweetOrThrowArgs): Promise<TwitterTweet | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweet.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
