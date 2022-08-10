import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearTeamCreateWithoutIssuesInput } from '../inputs/LinearTeamCreateWithoutIssuesInput';
import { LinearTeamWhereUniqueInput } from '../inputs/LinearTeamWhereUniqueInput';

@TypeGraphQL.InputType('LinearTeamCreateOrConnectWithoutIssuesInput', {
  isAbstract: true,
})
export class LinearTeamCreateOrConnectWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LinearTeamWhereUniqueInput, {
    nullable: false,
  })
  where!: LinearTeamWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearTeamCreateWithoutIssuesInput, {
    nullable: false,
  })
  create!: LinearTeamCreateWithoutIssuesInput;
}
