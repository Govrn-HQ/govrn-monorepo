import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AttestationConfidenceCreateOrConnectWithoutAttestationsInput } from '../inputs/AttestationConfidenceCreateOrConnectWithoutAttestationsInput';
import { AttestationConfidenceCreateWithoutAttestationsInput } from '../inputs/AttestationConfidenceCreateWithoutAttestationsInput';
import { AttestationConfidenceWhereUniqueInput } from '../inputs/AttestationConfidenceWhereUniqueInput';

@TypeGraphQL.InputType(
  'AttestationConfidenceCreateNestedOneWithoutAttestationsInput',
  {
    isAbstract: true,
  },
)
export class AttestationConfidenceCreateNestedOneWithoutAttestationsInput {
  @TypeGraphQL.Field(
    _type => AttestationConfidenceCreateWithoutAttestationsInput,
    {
      nullable: true,
    },
  )
  create?: AttestationConfidenceCreateWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(
    _type => AttestationConfidenceCreateOrConnectWithoutAttestationsInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | AttestationConfidenceCreateOrConnectWithoutAttestationsInput
    | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceWhereUniqueInput, {
    nullable: true,
  })
  connect?: AttestationConfidenceWhereUniqueInput | undefined;
}
