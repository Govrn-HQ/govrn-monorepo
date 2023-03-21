import * as TypeGraphQL from "type-graphql";
import { GuildContribution } from "../../../models/GuildContribution";
import { GuildContributionVerificationStatus } from "../../../models/GuildContributionVerificationStatus";
import { GuildContributionVerificationStatusGuild_contributionsArgs } from "./args/GuildContributionVerificationStatusGuild_contributionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildContributionVerificationStatus)
export class GuildContributionVerificationStatusRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [GuildContribution], {
    nullable: false
  })
  async guild_contributions(@TypeGraphQL.Root() guildContributionVerificationStatus: GuildContributionVerificationStatus, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuildContributionVerificationStatusGuild_contributionsArgs): Promise<GuildContribution[]> {
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.findUnique({
      where: {
        id: guildContributionVerificationStatus.id,
      },
    }).guild_contributions(args);
  }
}
