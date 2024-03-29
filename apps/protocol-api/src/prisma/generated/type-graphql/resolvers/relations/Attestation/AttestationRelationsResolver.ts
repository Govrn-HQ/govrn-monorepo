import * as TypeGraphQL from "type-graphql";
import { Attestation } from "../../../models/Attestation";
import { AttestationConfidence } from "../../../models/AttestationConfidence";
import { AttestationStatus } from "../../../models/AttestationStatus";
import { Contribution } from "../../../models/Contribution";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Attestation)
export class AttestationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => AttestationConfidence, {
    nullable: true
  })
  async confidence(@TypeGraphQL.Root() attestation: Attestation, @TypeGraphQL.Ctx() ctx: any): Promise<AttestationConfidence | null> {
    return getPrismaFromContext(ctx).attestation.findUnique({
      where: {
        id: attestation.id,
      },
    }).confidence({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() attestation: Attestation, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).attestation.findUnique({
      where: {
        id: attestation.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Contribution, {
    nullable: false
  })
  async contribution(@TypeGraphQL.Root() attestation: Attestation, @TypeGraphQL.Ctx() ctx: any): Promise<Contribution> {
    return getPrismaFromContext(ctx).attestation.findUnique({
      where: {
        id: attestation.id,
      },
    }).contribution({});
  }

  @TypeGraphQL.FieldResolver(_type => AttestationStatus, {
    nullable: true
  })
  async attestation_status(@TypeGraphQL.Root() attestation: Attestation, @TypeGraphQL.Ctx() ctx: any): Promise<AttestationStatus | null> {
    return getPrismaFromContext(ctx).attestation.findUnique({
      where: {
        id: attestation.id,
      },
    }).attestation_status({});
  }
}
