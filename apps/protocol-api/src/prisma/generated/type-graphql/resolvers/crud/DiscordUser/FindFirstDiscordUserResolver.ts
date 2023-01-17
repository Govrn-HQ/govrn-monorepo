import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDiscordUserArgs } from "./args/FindFirstDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class FindFirstDiscordUserResolver {
  @TypeGraphQL.Query(_returns => DiscordUser, {
    nullable: true
  })
  async findFirstDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDiscordUserArgs): Promise<DiscordUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).discordUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
