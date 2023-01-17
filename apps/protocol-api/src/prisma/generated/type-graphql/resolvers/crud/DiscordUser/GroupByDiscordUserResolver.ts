import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByDiscordUserArgs } from "./args/GroupByDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";
import { DiscordUserGroupBy } from "../../outputs/DiscordUserGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class GroupByDiscordUserResolver {
  @TypeGraphQL.Query(_returns => [DiscordUserGroupBy], {
    nullable: false
  })
  async groupByDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDiscordUserArgs): Promise<DiscordUserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).discordUser.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
