import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueGuildMembershipStatusArgs } from "./args/FindUniqueGuildMembershipStatusArgs";
import { GuildMembershipStatus } from "../../../models/GuildMembershipStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildMembershipStatus)
export class FindUniqueGuildMembershipStatusResolver {
  @TypeGraphQL.Query(_returns => GuildMembershipStatus, {
    nullable: true
  })
  async guildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildMembershipStatusArgs): Promise<GuildMembershipStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
