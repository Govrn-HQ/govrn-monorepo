import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstGuildUserOrThrowArgs } from "./args/FindFirstGuildUserOrThrowArgs";
import { GuildUser } from "../../../models/GuildUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildUser)
export class FindFirstGuildUserOrThrowResolver {
  @TypeGraphQL.Query(_returns => GuildUser, {
    nullable: true
  })
  async findFirstGuildUserOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildUserOrThrowArgs): Promise<GuildUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildUser.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
