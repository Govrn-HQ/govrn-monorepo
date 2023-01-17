import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueGuildContributionArgs } from "./args/FindUniqueGuildContributionArgs";
import { GuildContribution } from "../../../models/GuildContribution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildContribution)
export class FindUniqueGuildContributionResolver {
  @TypeGraphQL.Query(_returns => GuildContribution, {
    nullable: true
  })
  async guildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildContributionArgs): Promise<GuildContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
