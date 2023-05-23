import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupByGuildTwitterIntegrationArgs } from "./args/GroupByGuildTwitterIntegrationArgs";
import { GuildTwitterIntegration } from "../../../models/GuildTwitterIntegration";
import { GuildTwitterIntegrationGroupBy } from "../../outputs/GuildTwitterIntegrationGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildTwitterIntegration)
export class GroupByGuildTwitterIntegrationResolver {
  @TypeGraphQL.Query(_returns => [GuildTwitterIntegrationGroupBy], {
    nullable: false
  })
  async groupByGuildTwitterIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGuildTwitterIntegrationArgs): Promise<GuildTwitterIntegrationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildTwitterIntegration.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
