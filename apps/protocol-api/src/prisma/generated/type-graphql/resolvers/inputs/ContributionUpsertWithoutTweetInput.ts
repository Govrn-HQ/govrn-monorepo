import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateWithoutTweetInput } from '../inputs/ContributionCreateWithoutTweetInput';
import { ContributionUpdateWithoutTweetInput } from '../inputs/ContributionUpdateWithoutTweetInput';

@TypeGraphQL.InputType('ContributionUpsertWithoutTweetInput', {
  isAbstract: true,
})
export class ContributionUpsertWithoutTweetInput {
  @TypeGraphQL.Field(_type => ContributionUpdateWithoutTweetInput, {
    nullable: false,
  })
  update!: ContributionUpdateWithoutTweetInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutTweetInput, {
    nullable: false,
  })
  create!: ContributionCreateWithoutTweetInput;
}
