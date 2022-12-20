import * as TypeGraphQL from "type-graphql";
import { TwitterTweet } from "../../../models/TwitterTweet";
import { TwitterUser } from "../../../models/TwitterUser";
import { User } from "../../../models/User";
import { TwitterUserTweetsArgs } from "./args/TwitterUserTweetsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class TwitterUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() twitterUser: TwitterUser, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).twitterUser.findUnique({
      where: {
        id: twitterUser.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [TwitterTweet], {
    nullable: false
  })
  async tweets(@TypeGraphQL.Root() twitterUser: TwitterUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TwitterUserTweetsArgs): Promise<TwitterTweet[]> {
    return getPrismaFromContext(ctx).twitterUser.findUnique({
      where: {
        id: twitterUser.id,
      },
    }).tweets(args);
  }
}
