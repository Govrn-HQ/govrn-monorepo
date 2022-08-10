import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueCreateWithoutCycleInput } from '../inputs/LinearIssueCreateWithoutCycleInput';
import { LinearIssueWhereUniqueInput } from '../inputs/LinearIssueWhereUniqueInput';

@TypeGraphQL.InputType('LinearIssueCreateOrConnectWithoutCycleInput', {
  isAbstract: true,
})
export class LinearIssueCreateOrConnectWithoutCycleInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueCreateWithoutCycleInput, {
    nullable: false,
  })
  create!: LinearIssueCreateWithoutCycleInput;
}
