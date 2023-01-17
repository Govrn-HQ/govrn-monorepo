import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByGuildActivityTypeArgs } from "./args/GroupByGuildActivityTypeArgs";
import { GuildActivityType } from "../../../models/GuildActivityType";
import { GuildActivityTypeGroupBy } from "../../outputs/GuildActivityTypeGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildActivityType)
export class GroupByGuildActivityTypeResolver {
  @TypeGraphQL.Query(_returns => [GuildActivityTypeGroupBy], {
    nullable: false
  })
  async groupByGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGuildActivityTypeArgs): Promise<GuildActivityTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildActivityType.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
