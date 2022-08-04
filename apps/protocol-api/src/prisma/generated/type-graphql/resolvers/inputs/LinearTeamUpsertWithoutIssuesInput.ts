import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearTeamCreateWithoutIssuesInput } from '../inputs/LinearTeamCreateWithoutIssuesInput';
import { LinearTeamUpdateWithoutIssuesInput } from '../inputs/LinearTeamUpdateWithoutIssuesInput';

@TypeGraphQL.InputType('LinearTeamUpsertWithoutIssuesInput', {
  isAbstract: true,
})
export class LinearTeamUpsertWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LinearTeamUpdateWithoutIssuesInput, {
    nullable: false,
  })
  update!: LinearTeamUpdateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => LinearTeamCreateWithoutIssuesInput, {
    nullable: false,
  })
  create!: LinearTeamCreateWithoutIssuesInput;
}
