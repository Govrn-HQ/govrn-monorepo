import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateManyStatusInput } from '../inputs/ContributionCreateManyStatusInput';

@TypeGraphQL.InputType('ContributionCreateManyStatusInputEnvelope', {
  isAbstract: true,
})
export class ContributionCreateManyStatusInputEnvelope {
  @TypeGraphQL.Field(_type => [ContributionCreateManyStatusInput], {
    nullable: false,
  })
  data!: ContributionCreateManyStatusInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
