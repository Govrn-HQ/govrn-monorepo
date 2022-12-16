import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneGuildContributionArgs } from "./args/UpdateOneGuildContributionArgs";
import { GuildContribution } from "../../../models/GuildContribution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildContribution)
export class UpdateOneGuildContributionResolver {
  @TypeGraphQL.Mutation(_returns => GuildContribution, {
    nullable: true
  })
  async updateOneGuildContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGuildContributionArgs): Promise<GuildContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContribution.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
