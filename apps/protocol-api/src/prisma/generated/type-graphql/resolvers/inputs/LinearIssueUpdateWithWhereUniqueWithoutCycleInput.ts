import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueUpdateWithoutCycleInput } from '../inputs/LinearIssueUpdateWithoutCycleInput';
import { LinearIssueWhereUniqueInput } from '../inputs/LinearIssueWhereUniqueInput';

@TypeGraphQL.InputType('LinearIssueUpdateWithWhereUniqueWithoutCycleInput', {
  isAbstract: true,
})
export class LinearIssueUpdateWithWhereUniqueWithoutCycleInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueUpdateWithoutCycleInput, {
    nullable: false,
  })
  data!: LinearIssueUpdateWithoutCycleInput;
}
