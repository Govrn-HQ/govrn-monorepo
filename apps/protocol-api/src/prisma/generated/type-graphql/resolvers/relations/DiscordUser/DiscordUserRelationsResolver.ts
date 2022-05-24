import * as TypeGraphQL from "type-graphql";
import { DiscordUser } from "../../../models/DiscordUser";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class DiscordUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() discordUser: DiscordUser, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).discordUser.findUnique({
      where: {
        id: discordUser.id,
      },
    }).user({});
  }
}
