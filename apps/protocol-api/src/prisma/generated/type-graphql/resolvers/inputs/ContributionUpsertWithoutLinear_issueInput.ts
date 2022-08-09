import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateWithoutLinear_issueInput } from '../inputs/ContributionCreateWithoutLinear_issueInput';
import { ContributionUpdateWithoutLinear_issueInput } from '../inputs/ContributionUpdateWithoutLinear_issueInput';

@TypeGraphQL.InputType('ContributionUpsertWithoutLinear_issueInput', {
  isAbstract: true,
})
export class ContributionUpsertWithoutLinear_issueInput {
  @TypeGraphQL.Field(_type => ContributionUpdateWithoutLinear_issueInput, {
    nullable: false,
  })
  update!: ContributionUpdateWithoutLinear_issueInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutLinear_issueInput, {
    nullable: false,
  })
  create!: ContributionCreateWithoutLinear_issueInput;
}
