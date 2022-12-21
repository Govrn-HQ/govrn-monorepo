import * as TypeGraphQL from "type-graphql";
import { Guild } from "../../../models/Guild";
import { TwitterAccount } from "../../../models/TwitterAccount";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterAccount)
export class TwitterAccountRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Guild, {
    nullable: true
  })
  async guild(@TypeGraphQL.Root() twitterAccount: TwitterAccount, @TypeGraphQL.Ctx() ctx: any): Promise<Guild | null> {
    return getPrismaFromContext(ctx).twitterAccount.findUnique({
      where: {
        id: twitterAccount.id,
      },
    }).guild({});
  }
}
