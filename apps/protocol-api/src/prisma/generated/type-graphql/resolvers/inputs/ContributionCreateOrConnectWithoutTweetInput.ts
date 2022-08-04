import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateWithoutTweetInput } from '../inputs/ContributionCreateWithoutTweetInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType('ContributionCreateOrConnectWithoutTweetInput', {
  isAbstract: true,
})
export class ContributionCreateOrConnectWithoutTweetInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false,
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutTweetInput, {
    nullable: false,
  })
  create!: ContributionCreateWithoutTweetInput;
}
