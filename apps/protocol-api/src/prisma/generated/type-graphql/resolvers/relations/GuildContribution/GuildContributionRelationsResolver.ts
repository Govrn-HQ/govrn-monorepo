import * as TypeGraphQL from "type-graphql";
import { Contribution } from "../../../models/Contribution";
import { Guild } from "../../../models/Guild";
import { GuildContribution } from "../../../models/GuildContribution";
import { GuildContributionVerificationStatus } from "../../../models/GuildContributionVerificationStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildContribution)
export class GuildContributionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Guild, {
    nullable: false
  })
  async guild(@TypeGraphQL.Root() guildContribution: GuildContribution, @TypeGraphQL.Ctx() ctx: any): Promise<Guild> {
    return getPrismaFromContext(ctx).guildContribution.findUnique({
      where: {
        id: guildContribution.id,
      },
    }).guild({});
  }

  @TypeGraphQL.FieldResolver(_type => Contribution, {
    nullable: false
  })
  async contribution(@TypeGraphQL.Root() guildContribution: GuildContribution, @TypeGraphQL.Ctx() ctx: any): Promise<Contribution> {
    return getPrismaFromContext(ctx).guildContribution.findUnique({
      where: {
        id: guildContribution.id,
      },
    }).contribution({});
  }

  @TypeGraphQL.FieldResolver(_type => GuildContributionVerificationStatus, {
    nullable: true
  })
  async verificationStatus(@TypeGraphQL.Root() guildContribution: GuildContribution, @TypeGraphQL.Ctx() ctx: any): Promise<GuildContributionVerificationStatus | null> {
    return getPrismaFromContext(ctx).guildContribution.findUnique({
      where: {
        id: guildContribution.id,
      },
    }).verificationStatus({});
  }
}
