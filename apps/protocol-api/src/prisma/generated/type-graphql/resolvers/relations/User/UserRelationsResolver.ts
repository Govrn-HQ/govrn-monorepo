import * as TypeGraphQL from "type-graphql";
import { Attestation } from "../../../models/Attestation";
import { ChainType } from "../../../models/ChainType";
import { Contribution } from "../../../models/Contribution";
import { LinearUser } from "../../../models/LinearUser";
import { Partner } from "../../../models/Partner";
import { User } from "../../../models/User";
import { UserActivity } from "../../../models/UserActivity";
import { UserActivitiesArgs } from "./args/UserActivitiesArgs";
import { UserAttestationsArgs } from "./args/UserAttestationsArgs";
import { UserContributionPartnersArgs } from "./args/UserContributionPartnersArgs";
import { UserContributionsArgs } from "./args/UserContributionsArgs";
import { UserLinear_usersArgs } from "./args/UserLinear_usersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ChainType, {
    nullable: false
  })
  async chain_type(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<ChainType> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).chain_type({});
  }

  @TypeGraphQL.FieldResolver(_type => [UserActivity], {
    nullable: false
  })
  async activities(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserActivitiesArgs): Promise<UserActivity[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).activities(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Attestation], {
    nullable: false
  })
  async attestations(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserAttestationsArgs): Promise<Attestation[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).attestations(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Partner], {
    nullable: false
  })
  async contributionPartners(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserContributionPartnersArgs): Promise<Partner[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).contributionPartners(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Contribution], {
    nullable: false
  })
  async contributions(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserContributionsArgs): Promise<Contribution[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).contributions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [LinearUser], {
    nullable: false
  })
  async linear_users(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLinear_usersArgs): Promise<LinearUser[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).linear_users(args);
  }
}
