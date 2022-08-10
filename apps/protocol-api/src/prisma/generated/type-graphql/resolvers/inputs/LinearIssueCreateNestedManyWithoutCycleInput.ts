import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearIssueCreateManyCycleInputEnvelope } from '../inputs/LinearIssueCreateManyCycleInputEnvelope';
import { LinearIssueCreateOrConnectWithoutCycleInput } from '../inputs/LinearIssueCreateOrConnectWithoutCycleInput';
import { LinearIssueCreateWithoutCycleInput } from '../inputs/LinearIssueCreateWithoutCycleInput';
import { LinearIssueWhereUniqueInput } from '../inputs/LinearIssueWhereUniqueInput';

@TypeGraphQL.InputType('LinearIssueCreateNestedManyWithoutCycleInput', {
  isAbstract: true,
})
export class LinearIssueCreateNestedManyWithoutCycleInput {
  @TypeGraphQL.Field(_type => [LinearIssueCreateWithoutCycleInput], {
    nullable: true,
  })
  create?: LinearIssueCreateWithoutCycleInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueCreateOrConnectWithoutCycleInput], {
    nullable: true,
  })
  connectOrCreate?: LinearIssueCreateOrConnectWithoutCycleInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateManyCycleInputEnvelope, {
    nullable: true,
  })
  createMany?: LinearIssueCreateManyCycleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueWhereUniqueInput], {
    nullable: true,
  })
  connect?: LinearIssueWhereUniqueInput[] | undefined;
}
