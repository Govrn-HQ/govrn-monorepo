import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearUserCreateManyUserInput } from '../inputs/LinearUserCreateManyUserInput';

@TypeGraphQL.InputType('LinearUserCreateManyUserInputEnvelope', {
  isAbstract: true,
})
export class LinearUserCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [LinearUserCreateManyUserInput], {
    nullable: false,
  })
  data!: LinearUserCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
