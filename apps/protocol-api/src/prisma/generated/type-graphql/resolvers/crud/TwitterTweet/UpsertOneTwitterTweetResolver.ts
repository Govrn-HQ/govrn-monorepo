import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTwitterTweetArgs } from "./args/UpsertOneTwitterTweetArgs";
import { TwitterTweet } from "../../../models/TwitterTweet";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterTweet)
export class UpsertOneTwitterTweetResolver {
  @TypeGraphQL.Mutation(_returns => TwitterTweet, {
    nullable: false
  })
  async upsertOneTwitterTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTwitterTweetArgs): Promise<TwitterTweet> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweet.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
