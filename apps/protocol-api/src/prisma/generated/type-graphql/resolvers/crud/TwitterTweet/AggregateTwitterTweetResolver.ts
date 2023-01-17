import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTwitterTweetArgs } from "./args/AggregateTwitterTweetArgs";
import { TwitterTweet } from "../../../models/TwitterTweet";
import { AggregateTwitterTweet } from "../../outputs/AggregateTwitterTweet";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterTweet)
export class AggregateTwitterTweetResolver {
  @TypeGraphQL.Query(_returns => AggregateTwitterTweet, {
    nullable: false
  })
  async aggregateTwitterTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTwitterTweetArgs): Promise<AggregateTwitterTweet> {
    return getPrismaFromContext(ctx).twitterTweet.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
