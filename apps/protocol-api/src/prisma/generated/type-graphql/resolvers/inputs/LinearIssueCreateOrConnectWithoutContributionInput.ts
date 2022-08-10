import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueCreateWithoutContributionInput } from '../inputs/LinearIssueCreateWithoutContributionInput';
import { LinearIssueWhereUniqueInput } from '../inputs/LinearIssueWhereUniqueInput';

@TypeGraphQL.InputType('LinearIssueCreateOrConnectWithoutContributionInput', {
  isAbstract: true,
})
export class LinearIssueCreateOrConnectWithoutContributionInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueCreateWithoutContributionInput, {
    nullable: false,
  })
  create!: LinearIssueCreateWithoutContributionInput;
}
