import * as TypeGraphQL from "type-graphql";
import { Attestation } from "../../../models/Attestation";
import { AttestationStatus } from "../../../models/AttestationStatus";
import { AttestationStatusAttestationArgs } from "./args/AttestationStatusAttestationArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationStatus)
export class AttestationStatusRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Attestation], {
    nullable: false
  })
  async attestation(@TypeGraphQL.Root() attestationStatus: AttestationStatus, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AttestationStatusAttestationArgs): Promise<Attestation[]> {
    return getPrismaFromContext(ctx).attestationStatus.findUnique({
      where: {
        id: attestationStatus.id,
      },
    }).attestation(args);
  }
}
