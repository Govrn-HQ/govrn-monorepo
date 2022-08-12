import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByGuildContributionArgs } from "./args/GroupByGuildContributionArgs";
import { GuildContribution } from "../../../models/GuildContribution";
import { GuildContributionGroupBy } from "../../outputs/GuildContributionGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildContribution)
export class GroupByGuildContributionResolver {
  @TypeGraphQL.Query(_returns => [GuildContributionGroupBy], {
    nullable: false
  })
  async groupByGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGuildContributionArgs): Promise<GuildContributionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildContribution.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
