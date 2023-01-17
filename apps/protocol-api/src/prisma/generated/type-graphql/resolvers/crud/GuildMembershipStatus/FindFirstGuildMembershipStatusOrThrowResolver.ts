import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstGuildMembershipStatusOrThrowArgs } from "./args/FindFirstGuildMembershipStatusOrThrowArgs";
import { GuildMembershipStatus } from "../../../models/GuildMembershipStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildMembershipStatus)
export class FindFirstGuildMembershipStatusOrThrowResolver {
  @TypeGraphQL.Query(_returns => GuildMembershipStatus, {
    nullable: true
  })
  async findFirstGuildMembershipStatusOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildMembershipStatusOrThrowArgs): Promise<GuildMembershipStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
