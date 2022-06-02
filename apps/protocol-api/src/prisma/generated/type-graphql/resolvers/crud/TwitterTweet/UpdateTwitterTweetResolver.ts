import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateTwitterTweetArgs } from "./args/UpdateTwitterTweetArgs";
import { TwitterTweet } from "../../../models/TwitterTweet";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterTweet)
export class UpdateTwitterTweetResolver {
  @TypeGraphQL.Mutation(_returns => TwitterTweet, {
    nullable: true
  })
  async updateTwitterTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateTwitterTweetArgs): Promise<TwitterTweet | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).twitterTweet.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
