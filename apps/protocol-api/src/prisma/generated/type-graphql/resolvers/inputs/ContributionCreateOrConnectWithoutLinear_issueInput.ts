import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateWithoutLinear_issueInput } from '../inputs/ContributionCreateWithoutLinear_issueInput';
import { ContributionWhereUniqueInput } from '../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.InputType('ContributionCreateOrConnectWithoutLinear_issueInput', {
  isAbstract: true,
})
export class ContributionCreateOrConnectWithoutLinear_issueInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false,
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutLinear_issueInput, {
    nullable: false,
  })
  create!: ContributionCreateWithoutLinear_issueInput;
}
