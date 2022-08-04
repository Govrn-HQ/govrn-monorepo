import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueUpdateWithoutAssigneeInput } from '../inputs/LinearIssueUpdateWithoutAssigneeInput';
import { LinearIssueWhereUniqueInput } from '../inputs/LinearIssueWhereUniqueInput';

@TypeGraphQL.InputType('LinearIssueUpdateWithWhereUniqueWithoutAssigneeInput', {
  isAbstract: true,
})
export class LinearIssueUpdateWithWhereUniqueWithoutAssigneeInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueUpdateWithoutAssigneeInput, {
    nullable: false,
  })
  data!: LinearIssueUpdateWithoutAssigneeInput;
}
