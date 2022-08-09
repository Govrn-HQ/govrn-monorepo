import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueCreateWithoutCycleInput } from '../inputs/LinearIssueCreateWithoutCycleInput';
import { LinearIssueUpdateWithoutCycleInput } from '../inputs/LinearIssueUpdateWithoutCycleInput';
import { LinearIssueWhereUniqueInput } from '../inputs/LinearIssueWhereUniqueInput';

@TypeGraphQL.InputType('LinearIssueUpsertWithWhereUniqueWithoutCycleInput', {
  isAbstract: true,
})
export class LinearIssueUpsertWithWhereUniqueWithoutCycleInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueUpdateWithoutCycleInput, {
    nullable: false,
  })
  update!: LinearIssueUpdateWithoutCycleInput;

  @TypeGraphQL.Field(_type => LinearIssueCreateWithoutCycleInput, {
    nullable: false,
  })
  create!: LinearIssueCreateWithoutCycleInput;
}
