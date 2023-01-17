import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueGuildUserOrThrowArgs } from "./args/FindUniqueGuildUserOrThrowArgs";
import { GuildUser } from "../../../models/GuildUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildUser)
export class FindUniqueGuildUserOrThrowResolver {
  @TypeGraphQL.Query(_returns => GuildUser, {
    nullable: true
  })
  async getGuildUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildUserOrThrowArgs): Promise<GuildUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildUser.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
