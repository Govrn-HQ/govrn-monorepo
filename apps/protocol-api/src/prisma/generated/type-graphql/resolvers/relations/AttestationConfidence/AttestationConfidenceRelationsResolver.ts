import * as TypeGraphQL from 'type-graphql';
import { Attestation } from '../../../models/Attestation';
import { AttestationConfidence } from '../../../models/AttestationConfidence';
import { AttestationConfidenceAttestationsArgs } from './args/AttestationConfidenceAttestationsArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => AttestationConfidence)
export class AttestationConfidenceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Attestation], {
    nullable: false,
  })
  async attestations(
    @TypeGraphQL.Root() attestationConfidence: AttestationConfidence,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: AttestationConfidenceAttestationsArgs,
  ): Promise<Attestation[]> {
    return getPrismaFromContext(ctx)
      .attestationConfidence.findUnique({
        where: {
          id: attestationConfidence.id,
        },
      })
      .attestations(args);
  }
}
