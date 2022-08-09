import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AttestationCreateWithoutUserInput } from '../inputs/AttestationCreateWithoutUserInput';
import { AttestationUpdateWithoutUserInput } from '../inputs/AttestationUpdateWithoutUserInput';
import { AttestationWhereUniqueInput } from '../inputs/AttestationWhereUniqueInput';

@TypeGraphQL.InputType('AttestationUpsertWithWhereUniqueWithoutUserInput', {
  isAbstract: true,
})
export class AttestationUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false,
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: AttestationUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => AttestationCreateWithoutUserInput, {
    nullable: false,
  })
  create!: AttestationCreateWithoutUserInput;
}
