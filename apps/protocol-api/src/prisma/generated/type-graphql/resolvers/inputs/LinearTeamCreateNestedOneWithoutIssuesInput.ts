import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearTeamCreateOrConnectWithoutIssuesInput } from '../inputs/LinearTeamCreateOrConnectWithoutIssuesInput';
import { LinearTeamCreateWithoutIssuesInput } from '../inputs/LinearTeamCreateWithoutIssuesInput';
import { LinearTeamWhereUniqueInput } from '../inputs/LinearTeamWhereUniqueInput';

@TypeGraphQL.InputType('LinearTeamCreateNestedOneWithoutIssuesInput', {
  isAbstract: true,
})
export class LinearTeamCreateNestedOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LinearTeamCreateWithoutIssuesInput, {
    nullable: true,
  })
  create?: LinearTeamCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearTeamCreateOrConnectWithoutIssuesInput, {
    nullable: true,
  })
  connectOrCreate?: LinearTeamCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearTeamWhereUniqueInput, {
    nullable: true,
  })
  connect?: LinearTeamWhereUniqueInput | undefined;
}
