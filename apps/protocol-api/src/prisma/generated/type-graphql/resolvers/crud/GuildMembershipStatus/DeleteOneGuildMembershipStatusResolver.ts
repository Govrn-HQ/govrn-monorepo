import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneGuildMembershipStatusArgs } from "./args/DeleteOneGuildMembershipStatusArgs";
import { GuildMembershipStatus } from "../../../models/GuildMembershipStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildMembershipStatus)
export class DeleteOneGuildMembershipStatusResolver {
  @TypeGraphQL.Mutation(_returns => GuildMembershipStatus, {
    nullable: true
  })
  async deleteOneGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGuildMembershipStatusArgs): Promise<GuildMembershipStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
