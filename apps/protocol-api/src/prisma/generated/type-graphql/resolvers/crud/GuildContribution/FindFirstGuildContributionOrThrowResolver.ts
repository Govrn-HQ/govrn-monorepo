import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstGuildContributionOrThrowArgs } from "./args/FindFirstGuildContributionOrThrowArgs";
import { GuildContribution } from "../../../models/GuildContribution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildContribution)
export class FindFirstGuildContributionOrThrowResolver {
  @TypeGraphQL.Query(_returns => GuildContribution, {
    nullable: true
  })
  async findFirstGuildContributionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildContributionOrThrowArgs): Promise<GuildContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
