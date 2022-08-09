import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AttestationCreateManyUserInput } from '../inputs/AttestationCreateManyUserInput';

@TypeGraphQL.InputType('AttestationCreateManyUserInputEnvelope', {
  isAbstract: true,
})
export class AttestationCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [AttestationCreateManyUserInput], {
    nullable: false,
  })
  data!: AttestationCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
