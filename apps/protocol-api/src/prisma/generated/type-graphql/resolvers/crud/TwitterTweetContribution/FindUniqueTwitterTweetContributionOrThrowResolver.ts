import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTwitterTweetContributionOrThrowArgs } from "./args/FindUniqueTwitterTweetContributionOrThrowArgs";
import { TwitterTweetContribution } from "../../../models/TwitterTweetContribution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterTweetContribution)
export class FindUniqueTwitterTweetContributionOrThrowResolver {
  @TypeGraphQL.Query(_returns => TwitterTweetContribution, {
    nullable: true
  })
  async getTwitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTwitterTweetContributionOrThrowArgs): Promise<TwitterTweetContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
