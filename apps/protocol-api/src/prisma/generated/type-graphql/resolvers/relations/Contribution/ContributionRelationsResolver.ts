import * as TypeGraphQL from "type-graphql";
import { ActivityType } from "../../../models/ActivityType";
import { Attestation } from "../../../models/Attestation";
import { Contribution } from "../../../models/Contribution";
import { ContributionStatus } from "../../../models/ContributionStatus";
import { GuildContribution } from "../../../models/GuildContribution";
import { LinearIssue } from "../../../models/LinearIssue";
import { Partner } from "../../../models/Partner";
import { TwitterTweet } from "../../../models/TwitterTweet";
import { User } from "../../../models/User";
import { ContributionAttestationsArgs } from "./args/ContributionAttestationsArgs";
import { ContributionGuildsArgs } from "./args/ContributionGuildsArgs";
import { ContributionPartnersArgs } from "./args/ContributionPartnersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Contribution)
export class ContributionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ContributionStatus, {
    nullable: false
  })
  async status(@TypeGraphQL.Root() contribution: Contribution, @TypeGraphQL.Ctx() ctx: any): Promise<ContributionStatus> {
    return getPrismaFromContext(ctx).contribution.findUnique({
      where: {
        id: contribution.id,
      },
    }).status({});
  }

  @TypeGraphQL.FieldResolver(_type => ActivityType, {
    nullable: false
  })
  async activity_type(@TypeGraphQL.Root() contribution: Contribution, @TypeGraphQL.Ctx() ctx: any): Promise<ActivityType> {
    return getPrismaFromContext(ctx).contribution.findUnique({
      where: {
        id: contribution.id,
      },
    }).activity_type({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() contribution: Contribution, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).contribution.findUnique({
      where: {
        id: contribution.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [Attestation], {
    nullable: false
  })
  async attestations(@TypeGraphQL.Root() contribution: Contribution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ContributionAttestationsArgs): Promise<Attestation[]> {
    return getPrismaFromContext(ctx).contribution.findUnique({
      where: {
        id: contribution.id,
      },
    }).attestations(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Partner], {
    nullable: false
  })
  async partners(@TypeGraphQL.Root() contribution: Contribution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ContributionPartnersArgs): Promise<Partner[]> {
    return getPrismaFromContext(ctx).contribution.findUnique({
      where: {
        id: contribution.id,
      },
    }).partners(args);
  }

  @TypeGraphQL.FieldResolver(_type => [GuildContribution], {
    nullable: false
  })
  async guilds(@TypeGraphQL.Root() contribution: Contribution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ContributionGuildsArgs): Promise<GuildContribution[]> {
    return getPrismaFromContext(ctx).contribution.findUnique({
      where: {
        id: contribution.id,
      },
    }).guilds(args);
  }

  @TypeGraphQL.FieldResolver(_type => LinearIssue, {
    nullable: true
  })
  async linear_issue(@TypeGraphQL.Root() contribution: Contribution, @TypeGraphQL.Ctx() ctx: any): Promise<LinearIssue | null> {
    return getPrismaFromContext(ctx).contribution.findUnique({
      where: {
        id: contribution.id,
      },
    }).linear_issue({});
  }

  @TypeGraphQL.FieldResolver(_type => TwitterTweet, {
    nullable: true
  })
  async tweet(@TypeGraphQL.Root() contribution: Contribution, @TypeGraphQL.Ctx() ctx: any): Promise<TwitterTweet | null> {
    return getPrismaFromContext(ctx).contribution.findUnique({
      where: {
        id: contribution.id,
      },
    }).tweet({});
  }
}
