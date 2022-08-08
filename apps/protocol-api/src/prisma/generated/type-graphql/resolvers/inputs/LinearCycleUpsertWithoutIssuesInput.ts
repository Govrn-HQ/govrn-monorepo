import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearCycleCreateWithoutIssuesInput } from '../inputs/LinearCycleCreateWithoutIssuesInput';
import { LinearCycleUpdateWithoutIssuesInput } from '../inputs/LinearCycleUpdateWithoutIssuesInput';

@TypeGraphQL.InputType('LinearCycleUpsertWithoutIssuesInput', {
  isAbstract: true,
})
export class LinearCycleUpsertWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LinearCycleUpdateWithoutIssuesInput, {
    nullable: false,
  })
  update!: LinearCycleUpdateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => LinearCycleCreateWithoutIssuesInput, {
    nullable: false,
  })
  create!: LinearCycleCreateWithoutIssuesInput;
}
