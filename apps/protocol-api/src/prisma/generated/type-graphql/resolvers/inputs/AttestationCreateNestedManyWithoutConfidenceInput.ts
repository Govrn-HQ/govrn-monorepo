import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AttestationCreateManyConfidenceInputEnvelope } from '../inputs/AttestationCreateManyConfidenceInputEnvelope';
import { AttestationCreateOrConnectWithoutConfidenceInput } from '../inputs/AttestationCreateOrConnectWithoutConfidenceInput';
import { AttestationCreateWithoutConfidenceInput } from '../inputs/AttestationCreateWithoutConfidenceInput';
import { AttestationWhereUniqueInput } from '../inputs/AttestationWhereUniqueInput';

@TypeGraphQL.InputType('AttestationCreateNestedManyWithoutConfidenceInput', {
  isAbstract: true,
})
export class AttestationCreateNestedManyWithoutConfidenceInput {
  @TypeGraphQL.Field(_type => [AttestationCreateWithoutConfidenceInput], {
    nullable: true,
  })
  create?: AttestationCreateWithoutConfidenceInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [AttestationCreateOrConnectWithoutConfidenceInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | AttestationCreateOrConnectWithoutConfidenceInput[]
    | undefined;

  @TypeGraphQL.Field(_type => AttestationCreateManyConfidenceInputEnvelope, {
    nullable: true,
  })
  createMany?: AttestationCreateManyConfidenceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true,
  })
  connect?: AttestationWhereUniqueInput[] | undefined;
}
