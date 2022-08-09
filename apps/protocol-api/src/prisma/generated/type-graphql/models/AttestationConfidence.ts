import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../scalars';
import { Attestation } from '../models/Attestation';
import { AttestationConfidenceCount } from '../resolvers/outputs/AttestationConfidenceCount';

@TypeGraphQL.ObjectType('AttestationConfidence', {
  isAbstract: true,
})
export class AttestationConfidence {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  attestations?: Attestation[];

  @TypeGraphQL.Field(_type => AttestationConfidenceCount, {
    nullable: true,
  })
  _count?: AttestationConfidenceCount | null;
}
