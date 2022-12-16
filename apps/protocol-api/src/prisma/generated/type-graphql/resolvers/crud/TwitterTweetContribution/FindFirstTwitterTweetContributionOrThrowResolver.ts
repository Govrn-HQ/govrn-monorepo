import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstTwitterTweetContributionOrThrowArgs } from "./args/FindFirstTwitterTweetContributionOrThrowArgs";
import { TwitterTweetContribution } from "../../../models/TwitterTweetContribution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterTweetContribution)
export class FindFirstTwitterTweetContributionOrThrowResolver {
  @TypeGraphQL.Query(_returns => TwitterTweetContribution, {
    nullable: true
  })
  async findFirstTwitterTweetContributionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTwitterTweetContributionOrThrowArgs): Promise<TwitterTweetContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
