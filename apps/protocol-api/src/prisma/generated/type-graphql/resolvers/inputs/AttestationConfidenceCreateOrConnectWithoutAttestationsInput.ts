import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AttestationConfidenceCreateWithoutAttestationsInput } from '../inputs/AttestationConfidenceCreateWithoutAttestationsInput';
import { AttestationConfidenceWhereUniqueInput } from '../inputs/AttestationConfidenceWhereUniqueInput';

@TypeGraphQL.InputType(
  'AttestationConfidenceCreateOrConnectWithoutAttestationsInput',
  {
    isAbstract: true,
  },
)
export class AttestationConfidenceCreateOrConnectWithoutAttestationsInput {
  @TypeGraphQL.Field(_type => AttestationConfidenceWhereUniqueInput, {
    nullable: false,
  })
  where!: AttestationConfidenceWhereUniqueInput;

  @TypeGraphQL.Field(
    _type => AttestationConfidenceCreateWithoutAttestationsInput,
    {
      nullable: false,
    },
  )
  create!: AttestationConfidenceCreateWithoutAttestationsInput;
}
