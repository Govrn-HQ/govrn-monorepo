import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionStatusCreateWithoutContributionsInput } from '../inputs/ContributionStatusCreateWithoutContributionsInput';
import { ContributionStatusUpdateWithoutContributionsInput } from '../inputs/ContributionStatusUpdateWithoutContributionsInput';

@TypeGraphQL.InputType('ContributionStatusUpsertWithoutContributionsInput', {
  isAbstract: true,
})
export class ContributionStatusUpsertWithoutContributionsInput {
  @TypeGraphQL.Field(
    _type => ContributionStatusUpdateWithoutContributionsInput,
    {
      nullable: false,
    },
  )
  update!: ContributionStatusUpdateWithoutContributionsInput;

  @TypeGraphQL.Field(
    _type => ContributionStatusCreateWithoutContributionsInput,
    {
      nullable: false,
    },
  )
  create!: ContributionStatusCreateWithoutContributionsInput;
}
