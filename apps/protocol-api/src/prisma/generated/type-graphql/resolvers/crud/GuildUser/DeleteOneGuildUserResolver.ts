import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneGuildUserArgs } from "./args/DeleteOneGuildUserArgs";
import { GuildUser } from "../../../models/GuildUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildUser)
export class DeleteOneGuildUserResolver {
  @TypeGraphQL.Mutation(_returns => GuildUser, {
    nullable: true
  })
  async deleteOneGuildUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGuildUserArgs): Promise<GuildUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildUser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
