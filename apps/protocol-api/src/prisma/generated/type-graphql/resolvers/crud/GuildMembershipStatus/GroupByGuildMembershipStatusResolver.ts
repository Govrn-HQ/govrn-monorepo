import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupByGuildMembershipStatusArgs } from "./args/GroupByGuildMembershipStatusArgs";
import { GuildMembershipStatus } from "../../../models/GuildMembershipStatus";
import { GuildMembershipStatusGroupBy } from "../../outputs/GuildMembershipStatusGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildMembershipStatus)
export class GroupByGuildMembershipStatusResolver {
  @TypeGraphQL.Query(_returns => [GuildMembershipStatusGroupBy], {
    nullable: false
  })
  async groupByGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGuildMembershipStatusArgs): Promise<GuildMembershipStatusGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildMembershipStatus.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
