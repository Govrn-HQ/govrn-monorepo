import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstGuildContributionArgs } from "./args/FindFirstGuildContributionArgs";
import { GuildContribution } from "../../../models/GuildContribution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildContribution)
export class FindFirstGuildContributionResolver {
  @TypeGraphQL.Query(_returns => GuildContribution, {
    nullable: true
  })
  async findFirstGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildContributionArgs): Promise<GuildContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
