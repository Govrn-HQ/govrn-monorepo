import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTwitterTweetArgs } from "./args/GroupByTwitterTweetArgs";
import { TwitterTweet } from "../../../models/TwitterTweet";
import { TwitterTweetGroupBy } from "../../outputs/TwitterTweetGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterTweet)
export class GroupByTwitterTweetResolver {
  @TypeGraphQL.Query(_returns => [TwitterTweetGroupBy], {
    nullable: false
  })
  async groupByTwitterTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTwitterTweetArgs): Promise<TwitterTweetGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweet.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
