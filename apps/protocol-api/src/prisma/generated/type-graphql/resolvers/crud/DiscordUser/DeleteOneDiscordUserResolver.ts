import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneDiscordUserArgs } from "./args/DeleteOneDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class DeleteOneDiscordUserResolver {
  @TypeGraphQL.Mutation(_returns => DiscordUser, {
    nullable: true
  })
  async deleteOneDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneDiscordUserArgs): Promise<DiscordUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).discordUser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
