import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateManyUserInput } from '../inputs/ContributionCreateManyUserInput';

@TypeGraphQL.InputType('ContributionCreateManyUserInputEnvelope', {
  isAbstract: true,
})
export class ContributionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ContributionCreateManyUserInput], {
    nullable: false,
  })
  data!: ContributionCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
