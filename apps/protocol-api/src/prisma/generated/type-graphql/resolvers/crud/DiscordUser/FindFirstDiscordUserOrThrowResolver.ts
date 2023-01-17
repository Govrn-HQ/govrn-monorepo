import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDiscordUserOrThrowArgs } from "./args/FindFirstDiscordUserOrThrowArgs";
import { DiscordUser } from "../../../models/DiscordUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class FindFirstDiscordUserOrThrowResolver {
  @TypeGraphQL.Query(_returns => DiscordUser, {
    nullable: true
  })
  async findFirstDiscordUserOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDiscordUserOrThrowArgs): Promise<DiscordUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).discordUser.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
