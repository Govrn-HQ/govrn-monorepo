import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AttestationConfidenceCreateWithoutAttestationsInput } from '../inputs/AttestationConfidenceCreateWithoutAttestationsInput';
import { AttestationConfidenceUpdateWithoutAttestationsInput } from '../inputs/AttestationConfidenceUpdateWithoutAttestationsInput';

@TypeGraphQL.InputType('AttestationConfidenceUpsertWithoutAttestationsInput', {
  isAbstract: true,
})
export class AttestationConfidenceUpsertWithoutAttestationsInput {
  @TypeGraphQL.Field(
    _type => AttestationConfidenceUpdateWithoutAttestationsInput,
    {
      nullable: false,
    },
  )
  update!: AttestationConfidenceUpdateWithoutAttestationsInput;

  @TypeGraphQL.Field(
    _type => AttestationConfidenceCreateWithoutAttestationsInput,
    {
      nullable: false,
    },
  )
  create!: AttestationConfidenceCreateWithoutAttestationsInput;
}
