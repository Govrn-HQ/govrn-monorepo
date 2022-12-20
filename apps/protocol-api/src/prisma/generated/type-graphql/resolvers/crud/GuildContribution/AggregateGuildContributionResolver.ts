import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuildContributionArgs } from "./args/AggregateGuildContributionArgs";
import { GuildContribution } from "../../../models/GuildContribution";
import { AggregateGuildContribution } from "../../outputs/AggregateGuildContribution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildContribution)
export class AggregateGuildContributionResolver {
  @TypeGraphQL.Query(_returns => AggregateGuildContribution, {
    nullable: false
  })
  async aggregateGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildContributionArgs): Promise<AggregateGuildContribution> {
    return getPrismaFromContext(ctx).guildContribution.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
